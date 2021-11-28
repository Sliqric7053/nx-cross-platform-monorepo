export function webAppTetrisUtilInterface(): string {
  return 'web-app-tetris-util-interface';
}

export interface IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
}
