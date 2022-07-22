import './styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
import newLogo from 'assets/newLogo.png'
import Row from 'components/Row'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'
const FooterBackground = styled(Row)`
  justify-self: center;
  background-color: rgba(0, 0, 145, 0.76);
  width: 100vw;
  max-width: 100vw;
  height: 38vh;
  max-height: 38vh;
  padding: 15px;
  transform: translate(0%, 30%);
  z-index: -11;
  overflow: hidden;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-self: start;  
    `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: center;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-self: center;
    z-index: 99;
    position: relative;
    right: 10%;
    transform: translate(10%, 10%);
    margin: 0 auto;
    width: 100vw;
    max-width: 100vw;
    background-color: rgba(0, 0, 145, 0.76);
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

export default function FooterMenu() {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 2000) {
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
    <div>
      {!hidden ? (
        <div>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__animate__fadeInDown'}>
                    <FooterBackground>
                      <div className={'flexbox-container'}>
                        <img
                          src={newLogo}
                          alt="logo"
                          style={{
                            paddingLeft: '7vw',
                            marginLeft: '3vw',
                            marginRight: '8vw',
                            maxHeight: '18vw',
                            height: '18vw',
                          }}
                        ></img>
                        <div style={{ textAlign: 'center', maxWidth: '13vw', width: '13vw', marginRight: '18vw' }}>
                          <p
                            style={{
                              color: '#ffffff',
                              fontFamily: 'montserrat, sans-serif',
                              fontSize: 'calc(2 * (0.7vw + 0.7vh))',
                              fontWeight: 'bold',
                            }}
                          >
                            AnimeVerse
                          </p>
                          <p
                            style={{
                              color: '#ffffff',
                              fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                              lineHeight: 1.3,
                              fontFamily: 'montserrat, sans-serif',
                            }}
                          >
                            Bringing Anime and crypto together
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              color: '#ffffff',
                              fontFamily: 'montserrat, sans-serif',
                              fontSize: 'calc(2 * (0.7vw + 0.7vh))',
                              fontWeight: 'bold',
                            }}
                          >
                            Company Links
                          </p>
                          <div
                            className={'flexbox-vertical-container'}
                            style={{
                              textAlign: 'left',
                              maxWidth: '5vw',
                              width: '5vw',
                              marginRight: '18vw',
                              lineHeight: 2,
                            }}
                          >
                            <a
                              className={'four'}
                              href="https://twitter.com/AnimeVerseToken?t=kruSfQkxcFg6fBXgmFGx6A&s=09"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                fontFamily: 'montserrat, sans-serif',
                                fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                              }}
                            >
                              Twitter
                            </a>
                            <a
                              className={'four'}
                              href="https://t.me/AnimeVerse_PORTAL"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                fontFamily: 'montserrat, sans-serif',
                                fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                              }}
                            >
                              Telegram
                            </a>
                            <a
                              className={'four'}
                              href="https://app.uniswap.org/#/swap?inputCurrency=0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67&chain=mainnet"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                fontFamily: 'montserrat, sans-serif',
                                fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                              }}
                            >
                              Buy
                            </a>
                          </div>
                          <p style={{ color: '#ffffff', fontSize: 'calc(3.5 * (0.15vw + 0.15vh))' }}>
                            General Enquiries : admin@animeversetoken.com Marketing Enquiries :
                            marketing@animeversetoken.com Charity Enquiries : charity@animeversetoken.com
                          </p>
                        </div>
                      </div>
                    </FooterBackground>
                  </div>
                </animated.div>
              )
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
