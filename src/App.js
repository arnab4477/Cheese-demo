import DisplayText from './components/DisplayText/DisplayText';
import DisplayBoard from './components/DisplayBoard/DisplayBoard';
import Footer from './components/Footer/Footer';
import Process from './components/Process';
import Limitations from './components/Limitations';
import './App.css';
import i from './Info';

const App = () => {
  return (
    <div className="body">
      <DisplayText heading={i.intro.heading} text={i.intro.text} />
      <DisplayBoard />
      <Process />
      <Limitations />
      <DisplayText heading={i.plans.heading} text={i.plans.text} />
      <Footer />
    </div>
  );
};

export default App;
