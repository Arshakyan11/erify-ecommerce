import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LayOut;
