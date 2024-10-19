import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Cadaster } from './pages/cadaster'

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signup" element={<Cadaster />} />
     </Routes >
    </Router>
  );
}

export default App;
