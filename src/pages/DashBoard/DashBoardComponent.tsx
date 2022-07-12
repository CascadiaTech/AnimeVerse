import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
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
      <p className={'header-space'} style={{ paddingTop: '1px', marginTop: '1px', marginBottom: '1px' }}></p>
      <p style={{ paddingTop: '60px', marginTop: '60px', marginBottom: '60px' }}></p>
      <div style={{ justifyContent: 'center' }}>
        <StratSection></StratSection>
      </div>
      <p style={{ paddingTop: '30px', marginTop: '30px', marginBottom: '30px' }}></p>
      <TransparentCard></TransparentCard>
      <div>
        <PortfolioSection></PortfolioSection>
        <TransparentCard></TransparentCard>
        <AnimeTokenomics></AnimeTokenomics>
        <p style={{ paddingTop: '30px', marginTop: '30px', marginBottom: '30px' }}></p>
        <TeamSection></TeamSection>
        <Footer></Footer>
      </div>
    </>
  )
}
