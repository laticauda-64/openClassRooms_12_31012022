/**
 *
 * A simple loader component with a svg in the theme of Kasa's colors
 */
import LoaderSvg from '../assets/img/loader.svg';
import styled from 'styled-components';

export const Loader = () => {
	return (
		<LoaderFig>
			<div className="loader__content">
				<object type="image/svg+xml" data={LoaderSvg}>
					svg-animation
				</object>
			</div>
		</LoaderFig>
	);
};

const LoaderFig = styled.div`
	width: 100%;
	height: 100vh;

	.loader__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 75%;
	}

	.loader__content object {
		max-width: 50%;
	}
`;
