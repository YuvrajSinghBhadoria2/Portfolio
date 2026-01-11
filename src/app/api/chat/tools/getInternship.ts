import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Provides information about my professional experience as an AI Engineer. Use this tool when the user asks about my work experience.",
  parameters: z.object({}),
  execute: async () => {
    return `**Yuvraj Singh Bhadoria - AI Engineer** 👇

**Professional Summary:**
AI Engineer specializing in LLM-powered systems and production-grade RAG pipelines with 3.5+ years of experience building scalable AI/ML solutions. Expertise in transformer models, hybrid retrieval, prompt optimization, and evaluation pipelines, delivering low-latency, cost-efficient, and reliable AI systems.

**Current Role:**
AI/ML Engineer at Bank of America (June 2025 - Present)
- Developed production-grade AI assistant reducing support workload by 40%
- Built RAG systems with 15,000+ documents, increasing retrieval accuracy from 52% → 88%

**Previous Experience:**
- Senior Data Scientist at Policy Bazaar (March 2025 - May 2025)
- Data Scientist at Infosys (Dec 2022 - Feb 2025)

**Core Expertise:** Python, SQL, FastAPI, PyTorch, HuggingFace Transformers, LangChain, AWS/Azure, Vector Databases
    `;
  },
});
