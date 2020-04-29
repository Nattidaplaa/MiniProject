import React, { useEffect, useState } from 'react';
import lisa from '../image/lisa.jpg';
import { firestore } from '../index'

const Lisa = () => {
  const [text1, settext1] = useState('');
  useEffect(() => {
    Data_firebase();
  }, [])
  const Data_firebase = () => {
    firestore.collection('Text').onSnapshot((snapshot) => {
      let tasksfirebase = snapshot.docs.map(data => {
        return data.data();
      })
      settext1(tasksfirebase[0])
    })
  }

  return (
    <div>
      <div className="page">
        <div className="center">
          <h1>BLΛƆKPIИK(블랙핑크) </h1>
          <img src={lisa} alt="lisa" />
          <h4 className="top">Lisa BlackPink</h4>
        </div>
        <div className="top"> {text1.lisa} </div>
        <div className="center top">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VdhLxKFcOWQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
        </div>
        <div className="top page"> {text1.lisa2} </div>
        <div className="top page"> {text1.lisa3} </div>
        <div className="center top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OZPSQwhXk2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Lisa