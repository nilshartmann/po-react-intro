import ArticleCard from "./ArticleCard";
import ArticleList from "./ArticleList.tsx";

const article1 = {
  id: "1",
  likes: 421,
  title: "Hello React",
};

const article2 = {
  id: "2",
  likes: 0,
  title: "Hello Next.js",
};

export default function App() {
  return (
    <div>
      <ArticleList articles={[article1, article2]} />
    </div>
  );
}
