import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

export default function PortfolioSection() {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: -2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 450) {
        return sethidden(true)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
  }, [ScrollY])
  return (
    <>
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
        <div style={{ justifyContent: 'center' }}>
          <h1
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              textAlign: 'center',
              color: '#ffffff',
              paddingBottom: '5vh',
            }}
          >
            Mission
          </h1>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.5vw + 0.5vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#ffffff',
              paddingBottom: '5vh',
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
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#ffffff',
              paddingBottom: '5vh',
            }}
          >
            About us
          </h1>
          <p
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.5vw + 0.5vh))',
              textAlign: 'center',
              maxWidth: '100vw',
              color: '#ffffff',
              paddingBottom: '5vh',
              paddingLeft: '20px',
              paddingRight: '20px',
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
