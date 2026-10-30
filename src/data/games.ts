import FirewatchImg from '../assets/review_images/Firewatch/banner.jpg'
import FirewatchIntro from '../assets/review_content/Firewatch/intro.md?raw'

import { tombRaiderImages } from '../assets/review_images/TombRaiders/srcsets'
import TombRaiderIntro from '../assets/review_content/TombRiderTrilogy/intro.md?raw'

import LifeIsStrangeImg from '../assets/review_images/LifeIsStrange/banner.jpg'
import LifeIsStrangeIntro from '../assets/review_content/LifeIsStrange/intro.md?raw'
import { clairObscurImages } from '../assets/review_images/ClairObscur/srcsets'
import ClairObscurIntro from '../assets/review_content/ClairObscur/intro.md?raw'
import { pragmataImages } from '../assets/review_images/Pragmata/srcsets'
import PragmataIntro from '../assets/review_content/Pragmata/intro.md?raw'

import { Content as FirewatchReview } from '../assets/review_content/Firewatch/review.mdx';
import { Content as TombRaiderReview } from '../assets/review_content/TombRiderTrilogy/review.md';
import { Content as TombRaider } from '../assets/review_content/TombRiderTrilogy/TombRider.mdx';
import { Content as Rise } from '../assets/review_content/TombRiderTrilogy/RiseOfTheTombRider.mdx';
import { Content as Shadow } from '../assets/review_content/TombRiderTrilogy/ShadowOfTheTombRider.mdx';
import { Content as LifeIsStrangeReview } from '../assets/review_content/LifeIsStrange/review.mdx';
import { Content as ClairObscurReview } from '../assets/review_content/ClairObscur/review.mdx';
import { Content as PragmataReview } from '../assets/review_content/Pragmata/review.mdx';

export const games = [
  { slug: 'firewatch', 
    title: 'Firewatch', 
    genre: 'Narrative', 
    intro: FirewatchIntro, 
    image: FirewatchImg.src, 
    review: [FirewatchReview],
    rating: "4.1/5"
  },

  { slug: 'tomb-raider',
    title: 'TOMB RAIDER : The survivor trilogy',
    genre: 'Action | Adventure',
    intro: TombRaiderIntro,
    image: tombRaiderImages.banner.src,
    imageSrcset: tombRaiderImages.banner.srcset,
    review: [TombRaider, Rise, Shadow, TombRaiderReview],
  },

  { slug: 'life-is-strange',
    title: 'Life is Strange',
    genre: 'Narrative',
    intro: LifeIsStrangeIntro,
    image: LifeIsStrangeImg.src,
    review: [LifeIsStrangeReview]
  },

  { slug: 'clair-obscur',
    title: 'Clair Obscur : Expedition 33',
    genre: 'RPG | Adventure',
    intro: ClairObscurIntro,
    image: clairObscurImages.bannerobscur.src,
    imageSrcset: clairObscurImages.bannerobscur.srcset,
    review: [ClairObscurReview],
  },

  { slug: 'pragmata',
    title: 'Pragmata',
    genre: 'Action | Adventure',
    intro: PragmataIntro,
    image: pragmataImages.banner.src,
    imageSrcset: pragmataImages.banner.srcset,
    review: [PragmataReview],
  },
];
