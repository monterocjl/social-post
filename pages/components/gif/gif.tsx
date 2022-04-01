import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import Image from 'next/image'

interface Props {
  gifUrl: string;
}

const MainButton: NextPage<Props> = (props) => {

    const { gifUrl } = props
      
  return (
    <>
        <div className={styles.container}>
            <Image
                src={gifUrl}
                width='335'
                height='335'
                alt='gif'
                objectFit='cover'
            />
        </div>
    </>
  )
}

export default MainButton