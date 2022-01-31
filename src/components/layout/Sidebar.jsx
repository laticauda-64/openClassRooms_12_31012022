import styled from 'styled-components';
import Meditation from '../../assets/img/meditation.svg';
import Swim from '../../assets/img/swim.svg';
import Bike from '../../assets/img/bike.svg';
import Gym from '../../assets/img/dumbbell.svg';

const Div = styled.aside`
	background: black;
	min-width: 117px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		color: white;
		font-size: 12px;
		writing-mode: vertical-rl;
		text-orientation: sideways;
		transform: rotate(180deg);
	}

	ul {
		height: 50%;
		max-height: 500px;
		display: flex;
		flex-direction: column;
	}
`;

const Icon = styled.li`
	height: 64px;
	width: 64px;
	background: white;
	border-radius: 6px;
	margin-bottom: 20px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
`;

export const Sidebar = () => {
	return (
		<Div>
			<ul>
				<Icon>
					<a href="#">
						<img src={Meditation} alt="Meditation" />
					</a>
				</Icon>
				<Icon>
					<a href="#">
						<img src={Swim} alt="Natation" />
					</a>
				</Icon>
				<Icon>
					<a href="#">
						<img src={Bike} alt="Velo" />
					</a>
				</Icon>
				<Icon>
					<a href="#">
						<img src={Gym} alt="Musculation" />
					</a>
				</Icon>
			</ul>
			<p>Copyright, SportSee 2020</p>
		</Div>
	);
};
