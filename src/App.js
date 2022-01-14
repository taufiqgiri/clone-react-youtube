import './App.css';
import RouterApp from './router';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiAppBar: {
      variants: [
        {
          props: {variant: 'navbar'},
          style: {
            backgroundColor: 'transparent'
          }
        }
      ]
    },
    MuiPaper: {
      variants: [
        {
          props: {variant: 'transparent'},
          style: {
            backgroundColor: 'transparent',
            border: '1px solid #575757'
          }
        }
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: {variant: 'title'},
          style: {
            fontSize: '1rem',
            fontWeight: 600,
            verticalAlign: 'center',
            color: 'white'
          }
        },
        {
          props: {variant: 'topic'},
          style: {
            fontSize: '1rem',
            fontWeight: 700,
            verticalAlign: 'center',
            color: '#a3a2a2'
          }
        },
        {
          props: {variant: 'content'},
          style: {
            fontSize: '0.8rem',
            fontWeight: 500,
            verticalAlign: 'center',
            color: '#a3a2a2',
            margin: '0 5px'
          }
        }
      ]
    },
    MuiChip: {
      variants: [
        {
          props: {variant: 'inactive'},
          style: {
            border: '1px solid hsla(0, 0%, 53.3%, 0.4)', 
            color: 'white'
          }
        },
        {
          props: {variant: 'active'},
          style: {
            backgroundColor: 'white'
          }
        }
      ]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
