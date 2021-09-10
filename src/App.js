import FetchData from './Components/fetchData'

export const ENDPOINT =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'

function App() {
  return (
    <section>
      <header>
        <h1>Contacts</h1>
      </header>
      <ul>
        <FetchData />
      </ul>
    </section>
  )
}

export default App
