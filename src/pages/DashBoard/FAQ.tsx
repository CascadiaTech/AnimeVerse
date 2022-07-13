import ArrowIcon from 'assets/ArrowIcon.png'
import { FAQCard } from 'components/Card'
import { useState } from 'react'
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
  return (
    <>
      <div className={'flexbox-container'}>
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
            <div>
              <p
                style={{
                  textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
                  fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  fontFamily: 'OpenDyslexic3',
                  color: '#ffffff',
                }}
              >
                What is Anime?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
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
            <div>
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
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
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
            <div>
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
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
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
            <div>
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
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
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
          <FAQCard onClick={toggleHidden5}>
            {' '}
            <div>
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
                Team Token Allocation or Dev Tax?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden5 && (
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
                There was NO team token allocation, and we have NO dev tax in our tokenomics.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden6}>
            {' '}
            <div>
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
                Smart Contract Audit?
                <img className={'arrow_icon'} src={ArrowIcon} alt={'arrow'}></img>
              </p>
            </div>
            {!isHidden6 && (
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
                All of our Smart Contracts will be audited.
              </p>
            )}
          </FAQCard>
        </div>
      </div>
    </>
  )
}
