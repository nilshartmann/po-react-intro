import { ReactNode } from "react";

type ArticleTitleProps = {
  children: ReactNode;
  // Bezeichnung sollte aus dem Design System kommen
  size: "lg" | "sm";
};
export default function TeaserTitle({ children, size }: ArticleTitleProps) {
  const TitleElement = size === "lg" ? "h1" : "h2";

  return <TitleElement>{children}</TitleElement>;
}
