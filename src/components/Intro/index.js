import React, { useEffect, useState } from "react"
import Typed from "react-typed"
import Particles from "react-particles-js"

import * as S from "./styled"

const Intro = () => {
  const [showParticles, setShowParticle] = useState(true)
  const [particlesNumber, setParticleNumbers] = useState(200)
  useEffect(() => {
    if (window.innerWidth < 1000 && window.innerWidth > 800) {
      setParticleNumbers(75)
    } else if (window.innerWidth < 800 && window.innerWidth > 700) {
      setParticleNumbers(60)
    } else if (window.innerWidth < 700) {
      setShowParticle(false)
    } 
  }, [])
  return (
    <S.Section>
      {showParticles ? (
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
                value: particlesNumber,
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
      ) : (
        ""
      )}
      <S.StyledH1>
        Bem vindo ao meu <span>pequeno</span> espaço na internet
      </S.StyledH1>
      <S.TypeWriterH2>
        Aqui escrevo
      </S.TypeWriterH2>
      <S.TypeWriterH2>
        <Typed
          strings={[
            "<span style='color:var(--clr-accent);font-weight:900;'>tutoriais</span>",
            "<span style='color:var(--clr-accent);font-weight:900;'>post pythonicos</span>",
            "<span style='color:var(--clr-accent);font-weight:900;'>trivialidades</span>",
          ]}
          typeSpeed={20}
          backSpeed={40}
          startDelay={100}
          loop={true}
        />
      </S.TypeWriterH2>
    </S.Section>
  )
}

export default Intro
