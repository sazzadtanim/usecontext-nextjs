import React, {useContext, useRef} from 'react';
import {usernameContext} from '../pages';

export default function Component4() {
	const setUsername = useContext(usernameContext);
	return (
		<div className="bg-red-700">
			<h1>This is nested component 4</h1>
			<p>
				In Nested component 4 I want this userName in Main
				component
			</p>

			<input
				placeholder="set user name "
				onChange={(e) => setUsername(e.target.value)}
			/>
		</div>
	);
}
