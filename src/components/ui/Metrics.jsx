import styled from 'styled-components';
import { useStore } from '../../utils/useStore';
import { Stats } from './Stats';

export const Metrics = () => {
	const testData = [
		['calorieCount', '1930'],
		['proteinCount', '155'],
		['carbohydrateCount', '290'],
		['lipidCount', '50'],
	];

	const rawInput = {
		keyData: {
			calorieCount: '1930',
			proteinCount: '155',
			carbohydrateCount: '290',
			lipidCount: '50',
		},
	};

	const user = useStore();

	const convertObjectToArray = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

	// return (
	// 	<SideBar>
	// 		{Object.prototype.hasOwnProperty.call(user, 'keyData') &&
	// 			Array.from(user.keyData).map((e, i) => <Stats key={i} type={e[0]} val={e[1]} />)}
	// 	</SideBar>
	// );

	console.log(convertObjectToArray(user.keyData));

	return (
		<SideBar>
			{Array.from(user).length > 0 && user.id}
			{/* {Object.prototype.hasOwnProperty.call(user, 'keyData')
				? convertObjectToArray(user.keyData).map((e, i) => <Stats key={i} type={e[0]} val={e[1]} />)
				: 'non'} */}
			{/* {testData.map((e, i) => (
				<Stats key={i} type={e[0]} val={e[1]} />
			))} */}
			{/* {user && // 👈 null and undefined check
			Object.keys(user).length === 0 &&
			Object.getPrototypeOf(user) === Object.prototype
				? 'true'
				: convertObjectToArray(user.keyData).map((e, i) => <Stats key={i} type={e[0]} val={e[1]} />)} */}
		</SideBar>
	);
};

const SideBar = styled.ul`
	min-width: 258px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`;
