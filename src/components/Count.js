import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/actions/counterAction";

import minus from "./../minus.svg";
import plus from "./../plus.svg";

const Count = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counterReducer);

  return (
    <div className="inner">
      <button type="button" onClick={() => dispatch(decrease())}>
        <img src={minus} alt="minus" />
      </button>
      <p>{counterValue}</p>
      <button type="button" onClick={() => dispatch(increase())}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default Count;
