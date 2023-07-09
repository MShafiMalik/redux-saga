import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { minus, plus } from "../redux/actions/counterAction";

const Form = () => {
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="form">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter any value..."
      />
      <div className="buttons">
        <button type="button" onClick={() => input && dispatch(minus(input))}>
          Minus
        </button>
        <button type="button" onClick={() => input && dispatch(plus(input))}>
          Plus
        </button>
      </div>
    </div>
  );
};

export default Form;
