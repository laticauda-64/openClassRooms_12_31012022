import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Activity } from '../components/ui/Activity';
import { Metrics } from '../components/ui/Metrics';
import { Balance } from '../components/ui/Balance';
import { Score } from '../components/ui/Score';
import { TimingSession } from '../components/ui/TimingSession';
import { useStore } from '../utils/useStore';

export const Dashboard = () => {
	let params = useParams();
	console.log(params.id);

	const { user, getUser } = useStore();

	useEffect(() => {
		getUser();
	}, []);

	// Mock
	const rawInput = {
		keyData: {
			calorieCount: '1930',
			proteinCount: '155',
			carbohydrateCount: '290',
			lipidCount: '50',
		},
	};

	return (
		<Main>
			<h1>Bonjour {user?.userInfos?.firstName && <span>Thomas</span>}</h1>
			<MainDesc>Félicitation ! Vous avez explosé vos objectifs hier 👏</MainDesc>
			<Results>
				<Graphs>
					<Activity />
					<TimingSession />
					<Balance />
					<Score />
				</Graphs>
				<Metrics data={rawInput} />
			</Results>
		</Main>
	);
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
