import "./App.css";
import { useState, useEffect } from "react";
// import ResetButton from "./components/ResetButton";
// import TextInput from "./components/TextInput";
// import TextDisplay from "./components/TextDisplay";

function App() {
  // const [text, setText] = useState("");

  // cv.json a publicban!!!
  const [json, setJson] = useState();

  const getData = async () => {
    const response = await fetch("cv.json");
    const data = await response.json();
    console.log(data);
    setJson(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="section">
        <h2>Basics</h2>
        <div className="sectionBody">
          {json &&
            Object.keys(json.basics).map((key, index) => (
              <div className="field" key="index">
                <label htmlFor={key}>{key}</label>
                <textarea
                  defaultValue={json.basics[key]}
                  name={key}
                  id={key}
                ></textarea>
              </div>
            ))}
        </div>
      </div>

      {/* <ResetButton onClick={(event) => setText("")} />
      <div className="container">
        <TextInput
          value={text}
          onInput={(event) => setText(event.target.value)}
        />
        <TextDisplay>{text}</TextDisplay> */}
    </div>
  );
}

export default App;
