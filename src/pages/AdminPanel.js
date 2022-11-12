import React, { useEffect, useState } from 'react'
import Login from '../components/LoginForm';
import {db} from '../firebase';
import { remove, ref } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';

import styles from "./AdminPanel.module.css";
import RegisteredDays from '../components/Days/RegisteredDays';

function AdminPanel() {
  // eslint-disable-next-line
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const auth = getAuth(db.app);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handeLogin = () => {
    clearErrors();
      signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        switch(err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
            case 'auth/wrong-password':
              setPasswordError(err.message);
              break;
        default:
        }
      });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    onAuthStateChanged(auth, user => {
      if(user) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Loged In',
          showConfirmButton: false,
          timer: 1500
        })
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  const clearDB = () => {
    Swal.fire({
      title: 'Are you sure?',
      buttonsStyling: false,
      text: "You won't be able to revert this!",
      icon: 'warning',
      customClass: {
        confirmButton: styles.btn,
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        remove(ref(db, `/CollectedData`));
        Swal.fire({
          buttonsStyling: false,
          icon: 'success',
          title: 'Deleted!',
          text: 'Database has been cleared.',
        })
      }
    })
  };

  useEffect(() => {
    authListener();
  })

    return (
        <>
        { user ? 
          <div className={styles.Login}>
            <div className={styles.logoutContainer}>
              <button className={styles.clearDB} onClick={clearDB}>Clear DB</button>
              <button className={styles.logout} onClick={handleLogout}>Log Out</button>
            </div>
            <RegisteredDays admin={true}/>
          </div>
        : <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handeLogin={handeLogin} emailError={emailError} passwordError={passwordError} />
        }
        </>
    )
}

export default AdminPanel;



