import { metricResponse } from '../dtos/index.dtos';

export const fetchMetrics = async (): Promise<metricResponse> => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");

	return fetch("https://sundial-fe-interview.vercel.app/api/metrics", {
		headers,
	}).then((response) => response.json());
};
