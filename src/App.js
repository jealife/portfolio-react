import "./App.css";
import Main from "./components/content/Main";
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div className="App">
      <main className="main">
          <Hero/>
          <Main/>
      </main>
    </div>
  );
}

export default App;
