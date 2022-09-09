import logo from "./logo.svg";
import "./App.css";
import AdviceComp from "./components/AdviceComp";
import ImageSaint from "./components/ImageSaint";

function App() {
  const st = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(220, 220, 220, 0.5)",
  };
  return (
    <div className="App">
      <div style={st}>
        <AdviceComp />
      </div>
    </div>
  );
}

export default App;
