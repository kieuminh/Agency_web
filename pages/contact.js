import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle"


const contact = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="green" left="-55vh" top="-30vh"/>
            <Circle backgroundColor="yellow" right="-50vh" bottom="-60vh"/>
            <h1 className={styles.title}> GET IN TOUCH </h1> 
            <from className={styles.from}>
                <input className={styles.inputS} placeholder="Username" />
                <input className={styles.inputS} placeholder="Phone" />
                <input className={styles.inputL} placeholder="Email" />
                <input className={styles.inputL} placeholder="Subject" />
                <textarea className={styles.textArea} placeholder="Message" rows={6} />
                <button className={styles.button}>SUBMIT</button>
            </from>
        </div>
    )
}

export default contact
