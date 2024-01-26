import { useState } from "react";

const Auth = (props) => {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	const handleChange = (event) => {
		if (event.target.name === "email") {
			setEmail(event.target.value);
		} else if (event.target.name === "password") {
			setPassword(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const logoForm = (
		<div className={}>
			<form id="enquire-form" onSubmit={handleSubmit}>
				<label>Company Name</label>
				<input
					type="text"
					name="name"
					onChange={handleChange}
					placeholder="Name"
					required
				/>
				<label>Email</label>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					placeholder="password"
					required
				/>
				<button type="submit">
                    Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
