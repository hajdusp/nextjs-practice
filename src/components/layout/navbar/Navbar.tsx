import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
            <nav className={styles.navbar}>
                <div className="container">
                    <a href="">String</a>
                    <a href="/array">Array</a>
                    <a href="">Object</a>
                </div>
            </nav>
    );
}