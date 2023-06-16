import { motion } from "framer-motion";
import FondoLanding from "../assets/fondo-inicio.png";

const Landing = () => {
	return (
		<motion.div 
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 2 }}
			className="w-full h-screen flex flex-col md:flex-row justify-center text-center items-center">
			<h1 className="w-full text-black">Welcome to my Portfolio!</h1>
			<img src={FondoLanding} alt="Fondo Landing"/>
    </motion.div>
	)
}

export default Landing