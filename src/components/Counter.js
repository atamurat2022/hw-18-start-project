import { useDispatch, useSelector } from "react-redux";
import { CalculaterActionTypes } from "../store/calculater/Calculaater";
import classes from "./Counter.module.css";

const Calculater = () => {
  const result = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch();

  const Add = () => {
    dispatch({ type: CalculaterActionTypes.ADD, payload: 5 });
  };
  const Sub = () => {
    dispatch({ type: CalculaterActionTypes.SUBTRACT, payload: 10 });
  };
  const mult = () => {
    dispatch({ type: CalculaterActionTypes.MULT, payload: 2 });
  };
  const divide = () => {
    dispatch({ type: CalculaterActionTypes.DIVIDE, payload: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculater</h1>
      <div className={classes.value}>Result: {result} </div>
      <button onClick={Add}> +5</button>
      <button onClick={Sub}>-10</button>
      <button onClick={mult}>*2</button>
      <button onClick={divide}>/2</button>
    </main>
  );
};

export default Calculater;
