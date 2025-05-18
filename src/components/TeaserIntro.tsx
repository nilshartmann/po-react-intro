import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TeaserIntroProps = {
  children: ReactNode;
  style?: "compact" | "wide";
};
export default function TeaserIntro({
  children,
  style = "compact",
}: TeaserIntroProps) {
  const introClassName = twMerge(style === "wide" && "tracking-widest");

  return <p className={introClassName}>{children}</p>;
}
