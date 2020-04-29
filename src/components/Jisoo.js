import React, { useEffect, useState } from 'react';
import jisoo from '../image/jisoo.jpg';
import { firestore } from '../index'

const Jisoo = () => {
  const [text1, settext1] = useState('');
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
          <h4 className="top">Jisoo BlackPink</h4>
        </div>
        <div className="top">{text1.jisoo}</div>
        <div className="top">{text1.jisoo2}</div>
        <div className="top">{text1.jisoo3}</div>
        <div className="center top">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rfwf02a5C2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="top">{text1.jisoo4}</div>
        <div className="top">{text1.jisoo5}</div>
        <div className="center top">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cqzldD6pHcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>
      </div>
    </div>
  )
}


export default Jisoo