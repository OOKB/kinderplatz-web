const IMG_URL = 'https://img.rogersandgoffigon.com'

// @TODO Make a query to get this information.

export const pages = {
  agegroups: {
    slug: 'agegroups',
    url: '/agegroups',
    name: 'Age Groups',
    sectionColor: 'green-500',
    links: [

    ],
  },
  ['ageGroups/immersion']: {

  },
  approach: {
    slug: 'approach',
    url: '/approach',
    name: 'Approach',
    sectionColor: 'yellow-500',
  },
  contact: {
    slug: 'contact',
    url: '/contact',
    name: 'Contact Us',
    sectionColor: 'red-500',
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
    slug: 'credentials',
    url: '/credentials',
    name: 'Credentials',
    sectionColor: 'fuchsia-500',
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
        href: '/credentials#staff',
        name: 'Staff',
      }
    ]
  },
  introduction: {
    slug: 'introduction',
    url: '/introduction',
    name: 'Introduction',
    sectionColor: 'orange-500',
  },
  testimonials: {
    sectionColor: 'pink-600',
  },
  tuition: {
    slug: 'tuition',
    url: '/tuition',
    name: 'Tuition',
    sectionColor: 'blue-600',
    images: [
      {
        src: `${IMG_URL}/b2/path/w450/kinderplatz/images/general//bernard-hermant-Yfjl81rcY9M-unsplash.jpg`,
        alt: 'Boy with knit blue hat',
      },
    ],
    links: [
      {
        href: '/tuition/#tuition',
        name: 'Tuition & Terms'
      },
      {
        href: '/tuition/#enrollment-policies',
        name: 'Enrollment Policies',
      }
    ],
  },
}

export const getPageInfo = (id) => (pages[id] || null)
