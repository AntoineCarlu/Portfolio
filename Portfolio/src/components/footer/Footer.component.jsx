import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p>carluantoinepro@gmail.com</p>
        <p>06 59 37 83 35</p>
      </div>
      <div>
        <p>© 2024 <u><a href='https://github.com/AntoineCarlu' target='_blank'>Antoine Carlu</a></u></p>
      </div>
    </div>
  )
}
