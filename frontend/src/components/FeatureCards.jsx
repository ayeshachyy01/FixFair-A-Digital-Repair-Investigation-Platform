
import {
  Box,
  Container,
  Typography,
  Paper,
  Button
} from '@mui/material'

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import RecyclingIcon from '@mui/icons-material/Recycling'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const features = [
  {
    number: '01',
    title: 'Repair Investigation',
    description:
      'Explore possible causes, troubleshooting resources and repair proposals. Compare repairers, parts, charges and warranties before making a decision.',
    icon: <BuildOutlinedIcon />,
    label: 'UNDERSTAND & COMPARE'
  },
  {
    number: '02',
    title: 'DeviceDNA',
    description:
      'Give your phone a digital service history. Keep track of previous repairs, replaced components, warranties and repair outcomes.',
    icon: <FingerprintIcon />,
    label: 'KNOW YOUR DEVICE'
  },
  {
    number: '03',
    title: 'Reboot Marketplace',
    description:
      'Explore opportunities to resell damaged devices, recover reusable components or find parts from other devices.',
    icon: <RecyclingIcon />,
    label: 'REUSE & RECOVER'
  }
]

function FeatureCards() {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#FFFFFF'
      }}
    >
      <Container maxWidth="lg">

        {/* Heading */}
        <Box textAlign="center" mb={7}>
          <Typography
            variant="overline"
            color="primary.main"
            fontWeight={700}
            letterSpacing={2}
          >
            MORE THAN JUST REPAIRS
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
            One platform. A complete device journey.
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: '620px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            FixFair connects repair decisions with device history
            and resource recovery, helping users make better
            decisions throughout a device's lifecycle.
          </Typography>
        </Box>

        {/* Feature cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)'
            },
            gap: 3
          }}
        >
          {features.map((feature) => (
            <Paper
              key={feature.number}
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: 4,
                border: '1px solid #E2E8ED',
                backgroundColor: '#F8FAFB',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 14px 32px rgba(48, 59, 70, 0.08)',
                  borderColor: 'primary.light'
                }
              }}
            >
              {/* Number */}
              <Typography
                variant="overline"
                color="primary.main"
                fontWeight={800}
              >
                {feature.number}
              </Typography>

              {/* Icon */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 3,
                  backgroundColor: '#E5EDF3',
                  color: 'primary.dark',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  my: 3
                }}
              >
                {feature.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
                mb={1.5}
              >
                {feature.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                lineHeight={1.9}
                sx={{ flexGrow: 1 }}
              >
                {feature.description}
              </Typography>

              {/* Label */}
              <Box
                sx={{
                  mt: 3,
                  pt: 2,
                  borderTop: '1px solid #E2E8ED'
                }}
              >
                <Typography
                  variant="caption"
                  color="primary.dark"
                  fontWeight={800}
                  letterSpacing={1}
                >
                  {feature.label}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

      </Container>
    </Box>
  )
}

export default FeatureCards
