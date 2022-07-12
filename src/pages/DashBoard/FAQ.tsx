import ArrowIcon from 'assets/ArrowIcon.png'
import { FAQCard } from 'components/Card'
import { useState } from 'react'
export default function FAQPage() {
  const [isHidden, setishidden] = useState(true)
  const [isHidden2, setishidden2] = useState(true)
  const [isHidden3, setishidden3] = useState(true)
  const [isHidden4, setishidden4] = useState(true)
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
  return (
    <>
      <div className={'flexbox-vertical-container'} style={{ width: '100vw' }}>
        <p
          style={{
            fontSize: 'calc(3 * (0.75vw + 0.75vh))',
            color: '#ffffff',
            fontFamily: 'OpenDyslexic3',
            textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
          }}
        >
          FAQ
        </p>
        <FAQCard onClick={toggleHidden}>
          {' '}
          <div className={'flexbox-container'}>
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              What is Anime?
            </p>
            <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
          </div>
          {!isHidden && (
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
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
          <div className={'flexbox-container'}>
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              Why Trust AnimeVerse?
            </p>
            <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
          </div>
          {!isHidden2 && (
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              {' '}
              We are a transparent team with a KYC in process. Additionally, we have a Multi-Sig marketing wallet that
              requires multiple approvals for any transaction to take place. This means no team member can run a
              transaction solely, ensuring community and project funds are %100 safe.
            </p>
          )}
        </FAQCard>
        <FAQCard onClick={toggleHidden3}>
          {' '}
          <div className={'flexbox-container'}>
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              Is Liquidity Locked?
            </p>
            <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
          </div>
          {!isHidden3 && (
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              {' '}
              Liquidity is locked for 6 months and will be re-locked on expiration.
            </p>
          )}
        </FAQCard>
        <FAQCard onClick={toggleHidden4}>
          {' '}
          <div className={'flexbox-container'}>
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              Was there a private sale or pre-sale?
            </p>
            <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
          </div>
          {!isHidden4 && (
            <p
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                textAlign: 'left',
                lineHeight: 1.3,
                justifyContent: 'left',
                fontFamily: 'OpenDyslexic3',
                color: '#ffffff',
              }}
            >
              {' '}
              No Private-sale or Pre-sale
            </p>
          )}
        </FAQCard>
      </div>
    </>
  )
}
