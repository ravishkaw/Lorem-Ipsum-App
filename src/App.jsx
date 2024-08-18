import { useState } from "react";
import { nanoid } from "nanoid";
import { IoCopyOutline } from "react-icons/io5";

import "./App.css";

import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(text.slice(0, count));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paragraph);
    alert("Copied the text");
  };

  return (
    <section className="container">
      <form className="lorem-form" onSubmit={handleSubmit}>
        <h1 className="title">tired of boring lorem ipsum?</h1>
        <label htmlFor="numberinput" className="form-label">
          Paragraphs :
          <input
            type="number"
            id="numberinput"
            min="1"
            max="8"
            className="form-input"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button type="submit" className="btn gen-btn">
            Generate
          </button>
        </label>
      </form>

      {paragraph.length > 0 && (
        <button className="copy btn" onClick={copyToClipboard}>
          <IoCopyOutline />
        </button>
      )}

      <div className="text-container">
        {paragraph.map((para) => {
          return (
            <p key={nanoid()} className="text">
              {para}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default App;
