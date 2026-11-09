
import {
  Box,
  Container,
  Typography,
  Paper
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import AutorenewIcon from '@mui/icons-material/Autorenew'

const steps = [
  {
    number: '01',
    title: 'Identify',
    description:
      'Select your phone and describe the problems or symptoms you are experiencing.',
    icon: <SearchIcon />
  },
  {
    number: '02',
    title: 'Investigate',
    description:
      'Explore possible causes, troubleshooting guides and useful repair resources.',
    icon: <ManageSearchIcon />
  },
  {
    number: '03',
    title: 'Compare',
    description:
      'Review repair proposals, costs, parts, warranties and repairer information.',
    icon: <CompareArrowsIcon />
  },
  {
    number: '04',
    title: 'Continue',
    description:
      'Track your repair and explore options to reuse, resell or recover device parts.',
    icon: <AutorenewIcon />
  }
]

function Workflow() {
  return (
    <Box
      id="workflow"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#FFFFFF'
      }}
    >
      <Container maxWidth="lg">

        {/* Section heading */}
        <Box textAlign="center" mb={7}>
          <Typography
            variant="overline"
            color="primary.main"
            fontWeight={700}
            letterSpacing={2}
          >
            THE FIXFAIR JOURNEY
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
            One problem. A clearer path forward.
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.8 }}
          >
            From understanding what's wrong to deciding what
            happens next, FixFair helps you make informed
            decisions about your device.
          </Typography>
        </Box>

        {/* Workflow steps */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(4, 1fr)'
            },
            gap: 3
          }}
        >
          {steps.map((step) => (
            <Paper
              key={step.number}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: '1px solid #E5EAF0',
                backgroundColor: '#F8FAFB',
                transition: 'all 0.25s ease',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(48, 59, 70, 0.08)',
                  borderColor: 'primary.light'
                }
              }}
            >
              {/* Step number */}
              <Typography
                variant="overline"
                color="primary.main"
                fontWeight={800}
              >
                STEP {step.number}
              </Typography>

              {/* Icon */}
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: 3,
                  backgroundColor: '#E5EDF3',
                  color: 'primary.dark',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  my: 3
                }}
              >
                {step.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
                mb={1.5}
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                lineHeight={1.8}
              >
                {step.description}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Possible outcomes */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            backgroundColor: '#E5EDF3',
            textAlign: 'center'
          }}
        >
          <Typography
            fontWeight={700}
            color="text.primary"
            mb={2}
          >
            Your device. Your next decision.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1.5
            }}
          >
            {['Repair', 'Reuse', 'Resell', 'Recover parts', 'Recycle'].map(
              (outcome) => (
                <Box
                  key={outcome}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: '30px',
                    backgroundColor: '#FFFFFF',
                    color: 'primary.dark',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  {outcome}
                </Box>
              )
            )}
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Workflow
