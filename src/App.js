import React, {useState, useRef, useEffect} from 'react'
import Form from './form'
import Button from './button'
import style from './App.module.css'

export default function App() {
  const [card, setCard] = useState({});

  useEffect(()=>{
    let storedData = JSON.parse(localStorage.getItem("cardStore")) || 
      {name: "Name",
      title: "Job Title",
      address: "Address",
      email: "email",
      phone: "Phone No.",
      links: "links",
      template: "1",};
    setCard(storedData);
  }, [])

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <Form callBack={(value)=>{setCard(value)}}/>
        </div>

        <div className={style.right}>
          {/* {console.log(typeof card.template)} */}
          {card.template === "1" ? (
            <div className={style.card1}>
                <div className={style.cola1}>
                    <h3>{card.name}</h3>
                    <h4>{card.title}</h4>
                </div>
                <div className={style.cola2}></div>
                <div className={style.cola3}>
                    <p>{card.email}</p>
                    <p>{card.phone}</p>
                    <p>{card.address}</p>
                    <a href='#'>{card.links}</a>
                </div>
            </div>
          ) :
          card.template === "2" ? (
            <div className={style.card2}>
              <div className={style.colb1}>
                  <h3>{card.name}</h3>
                  <h4>{card.title}</h4>
              </div>
              <div className={style.colb2}></div>
              <div className={style.colb3}>
                  <p>{card.email}</p>
                  <p>{card.phone}</p>
                  <p>{card.address}</p>
                  <a href='#'>{card.links}</a>
              </div>
            </div>
          ) : null}
          <Button>Download</Button>
        </div>
      </div>
    </>
  )
}
