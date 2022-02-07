import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const Balance = () => {
	const kind = {
		1: 'cardio',
		2: 'energy',
		3: 'endurance',
		4: 'strength',
		5: 'speed',
		6: 'intensity',
	};
	const data = [
		{
			value: 80,
			kind: 1,
		},
		{
			value: 120,
			kind: 2,
		},
		{
			value: 140,
			kind: 3,
		},
		{
			value: 50,
			kind: 4,
		},
		{
			value: 200,
			kind: 5,
		},
		{
			value: 90,
			kind: 6,
		},
	];

	const formatTick = (id) => kind[id].charAt(0).toUpperCase() + kind[id].slice(1);

	return (
		<Figure>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="65%" startAngle={210} endAngle={570} data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind" tickFormatter={formatTick} tick={{ fill: '#FFFFFF', fontSize: '0.875em' }} />
					<Radar legendType="none" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</Figure>
	);
};

const Figure = styled.figure`
	background: #282d30;
	border-radius: 5px;
	height: 236px;
	width: 258px;
	margin: 0 auto;
`;
