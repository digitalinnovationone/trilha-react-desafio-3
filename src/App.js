import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Cadastro } from './pages/cadastro'
import { GlobalStyle } from './styles/global';
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
     <GlobalStyle />
     
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
     </Routes >
    </Router>
  );
}

export default App;
