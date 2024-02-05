import "./Quote.css";
import { useState, useEffect } from "react";


const url = "https://api.quotable.io/random";

function Quote() {
   
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
   

    useEffect(() => {
        getQuotesData();

    }, []);
    async function getQuotesData() {
        let response = await fetch(url);
        let data = await response.json();

        setQuote(data.content);
        setAuthor(data.author);
    }
    if (!quote || !author) {
        ("Can't get data at the moment. Please try again later.");
    }
    return (
        <>
        <div className="quote">
        
          <h1 className="quote-title">Quote of the day</h1>
            <div className="quote-content">
                <p className="quote-text">{quote}</p>
                <h2 className="quote-author"><i className="fa-solid fa-angle-right"></i> {author}</h2>
            </div>
            <button onClick={getQuotesData} className="button"><span>New Quote</span><i className="fa-solid fa-highlighter fa-2xl"></i></button>
        </div>
        
        </>
    );
}

export default Quote;
