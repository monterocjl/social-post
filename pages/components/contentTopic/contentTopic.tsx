import type { NextPage } from 'next'
import styles from './styles/style.module.scss'

interface Props {
    subtitle: string;
    title: string;
    subtitleColor: string;
    titleColor: string;
}

const ContentTopic: NextPage<Props> = (props) => {

  const {subtitle, title, subtitleColor, titleColor} = props
  
  return (
    <>
      <div className={styles.container}>
          <p
            style={{
                color: `${subtitleColor}`
            }}
          >
              {subtitle}
          </p>
          <h2
            style={{
                color: `${titleColor}`
            }}
          >
              {title}
          </h2>
      </div>
    </>
  )
}

export default ContentTopic