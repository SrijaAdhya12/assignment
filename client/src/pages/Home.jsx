import { Hero, Task, News, Events, Updates, Birthdays, QuickLinks } from "../section"
const Home = () => {
  return (
    <>
    <Hero />
      <Task />
      <News />
      <Events />
      <Updates />
      <Birthdays />
      <QuickLinks />
    </>
  )
}

export default Home