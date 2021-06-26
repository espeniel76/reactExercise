import React from 'react'
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles(theme => ({  // style 요소 선언
	margin: {
		margin: theme.spacing(1),
	}
}));

export const Contents = () => {
	const classes = useStyles();   // 생성
	return (
		<div >
			<Button variant="contained" color="primary" className={classes.margin}>
				Primary
			</Button>
			<Button variant="contained" color="secondary" className={classes.margin}>
				Disabled
			</Button>
		</div>
	)
}
