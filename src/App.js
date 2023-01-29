import DisplayText from './components/DisplayText';
import DisplayBoard from './components/DisplayBoard';
import Footer from './components/Footer';
import i from './Info';

const App = () => {
  return (
    <>
      <DisplayText heading={i.intro.heading} text={i.intro.text} />
      <DisplayBoard />
      <Footer />
    </>
  );
};

export default App;
