# json2csv_converter
a JSON to CSV and CSV to JSON format converter in js

## Description
This is a solution to convert json format to csv and vice versa.

## How to use
In the index.js file you'll find two functions: JSON2CSV - to convert json to csv, and CSV2JSON - to do the opposite

## Demo
<pre>
  const sampleArrayOfObjects = [
    { name: "Foo", age: 18 },
    { name: "Bar", age: 19 },
    { name: "Foobar", age: 20 }
  ]
  console.log(CSV2JSON(JSON2CSV(
    sampleArrayOfObjects
  )))
</pre>
// outputs
<pre>
  [
    { name: 'Foo', age: '18' },
    { name: 'Bar', age: '19' },
    { name: 'Foobar', age: '20' }
  ]
</pre>