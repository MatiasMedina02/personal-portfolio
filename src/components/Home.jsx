import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// Content
import LINKEDIN from "../assets/social/linkedin.png";
import YOUTUBE from "../assets/social/youtube.png";
import GITHUB from "../assets/social/github.png";
import ImgPerfil from "../assets/matii.png";

const socialMedia = [
	{
		id: 1,
		image: LINKEDIN,
		url: "https://www.linkedin.com/in/matías-medina-844181242",
	},
	{
		id: 2,
		image: YOUTUBE,
		url: "https://www.youtube.com/@MatUDev-1806",
	},
	{
		id: 3,
		image: GITHUB,
		url: "https://github.com/MatiasMedina02",
	}
]

const Hero = () => {
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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto quam voluptatibus atque nobis autem, quidem cum amet placeat ab illum sequi sapiente ex obcaecati illo et doloremque sint libero!</p>
				
				{/* Social Media */}
				<div className="w-full h-14 mt-4 mb-10 flex justify-center items-center">
					<ul className="w-full flex flex-row justify-center md:justify-start space-x-12">
						{socialMedia.map(social => (
							<li className="socialMedia-list" key={social.id}>
								<a className="w-10 h-10" target="_blank" href={social.url} rel="noopener noreferrer">
									<img className="w-10 h-10" src={social.image} alt="Social Media" />
								</a>
							</li>
						))}
					</ul>
				</div>
				
				{/* Button Contact */}
				<Link to="Contact" smooth={true} spy={true} duration={500}>
					<button className="bg-spring-green-600 rounded-lg p-2" type="button">
						<span>Contact Me</span>
					</button>
				</Link>
			</div>

			{/* Perfil */}
			<div className="w-full hidden md:flex justify-center md:m-0 my-10" >
				<motion.img 
					className="w-60 rounded-full border-4 border-spring-green-700" 
					src={ImgPerfil} 
					alt="Matias Medina" />
			</div>
		</div>
	)
}

export default Hero