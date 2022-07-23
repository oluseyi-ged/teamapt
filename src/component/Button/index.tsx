/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react"
import { Container } from "./styles"

interface Props {
  title?: string
  icon?: string
  loading?: boolean
  onClick?: () => void
  btnStyle?: any
  textStyle?: any
}

const Button: FC<Props> = ({
  title,
  icon,
  loading,
  onClick,
  btnStyle,
  textStyle,
}) => {
  return (
    <Container>
      <div className="btn__container" style={btnStyle} onClick={onClick}>
        <button style={textStyle}>{title}</button>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1658495196/caret_right_lnugaf.svg"
          alt=""
        />
      </div>
    </Container>
  )
}

export default Button
