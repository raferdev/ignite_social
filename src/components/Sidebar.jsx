import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar.jsx'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://media.licdn.com/dms/image/D4D16AQGjR0pbSDBH9Q/profile-displaybackgroundimage-shrink_350_1400/0/1665630333641?e=1679529600&v=beta&t=4CVXDWfJFlYXcCwX7cvCofM1pyjuvySfQZZoaVKSVxQ"
            />
        
            <div className={styles.profile}>
                <Avatar src='https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw'/>
                <strong>Rafael Fernandes</strong>
                <span>Software Developer</span>
            </div>
            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}