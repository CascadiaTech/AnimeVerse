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
              color: '#ffffff',
              fontFamily: 'OpenDyslexic3',
            }}
          >
            Mission
          </h1>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.35vw + 0.35vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#ffffff',
              fontFamily: 'OpenDyslexic3',
              paddingBottom: '5vh',
              marginLeft: '10vw',
              marginRight: '10vw',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
            }}
          >
            {' '}
            Create an Eco-System designed to benefit society while generating passive income for holders. By combining
            the love for anime and crypto, AnimeVerse will be present in events to support charitable causes to
            communities throughout the region.
          </p>
          <h1
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
              textAlign: 'center',
              maxWidth: '100vw',
              fontFamily: 'OpenDyslexic3',
              color: '#ffffff',
            }}
          >
            Vision
          </h1>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.35vw + 0.35vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#ffffff',
              paddingBottom: '5vh',
              fontFamily: 'OpenDyslexic3',
              marginLeft: '10vw',
              marginRight: '10vw',
              textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
            }}
          >
            {' '}
            Cryptocurrency is the future, and so is our youth. AnimeVerse is focused on providing contributions to the
            youth and the organizations aimed at excelling their education. Contributions will be made in Crypto and in
            the form of educational and creative thinking material such as Comic Books and Art Supplies. We envision a
            positive impact to all that see or hear AnimeVerse, and to achieve financial stability, whilst we expand our
            footprint and contributions. Investors will be earning passive income and also be making a difference in
            society.
          </p>
        </div>
      </animated.div>
    </>
  )
}
