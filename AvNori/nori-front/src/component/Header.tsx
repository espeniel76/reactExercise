/**
 * 이 페이지 주요 issue
 * 1. ajax 으로 받은 데이터를 전역으로 이용하려면?
 * 2. 랜더링이 끝난 시점은?
  */

import React, { Component } from 'react'
import Select from 'react-select';
import { ajax } from '../modules/ajax';
import { COMMON } from '../interface/common';
import { CATEGORY } from '../interface/category';

let optionListSizes: COMMON.IOption[] = [];
let optionCategories: COMMON.IOption[] = [];
let listCategories: CATEGORY.IList;


export class Header extends Component {
	state = {
		selectedOption: null,
	};
	handleChange = (selectedOption: any) => {
		this.setState({ selectedOption }, () =>
			console.log(`Option selected:`, this.state.selectedOption)
		);
	}
	render() {

		// set page select options
		for (let i: number = 1; i < 200; i++) {
			optionListSizes.push({ value: i.toString(), label: `${i} 개 출력` })
		}

		// set category select options
		optionCategories.push({ value: "0", label: "미분류" });
		optionCategories.push({ value: "9999", label: "분류통합" });
		(async () => {
			listCategories = await ajax.post({ data: { type: "GET_CATEGORY" } });
			listCategories.list.forEach(e => {
				optionCategories.push({
					value: e.seq_category_info,
					label: e.category
				})
			});
		})();

		const { selectedOption } = this.state;

		return (
			<div>
				페이지 당
				<Select
					value={selectedOption}
					defaultValue={optionListSizes[19]}
					options={optionListSizes}
					onChange={this.handleChange}
				/>

				<input type="checkbox" id="like" /> 좋아요
				<input type="checkbox" id="favorite" /> 최고에요
				<Select options={optionCategories}></Select>
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
				<input type="button" value="검색" className="ct-btn search" />
			</div>
		)
	}
}