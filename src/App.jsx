import { Header } from "./components/Header.jsx"
import './global.css'

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar.jsx";

function App() {

  return (
  <div>
  <Header/>
  <div className={styles.wrapper}>
    
    <Sidebar/>
    
    <main>
      <h1>opa</h1>
    </main>
  </div>
  </div>
  )
}

export default App
