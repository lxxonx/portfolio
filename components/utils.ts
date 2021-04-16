export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window;
    return height;
  }
}
