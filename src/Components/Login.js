import React from 'react'
import styles from '../Css/Login.module.css'

const Login = () => {
  return (
    <div className={styles.contain}>
        <h2>Login</h2>
        <form action="/login" method='post'>
        <div className={styles.formgroup}>
            <label for="name">Name:</label>
            <input type="text" id='name' name="username" placeholder='Enter username' reuired autoComplete='off'></input>
        </div>
        <div className={styles.formgroup}>
            <label for="password" >Password:</label>    
            <input type="password" name="password" id="password" placeholder="Enter password" required />
                </div>
                <button type='submit' className={styles.bbt}>Login</button>
              
        </form>
        <p>Don't have an account?<a href="/signup">Signup</a></p>
      
    </div>
  )
}

export default Login;
