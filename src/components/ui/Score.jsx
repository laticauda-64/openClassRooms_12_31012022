import styled from 'styled-components';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';

export const Score = ({ userScore }) => {
	return (
		<Figure>
			<Title>Score</Title>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						cx={'50%'}
						cy={'50%'}
						startAngle={90}
						endAngle={450}
						innerRadius={'85%'}
						outerRadius={'100%'}
						cornerRadius={'50%'}
						dataKey="value"
						data={[
							{ name: 'score', value: userScore },
							{ name: 'total', value: 0.9 - userScore },
						]}>
						<Cell fill="#E60000" stroke="#E60000" />
						<Cell fill="transparent" stroke="transparent" />
					</Pie>
					<Pie cx={'50%'} cy={'50%'} outerRadius={'85%'} fill="#FFFFFF" data={[{ name: 'ring', value: 100 }]} dataKey="value" />
					<Legend verticalAlign="middle" align="center" content={CustomLegend} />
				</PieChart>
			</ResponsiveContainer>
		</Figure>
	);
};

const CustomLegend = ({ payload }) => (
	<LegendCustom>
		<BigNum>{payload[0].payload.value * 100}%</BigNum>
		<Desc>de votre</Desc>
		<Desc>objectif</Desc>
	</LegendCustom>
);

const Figure = styled.figure`
	background: #fbfbfb;
	border-radius: 5px;
	height: 236px;
	width: 258px;
	margin: 0 auto;
	position: relative;
	padding: 25px;
`;

const Title = styled.h2`
	font-size: 15px;
	font-weight: 500;
	position: absolute;
	top: 10px;
	left: 10px;
`;

const LegendCustom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BigNum = styled.h2`
	font-size: 32px;
	font-weight: 500;
`;

const Desc = styled.div`
	color: rgb(116, 121, 140);
	font-size: 14px;
`;

Score.propTypes = {
	userScore: propTypes.number,
};

CustomLegend.propTypes = {
	payload: propTypes.array,
};
