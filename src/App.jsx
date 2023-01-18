import { Header } from "./components/Header.jsx"
import './global.css'

import styles from './App.module.css';

function App() {

  return (
  <div>
  <Header/>
  <div className={styles.wrapper}>
    <aside>de lado</aside>
    <main>
      <h1>opa</h1>
    </main>
  </div>
  </div>
  )
}

export default App
