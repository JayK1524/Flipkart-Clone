import axios from "axios";

const url = "";

export const authenticateSignup = async (user) => {
	try {
		return await axios.post(`${url}/api/signUp`, user);
	} catch (error) {
		console.log("Error while calling Signup API: ", error);
	}
};

export const authenticateLogin = async (user) => {
	try {
		return await axios.post(`${url}/api/login`, user);
	} catch (error) {
		console.log("Error while calling login API: ", error);
		return error.response;
	}
};

export const paytm = async (data) => {
	try {
		let response = await axios.post(`${url}/api/payment`, data);
		return response.data;
	} catch (error) {
		console.log("Error", error);
	}
};
