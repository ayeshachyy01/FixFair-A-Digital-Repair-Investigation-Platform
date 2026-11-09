
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material'

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(245, 246, 247, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E1E6EA',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: '76px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {/* FixFair logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              letterSpacing: '-1px',
              color: 'primary.dark'
            }}
          >
            FixFair<span style={{ color: '#303B46' }}>.</span>
          </Typography>

          {/* Navigation links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 2 }
            }}
          >
            <Button color="inherit" href="#home">
              Home
            </Button>

            <Button color="inherit" href="#workflow">
              How it works
            </Button>

            <Button color="inherit" href="#report">
              Report a problem
            </Button>

            <Button
              variant="contained"
              color="primary"
              href="#report"
              sx={{
                borderRadius: '25px',
                px: 2.5,
                ml: 1
              }}
            >
              Get started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
