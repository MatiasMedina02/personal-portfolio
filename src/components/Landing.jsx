import { motion } from "framer-motion";

const Landing = () => {
	return (
		<div className="w-full h-screen flex items-center text-center">
			<motion.h1
				initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
				className="w-full text-black"
			>
				Hello! My name is Matias Medina
			</motion.h1>
    </div>
	)
}

export default Landing