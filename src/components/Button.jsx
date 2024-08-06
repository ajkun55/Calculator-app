function Button({ text, func }) {
  return (
    <button className="normal-btn btn" onClick={() => func(text)}>
      {text}
    </button>
  );
}

export default Button;
