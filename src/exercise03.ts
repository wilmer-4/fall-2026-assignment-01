//task: use .reduce, .filter and .map.
//.reduce will turn all values into single value. adding.
//.filter will filter out the numbers, keep based on threshhold
//.map will multiply in this case
export function getInventoryValue(
  inventory: Array<[string, number, number]>, 
  //inventory[0] = item
  //inventory[1] = quanitity
  //nventory[2] = price per
): number {
  return inventory
.filter((item) => item[1] > 5)
.map((item) => item[1] * item[2])
.reduce((total , price) => total + price, 0)


}