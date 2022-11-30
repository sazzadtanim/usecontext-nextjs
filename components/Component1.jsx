import React from 'react';
import Component2 from './Component1 copy';

export default function Component1() {
	return (
		<div className='bg-red-400'>
			<h1>Nested component 1</h1>
			<Component2/>
		</div>
	);
}
