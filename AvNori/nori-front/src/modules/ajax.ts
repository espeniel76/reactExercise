import $ from "jquery";

let ajax: any = {
	post: async (o: any) => {
		return await $.ajax({
			url: o.url ? o.url : "http://localhost/static/interface.php",
			type: "POST",
			contentType: "application/json;charset=utf-8",
			dataType: "JSON",
			cache: false,
			data: JSON.stringify(o.data),
		});
	},
};
export { ajax };
