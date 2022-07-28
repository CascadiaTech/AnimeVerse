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
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                color: '#000000',
                fontFamily: 'OpenDyslexic3',
              }}
            >
              Tokenomics
            </h1>
            <p
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                maxWidth: '100vw',
                color: '#000000',
              }}
            >
              {' '}
              Total Token Supply: 1 Trillion
            </p>
            <p
              className={'HoverText'}
              style={{
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                maxWidth: '100vw',
                color: '#000000',
              }}
            >
              {' '}
              Buy Tax / Sell Tax: 6%
            </p>
          </div>
        </div>
        <div className={'flexbox-container'} style={{ maxWidth: '100vw', width: '100vw', justifyContent: 'center' }}>
          <div id={'content'} style={{ marginLeft: '2vw' }}>
            <div className={'flexbox-vertical-container'}>
              <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', color: '#000000' }}>
                {' '}
                Development and Marketing 2%{' '}
              </h1>
              <p
                style={{
                  fontSize: 'calc(3 * (0.22vw + 0.22vh))',
                  width: '20vw',
                  paddingLeft: '1vw',
                  lineHeight: 1.4,
                  color: '#000000',
                }}
              >
                A multi-sig wallet has been implemented, ensuring security as we push to support our marketing outreach
              </p>
            </div>
          </div>
          <div id={'content'} style={{ marginLeft: '2vw' }}>
            <div className={'flexbox-vertical-container'}>
              <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', color: '#000000' }}> ETH Reflection 3% </h1>
              <p
                style={{
                  fontSize: 'calc(3 * (0.22vw + 0.22vh))',
                  width: '20vw',
                  fontFamily: 'OpenDyslexic3',
                  lineHeight: 1.4,
                  color: '#000000',
                }}
              >
                Passive income by holding AnimeVerse. Holders rewarded with ETH which can be claimed anytime via our
                DApp.
              </p>
            </div>
          </div>
          <div id={'content'} style={{ marginLeft: '2vw' }}>
            <div className={'flexbox-vertical-container'}>
              <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3', color: '#000000' }}>
                {' '}
                Auto liquidity 1%{' '}
              </h1>
              <p
                style={{
                  fontSize: 'calc(3 * (0.23vw + 0.23vh))',
                  width: '20vw',
                  textAlign: 'center',
                  fontFamily: 'OpenDyslexic3',
                  lineHeight: 1.4,
                  color: '#000000',
                }}
              >
                Auto liquidity on each transaction to build the liquidity pool and create a stable floor.
              </p>
            </div>
          </div>
          <div id={'content'} style={{ marginLeft: '2vw', marginRight: '2vw' }}>
            <div className={'flexbox-vertical-container'}>
              {' '}
              <p
                style={{
                  fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                  width: '20vw',
                  textAlign: 'center',
                }}
              >
                {' '}
                <h1 style={{ fontSize: 'calc(3 * (0.4vw + 0.4vh))', fontFamily: 'OpenDyslexic3', color: '#000000' }}>
                  {' '}
                  No Team Tokens, No Private Sale or Presale{' '}
                </h1>
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  )
}
