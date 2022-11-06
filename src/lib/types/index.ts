export type projectCardProps = {
	id: string;
	title: string;
	description: string;
	image: string;
	github: string;
	video: string;
};
export type customerProps = {
	gender: 'female' | 'male';
	seniorcitizen: 0 | 1;
	partner: 'yes' | 'no';
	dependents: 'yes' | 'no';
	phoneservice: 'yes' | 'no';
	multiplelines: 'yes' | 'no';
	internetservice: 'fiber_optic' | 'dsl' | 'no';
	onlinesecurity: 'yes' | 'no' | 'no_internet_service';
	onlinebackup: 'yes' | 'no' | 'no_internet_service';
	deviceprotection: 'yes' | 'no' | 'no_internet_service';
	techsupport: 'yes' | 'no' | 'no_internet_service';
	streamingtv: 'yes' | 'no' | 'no_internet_service';
	streamingmovies: 'yes' | 'no' | 'no_internet_service';
	contract: 'month-to-month' | 'one_year' | 'two_year';
	paperlessbilling: 'yes' | 'no';
	paymentmethod:
		| 'electronic_check'
		| 'mailed_check'
		| 'bank_transfer_(automatic)'
		| 'credit_card_(automatic)';
	tenure: number;
	monthlycharges: number;
	totalcharges: number;
};

export type customerInputKeys =
	| 'gender'
	| 'seniorcitizen'
	| 'partner'
	| 'dependents'
	| 'phoneservice'
	| 'multiplelines'
	| 'internetservice'
	| 'onlinesecurity'
	| 'onlinebackup'
	| 'deviceprotection'
	| 'techsupport'
	| 'streamingtv'
	| 'streamingmovies'
	| 'contract'
	| 'paperlessbilling'
	| 'paymentmethod'
	| 'tenure'
	| 'monthlycharges'
	| 'totalcharges';

export type customerChurnDataProps = {
	label: customerInputKeys;
	options: string[] | number[];
};
