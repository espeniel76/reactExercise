/**
 * 이 페이지 주요 issue
 * 1. ajax 으로 받은 데이터를 전역으로 이용하려면? -> state
 * 2. 랜더링이 끝난 시점은? -> componentDidMount
  */

import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ajax } from '../modules/ajax';
import { COMMON } from '../interface/common';
import { CATEGORY } from '../interface/category';

let optionListSizes: COMMON.IOption[] = [];
let optionCategories: COMMON.IOption[] = [];
let listCategories: CATEGORY.IList;
interface State {
	options: {
		listSize: COMMON.IOption[]
		categories: COMMON.IOption[]
	}
}
export class Header extends React.Component<any, State> {

	state: State = {
		options: {
			listSize: [],
			categories: []
		}
	}

	async componentDidMount() {
		for (let i: number = 10; i <= 300; i = i + 10) {
			optionListSizes.push({ value: i.toString(), label: `${i} 개 출력` })
		}

		const setOptions = async () => {
			optionCategories.push({ value: "0", label: "미분류" });
			optionCategories.push({ value: "9999", label: "분류통합" });
			listCategories = await ajax.post({ data: { type: "GET_CATEGORY" } });
			listCategories.list.forEach((e: CATEGORY.ICategory) => {
				optionCategories.push({
					value: e.seq_category_info,
					label: e.category
				})
			});
		}
		await setOptions();
		this.setState({
			options: {
				listSize: optionListSizes,
				categories: optionCategories

			}
		});
	}

	handleChange(e: React.BaseSyntheticEvent) {
		// const name = event.target.name;
		// this.setState({
		// 	...this.state,
		// 	[name]: event.target.value,
		// });
		console.log(e);
	}

	render() {
		return (
			<div>
				<FormControl>
					<InputLabel id="select-page-label">Per Page</InputLabel>
					<Select
						onChange={this.handleChange}
						labelId="select-page-label"
						id="select-page"
					>
						<option aria-label="None" value="" />
						{
							this.state.options.listSize.map((o, key) => {
								return <option key={key} value={o.value}>{o.label}</option>
							})
						}
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id="select-category-label">Category</InputLabel>
					<Select
						onChange={this.handleChange}
						labelId="select-category-label"
						id="select-category"
					>
						<option aria-label="None" value="" />
						{
							this.state.options.categories.map((o, key) => {
								return <option key={key} value={o.value}>{o.label}</option>
							})
						}
					</Select>
				</FormControl>


				<input type="checkbox" id="like" /> 좋아요
				<input type="checkbox" id="favorite" /> 최고에요
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