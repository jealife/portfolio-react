import "./App.css";
import Main from "./components/content/Main";
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div className="App">
      <main className="bg-[#ecf0f3] text-slate-50 flex flex-col items-center gap-12">
          <Hero/>
          <Main/>
      </main>
    </div>
  );
}

export default App;
