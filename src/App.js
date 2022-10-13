import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv"/>
        <footer>
          This project was coded by Ira Bartosh and is{" "}
          <a href="https://github.com/irenneri/weather-react-app" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

