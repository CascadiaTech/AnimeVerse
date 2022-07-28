import '../DashBoard/styles.css'

//import { checkNftOwnership, getNftsForOwner, initializeAlchemy, Network } from '@alch/alchemy-sdk'
import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
//import LinePic from 'assets/LinePic.png'
import newLogo from 'assets/newLogo.png'
//import video from 'assets/video.mp4'
//import { Spin } from 'antd'
//import { RowBetween } from 'components/Row'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useEffect, useState } from 'react'

import { abiObject } from './abi'
import { NFTAbiObject } from './NFTAbi'
import NFTMintSection from './NFTMint'
import NFTStakingSection from './NftStaking'
import Sidermenu from './Sidemenu/SidemenuComponent'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const [connected, setnotconnected] = useState(Boolean)
  const [holders, setholders] = useState(Number)
  const [price, setprice] = useState(String)
  const [nft, setnft] = useState(String)
  const [unpaidearnings, setunpaidearnings] = useState(String)
  const [userbalance, setuserbalance] = useState(String)
  const [marketcap, setmarketcap] = useState(String)
  const [liq, setliq] = useState(String)
  useEffect(() => {
    async function FetchHolders() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const holders = data.holdersCount
        return holders
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchDexGuruPrice() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.dev.dex.guru/v1/chain/1/tokens/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
        )
        const data = await response.json()
        console.log(data)
        const returnprice = await data.price_usd
        const stringprice = JSON.stringify(returnprice)
        return stringprice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchDexGuruLiq() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.dev.dex.guru/v1/chain/1/tokens/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
        )
        const data = await response.json()
        const returnliq = await data.liquidity_usd
        return returnliq
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function Marketcap() {
      try {
        setLoading(true)
        const AnimeMarketcap = (await Number(price)) * 1000000000000
        const displaymarketcap = JSON.stringify(AnimeMarketcap)
        return setmarketcap(displaymarketcap)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    FetchDexGuruPrice()
      .then((result) => Number(result).toFixed(12))
      .then((result) => setprice(result))
    FetchDexGuruLiq()
      .then((result) => Number(result).toFixed(2))
      .then((result) => setliq(result))
    Marketcap()
    FetchHolders().then((result) => setholders(result))
  }, [price, holders])

  useEffect(() => {
    async function FetchNFT() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = NFTAbiObject
        const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchBalance() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = abiObject
        const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchUnpaidBalance() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = abiObject
        const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67'
        const contract = new Contract(contractaddress, abi, provider)
        const UserUnpaidBalance = await contract.getUserUnpaidEarnings(account)
        const FinalResult = await UserUnpaidBalance.toString()
        console.log(FinalResult)
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    FetchBalance().then((result) => setuserbalance(result))
    FetchNFT().then((result) => setnft(result))
    FetchUnpaidBalance().then((result) => setunpaidearnings(result))
  }, [])

  function formatMoney(n: any) {
    return '$ ' + (Math.round(n * 100) / 100).toLocaleString()
  }
  function numberWithCommas(num: any) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  //const n = numberWithCommas(Totalliquidity)
  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const abi = abiObject
      const signingprovider = new Web3Provider(library.provider)
      const signer = signingprovider.getSigner()
      const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.giveMeWelfarePlease() //.claim(account,amount)
      const Claimtxid = await ClaimBalance

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <Sidermenu></Sidermenu>
      <img
        className={'dapp-header-image'}
        src={newLogo}
        alt="header"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '45vw',
          maxHeight: '45vw',
          padding: '0%',
          float: 'right',
          paddingRight: '0%',
        }}
      ></img>
      <div className={'centeronmobile'}>
        <div className={'flexbox-container'}>
          <div id="DashBoard">
            <div className={'Dapp-card'}>
              <div>
                {' '}
                <p style={{ textAlign: 'center' }}>Company Statistics</p>{' '}
              </div>{' '}
              <div className={'flexbox-vertical-container'}>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw' }}>Current Price</p>
                  <p style={{ paddingRight: '2vw' }}> {price} </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw' }}>Market Capitalization</p>
                  <p style={{ paddingRight: '2vw' }}>{formatMoney(Number(marketcap))}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw' }}>Holders</p>
                  <p
                    style={{
                      alignSelf: 'right',
                      textAlign: 'right',
                      paddingRight: '2vw',
                    }}
                  >
                    {holders}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw' }}>Total Liquidity</p>
                  <p style={{ paddingRight: '2vw' }}> {formatMoney(Number(liq))}</p>
                </div>
              </div>
            </div>
            <div className={'Dapp-card'}>
              <div className={'flexbox-vertical-container'}>
                <p style={{ textAlign: 'center' }}> User Stats</p>{' '}
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw' }}>User Anime Token Balance</p>
                  <p style={{ paddingRight: '2vw' }}>{userbalance}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>Your NFT Balance</p>
                  <p style={{ justifySelf: 'right', paddingRight: '2vw' }}>{nft}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>Your Pending Reflections</p>
                  <p style={{ justifySelf: 'right', paddingRight: '2vw' }}>{unpaidearnings}</p>
                </div>
                <button
                  className={'GitButton'}
                  onClick={() => handleClaim()}
                  style={{ width: '23vw', color: '#000000' }}
                >
                  {' '}
                  Claim Reflections{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '5vh' }}></p>
      <NFTMintSection></NFTMintSection>
      <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '5vh' }}></p>
      <NFTStakingSection></NFTStakingSection>
    </div>
  )
}

export default ClaimTransaction
