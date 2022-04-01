import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import Image from 'next/image'
import { MAIN_DATA } from '../../globals'

const MainImage: NextPage = () => {
  const main_image: string = MAIN_DATA.main_image
  const movie_name: string = MAIN_DATA.movie_name

  return (
    <div className={styles.imageContainer}>
        <Image
          src={main_image}
          width='540'
          height='250'
          alt={movie_name}
          objectFit="cover"

          className={styles.image}
        />
        <p>
          {movie_name}
        </p>
    </div>
  )
}

export default MainImage
