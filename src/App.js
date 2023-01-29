import DisplayText from './components/DisplayText/DisplayText';
import DisplayBoard from './components/DisplayBoard/DisplayBoard';
import Footer from './components/Footer/Footer';
import Process from './components/Process';
import Limitations from './components/Limitations';
import Plans from './components/Plans';
import './App.css';
import i from './Info';

const App = () => {
  return (
    <>
      <DisplayText
        heading={i.intro.heading}
        text={i.intro.text}
        color="#513500"
      />
      <DisplayBoard />
      <Process />
      <Limitations />
      <Plans />
      <Footer />
    </>
  );
};

export default App;
