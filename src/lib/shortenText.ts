export default function shortenText(text: string) {
  if (!text) return ''
  return text.length > 30 ? text.slice(0, 67) + '...' : text
}
