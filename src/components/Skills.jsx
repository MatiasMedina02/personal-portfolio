import { motion } from "framer-motion";

// Images
import HTML from "../assets/techs/html.svg";
import CSS from "../assets/techs/css.svg";
import Javascript from "../assets/techs/javascript.svg";
import ReactIcon from "../assets/techs/react.svg";
import Redux from "../assets/techs/redux.svg";
import Tailwind from "../assets/techs/tailwind-css.svg";
import Node from "../assets/techs/node.svg";
import Postgresql from "../assets/techs/postgresql.svg";
import Jest from "../assets/techs/jest.svg";
import Git from "../assets/techs/git.svg";

const techsIcons = [
	{name: "HTML", img: HTML},
	{name: "CSS", img: CSS},
	{name: "Javascript", img: Javascript},
	{name: "React", img: ReactIcon},
	{name: "Redux", img: Redux},
	{name: "Tailwind", img: Tailwind},
	{name: "Node", img: Node},
	{name: "Jest", img: Jest},
	{name: "Git", img: Git},
	{name: "Postgresql", img: Postgresql},
]

const Skills = () => {
	return (
		<div className="Skills">
			<h1 className="w-full text-center pb-8">Skills</h1>
				<div className="grid grid-cols-3 md:grid-cols-4 gap-8">
				{techsIcons.map((icon, index) => (
					<motion.div 
						key={index}
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 500 }}
						className="w-32 h-32 flex items-center justify-center p-3 bg-black dark:bg-white rounded-full cursor-pointer hover:shadow-[0_0_12px_#000] dark:hover:shadow-[0_0_12px_#fff]"
					>
						<motion.img 
							src={icon.img}
							alt={icon.name}
							className="w-20"
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Skills