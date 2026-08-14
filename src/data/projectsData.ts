import kingqueenImg from '../assets/kingqueen.png'
import destinyImg from '../assets/destiny.png'
import darkstoreImg from '../assets/darkstore.png'
import sugarImg from '../assets/sugar.png'
import kisahImg from '../assets/kisah.png'

export interface Project {
  id: string
  title: string
  domain: string
  imgUrl: string
  description: string
  tags: string[]
  link: string
  isExternal: boolean
}

export const projects: Project[] = [
  {
    id: 'kingqueen',
    title: 'KingQueen (E-Commerce)',
    domain: 'kingqueen.in',
    imgUrl: kingqueenImg,
    description: 'E-Commerce fashion & lifestyle brand web platform featuring product listings, smooth cart interactions, and modern responsive layout.',
    tags: ['React.js', 'E-Commerce', 'Tailwind CSS'],
    link: 'http://kingqueen.in/',
    isExternal: true,
  },
  {
    id: 'destiny',
    title: 'Destiny Service Agency',
    domain: 'destinyservice.nl',
    imgUrl: destinyImg,
    description: 'International business service agency website built with modern frontend architecture, service showcases, and responsive lead forms.',
    tags: ['Next.js', 'React', 'Responsive Design'],
    link: 'https://destinyservice.nl/',
    isExternal: true,
  },
  {
    id: 'darkstore',
    title: 'The Dark Store (E-Commerce)',
    domain: 'the-dark-store-g8uq.onrender.com',
    imgUrl: darkstoreImg,
    description: 'Full-Stack MERN E-Commerce platform featuring product catalog, cart management, secure user authentication, checkout flow, and scalable MongoDB backend.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://the-dark-store-g8uq.onrender.com/',
    isExternal: true,
  },
  {
    id: 'sugar',
    title: 'Sugar Cosmetics UI',
    domain: 'cosmetic-123.netlify.app',
    imgUrl: sugarImg,
    description: 'Built a responsive e-commerce UI with product listing. Added Add to Cart, Login/Signup, Wishlist, and Purchase flow functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://cosmetic-123.netlify.app/',
    isExternal: true,
  },
  {
    id: 'kisah',
    title: 'Kisah Ethnic Wear',
    domain: 'kisah-ecommerce.vercel.app',
    imgUrl: kisahImg,
    description: 'Created an E-commerce website with reusable components, robust state management, and seamless API integration.',
    tags: ['React.js', 'State Management', 'API Integration'],
    link: 'https://kisah-ecommerce-react-js.vercel.app/',
    isExternal: true,
  },
]
