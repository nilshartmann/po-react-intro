import { Article } from "./types.ts";
import { useState } from "react";
import ArticleList from "./ArticleList.tsx";

type ArticleSliderProps = {
  articles: Article[];
};

export default function ArticleSlider({ articles }: ArticleSliderProps) {
  const [first, setFirst] = useState(0);

  const visibleArticles = articles.slice(first, first + 3);

  return (
    <div className={"flex space-x-4"}>
      <button onClick={() => setFirst(first - 1)}>Zurück</button>

      <ArticleList articles={visibleArticles} />

      <button onClick={() => setFirst(first + 1)}>Weiter</button>
    </div>
  );
}
