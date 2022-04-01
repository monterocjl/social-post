import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import BackgroundBlurImage from '../pages/components/backgroundBlurImage/backgroundBlurImage'
import MainImage from './components/mainImage/mainImage'
import Avatar from './components/avatar/avatar'
import MainPost from './components/mainTopic/mainPost'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <BackgroundBlurImage/>
      <MainImage/>
      <Avatar positionX='42px' positionY='-67px'/>
      <MainPost/>
    </div>
  )
}

export default Home