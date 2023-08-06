import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Table from "./components/Table";
import Board from "./components/Board";
import MobileNav from "./components/Nav/MobileNav";

function App() {
  return (
  <div className="h-fit bg-[#252525] flex justify-center">
    <div className="container border my-[2rem] rounded-xl bg-gradient-to-bl from-[#d3bbbb] via-[#666565] to-[#3f3f3f] flex flex-col justify-between">
<Header />
<div className="relative flex flex-col items-center justify-around lg:flex-row space-y-[3rem]">
  <Aside />
  <MobileNav />
  <Board />
  <Table />
</div>
<Footer />
    </div>
  </div>);
}

export default App;
