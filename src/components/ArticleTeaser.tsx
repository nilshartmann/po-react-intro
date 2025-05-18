import { twMerge } from "tailwind-merge";

type ArticleTeaserProps = {
  title: string;
  // Bezeichnung sollte aus dem Design System kommen
  titleSize: "lg" | "sm";
  author: string;
  intro: string;
  // Bezeichnung sollte aus dem Design System kommen
  introStyle?: "compact" | "wide";
};

// Problem: für jedes "Einzelteil" müssen wir
//  jetzt neue Properties hinzufügen
//
//  wie sähe z.B. die Komponente aus:
//   - wenn die Reihenfolge geändert werden soll (erst Autor, dann Titel)
//   - mal mit farbigem Hintergrund, mal ohne?
//   -> das wird komplex!

export default function ArticleTeaser({
  title,
  author,
  intro,
  titleSize = "lg",
  introStyle = "compact",
}: ArticleTeaserProps) {
  const TitleElement = titleSize === "lg" ? "h1" : "h2";

  const introClassName = twMerge(introStyle === "wide" && "tracking-widest");

  return (
    <article>
      <TitleElement>{title}</TitleElement>

      <p>
        von <em>{author}</em>
      </p>
      <p className={introClassName}>{intro}</p>
    </article>
  );
}
