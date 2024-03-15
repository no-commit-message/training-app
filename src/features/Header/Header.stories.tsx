import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
