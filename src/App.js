import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Reviews } from "./components/Reviews";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />}/>
          <Route path="/:name" element={<Reviews />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
