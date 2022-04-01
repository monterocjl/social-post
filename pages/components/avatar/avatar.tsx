import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import Image from 'next/image'
import { MAIN_DATA } from '../../globals'

interface Props {
  positionX: string;
  positionY: string;
}

const Avatar: NextPage<Props> = ( props ) => {
  const avatar_image: string = MAIN_DATA.avatar_image
  const { positionX, positionY } = props

  return (
    <div 
        className={styles.avatarContainer}
        style= {{
          marginTop: `${positionY}`,
          marginLeft: `${positionX}`
        }}
    >
        <Image
          src={avatar_image}
          width='130'
          height='120'
          alt='avatar'
          objectFit="cover"
        />
    </div>
  )
}

export default Avatar