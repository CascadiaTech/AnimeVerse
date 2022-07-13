import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
import FAQPage from './FAQ'
import Footer from './Footer'
import Headernew from './Newheader'
import PortfolioSection from './Portfolio'
import StratSection from './Strategy'
import TeamSection from './TeamPage'
import AnimeTokenomics from './Tokenomics'
export default function DashBoardComponent() {
  //const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  //const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <Headernew></Headernew>
      <StratSection></StratSection>

      <TransparentCard></TransparentCard>
      <div>
        <PortfolioSection></PortfolioSection>
        <TransparentCard></TransparentCard>
        <AnimeTokenomics></AnimeTokenomics>
        <p style={{ paddingTop: '30px', marginTop: '30px', marginBottom: '30px' }}></p>
        <TeamSection></TeamSection>
        <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
        <FAQPage></FAQPage>
        <Footer></Footer>
      </div>
    </>
  )
}
