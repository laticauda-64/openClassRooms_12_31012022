import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './assets/css/reset.css';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';

const Div = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	height: 100%;
`;

const MainContent = styled.div`
	display: flex;
	align-items: stretch;
	height: 100%;
`;

function App() {
	return (
		<Div className="App">
			<Header />
			<MainContent>
				<Sidebar />
				<Outlet />
			</MainContent>
		</Div>
	);
}

export default App;
