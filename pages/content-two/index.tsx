import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import BackgroundSecundary from '../components/backgroundSecundary/backgroundSecundary'
import Avatar from '../components/avatar/avatar'
import ContentTopic from '../components/contentTopic/contentTopic'
import Gif from '../components/gif/gif'
import MainButton from '../components/mainButton/mainButton'
import { MAIN_DATA, CONTENT_DATA } from '../globals'

const ContentTwo: NextPage = () => {
  const subtitleColor: string = MAIN_DATA.color_5;
  const titleColor: string = MAIN_DATA.color_1;
  const titleButton: string = MAIN_DATA.button_2
  const backgroundButton: string = MAIN_DATA.color_1
  const subtitle: string = MAIN_DATA.title_post;
  
  const title: any = CONTENT_DATA[1].topic;
  const gifUrl: any = CONTENT_DATA[1].gif_url;

  return (
    <div className={styles.container}>
      <BackgroundSecundary/>
      <Avatar positionX='42px' positionY='130px'/>
      <ContentTopic
          subtitle={subtitle} 
          title={title} 
          subtitleColor={subtitleColor} 
          titleColor={titleColor} 
      />
      <Gif gifUrl={gifUrl}/>
      <MainButton 
          titleButton={titleButton} 
          background={backgroundButton} 
          color='white' 
          bottom='75px' 
          right='10px'
          link='three'
      />
    </div>
  )
}

export default ContentTwo