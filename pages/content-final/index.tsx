import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import { MAIN_DATA ,CONTENT_DATA } from '../globals'
import Image from 'next/image'
import BackgroundSecundary from '../components/backgroundSecundary/backgroundSecundary'
import Avatar from '../components/avatar/avatar'

const ContentFinal: NextPage = () => {

  const titlePost = MAIN_DATA.title_post

  return (
    <div className={styles.container}>
      <BackgroundSecundary/>
      <Avatar positionX='192px' positionY='130px'/>
      <div className={styles.title}>
        {titlePost}
      </div>
      <div className={styles.topicContainer}>
        {
          CONTENT_DATA.map((topic) => (
              <div className={styles.topic} key={topic.id}>
                  <p>
                    {topic.topic}
                  </p>
              </div>
          ))  
        }
      </div>
    </div>
  )
}

export default ContentFinal