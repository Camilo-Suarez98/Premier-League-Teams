import DataApi from "./components/DataApi";
import { Layout } from "./components/Layout";
import { Input } from './components/Input'

function App() {
  return (
    <div className="App w-3/4 m-auto pb-8">
      <Layout>
        <Input
          className="flex w-1/3 text-center m-auto"
          type='text'
          placeholder='Search the team'
          onChange={() => console.log("Hola")}
        />
        <DataApi />
      </Layout>
    </div>
  );
}

export default App;
