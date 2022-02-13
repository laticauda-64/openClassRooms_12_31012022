import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Activity } from '../components/ui/Activity';
import { Metrics } from '../components/ui/Metrics';
import { Balance } from '../components/ui/Balance';
import { Score } from '../components/ui/Score';
import { TimingSession } from '../components/ui/TimingSession';
import { useStore } from '../utils/useStore';
import { Error404 } from './Error404';
import { Loader } from './Loader';

export const Dashboard = () => {
	let params = useParams();

	const { user, activity, sessionsAverage, performance, getUser } = useStore();

	useEffect(() => {
		getUser(parseInt(params.id));
	}, []);

	if (user) {
		if (activity.sessions && sessionsAverage.sessions && performance.data) {
			return (
				<Main>
					<h1>
						Bonjour <span>{user.userInfos.firstName}</span>
					</h1>
					<MainDesc>Félicitation ! Vous avez explosé vos objectifs hier 👏</MainDesc>
					<Results>
						<Graphs>
							<Activity activity={activity} />
							<TimingSession sessionsAverage={sessionsAverage.sessions} />
							<Balance performance={performance} />
							<Score userScore={user.todayScore} />
						</Graphs>
						<Metrics userKeydata={user.keyData} />
					</Results>
				</Main>
			);
		}

		return <Loader />;
	}

	return <Error404 />;
};

const Main = styled.section`
	width: 100%;
	padding: 70px 0 0 107px;

	h1 {
		font-size: 48px;
		font-weight: 500;

		span {
			color: red;
		}
	}
`;

const MainDesc = styled.p`
	margin-top: 40px;
	font-size: 18px;
`;

const Results = styled.article`
	min-height: 610px;
	display: flex;
	margin-top: 77px;
`;

const Graphs = styled.div`
	width: 835px;
	margin: 0 30px 0 0;
	display: flex;
	flex-wrap: wrap;
`;
