export async function getTrailerId(VIDEO_API: string): Promise<string> {
	const res = await fetch(VIDEO_API);
	const preview = await res.json();
	const preview_Id = preview.results.length ? preview.results[0].key : '999';
	return preview_Id;
}
