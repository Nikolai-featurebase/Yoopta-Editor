import { YoptaComponent } from './utils/component';
import classnames from 'classnames';
export { classnames as cx };

export { YoptaEditor } from './YoptaEditor';
export { isValidYoptaNodes } from './utils/validate';
export { generateId } from './utils/generateId';
export { isElementActive, getNodeByPath } from './utils/nodes';
export type { YoptaComponentType, YoptaComponentHandlers, HandlersOptions } from './utils/component';
export type { CustomEditor as YoptaEditorType } from './components/Editor/types';

export { YoptaComponent };
