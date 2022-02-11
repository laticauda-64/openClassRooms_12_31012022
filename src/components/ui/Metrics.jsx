import styled from 'styled-components';
import { Stats } from './Stats';

export const Metrics = ({ data }) => {
	const convertPropToArray = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

	return (
		<SideBar>
			{convertPropToArray(data.keyData).map((e, i) => (
				<Stats key={i} type={e[0]} val={e[1]} />
			))}
		</SideBar>
	);

	// console.log(convertPropToArray(user.keyData));
};

const SideBar = styled.ul`
	min-width: 258px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`;
