import React, { useState } from 'react';
import './Portfolio.css';
import Flawless from '../../../images/Portfolio/Flawless.png';
import FoofBoutique from '../../../images/Portfolio/Foof-Boutique.png';
import FortuneKit from '../../../images/Portfolio/Fortune-Kit.png';
import FreshCorner from '../../../images/Portfolio/Fresh-Corner.png';
import FriesKingdom from '../../../images/Portfolio/Fries-Kingdom.png';
import FunOut from '../../../images/Portfolio/Fun-Out.png';
import FunPackCafe from '../../../images/Portfolio/Fun-Pack-Cafe.png';
import FutureLeaders from '../../../images/Portfolio/Future-Leaders.png';
import GhazalFashionHouse from '../../../images/Portfolio/Ghazal-Fashion-House.png';
import HTown from '../../../images/Portfolio/H-Town.png';
import HoneyYard from '../../../images/Portfolio/Honey-Yard.png';
import IconicBeauty from '../../../images/Portfolio/Iconic-Beauty.png';
import IRIS from '../../../images/Portfolio/IRIS.png';
import Ivy from '../../../images/Portfolio/Ivy.png';
import Joie from '../../../images/Portfolio/Joie.png';
import JustModest from '../../../images/Portfolio/Just-Modest.png';
import KarakwHarak from '../../../images/Portfolio/Karak-w-Harak.png';
import KidsMotel from '../../../images/Portfolio/Kids-Motel.png';
import KLC from '../../../images/Portfolio/KLC.png';
import LeRougeChocolat from '../../../images/Portfolio/Le-Rouge-Chocolat.png';
import LetoileCatering from '../../../images/Portfolio/letoile-catering.png';
import Lexi from '../../../images/Portfolio/Lexi.png';
import LibraFarms from '../../../images/Portfolio/Libra-Farms-1.png';
import LittleMiracles from '../../../images/Portfolio/Little-Miracles.png';
import LittleOnes from '../../../images/Portfolio/Little-ones.png';
import Lock from '../../../images/Portfolio/Lock.png';
import Lokapele from '../../../images/Portfolio/Lokapele.png';
import LoqiaEvents from '../../../images/Portfolio/Loqia-events.png';
import MajestyJewelry from '../../../images/Portfolio/Majesty-Jewelry.png';
import Melia from '../../../images/Portfolio/Melia.png';
import Melolime from '../../../images/Portfolio/Melolime.png';
import Mustamer from '../../../images/Portfolio/Mustamer.png';
import NBurger from '../../../images/Portfolio/N-Burger.png';
import NaturalSalon from '../../../images/Portfolio/Natural-Salon.png';
import Novista from '../../../images/Portfolio/Novista.png';
import OffWhite from '../../../images/Portfolio/Off-White.png';
import Offlimits from '../../../images/Portfolio/Offlimits.png';
import PassionSip from '../../../images/Portfolio/Passion-Sip.png';
import Potachii from '../../../images/Portfolio/Potachii.png';
import RechargeCafe from '../../../images/Portfolio/Recharge-cafe.png';
import RootsBeautySalon from '../../../images/Portfolio/Roots-Beauty-salon.png';
import RoseMuseum from '../../../images/Portfolio/Rose-Museum.png';
import RozeQuartz from '../../../images/Portfolio/Roze-Quartz.png';
import SerenityCorner from '../../../images/Portfolio/Serenity-Corner.png';
import ShapesColors from '../../../images/Portfolio/Shapes-Colors.png';
import ShiftCo from '../../../images/Portfolio/Shift-Co.png';
import ShippingWeb from '../../../images/Portfolio/Shipping-Web.png';
import ShutterPhotograhy from '../../../images/Portfolio/Shutter-Photograhy.png';
import SmartPark from '../../../images/Portfolio/Smart-Park.png';
import Spaces from '../../../images/Portfolio/Spaces.png';
import Suburger from '../../../images/Portfolio/Suburger.png';
import SugarRushCafe from '../../../images/Portfolio/Sugar-Rush-Cafe.png';
import SuperBowl from '../../../images/Portfolio/Super-Bowl.png';
import Tap974 from '../../../images/Portfolio/Tap-974.png';
import Tartine from '../../../images/Portfolio/Tartine.png';
import Tasweer from '../../../images/Portfolio/Tasweer.png';
import TheCloset from '../../../images/Portfolio/The-Closet.png';
import TheDollhouse from '../../../images/Portfolio/The-Dollhouse.png';
import TheExpo from '../../../images/Portfolio/The-Expo.png';
import TheKittyBox from '../../../images/Portfolio/The-Kitty-Box.png';
import TheMouseBox from '../../../images/Portfolio/The-Mouse-Box.png';
import TheSadaf from '../../../images/Portfolio/The-Sadaf.png';
import TidyKids from '../../../images/Portfolio/Tidy-Kids.png';
import Tnatesh from '../../../images/Portfolio/Tnatesh.png';
import Trimmore from '../../../images/Portfolio/Trim-more.png';
import Tujjar from '../../../images/Portfolio/Tujjar.png';
import Twisted from '../../../images/Portfolio/Twisted.png';
import Wstation from '../../../images/Portfolio/W-station.png';
import WorldCupCafe from '../../../images/Portfolio/World-Cup-Cafe.png';
import AdelaFashion from '../../../images/Portfolio/Adela-Fashion.jpg';
import Aqua from '../../../images/Portfolio/Agua.jpg';
import AlGhalia from '../../../images/Portfolio/Al-Ghalia.jpg';
import AlGhaliaNEW from '../../../images/Portfolio/Al-Ghalia-NEW.jpg';
import Allure from '../../../images/Portfolio/Allure.jpg';
import AlReef from '../../../images/Portfolio/Al-Reef.jpg';
import Atbaqi from '../../../images/Portfolio/Atbaqi.jpg';
import Aurora from '../../../images/Portfolio/Aurora.jpg';
import BaitSpa from '../../../images/Portfolio/Bait-Spa.jpg';
import Barbos from '../../../images/Portfolio/Barbos.jpg';
import Barista from '../../../images/Portfolio/Barista.jpg';
import Bashra from '../../../images/Portfolio/Bashra.jpg';
import Batool from '../../../images/Portfolio/Batool.jpg';
import BazaarCeline from '../../../images/Portfolio/Bazaar-Celine.jpg';
import BdeefSky from '../../../images/Portfolio/Bdeef-Sky.jpg';
import BeautyBook from '../../../images/Portfolio/Beauty-Book.jpg';
import BeautyEssence from '../../../images/Portfolio/Beauty-Essence.jpg';
import BellyFull from '../../../images/Portfolio/Belly-Full.jpg';
import BeyondAction from '../../../images/Portfolio/Beyond-Action.jpg';
import Bianco from '../../../images/Portfolio/Bianco.jpg';
import BlackRoastCafe from '../../../images/Portfolio/Black-Roast-Cafe.jpg';
import BlancBeautyLounge from '../../../images/Portfolio/Blanc-Beauty-Lounge.jpg';
import Blank from '../../../images/Portfolio/Blank.jpg';
import BlueWheel from '../../../images/Portfolio/Blue-Wheel.jpg';
import Eggnation from '../../../images/Portfolio/Eggnation.jpg';
import ElegantPrincess from '../../../images/Portfolio/Elegant-Princess.jpg';
import Fete from '../../../images/Portfolio/Fete.jpg';
import Fruition from '../../../images/Portfolio/Fruition.jpg';
import Gahwa from '../../../images/Portfolio/Gahwa.jpg';
import Hama from '../../../images/Portfolio/Hama.jpg';
import Home from '../../../images/Portfolio/Home.jpg';
import MFB from '../../../images/Portfolio/MFB.jpg';
import MPF from '../../../images/Portfolio/MPF.jpg';
import N22 from '../../../images/Portfolio/N22.jpg';
import RO from '../../../images/Portfolio/RO.jpg';
import Sky from '../../../images/Portfolio/Sky.jpg';
import VV from '../../../images/Portfolio/VV.jpg';
import Veganstore150x150 from '../../../images/Portfolio/Veganstore-150x150.jpg';
import LittleHelpersNursery from '../../../images/Portfolio/Little-Helpers-Nursery.jpg';


