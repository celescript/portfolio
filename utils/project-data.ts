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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
    image: 'meow-keyboard.png',
    link: 'https://celescript.github.io/meow-keyboard/',
  },
  {
    title: 'Odele e-commerce',
    date: '2021-12-16',
    color: '#8BC34A',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
    image: 'odele-ecommerce.png',
    link: 'https://odele.vercel.app/',
  },
  {
    title: 'Cognizant Softvision Challenge',
    date: '2022-05-25',
    color: '#FFC107',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
    image: 'cognizant-softvision.png',
    link: 'https://celestefernandez-cschallenge.vercel.app/',
  },
]
