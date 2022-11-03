interface ToggleSwitchProp {
  id?: string,
  label?: string,
  disabled?: boolean,
  switchStatus: boolean,
  setSwitchStatus: React.Dispatch<React.SetStateAction<boolean>>,
}

interface AdvancedSearchProp {
  advanced: boolean,
  basicRef: React.RefObject<HTMLInputElement>
}

interface TextBoxProp {
  controlID?: string,
  disabled?: boolean,
  floatingLabel: string,
  textBoxRef: React.RefObject<HTMLInputElement>,
}

export { type ToggleSwitchProp, type TextBoxProp, type AdvancedSearchProp };