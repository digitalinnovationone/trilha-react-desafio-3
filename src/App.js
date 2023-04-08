

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { Register } from './pages/register'


function App() {
  return (
  <Router>
    <Routes>
      <Route path="Plataforma-Dio/" element= {<Home />}/>
      <Route path="Plataforma-Dio/login" element= {<Login />}/>
      <Route path="Plataforma-Dio/feed" element= {<Feed />}/>
      <Route path="Plataforma-Dio/register" element= {<Register />}/>
    </Routes>
  </Router>
  );
}

export default App;
