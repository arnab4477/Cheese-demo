import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Process = () => {
  return (
    <div>
      <div className="triangle-1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="filler" style={{ backgroundColor: '#825400' }}></div>

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
