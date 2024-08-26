import { Outlet } from "react-router";

const App = () => {
  let isAuth =true;
  return (
    <>
      <Outlet/>

    </>
  );
};

export default App;