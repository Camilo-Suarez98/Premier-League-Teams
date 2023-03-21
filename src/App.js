import { useContext } from 'react'
import { DataApi } from "./components/DataApi";
import { Layout } from "./components/Layout";
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'light' ? 'App dark pb-8' : 'App light pb-8'}>
      <Layout>
        <DataApi />
      </Layout>
    </div>
  );
}

export default App;
