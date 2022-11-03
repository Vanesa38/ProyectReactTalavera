import { createContext, useState } from "react";

const Notification = ({message, severity}) => {
    const notificationStyle = {
        position: 'fixed',
        bottom: 5,
        right: 10,
        widht: 'auto',
        height: 'auto',
        padding: '10px 20px 10px 20px',
        color: 'white',
        backgroundColor: severity ==='success' ? 'rgb(112, 189, 112)':' rgb(232, 83, 83)'
    }

    if (message === '') return
    
    return (
        <div style={notificationStyle}>
        {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider= ({children}) => {
    const[message, setMessage]= useState('')
    const[severity, setSeverity] = useState('success')

    const setNotification = (sev, msj, time = 2) => {
        setSeverity(sev)
        setMessage(msj)
        setTimeout(() => {
            setMessage('')
        }, time * 1000);
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext