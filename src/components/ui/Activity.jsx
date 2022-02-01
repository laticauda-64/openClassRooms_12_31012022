import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const Activity = () => {
	const mockDataSession = [
		{
			day: '2020-07-01',
			kilogram: 80,
			calories: 240,
		},
		{
			day: '2020-07-02',
			kilogram: 80,
			calories: 220,
		},
		{
			day: '2020-07-03',
			kilogram: 81,
			calories: 280,
		},
		{
			day: '2020-07-04',
			kilogram: 81,
			calories: 290,
		},
		{
			day: '2020-07-05',
			kilogram: 80,
			calories: 160,
		},
		{
			day: '2020-07-06',
			kilogram: 78,
			calories: 162,
		},
		{
			day: '2020-07-07',
			kilogram: 76,
			calories: 390,
		},
	];

	return (
		<Figure>
			<Legend>
				<h2>Activité quotidienne</h2>
				<ul>
					<li>Poids (kg)</li>
					<li>Calories brûlées (kCal)</li>
				</ul>
			</Legend>
			<ResponsiveContainer width="100%" height="80%">
				<BarChart data={mockDataSession}>
					<CartesianGrid strokeDasharray="2" vertical={false} />
					<XAxis dataKey="day" tickMargin={16} tickFormatter={(day) => new Date(day).getDate()} tickSize={0} minTickGap={30} />
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={40}
						tickSize={0}
						axisLine={false}
						domain={['dataMin-5', 'dataMax+0']}
						interval={'preserveEnd'}
						tickCount={3}
					/>
					<YAxis yAxisId="calories" hide orientation="right" domain={['dataMin-100', 'dataMax+0']} />
					<Tooltip content={<CustomTooltip />} />
					<Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
					<Bar yAxisId="calories" dataKey="calories" fill="transparent" barSize={3} />
					<Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</Figure>
	);
};

const CustomTooltip = ({ active, payload }) =>
	active ? (
		<TooltipBlock>
			<div>{payload[0].value}kg</div>
			<div>{payload[1].value}kCal</div>
		</TooltipBlock>
	) : null;

const Figure = styled.figure`
	height: 320px;
	background: #fbfbfb;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 25px;

	.recharts-responsive-container {
		margin-top: auto;
	}
`;

const Legend = styled.div`
	display: flex;

	h2 {
		font-size: 15px;
		font-weight: 500;
	}

	ul {
		display: flex;
		align-items: center;
		margin-left: auto;
		gap: 15px;
		li {
			font-size: 14px;
			color: #74798c;
			display: flex;
			align-items: center;
			gap: 10px;
		}
		li:before {
			display: block;
			content: '';
			width: 8px;
			height: 8px;
			border-radius: 4px;
		}
		li:first-child {
			&:before {
				background-color: black;
			}
		}
		li:last-child {
			&:before {
				background-color: red;
			}
		}
	}
`;

const TooltipBlock = styled.div`
	background: #e60000;
	color: white;
	font-size: 9px;
	font-weight: 500;
	padding: 15px 10px;

	div:first-child {
		margin-bottom: 10px;
	}
`;
