import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import newLogo from 'assets/newLogo.png'
//import video from 'assets/video.mp4'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
const activeClassName = 'ACTIVE'
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  &.${activeClassName} {
    border-radius: 14px;
    font-weight: 600;
    justify-content: center;
    color: #000000;
    background-color: ${({ theme }) => theme.bg0};
  }
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
        <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
          <div className={'flexbox-vertical-container'}>
            <div>
              <img className={'header-image'} src={newLogo} alt="header" style={{ maxWidth: '40vw' }}></img>
            </div>
            <div style={{ marginTop: '3vh' }} className="flexbox-vertical-container-left">
              <div className="flexbox-container" style={{ justifyContent: 'center' }}>
                <button
                  onClick={() =>
                    window.open(
                      'https://app.uniswap.org/#/swap?inputCurrency=0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67&chain=mainnet'
                    )
                  }
                  className={'QuoteButton'}
                >
                  Buy
                </button>
                <button className={'QuoteButton'}>
                  <StyledNavLink
                    style={{
                      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                      fontFamily: 'OpenDyslexic3',
                      paddingBottom: '1.5vh',
                      color: '#000000',
                      transform: 'translate(0%, -10%)',
                      paddingLeft: '3%',
                      paddingRight: '3%',
                      transition: '1s',
                    }}
                    id={'/Dapp'}
                    to={'/Dapp'}
                  >
                    Dashboard
                  </StyledNavLink>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.dextools.io/app/ether/pair-explorer/0xfd362c758a756bac42fce0ea7e83f5bb72730c6e'
                    )
                  }
                  className={'QuoteButton'}
                >
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
