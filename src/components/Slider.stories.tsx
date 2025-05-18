import { Meta, StoryObj } from "@storybook/react";
import TeaserTitle from "./TeaserTitle.tsx";
import Slider from "./Slider.tsx";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const TwoImages: Story = {
  args: {
    images: ["01.png", "02.png"],
  },
};
