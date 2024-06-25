export interface metricResponse {
    data: Array<{
		  id: string;
		  displayName: string;
		  isPercentageMetric: boolean;
		}>
}

export interface segmentResponse {
	data: Array<{
	  segmentKey: string;
	  displayName: string;
	  values: Array<{ segmentId: string; displayName: string }>;
	}>
}