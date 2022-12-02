export class Key {
  public char: string;
  public code: string;
  public color: string;

  public constructor(char: string, code: string, color = '#60c1b6') {
    this.char = char;
    this.code = code;
    this.color = color;
  }
}
