import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date())
    const [msg, setMsg] = useState()
    useEffect(() => {
        const timer = setInterval(() => {
            const time = new Date()
            setTime(time);
            if (time.getMinutes() % 5 == 0) {
                setMsg('Время делится на 5')
            }
            else {
                setMsg(null)
            }
        }, 1000
        );
       
        return () => {
          clearInterval(timer);
        }
      }, []);

    return (
        <div>
            
        Сейчас: {time.toUTCString()}
        <br />
        {msg}
        </div>
    )
}

export default Clock