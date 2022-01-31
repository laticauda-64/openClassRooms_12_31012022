import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.svg';

const Div = styled.div`
	background: black;
	height: 91px;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 4px 0px #00000040;
`;

const Menu = styled.ul`
	color: white;
	font-size: 24px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	max-width: 1240px;
`;

const Logo = styled.img`
	margin: 0 15px;
`;

export const Header = () => {
	return (
		<Div>
			<Logo src={LogoImg} alt="Logo de SportSee" />
			<Menu>
				<li>Accueil</li>
				<li>Profil</li>
				<li>Réglage</li>
				<li>Communauté</li>
			</Menu>
		</Div>
	);
};
