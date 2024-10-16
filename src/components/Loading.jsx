import styles from "../styles/Errors.module.css"

export default function Loading() {
  return (
    <div>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}
