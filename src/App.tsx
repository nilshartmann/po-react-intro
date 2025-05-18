import ArticleTeaser from "./components/ArticleTeaser.tsx";

export default function App() {
  // wo kommen die Daten her? => sehen wir uns später an
  return (
    <ArticleTeaser
      title={"Hello React"}
      author={"Laura Müller"}
      intro={"Short introduction into React development"}
    />
  );
}
