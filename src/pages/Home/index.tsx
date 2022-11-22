import '../../App.css';
import arrowDown from '../../assets/arrowDown.svg'

import Navbar from '../../components/Navbar';
import MintButton from '../../components/MintButton';
import NftSlider from '../../components/NftSlider';
import NftBgView from '../../components/NftBgView';
import Faq from '../../components/Faq';
import { ReactElement } from 'react';

function Home() {

  const Footer = ():ReactElement => {
    return (
      <p className='footer-title'>
        Catpunks minting website example, 
        <a href='https://github.com/GenesisBlock2140/nft-mint-website' target='_blank' className='footer-github' rel="noreferrer" > Github by GenesisBlock2140</a>
      </p>
    )
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1 className='hero-title'>The project that inspired the<br /> modern CryptoArt movement</h1>
        <p className='hero-p'>777 unique collectible characters with proof of ownership<br /> stored on the Ethereum blockchain.</p>
      </div>
      <MintButton />
      <img src={arrowDown} alt='arrowDown' className='arrowDown'/>
      <NftSlider />
      <div className='featured-box'>
        <p className='featured-title'>Featured In</p>
        <div className='featured-media'>
          <p>Cointruc</p>
          <p>CryptoBidule</p>
          <p>CryptoBidule</p>
        </div>
      </div>
      <NftBgView />
      <div className='exclu-box'>
        <p className='exclu-title'>Exclusive benefits</p>
        <p className='exclu-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
