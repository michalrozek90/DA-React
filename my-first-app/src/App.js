import "./index.css";
import MyName from "./MyName";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [title, setTitle] = useState("Pierwszy tytuł strony");

  const initialRender = useRef(true);

  useEffect(() => {
    initialRender.current
      ? (initialRender.current = false)
      : alert("Teraz był efekt!!");
  }, [title]);

  return (
    <div className="App">
      <MyName name="Michał" />
      <button onClick={() => setTitle("Drugi tytuł strony")}>
        Zmień tytuł
      </button>
      <button onClick={() => setTitle("Trzeci tytuł strony")}>
        Zmień tytuł ponownie
      </button>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
