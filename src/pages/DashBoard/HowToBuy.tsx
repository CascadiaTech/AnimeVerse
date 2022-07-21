import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

import howtobuy from '../../assets/howtobuy.mp4'
const HowToBuyPage = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
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
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
        <div className={'HowToBuy'}>
          <video autoPlay loop muted playsInline className="video">
            <source src={howtobuy} type="video/mp4" />
          </video>
          <button className={'GitButton'}> Buy On Uniswap </button>
          <button className={'GitButton'}> Watch on Youtube </button>
        </div>
      </animated.div>
    </>
  )
}
export default HowToBuyPage
