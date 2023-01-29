import './DisplayText.css';

const DisplayText = ({ text, heading }) => {
  if (heading && text) {
    return (
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    );
  } else if (heading && !text) {
    return (
      <div>
        <h2>{heading}</h2>
      </div>
    );
  }

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default DisplayText;
