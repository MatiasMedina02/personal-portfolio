const regexName = /^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validation = formData => {
	const errors = {};
	if(!formData.name){
		errors.name = "No puede estar vacío.";
	}
	if(!regexName.test(formData.name)){
		errors.name = "No puede contener números ni caracteres especiales."
	}
	if(!formData.email){
		errors.email = "No puede estar vacío.";
	}
	if(!regexEmail.test(formData.email)){
		errors.email = "Tiene que ser un email válido.";
	}
	if(formData.email.length > 35){
		errors.email = "Su email no puede tener más de 35 caracteres.";
	}
	if(!formData.message){
		errors.message = "No puede estar vacío.";
	}
	return errors;
}