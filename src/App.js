import { Router } from "@reach/router"
import Home from "./components/Home/Home";
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import ShopDetails from "./components/ShopDetails/ShopDetails";

const App = () => {
  return (
    <>
    <Header />
    <Container>
      <Router>
        <Home path='/' exact />
        <ShopList path='/shops' />
        <ShopDetails path='/shopDetails' />
      </Router>
    </Container>
    </>
  );
}

export default App;