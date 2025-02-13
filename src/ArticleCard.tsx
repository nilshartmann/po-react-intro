type ArticleCardProps = {
  title: string;
  likes: number;
};

export default function ArticleCard({ title, likes }: ArticleCardProps) {
  return (
    <article>
      <h1 className={"text-2xl font-bold"}>{title}</h1>
      <div>{likes === 0 ? "Keine Likes" : `${likes} Likes`}</div>
    </article>
  );
}
