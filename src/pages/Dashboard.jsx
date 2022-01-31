import styled from 'styled-components';

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

	p {
		margin-top: 40px;
		font-size: 18px;
	}
`;

const Results = styled.article`
	min-height: 610px;
	display: flex;
`;

const Graphs = styled.div`
	background: pink;
	min-width: 835px;
	margin: 0 30px 0 0;
`;

const Metrics = styled.ul`
	background: #e4ebbf;
	min-width: 258px;
`;

export const Dashboard = () => {
	return (
		<Main>
			<h1>
				Bonjour <span>Thomas</span>
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			<Results>
				<Graphs></Graphs>
				<Metrics>
					<li>Calories</li>
					<li>Protéines</li>
					<li>Glucides</li>
					<li>Lipides</li>
				</Metrics>
			</Results>
		</Main>
	);
};
