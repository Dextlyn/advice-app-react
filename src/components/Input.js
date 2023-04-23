const Input = ({ query, searchQuote, inputHandler }) => {
  return (
    <form onSubmit={searchQuote}>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => inputHandler(e)}
      />
    </form>
  );
};

export default Input;
