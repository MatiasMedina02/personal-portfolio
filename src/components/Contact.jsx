import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animations/contact.json";
import { validation } from "../utils/validation";
import { Toaster, toast } from "react-hot-toast";

const SERVICE_ID = "service_7cgpepi";
const TEMPLATE_ID = "template_3sutu3r";
const PUBLIC_KEY = "SC69ZCfN2FNiWFrUq";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});
	const form = useRef();

	const handleChange = event => {
		const { value, name } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
		setErrors(validation({
			...formData,
			[name]: value,
		}))
	}

	const sendEmail = event => {
    event.preventDefault();

		const existingErrors = Object.values(errors).some(value => value.trim().length !== 0);
		if(existingErrors){
			toast.error("All fields are required.");
			return;
		}
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((response) => {
				setFormData({
					name: "",
					email: "",
					message: "",
				});
				toast.success("Your message send correctly.");
				console.log(response);
      });
  };

	return (
		<div className="Contact">
			<div className="w-full flex flex-col items-center text-center sm:items-start sm:text-start">
				<h1 className="w-48 mb-4 border-b-8 border-spring-green-600">Contact Me</h1>
				<h4 className="pb-8">If you wish to contact me, I will be happy to receive your messages.</h4>
			</div>
			<div className="w-full block lg:flex rounded-lg p-6 bg-spring-green-700">
				<div className="w-1/2 pr-4 hidden lg:flex flex-col justify-between rounded-l-lg">
					<h1 className="text-center pb-2">Contact Information</h1>
					<div className="flex py-2	space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-filled text-black dark:text-white" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" strokeWidth="0" fill="currentColor" />
						</svg>
						<p>Phone: </p>
						<span>+595 981 615237</span>
					</div>
					<div className="flex py-2	space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-filled text-black dark:text-white" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" strokeWidth="0" fill="currentColor" />
							<path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" strokeWidth="0" fill="currentColor" />
						</svg>
						<p>Email: </p>
						<span>matias.workms@gmail.com</span>
					</div>
					<div className="flex py-2	space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-filled text-black dark:text-white" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth="0" fill="currentColor" />
						</svg>
						<p>Address: </p>
						<span className="flex justify-start">Tomas Romero Pereira c/ Artigas, Alto Paraná, Ciudad del Este, Paraguay.</span>
					</div>
					<Lottie animationData={contactAnimation} speed={0.5} className="w-72 h-72 relative left-0" />
				</div>
				<div className="w-full lg:w-1/2 p-6 rounded-lg bg-white dark:bg-slate-800">
					<form className="flex flex-col" ref={form} onSubmit={sendEmail}>
						<div className="flex flex-col mb-4">
							<label className="text-xl mb-1" htmlFor="name">Full Name</label>
							<input onChange={handleChange} value={formData.name} className={`rounded-lg border p-2 ${errors.name && 'outline-red-600'}`} type="text" name="name" placeholder="Jane Doe" />
							{errors.name && <span className="text-red-600 dark:text-red-600">{errors.name}</span>}
						</div>
						<div className="flex flex-col mb-4">
							<label className="text-xl mb-1" htmlFor="email">Email</label>
							<input onChange={handleChange} value={formData.email} className={`rounded-lg border p-2 ${errors.email && 'outline-red-600'}`} type="text" name="email" placeholder="janedoe@gmail.com" />
							{errors.email && <span className="text-red-600 dark:text-red-600">{errors.email}</span>}
						</div>
						<div className="flex flex-col mb-4">
							<label className="text-xl mb-1" htmlFor="message">Message</label>
							<textarea onChange={handleChange} value={formData.message} className={`rounded-lg border p-2 overflow-auto resize-none ${errors.message && 'outline-red-600'}`} name="message" rows="5" placeholder="Enter yor message..."></textarea>
							{errors.message && <span className="text-red-600 dark:text-red-600">{errors.message}</span>}
						</div>
						<button className="w-24 flex items-center justify-between bg-spring-green-600 hover:bg-spring-green-700 rounded-xl p-2 cursor-pointer" type="submit">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send stroke-black dark:stroke-white" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M10 14l11 -11" />
								<path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
							</svg>
							<span className="w-full">Send</span>
						</button>
					</form>
					<Toaster position="bottom-center" reverseOrder={false} />
				</div>
			</div>
		</div>
	)
}

export default Contact