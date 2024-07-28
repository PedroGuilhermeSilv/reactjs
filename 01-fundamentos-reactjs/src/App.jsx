
import { Header } from "./components/Header"
import {Posto} from "./Posto"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
export function App() {
console.log(styles)
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />

      <main>

      <Posto author="Pedro Guilherme"
      content="Aprendendo ReactJS"
      />
            <Posto author="Pedro ucas"
      content="Aprendendo "
      />
        </main>
    </div>
    </>
  )
}


