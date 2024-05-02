
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './routes/NavBar';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div >
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <Router>
        <NavBar />
        <br></br><br></br><br></br><br></br>
        <LoginComponent />
      </Router>
      
    </div>
  );
}

export default App;
