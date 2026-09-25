import FirewatchImg from '../assets/review_images/firewatch.jpg'
import FirewatchIntro from '../assets/review_content/Firewatch/intro.md?raw'

import TombRaiderImg from '../assets/review_images/tbtrilogy.avif'
import TombRaiderIntro from '../assets/review_content/TombRiderTrilogy/intro.md?raw'

import LifeIsStrangeImg from '../assets/review_images/lifeisstrange.jpg'
import LifeIsStrangeIntro from '../assets/review_content/LifeIsStrange/intro.md?raw'

import { Content as FirewatchReview } from '../assets/review_content/Firewatch/review.md';
import { Content as TombRaiderReview } from '../assets/review_content/TombRiderTrilogy/review.md';
import { Content as TombRaider } from '../assets/review_content/TombRiderTrilogy/TombRider.md';
import { Content as Rise } from '../assets/review_content/TombRiderTrilogy/RiseOfTheTombRider.md';
import { Content as Shadow } from '../assets/review_content/TombRiderTrilogy/ShadowOfTheTombRider.md';
import { Content as LifeIsStrangeReview } from '../assets/review_content/LifeIsStrange/review.md';

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
    image: TombRaiderImg.src,
    review: [TombRaider, Rise, Shadow, TombRaiderReview]
  },

  { slug: 'life-is-strange',
    title: 'Life is Strange',
    genre: 'Narrative',
    intro: LifeIsStrangeIntro,
    image: LifeIsStrangeImg.src,
    review: [LifeIsStrangeReview]
  },
];
