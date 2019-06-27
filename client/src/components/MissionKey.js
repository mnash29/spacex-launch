import React from 'react';

export default function MissionKey() {
	return (
		<div className="float-right pt-4">
			<p>
				<spac className="px-3 mr-2 bg-success" /> = Success
			</p>
			<p>
				<spac className="px-3 mr-2 bg-danger" /> = Failed
			</p>
		</div>
	)
}