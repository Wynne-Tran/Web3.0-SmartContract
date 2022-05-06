import { NavBar, Welcome, Footer, Transaction, Services, Loader } from "./component/Index";

const  App = () => {
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
       </div>
        <Services />
        <Transaction />
        <Footer />
    </div>
  );
}

export default App;
