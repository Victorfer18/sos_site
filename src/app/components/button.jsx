import { motion } from "framer-motion";
const Button = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-redTheme p-2 rounded-xl hover:bg-redLightTheme transition-all text-white max-w-full font-semibold"
    >
      {children}
    </motion.button>
  );
};

export default Button;
