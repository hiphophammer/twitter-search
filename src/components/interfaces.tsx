interface ToggleSwitchProp {
  label: string,
  switchStatus: boolean,
  setSwitchStatus: React.Dispatch<React.SetStateAction<boolean>>,
  setHeight?: {
    cardHeight: number
    setCardHeight:React.Dispatch<React.SetStateAction<number>>, 
    heightOffset:number
  } // optional height adjust hook
}

interface TextBoxProp {
  controlID: string,
  floatingLabel: string,
  textBoxRef: React.RefObject<HTMLInputElement>,
}

export { type ToggleSwitchProp, type TextBoxProp };