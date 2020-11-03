import React from "react"
import Typed from "react-typed"
import Particles from "react-particles-js"

import * as S from "./styled"

const Intro = () => (
  <S.Section>
    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      params={{
        particles: {
          color: {
            value: "#000000",
          },
        },
      }}
    />
    <h1>
      <Typed
        strings={["Bem vindo ao meu espaço na internet<br><br>"]}
        typeSpeed={50}
        showCursor={false}
      />
      <Typed
        strings={[
          "Aqui vocês podem ver alguns artigos, tutorias, e também meu trabalho",
        ]}
        startDelay={3000}
        typeSpeed={50}
      />
    </h1>
  </S.Section>
)

export default Intro
