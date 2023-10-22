import Header from "./header/header";
import Footer from "./footer/footer";
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
          <Footer>
            <div className="">{children}</div>
          </Footer>
        </Header>
      </motion.div>
    </div>
  );
}
