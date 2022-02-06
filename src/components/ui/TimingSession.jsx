import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const TimingSession = () => {
	// Format day of the week
	const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
	const formatDay = (item) => daysWeek[item];

	const dataMocked = [
		{
			day: 1,
			sessionLength: 30,
		},
		{
			day: 2,
			sessionLength: 23,
		},
		{
			day: 3,
			sessionLength: 45,
		},
		{
			day: 4,
			sessionLength: 50,
		},
		{
			day: 5,
			sessionLength: 0,
		},
		{
			day: 6,
			sessionLength: 0,
		},
		{
			day: 7,
			sessionLength: 60,
		},
	];

	return (
		<Figure>
			<ChartTitle>Durée moyenne des sessions</ChartTitle>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={dataMocked}>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickFormatter={formatDay}
						tick={{ fill: '#FFFFFF' }}
						tickMargin={10}
						tickSize={0}
						padding={{ left: 5, right: 5 }}
						fontSize={12}
					/>
					<YAxis hide domain={['dataMin-10', 'dataMax+1']} />
					<Tooltip content={<CustomTooltip />} />
					<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }} dot={{ r: 0 }} strokeWidth={2} />
				</LineChart>
			</ResponsiveContainer>
		</Figure>
	);
};

const CustomTooltip = ({ active, payload }) =>
	active ? (
		<ToolTipLabel>
			<div>{payload[0].value} min</div>
		</ToolTipLabel>
	) : null;

const Figure = styled.figure`
	background: #ff0000;
	border-radius: 5px;
	height: 236px;
	width: 258px;
	margin: 0 auto;
	padding: 60px 10px 10px 10px;
	position: relative;
`;

const ChartTitle = styled.h2`
	position: absolute;
	top: 20px;
	color: white;
	font-size: 15px;
`;

const ToolTipLabel = styled.div`
	padding: 10px 5px;
	background: #f1f1f1;
	font-size: 10px;
`;