const portfolioItems = [
  // PNG Images
  Flawless,
  FoofBoutique,
  FortuneKit,
  FreshCorner,
  FriesKingdom,
  FunOut,
  FunPackCafe,
  FutureLeaders,
  GhazalFashionHouse,
  HTown,
  HoneyYard,
  IconicBeauty,
  IRIS,
  Ivy,
  Joie,
  JustModest,
  KarakwHarak,
  KidsMotel,
  KLC,
  LeRougeChocolat,
  LetoileCatering,
  Lexi,
  LibraFarms,
  LittleMiracles,
  LittleOnes,
  Lock,
  Lokapele,
  LoqiaEvents,
  MajestyJewelry,
  Melia,
  Melolime,
  Mustamer,
  NBurger,
  NaturalSalon,
  Novista,
  OffWhite,
  Offlimits,
  PassionSip,
  Potachii,
  RechargeCafe,
  RootsBeautySalon,
  RoseMuseum,
  RozeQuartz,
  SerenityCorner,
  ShapesColors,
  ShiftCo,
  ShippingWeb,
  ShutterPhotograhy,
  SmartPark,
  Spaces,
  Suburger,
  SugarRushCafe,
  SuperBowl,
  Tap974,
  Tartine,
  Tasweer,
  TheCloset,
  TheDollhouse,
  TheExpo,
  TheKittyBox,
  TheMouseBox,
  TheSadaf,
  TidyKids,
  Tnatesh,
  Trimmore,
  Tujjar,
  Twisted,
  Wstation,
  WorldCupCafe,

  // JPG Images
  AdelaFashion,
  Aqua,
  AlGhalia,
  AlGhaliaNEW,
  Allure,
  AlReef,
  Atbaqi,
  Aurora,
  BaitSpa,
  Barbos,
  Barista,
  Bashra,
  Batool,
  BazaarCeline,
  BdeefSky,
  BeautyBook,
  BeautyEssence,
  BellyFull,
  BeyondAction,
  Bianco,
  BlackRoastCafe,
  BlancBeautyLounge,
  Blank,
  BlueWheel,
  Eggnation,
  ElegantPrincess,
  Fete,
  Fruition,
  Gahwa,
  Hama,
  Home,
  MFB,
  MPF,
  N22,
  RO,
  Sky,
  VV,
  Veganstore150x150,
  LittleHelpersNursery,
].map(image => ({
  image
}));

const Portfolio = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prev => 
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => 
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='portfolio'>
      <div className="container">
        <h2>{language ? "Gallery of our work" : "معرض أعمالنا"}</h2>
        
        <div className="portfolio-slideshow">
          <div className="main-image-container">
            <button className="nav-button prev" onClick={handlePrevClick}>
              {language ? "❮" : "❮"}
            </button>
            
            <div className="main-image">
              <img 
                src={portfolioItems[currentIndex].image}
                alt=""
                className={!loadedImages[currentIndex] ? 'loading' : ''}
                onLoad={() => handleImageLoad(currentIndex)}
              />
            </div>

            <button className="nav-button next" onClick={handleNextClick}>
              {language ? "❯" : "❯"}
            </button>
          </div>

          <div className="thumbnails-container">
            <div className="thumbnails-scroll">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={item.image}
                    alt=""
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
