import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="card_container">
        <div style={{ width: "30%", padding: '1rem' }}>
          <h1>Why the industry chooses clickdee</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a 
          </p>
        </div>
        <Card heading={"Heading"} desc={"This is desc"} />
        <Card heading={"Heading"} desc={"This is desc"} />
        <Card heading={"Heading"} desc={"This is desc"} />
        <Card heading={"Heading"} desc={"This is desc"} />
        <Card heading={"Heading"} desc={"This is desc"} />
      </div>
    </div>
  );
}

export default App;
