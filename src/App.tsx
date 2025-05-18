import ArticleTeaser from "./components/ArticleTeaser.tsx";
import ArticleList from "./components/ArticleList.tsx";
import Teaser from "./components/Teaser.tsx";
import TeaserTitle from "./components/TeaserTitle.tsx";
import { TeaserAuthor } from "./components/TeaserAuthor.tsx";
import TeaserIntro from "./components/TeaserIntro.tsx";
import { LargeTeaser } from "./components/LargeTeaser.tsx";
import Slider from "./components/Slider.tsx";

// Kämen in einer echten Anwendung aus dem CMS oder DB oder...
const images = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"];

export default function App() {
  // wo kommen die Daten her? => sehen wir uns später an
  return (
    <ArticleList>
      <Slider images={images} />

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
