
import { Header } from "./components/Header"
import {Post} from "./components/Post"

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

      <Post />

        </main>
    </div>
    </>
  )
}


