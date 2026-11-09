
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#547A9B',
      dark: '#3E617D',
      light: '#A9C1D3',
      contrastText: '#FFFFFF'
    },

    secondary: {
      main: '#303B46'
    },

    background: {
      default: '#F5F6F7',
      paper: '#FFFFFF'
    },

    text: {
      primary: '#303B46',
      secondary: '#687784'
    }
  },

  typography: {
    fontFamily: 'Inter, Arial, sans-serif',

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },

    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },

  shape: {
    borderRadius: 12
  }
})

export default theme
