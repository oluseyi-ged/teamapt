import styled from "styled-components"

export const Container = styled.div`
  width: 225px;

  .btn__container {
    padding: 19.5px 23.5px;
    font-size: 0.9rem;
    background-color: #ecab03;
    border: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: #fff;
      font-size: 14px;
      width: 80%;
      text-align: center;
      cursor: pointer;
    }
  }
`
