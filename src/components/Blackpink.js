import React, { useEffect, useState } from 'react';
import bp from '../image/bp.jpg';
import { firestore } from '../index'

const Blackpink = () => {
  const [text1,settext1]=useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      settext1(tasksfirebase[2])
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
        <div className="top">
        {text1.text1}
        <div>{text1.text2}</div>
        </div>
     </div>
    </div>
  )
}


export default Blackpink