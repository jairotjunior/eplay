import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 1
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Resident Evil 4',
    id: 2
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 3
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 4
  }
]

const emBreve: Game[] = [
  {
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Diablo',
    id: 6
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: zelda,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Zelda',
    id: 7
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: starWars,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Star Wars',
    id: 8
  },
  {
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus veniam itaque explicabo quasi ratione voluptatem velit. Repudiandae voluptas assumenda, aspernatur, autem est saepe eaque suscipit tempora consequuntur temporibus fugit.',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Nintendo Switch',
    title: 'Resident Evil 4',
    id: 9
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
