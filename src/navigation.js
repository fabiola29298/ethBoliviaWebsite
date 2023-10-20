import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [

        {
          text: 'Inicio',
          href: getPermalink(),
        },
        {
          text: 'ETH Bolivia 2023',
          href: getPermalink('/hackathon-2023'),
        },
        {
          text: 'ETH Bolivia 2024',
          href: getPermalink('/hackathon-2024'),
        },
        {
          text: 'Nosotros',
          href: getPermalink('/nosotros'),
        },
        {
          text: 'Novedades',
          href: getBlogPermalink(),
        },
  ],
  actions: [{ text: 'Twitter', href: 'https://twitter.com/EthereumBo', target: '_blank' }],
};

export const footerData = {

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/EthereumBo' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/EthereumBo' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/EthereumBo' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },  ],
  footNote: `
      Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://twitter.com/fa_async"> Fa Async </a> and template by onWidget · All rights reserved.
  `,
};
