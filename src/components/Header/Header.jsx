import { FaGithub, FaNpm, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header>
      <a
        href="https://www.npmjs.com/package/@arnab7/cheesejs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaNpm className="header-icon" />
      </a>
      <a
        href="https://github.com/arnab4477/CheeseJS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="header-icon" />
      </a>
      <a
        href="https://linkedin.com/in/arnab4477"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="header-icon" />
      </a>
    </header>
  );
};

export default Header;
