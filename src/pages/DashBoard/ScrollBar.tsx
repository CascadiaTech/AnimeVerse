import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'

import discord from '../../assets/images/discord.png'
import instagram from '../../assets/images/instagram.png'
import tglink from '../../assets/images/tglink.png'
import tiktok from '../../assets/images/tiktok.png'
import twitter from '../../assets/images/twitter.png'
import uniswap from '../../assets/images/uniswap.png'

export function SocialScrollBar() {
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
      if (ScrollY < 60) {
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
                  <h1 style={{ color: 'black', fontFamily: 'OpenDyslexic3' }}> Social Links </h1>
                  <div
                    className={'flexbox-container'}
                    style={{ width: '100vw', textAlign: 'center', justifyContent: 'left' }}
                  >
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/AnimeVerseToken?t=kruSfQkxcFg6fBXgmFGx6A&s=09"
                      >
                        <img className={'socialimage'} src={twitter} alt="tglink"></img>
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://t.me/AnimeVerse_PORTAL">
                        <img className={'socialimage'} src={tglink} alt="tglink"></img>
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/animeversetoken/">
                        <img className={'socialimage'} src={instagram} alt="tglink"></img>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.tiktok.com/@animeversetoken?_d=secCgYIASAHKAESPgo8Dj7NAfouh8vNaqtivykJ5eox3dhn6lJ1dSrmOTdDFOMbNCm6mOyHvXHakifdPmZq6ItOAhmDChZx7%2BHYGgA%3D&_r=1&checksum=81b799b87afa6df5358b86998291cc58a71bbd902e7f6e1a9300be85c5afedee&language=en&sec_uid=MS4wLjABAAAAGGb5DhcC79rrhnKqMJB8u2QWTvYxxSh3h2XDbPalDzDxcvRrCdZU-5XEQUj-3HwD&sec_user_id=MS4wLjABAAAAvCb-T2_807apvbgqN2kQb-kjDzoVX0p_awn7Oe2MSiOcSEuxtngf1HsObCUcEZ1A&share_app_id=1233&share_author_id=7083639654771868678&share_link_id=B5367C99-9788-4280-A16C-E9C37BA54451&source=h5_m&timestamp=1655328035&tt_from=copy&u_code=dbd2e51fi4448b&ug_btm=b6880%2Cb5836&user_id=6806028567236183045&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                      >
                        <img className={'socialimage'} src={tiktok} alt="tglink"></img>
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://discord.com/invite/scUQpfHbUj">
                        <img className={'socialimage'} src={discord} alt="tglink"></img>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://app.uniswap.org/#/swap?inputCurrency=0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67&chain=mainnet"
                      >
                        <img className={'socialimage'} src={uniswap} alt="tglink"></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </>
  )
}
