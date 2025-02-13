import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard.tsx";

type ArticleCardMeta = Meta<typeof ArticleCard>;

const meta: ArticleCardMeta = {
  component: ArticleCard,
};

export default meta;

type ArticleCardStory = StoryObj<typeof ArticleCard>;

export const defaultArticleCard: ArticleCardStory = {
  args: {
    likes: 100,
    title: "Hello Story Book",
  },
};

export const articleOhneLikes: ArticleCardStory = {
  args: {
    likes: 0,
    title: "Brand new article",
  },
};
