import { segmentResponse} from "../dtos/index.dtos"

export const fetchSegments = async (): Promise<segmentResponse> => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");

	return fetch("https://sundial-fe-interview.vercel.app/api/segments", {
		headers,
	}).then((response) => response.json());
};
