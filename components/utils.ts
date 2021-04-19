export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function getWindowHeight(): number {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window;
    return height;
  } else {
    return 0;
  }
}
