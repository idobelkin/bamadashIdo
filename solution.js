const Bamadash = require("./index.js");

function calc(num1, num2, operator)
{
    
    if(!isValid(num1, num2, operator))
        return NaN;
    switch(operator)
    {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return NaN;
    }
}
function isValid(num1, num2, operator)
{
    if(isNaN(parseInt(num1)) || isNaN(parseInt(num2)))
        return false;
    return true;
}

function compact(array)
{
    let a =  array.filter((value) => {
        if(!isNaN(value) && value != 0)
            return value;
    }
    )
    return a;
}

function intersection(firstArray, secondArray, isStrict)
{
    let toReturn = [];
    firstArray.forEach(firstElement => {
        secondArray.forEach(secondElement => {
            if(isStrict)
            {
                if(firstElement === secondElement)
                    toReturn.push(firstElement);
            }
            else
            {
                if(firstElement == secondElement)
                    toReturn.push(firstElement);
            }
        })
    });
    
    return toReturn;

}

function size(collection)
{
    if(typeof(collection) === "object")
        return Object.keys(collection).length;
    
    if(isNaN(collection.length))
        return 0;

    return collection.length;
}

function castArray(collection)
{
    let t = typeof(collection);
    if(typeof(collection) === "array")
        return collection;
    else if(typeof(collection) === "object")
        return Object.entries(collection)
    return [collection];
}

console.log(castArray({ 'a': 1 }));