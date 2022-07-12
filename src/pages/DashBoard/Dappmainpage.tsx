import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import Footer from './Footer'
import Headernew from './Newheader'
import ClaimTransaction from './ClaimTransaction'
export default function Dapp() {
  //const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  //const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <Headernew></Headernew>
      <ClaimTransaction></ClaimTransaction>
        <Footer></Footer>
    </>
  )
}
