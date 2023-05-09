import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RockPaperScisorsApp from "../apps/rock-paper/RockPaperScisorsApp";

const Page = () => {
  return (
    <Routes>
      <Route path="/rock-paper-scisors" Component={RockPaperScisorsApp}></Route>
    </Routes>
  );
};

export default Page;

// tutuaj tylko importuje wszystko i przekaazuje na jakich ścieżkach mas ię wyświetlać
