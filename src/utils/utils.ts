export function log(value: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(value);
  }
}
