import DisplayText from './components/DisplayText';
import i from './Info';

const App = () => {
  return (
    <>
      <DisplayText heading={i.intro.heading} text={i.intro.text} />
    </>
  );
};

export default App;
