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
      <div className={'contentcenter'}>
        <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
          <div style={{ justifyContent: 'center' }}>
            <h1
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.75vw + 0.75vh))',
                textAlign: 'center',
                color: '#ffffff',
                fontFamily: 'OpenDyslexic3',
                paddingBottom: '5vh',
              }}
            >
              Tokenomics
            </h1>
            <p
              className={'HoverText'}
              style={{
                backgroundColor: '#0011ffc7',
                borderColor: 'rgb(255, 255, 255)',
                borderRadius: '10px',
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                textAlign: 'center',
                fontFamily: 'OpenDyslexic3',
                maxWidth: '100vw',
                color: '#ffffff',
                paddingBottom: '5vh',
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
                paddingBottom: '5vh',
              }}
            >
              {' '}
              Buy Tax / Sell Tax: 9.8%
            </p>
            <div className={'flexbox-container'}>
              <div className={'tokenomicscard'}>
                Marketing 5.8%
                <p style={{ fontSize: 'calc(3 * (0.2vw + 0.2vh))', maxWidth: '150px' }}>
                  A multi-sig wallet has been implemented, ensuring security as we push to support our marketing
                  outreach
                </p>
              </div>
              <div className={'tokenomicscard'}>
                ETH Reflection 2%
                <p style={{ fontSize: 'calc(3 * (0.2vw + 0.2vh))', maxWidth: '150px' }}>
                  Passive income by holding AnimeVerse. Holders rewarded with ETH which can be claimed anytime via our
                  DApp.
                </p>
              </div>
              <div className={'tokenomicscard'}>
                Liquidity Pool 2%
                <p style={{ fontSize: 'calc(3 * (0.2vw + 0.2vh))', maxWidth: '150px' }}>
                  Auto liquidity on each transaction to build the liquidity pool and create a stable floor.
                </p>
              </div>
              <div className={'tokenomicscard'}>
                {' '}
                <p style={{ fontSize: 'calc(3 * (0.3vw + 0.3vh))', maxWidth: '150px' }}>
                  {' '}
                  SAFU Contract to be Renounced + Liquidity Locked
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  )
}
