import type { NextPage } from 'next'
import styles from './styles/style.module.scss'
import { COLORS_DATA } from '../../globals'

const ColorsPalette: NextPage = () => {

  return (
    <>
      <div className={styles.palleteContainer}>
        {
          COLORS_DATA.map((color) => (
            <div
              key={color.id}
              className={styles.color}
              style={{
                background: `${color.color}`
              }}
            >
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ColorsPalette