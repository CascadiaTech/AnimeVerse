import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import LinePic from 'assets/LinePic.png'
//import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
//import { RowBetween } from 'components/Row'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'

import Sidermenu from './Sidemenu/SidemenuComponent'
const ClaimButton = styled.button`
  position: relative;
  display: 'block';
  right: 45px;
  left: 527px;
  text-color: #ffffff;
  bottom: 155px;
  padding: 10px 40px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`
const StyledImg = styled.img`
  justify-content: 'right';
  position: relative;
  margin-bottom: 34px;
`
// left: 600px
const DonateButton = styled.button`
  padding: 10px 4px;
  display: 'block';
  position: relative;
  font-color: #ffffff;
  left: 525px;
  bottom: 175px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`
const HoverCard = styled(GreyCard)`
 transition: "all 2's" ;
 &:hover {
     background-color: #ff9d1c;
     color: black;
 
 `
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
  //const { addToken, success } = useAddTokenToMetamask(currencyToAdd)

  const handleDonate = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const DonateBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Donatetxid = await DonateBalance
      return Donatetxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Claimtxid = await ClaimBalance

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

  return (
    <>
      <Sidermenu></Sidermenu>
      <div id="DashBoard" className={'flexbox-container'}>
        <div className={'Dapp-card'} style={{ marginLeft: '15vw' }}>
          <div className={'Dapp-card-title'}> Company Stats</div>{' '}
          <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
          <div className={'flexbox-container'}>
            <p style={{ paddingLeft: '4vw', color: '#000000' }}>Current Price</p>
            <p style={{ color: '#000000', paddingLeft: '10vw' }}>0.001$</p>
          </div>
          <img src={LinePic} style={{ width: '25vw', transform: 'translate( -5%, -20% )' }} alt="line"></img>
        </div>
        <div className={'Dapp-card'}>
          <div className={'Dapp-card-title'}>Company Stats</div>{' '}
        </div>
      </div>

      <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '5vh' }}></p>

      <div id="NFT" className={'flexbox-container'}>
        <div className={'NFT-card'} style={{ marginLeft: '15vw' }}>
          <div className={'NFT-card-title'}>NFT</div>{' '}
          <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
          <div className={'flexbox-container'} style={{ textAlign: 'center' }}>
            <p style={{ color: '#000000', textAlign: 'center' }}>Current Price</p>
            <p style={{ color: '#000000', textAlign: 'center' }}>0.001$</p>
          </div>
          <img src={LinePic} style={{ width: '25vw', transform: 'translate( -5%, -20% )' }} alt="line"></img>
        </div>
        <div className={'NFT-card'}>
          <div className={'NFT-card-title'}>NFT</div>{' '}
        </div>
      </div>

      <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '5vh' }}></p>

      <div id="Staking" className={'flexbox-container'}>
        <div className={'Staking-card'} style={{ marginLeft: '15vw' }}>
          <div className={'Staking-card-title'}>Staking</div>{' '}
          <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
          <div className={'flexbox-container'}>
            <p style={{ paddingLeft: '4vw', color: '#000000' }}>Current Price</p>
            <p style={{ color: '#000000', paddingLeft: '10vw' }}>0.001$</p>
          </div>
          <img src={LinePic} style={{ width: '25vw', transform: 'translate( -5%, -20% )' }} alt="line"></img>
        </div>
        <div className={'Staking-card'}>
          <div className={'Staking-card-title'}>Staking</div>{' '}
        </div>
      </div>
    </>
  )
}

export default ClaimTransaction
