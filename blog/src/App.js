import HomePage from "./pages/homePage/HomePage";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() 
{
  
  const checkUser = false;

  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/RegisterPage">
          {checkUser ? <HomePage/> : <RegisterPage />}
        </Route>
        <Route path="/LoginPage">
          {checkUser ? <HomePage/> : <LoginPage />}
        </Route>
        <Route path="/Write">
          {checkUser ? <Write/> : <RegisterPage />}  
        </Route>
        <Route path="/Settings">
          {checkUser ? <Settings/> : <RegisterPage />}
        </Route>
        <Route path="/post/:postId">
              <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
