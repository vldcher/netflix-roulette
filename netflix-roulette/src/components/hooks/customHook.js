import { useContext } from 'react';
import { PopupContext } from "../../state/context";

function usePopupStatus() {
  const { isOpened, setOpen } = useContext(PopupContext);
  return [isOpened, setOpen];
}

export default usePopupStatus;
