import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Page from "./Page";

const App = () => {
  // ToDo aside, to element boczny, właściwy tag HTML dla nawigacji to nav. Jest to wazne dla SEO i dla np. czytnikow i tzw dostępności
  return (
    <Router>
      <MainStyle>
        <aside>
          <Navigation />
        </aside>
        <section>
          <Page />
        </section>
      </MainStyle>
    </Router>
  );
};

export default App;

// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy

const MainStyle = styled.main`
  margin: 0;
`;
