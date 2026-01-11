import AllProjects from '@/components/projects/AllProjects';
import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Projects | Yuvraj Singh Bhadoria',
  description: 'Explore my featured projects in AI, RAG systems, and LLM fine-tuning',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in AI, RAG systems, and LLM fine-tuning
          </p>
        </motion.div>
        
        <AllProjects />
      </div>
    </div>
  );
}
