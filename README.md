# Bamadash
JavaScript Bamadash boilerplate

Version 1.0.0

A modern JavaScript utility library delivering modularity, performance & extras for the common Bamasnik.

## API Reference
### Math
- `Bamadash.calc(operand1, operand2, operator)`

Performs a mathmatical operation on two operands.
Supported operators: `"+", "-", "*", "/"`

Example:
```
    Bamadash.calc(2, 4, "*");        // => 8
    Bamadash.calc(3, "  6","/");     // => 0.5
    Bamadash.calc("2", "3", "+");    // => 5
    Bamadash.calc("2", "bob", "+")   // => NaN
    Bamadash.calc("2", 5, &);        // => NaN
```

`Instructor instructions: check for null, negative, floating point...`

### Array
- `Bamadash.compact(array)`
Creates a new array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

Example:
```
    Bamadash.comapct([0, 1, false, 2, '', 3]); // => [1, 2, 3]
```

- `Bamadash.intersection(array1, array2, isStrict)`

Creates an array of unique values that are included in all given arrays. If `isStrict` is set to `true`, array items shall be compared by **both value and type**;
and if set to `false`, items shall be compared by **value only** (regardless of type), **isStrict is set to `true` by default.**

Example:
```
    Bamadash.intersection([1,2,3], [3,'1',6], true);
    // => [3]
    Bamadash.intersection([1,2,3], [3,'1',6], false);
    // => [1, 3]
    Bamadash.intersection([[1], 2, 3], [3, '1',6], false); // => [[1], 3]
    Bamadash.intersection([1, 2, 3], [3, '1', 6]) // => [3]
```

### Collection
- `Bamadash.size(collection)`
Gets the size of collection (string/ array/ object) by returning its length for array-like values or the number of own enumerable string keyed properties for objects.

```
    Bamadash.size([1, 2, 3]);
    // => 3

    Bamadash.size({'a': 1, 'b': 2});
    // => 2

    Bamadash.size('pebbles');
    // => 7

    Bamadash.size(456);
    // => 0
```

### Lang

- `Bamadash.castArray(value)`

Casts value as an array if it's not one

Example:
```
    Bamadash.castArray(1);
    // => [1]

    Bamadash.castArray({ 'a': 1 });
    // => [{'a' : 1}]

    Bamadash.castArray('abc');
    // => ['abc']

    Bamadash.castArray();
    // => []

    Bamadash.castArray([1, 2]);
    // => [1, 2]
```