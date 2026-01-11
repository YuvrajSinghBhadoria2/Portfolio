// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
export const PROJECT_CONTENT = [
  {
    title: 'Enterprise Document Q&A System with Multi-Agent Architecture',
    description:
      'Problem: Most RAG systems struggle with precision (irrelevant results) and hallucinations (ungrounded responses). Solution: Hybrid Retrieval: Combined FAISS (semantic) + BM25 (lexical) to improve recall. Reranking: Used cross-encoders (e.g., bge-reranker-large) to boost precision to 98%+ on WikiQA/GovReport. Safety Guardrails: Confidence gating: Reject responses below a threshold (e.g., score < 0.7). Groundedness validation: Automatically verify responses against source documents. Outcome: Reduced irrelevant responses by 40% and achieved near-zero hallucinations.',
    techStack: [
      'Python',
      'FastAPI',
      'Docker',
      'FAISS',
      'BM25',
      'Groq (Llama-3)',
      'Cross encoder',
      'Sentence-Transformers',
    ],
    date: 'Present',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/YuvrajSinghBhadoria2/Enterprise-RAG-System',
      },
      {
        name: 'Demo',
        url: 'https://huggingface.co/spaces/yuvis/Enterprise-RAG-System',
      },
    ],
    images: [
      { src: '/projects/enterprise-rag-preview.png', alt: 'Enterprise RAG System interface' },
    ],
  },
  {
    title: 'AI Doctor Chatbot Voice Agent',
    description:
      'Problem: Healthcare chatbots often lack contextual understanding and multi-turn conversation capabilities. Solution: Built a voice-enabled LLM agent using Whisper (speech-to-text) + Llama-3 (reasoning) + TTS (text-to-speech). Integrated medical knowledge graphs (e.g., UMLS) for accurate symptom analysis.',
    techStack: [
      'Python',
      'FastAPI',
      'Hugging Face Transformers',
      'LangChain',
      'Whisper',
      'Llama-3',
      'TTS',
    ],
    date: 'Present',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/YuvrajSinghBhadoria2/AI-doctor_chatbot-voice-agent-',
      },
    ],
    images: [
      { src: '/projects/ai doctor agent.png', alt: 'AI Doctor Chatbot interface' },
    ],
  },
  {
    title: 'LLM Fine-Tuning with Direct Preference Optimization (DPO)',
    description:
      'Problem: Traditional fine-tuning (e.g., SFT) doesn\'t align LLMs with human preferences (e.g., helpfulness vs. harm). Solution: Implemented Direct Preference Optimization (DPO) to train Pythia-6.9B on the Anthropic-HH dataset. Used FSDP + mixed precision (bfloat16) to train efficiently on multi-GPU setups. Hyperparameter tuning: Optimized beta (0.1–0.5) to balance alignment and performance. Outcome: Improved model alignment by 30% compared to SFT.',
    techStack: [
      'Python',
      'PyTorch',
      'HuggingFace Transformers',
      'FSDP',
      'Anthropic-HH Dataset',
      'Weights & Biases',
      'Mixed Precision Training',
    ],
    date: 'Present',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/YuvrajSinghBhadoria2/Fine-tuned-with_DPO',
      },
    ],
    images: [
      { src: '/projects/llm-finetuning-preview.png', alt: 'LLM Fine-tuning project interface' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'AI & RAG',
    title: 'Enterprise Document Q&A System with Multi-Agent Architecture',
    src: '/projects/enterprise-rag-preview.png',
    content: (
      <ProjectContent project={{ title: 'Enterprise Document Q&A System with Multi-Agent Architecture' }} />
    ),
  },
  {
    category: 'AI & Healthcare',
    title: 'AI Doctor Chatbot Voice Agent',
    src: '/projects/ai doctor agent.png',
    content: (
      <ProjectContent project={{ title: 'AI Doctor Chatbot Voice Agent' }} />
    ),
  },
  {
    category: 'LLM & Fine-tuning',
    title: 'LLM Fine-Tuning with Direct Preference Optimization (DPO)',
    src: '/projects/llm-finetuning-preview.png',
    content: (
      <ProjectContent project={{ title: 'LLM Fine-Tuning with Direct Preference Optimization (DPO)' }} />
    ),
  },
];