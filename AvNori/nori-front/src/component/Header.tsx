/**
 * 이 페이지 주요 issue
 * 1. ajax 으로 받은 데이터를 전역으로 이용하려면? -> state
 * 2. 랜더링이 끝난 시점은? -> componentDidMount
  */

import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

		console.log(e.target.value);
	}

	// useStyles() {
	// 	return makeStyles((theme) => ({
	// 		formControl: {
	// 			margin: theme.spacing(1),
	// 			minWidth: 120,
	// 		},
	// 		selectEmpty: {
	// 			marginTop: theme.spacing(2),
	// 		},
	// 	}));
	// }

	render() {
		// const classes = this.useStyles();
		// console.log(classes.formControl);

		return (
			<div>
				<Select
					onChange={this.handleChange}
					id="select-page"
					defaultValue="10"
				>
					<option aria-label="None" value="" />
					{
						this.state.options.listSize.map((o, key) => {
							return <option key={key} value={o.value}>{o.label}</option>
						})
					}
				</Select>
				<Select
					onChange={this.handleChange}
					id="select-category"
					defaultValue="0"
				>
					<option aria-label="None" value="" />
					{
						this.state.options.categories.map((o, key) => {
							return <option key={key} value={o.value}>{o.label}</option>
						})
					}
				</Select>
				<FormControlLabel
					control={<Checkbox onChange={this.handleChange} name="checkedA" />}
					label="좋아요"
				/>
				<FormControlLabel
					control={
						<Checkbox
							onChange={this.handleChange}
							name="checkedB"
							color="primary"
						/>
					}
					label="최고에요"
				/>

				<Select
					onChange={this.handleChange}
					id="select-order-by"
					defaultValue="image_down_path"
				>
					<option value="image_down_path">시간순</option>
					<option value="seq_mov_info">인덱스</option>
					<option value="size">용량</option>
					<option value="read_count">조회수</option>
					<option value="file_name">파일명</option>
					<option value="read_date">분류추가</option>
					<option value="down_date">다운로드</option>
					<option value="title">타이틀</option>
				</Select>

				<Select id="select-sort-by" defaultValue="ASC">
					<option value="ASC">순서대로</option>
					<option value="DESC">역순</option>
				</Select>
				<Select id="select-search-field" defaultValue="file_name">
					<option value="file_name">파일명</option>
					<option value="title">제목</option>
				</Select>
				<TextField id="text-search-value" placeholder="검색어" size="medium" />
				<Button variant="contained" color="secondary">
					검색
				</Button>
			</div>
		)
	}
}