import '../DashBoard/styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
import ArrowIcon from 'assets/ArrowIcon.png'
import { FAQCard } from 'components/Card'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring/web'
export default function FAQPage() {
  const [isHidden, setishidden] = useState(true)
  const [isHidden2, setishidden2] = useState(true)
  const [isHidden3, setishidden3] = useState(true)
  const [isHidden4, setishidden4] = useState(true)
  const [isHidden5, setishidden5] = useState(true)
  const [isHidden6, setishidden6] = useState(true)
  function toggleHidden() {
    setishidden(!isHidden)
  }
  function toggleHidden2() {
    setishidden2(!isHidden2)
  }
  function toggleHidden3() {
    setishidden3(!isHidden3)
  }
  function toggleHidden4() {
    setishidden4(!isHidden4)
  }
  function toggleHidden5() {
    setishidden5(!isHidden5)
  }
  function toggleHidden6() {
    setishidden6(!isHidden6)
  }
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: -2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
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
      <div className={'flexbox-container'} style={{ transition: '1s' }}>
        <div className={'flexbox-vertical-container'} style={{ width: '100vw' }}>
          <p
            style={{
              fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              color: '#000000',
              fontFamily: 'OpenDyslexic3',
            }}
          >
            FAQ
          </p>
          <FAQCard onClick={toggleHidden}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  transition: '1s',
                  lineHeight: 1.3,
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                What is Anime?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  transition: '1s',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                A style of animation originating in Japan that is characterized by stark colorful graphics depicting
                vibrant characters in action-filled plots often with fantastic or futuristic themes.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden2}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                Why Trust AnimeVerse?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden2 && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                We are a transparent team with a KYC in process. Additionally, we have a Multi-Sig marketing wallet that
                requires multiple approvals for any transaction to take place. This means no team member can run a
                transaction solely, ensuring community and project funds are %100 safe.
              </p>
            )}
          </FAQCard>
          <FAQCard style={{ transition: '1s' }} onClick={toggleHidden3}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                Is Liquidity Locked?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden3 && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                Liquidity is locked for 6 months and will be re-locked on expiration.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden4}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                Was there a private sale or pre-sale?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden4 && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                No Private-sale or Pre-sale
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden5}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                Team Token Allocation or Dev Tax?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden5 && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                There was NO team token allocation, and we have NO dev tax in our tokenomics.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden6}>
            {' '}
            <div>
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                Smart Contract Audit?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden6 && (
              <p
                style={{
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  justifyContent: 'left',
                  fontFamily: 'OpenDyslexic3',
                  color: '#000000',
                }}
              >
                {' '}
                All of our Smart Contracts will be audited.
              </p>
            )}
          </FAQCard>
        </div>
      </div>
    </>
  )
}
