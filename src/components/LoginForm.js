import React from 'react'
import styles from '../pages/AdminPanel.module.css';
// import sample from './images/earth.mp4';

function Login(props) {

    const { email, setEmail, password, setPassword, handeLogin , emailError, passwordError } = props;

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handeLogin();
        }
      }

    return (
        <section className={styles.login}>
            <div className="loginContainer">
                <>
                    <h1 className={styles.title}>Admin Panel</h1>
                </>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Username'/>
                <br />
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} placeholder='Password'/>
                <p className={styles.errorMsg}>{emailError}</p>
                <p className={styles.errorMsg}>{passwordError}</p>
                <div className="btnContainer">
                <>
                    <button onClick={handeLogin}>Login</button>
                    {/* <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span></p> */}
                </> 
                </div>
            </div>
        </section>
    )
}

export default Login;
