import { useState } from 'react';

const PageTitle = (props) => {
	console.log(props)
	return (
		<div className='page-title'>
			<h1 className='bold-text'>{props.title}</h1>
			<h3 className='regular-text' style={props.fullWidth ? {width: "100%"} : {}}>{props.description}</h3>
			{props.titleContact != null && (
				<h3 className='titleContact'>{props.titleContact}</h3>
			)}
		</div>
	);
};

export default PageTitle;
