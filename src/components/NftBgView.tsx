import { useState } from 'react';

const NftBgView = () => {

  const [nftBg, setNftBg] = useState<string>("https://img.seadn.io/files/910fa486ddbcfb446359c230723f7996.png?fit=max&w=350")

  const handleChangeNFT = (val: string) => {
    switch (val) {
      case "normal":
        setNftBg("https://img.seadn.io/files/910fa486ddbcfb446359c230723f7996.png?fit=max&w=350")
        break;
      case "rare":
        setNftBg("https://img.seadn.io/files/045550f4b137c2b093986a52c54c91c9.png?fit=max&w=350")
        break;
      case "legendary":
        setNftBg("https://img.seadn.io/files/8f019e788e80b2344c559eb4d23ae2ba.png?fit=max&w=350")
        break;
    }
  }

  return (
    <>
      <div className='nftbgview-box'>
        <div>
          <img src={nftBg} alt='Nft Bg' />
        </div>
        <div className='nftbgview-option'>
          <button onClick={() => handleChangeNFT("normal")} >Normal Cat</button>
          <button onClick={() => handleChangeNFT("rare")} >Rare Cat</button>
          <button onClick={() => handleChangeNFT("legendary")} >Legendary Cat</button>
        </div>
      </div>
    </>
  )
}

export default NftBgView