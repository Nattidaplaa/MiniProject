import React, { useEffect, useState } from 'react';
import jennie from '../image/jennie.jpg';
import { firestore } from '../index'

const Jennie = () => {
  const [text1, settext1] = useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      settext1(tasksfirebase[3])
    })
  }

  return (
    <div>
      <div className="page">
        <div className="center">
          <h1>BLΛƆKPIИK(블랙핑크) </h1>
          <img src={jennie} alt="jennie" />
          <h4 className="top">Jennie BlackPink</h4>
        </div>
        <div className="top">{text1.jennie}</div>
        <div className="center top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HFQBxmv0GWc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="top">{text1.jennie2}</div>
      <div className="top">{text1.jennie3}</div>
      <div className="top">{text1.jennie4}</div>
      </div>
    </div>
  )
}


export default Jennie