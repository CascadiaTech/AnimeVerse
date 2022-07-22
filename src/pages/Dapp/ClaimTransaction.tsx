import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import { formatEther, formatUnits } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
//import LinePic from 'assets/LinePic.png'
import newLogo from 'assets/newLogo.png'
import video from 'assets/video.mp4'
//import { Spin } from 'antd'
//import { RowBetween } from 'components/Row'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useEffect, useState } from 'react'

import { abiObject } from './abi'
import NFTMintSection from './NFTMint'
import NFTStakingSection from './NftStaking'
import { pairabiObject } from './pairabi'
import Sidermenu from './Sidemenu/SidemenuComponent'
import { USDCWETHpairabiObject } from './WETHUSDCPair'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [EthReserve0, setEthReserve0] = useState(Number)
  const [EthReserve1, setEthReserve1] = useState(Number)
  const [holders, setholders] = useState(Number)

  useEffect(() => {
    async function FetchReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const abi = pairabiObject
        const contractaddress = '0xFd362C758A756bAc42fce0Ea7E83f5bb72730c6E' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        return Reserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        //const provider = getDefaultProvider()
        const abi = pairabiObject
        const contractaddress = '0xFd362C758A756bAc42fce0Ea7E83f5bb72730c6E' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve1 = await Price._reserve1
        return Reserve1
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        console.log(Reserve1)
        // setLoading(false)
      }
    }
    async function FetchEthReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        //const provider = getDefaultProvider()
        const abi = USDCWETHpairabiObject
        const contractaddress = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const EthReserve1 = await Price._reserve1
        return EthReserve1
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        console.log(Reserve1)
        // setLoading(false)
      }
    }
    async function FetchEthReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        //const provider = getDefaultProvider()
        const abi = USDCWETHpairabiObject
        const contractaddress = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const EthReserve0 = await Price._reserve0
        return EthReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }

    async function FetchHolders() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

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
    //const response = await fetch(
    //  'https://api.dev.dex.guru/v1/chain/1/tokens/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
    //)

    FetchReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.stringify(result))
      .then((result) => JSON.parse(result))
      .then((result) => setReserve1(result))

    FetchReserve0()
      .then((result) => formatUnits(result))
      .then((result) => JSON.stringify(result))
      .then((result) => JSON.parse(result))
      .then((result) => setReserve0(result))

    FetchEthReserve0()
      .then((result) => formatEther(result))
      .then((result) => JSON.stringify(result))
      .then((result) => JSON.parse(result))
      .then((result) => setEthReserve0(result))
    FetchEthReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.stringify(result))
      .then((result) => JSON.parse(result))
      .then((result) => setEthReserve1(result))
    FetchHolders().then((result) => setholders(result))
  }, [])

  const Animeprice = Reserve0 / Reserve1
  const EthPrice = EthReserve0 / EthReserve1 / 1000000
  console.log(EthPrice)
  const AnimePriceinUsd = Animeprice / 1000000000000
  const Marketcap = AnimePriceinUsd * 1000000000000 // essentially jpegusd price divided by total supply
  //const MarketCap = Marketcap.toLocaleString()

  const ReserveBinusd = AnimePriceinUsd * Reserve1
  const reserve0value = Reserve0 / 1000000000000
  const Totalliquidity = reserve0value + ReserveBinusd
  const TotalLiquidity = Totalliquidity.toLocaleString()

  function formatMoney(n: any) {
    return '$ ' + (Math.round(n * 100) / 100).toLocaleString()
  }
  function numberWithCommas(num: any) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const n = numberWithCommas(Totalliquidity)
  const MarketCap = formatMoney(Marketcap)

  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const abi = abiObject
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
      <video autoPlay loop muted playsInline className="video">
        <source src={video} type="video/mp4" />
      </video>

      <img
        className={'dapp-header-image'}
        src={newLogo}
        alt="header"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '30vw',
          maxHeight: '30vw',
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
                <p style={{ textAlign: 'center', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                  Company Statistics
                </p>{' '}
              </div>{' '}
              <div className={'flexbox-vertical-container'}>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                    Current Price
                  </p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', paddingRight: '2vw' }}>{AnimePriceinUsd}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                    Market Capitalization
                  </p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', paddingRight: '2vw' }}>{MarketCap}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                    Holders
                  </p>
                  <p
                    style={{
                      color: 'rgba(255, 153, 0, 0.979)',
                      alignSelf: 'right',
                      textAlign: 'right',
                      paddingRight: '2vw',
                    }}
                  >
                    {holders}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                    Total Liquidity
                  </p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', paddingRight: '2vw' }}>{TotalLiquidity}</p>
                </div>
              </div>
            </div>
            <div className={'Dapp-card'}>
              <div className={'flexbox-vertical-container'}>
                <p style={{ textAlign: 'center', color: 'rgba(255, 153, 0, 0.979)', fontFamily: 'OpenDyslexic3' }}>
                  {' '}
                  User Stats
                </p>{' '}
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', color: 'rgba(255, 153, 0, 0.979)' }}>User Anime Token Balance</p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', paddingRight: '2vw' }}>{MarketCap}</p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', paddingRight: '2vw', color: 'rgba(255, 153, 0, 0.979)' }}>
                    Your NFT Balance
                  </p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', justifySelf: 'right', paddingRight: '2vw' }}>
                    1 Trillion
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '2vw', paddingRight: '2vw', color: 'rgba(255, 153, 0, 0.979)' }}>
                    Your Pending Reflections
                  </p>
                  <p style={{ color: 'rgba(255, 153, 0, 0.979)', justifySelf: 'right', paddingRight: '2vw' }}>
                    1 Trillion
                  </p>
                </div>
                <button className={'GitButton'} onClick={() => handleClaim()} style={{ width: '20vw' }}>
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
