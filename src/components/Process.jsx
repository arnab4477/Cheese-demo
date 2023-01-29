import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Process = () => {
  return (
    <div>
      <DisplayText
        color="#825400"
        heading={i.process.heading}
        text={i.process.text[0]}
      />
      <DisplayText color="#825400" text={i.process.text[1]} />
      <DisplayText color="#825400" text={i.process.text[2]} />
      <DisplayText color="#825400" text={i.process.text[3]} />
      <DisplayText color="#825400" text={i.process.text[4]} />
      <DisplayText color="#825400" text={i.process.text[5]} />
      <DisplayText color="#825400" text={i.process.text[6]} />
    </div>
  );
};

export default Process;
