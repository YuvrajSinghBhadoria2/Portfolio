import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Yuvraj Singh Bhadoria. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        `Here is a little bit about me, you can see it above!

What I'm Working On Right Now:

Production-Grade AI Deployments:

Deploying scalable AI systems on cloud platforms (AWS, Azure) with low-latency inference and cost optimization.
Integrating observability tools (e.g., Prometheus, Grafana) to monitor model performance in real-time.

Open-Source Contributions:

Contributing to LangChain, Hugging Face Transformers, and RAG-related libraries to improve their functionality and usability.`,
        //"I'm Yuvraj Singh Bhadoria (you can call me Yuvraj), a 22-year-old developer passionate about software development, AI, and machine learning. I love tackling new challenges, learning, and building innovative solutions. Beyond tech, I enjoy riding my bike and playing snooker.",
    };
  },
});