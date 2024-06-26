
interface Response {
	data: {
		metric: string;
		segmentKey: string;
		segmentId: string;
		values: Array<{
			date: string;
			value: number;
		}>
	}
}

export const fetchSnapshot = async (
	metric: string |null,
	segmentKey: string | null,
	segmentId: string | null
): Promise<Response> => {
	return await fetch("https://sundial-fe-interview.vercel.app/api/snapshot", {
		method: "POST",
		body: JSON.stringify({ metric, segmentKey, segmentId }),
	}).then((res) => res.json());
};


