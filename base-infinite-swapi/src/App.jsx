import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const querClient = new QueryClient();

  return (
    <QueryClientProvider client={querClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
        {/* <InfiniteSpecies /> */}
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
