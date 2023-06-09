export default function randColor() {
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
}
