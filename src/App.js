import DisplayText from './components/DisplayText';
import DisplayBoard from './components/DisplayBoard';
import i from './Info';

const App = () => {
  return (
    <>
      <DisplayText heading={i.intro.heading} text={i.intro.text} />
      <DisplayBoard />
    </>
  );
};

export default App;
