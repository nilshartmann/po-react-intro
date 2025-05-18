import { Meta, StoryObj } from "@storybook/react";
import TeaserTitle from "./TeaserTitle.tsx";

const meta: Meta<typeof TeaserTitle> = {
  component: TeaserTitle,
};

export default meta;

type Story = StoryObj<typeof TeaserTitle>;

export const LargeTitle: Story = {
  args: {
    children: "Hallo Welt",
    size: "lg",
  },
};

export const SmallTitle: Story = {
  args: {
    children: "Hallo Small",
    size: "sm",
  },
};
