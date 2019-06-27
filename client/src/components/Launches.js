import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

export default function Launches() {
	return (
		<React.Fragment>
			<div className="row my-3">
				<div className="col-md-6">
					<h1 className="display-4 py-3">Launches</h1>
				</div>
				<div className="col-md-6">
					<MissionKey />
				</div>
			</div>
			
			<Query query={LAUNCHES_QUERY}>
				{({ loading, error, data }) => {
						if(loading) return <h4>Loading...</h4>;
						if(error) console.log(error);

						return <React.Fragment>
							{
								data.launches.map(launch => (
										<LaunchItem key={launch.flight_number} launch={launch} />
								))
							}
						</React.Fragment>;
					}}
			</Query>
		</React.Fragment>
	);
}