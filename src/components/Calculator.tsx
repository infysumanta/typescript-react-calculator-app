import React, { useState } from "react";
import "./Calculator.css";
interface Props {}

interface State {
  expression: string;
  result: string;
}

const Calculator: React.FC<Props> = () => {
  const [value, setValue] = useState<State>({
    expression: "",
    result: "0",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    let expression: string;
    let result: string;
    switch (value) {
      case "AC":
        expression = "";
        result = "0";
        break;
      case "=":
        try {
          expression = value.expression;
          result = String(eval(expression));
        } catch (error) {
          result = "Error";
        }
        break;
      default:
        expression = value.expression + value;
        result = value.result;
        break;
    }
    setValue({ expression, result });
  };
  return (
    <>
      <div>
        <div data-testid="result">{value.result}</div>
        <div>
          <button onClick={handleClick} data-testid="AC" value="AC">
            AC
          </button>
          <button onClick={handleClick} data-testid="+" value="+">
            +
          </button>
          <button onClick={handleClick} data-testid="-" value="-">
            -
          </button>
          <button onClick={handleClick} data-testid="*" value="*">
            *
          </button>
          <button onClick={handleClick} data-testid="/" value="/">
            /
          </button>
          <button onClick={handleClick} data-testid="7" value="7">
            7
          </button>
          <button onClick={handleClick} data-testid="8" value="8">
            8
          </button>
          <button onClick={handleClick} data-testid="9" value="9">
            9
          </button>
          <button onClick={handleClick} data-testid="." value=".">
            .
          </button>
          <button onClick={handleClick} data-testid="=" value="=">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
