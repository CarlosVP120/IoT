import { onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import styles from "./ToggleButtons.module.css";
import { ListBox } from 'primereact/listbox';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Swal from 'sweetalert2';


function ToggleButtons() {

    const [toggleState, setToggleState] = useState("");

    // Read data from the database
    useEffect(() => {
      onValue(ref(db, "ToggleState"), (snapshot) => {
        setToggleState("");
        const data = snapshot.val();
        if (data) {
            if (data.toggleState === "On") {
                setToggleState("Off");
                let timerInterval
                Swal.fire({
                  title: 'Watering in progress!',
                  html:
                    'Please wait <strong></strong> seconds.<br/><br/>',
                  timer: 5000,
                  didOpen: () => {
                    Swal.showLoading()
                
                    timerInterval = setInterval(() => {
                      Swal.getHtmlContainer().querySelector('strong')
                        .textContent = (Swal.getTimerLeft() / 1000)
                          .toFixed(0)
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                })
            } else {
                setToggleState("On");
            }
        }
      });
    }, []);
    
    // Write to the database
    const WriteToDatabase = () => {
      set(ref(db, `/ToggleState`), {
        toggleState
      });
    };

    // const uploadToggleCourtain = (value) => {
    //     set(ref(db, `/ToggleStateCourtain`), {
    //         toggleStateCourtain: value
    //     });
    //     Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Successfully updated to ' + value,
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    // }

    const [selectedTime, setSelectedTime] = useState(null);

    const times = [
    { name: '1 min', code: '1' },
    { name: '2 mins.', code: '2' },
    { name: '3 mins.', code: '3' },
    { name: '4 mins.', code: '4' },
    { name: '5 mins.', code: '5' }
    ];
    
    const handleIntervalChange = (e) => {
        setSelectedTime(e.value);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Interval Changed to ' + e.value.name,
            showConfirmButton: false,
            timer: 1500
          });
        set(ref(db, `/TimeInterval`), {
            selectedTime: e.value.code
        });
    }

  return (
    <div className={styles.ToggleButtonsPage}>
        <button onClick={WriteToDatabase}>Water {toggleState}</button>
        {/* <div className={styles.ButtonsContainer}>
          <button onClick={() => uploadToggleCourtain("Up")}>Courtain Up</button>
          <button onClick={() => uploadToggleCourtain("Freeze")}>Freeze Courtain</button>
          <button onClick={() => uploadToggleCourtain("Down")}>Courtain Down</button>
        </div> */}
        <h2>Time Interval</h2>
        <ListBox value={selectedTime} options={times} onChange={handleIntervalChange} optionLabel="name" style={{ width: '15rem', textAlign:'center'}} />
     </div>
  )
}

export default ToggleButtons