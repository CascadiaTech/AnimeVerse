import 'animate.css'
import './styles.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

export default function AnimeTokenomics() {
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
        <div className={'contentcenter'}>
          <div style={{ justifyContent: 'center' }}>
            <h1
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.75vw + 0.75vh))',
                textAlign: 'center',
                color: '#ffffff',
                fontFamily: 'OpenDyslexic3',
              }}
            >
              Tokenomics
            </h1>
            <p
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                textAlign: 'center',
                fontFamily: 'OpenDyslexic3',
                maxWidth: '100vw',
                color: '#ffffff',
              }}
            >
              {' '}
              Total Token Supply: 1 Trillion
            </p>
            <p
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                textAlign: 'center',
                maxWidth: '100vw',
                color: '#ffffff',
                fontFamily: 'OpenDyslexic3',
              }}
            >
              {' '}
              Buy Tax / Sell Tax: 9.8%
            </p>
          </div>
        </div>
        <div className={'flexbox-container'} style={{ maxWidth: '100vw', width: '100vw', fontFamily: 'OpenDyslexic3' }}>
          <div className={'tokenomicscard'} style={{ marginLeft: '10vw' }}>
            <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3' }}> Marketing 5.8% </h1>
            <p
              style={{
                fontSize: 'calc(3 * (0.25vw + 0.25vh))',
                width: '20vw',
                paddingLeft: '1vw',
                fontFamily: 'OpenDyslexic3',
                lineHeight: 1.4,
              }}
            >
              A multi-sig wallet has been implemented, ensuring security as we push to support our marketing outreach
            </p>
          </div>
          <div className={'tokenomicscard'}>
            <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3' }}> ETH Reflection 2% </h1>
            <p
              style={{
                fontSize: 'calc(3 * (0.25vw + 0.25vh))',
                width: '20vw',
                fontFamily: 'OpenDyslexic3',
                lineHeight: 1.4,
              }}
            >
              Passive income by holding AnimeVerse. Holders rewarded with ETH which can be claimed anytime via our DApp.
            </p>
          </div>
          <div className={'tokenomicscard'}>
            <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3' }}> Liquidity Pool 2% </h1>
            <p
              style={{
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                width: '20vw',
                textAlign: 'center',
                fontFamily: 'OpenDyslexic3',
                lineHeight: 1.4,
              }}
            >
              Auto liquidity on each transaction to build the liquidity pool and create a stable floor.
            </p>
          </div>
          <div className={'tokenomicscard'} style={{ marginRight: '20vw' }}>
            {' '}
            <p
              style={{
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                width: '20vw',
                textAlign: 'center',
              }}
            >
              {' '}
              <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3' }}>
                {' '}
                SAFU Contract Renounced + Liquidity Locked{' '}
              </h1>
            </p>
          </div>
        </div>
      </animated.div>
    </>
  )
}
