import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

export default function PortfolioSection() {
  const [hidden1, sethiddens] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 2000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishiddens() {
      if (ScrollY < 75) {
        return sethiddens(true)
      } else {
        try {
          return sethiddens(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishiddens()
  }, [ScrollY])
  return (
    <>
      <animated.div hidden={hidden1} style={props} className={'animate__animated animate__fadeInUp'}>
        <div style={{ justifyContent: 'center' }}>
          <h1
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
              textAlign: 'center',
              color: '#000000',
              fontFamily: 'OpenDyslexic3',
            }}
          >
            Our Vision
          </h1>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.35vw + 0.35vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#000000',
              fontFamily: 'OpenDyslexic3',
              paddingBottom: '5vh',
              marginLeft: '10vw',
              marginRight: '10vw',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
            }}
          >
            {' '}
            AnimeVerse is on a mission that aims to incorporate the anime universe within the crypto space. With mass
            adoption being in motion when it comes to cryptocurrency, we believe there is an opportunity to fully
            integrate both worlds into one asset. We aim to generate passive income for investors in a unique way
            utilizing various utility concepts including introducing our own orginal characters into comic books
            followed by an animation series.
          </p>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.35vw + 0.35vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '000000',
              paddingBottom: '5vh',
              fontFamily: 'OpenDyslexic3',
              marginLeft: '10vw',
              marginRight: '10vw',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
            }}
          >
            {' '}
            Our vision doesn’t stop there as we push to grow and build a stable floor for our Market Cap, we will also
            make a difference in society. This will be by giving back to real world communities and youth organisations
            in the form of creative thinking materials i.e comic books, art and school supplies. Investors of AnimeVerse
            will be earning passive income but also be making a significant postive impact in society. Just as
            cryptocurrency is the future, so is our youth!
          </p>
        </div>
      </animated.div>
    </>
  )
}
