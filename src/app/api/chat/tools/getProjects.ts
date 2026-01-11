
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Yuvraj Singh Bhadoria",
  parameters: z.object({}),
  execute: async () => {
    return `Here are my projects:
    
    1. **Enterprise Document Q&A System with Multi-Agent Architecture**
       Technologies: Python, FastAPI, Docker, FAISS, BM25, Groq (Llama-3), Cross encoder, Sentence-Transformers
       Problem: Most RAG systems struggle with precision (irrelevant results) and hallucinations (ungrounded responses).
       Solution: Hybrid Retrieval: Combined FAISS (semantic) + BM25 (lexical) to improve recall. Reranking: Used cross-encoders (e.g., bge-reranker-large) to boost precision to 98%+ on WikiQA/GovReport. Safety Guardrails: Confidence gating: Reject responses below a threshold (e.g., score < 0.7). Groundedness validation: Automatically verify responses against source documents.
       Outcome: Reduced irrelevant responses by 40% and achieved near-zero hallucinations.
       GitHub: https://github.com/YuvrajSinghBhadoria2/Enterprise-RAG-System
       Demo: https://huggingface.co/spaces/yuvis/Enterprise-RAG-System
    
    2. **AI Doctor Chatbot Voice Agent**
       Technologies: Python, FastAPI, Hugging Face Transformers, LangChain, Whisper, Llama-3, TTS
       Problem: Healthcare chatbots often lack contextual understanding and multi-turn conversation capabilities.
       Solution: Built a voice-enabled LLM agent using Whisper (speech-to-text) + Llama-3 (reasoning) + TTS (text-to-speech). Integrated medical knowledge graphs (e.g., UMLS) for accurate symptom analysis.
       GitHub: https://github.com/YuvrajSinghBhadoria2/AI-doctor_chatbot-voice-agent-
    
    3. **LLM Fine-Tuning with Direct Preference Optimization (DPO)**
       Technologies: Python, PyTorch, HuggingFace Transformers, FSDP, Anthropic-HH Dataset, Weights & Biases, Mixed Precision Training
       Problem: Traditional fine-tuning (e.g., SFT) doesn't align LLMs with human preferences (e.g., helpfulness vs. harm).
       Solution: Implemented Direct Preference Optimization (DPO) to train Pythia-6.9B on the Anthropic-HH dataset. Used FSDP + mixed precision (bfloat16) to train efficiently on multi-GPU setups. Hyperparameter tuning: Optimized beta (0.1–0.5) to balance alignment and performance.
       Outcome: Improved model alignment by 30% compared to SFT.
       GitHub: https://github.com/YuvrajSinghBhadoria2/Fine-tuned-with_DPO
    
    Feel free to ask me more about any of these projects!`;
  },
});