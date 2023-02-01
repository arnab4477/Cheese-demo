import DisplayText from './components/DisplayText/DisplayText';
import DisplayBoard from './components/DisplayBoard/DisplayBoard';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Process from './components/Process';
import Limitations from './components/Limitations';
import Plans from './components/Plans';
import './App.css';
import i from './Info';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <section>
        <div className="filler" style={{ backgroundColor: '#db3e00' }}></div>
        <div className="book-shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <DisplayText
          heading={i.intro.heading}
          text={i.intro.text}
          color="#db3e00"
        />
      </section>
      <section>
        <div className="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <DisplayBoard />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Limitations />
      </section>
      <section>
        <Plans />
      </section>

      <Footer />
    </>
  );
};

export default App;
