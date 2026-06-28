import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blogList.css";

function BlogList() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/quotes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка запроса");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Данные с API:", data);
        setQuotes(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Не удалось загрузить статьи");
      });
  }, []);

  return (
    <section className="blog-list">
      <h1>Блог</h1>

      {error && <p>{error}</p>}

      <div className="blog-list-grid">
        {quotes.map((quote) => (
          <article className="blog-card" key={quote.id}>
            <h2>{quote.text}</h2>
            <p>Автор: {quote.author}</p>
            <Link to={`/blog/${quote.id}`}>Читать подробнее</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
