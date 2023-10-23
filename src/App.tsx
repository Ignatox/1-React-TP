
import Header from "./components/Header/Header"

import "./styles/styles.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Container} from "react-bootstrap";
//suspense carga lo de approutes en segundo plano
import {Suspense} from 'react';
import Loader
 from "./components/Loader/Loader";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Container style={{minHeight:'100vh', minWidth: '100%', padding:'0'}}>
        <Suspense fallback={<Loader/>} >   
      <AppRoutes/>
        </Suspense>
      </Container>
      </Router>
      <Footer/>
    </>
  )
}

export default App
