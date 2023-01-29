import DisplayText from './components/DisplayText/DisplayText';
import DisplayBoard from './components/DisplayBoard/DisplayBoard';
import Footer from './components/Footer/Footer';
import Process from './components/Process';
import './App.css';
import i from './Info';

const App = () => {
  return (
    <div className="body">
      <DisplayText heading={i.intro.heading} text={i.intro.text} />
      <DisplayBoard />
      <Process />
      <DisplayText heading={i.limitations.heading} text={i.limitations.text} />
      <DisplayText heading={i.plans.heading} text={i.plans.text} />
      <Footer />
    </div>
  );
};

export default App;
