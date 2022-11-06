import type { customerChurnDataProps, projectCardProps } from '$lib/types';

export const projectCardsData: projectCardProps[] = [
	{
		id: 'image-cartoonify',
		title: 'Image Cartoonify',
		description:
			'Simple CV application that works on a picture pexels and try to make it as a cartoon by drawind on it.',
		image: '/pngs/cartoon.png',
		github: '',
		video: 'https://ahmedcoolprojects.github.io/portfolio/projects/web-dev/jina-airbnb/v.mp4'
	},
	{
		id: 'loan-prediction',
		title: 'Loan Prediction',
		description:
			'Basing on some client data, we can know if the client is going to be approved or not.',
		image: '/pngs/loan.png',
		github: '',
		video: ''
	},
	{
		id: 'breast-cancer-prediction',
		title: 'Breast Cancer Prediction',
		description:
			'Detecting if a person has breast cancer or not basing on specific data about him (her).',
		image: '/pngs/breast-cancer.png',
		github: '',
		video: ''
	},
	{
		id: 'telco-customer-churn',
		title: 'Telco Customer Churn',
		description:
			'Detecting if a customer is going to leave the company or not basing on some data about him (her).',
		image: '/pngs/customer.png',
		github: '',
		video: ''
	},
	{
		id: 'country-happiness-score-v1',
		title: 'Country Happiness Score V1',
		description:
			'A web application that helps you to know the happiness score of a country based on a deployed ML API.',
		image: '/pngs/happiness-score.png',
		github: '',
		video: ''
	}
];

export const customerChurnDataInputs: customerChurnDataProps[] = [
	{
		label: 'gender',
		options: ['female', 'male']
	},
	{
		label: 'seniorcitizen',
		options: [0, 1]
	},
	{ label: 'partner', options: ['yes', 'no'] },
	{ label: 'dependents', options: ['yes', 'no'] },
	{ label: 'phoneservice', options: ['yes', 'no'] },
	{ label: 'multiplelines', options: ['yes', 'no'] },
	{ label: 'internetservice', options: ['fiber_optic', 'no', 'dsl'] },
	{ label: 'onlinesecurity', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'onlinebackup', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'deviceprotection', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'techsupport', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'streamingtv', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'streamingmovies', options: ['yes', 'no', 'no_internet_service'] },
	{ label: 'contract', options: ['month-to-month', 'one_year', 'two_year'] },
	{ label: 'paperlessbilling', options: ['yes', 'no'] },
	{
		label: 'paymentmethod',
		options: [
			'electronic_check',
			'mailed_check',
			'bank_transfer_(automatic)',
			'credit_card_(automatic)'
		]
	}
];
