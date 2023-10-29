import React, { useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'

function Modal({children, open, onClose ,className=''}) {

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
    createPortal(
    <dialog onClose={onClose} ref={dialog} 
    className={`${className} font-righteous bg-gray-300 rounded-lg border-none shadow-md p-4 w-2/5 max-h-[60%] xl:h-fit xl:min-h-[25%] xl:w-fit xl:text-7 text-5 h-fit`}>
      {children}
      </dialog>, document.getElementById('modal'))
  )
}

export default Modal