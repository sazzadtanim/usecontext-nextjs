import React, {useContext} from 'react';
import {usernameContext} from '../pages';

export default function Component4() {
	const userName = useContext(usernameContext); // 3) useContext to consume the provided
	return (
		<div className="bg-red-700">
			<h1>This is nested component 4</h1>
			<p>
				In Nested component 4 I want the userName without
				prop drilling
			</p>

			<p>
				username:
				<span className="bg-green-400"> {userName}</span>
			</p>
		</div>
	);
}
