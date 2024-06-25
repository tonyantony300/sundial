
interface Response {
	data: {
		metric: string;
		segmentKey: string;
		segmentId: string;
		// values is an array of data points for last 28 days,
		// starting from the date provided in request body
		values: Array<{
			date: string;
			value: number;
		}>
	}
}

export const fetchSnapshot = async (
	metric: string,
	segmentKey: string,
	segmentId: string
): Promise<Response> => {
	return await fetch("https://sundial-fe-interview.vercel.app/api/snapshot", {
		method: "POST",
		body: JSON.stringify({ metric, segmentKey, segmentId }),
	}).then((res) => res.json());
};
