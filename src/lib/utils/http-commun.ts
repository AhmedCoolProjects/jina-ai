import axios from 'axios';

export default axios.create({
	baseURL: 'https://jina-ml-api.herokuapp.com',
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export const flaskAxiosAPI = axios.create({
	baseURL: 'https://jina-flask-ml-api.herokuapp.com',
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});
