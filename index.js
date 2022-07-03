// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(newCat){
    return cats.push(newCat)
}
function destructivelyPrependCat(newCat){
    return cats.unshift(newCat)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(newCat){
    return [...cats, newCat]
}
function prependCat(newCat){
    return [newCat, ...cats]
}
function removeLastCat(){
    return cats.slice(0, -1)
}
function removeFirstCat(){
    return cats.slice(1)
}