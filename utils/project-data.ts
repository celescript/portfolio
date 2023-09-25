export interface ProjectConfig {
  title: string
  date: string
  color?: string
  description: string
  image: string
  link?: string
}

export const projectData: ProjectConfig[] = [
  {
    title: 'Meow Keyboard',
    date: '2021-11-19',
    color: '#DE5C89',
    description:
      "My first JavaScript project, a keyboard that goes meow meow. I created it by recording my cat Alaska's meows. Simple and fun.",
    image: 'meow-keyboard.png',
    link: 'https://celescript.github.io/meow-keyboard/',
  },
  {
    title: 'Odele e-commerce',
    date: '2021-12-16',
    color: '#8BC34A',
    description:
      'Odele is an e-commerce created with React and Firebase. On this project, I learned about data fetching and the React lifecycle.',
    image: 'odele-ecommerce.png',
    link: 'https://odele.vercel.app/',
  },
  {
    title: 'Cognizant Softvision Challenge',
    date: '2022-05-25',
    color: '#FFC107',
    description:
      'I created a Trello-like app for this challenge using Axios, Vite and Material-UI. Here, I experimented with creating data-fetching hooks.',
    image: 'cognizant-softvision.png',
    link: 'https://celestefernandez-cschallenge.vercel.app/',
  },
]
