import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./blogPost.css";

function BlogPost() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(`/api/quotes/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error("Ошибка загрузки статьи:", error));
  }, [id]);

  return (
    <section className="blog-post">
      <Link to="/blog">← Назад</Link>

      <h1>Статья</h1>

      <p className="blog-text">{article.text}</p>

      <p className="blog-author">
        <strong>Автор:</strong> {article.author}
      </p>
    </section>
  );
}

export default BlogPost;
