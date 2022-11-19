import '../../App.css';
import arrowDown from '../../assets/arrowDown.svg'

import Navbar from '../../components/Navbar';
import MintButton from '../../components/MintButton';
import NftSlider from '../../components/NftSlider';
import NftBgView from '../../components/NftBgView';

function Home() {
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
    </div>
  );
}

export default Home;
