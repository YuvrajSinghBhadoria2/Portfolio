import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool displays my resume for download.',
  parameters: z.object({}),
  execute: async () => {
    return "Here's my resume - feel free to download it to learn more about my experience and qualifications!";
  },
});
