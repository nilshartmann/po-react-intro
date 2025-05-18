type ArticleTeaserProps = {
  title: string;
  author: string;
  intro: string;
};
export default function ArticleTeaser({
  title,
  author,
  intro,
}: ArticleTeaserProps) {
  return (
    <article>
      <h1>{title}</h1>
      <p>
        von <em>{author}</em>
      </p>
      <p>{intro}</p>
    </article>
  );
}
