import React, { useEffect, useState } from 'react';
import bp from '../image/bp.jpg';
import { firestore } from '../index'

const Blackpink = () => {
  const [Text1,setText1]=useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      setText1(tasksfirebase[2])
    })
  }

  return (
    <div>
      <div className="page">
        <div className="center">
          <h1>BLΛƆKPIИK(블랙핑크) </h1>
          <img src={bp} alt="black pink" />
          <div className="top"> </div>
        </div>
        <div className="top">{Text1.text1}</div>
        <div className="top">{Text1.text2}</div>
        <div className="center top">
          <img  src="https://0.soompi.io/wp-content/uploads/2017/06/26202207/blackpink-4.jpg?s=900x600&e=t" ></img>
        </div>
        <div className="top">{Text1.text3}</div>
        <div className="top">{Text1.text4}</div>
        <div className="center top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XSn8hTac6fo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="top">{Text1.text5}</div>
        <div className="top">{Text1.text6}</div>
     </div>
    </div>
  )
}


export default Blackpink