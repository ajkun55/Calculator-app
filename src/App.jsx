import { useEffect, useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import DeleteButton from "./components/DeleteButton";
import Header from "./components/Header";
import EvalButton from "./components/EvalButton";

function App() {
  const [content, setContent] = useState("399,981");

  function append(num) {
    setContent((c) => c + num);
  }

  function reset() {
    setContent("");
  }

  function deleteFunc() {
    if (content === "Error") {
      setContent("");
      return;
    }
    setContent((c) => c.slice(0, -1));
  }

  useEffect(
    function () {
      if (content[0] === "0" && content[1] !== ".") {
        setContent((c) => c.slice(1));
      }
      if (content.length > 5 && content.slice(0, 5) === "Error") {
        setContent((c) => c.slice(5));
      }
    },
    [content],
  );

  function evaluate() {
    try {
      const result = eval(content).toString();
      setContent(result);
    } catch {
      setContent("Error");
    }
  }

  return (
    <div className="mx-auto mt-[90px] w-4/5 max-w-[540px]">
      <Header />
      <div className="screen mb-5 mt-[30px] flex min-h-[130px] items-center justify-end rounded-lg p-[30px] text-5xl">
        {content}
      </div>

      <div className="keyboard mb-20 grid grid-cols-4 gap-3 rounded-lg p-4 md:gap-[25px] md:p-[30px]">
        <Button text={"7"} func={append} />
        <Button text={"8"} func={append} />
        <Button text={"9"} func={append} />
        <DeleteButton text={"DEL"} func={deleteFunc} />
        <Button text={"4"} func={append} />
        <Button text={"5"} func={append} />
        <Button text={"6"} func={append} />
        <Button text={"+"} func={append} />
        <Button text={"1"} func={append} />
        <Button text={"2"} func={append} />
        <Button text={"3"} func={append} />
        <Button text={"-"} func={append} />
        <Button text={"."} func={append} />
        <Button text={"0"} func={append} />
        <Button text={"/"} func={append} />
        <Button text={"x"} func={append} />
        <DeleteButton text={"RESET"} func={reset} />
        <EvalButton text={"="} func={evaluate} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
