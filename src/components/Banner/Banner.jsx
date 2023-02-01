import './Banner.css';
import Horse from './Horse.png';

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner-h1">Welcome to CheeseJS</h1>
      <img className="horse" src={Horse} alt="Your" />
    </div>
  );
};

export default Banner;
