import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Header />} />           
        </Routes>
        <Routes>
        <Route path="/" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
