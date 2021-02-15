import { IColumnsState } from '../app/App';
import { TextInput } from '../text-input/TextInput';
import '../header/Header.css'

interface HeaderProps {
  columnsState: IColumnsState;
  onColumnCountChange: (e: any) => void;
  onColumnGutterChange: (e: any) => void;
  onColumnMarginChange: (e: any) => void;
  onCodeButtonClick: () => void;
  toggleButtonText: string;
  toggleButtonIcon: any;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={'header'}>
      <h1>Grid Playground</h1>
      <div className={'column-inputs'}>
        <TextInput type={'number'} label={'Count'} value={props.columnsState.count} onChange={props.onColumnCountChange} />
        <TextInput type={'number'} label={'Gutter'} value={props.columnsState.gutter} onChange={props.onColumnGutterChange} />
        <TextInput type={'number'} label={'Margin'} value={props.columnsState.margin} onChange={props.onColumnMarginChange} />
      </div>
      <button onClick={props.onCodeButtonClick}>
        {props.toggleButtonIcon}
        {props.toggleButtonText}
      </button>
    </header>
  )
}