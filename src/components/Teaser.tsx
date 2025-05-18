import { ReactNode } from "react";

type TeaserProps = {
  children: ReactNode;
};
export default function Teaser({ children }: TeaserProps) {
  return <article>{children}</article>;
}
