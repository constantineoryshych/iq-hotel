export interface IConfig {
	spreadsheet: string;
	delay: number;
	rotation: string[][];
}

export default {
	spreadsheet: "1Azo7XgQZ4DJyLdvnOayPID4mYc10VbhZfo_T-Onm2FA",
	delay: 7000,
	rotation: [["rates", "currency", "host"], ["rates", "services1"], ["services1", "services2"]]
} as IConfig;
