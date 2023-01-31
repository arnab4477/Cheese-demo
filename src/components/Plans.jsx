import i from '../Info';
import DisplayText from './DisplayText/DisplayText';

const Plans = () => {
  return (
    <>
      <div className="tilt">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="filler" style={{ backgroundColor: '#281a00' }}></div>
      <DisplayText
        color="#281a00"
        heading={i.plans.heading}
        text={i.plans.text[0]}
      />
      <DisplayText color="#281a00" text={i.plans.text[1]} />
      <DisplayText color="#281a00" text={i.plans.text[2]} />
    </>
  );
};

export default Plans;
