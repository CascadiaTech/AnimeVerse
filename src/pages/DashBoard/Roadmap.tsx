import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import LinePic from 'assets/LinePic.png'
//import fundIcon from 'assets/icons/fund-icon-6.png'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'
const StyledHeader = styled.text`
  font-size: calc(3 * (0.75vw + 0.75vh));
  text-shadow: '0px 2px 0px rgba(0, 0, 0, 0.4)';
  color: #000000;
  justify-content: center;
  font-weight: bold;
  text-align: center;
`

const RoadmapSection = () => {
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
                        <StyledHeader>Roadmap</StyledHeader>
                        <p></p>
                        <img src={LinePic} alt="linedivider" style={{ width: '50vw' }}></img>
                        <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'RoadmapHoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                                justifyContent: 'left',
                                paddingRight: '1vw',
                                paddingLeft: '1vw',
                              }}
                            >
                              <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Phase 1</h1>
                              <p style={{ maxWidth: '15vw', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.4 }}>
                                {' '}
                                ✔️ TokenStealth Launch <br /> ✔️Website Reveal <br /> ✔️Social Media Presence <br />{' '}
                                ✔️Paid Marketing <br /> {''}&nbsp;&nbsp;•&nbsp; 500 Holders <br /> ✔️NFT Collection
                                Preview <br /> ✔️Smart Contract Audit
                              </p>
                            </div>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'RoadmapHoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                                paddingRight: '1vw',
                                paddingLeft: '1vw',
                              }}
                            >
                              <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Phase 2</h1>
                              <p style={{ maxWidth: '25vw', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.4 }}>
                                •&nbsp;AnimeVerse theme song
                                <br />
                                •&nbsp;Token Staking
                                <br />
                                •&nbsp;NFT Staking 1000 Holders <br />
                                •&nbsp;CoinGecko Listing <br /> •&nbsp;CoinMarketCap Listing <br /> ✔️ Marketing
                                Campaign <br /> •&nbsp;Exchange Listings <br />
                                •&nbsp;Whitepaper Release
                              </p>
                            </div>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'RoadmapHoverCard'}
                              style={{
                                marginTop: 20,
                                marginRight: '2vw',
                                paddingRight: '1vw',
                                paddingLeft: '1vw',
                              }}
                            >
                              <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Phase 3</h1>
                              <p style={{ maxWidth: '25vw', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.4 }}>
                                •&nbsp;5000 Holders <br /> •&nbsp;Partnerships <br /> •&nbsp;CryptoCart.cc Listing{' '}
                                <br /> •&nbsp;Shopping.io Listing <br />
                                ✔️Charitable Society Givebacks
                                <br /> •&nbsp;Metaverse Development <br /> •&nbsp;Comic book Development <br />
                                •&nbsp;AnimeVerse merchandise
                                <br /> •&nbsp;Pilot episode to 2D animated series
                              </p>
                            </div>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'RoadmapHoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 20,
                                paddingRight: '1vw',
                                paddingLeft: '1vw',
                              }}
                            >
                              <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Phase 4</h1>
                              <p style={{ maxWidth: '25vw', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.4 }}>
                                •&nbsp;10,000 Holders <br /> •&nbsp;Animeverse Game Release
                                <br /> •&nbsp;AnimeVerse Marketplace
                                <br />
                                •&nbsp;Digitally published Comic book
                                <br />
                                •&nbsp;Anime Industry Partnerships <br />
                                •&nbsp;Original animated series
                              </p>
                            </div>
                          </div>
                        </div>
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
export default RoadmapSection
