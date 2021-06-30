import useFetch from "../hooks/useFetch"
import { CATEGORY } from "../interface/category";
import { COMMON } from "../interface/common";

export default function Header() {
	let listSize: COMMON.IOption[] = [];
	for (let i: number = 0; i < 200; i++) {
		listSize.push({
			value: i.toString(),
			label: i.toString()
		});
	}
	const listCategories: CATEGORY.IList = useFetch();

	if (listCategories.list === undefined) {
		return <span>Loading...</span>;
	}

	return (
		<div>
			페이지 당
			<select id="select_list_size" className="ct-btn white">
				{
					listSize.map((o) => (
						<option key={o.value} value={o.value}>{o.label}</option>
					))
				}
			</select>
			개 출력
			&nbsp;
			<input type="checkbox" id="like" />좋아요
			&nbsp;
			<input type="checkbox" id="favorite" />최고에요
			&nbsp;
			<select id="main_category" className="ct-btn white">
				<option value="0">미분류</option>
				<option value="99999">분류통합</option>
				{
					listCategories.list.map((o: CATEGORY.ICategory) => (
						<option key={o.seq_category_info} value={o.seq_category_info}>{o.category}</option>
					))
				}
			</select>
			&nbsp;
			<select id="order_by" className="ct-btn white">
				<option value="image_down_path">시간순</option>
				<option value="seq_mov_info">인덱스</option>
				<option value="size">용량</option>
				<option value="read_count">조회수</option>
				<option value="file_name">파일명</option>
				<option value="read_date">분류추가</option>
				<option value="down_date">다운로드</option>
				<option value="title">타이틀</option>
			</select>
			&nbsp;
			<select id="sort_by" className="ct-btn white">
				<option value="ASC">순서대로</option>
				<option value="DESC">역순</option>
			</select>
			&nbsp;
			<select id="search_field" className="ct-btn white">
				<option value="file_name">파일명</option>
				<option value="title">제목</option>
			</select>
			&nbsp;
			<input type="text" id="search_value" placeholder="검색어" className="ct-btn white" />
			&nbsp;
			<input type="button" value="검색" className="ct-btn search" />
		</div>
	)
}