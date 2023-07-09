import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import AccountOperations from "./features/accounts/AccountOperations";
import { useSelector } from "react-redux";
import useFetch from "./useFetch";

function App() {
 const fullName = useSelector((state) => state.customer.fullName);
 return (
  <div>
   <h1>🏦 The React-Redux Bank ⚛️</h1>
   {fullName === "" ? (
    <CreateCustomer />
   ) : (
    <>
     <Customer />
     <AccountOperations />
     <BalanceDisplay />
    </>
   )}
  </div>
 );
 //  const { data, loading, error, reFetch } = useFetch(
 //   "https://v2.jokeapi.dev/joke/Any"
 //  );

 //  if (loading) return <h1>Loading...</h1>;

 //  if (error) console.log(error);
 //  return (
 //   <div className="App">
 //    <h1>
 //     {data?.setup} : {data?.delivery}
 //    </h1>
 //    <button onClick={reFetch}>Refetch</button>
 //   </div>
 //  );
}

export default App;
