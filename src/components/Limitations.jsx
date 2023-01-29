import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Limitations = () => {
  return (
    <>
      <DisplayText
        heading={i.limitations.heading}
        text={i.limitations.text[0]}
      />
      <DisplayText text={i.limitations.text[1]} />
      <DisplayText text={i.limitations.text[2]} />
    </>
  );
};

export default Limitations;
