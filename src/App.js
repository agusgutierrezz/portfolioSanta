import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import FooterMobile from "./components/FooterMobile.js";
import Contact from "./components/Contact.js";
import corazon from "./assets/corazon.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="top">
        <a href="#myWork">My Work!</a>
        <a href="#contact">Contact Me!</a>
      </nav>
      <header className="App-header">
        <Header />
      </header>
      <div className="body" id="myWork">
        <Content />
        <div className="top">
          <a href="#top">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9998 38.3334C9.87462 38.3334 1.6665 30.1253 1.6665 20.0001C1.6665 9.87486 9.87462 1.66675 19.9998 1.66675C30.1251 1.66675 38.3332 9.87486 38.3332 20.0001C38.3332 30.1253 30.1251 38.3334 19.9998 38.3334ZM19.9998 35.0001C28.2841 35.0001 34.9998 28.2844 34.9998 20.0001C34.9998 11.7158 28.2841 5.00008 19.9998 5.00008C11.7156 5.00008 4.99984 11.7158 4.99984 20.0001C4.99984 28.2844 11.7156 35.0001 19.9998 35.0001ZM21.6666 28.3334V17.357L25.488 21.1785L27.8451 18.8215L19.9999 10.9763L12.1547 18.8215L14.5117 21.1785L18.3332 17.357V28.3334H21.6666Z"
                fill="white"
              />
            </svg>
            Go to top!
          </a>
        </div>
      </div>
      <div className="contactMe" id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="footerMobile">
        <FooterMobile />
      </div>
      <div className="topFromBotton">
        <div className="bye">
          <h4>
            This portfolio and almost everything in it was made with a lot of
          </h4>
          <img className="corazon" src={corazon} alt="corazon" />
          <h4>by me. Thanks to Freepik for the rest!!</h4>
        </div>
        <div className="top">
          <a href="#top">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9998 38.3334C9.87462 38.3334 1.6665 30.1253 1.6665 20.0001C1.6665 9.87486 9.87462 1.66675 19.9998 1.66675C30.1251 1.66675 38.3332 9.87486 38.3332 20.0001C38.3332 30.1253 30.1251 38.3334 19.9998 38.3334ZM19.9998 35.0001C28.2841 35.0001 34.9998 28.2844 34.9998 20.0001C34.9998 11.7158 28.2841 5.00008 19.9998 5.00008C11.7156 5.00008 4.99984 11.7158 4.99984 20.0001C4.99984 28.2844 11.7156 35.0001 19.9998 35.0001ZM21.6666 28.3334V17.357L25.488 21.1785L27.8451 18.8215L19.9999 10.9763L12.1547 18.8215L14.5117 21.1785L18.3332 17.357V28.3334H21.6666Z"
                fill="white"
              />
            </svg>
            Go to top!
          </a>
        </div>
      </div>
      <div className="byeFromMobile">
        <h6>
          This portfolio and almost everything in it was made with love by me.
          Thanks Freepik for the rest!
        </h6>
        <img className="corazon" src={corazon} alt="corazon" />
      </div>
    </div>
  );
}

export default App;
