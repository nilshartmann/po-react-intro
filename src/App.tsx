import ArticleTeaser from "./components/ArticleTeaser.tsx";
import ArticleList from "./components/ArticleList.tsx";
import Teaser from "./components/Teaser.tsx";
import TeaserTitle from "./components/TeaserTitle.tsx";
import { TeaserAuthor } from "./components/TeaserAuthor.tsx";
import TeaserIntro from "./components/TeaserIntro.tsx";
import { LargeTeaser } from "./components/LargeTeaser.tsx";

export default function App() {
  // wo kommen die Daten her? => sehen wir uns später an
  return (
    <ArticleList>
      <LargeTeaser
        author={"Ursel Schmidt"}
        intro={"Pros and cons of Tailwind"}
        title={"Tailwind"}
      />
      <Teaser>
        <TeaserTitle size={"lg"}>Hello React</TeaserTitle>
        <TeaserAuthor>Laura Müller</TeaserAuthor>
        <TeaserIntro>Short introduction into React development</TeaserIntro>
      </Teaser>
      <Teaser>
        <TeaserTitle size={"sm"}>Learning Next.js</TeaserTitle>
        <TeaserAuthor>Sven Meier</TeaserAuthor>
        <TeaserIntro style={"wide"}>
          Getting started with fullstack react
        </TeaserIntro>
      </Teaser>
    </ArticleList>
  );
}
