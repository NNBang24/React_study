import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfileComponent from './component/ProfileComponent'
import avatar from './assets/t_shirt8.jpeg'
import tShirt1 from './assets/t_shirt1.jpeg'
import tShirt2 from './assets/t_shirt2.jpeg'
import tShirt3 from './assets/t_shirt3.jpeg'
import tShirt4 from './assets/t_shirt4.jpeg'
import CountComponent from './component/CountComponent'
import ProductListComponent from './component/ProductComponent'
function App() {
  const UserData = {
    fullname : "Nguyen Nhat Bang" ,
    img: avatar ,
    title: "Backend Developer Intern" ,
    bio: "Sinh viên năm cuối ngành IT tại UTH. Đam mê xây dựng hệ thống backend hiệu suất cao và tìm hiểu về kiến trúc microservices." ,
    skills: ["Node.js", "Express", "MySQL","ReactJs", "RESTful API"] 
  }
  const productsList = [
    {
      id : 1 ,
      name : "T SHIRT 1" ,
      img: tShirt1 ,
      price : "230.000" ,
      desc : "Ao mau den"
    },
    {
      id: 2,
      name: "T SHIRT 2",
      img: tShirt2,
      price: "230.000",
      desc: "Ao mau trang"
    },
    {
      id: 3,
      name: "T SHIRT 3",
      img: tShirt3,
      price: "240.000",
      desc: "Ao mau hong"
    },
    {
      id: 4,
      name: "T SHIRT 4",
      img: tShirt4,
      price: "230.000",
      desc: "Ao mau do"
    },
  ]
  return (
    <><h1 className="h1">Profile NNB</h1>
      <UserProfileComponent user ={UserData}/>
      <br />
      <h1 className="h1">Count NNB</h1>
      <CountComponent/>
      <br />
      <h1 className="h1">SHOPPING NNB</h1>
      <ProductListComponent product={productsList}/>
    </>
  )
}

export default App
