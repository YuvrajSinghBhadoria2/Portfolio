import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows my contact information.',
  parameters: z.object({}),
  execute: async () => {
    return `Here is my contact information:
    
    📧 Email: yuvrajsinghbhado2030@gmail.com
    📱 Phone: +91-6264569114
    📍 Location: Gurgaon, India
    💼 LinkedIn: https://www.linkedin.com/in/yuvraj-singh-bhadoria/
    🐙 GitHub: https://github.com/YuvrajSinghBhadoria2
    
    Feel free to reach out - I'm always excited to connect with fellow tech enthusiasts and discuss opportunities! 😊`;
  },
});
