// Write your solution in this file!
const employee ={
    name: 'John',
    streetAddress: '45 Stop Now Dr.',
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value){
    return {
        ...employeeObj,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value){
    employeeObj[key] = value;
    return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key){
    const keyLess = {...employeeObj};
    delete keyLess[key];
    return keyLess;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key){
    delete employeeObj[key];
    return employeeObj;
}
