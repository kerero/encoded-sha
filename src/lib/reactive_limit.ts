export default function reactive_limit(burst_interval: number) {
  let timeout
  return (callback: () => void) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback()
    }, burst_interval)
  }
}