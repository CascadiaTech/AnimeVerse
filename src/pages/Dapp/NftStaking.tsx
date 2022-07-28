import '../DashBoard/styles.css'

import { getNftMetadata, getNftsForOwner, initializeAlchemy, Network } from '@alch/alchemy-sdk'
import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import React, { useCallback, useEffect, useState } from 'react'

import { NFTStakingAbiObject } from './NFTStakingAbi'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const NFTStakingSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [stakepool30, setstakepool30] = useState(Boolean)
  const [stakepool15, setstakepool15] = useState(Boolean)
  const [userstakeids, setuserstakeids] = useState(String)
  const [userunstaketokenids, setunstakeusertokenids] = useState(String)
  const [stakeamount, setstakeamount] = useState(String)
  const [unstakeamount, setunstakeamount] = useState(String)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context

  useEffect(() => {
    async function FetchNFT() {
      try {
        const settings = {
          apiKey: '3JTCnITteGZR7Uu4QbBFzraeVCVlVokg', // Replace with your Alchemy API Key.
          network: Network.ETH_MAINNET, // Replace with your network.
          maxRetries: 10,
        }

        const alchemy = initializeAlchemy(settings)
        //const Getfunapes = nftsForOwner.ownedNfts(alchemy, '0xa2607d28f7a899e38abe99c67ccb37127875be7e')
        //console.log(Getfunapes)
        // Print owner's wallet address:
        const ownerAddr = account
        console.log('fetching NFTs for address:', ownerAddr)
        console.log('...')

        // Print total NFT count returned in the response:
        const nftsForOwner = await getNftsForOwner(alchemy, account || 'string')
        console.log('number of NFTs found:', nftsForOwner.totalCount)
        console.log('...')
        for (const nft of nftsForOwner.ownedNfts) {
          console.log('===')
          console.log('contract address:', nft.contract.address)
          console.log('token ID:', nft.tokenId)
        }

        // Fetch metadata for a particular NFT:
        console.log('fetching metadata for a Fun ape NFT...')
        const response = await getNftMetadata(alchemy, '0xa2607d28f7a899e38abe99c67ccb37127875be7e', '1')
        const metadatas = await JSON.stringify(response)
        const test1 = JSON.parse(metadatas)
        const test2 = test1.rawMetadata.image
        const test3 = JSON.stringify(test2)
        return test3
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }
    FetchNFT()
  }, [])
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
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
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
  }, [])

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
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
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
  }, [])
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
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
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
  }, [])

  return (
    <>
      <div className={'flexbox-container'}>
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
