import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Money from '../assets/images/Money.jpg';
import HomeSearch from '../components/HomeSearch';
import '../assets/styles/Home.css';


const styles = {
  color: "red",
  fontSize: "10px",
  marginTop: "360px",
  marginLeft: "2px"
};

const Home = () => {

  return (
    <>
    <Header/>

    <HomeSearch/>

    <hr className='home-hr'/>

    <div className='div-featured'>
      <h1>Featured Books</h1>
    </div>

    <div className='card-container'>

    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>


    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>


    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>


    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>


    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>


    <div className="card">
      <div className="img-box">
        <img src={Money} alt="" />
      </div>

      <div className="text-box">
        <h2>The Psychology of Money</h2>
        <span>Morgan Housel</span>
      </div>
    </div>

    </div>

    <h1 style={styles} > This is Home Page</h1>
    <h1 style={styles} > This is Home Page</h1>
    <h1 style={styles} > This is Home Page</h1>
    

    <Footer/>


    </>
  )
}

export default Home