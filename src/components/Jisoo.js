import React, { useEffect, useState } from 'react';
import jisoo from '../image/jisoo.jpg';
import { firestore } from '../index'

const Jisoo = () => {
  const [text1,settext1]=useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      settext1(tasksfirebase[4])
    })
  }

  return (
    <div>
      <div className="page">
        <div className="center">
          <h1>BLΛƆKPIИK(블랙핑크) </h1>
          <img src={jisoo} alt="jisoo" />
        </div>
        <div className="top">{text1.jisoo}</div>
      </div>
    </div>
  )
}


export default Jisoo