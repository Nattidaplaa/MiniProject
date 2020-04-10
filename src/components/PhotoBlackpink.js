import React, { useEffect, useState } from 'react'
import Axios from 'axios';


const PhotoBlackpink = () => {
    const nameBlackpink=["Jennie","Lisa","Rosé","Jisoo"];
    const [photos, setPhotos] = useState([]); //สร้างอันเดียวก็ได้ แต่ตัว api เราต้องเรียงเอง ประมาณนี้ ลองทำแยกคนเช่น
    useEffect(() => {
        Axios.get("http://localhost:8000/api/bears").then(res => {
            setPhotos(res.data)
        })
    }, [])
    const PhotoTest = [...photos].map((photo, index) => {
        return (
            <div key={index}>
                <p>{nameBlackpink[index]}</p>
                <img src={photo.img} width="300px"/>
                {/* {console.log(photo.img)} */}
            </div>
        )
    })
    return (
        <div>
            {PhotoTest}
        </div>
    )
}

export default PhotoBlackpink;