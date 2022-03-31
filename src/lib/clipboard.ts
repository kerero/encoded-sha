export default function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    console.error('Browser does not support navigator.clipboard.')
    return
  }
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: Copying to clipboard was successful!')
  }, function (err) {
    console.error('Async: Could not copy text: ', err)
  })
}