import { Meta, StoryObj } from "@storybook/react";
import TeaserTitle from "./TeaserTitle.tsx";
import { LargeTeaser } from "./LargeTeaser.tsx";

const meta: Meta<typeof LargeTeaser> = {
  component: LargeTeaser,
  // Eigene Dokumentationsseite mit Beschreibung
  // "Show code" zeigen!
  tags: ["autodocs", "!dev"],
  parameters: {
    docs: {
      description: {
        // language=Markdown
        component: `Shows a **large** teaser
                   `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LargeTeaser>;

export const SampleLargeTeaser: Story = {
  args: {
    title: "Hallo Welt",
    author: "Susi Müller",
    intro: "Eine Story über Storybook",
  },
};
