import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import React, { useCallback, useState } from 'react'

import { NFTStakingAbiObject } from './NFTStakingAbi'
import { StakingAbiObject } from './StakingAbi'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const NFTStakingSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [userstakeids, setuserstakeids] = useState(String)
  const [userunstaketokenids, setunstakeusertokenids] = useState(String)
  const [stakeamount, setstakeamount] = useState(String)
  const [unstakeamount, setunstakeamount] = useState(String)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()

  const handleHarvest = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const harvest = await contract.harvest() //.claim()
      const Claimtxid = await harvest

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])

  const handleNftStake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = userstakeids.split(',')
      const unstakeNfts = await contract.stake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])
  const handleNftUnstake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = userunstaketokenids.split(',')
      const unstakeNfts = await contract.unstake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])

  const handleAnimeStake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = StakingAbiObject
      const abi = data
      const contractaddress = '0xd28Fd547Acd4B299C3dE0fF248d751c8b94E66A5' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = userstakeids.split(',')
      const unstakeNfts = await contract.stake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])
  const handleUnstake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = StakingAbiObject
      const abi = data
      const contractaddress = '0xd28Fd547Acd4B299C3dE0fF248d751c8b94E66A5' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = userunstaketokenids.split(',')
      const unstakeNfts = await contract.unstake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])

  return (
    <>
      <div className={'flexbox-container'}>
        <div className={'flexbox-vertical-container'}>
          <h1> Animeverse Staking </h1>
          <div className={'NFT-card'} style={{ marginRight: '10vw' }}>
            <h1> Stake </h1>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setstakeamount(e.target.value)}
              type="text"
              id="fname"
              name="stake"
              placeholder="how many tokens do you want to stake?"
            ></input>
            {stakeamount ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleAnimeStake}
              >
                {' '}
                Stake
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
                  Enter the amount you want to stake
                </p>
              </div>
            )}
            <h1> Unstake</h1>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setunstakeamount(e.target.value)}
              type="text"
              id="fname"
              name="unstake"
              placeholder="How many tokens do you want to unstake?"
            ></input>
            {unstakeamount ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleUnstake()}
              >
                {' '}
                Unstake
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
                  Enter the amount you want to unstake
                </p>
              </div>
            )}
            <button className={'GitButton'}> Harvest </button>
          </div>
        </div>
        <div className={'flexbox-vertical-container'}>
          <h1> NFT Staking </h1>
          <div className={'NFT-card'}>
            <h1> Stake </h1>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setuserstakeids(e.target.value)}
              type="text"
              id="fname"
              name="stake"
              placeholder="what are your Token Id's? sperate each ID with a comma. (eg: 12, 14, 1456, 1245).."
            ></input>
            {userstakeids ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleNftStake()}
              >
                {' '}
                Stake NFT
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p
                  style={{
                    justifyContent: 'center',
                    color: '#000000',
                    width: '20vw',
                    textAlign: 'center',
                    fontFamily: 'OpenDyslexic3',
                  }}
                >
                  Enter your token Ids to Stake
                </p>
              </div>
            )}
            <h1> Unstake NFT</h1>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setunstakeusertokenids(e.target.value)}
              type="text"
              id="fname"
              name="unstake"
              placeholder="what are your Token Id's? sperate each ID with a comma. (eg: 12, 14, 1456, 1245).."
            ></input>
            {userunstaketokenids ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleNftUnstake()}
              >
                {' '}
                Unstake
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
                  Enter your token Ids to Unstake
                </p>
              </div>
            )}
            <button style={{ color: '#000000' }} onClick={() => handleHarvest()} className={'GitButton'}>
              {' '}
              Harvest{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTStakingSection
