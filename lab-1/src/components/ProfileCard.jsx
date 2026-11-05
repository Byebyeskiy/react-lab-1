import { useState } from 'react'
export default function ProfileCard({ name, group, technologies }) {
  const [likes, setLikes] = useState(0)
  return (
    <article aria-labelledby="profile-name">
      <div className="top">
        <span>ПРО МЕНЕ</span>
        <span className="status">● Вивчаю веброзробку</span>
      </div>
      <div className="avatar" aria-hidden="true">
        ДБ
      </div>
      <p className="greeting">Привіт, я</p>
      <h1 id="profile-name">{name}</h1>
      <p className="group">Студент · Група {group}</p>
      <p className="intro">
        Створюю свій перший React-застосунок. Хочу перетворювати ідеї на зручні
        та красиві вебінтерфейси.
      </p>
      <section aria-labelledby="tech">
        <h2 id="tech">Хочу опанувати</h2>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
      <div className="bottom">
        <button type="button" onClick={() => setLikes((value) => value + 1)}>
          <span aria-hidden="true">♡</span> Подобається{' '}
          <span className="count" aria-live="polite">
            {likes}
          </span>
        </button>
        <span className="note">Зроблено з цікавістю</span>
      </div>
    </article>
  )
}
