"use strict";
const removeDuplicates = (numbers) => {
    const originalValues = numbers.filter((item, index) => numbers.indexOf(item) === index);
    return originalValues;
};
