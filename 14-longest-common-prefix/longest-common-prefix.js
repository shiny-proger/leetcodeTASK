/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str="";
    const fStr = strs[0];
    for (let i=0;i<fStr.length;i++){
        for(const val of strs){
            if (val[i]!==fStr[i]){
                return str;
            }
        }
        str+=fStr[i];
    }
    return str;
};