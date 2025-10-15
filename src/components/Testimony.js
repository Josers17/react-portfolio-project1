import React from 'react';
import '../stylesheet/Testimony.css'

function Testimony(props) {
	return (
		<div className='testimony-container'>
			<img 
				className='testimony-image'
				src={require('../images/testimony-emma.png')}
				alt='Photo of Emma'/>
			<div className='testimony-text-container'>
				<p className='testimony-name'>{props.name} in {props.country}</p>
				<p className='testimony-position'>{props.position} at {props.company}</p>
				<p className='testimony-text'>"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimony;