import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LayOut from "./LayOut/LayOut";
import { ROUTES } from "./routes/Routes";
import { Home, Login, Registration } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.HOME} index element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
