function JSON2CSV(array) {
  const header = Object.keys(array[0]).join()
  const body = array.map(obj => {
    const keys = Object.keys(obj)
    const values = []
    for (const key of keys) {
      values.push(obj[key])
    }
    return values.join()
  }).join("\n")
  let csvOutput = header + "\n" + body
  return csvOutput
}

function CSV2JSON(string) {
  const array = string.split("\n")
  const jsonOutput = []
  const keys = array[0].split(",")
  const body = array.slice(1)
  for (const elem of body) {
    const values = elem.split(",")
    let obj = {}
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i]
    }
    jsonOutput.push(obj)
  }
  return jsonOutput
}

const sampleArrayOfObjects = [
  { name: "Foo", age: 18 },
  { name: "Bar", age: 19 },
  { name: "Foobar", age: 20 }
]

// Demo
console.log(CSV2JSON(JSON2CSV(
  sampleArrayOfObjects
)))