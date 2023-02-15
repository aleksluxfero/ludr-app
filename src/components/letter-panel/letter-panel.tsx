import {LETTERS, PATHS} from "@/constants";
import Link from "next/link";
import styles from "./letter-panel.module.css";

const LetterPanel = () => {
  return (
    <div className={styles.letterPanel}>
      <ul className={styles.letterList}>
        {LETTERS.map((letterData, idx) => {
          const [item] = Object.entries(letterData);
          return (
            <li className={styles.letterItem} key={idx}>
              <Link className={styles.letterLink} href={"/" + PATHS.bukva + "/" + item[1]}>{item[0]}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LetterPanel;