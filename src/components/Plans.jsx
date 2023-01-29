import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Plans = () => {
  return (
    <>
      <DisplayText heading={i.plans.heading} text={i.plans.text[0]} />
      <DisplayText text={i.plans.text[1]} />
      <DisplayText text={i.plans.text[2]} />
      <DisplayText text={i.plans.text[3]} />
    </>
  );
};

export default Plans;
