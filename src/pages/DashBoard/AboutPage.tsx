import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import benefitIcon from 'assets/icons/benifit_icon.png'
import communityIcon from 'assets/icons/community.png'
import fundIcon from 'assets/icons/fund-icon-6.png'
import keyIcon from 'assets/icons/key_icon.png'
import utilityIcon from 'assets/icons/utilityIcon.png'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'
const StyledHeader = styled.text`
  font-size: calc(3 * (0.75vw + 0.75vh));
  text-shadow: '0px 2px 0px rgba(0, 0, 0, 0.4)';
  color: #000000;
  justify-content: center;
  font-family: OpenDyslexic3;
  font-weight: bold;
  text-align: center;
`

const AboutSection = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000, delay: 1000 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 900) {
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
                    <div className={'flexbox-vertical-container-max-width'}>
                      <div className={'contentcenter'}>
                        {' '}
                        <StyledHeader>About Us</StyledHeader>
                        <p></p>
                        <p></p>
                        <p
                          style={{
                            maxWidth: '70vw',
                            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                            fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            justifyContent: 'center',
                            fontFamily: 'OpenDyslexic3',
                            marginLeft: '20vw',
                            marginRight: '20vw',
                            marginBottom: '20px',
                            color: '#ffcc00',
                          }}
                        >
                          AnimeVerse, A unique token set out to make a difference in society by using anime & crypto in
                          the DeFi space.
                        </p>
                        <p
                          style={{
                            maxWidth: '70vw',
                            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                            fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            justifyContent: 'center',
                            fontFamily: 'OpenDyslexic3',
                            marginLeft: '20vw',
                            marginRight: '20vw',
                            marginBottom: '20px',
                            color: '#000000',
                          }}
                        >
                          $ANIME is a community-based ERC20 token combining anime with utility. The vision is simple, an
                          ECO-SYSTEM designed to benefit society while generating passive income for investors.
                        </p>
                        <p
                          style={{
                            maxWidth: '70vw',
                            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                            fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            justifyContent: 'center',
                            fontFamily: 'OpenDyslexic3',
                            marginLeft: '20vw',
                            marginRight: '20vw',
                            marginBottom: '20px',
                            color: '#000000',
                          }}
                        >
                          Therefore, buy and sell tax is 9.8% each way with tokenomics that reward holders generously.
                          (Over 20% of the total tax is rewarded back to holders)
                        </p>
                        <p></p>
                        <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                              }}
                            >
                              <img className={'card-icon'} alt="icon" src={benefitIcon} style={{ width: '8vw' }}></img>
                            </div>
                            <h1 style={{ color: '#000000', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Team Tokens</h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                              }}
                            >
                              <img
                                className={'card-icon'}
                                alt="icon"
                                src={communityIcon}
                                style={{ width: '8vw' }}
                              ></img>
                            </div>
                            <h1 style={{ color: '#000000', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Community</h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                              }}
                            >
                              <img className={'card-icon'} alt="icon" src={fundIcon} style={{ width: '8vw' }}></img>
                            </div>
                            <h1 style={{ color: '#000000', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Income</h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginTop: 20,
                                marginRight: '2vw',
                              }}
                            >
                              <img className={'card-icon'} alt="icon" src={utilityIcon} style={{ width: '8vw' }}></img>
                            </div>
                            <h1 style={{ color: '#000000', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Utility</h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                              }}
                            >
                              <img className={'card-icon'} alt="icon" src={keyIcon} style={{ width: '8vw' }}></img>
                            </div>
                            <h1 style={{ color: '#000000', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>KYC & Audit</h1>
                          </div>
                        </div>
                        <p
                          style={{
                            maxWidth: '70vw',
                            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                            fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            justifyContent: 'center',
                            fontFamily: 'OpenDyslexic3',
                            marginLeft: '20vw',
                            marginRight: '20vw',
                            marginBottom: '20px',
                            color: '#000000',
                          }}
                        >
                          Using our utility, AnimeVerse will give back to society by means of fun and educational
                          events. With the power of crypto and blockchain technology AnimeVerse will also introduce its
                          P2E utility.
                        </p>
                      </div>
                    </div>
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
export default AboutSection
