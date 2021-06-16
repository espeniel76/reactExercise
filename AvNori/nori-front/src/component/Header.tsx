import React, { Component, MouseEvent } from 'react'

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