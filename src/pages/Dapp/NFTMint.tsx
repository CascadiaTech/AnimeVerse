import '../DashBoard/styles.css'

import { LoadingOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import LinePic from 'assets/LinePic.png'
import mintinggif from 'assets/mintinggif.mp4'
import React, { useCallback, useState } from 'react'

import { NFTAbiObject } from './NFTAbi'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const NFTMintSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [NftAmount, SetNftAmount] = useState(1)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context

  const handleMint = useCallback(async () => {
    if (!NftAmount) {
      console.log({ message: 'select the amount of nfts you want to buy' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTAbiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2' // "clienttokenaddress"
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      const ethervalue = NftAmount * 0.075
      const etherstringvalue = JSON.stringify(ethervalue)
      const MintNFT = await contract.mint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
      const Claimtxid = await MintNFT

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet])

  return (
    <>
      <div>
        <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
          <img src={LinePic} alt="linedivider" style={{ width: '50vw' }}></img>
        </div>
        <div className={'flexbox-container'}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '30vw', height: '35hv', borderRadius: '10px', border: 'solid' }}
          >
            <source src={mintinggif} type="video/mp4" />
          </video>{' '}
          <div className={'flexbox-container'}>
            <button className={'GitButton'} onClick={() => SetNftAmount(NftAmount - 1)}>
              <MinusCircleOutlined style={{ color: '#000000' }} />
            </button>
            {NftAmount >= 0 ? (
              <h1 style={{ color: '#000000', fontSize: '24px', fontFamily: 'OpenDyslexic3' }}>{NftAmount}</h1>
            ) : (
              <></>
            )}
            <button className={'GitButton'} onClick={() => SetNftAmount(NftAmount + 1)}>
              {' '}
              <PlusCircleOutlined style={{ color: '#000000' }} />
            </button>
          </div>
          {NftAmount > 0 && NftAmount <= 3 ? (
            <div className={'flexbox-container'}>
              <button style={{ color: '#000000', width: '10vw' }} className={'GitButton'} onClick={() => handleMint()}>
                {' '}
                Mint
              </button>
            </div>
          ) : (
            <p style={{ color: '#000000', width: '20vw', textAlign: 'center' }}>
              {' '}
              You are only alowed to mint in between 1-3 Animeverse NFTs at a time.{' '}
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default NFTMintSection
