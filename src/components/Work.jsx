import { motion } from "framer-motion";

import Pokeapi from "../assets/projects/pokeapi.png";
import Portfolio from "../assets/projects/personal-portfolio.png";
import Rickymorty from "../assets/projects/rickymorty.png";
import Ferrobox from "../assets/projects/ferrobox.png";
import Cinego from "../assets/projects/cinego.png";

const projects = [
	{name: "Inspire Cooks", image: Cinego, url_github: "https://github.com/MatiasMedina02/inspire-cooks", url_deploy: "https://inspirecooks.vercel.app/"},
	{name: "CineGo - Proyecto Grupal", image: Cinego, url_github: "https://github.com/sebatora/CineGO", url_deploy: "https://cine-go-ten.vercel.app"},
	{name: "Pokeapi", image: Pokeapi, url_github: "https://github.com/MatiasMedina02/pokeapi-project", url_deploy: "https://pokeapi-project-fawn.vercel.app"},
	{name: "Rick & Morty", image: Rickymorty, url_github: "https://github.com/MatiasMedina02/rickymorty-project", url_deploy: "https://rickymorty-project.vercel.app"},
	{name: "Ferrobox", image: Ferrobox, url_github: "https://github.com/MatiasMedina02/pagina-ferrobox", url_deploy: "https://pagina-ferrobox.vercel.app"},
	{name: "Portfolio 1.0", image: Portfolio, url_github: "https://github.com/MatiasMedina02/personal-portfolio", url_deploy: "https://github.com/MatiasMedina02/portafolio-personal"},
]

const Work = () => {
	return (
		<div className="Work">
			<div className="w-full flex flex-col items-center sm:items-start">
				<h1 className="w-64 mb-4 border-b-8 border-spring-green-600">Recent Projects</h1>
				<h4 className="pb-8">Check out some of my recent work</h4>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{projects.map((project , index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", duration: 0.3 }}
						className="relative group flex flex-col justify-center items-center rounded-lg border-none hover:bg-slate-900" 
						key={index}
					>
						<img className="opacity-100 group-hover:opacity-0 rounded-lg" src={project.image} alt={project.name} />
						{project.url_github && (
							<>
								<motion.h2
									className="absolute opacity-0 pl-2 select-none group-hover:opacity-100 text-white border-l-8 border-spring-green-700"
								>
									{project.name}
								</motion.h2>

								{/* Boton Github */}
								<motion.button 
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", duration: 0.3 }}
									className="absolute opacity-0 group-hover:opacity-100 left-0 bottom-0 m-4 hover:bg-white/70 stroke-white hover:stroke-black hover:dark:stroke-black rounded-full p-1" 
									type="button"
									>
									<a href={project.url_github} target="_blank" rel="noopener noreferrer">
										<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
										</svg>
									</a>
								</motion.button>

								{/* Boton Deploy */}
								<motion.button 
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", duration: 0.3 }}
									className="absolute opacity-0 group-hover:opacity-100 right-0 bottom-0 m-4 hover:bg-white/70 stroke-white hover:stroke-black hover:dark:stroke-black rounded-full p-1" 
									type="button"
									>
									<a href={project.url_deploy} target="_blank" rel="noopener noreferrer">
										<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
											<path d="M11 13l9 -9" />
											<path d="M15 4h5v5" />
										</svg>
									</a>
								</motion.button>
							</>
						)}
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Work