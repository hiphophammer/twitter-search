interface ToggleSwitchProp {
  label: string,
  switchStatus: boolean | undefined,
  setSwitchStatus: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

interface TextBoxProp {
  controlID: string,
  floatingLabel: string,
  textBoxRef: React.RefObject<HTMLInputElement>
}

export { type ToggleSwitchProp, type TextBoxProp };