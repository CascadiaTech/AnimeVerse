import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import newLogo from 'assets/newLogo.png'
import video from 'assets/video.mp4'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

//padding: 8px 35px;

const StyledHeaderText1 = styled.text`
  font-size: calc(3 * (0.85vw + 0.85vh));
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
`
const StyledHeaderText2 = styled.text`
  font-size: calc(3 * (0.85vw + 0.85vh));
  color: #09008a;
  font-weight: bold;
  text-shadow: 0px 0px 4px #ccceff;
  position: relative;
  left: 15px;
  font-family: Montserrat, sans-serif;
`

const Headernew = () => {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 10) {
        return sethidden(false)
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
      <div className={'mobileheader'}>
        <video autoPlay loop muted playsInline className="video">
          <source src={video} type="video/mp4" />
        </video>{' '}
        <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
          <div className={'flexbox-vertical-container'}>
            <div>
              <img className={'header-image'} src={newLogo} alt="header" style={{ maxWidth: '30vw' }}></img>
            </div>
            <div style={{ marginTop: '20px' }} className="flexbox-vertical-container-left">
              <div className="flexbox-container" style={{ justifyContent: 'center' }}>
                <button onClick={() => window.open('')} className={'GitButton'}>
                  Buy
                </button>
                <button onClick={() => window.open('')} className={'QuoteButton'}>
                  FAQ
                </button>
                <button onClick={() => window.open('')} className={'QuoteButton'}>
                  Chart
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  )
}
export default Headernew
