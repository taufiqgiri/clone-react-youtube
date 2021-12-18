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
