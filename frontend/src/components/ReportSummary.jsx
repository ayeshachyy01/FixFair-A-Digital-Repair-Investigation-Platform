
import {
  Box,
  Paper,
  Typography,
  Divider,
  Chip
} from '@mui/material'

import SmartphoneIcon from '@mui/icons-material/Smartphone'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function ReportSummary({ report }) {

  // don't display anything before a report is submitted
  if (!report) {
    return null
  }

  return (
    <Box
      id="report-summary"
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: 'background.default'
      }}
    >
      <Box
        sx={{
          maxWidth: '850px',
          mx: 'auto',
          px: { xs: 2, sm: 3 }
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: 4,
            border: '1px solid #DCE5EC',
            backgroundColor: '#FFFFFF'
          }}
        >

          {/* Report heading */}
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            mb={3}
          >
            <CheckCircleOutlineIcon
              color="success"
              sx={{ fontSize: 30 }}
            />

            <Box>
              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
              >
                Your report is ready
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Here's a summary of the information you provided.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Device information */}
          <Box mb={3}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <SmartphoneIcon color="primary" />

              <Typography fontWeight={700} color="text.primary">
                Your device
              </Typography>
            </Box>

            <Typography color="text.secondary">
              {report.brand} {report.model}
            </Typography>
          </Box>

          {/* Problem category */}
          <Box mb={3}>
            <Typography fontWeight={700} color="text.primary" mb={1}>
              Problem category
            </Typography>

            <Chip
              label={report.category}
              color="primary"
              variant="outlined"
              size="small"
            />
          </Box>

          {/* Selected problems */}
          <Box mb={3}>
            <Typography fontWeight={700} color="text.primary" mb={1}>
              Reported problems
            </Typography>

            {report.problems.length > 0 ? (
              <Box display="flex" flexWrap="wrap" gap={1}>
                {report.problems.map((problem, index) => (
                  <Chip
                    key={index}
                    label={problem}
                    sx={{
                      backgroundColor: '#E5EDF3',
                      color: '#3E617D'
                    }}
                  />
                ))}
              </Box>
            ) : (
              <Typography color="text.secondary">
                No predefined problems selected.
              </Typography>
            )}
          </Box>

          {/* Additional description */}
          {report.description && (
            <Box mb={3}>
              <Typography fontWeight={700} color="text.primary" mb={1}>
                Additional details
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.8, whiteSpace: 'pre-wrap' }}
              >
                {report.description}
              </Typography>
            </Box>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Disclaimer */}
          <Box
            display="flex"
            alignItems="flex-start"
            gap={1.5}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: '#F5F6F7'
            }}
          >
            <InfoOutlinedIcon color="primary" />

            <Typography
              variant="body2"
              color="text.secondary"
              lineHeight={1.7}
            >
              This summary contains the information you reported.
              It is not a confirmed diagnosis or a saved repair record.
              Further investigation and repair proposals will be part
              of the upcoming FixFair features.
            </Typography>
          </Box>

        </Paper>
      </Box>
    </Box>
  )
}

export default ReportSummary
