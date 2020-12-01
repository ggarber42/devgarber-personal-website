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
        opacity: 0.2,
      }}
      params={{
        particles: {
          number: {
            value: 150,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
    <S.StyledH1>
      Bem vindo ao meu <span>pequeno</span> espaço na internet
    </S.StyledH1>
    <S.TypeWriterH2>
      <Typed
        strings={[
          "Aqui falo",
          "Aqui escrevo sobre",
          "Aqui escrevo sobre<br><span style='color:var(--clr-accent);font-weight:900;'>Javascript</span>",
          "Aqui escrevo sobre<br><span style='color:var(--clr-accent);font-weight:900;'>Python</span>",
          "Aqui escrevo sobre<br><span style='color:var(--clr-accent);font-weight:900;'>PHP</span>",
          "Aqui escrevo sobre<br><span style='color:var(--clr-accent);font-weight:900;'>tecnologias</span>",
        ]}
        typeSpeed={30}
        backSpeed={40}
        startDelay={100}
      />
    </S.TypeWriterH2>
  </S.Section>
)

export default Intro
