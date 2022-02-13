import styled from 'styled-components';

export const Error404 = () => {
	return (
		<ErrorBlock>
			<div>
				<p className="bigText">Error 404 !</p>
				<p>Sorry, user or page not found...</p>
			</div>
		</ErrorBlock>
	);
};

const ErrorBlock = styled.div`
	width: 100%;
	height: 75%;
	color: red;
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	.bigText {
		font-size: 84px;
		font-weight: bold;
	}
`;
