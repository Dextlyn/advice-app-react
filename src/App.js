import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { useEffect } from 'react';
import Input from './components/Input';

function App() {
  const [query, setQuery] = useState('');
  const [quote, setQuote] = useState('');
  const [search, setSearch] = useState([]);

  const getQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((json) => {
        setQuote(json.slip.advice);
        setSearch([]);
      });
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const searchQuote = (e) => {
    e.preventDefault();
    fetch(`https://api.adviceslip.com/advice/search/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.slips);
      });
    setQuery('');
  };

  useEffect(() => {
    getQuote();
  }, [quote]);

  return (
    <div className="container">
      <div className="quote-container">
        <Input
          query={query}
          searchQuote={searchQuote}
          inputHandler={inputHandler}
        />
        {search.length === 0
          ? quote
          : search.map((text) => <p key={text.id}>{text.advice}</p>)}
        <Button getQuote={getQuote} />
      </div>
    </div>
  );
}

export default App;
