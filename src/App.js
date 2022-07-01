import "./App.css";
import Logo from "./imgs/logo.svg";
import Arrow from "./imgs/arright.svg";
import Calendar from "./imgs/calendar.svg";
import star1 from "./imgs/star1.png";
import star2 from "./imgs/star2.png";
import star3 from "./imgs/star3.png";
import star4 from "./imgs/star4.png";
import star5 from "./imgs/star5.png";
import r1 from "./imgs/r11.svg";
import r2 from "./imgs/r12.svg";
import r3 from "./imgs/r13.svg";
import r4 from "./imgs/r14.svg";
import r5 from "./imgs/r15.svg";
import coinright from "./imgs/coinright.svg";
import coinleft from "./imgs/coinleft.svg";
import coinpot from "./imgs/coinpot.png";
import rotate from "./imgs/rotate.svg";
function App() {
  return (
    <div className="App">
      <div className="tops">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="sider">
          <div>
            <img src={Calendar} alt="logo" />
          </div>
          <div className="small">
            <h3>
              Day 1 <br></br>
              <span>of 5</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="others">
        <div className="pros">
          <h3>
            <span>Unlock to </span>
            <br></br>Power your dreams!
          </h3>
          <p>
            Stand a chance to win<br></br>
            <b>
              <span>N</span>3,000,000
            </b>
            everyday for the next 5 days
          </p>
        </div>
        <div className="circlic">
          <div className="top">🚀 How To Play</div>
          <div className="middle">
            <p>
              1. Guess the right combination of numbers<br></br>
              2. Win <b>N3,000,000</b> instantly
            </p>
            <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
          </div>
          <div className="bottom">
            <div>💡</div>
            <div>
              <p>
                Think well before you guess. You have only 2 attempts per day
                and even after you wi, you can come back the next day to try for
                another jackpot!
              </p>
            </div>
          </div>
        </div>
        <div className="buttomer">
          <button className="button">
            Play The Game <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="bots">
        <div className="coiner">
          <div>
            <img className="cright" src={coinleft} alt="alter" />
          </div>
          <div>
            <img className="cleft" src={coinright} alt="alter" />
          </div>
        </div>
        <div className="bubblewrap">
          <img className="bubble a1" src={star1} alt="alter" />
          <img className="bubble a2" src={star2} alt="alter" />
          <img className="bubble a3" src={star3} alt="alter" />
          <img className="bubble a4" src={star4} alt="alter" />
          <img className="bubble a5" src={star5} alt="alter" />
        </div>
        <div className="allall">
          <img className="a1" src={rotate} alt="alter" />
          <img className="a2" src={rotate} alt="alter" />
        </div>
        <div className="coinpots">
          <img src={coinpot} alt="coinpot" />
        </div>
      </div>
    </div>
  );
}

export default App;
