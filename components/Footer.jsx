import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link" 

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>KtM CREATIVES</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <div>
                        <span className={styles.linkText}>WORKS WITH US</span>    
                        <Image src="/img/link.png" width="40px" height="40px" alt="" />
                        </div>
                    </Link>
                </h1>
            </div>
            <div className={styles.carS}>
                <div className={styles.carItem}>
                    D4 STREET, 7 DISTRIST <br/> HO CHI MINH CITY, VN
                </div>
                <div className={styles.carItem}>
                    KIEUMINHA01@GMAIL.COM <br/> 0902616146
                </div>
            </div>
            <div className={styles.carS}>
                <div className={styles.carItem}>
                    FOLLOW ME <br/> _FB_IN_BE_TW_
                </div>
                <div className={styles.carItem}>
                    @COPYRIGHT 2021 <br/> All RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
