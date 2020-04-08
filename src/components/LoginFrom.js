import React from 'react'
import auth from '../firebase'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div>
          <h2>Welcome to {currentUser.email}</h2>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }

    return (

      <form onSubmit={this.onSubmit}>
        <label>Email : </label>
        <input
          className="input"
          type="email"
          name="email"
          onChange={this.onChange}
        />
        <div className="field">
          <label>Password : </label>
          <input
            className="input"
            type="password"
            name="password"
            onChange={this.onChange}
          />
        </div >
        {message ? <p className="help is-danger">{message}</p> : null}
        <div>
          <button type="submit" className="btn">  Login </button>
          <button type="submit" className="btr"> Cancel </button>
        </div>
      </form>

    )
  }
}

export default LoginForm