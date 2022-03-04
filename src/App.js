
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./docker-logo.png' className="logo" alt="docker logo" />
        <img src='./heroku-logo.png' className="logo" alt="heroku logo" />
        <p>
          I deployed a dockerized app on Heroku!
        </p>
        <a
          className="App-link"
          href="https://github.com/emilylubkert/deploy-a-dockerized-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the code on Github
        </a>
      </header>
    </div>
  );
}

export default App;
