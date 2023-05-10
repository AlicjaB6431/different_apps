import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Page from './Page';

const App = () => {
	return (
		<Router>
			<main>
				<nav>
					<Navigation />
				</nav>
				<section>
					<Page />
				</section>
			</main>
		</Router>
	);
};

export default App;

// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy
