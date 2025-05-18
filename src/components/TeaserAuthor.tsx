import { ReactNode } from "react";

type TeaserAuthorProps = {
  children: ReactNode;
};

export function TeaserAuthor({ children }: TeaserAuthorProps) {
  return (
    <p>
      von <em>{children}</em>
    </p>
  );
}
