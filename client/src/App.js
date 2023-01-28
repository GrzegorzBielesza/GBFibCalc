import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 3
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div> */}

        <div class="full-page">
          <div class="navbar">
            <div>
              <h1>GBMultiFIb</h1>
            </div>
            <nav>
              <ul id='MenuItems'>
                  <li><a href='https://github.com/GrzegorzBielesza/GBFibCalc'>Github</a></li>
                  <li><a href='https://hub.docker.com/repository/docker/gbielesza/lab'>Dockerhub</a></li>
              </ul>
            </nav>
          </div>

            <div class="form-box">
              <div class='button-box'>
                    <Link to="/"><button type='button' class='btn-left'>Fibonacci</button></Link>
                    <Link to="/otherpage"><button type='button' class='btn-right'>Author</button></Link>
              </div>
              <form id='login' class='input-group-login'>
                  <div class='input-group-login'>
                  <Route exact path="/" component={Fib} />
                    <Route path="/otherpage" component={OtherPage} />
              </div>
              </form>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
