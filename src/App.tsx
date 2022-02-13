import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from 'providers/ThemeProvider';
import Routes from 'Routes';

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
