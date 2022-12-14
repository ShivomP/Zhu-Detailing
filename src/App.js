import About from "./components/About";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
