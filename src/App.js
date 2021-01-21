import { Router } from "@reach/router"
import Home from "./components/Home/Home";
import Container from './components/Container/Container';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header />
    <Container>
      <Router>
        <Home path='/' />
      </Router>
    </Container>
    </>
  );
}

export default App;