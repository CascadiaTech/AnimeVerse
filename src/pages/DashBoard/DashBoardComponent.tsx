import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
import AboutSection from './AboutPage'
import Footer from './Footer'
import HowToBuyPage from './HowToBuy'
import OurVision from './Mission'
import Headernew from './Newheader'
import RoadmapSection from './Roadmap'
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
      <SocialScrollBar></SocialScrollBar>
      <TransparentCard></TransparentCard>
      <div id="AnimeTokenomics"></div>
      <AnimeTokenomics></AnimeTokenomics>
      <div id="AboutSection"></div>
      <AboutSection></AboutSection>
      <TransparentCard></TransparentCard>
      <div>
        <div id="PortfolioSection"> </div>
        <OurVision></OurVision>
        <TransparentCard></TransparentCard>
        <RoadmapSection></RoadmapSection>
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
