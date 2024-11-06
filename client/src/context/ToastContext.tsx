import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const ToastContext = createContext("")

export const useToast = () => useContext(ToastContext)

export default function ToastProvider({ children }) {
    const [toast, setToast] = useState([])

    const open = (content, timeout = 5000) => {
        const id = Date.now()
        setToast(toast => [...toast, { id, content }])
        setTimeout(() => {
            close(id)
        }, timeout)
    }
    const close = (id) => {
        setToast((toast) => toast.filter(toast => { toast.id !== id }))
    }

    return (
        <ToastContext.Provider value={{ open }}>
            {children}
            <div className='flex flex-col' >
                {toast.map(({ id, content }) => {
                    let component;
                    let className = "alert font-normal bg-white rounded-lg shadow-lg text-black"; // Default styles

                    // Check the content type to render appropriately
                    if (typeof content === 'string') {
                        component = <span>{content}</span>;
                    } else if (React.isValidElement(content)) {
                        component = content;
                    } else if (typeof content === 'object' && content.text && content.type) {
                        component = <span>{content.text}</span>;

                        // Customize the class based on toast type
                        switch (content.type) {
                            case 'error':
                                className += " bg-error text-white";
                                break;
                            case 'success':
                                className += " bg-success text-white";
                                break;
                            case 'warning':
                                className += " bg-warning text-black";
                                break;
                        }
                    } else {
                        return
                    }

                    return (
                        <div key={id} className="toast toast-top toast-center">
                            <div className={className}>
                                {component}
                            </div>
                        </div>
                    );
                })}
            </div>
        </ToastContext.Provider>
    )
}

