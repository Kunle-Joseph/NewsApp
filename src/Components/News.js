import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css"; // Add your CSS file here

function News(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const resultNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=1664157c885142878ba1c4290cc67593`;

    let data = await fetch(url);
    let parsedData = await data.json();

    const filteredArticles = parsedData.articles.filter(
      (article) => article.title !== "[Removed]"
    );

    setArticles(filteredArticles);
    setTotalResults(filteredArticles.totalResults);
  };

  useEffect(() => {
    resultNews();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div>
      {/* Dark Mode Toggle Button */}
      <div className="text-center my-3">
        <button className="btn btn-primary" onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={resultNews}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    sourceName={element.source.name}
                    title={element.title}
                    desc={element.description}
                    imageURL={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
