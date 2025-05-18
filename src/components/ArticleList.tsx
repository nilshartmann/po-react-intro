import { ReactNode } from "react";

type ArticleListProps = {
  children: ReactNode;
};

// Das sollte natürlich ein "Konzept" aus dem Design System sein
export default function ArticleList({ children }: ArticleListProps) {
  return <div className={"ArticleList"}>{children}</div>;
}
