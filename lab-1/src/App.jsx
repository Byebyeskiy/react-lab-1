import ProfileCard from './components/ProfileCard.jsx'
import './App.css'
const technologies = ['React', 'JavaScript', 'Vite']
export default function App() {
  return (
    <main className="page">
      <header>
        <strong>ДБ.</strong>
        <span>Лабораторна робота №1</span>
      </header>
      <ProfileCard
        name="Давид Борщук"
        group="КН313"
        technologies={technologies}
      />
      <footer>Перший крок у React · 2026</footer>
    </main>
  )
}
