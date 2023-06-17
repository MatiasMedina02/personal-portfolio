import { Link } from "react-scroll";
import Logo from "../assets/logo_perfil.png";
import { useEffect, useState } from "react";

const options = [
	{name: "Home", to: "Home"},
	{name: "Skills", to: "Skills"},
	{name: "Work", to: "Work"},
	{name: "Contact", to: "Contact"}
]

const Navbar = () => {
	const [theme, setTheme] = useState(localStorage.getItem("color-theme") || "light");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("color-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<>
			<nav className="Navbar">
				<div className="w-full m-4">
					<Link className="w-16 block cursor-pointer" to="Home" smooth={true} spy={true} duration={500}>
						<img src={Logo} alt="Logo" />
					</Link>
				</div>

				{/* Toggle Theme */}
				<div className="w-20 lg:w-full flex justify-end mr-8 lg:order-1 order-0">
					<button onClick={toggleTheme} className={theme === "light" ? "block" : "hidden"}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-yellow-300">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
						</svg>
					</button>
					<button onClick={toggleTheme} className={theme === "dark" ? "block" : "hidden"}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-blue-700">
							<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
						</svg>
					</button>
				</div>

				{/* Buttons */}
				<div className="w-full hidden lg:flex justify-between">
					{options.map((option, index) => (
						<Link className="w-full flex justify-center border-r last:border-r-0" key={index} to={option.to} smooth={true} spy={true} duration={500}>
							<button className="w-full" type="button">
								<span>{option.name}</span>
							</button>
						</Link>
					))}
				</div>

				{/* Menu */}
				<div className="w-full lg:hidden flex justify-end pr-8">
					<button onClick={() => setOpen(!open)} type="button">
						{open ? (
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-10 stroke-black dark:stroke-white">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>						
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-10 stroke-black dark:stroke-white">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						)}
						
					</button>
				</div>
			</nav>

			<div className={`fixed inset-0 flex-col top-20 overflow-hidden  bg-white dark:bg-slate-800 z-10 ${open ? "flex" : "hidden"}`}>
			{options.map((option, index) => (
				<div className="w-full h-full flex justify-center items-center border-b-2 border-slate-500 last:border-b-0" key={index}>
					<Link to={option.to} smooth={true} spy={true} duration={500}>
						<button onClick={() => setOpen(false)} type="button">
							<span className="cursor-pointer text-2xl">{option.name}</span>
						</button>
					</Link>
				</div>
			))}
			</div>
		</>
	)
}

export default Navbar