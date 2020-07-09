/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './home.css';
import email from './../../assets/envelope.svg';
import lock from './../../assets/lock.svg';
import homeImg from './../../assets/login image.png';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import ButtonColored from '../../components/button/buttonColored';
import ButtonWhite from '../../components/button/button';
import facebook from './../../assets/social/fb.svg';
import instagram from './../../assets/social/instagram.svg';
import google from './../../assets/social/google.svg';


function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <div className="home__col">
          <img src={homeImg} alt="" />
        </div>

        <div className="divider"></div>

        <div className="home__col">
          <div className="home__welcome">
            <div className="home__welcome--big">
              Welcome Back <span>:)</span>
            </div>

            <div className="home__welcome--small mt">
              To keep connected with us please login with your email address and
              set password <span role="img">🔔</span>
            </div>
          </div>
          <form id="login" action='/dashboard' className="mt-big">
            <Input
              id={"email"}
              type={"email"}
              label={"Email Address"}
              icon={email}
            />
            <div className="mt">
              <Input
                id={"password"}
                type={"password"}
                label={"password"}
                icon={lock}
              />
            </div>
            <div className="mt ml row space-between">
              <Checkbox id={"remember"} label={"remember me"} />

              <a href="#0">Forgot Password</a>
            </div>
          </form>

          <div className="mt row">
            <ButtonColored label={"login now"} type={"submit"} form={"login"} />

            <div className="ml">
              <ButtonWhite label={"create account"} />
            </div>
          </div>

          <div className="mt">
            <p>Or you can join with</p>
          </div>

          <div className="mt row">
            <a href="#0" className="mr">
              <img src={facebook} width="35px" alt="facebook icon" />
            </a>
            <a href="#0" className="mr">
              <img src={google} width="35px" alt="google icon" />
            </a>
            <a href="#0">
              <img src={instagram} width="35px" alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Home;
