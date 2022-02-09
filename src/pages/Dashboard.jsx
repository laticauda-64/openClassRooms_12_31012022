import { useEffect } from 'react';
import styled from 'styled-components';
import { Activity } from '../components/ui/Activity';
import { Balance } from '../components/ui/Balance';
import { Score } from '../components/ui/Score';
import { Stats } from '../components/ui/Stats';
import { TimingSession } from '../components/ui/TimingSession';
import { useStore } from '../utils/useStore';

export const Dashboard = () => {
	const testData = [
		['calorieCount', '1930'],
		['proteinCount', '155'],
		['carbohydrateCount', '290'],
		['lipidCount', '50'],
	];

	// console.log(useStore());
	const { user, activity, sessionsAverage, performance, getData } = useStore();

	useEffect(() => {
		getData();
	}, []);

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
				<Metrics>
					{testData.map((e, i) => (
						<Stats key={i} type={e[0]} val={e[1]} />
					))}
				</Metrics>
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

const Metrics = styled.ul`
	min-width: 258px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`;
