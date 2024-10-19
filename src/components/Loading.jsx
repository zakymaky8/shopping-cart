import styles from "../styles/Errors.module.css"

export default function Loading() {
  return (
    <div className={styles.loadCont}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}
