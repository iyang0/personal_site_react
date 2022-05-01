import { useRef, useState, useEffect} from "react";

export function useOutsideClick(initValue){
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(initValue);

  const handleClickOutside = (evt) => {
    if(ref.current && !ref.current.contains(evt.target)) setIsOpen(false);
  };

  //make sure that component mounts before attaching an event listener
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [ref])

  return [ isOpen, setIsOpen, ref ];
}