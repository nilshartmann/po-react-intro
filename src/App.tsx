import ArticleCard from "./ArticleCard";

export default function App() {
  return (
    <div>
      <ArticleCard likes={421} title={"Hello React"} />
      <ArticleCard likes={0} title={"Hello Next.js"} />
    </div>
  );
}
