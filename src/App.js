import React from "react";
import "./App.css";
import randomColor from "randomcolor";

export default function App() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode}: ${statusMessage}`);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Ooops, something went wrong!", author: "Error" });
    }
    let a = randomColor();
    document.body.style.backgroundColor = a;
    document.getElementById("text_p").style.color = a;
    document.getElementById("author").style.color = a;
    document.getElementById("new-quote").style.backgroundColor = a;
    document.getElementById("tumblr").style.backgroundColor = a;
  }

  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <div className="App" id="App">
      <div className="quote_box_continer" id="quote-box">
        <div className="text" id="text">
          <i className="fa fa-quote-left"></i>
          <p id="text_p">{data.content}</p>
        </div>
        <div className="author" id="author">
          <p>{data.author}</p>
        </div>
        <div className="buttons_div">
          <div className="socials_div">
            <button type="" className="twitter">
              <a
                href="https://www.twitter.com/intent/tweet"
                target="_top"
                id="tweet-quote"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </button>
            <button type="" className="tumblr">
              <i className="fa-brands fa-tumblr"></i>
            </button>
          </div>
          <button
            type=""
            className="q_b_button"
            id="new-quote"
            onClick={updateQuote}
          >
            New Quote...
          </button>
        </div>
      </div>
    </div>
  );
}
