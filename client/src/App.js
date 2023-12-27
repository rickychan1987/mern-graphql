import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import Clients from "./components/Clients";
<<<<<<< HEAD
import AddClientModal from "./components/AddClientModal"
=======
import AddClientModal from "./components/AddClientModal";
>>>>>>> 2ec554a5519914b1d4aa3e723d8f2f5f128fbe9b

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
})


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header/>
    <div className="container">
<<<<<<< HEAD
      <AddClientModal/>
=======
      <AddClientModal />
>>>>>>> 2ec554a5519914b1d4aa3e723d8f2f5f128fbe9b
      <Clients/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
