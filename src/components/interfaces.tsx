interface LangProp {
  langObj: { langObj: any,
          setLangObj:React.Dispatch<React.SetStateAction<any>> }
}

interface LangObj {
  langObj: any
}

interface ShowModal {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

interface ToggleSwitchProp {
  id?: string,
  label?: string,
  disabled?: boolean,
  switchStatus: boolean,
  setSwitchStatus: React.Dispatch<React.SetStateAction<boolean>>
}

interface AdvancedSearchProp {
  advanced: boolean,
  basicRef: React.RefObject<HTMLInputElement>,
  langObj: any
}

interface TextBoxProp {
  controlID?: string,
  disabled?: boolean,
  type?: string,
  floatingLabel: string,
  textBoxRef: React.RefObject<HTMLInputElement>,
}

export { type ShowModal, type LangProp, type LangObj, type ToggleSwitchProp, type TextBoxProp, type AdvancedSearchProp };