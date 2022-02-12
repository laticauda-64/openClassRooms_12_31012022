import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const Balance = ({ performance }) => {
	const formatTick = (id) => performance.kind[id].charAt(0).toUpperCase() + performance.kind[id].slice(1);

	return (
		<Figure>
			{Object.keys(performance).length <= 0 ? null : (
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="70%" startAngle={210} endAngle={570} data={performance.data}>
						<PolarGrid radialLines={false} />
						<PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
						<PolarAngleAxis dataKey="kind" tickFormatter={formatTick} tick={{ fill: '#FFFFFF', fontSize: '0.875em' }} />
						<Radar legendType="none" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
			)}
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
