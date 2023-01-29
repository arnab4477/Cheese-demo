import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Plans = () => {
  return (
    <>
      <DisplayText
        color="#281a00"
        heading={i.plans.heading}
        text={i.plans.text[0]}
      />
      <DisplayText color="#281a00" text={i.plans.text[1]} />
      <DisplayText color="#281a00" text={i.plans.text[2]} />
      <DisplayText color="#281a00" text={i.plans.text[3]} />
    </>
  );
};

export default Plans;
