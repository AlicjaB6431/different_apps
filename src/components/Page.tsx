import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RockPaperScisorsApp from "../apps/rock-paper/RockPaperScisorsApp";
import ToDoList from "../apps/to-do-list/ToDoList";

const Page = () => {
  return (
    <Routes>
      <Route path="/rock-paper-scisors" Component={RockPaperScisorsApp}></Route>
      <Route path="/to-do-list" Component={ToDoList}></Route>
    </Routes>
  );
};

export default Page;

// tutuaj tylko importuje wszystko i przekaazuje na jakich ścieżkach mas ię wyświetlać
