export function sayHello(a: number): number {
  console.log('hi');
  return a*a;
}
export function sayGoodbye(a: number): number {
  console.log('goodbye')
  return a/2;
}

export interface Type2 {
    a: number;
    d: string;
}

export type Type1 = {
    a: number;
    d: string;
}