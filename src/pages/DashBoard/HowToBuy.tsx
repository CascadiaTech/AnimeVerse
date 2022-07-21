import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
//import { animated } from 'react-spring'
//import { useSpring } from 'react-spring/web'
import { animated, useTransition } from 'react-spring'

import howtobuy from '../../assets/howtobuy.mp4'
const HowToBuyPage = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 40) {
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
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} key={key}>
              <div className={'animate__animated animate__animate__fadeInDown'}>
                <div className={'flexbox-vertical-container'}>
                  <div className={'howtobuyheader'}>
                    <h1 className={'Animeverseblackheadertext'}> How to Buy</h1>
                  </div>
                  <div className={'HowToBuy'}>
                    <video autoPlay loop muted playsInline className="video">
                      <source src={howtobuy} type="video/mp4" />
                    </video>
                  </div>
                  <div className={'mobilebuybuttons'}>
                    <button className={'Animebuybutton'}> Buy On Uniswap </button>
                    <button className={'Animebuybutton'}> Watch on Youtube </button>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </>
  )
}
export default HowToBuyPage
