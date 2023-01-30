import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Limitations = () => {
  return (
    <>
      <div className="triangle-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="filler" style={{ backgroundColor: '#513500' }}></div>

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
