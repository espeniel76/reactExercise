import { useEffect, useState } from "react";

export default function useFetch() {
	const [data, setData] = useState<any>({});
	useEffect(() => {
		fetch("http://localhost/static/interface.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({ type: "GET_CATEGORY" }),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			});
	}, []);
	return data;
}
