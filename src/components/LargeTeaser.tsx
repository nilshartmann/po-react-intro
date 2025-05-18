import Teaser from "./Teaser.tsx";
import TeaserTitle from "./TeaserTitle.tsx";
import { TeaserAuthor } from "./TeaserAuthor.tsx";
import TeaserIntro from "./TeaserIntro.tsx";

type LargeTeaserProps = {
  title: string;
  author: string;
  intro: string;
};

// Könnte Teil des Design Systems sein
export function LargeTeaser({ title, author, intro }: LargeTeaserProps) {
  return (
    <Teaser>
      <TeaserTitle size={"lg"}>{title}</TeaserTitle>
      <TeaserAuthor>{author}</TeaserAuthor>
      <TeaserIntro>{intro}</TeaserIntro>
    </Teaser>
  );
}
