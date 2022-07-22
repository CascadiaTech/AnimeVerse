import '../DashBoard/styles.css'

import { LoadingOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
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
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()

  const handleMint = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTAbiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const options = { value: parseEther('0.075') }
      const MintNFT = await contract.mint(NftAmount, { value: parseEther('0.075') }) //.claim()
      const Claimtxid = await MintNFT

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
      <img></img>
      <div className={'flexbox-vertical-container'}>
        <button className={'GitButton'} onClick={() => SetNftAmount(NftAmount - 1)}>
          <MinusCircleOutlined style={{ color: '#000000' }} />
        </button>
        <button className={'GitButton'} onClick={() => SetNftAmount(NftAmount + 1)}>
          {' '}
          <PlusCircleOutlined style={{ color: '#000000' }} />
        </button>

        {NftAmount > 0 && NftAmount <= 4 ? (
          <div className={'flexbox-container'}>
            <h1 style={{ color: '#000000', fontSize: '24px', fontFamily: 'OpenDyslexic3' }}>{NftAmount}</h1>
            <button style={{ color: '#000000', width: '10vw' }} className={'GitButton'} onClick={() => handleMint()}>
              {' '}
              Mint
            </button>
          </div>
        ) : (
          <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
            {' '}
            You are only alowed to mint in between 1-4 Animeverse NFTs at a time.{' '}
          </p>
        )}
      </div>
    </>
  )
}

export default NFTMintSection
