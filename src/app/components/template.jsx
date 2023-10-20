import { motion } from "framer-motion";
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-5">{children}</div>
    </motion.div>
  );
}
