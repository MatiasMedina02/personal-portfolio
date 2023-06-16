import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// Content
import ImgPerfil from "../assets/matii.png";

const Home = () => {
	return (
		<div className="Home">
			{/* Presentacion */}
			<div className="w-full flex flex-col text-center md:text-left pt-20">
				<h1 className="text-4xl">MATIAS MEDINA</h1>
				<div className="py-6 flex flex-col">
					<span className="text-3xl">I AM A</span>
					<TypeAnimation 
						sequence={["FRONTEND DEVELOPER", 2000, "BACKEND DEVELOPER", 2000]}
						speed={50}
						repeat={Infinity}
						wrapper="span"
						className="text-3xl text-spring-green-700 dark:text-spring-green-700"
					/>
				</div>
				<h4>Freelance Web Developer located in Encarnación, Paraguay&#128205;</h4>

				{/* Social Media */}
				<div className="w-full h-14 mt-4 mb-10 flex justify-center items-center">
					<ul className="w-full flex flex-row justify-center md:justify-start space-x-12 stroke-black dark:stroke-white">
						{/* Linkedin */}
						<li>
							<a href="https://www.linkedin.com/in/matías-medina-844181242" target="_blank" rel="noopener noreferrer">
								<button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin scale-150" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M8 11l0 5" />
										<path d="M8 8l0 .01" />
										<path d="M12 16l0 -5" />
										<path d="M16 16v-3a2 2 0 0 0 -4 0" />
									</svg>
								</button>
							</a>
						</li>
						{/* Youtube */}
						<li>
							<a href="https://www.youtube.com/@MatUDev-1806" target="_blank" rel="noopener noreferrer">
								<button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
										<path d="M10 9l5 3l-5 3z" />
									</svg>
								</button>
							</a>
						</li>
						{/* Github */}
						<li>
							<a href="https://github.com/MatiasMedina02" target="_blank" rel="noopener noreferrer">
								<button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
									</svg>
								</button>
							</a>
						</li>
					</ul>
				</div>
				
				{/* Button Contact */}
				<div className="w-full flex justify-center md:justify-start">
				<button className="flex w-32 bg-spring-green-600 hover:bg-spring-green-700 rounded-lg p-2" type="button">
					<Link to="Contact" className="w-full h-full" smooth={true} spy={true} duration={500}>
						<span>Contact Me</span>
					</Link>
				</button>
				</div>
			</div>

			{/* Perfil */}
			<div className="w-full hidden md:flex justify-center md:m-0 my-10" >
				<motion.img 
					initial={{ 
						borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"}}
					animate={{
						borderRadius: [
							"60% 40% 30% 70%/60% 30% 70% 40%",
							"30% 60% 70% 40%/50% 60% 30% 60%",
							"60% 40% 30% 70%/60% 30% 70% 40%",
						]
					}}
					transition={{ duration: 10, repeat: Infinity }}
					className="w-72 border-8 border-spring-green-700" 
					src={ImgPerfil} 
					alt="Matias Medina" />
			</div>
		</div>
	)
}

export default Home