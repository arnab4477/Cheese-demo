import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Limitations = () => {
  return (
    <>
      <DisplayText
        color="#513500"
        heading={i.limitations.heading}
        text={i.limitations.text[0]}
      />
      <DisplayText color="#513500" text={i.limitations.text[1]} />
      <DisplayText color="#513500" text={i.limitations.text[2]} />
    </>
  );
};

export default Limitations;
