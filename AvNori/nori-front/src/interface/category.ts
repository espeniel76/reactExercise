export namespace CATEGORY {
	export interface ICategory {
		seq_category_info: string;
		category: string;
		regist_date: string;
		count: string;
	}
	export interface IList {
		list: [ICategory];
	}
}
