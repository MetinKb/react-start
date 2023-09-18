import styles from './App.module.css';
import TailwindButton from './Button';
import Test from './Test'
import Navbar from './Navbar'

function Styles() {
    return (
        <>
            <Navbar />
            <div className={styles.Flex}>
                <h2 className={styles.App}>{process.env.NODE_ENV}</h2>
                <Test />
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <img src="favicon.ico" alt="" />
                    </>
                )}
            </div >
            <TailwindButton />
        </>
    )
}

export default Styles