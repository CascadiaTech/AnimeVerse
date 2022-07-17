import { PurpleCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

import ClaimTransaction from './ClaimTransaction'
export default function Dapp() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  if (showConnectAWallet) {
    return (
      <PurpleCard
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {' '}
        <div className={''}>
          <p style={{ justifyContent: 'center', marginTop: '20px', color: '#000000' }}>
            {' '}
            Connect a wallet to continue{' '}
          </p>{' '}
        </div>
      </PurpleCard>
    )
  } else {
    return <ClaimTransaction></ClaimTransaction>
  }
}
