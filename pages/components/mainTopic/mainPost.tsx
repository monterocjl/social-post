import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import { MAIN_DATA } from '../../globals'
import ColorsPalette from '../colorsPalette/colorsPalette'
import MainButton from '../mainButton/mainButton'

const MainPost: NextPage = () => {
  const {title_post, color_3, button_1} = MAIN_DATA

  return (
    <div className={styles.topicContainer}>
        <h1>
            { title_post }
        </h1>
        <ColorsPalette/>
        <MainButton
           titleButton={button_1} 
           background={color_3} 
           color='white' 
           bottom='8px' 
           right='0'
           link='one'
        />
    </div>
  )
}

export default MainPost