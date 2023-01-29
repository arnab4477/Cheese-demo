import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Process = () => {
  return (
    <>
      <DisplayText heading={i.process.heading} text={i.process.text[0]} />
      <DisplayText text={i.process.text[1]} />
      <DisplayText text={i.process.text[2]} />
      <DisplayText text={i.process.text[3]} />
      <DisplayText text={i.process.text[4]} />
      <DisplayText text={i.process.text[5]} />
      <DisplayText text={i.process.text[6]} />
    </>
  );
};

export default Process;
