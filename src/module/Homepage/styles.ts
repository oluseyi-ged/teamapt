import styled from "styled-components"

const Container = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap"); */

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: fit-content;

  .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    width: 90%;

    .nav__right {
      display: flex;
      gap: 10px;
    }

    .nav__right__text {
      color: #fff;
      font-weight: 700;
      font-family: "Inter", sans-serif;
      font-size: 18px;

      span {
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
      }
    }
  }

  .showcase {
    margin-top: 13px;
    position: relative;
    width: 100%;

    .float__stars {
      z-index: 1;
      position: absolute;
      width: 80%;
      top: 0;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }

    &__title {
      color: #fff;
      font-weight: 300;
      font-size: 70px;
      text-align: center;
      line-height: 60px;
      position: relative;
      z-index: 3;
      padding: 0 22px;
      font-family: "Poppins", sans-serif;

      span {
        font-weight: 700;
      }
    }

    &__description {
      color: #fff;
      font-size: 29.5px;
      text-align: center;
      margin-top: 23px;
      padding: 0 22px;
      position: relative;
      z-index: 3;
      font-family: "Inter", sans-serif;

      span {
        font-weight: 700;
      }
    }
  }

  .card {
    font-family: "Inter", sans-serif;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 44px;
    padding: 24px 27px;
    backdrop-filter: blur(-5px) saturate(180%);
    -webkit-backdrop-filter: blur(-5px) saturate(180%);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.39) -213.5%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    width: 25.5%;
    height: fit-content;
    color: #fff;

    @media only screen and (max-width: 1200px) {
      width: 30%;
    }

    @media only screen and (max-width: 870px) {
      width: 50%;
    }

    @media only screen and (max-width: 600px) {
      margin: 0 22px;
      margin-top: 24px;
      margin-bottom: 44px;
      width: 60%;
    }

    @media only screen and (max-width: 500px) {
      width: 75%;
    }

    &__header {
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }

    &__list {
      padding-top: 16px;
      padding-bottom: 8px;
      display: flex;
      flex-direction: column;
      gap: 7px;

      p {
        font-weight: 400;
        font-size: 14px;

        span {
          font-weight: 700;
        }
      }
    }

    &__extra {
      font-weight: 400;
      font-size: 14px;
    }

    &__inner {
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      padding: 10px;
      margin-top: 16px;
      border: 1px solid rgba(255, 255, 255, 0.125);

      p {
        display: flex;
        gap: 5px;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }

  .footer__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .footer {
    position: relative;
    padding-top: 70px;
    padding-left: 50px;
    padding-right: 100px;
    padding-bottom: 0px !important;
    overflow: hidden;
    width: 30%;

    @media only screen and (max-width: 1300px) {
      width: 40%;
    }
    @media only screen and (max-width: 1100px) {
      width: 50%;
    }
    @media only screen and (max-width: 878px) {
      width: 60%;
    }
    @media only screen and (max-width: 678px) {
      width: 70%;
    }
    @media only screen and (max-width: 430px) {
      width: 80%;
    }

    .float__left {
      position: absolute;
      width: 150px;
      top: 0;
      left: 0;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-name: bouncing;
      animation-timing-function: ease;
      @keyframes bouncing {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    .float__right {
      position: absolute;
      width: 100px;
      bottom: 50px;
      right: 0;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-name: bouncing;
      animation-timing-function: ease;
      @keyframes bouncing {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
    .pot__img {
      z-index: 500;
      position: relative;
      padding-bottom: 0 !important;

      img {
        width: 500px;
        margin-bottom: 0;
        padding-bottom: 0;

        @media only screen and (max-width: 678px) {
          width: 400px;
        }
        @media only screen and (max-width: 430px) {
          width: 350px;
        }
      }
    }

    &__spinner {
      margin: 0 auto;
      position: absolute;
      bottom: -370px;
      right: -50px;
      z-index: 2;

      @media only screen and (max-width: 550px) {
        right: -30px;
      }
      @media only screen and (max-width: 468px) {
        right: -90px;
      }
    }
  }

  .float__starss {
    z-index: 1;
    position: absolute;
    width: 70%;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`
export default Container
