const IMG_URL = 'https://img.rogersandgoffigon.com'
export const pages = {
  contact: {
    sectionColor: 'bg-red-500',
    images: [
      {
        src: `${IMG_URL}/b2/path/w450/kinderplatz/images/general/elizaveta-dushechkina-XPLCCRTX3ic-unsplash.jpg`,
        alt: 'girl looking through magnifying glass',
      },
      {
        src: `${IMG_URL}/b2/path/w450/kinderplatz/images/general/jeshoots-com-LKREcvZeoJQ-unsplash.jpg`,
        alt: 'boy reading map',
      }
    ],
    links: [
      {
        href: '/gallery',
        name: 'Kinderplatz Photos',
      }
    ]
  },
  credentials: {
    sectionColor: 'bg-fuchsia-500',
    images: [
      {
        src: `${IMG_URL}/b2/path/w450/kinderplatz/images/general/jason-leung-Xaanw0s0pMk-unsplash.jpg`,
        alt: 'confetti',
      },
      {
        src: `${IMG_URL}/b2/path/w450/kinderplatz/images/general/lewis-keegan-skillscouter-com-XQaqV5qYcXg-unsplash.jpg`,
        alt: 'check',
      }
    ],
    links: [
      {
        href: '#staff',
        name: 'Staff',
      }
    ]
  },
}
export const getPageInfo = (id) => (pages[id] || null)
