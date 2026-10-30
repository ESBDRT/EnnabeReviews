import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import FirewatchImg from '../assets/review_images/Firewatch/banner.jpg'
import FirewatchIntro from '../assets/review_content/Firewatch/intro.md?raw'
import FirewatchTrack from '../assets/review_audio/Firewatch/Prologue.mp3'

import { tombRaiderImages } from '../assets/review_images/TombRaiders/srcsets'
import TombRaiderIntro from '../assets/review_content/TombRiderTrilogy/intro.md?raw'
import TombRaiderTrack from '../assets/review_audio/TombRiderTrilogy/Shadow of the Tomb Raider - Official Main Menu Theme.mp3'

import LifeIsStrangeImg from '../assets/review_images/LifeIsStrange/banner.jpg'
import LifeIsStrangeIntro from '../assets/review_content/LifeIsStrange/intro.md?raw'
import LifeIsStrangeTrack from '../assets/review_audio/LifeIsStrange/Life Is Strange Soundtrack - Obstacles By Syd Matters.mp3'
import { clairObscurImages } from '../assets/review_images/ClairObscur/srcsets'
import ClairObscurIntro from '../assets/review_content/ClairObscur/intro.md?raw'
import ClairObscurTrack from '../assets/review_audio/ClairObscur/Clair Obscur Expedition 33 (Original Soundtrack) 68 - Lost Voice.mp3'
import { pragmataImages } from '../assets/review_images/Pragmata/srcsets'
import PragmataIntro from '../assets/review_content/Pragmata/intro.md?raw'
import PragmataTrack from '../assets/review_audio/Pragmata/44. Memories Are You.mp3'

import { Content as FirewatchReview } from '../assets/review_content/Firewatch/review.mdx';
import { Content as TombRaiderReview } from '../assets/review_content/TombRiderTrilogy/review.md';
import { Content as TombRaider } from '../assets/review_content/TombRiderTrilogy/TombRider.mdx';
import { Content as Rise } from '../assets/review_content/TombRiderTrilogy/RiseOfTheTombRider.mdx';
import { Content as Shadow } from '../assets/review_content/TombRiderTrilogy/ShadowOfTheTombRider.mdx';
import { Content as LifeIsStrangeReview } from '../assets/review_content/LifeIsStrange/review.mdx';
import { Content as ClairObscurReview } from '../assets/review_content/ClairObscur/review.mdx';
import { Content as PragmataReview } from '../assets/review_content/Pragmata/review.mdx';

type Game = {
  slug: string;
  title: string;
  genre: string;
  intro: string;
  image: string;
  imageSrcset?: string;
  review: AstroComponentFactory[];
  rating?: string;
  soundtrack?: { src: string; title: string; artist: string };
};

export const games: Game[] = [
  { slug: 'firewatch', 
    title: 'Firewatch', 
    genre: 'Narrative', 
    intro: FirewatchIntro, 
    image: FirewatchImg.src, 
    review: [FirewatchReview],
    soundtrack: { src: FirewatchTrack, title: 'Prologue', artist: 'Chris Remo' },
    rating: "4.1/5"
  },

  { slug: 'tomb-raider',
    title: 'TOMB RAIDER : The survivor trilogy',
    genre: 'Action | Adventure',
    intro: TombRaiderIntro,
    image: tombRaiderImages.banner.src,
    imageSrcset: tombRaiderImages.banner.srcset,
    review: [TombRaider, Rise, Shadow, TombRaiderReview],
    soundtrack: { src: TombRaiderTrack, title: 'Main Menu Theme (Shadow of the Tomb Raider)', artist: 'Brian D\'Oliveira' },
  },

  { slug: 'life-is-strange',
    title: 'Life is Strange',
    genre: 'Narrative',
    intro: LifeIsStrangeIntro,
    image: LifeIsStrangeImg.src,
    review: [LifeIsStrangeReview],
    soundtrack: { src: LifeIsStrangeTrack, title: 'Obstacles', artist: 'Syd Matters' },
  },

  { slug: 'clair-obscur',
    title: 'Clair Obscur : Expedition 33',
    genre: 'RPG | Adventure',
    intro: ClairObscurIntro,
    image: clairObscurImages.bannerobscur.src,
    imageSrcset: clairObscurImages.bannerobscur.srcset,
    review: [ClairObscurReview],
    soundtrack: { src: ClairObscurTrack, title: 'Lost Voice', artist: 'Lorien Testard' },
  },

  { slug: 'pragmata',
    title: 'Pragmata',
    genre: 'Action | Adventure',
    intro: PragmataIntro,
    image: pragmataImages.banner.src,
    imageSrcset: pragmataImages.banner.srcset,
    review: [PragmataReview],
    soundtrack: { src: PragmataTrack, title: 'Memories Are You', artist: 'Yasumasa Kitagawa feat. YU-KA' },
  },
];
