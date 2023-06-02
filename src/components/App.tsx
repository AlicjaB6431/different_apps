import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Page from './Page';
import styled from 'styled-components';


const App = () => {
	return (
		<Router>
			<MainWrapper>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
				<PageContainer>
					<Page />
				</PageContainer>
			</MainWrapper>
		</Router>
	);
};

export default App;
const MainWrapper = styled.div`
width: 100%;
height: 100%;
`
const NavigationContainer = styled.nav`
	
`
const PageContainer = styled.section`

`
// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy
