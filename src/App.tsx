import ArticleTeaser from "./components/ArticleTeaser.tsx";
import ArticleList from "./components/ArticleList.tsx";

export default function App() {
  // wo kommen die Daten her? => sehen wir uns später an
  return (
    <ArticleList>
      <ArticleTeaser
        title={"Hello React"}
        author={"Laura Müller"}
        intro={"Short introduction into React development"}
      />
      <ArticleTeaser
        title={"Learning Next.js"}
        author={"Sven Meier"}
        intro={"Getting started with fullstack react"}
      />
    </ArticleList>
  );
}
