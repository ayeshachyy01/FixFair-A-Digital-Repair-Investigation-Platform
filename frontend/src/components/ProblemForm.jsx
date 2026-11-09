
import { useEffect, useState } from 'react'

import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
  Alert,
  CircularProgress
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function ProblemForm({ onReportSubmit }) {

  // form values
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [problems, setProblems] = useState([])

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [category, setCategory] = useState('Both')
  const [selectedProblems, setSelectedProblems] = useState([])
  const [description, setDescription] = useState('')

  // loading and message states
  const [loadingBrands, setLoadingBrands] = useState(true)
  const [loadingModels, setLoadingModels] = useState(false)
  const [loadingProblems, setLoadingProblems] = useState(true)
  const [message, setMessage] = useState('')

  // load phone brands when the component opens
  useEffect(() => {
    async function loadBrands() {
      try {
        const response = await fetch('/api/brands')

        if (!response.ok) {
          throw new Error('Could not load phone brands.')
        }

        const data = await response.json()
        setBrands(data)

      } catch (error) {
        setMessage('Could not load phone brands. Make sure the Flask server is running.')

      } finally {
        setLoadingBrands(false)
      }
    }

    loadBrands()
  }, [])

  // load phone models when the selected brand changes
  useEffect(() => {
    async function loadModels() {
      if (!brand) {
        setModels([])
        setModel('')
        return
      }

      setLoadingModels(true)
      setModels([])
      setModel('')

      try {
        const response = await fetch(`/api/models/${brand}`)

        if (!response.ok) {
          throw new Error('Could not load phone models.')
        }

        const data = await response.json()
        setModels(data)

      } catch (error) {
        setMessage('Could not load models for this brand.')

      } finally {
        setLoadingModels(false)
      }
    }

    loadModels()
  }, [brand])

  // load problems when the selected category changes
  useEffect(() => {
    async function loadProblems() {
      setLoadingProblems(true)

      try {
        const response = await fetch(
          `/api/problems?category=${encodeURIComponent(category)}`
        )

        if (!response.ok) {
          throw new Error('Could not load phone problems.')
        }

        const data = await response.json()
        setProblems(data)
        setSelectedProblems([])

      } catch (error) {
        setMessage('Could not load the problem list.')

      } finally {
        setLoadingProblems(false)
      }
    }

    loadProblems()
  }, [category])

  // submit the phone problem report
  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')

    if (!brand || !model) {
      setMessage('Please select your phone brand and model.')
      return
    }

    if (selectedProblems.length === 0 && description.trim() === '') {
      setMessage('Please select a problem or describe your symptoms.')
      return
    }

    const brandName = brands.find(
      (item) => String(item.id) === brand
    )?.name

    const modelName = models.find(
      (item) => String(item.id) === model
    )?.model_name

    const report = {
      brand: brandName,
      model: modelName,
      category: category,
      problems: problems
        .filter((item) => selectedProblems.includes(item.id))
        .map((item) => item.problem_name),
      description: description.trim()
    }

    onReportSubmit(report)
  }

  return (
    <Box
      id="report"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="md">

        {/* Section heading */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            color="primary.main"
            fontWeight={700}
            letterSpacing={2}
          >
            START YOUR INVESTIGATION
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.7rem' },
              color: 'text.primary',
              mt: 1,
              mb: 2
            }}
          >
            What's going on with your phone?
          </Typography>

          <Typography color="text.secondary" lineHeight={1.8}>
            Tell us about your device and the symptoms you're
            experiencing. Let's start by understanding the problem.
          </Typography>
        </Box>

        {/* Problem report form */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 4, md: 5 },
            borderRadius: 4,
            border: '1px solid #E2E8ED',
            backgroundColor: '#FFFFFF'
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >

            {/* Brand */}
            <TextField
              select
              fullWidth
              label="Phone brand"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
              disabled={loadingBrands}
            >
              {loadingBrands ? (
                <MenuItem disabled>Loading brands...</MenuItem>
              ) : (
                brands.map((item) => (
                  <MenuItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </MenuItem>
                ))
              )}
            </TextField>

            {/* Model */}
            <TextField
              select
              fullWidth
              label="Phone model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
              disabled={!brand || loadingModels || models.length === 0}
            >
              {loadingModels ? (
                <MenuItem disabled>Loading models...</MenuItem>
              ) : models.length === 0 ? (
                <MenuItem disabled>
                  {brand ? 'No models available' : 'Select a brand first'}
                </MenuItem>
              ) : (
                models.map((item) => (
                  <MenuItem key={item.id} value={String(item.id)}>
                    {item.model_name}
                  </MenuItem>
                ))
              )}
            </TextField>

            {/* Problem category */}
            <TextField
              select
              fullWidth
              label="Problem category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value="Both">All problems</MenuItem>
              <MenuItem value="Hardware">Hardware</MenuItem>
              <MenuItem value="Software">Software</MenuItem>
            </TextField>

            {/* Multiple problem selection */}
            <FormControl fullWidth>
              <InputLabel>What problems are you experiencing?</InputLabel>

              <Select
                multiple
                value={selectedProblems}
                onChange={(event) => {
                  setSelectedProblems(event.target.value)
                }}
                input={
                  <OutlinedInput label="What problems are you experiencing?" />
                }
                renderValue={(selected) =>
                  problems
                    .filter((item) => selected.includes(item.id))
                    .map((item) => item.problem_name)
                    .join(', ')
                }
                disabled={loadingProblems || problems.length === 0}
              >
                {problems.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    <Checkbox
                      checked={selectedProblems.includes(item.id)}
                    />

                    <ListItemText primary={item.problem_name} />
                  </MenuItem>
                ))}
              </Select>

              {loadingProblems && (
                <Box mt={1}>
                  <CircularProgress size={18} />
                </Box>
              )}
            </FormControl>

            {/* Additional description */}
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Additional symptoms or details (optional)"
              placeholder="Describe what happens when you use your phone..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            {/* Error messages */}
            {message && (
              <Alert
                severity="warning"
                onClose={() => setMessage('')}
              >
                {message}
              </Alert>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.6,
                borderRadius: '30px',
                alignSelf: { xs: 'stretch', sm: 'flex-start' },
                px: 4
              }}
            >
              Review my report
            </Button>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              FixFair uses your reported information to begin an
              investigation. It is not a confirmed technical diagnosis.
            </Typography>

          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ProblemForm
