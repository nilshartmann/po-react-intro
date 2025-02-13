import ArticleCard from "./ArticleCard.tsx";

type Article = {
  id: string;
  title: string;
  likes: number;
};

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={"flex space-x-4"}>
      {articles.map((a) => (
        <ArticleCard key={a.id} likes={a.likes} title={a.title} />
      ))}
    </div>
  );
}
