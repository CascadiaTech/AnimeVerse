import './styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import { useWeb3React } from '@web3-react/core'
import GoodKarma from 'assets/GoodKarma.png'
import HR from 'assets/HR.png'
import Momo from 'assets/MOMO.png'
import MrMoon from 'assets/MrMoon.png'
import Ned from 'assets/NED.png'
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
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.4,
                justifyContent: 'center',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                marginLeft: '10vw',
                marginRight: '10vw',
                color: '#ffcc00',
              }}
            >
              Our team is made up of passionate and professional crypto enthusiasts, each member bringing value from
              skillset to experience.
            </p>
            <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={MrMoon}
                  style={{ width: '15vw', paddingLeft: '2vw', paddingRight: '2vw' }}
                ></img>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={Ned}
                  style={{ width: '15vw', paddingLeft: '2vw', paddingRight: '2vw' }}
                ></img>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={HR}
                  style={{ width: '15vw', paddingLeft: '2vw', paddingRight: '2vw' }}
                ></img>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={Momo}
                  style={{ width: '15vw', paddingLeft: '2vw', paddingRight: '2vw' }}
                ></img>
              </div>
              <div className={'flexbox-vertical-container'}>
                <img
                  className={'img-icon'}
                  alt="icon"
                  src={GoodKarma}
                  style={{ width: '15vw', paddingLeft: '2vw', paddingRight: '2vw' }}
                ></img>
              </div>
            </div>
            <p
              style={{
                maxWidth: '80vw',
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.3,
                justifyContent: 'center',
                marginLeft: '10vw',
                marginRight: '10vw',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                color: '#ffffff',
              }}
            >
              The team came together to form AnimeVerse after being investors in a previous project where the
              Development Team lacked inspiration, transparency and determination needed for its community and overall
              project success.
            </p>
            <p></p>
            <p
              style={{
                maxWidth: '80vw',
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.3,
                justifyContent: 'center',
                marginLeft: '10vw',
                marginRight: '10vw',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                color: '#ffffff',
              }}
            >
              We vowed to create a project where clarity and proactiveness is at the forefront. By using motives that
              generate positive reactions and with a solid roadmap we are set out to make AnimeVerse the next talked
              about crypto!
            </p>
            <p></p>
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                textAlign: 'center',
                lineHeight: 1.4,
                justifyContent: 'center',
                fontFamily: 'OpenDyslexic3',
                marginBottom: '20px',
                marginLeft: '10vw',
                marginRight: '10vw',
                color: '#ffcc00',
              }}
            >
              The future is bright, the future is $AnimeVerse.
            </p>
          </div>
        </div>
      </animated.div>
    </>
  )
}
