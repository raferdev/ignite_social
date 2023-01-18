import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar.jsx";

import { Header } from "./components/Header.jsx"
import {Post} from "./components/Post.jsx"



function App() {

  return (
  <div>
  <Header/>
  <div className={styles.wrapper}>

    <Sidebar/>
    <main>
      <Post/>
    </main>
  </div>
  </div>
  )
}

export default App
