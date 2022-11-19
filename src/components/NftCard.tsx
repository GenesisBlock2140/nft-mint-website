interface NftCardProps {
  url: string
}

const NftCard = ({url}: NftCardProps) => {
  return (
    <img src={url} alt='Nft Card' className='nftcard-img' />
  )
}

export default NftCard