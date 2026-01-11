
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Yuvraj riding his bike",
  parameters: z.object({}),
  execute: async () => {
    return `Here are some pictures of me enjoying a bike ride! You'll find me on two wheels whenever I need a break from building AI systems. Check out my bike adventures section to see some of my favorite riding moments.`;
  },
});