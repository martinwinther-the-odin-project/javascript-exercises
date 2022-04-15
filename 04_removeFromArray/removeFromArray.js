const removeFromArray = function (firstArray, ...toRemove) {
    let modifiedArray = [...firstArray];
    for (i = 0; i < firstArray.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }
    }
    return modifiedArray;
}
// Do not edit below this line
module.exports = removeFromArray;
