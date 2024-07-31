import React from 'react'
import styles from '../Css/Signup.module.css'

const Signup = () => {
  return (
    
    <div className={styles.contain}>
    <h2>Signup</h2>
    <form action="/signup" method='post'>
    <div className={styles.formgroup}>
        <label for="name">Name:</label>
        <input type="text" id='name' name="username" placeholder='Enter your name' reuired autoComplete='off'></input>
    </div>
    {/* <div className={styles.formgroup}>
      <label for="mail">Gmail</label>
      <input type='text' placeholder='Enter your Gmail'></input>
    </div> */}
    <div className={styles.formgroup}>
        <label for="password" >Password:</label>    
        <input type="password" name="password" id="password" placeholder="password" required />
            </div>
            <button type='submit' className={styles.bbt}>Signup</button>
    
    </form>
   
  
</div>
  )
}

export default Signup;
