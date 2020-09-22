import { useContext } from 'react';
import { PopupContext } from "../../state/popupsContext";

const usePopupStatus = () => {
  const { setOpen, setClose, modalState } = useContext(PopupContext);

  return [setOpen, setClose, modalState];
}

export default usePopupStatus;
