import './styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import { useWeb3React } from '@web3-react/core'
import HR from 'assets/HR.png'
import Momo from 'assets/MOMO.png'
import MrMoon from 'assets/MrMoon.png'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

export default function TeamSection() {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  //const { addToken, success } = useAddTokenToMetamask(currencyToAdd)

  const props = useSpring({
    config: { delay: 1000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 50) {
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
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
        <div className={'flexbox-vertical-container-max-width'} style={{ width: '100vw' }}>
          <div className={'contentcenter'} style={{ width: '100vw' }}>
            <h1
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.75vw + 0.75vh))',
                textAlign: 'center',
                color: '#ffffff',
                lineHeight: 1.4,
                justifyContent: 'center',
                fontFamily: 'OpenDyslexic3',
              }}
            >
              Leadership Team
            </h1>
            <p
              style={{
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.4,
                justifyContent: 'center',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                marginLeft: '10vw',
                marginRight: '10vw',
                color: '#ffaa00',
              }}
            >
              The Leadership Team is made up of three individuals Mr. Moon, HR and Momo. All three have followed the KYC
              and Doxx protocol.
            </p>
            <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={MrMoon}
                  style={{
                    width: 'auto',
                    paddingBottom: '0%',
                    minHeight: '30vh',
                    maxHeight: '30vh',
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                  }}
                ></img>
                <p> MR.Moon</p>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={HR}
                  style={{
                    width: 'auto',
                    minHeight: '30vh',
                    maxHeight: '30vh',
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                  }}
                ></img>
                <p> H.R.</p>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={Momo}
                  style={{
                    width: 'auto',
                    minHeight: '30vh',
                    maxHeight: '30vh',
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                  }}
                ></img>
                <p> Momo</p>
              </div>
            </div>
            <p
              style={{
                maxWidth: '80vw',
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.3,
                justifyContent: 'center',
                marginLeft: '10vw',
                marginRight: '10vw',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                color: '#000000',
              }}
            >
              The team met in a previous crypto project as community members and investors. The development team of that
              particular project lacked the inspiration and desire required to be successful long term. Therefore we
              decided to take ownership of what was left and give back to the community that had lost out. By the way of
              relaunching a new project, a new vision and 7 months in the making AnimeVerse was launched.
            </p>
            <p></p>
            <p
              style={{
                maxWidth: '80vw',
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.3,
                justifyContent: 'center',
                marginLeft: '10vw',
                marginRight: '10vw',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                color: '#000000',
              }}
            >
              We vowed to create a project where clarity and proactiveness is at the forefront.
            </p>
            <p></p>
            <p
              style={{
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.4,
                justifyContent: 'center',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                marginLeft: '10vw',
                marginRight: '10vw',
                color: '#ffaa00',
              }}
            >
              The $ANIME team is fully dedicated into making AnimeVerse a GLOBAL BRAND that is recognised in
              cryptocurrency and the anime universe.
            </p>
          </div>
        </div>
      </animated.div>
    </>
  )
}
