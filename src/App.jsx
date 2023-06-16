import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);
  
  return (
    <div className="App">
      <AnimatePresence>
        {show ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Landing />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Home />
            <Skills />
            <Work />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App