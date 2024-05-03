/* eslint-disable react/prop-types */
import styles from "./Rockcard.module.css"


const Rockcard = ({ rock }) => {
    return (
        <div className={styles.cont}>
          <div className={styles.rockcard__name}>{rock.name}</div>
        <img className={styles.img} src={rock.image} />
        <div className={styles.rockcard__description}>{rock.description}</div>
      </div>
    );
}

export default Rockcard