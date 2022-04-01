import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import Link from 'next/link'

interface Props {
  background: string;
  color: string;
  bottom: string;
  right: string;
  titleButton: string;
  link: string;
}

const MainButton: NextPage<Props> = (props) => {

  const { background, color, bottom, right, titleButton, link } = props
  
  return (
    <>
      <div className={styles.container}
        style= {{
          bottom: `${bottom}`,
          right: `${right}`,
        }}
      >
        <Link
          href={`/content-${link}`}
        >
          <a
            style= {{
              background: `${background}`,
              color: `${color}`
            }}
          >
            { titleButton }
          </a>
        </Link>
      </div>
    </>
  )
}

export default MainButton