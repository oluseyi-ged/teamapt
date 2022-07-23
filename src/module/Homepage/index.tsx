/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { FC, PropsWithChildren } from "react"
import Button from "src/component/Button"
import Container from "./styles"
import Lottie from "react-lottie"
import lightAnim from "src/lotties/light-effect.json"
const Fade = require("react-reveal/Fade")

const LottieFixed = Lottie as unknown as FC<
  PropsWithChildren<{ options: any; height: any; width: any }>
>

const Homepage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lightAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Container>
      <div className="nav__container">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1658495197/Logo_zbvhc1.svg"
          alt=""
        />
        <div className="nav__right">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1658495196/calendar_vxi0bl.svg"
            alt=""
          />
          <p className="nav__right__text">
            Day 1 <br />
            <span>of 5</span>
          </p>
        </div>
      </div>

      <div className="showcase">
        <Fade bottom>
          <h1 className="showcase__title">
            Unlock to <br />
            <span>Power your dreams!</span>
          </h1>
        </Fade>
        <Fade bottom>
          <p className="showcase__description">
            Stand a chance to win <br />
            <span> N3,000,000</span> everyday for the next 5 days
          </p>
        </Fade>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1658495198/top_stars_xrelyg.svg"
          alt=""
          className="float__stars"
        />
      </div>

      <Fade bottom>
        <div className="card">
          <p className="card__header">🚀 How To Play</p>
          <div className="card__list">
            <p>1. Guess the right combination of numbers</p>
            <p>
              2. Win <span>N3,000,000</span> instantly
            </p>
          </div>
          <p className="card__extra">
            Sounds unbelievable? Well, guess right & see for yourself!
          </p>

          <div className="card__inner">
            <p>
              💡
              <span>
                Think well before you guess. You have only 2 attempts per day
                and even after you win, you can come back the next day to try
                for another jackpot!
              </span>
            </p>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <Button title="Play The Game" />
      </Fade>

      <div className="footer__container">
        <Fade bottom>
          <div className="footer">
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1658495197/coin_left_ch6ikg.png"
              alt=""
              className="float__left"
            />
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1658495197/coin_right_cq6x2n.png"
              alt=""
              className="float__right"
            />
            <div className="pot__img">
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1658495198/coin_pot_y0ftq9.svg"
                alt=""
              />
            </div>

            <div className="footer__spinner">
              <LottieFixed options={defaultOptions} height={700} width={700} />
            </div>
          </div>
        </Fade>
      </div>

      <img
        src="https://res.cloudinary.com/odd-developer/image/upload/v1658495198/top_stars_xrelyg.svg"
        alt=""
        className="float__starss"
      />
    </Container>
  )
}

export default Homepage
