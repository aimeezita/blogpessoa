
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import './home.css'

export default function Home() {
    return (
      <>
        <Navbar/>

        <div className="home">


        <p className="conteudo">Eu sou um conteúdo</p>
        <img  src="https://pbs.twimg.com/media/FiQ_3vMVEAA0hDi?format=jpg&name=4096x4096" alt="" />

        </div>

        <Footer/>
      </>
    )
  }