function EvalButton({ text, func }) {
  return (
    <button className="eval-btn btn col-span-2" onClick={() => func()}>
      {text}
    </button>
  );
}

export default EvalButton;
