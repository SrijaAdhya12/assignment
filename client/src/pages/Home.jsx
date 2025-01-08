import { Hero, Task, News, Events, Updates, Birthdays, QuickLinks } from "../section"
const Home = () => {
  return (
    <main>
      <Hero />
      <Task />
      <News />
      <Events />
      <Updates />
      <Birthdays />
      <QuickLinks />
    </main>
  )
}

export default Home