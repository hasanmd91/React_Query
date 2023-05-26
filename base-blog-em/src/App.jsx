import { Posts } from "./Posts";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const querclient = new QueryClient();
  console.log(querclient);

  return (
    <QueryClientProvider client={querclient}>
      <div>
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

//what is query client
// quer client is responsible for managing the state and chacing the data fetched by the application
// queryclient in react query is a central component that specifies and optimizes data fetching , state managment , caching

//data querying: query client  provides methods to querying data against an api. the queris can be confuguerd with various options such as data cahching invalidation, and pagination
// query client maintain a cache of fetch data which prevents subsequent fetch request for the same data .
// autmatic data fetching, query client can be configuerd  as that it can automatically refecth data in the background
// query client also provides functionality for data mutaions
// global state managment
