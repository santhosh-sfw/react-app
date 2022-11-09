import logo from './logo.svg';
import './App.css';
import { router } from './router/router';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {

  return (
    // <Routes>
    //   {
    //     router.map((route) => {
    //       return <Route path={route.path} element={route.comp} exact={route.exact} />
    //     })
    //   }
    // </Routes>
    <LandingPage/>
  );
}

export default App;
