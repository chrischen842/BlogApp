import HomePage from "./pages/homePage/HomePage";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

function App() {
  return (
    <>
      <Topbar/>
      <RegisterPage/>
    </>
  );
}

export default App;
