import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
import AboutSection from './AboutPage'
import Footer from './Footer'
import HowToBuyPage from './HowToBuy'
import Headernew from './Newheader'
import PortfolioSection from './Portfolio'
import { SocialScrollBar } from './ScrollBar'
import TeamSection from './TeamPage'
import AnimeTokenomics from './Tokenomics'

export default function DashBoardComponent() {
  //const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  //const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <Headernew></Headernew>
      <HowToBuyPage></HowToBuyPage>
      <TransparentCard></TransparentCard>
      <SocialScrollBar></SocialScrollBar>
      <TransparentCard></TransparentCard>
      <div id="AnimeTokenomics">
        <AnimeTokenomics></AnimeTokenomics>
      </div>
      <TransparentCard></TransparentCard>
      <div id="AboutSection">
        <AboutSection></AboutSection>
      </div>
      <TransparentCard></TransparentCard>
      <div>
        <div id="PortfolioSection">
          <PortfolioSection></PortfolioSection>
        </div>
        <TransparentCard></TransparentCard>
        <p style={{ paddingTop: '30px', marginTop: '30px', marginBottom: '30px' }}></p>
        <div id="TeamSection">
          <TeamSection></TeamSection>
        </div>
        <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
        <div id="Contact">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
