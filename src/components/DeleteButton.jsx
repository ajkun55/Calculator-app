function DeleteButton({ text, func }) {
  return (
    <button
      className={`del-btn btn ${text === "RESET" ? "col-span-2" : ""}`}
      onClick={() => func()}
    >
      {text}
    </button>
  );
}

export default DeleteButton;
