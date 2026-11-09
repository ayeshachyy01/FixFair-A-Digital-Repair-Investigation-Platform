
import {
  Box,
  Button,
  Container,
  Typography,
  Paper
} from '@mui/material'

import SmartphoneIcon from '@mui/icons-material/Smartphone'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RecyclingIcon from '@mui/icons-material/Recycling'

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 7, md: 12 },
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 }
          }}
        >
          {/* Left side - Hero text */}
          <Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: '30px',
                backgroundColor: '#E5EDF3',
                color: 'primary.dark',
                mb: 3
              }}
            >
              <AutoAwesomeIcon fontSize="small" />

              <Typography variant="body2" fontWeight={600}>
                SMART DEVICE CARE PLATFORM
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.7rem', md: '3.8rem' },
                lineHeight: 1.15,
                letterSpacing: '-2px',
                color: 'text.primary',
                mb: 3
              }}
            >
              Your device deserves a
              <Box component="span" color="primary.main">
                {' '}second chance.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.08rem',
                lineHeight: 1.9,
                maxWidth: '520px',
                mb: 4
              }}
            >
              Understand what's wrong with your phone, explore
              possible solutions, compare repair proposals and
              discover smarter ways to reuse, recover or recycle
              your device.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap'
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#report"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '30px'
                }}
              >
                Investigate your device
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="#workflow"
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '30px'
                }}
              >
                Explore how it works
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mt: 4,
                color: 'text.secondary'
              }}
            >
              <RecyclingIcon color="primary" />

              <Typography variant="body2">
                Repair smarter. Waste less.
              </Typography>
            </Box>
          </Box>

          {/* Right side - Phone illustration */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              minHeight: { xs: '430px', md: '500px' }
            }}
          >
            {/* Background decoration */}
            <Box
              sx={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                backgroundColor: '#E5EDF3',
                filter: 'blur(2px)'
              }}
            />

            {/* Phone */}
            <Paper
              elevation={8}
              sx={{
                position: 'relative',
                zIndex: 1,
                width: '230px',
                height: '420px',
                borderRadius: '36px',
                border: '7px solid #303B46',
                backgroundColor: '#FFFFFF',
                p: 2.5,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  width: '65px',
                  height: '7px',
                  borderRadius: '10px',
                  backgroundColor: '#303B46',
                  mx: 'auto',
                  mb: 3
                }}
              />

              <Typography
                variant="caption"
                fontWeight={800}
                color="primary.dark"
                letterSpacing={1}
              >
                FIXFAIR / DEVICE CHECK
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  my: 4
                }}
              >
                <Box
                  sx={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    backgroundColor: '#E5EDF3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <SmartphoneIcon
                    sx={{
                      fontSize: 65,
                      color: 'primary.main'
                    }}
                  />
                </Box>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={600}
              >
                DEVICE STATUS
              </Typography>

              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
                sx={{ mt: 1 }}
              >
                Let's figure it out.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, lineHeight: 1.6 }}
              >
                Every problem has a next step.
              </Typography>

              <Box
                sx={{
                  mt: 'auto',
                  height: '6px',
                  borderRadius: '10px',
                  backgroundColor: '#E5EDF3'
                }}
              >
                <Box
                  sx={{
                    width: '65%',
                    height: '100%',
                    borderRadius: '10px',
                    backgroundColor: 'primary.main'
                  }}
                />
              </Box>
            </Paper>

            {/* Floating card */}
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                zIndex: 2,
                top: '65px',
                right: { xs: 0, sm: 10 },
                p: 2,
                borderRadius: 3
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
              >
                INVESTIGATE
              </Typography>

              <Typography fontWeight={700} color="text.primary">
                Know your options
              </Typography>
            </Paper>

            {/* Second floating card */}
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                zIndex: 2,
                bottom: '65px',
                left: { xs: 0, sm: 5 },
                p: 2,
                borderRadius: 3
              }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <RecyclingIcon color="primary" />

                <Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    GIVE IT ANOTHER LIFE
                  </Typography>

                  <Typography fontWeight={700} color="text.primary">
                    Repair · Reuse · Recover
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
