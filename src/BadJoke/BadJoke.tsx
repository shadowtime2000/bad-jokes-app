import React, {useState} from 'react';
import axios from 'axios';
import './BadJoke.css';

function BadJoke(props: any) {
  const [joke, setJoke] = useState("Click the joke button to find a joke!");

  const getJoke = async () => setJoke(await axios.get("https://icanhazdadjoke.com/", {headers: {"Accept": "text/plain"}}).then(res => res.data));

  const copyToClipboard = () => navigator.clipboard.writeText(joke);

  return (
    <div className="bad-joke-finder">
      <div className="joke" onClick={copyToClipboard}>{joke}</div>
      <span className="joke-button" onClick={getJoke}>Joke!</span><br/>
    </div>
  )
}

export default BadJoke;
