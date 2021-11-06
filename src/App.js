/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.css";
import data from "./Quote";

const App = () => {
    const [show, setShow] = useState("bub");
    const quote = data;
    const [randomQuote, setRandomQuote] = useState(null);

    const handleClick = (name) => {
        let randNumb = Math.floor(Math.random() * quote.length);
        let randQuote = quote[randNumb];
        console.log(randQuote);
        setRandomQuote(randQuote);
        setShow(name);
    };

    return (
        <div className="App">
            <div className='text-overlay'>
                <h2>Click on Bubble to display quote</h2>
            </div>
            <div className="wrapper">
                {quote.map((data) => (
                    <div
                        className={show === data.name ? data.name : "bub"}
                        onClick={() => handleClick(data.name)}
                        key={data.name}
                    >
                        {show === data.name ? randomQuote !== null && randomQuote.quote : ' '}
                        <span className="dot"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
