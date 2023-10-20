import Header from "./header/header";
import { motion } from "framer-motion";
export default function TemplateApp({ children }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <div className="">{children}</div>
        </Header>
      </motion.div>
    </div>
  );
}
