import React, { useEffect, useState } from 'react';
import rose from '../image/rose.jpg';
import { firestore } from '../index'

const Rose = () => {
  const [text1,settext1]=useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      settext1(tasksfirebase[1])
    })
  }

  return (
    <div>
      <div className="page">
        <div className="center">
          <h1>BLΛƆKPIИK(블랙핑크) </h1>
          <img src={rose} alt="rose" />
        </div>
        <div className="top">{text1.rose}</div>
      </div>
    </div>
  )
}


export default Rose