import React from 'react';
import { motion } from 'framer-motion';

const techStacks = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🌬️' },
];

const TechStack: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-100 dark:bg-gray-800">
            {techStacks.map((tech) => (
                <motion.div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="text-4xl">{tech.icon}</div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">{tech.name}</h3>
                </motion.div>
            ))}
        </div>
    );
};

export default TechStack;
