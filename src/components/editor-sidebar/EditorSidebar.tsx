import React from 'react';
import {
	columnCount,
	columnGap,
	paddingLeftRight,
	paddingTopBottom,
	rowCount,
	rowGap,
} from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import './EditorSidebar.css';

interface EditorSidebarProps {
	gridState: IGridState;
	onClose?: () => void;
	onInputChange: (e: any) => void;
	className?: string;
}

export const EditorSidebar = ({
	gridState,
	onClose,
	onInputChange,
	className,
}: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			<EditorSection>
				<h2>Columns</h2>
				<div className={'input-row'}>
					<TextInput
						label={'Count'}
						name={'columnCount'}
						type={'number'}
						icon={columnCount}
						onChange={onInputChange}
						value={gridState.columnCount}
					/>
					<TextInput
						label={'Gap'}
						name={'columnGap'}
						type={'number'}
						icon={columnGap}
						onChange={onInputChange}
						value={gridState.columnGap}
					/>
				</div>
			</EditorSection>
			<EditorSection>
				<h2>Rows</h2>
				<div className={'input-row'}>
					<TextInput
						label={'Count'}
						name={'rowCount'}
						type={'number'}
						icon={rowCount}
						onChange={onInputChange}
						value={gridState.rowCount}
					/>
					<TextInput
						label={'Gap'}
						name={'rowGap'}
						type={'number'}
						icon={rowGap}
						onChange={onInputChange}
						value={gridState.rowGap}
					/>
				</div>
			</EditorSection>
			<EditorSection>
				<h2>Grid padding</h2>
				<div className={'input-row'}>
					<TextInput
						label={'Vertical'}
						name={'paddingTopBottom'}
						type={'number'}
						icon={paddingTopBottom}
						onChange={onInputChange}
						value={gridState.paddingTopBottom}
					/>
					<TextInput
						label={'Horizontal'}
						name={'paddingLeftRight'}
						type={'number'}
						icon={paddingLeftRight}
						onChange={onInputChange}
						value={gridState.paddingLeftRight}
					/>
				</div>
			</EditorSection>
		</div>
	);
};
