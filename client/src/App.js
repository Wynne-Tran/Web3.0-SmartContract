import { NavBar, Welcome, Footer, Transactions, Services, Loader } from "./component/Index";

const  App = () => {
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
       </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  );
}

export default App;
