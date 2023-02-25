import DataApi from "./components/DataApi";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App w-3/4 m-auto">
      <Layout>
        <DataApi />
      </Layout>
    </div>
  );
}

export default App;
