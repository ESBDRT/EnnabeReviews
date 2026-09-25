import { tombRaider2013Images } from '../../review_images/TombRaiders/TB2013/srcsets';
import { riseImages } from '../../review_images/TombRaiders/Rise/srcsets';
import { shadowImages } from '../../review_images/TombRaiders/Shadow/srcsets';

// Import the matching game's array as `screenshots` in its MDX review.
export const tombRaider2013Screenshots = [
  {
    ...tombRaider2013Images.s1,
    alt: 'Lara Croft entering a lantern-lit chamber lined with skulls',
  },
];

export const riseScreenshots = [
  {
    ...riseImages.s1,
    alt: 'Lara Croft standing on a rocky mountain ledge at sunset',
  },
  {
    ...riseImages.s2,
    alt: 'Lara Croft in front of a man behind metal bars',
  },
  {
    ...riseImages.s3,
    alt: 'Lara Croft lighting a narrow cave passage with a blue glow stick',
  },
  {
    ...riseImages.s4,
    alt: 'Lara Croft exploring stone ruins covered in snow and icicles',
  },
];

export const shadowScreenshots = [
  {
    ...shadowImages.s1,
    alt: 'Lara Croft looking up beneath tangled branches in a misty forest',
  },
  {
    ...shadowImages.s2,
    alt: 'An underwater silhouette beneath a golden light on the surface',
  },
  {
    ...shadowImages.s3,
    alt: 'Lara Croft approaching a shipwreck inside a dark cavern',
  },
  {
    ...shadowImages.s4,
    alt: 'Lara Croft overlooking a sunlit jungle valley from a rocky ledge',
  },
];
