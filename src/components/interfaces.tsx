interface ToggleSwitchProp {
  id?: string,
  label?: string,
  switchStatus: boolean,
  setSwitchStatus: React.Dispatch<React.SetStateAction<boolean>>,
}

interface TextBoxProp {
  controlID?: string,
  floatingLabel: string,
  textBoxRef: React.RefObject<HTMLInputElement>,
}

export { type ToggleSwitchProp, type TextBoxProp };