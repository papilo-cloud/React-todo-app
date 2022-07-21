import App from "./App"
import { AppProvider } from "./Contsxt"

const Home = () => {
  return (
    <div>
        <AppProvider>
            <App />
        </AppProvider>
    </div>
  )
}

export default Home