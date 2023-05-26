import Pokeapi from "../assets/projects/pokeapi.png";
import Portfolio from "../assets/projects/personal-portfolio.png";
import Rickymorty from "../assets/projects/rickymorty.png";
import Ferrobox from "../assets/projects/ferrobox.png";

const projects = [
	{name: "Pokeapi", image: Pokeapi, url_github: "https://github.com/MatiasMedina02/pokeapi-project"},
	{name: "Portfolio", image: Portfolio},
	{name: "Rick & Morty", image: Rickymorty, url_github: "https://github.com/MatiasMedina02/rickymorty-project"},
	{name: "Ferrobox", image: Ferrobox, url_github: "https://github.com/MatiasMedina02/pagina-ferrobox"},
]

const Work = () => {
	return (
		<div className="Work">
			<h1 className="w-full flex justify-center mb-8">Projects</h1>
			<div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project , index) => (
					<div className="flex flex-col bg-black/50 rounded-lg" key={index}>
						<img className="h-full rounded-lg m-4" src={project.image} alt={project.name} />
						{project.url_github && (
							<div className="relative">
								<button className="absolute left-0 bottom-0 m-6 bg-black/70 rounded-full p-1" type="button">
									<a href={project.url_github} target="_blank" rel="noopener noreferrer">
										<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github stroke-black dark:stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
										</svg>
									</a>
								</button>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Work