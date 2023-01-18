import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw"/>
        
            <div className={styles.profile}>
                <strong>Rafael Fernandes</strong>
                <span>Software Developer</span>
            </div>
            <footer>
                <a href="">
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}