
import {
  Box,
  Container,
  Typography,
  Link
} from '@mui/material'

import SmartphoneIcon from '@mui/icons-material/Smartphone'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#303B46',
        color: '#FFFFFF',
        py: 5
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 3
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h5"
              fontWeight={800}
              letterSpacing={-1}
              mb={1}
            >
              FixFair<span style={{ color: '#A9C1D3' }}>.</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#C3CDD5',
                maxWidth: '340px',
                lineHeight: 1.8
              }}
            >
              Understand the problem. Investigate the repair.
              Give devices a second life.
            </Typography>
          </Box>

          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              gap: 2.5,
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <Link
              href="#home"
              underline="none"
              sx={{ color: '#FFFFFF', '&:hover': { color: '#A9C1D3' } }}
            >
              Home
            </Link>

            <Link
              href="#workflow"
              underline="none"
              sx={{ color: '#FFFFFF', '&:hover': { color: '#A9C1D3' } }}
            >
              How it works
            </Link>

            <Link
              href="#report"
              underline="none"
              sx={{ color: '#FFFFFF', '&:hover': { color: '#A9C1D3' } }}
            >
              Report a problem
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid #53616D',
            mt: 4,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography variant="caption" sx={{ color: '#C3CDD5' }}>
            © {new Date().getFullYear()} FixFair. All rights reserved.
          </Typography>

          <Box
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#A9C1D3',
              textDecoration: 'none',
              fontSize: '0.85rem'
            }}
          >
            Back to top
            <ArrowUpwardIcon fontSize="small" />
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer
