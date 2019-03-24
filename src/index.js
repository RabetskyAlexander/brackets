module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 > 0) {
        return false;
    }
    let brackets = str;
    function checkStr() {

        for (let i = 0; i <= brackets.length / 2 - 1; i++){
            let firstBracket = brackets[i];
            let secondBracket;
            bracketsConfig.forEach(element => {
                if (element.includes(firstBracket)) {
                    secondBracket = element[1];
                }
            });

            if (brackets[i+1] === secondBracket) {

                if(brackets.length === 2) {
                    return true;
                } else {
                    brackets = brackets.slice(0, i) + brackets.slice(i + 1 + 1);
                    i = -1;
                    return checkStr();
                }
            }

        }
        return false;
    }
    return checkStr();
}
