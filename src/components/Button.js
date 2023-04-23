const Button = ({ getQuote }) => {
  return (
    <button className="btn" onClick={getQuote}>
      Advice Me!
    </button>
  );
};

export default Button;
