import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Treatments from './Components/Treatments';
import Timetable from './Components/Timetable';
import Contact from './Components/Contact';
import { Switch , Route , Redirect } from 'react-router-dom';
import UpArrow from './Components/UpArrow';
import Footer from './Components/Footer';
import WhatsappIcon from './Components/WhatsappIcon';

function App() {
  return (
    <>
      <Navbar />
      <UpArrow />
      <WhatsappIcon />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/treatments" component={Treatments} />
        {/* <Route exact path="/timetable" component={Timetable} /> */}
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
