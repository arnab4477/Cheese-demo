import './DisplayText.css';

const DisplayText = ({ text, heading, color }) => {
  if (heading && text) {
    return (
      <div className="text-container" style={{ backgroundColor: color }}>
        <h2 className="heading">{heading}</h2>
        <p className="text">{text}</p>
      </div>
    );
  } else if (heading && !text) {
    return (
      <div className="text-container" style={{ backgroundColor: color }}>
        <h2 className="heading">{heading}</h2>
      </div>
    );
  }

  return (
    <div className="text-container" style={{ backgroundColor: color }}>
      <p className="text">{text}</p>
    </div>
  );
};

export default DisplayText;
