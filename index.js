const app = "I don't do much."

let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var cats = [...kittens, name]
  return cats
}

function prependKitten(name) {
  var cats = [name, ...kittens]
  return cats
}

function removeLastKitten() {
  let cats = kittens.slice(0, kittens.length -1)
  return cats
}

function removeFirstKitten() {
  let cats = kittens.slice(1)
  return cats
}
