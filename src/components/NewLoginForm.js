import React, { useState } from 'react'
import auth from '../firebase'
import * as firebase from 'firebase';
const NewLoginForm = (props) => {
    const { setLogin } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignUPFirebase = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
            console.log(data);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const Login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            setLogin(true)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    console.log(email, password);
    const SIGNUP = (
        <div>
            <form>
                <p>สมัคร</p>
                <label>Email : </label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="field">
                    <label>Password : </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div >
                {/* {message ? <p className="help is-danger">{message}</p> : null} */}
                <div>
                    <button className="btn" onClick={SignUPFirebase}> สมัคร </button>
                </div>
            </form>
        </div>
    )
    const LOGIN = (
        <div>
            <form>
                <p>เข้าสู่ระบบ</p>
                <label>Email : </label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="field">
                    <label>Password : </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div >
                {/* {message ? <p className="help is-danger">{message}</p> : null} */}
                <div>
                    <button className="btn" onClick={Login}> เข้าสู่ระบบ </button>
                </div>
            </form>
        </div>
    )
    const [Display, setDisplay] = useState(false);
    return (
        <div>
            <button onClick={() => setDisplay(false)}>SIGN UP</button>
            <button onClick={() => setDisplay(true)}> LOGIN</button>
            {Display === false ? SIGNUP : LOGIN}

        </div>
    )
}
export default NewLoginForm;