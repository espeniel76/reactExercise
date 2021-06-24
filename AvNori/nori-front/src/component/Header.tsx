/**
 * 이 페이지 주요 issue
 * 1. ajax 으로 받은 데이터를 전역으로 이용하려면?
 * 2. 랜더링이 끝난 시점은?
 * 3. select 에 option 을 동적으로 넣는 방법은?
 */


import React, { Component, MouseEvent } from 'react'
// import { Card, Badge, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { ajax } from '../modules/ajax';
// import axios from "axios";

// const optionToppings = [
//     { value: 'extra-cheese', label: 'extra Cheese' },
//     { value: 'onions', label: 'Onions' },
//     { value: 'bacon', label: 'Bacon' },
//     { value: 'basil', label: 'Basil' },
// ];
// const optionSize = [
//     { value: '9', label: 'Small - 9 Inches' },
//     { value: '12', label: 'Medium - 12 Inches' },
//     { value: '14', label: 'Large - 14 Inches' },
//     { value: '18', label: 'Extra-large - 18 Inches' },
// ];
// let data: any = {
//     is_favorite: "F",
//     is_like: "F",
//     list_size: 200,
//     order_by: "image_down_path",
//     page_no: 1,
//     search_field: "file_name",
//     search_value: "",
//     seq_category_info: "0",
//     sort_by: "ASC",
//     type: "NORMAL_LIST"
// };
let listCategories: object = {};
(async () => {
	// let res = await ajax.post({
	//     url: 'http://localhost/static/interface.php',
	//     data: data
	// });
	// const res = await axios.post(
	//     "http://localhost/static/interface.php",
	//     data
	// );

	// console.log(res);

	listCategories = await ajax.post({ data: { type: "GET_CATEGORY" } });
	console.log(listCategories);
})();


export class Header extends Component {
	handleClick(event: MouseEvent) {
		event.preventDefault();
		alert(event.currentTarget.tagName); // alerts BUTTON
	}
	render() {
		return (
			<div>
				페이지 당
				<select id="select_list_size" className="ct-btn white">
				</select> 개 출력
				<input type="checkbox" id="like" /> 좋아요
				<input type="checkbox" id="favorite" /> 최고에요
				<select id="main_category" className="ct-btn white" >
					<option value="0">미분류</option>
					<option value="99999">분류통합</option>
				</select>
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
				<select id="sort_by" className="ct-btn white">
					<option value="ASC">순서대로</option>
					<option value="DESC">역순</option>
				</select>
				<select id="search_field" className="ct-btn white">
					<option value="file_name">파일명</option>
					<option value="title">제목</option>
				</select>
				<input type="text" id="search_value" placeholder="검색어" className="ct-btn white" />
				<input type="button" value="검색" onClick={this.handleClick} className="ct-btn search" />
			</div>
		)
	}
}