import { Key } from './model';

const Row1: ReadonlyArray<Key> = [
  new Key('`', 'Backquote'),
  new Key('1', 'Digit1'),
  new Key('2', 'Digit2'),
  new Key('3', 'Digit3'),
  new Key('4', 'Digit4'),
  new Key('5', 'Digit5'),
  new Key('6', 'Digit6'),
  new Key('7', 'Digit7'),
  new Key('8', 'Digit8'),
  new Key('9', 'Digit9'),
  new Key('0', 'Digit0'),
  new Key('-', 'Minus'),
  new Key('=', 'Equal'),
  new Key('Del', 'Backspace', '#868888'),
];

const Row2: ReadonlyArray<Key> = [
  new Key('TAB', 'Tab', '#868888'),
  new Key('Q', 'KeyQ'),
  new Key('W', 'KeyW'),
  new Key('E', 'KeyE'),
  new Key('R', 'KeyR'),
  new Key('T', 'KeyT'),
  new Key('Y', 'KeyY'),
  new Key('U', 'KeyU'),
  new Key('I', 'KeyI'),
  new Key('O', 'KeyO'),
  new Key('P', 'KeyP'),
  new Key('[', 'BracketLeft'),
  new Key(']', 'BracketRight'),
  new Key('\\', 'Backslash'),
];

const Row3: ReadonlyArray<Key> = [
  new Key('CAPS', 'CapsLock', '#868888'),
  new Key('A', 'KeyA'),
  new Key('S', 'KeyS'),
  new Key('D', 'KeyD'),
  new Key('F', 'KeyF'),
  new Key('G', 'KeyG'),
  new Key('H', 'KeyH'),
  new Key('J', 'KeyJ'),
  new Key('K', 'KeyK'),
  new Key('L', 'KeyL'),
  new Key(';', 'Semicolon'),
  new Key('\'', 'Quote'),
  new Key('Enter', 'Enter', '#868888'),
];

const Row4: ReadonlyArray<Key> = [
  new Key('Shift', 'ShiftLeft', '#868888'),
  new Key('Z', 'KeyZ'),
  new Key('X', 'KeyX'),
  new Key('C', 'KeyC'),
  new Key('V', 'KeyV'),
  new Key('B', 'KeyB'),
  new Key('N', 'KeyN'),
  new Key('M', 'KeyM'),
  new Key(',', 'Comma'),
  new Key('.', 'Period'),
  new Key('/', 'Slash'),
  new Key('Shift', 'ShiftRight', '#868888'),
];

export const Rows = [Row1, Row2, Row3, Row4];
