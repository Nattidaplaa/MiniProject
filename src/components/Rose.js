import React, { useEffect, useState } from 'react';
import rose from '../image/rose.jpg';
import { firestore } from '../index'

const Rose = () => {
  const [text1, settext1] = useState('');
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
          <h4 className="top">Rosé BlackPink</h4>
        </div>
        <div className="top">{text1.rose}</div>
        <div className="center top">
          <img width="423" height="600" src="http://www.walakatah.com/wp-content/uploads/2019/04/4.png" ></img>
        </div>
        <div className="top">{text1.rose1}</div>
        <div className="center top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R54JngommeI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="top">{text1.rose2}</div>
      <div className="top">{text1.rose3}</div>
        <div className="center top">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YBPEPVoEfKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
      </div>
    </div>
  )
}


export default Rose