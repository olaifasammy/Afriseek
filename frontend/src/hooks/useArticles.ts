import { useEffect, useState } from "react";
import { getArticles } from "../services/articles";

export function useArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(setArticles)
      .catch(console.error);
  }, []);

  return articles;
}
