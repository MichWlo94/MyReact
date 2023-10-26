import React, { useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'

function Modal({children, open, className=''}) {

    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current
        
        if (open) {
            modal.showModal()
        }

        return () => {
            modal.close()
        }
    }, [open])

  return (
    createPortal(<dialog ref={dialog} className={`${className} bg-gray-300 rounded-lg border-none shadow-md p-4 w-1/2 max-w-md animate-fade-slide-up`}>{children}</dialog>, document.getElementById('modal'))
  )
}

export default Modal