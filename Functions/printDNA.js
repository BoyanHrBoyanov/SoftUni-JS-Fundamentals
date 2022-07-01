function printDNA(n) {
    let firstCharset = "**fs**";
    let secondCharset = "*f--s*";
    let thirdCharset = "f----s";
    let fourthCharset = "*f--s*";
    let letterComb = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];
    let counter = 1;
    let countCharset = 1;    
    while (counter <= n) {
        for (let i = 0; i <= 4; i++) {
            let result = "";
            if (counter === n + 1) {
                return;
            }
            if (countCharset === 1) {
                result = firstCharset.replace(/f/, letterComb[i][0]);
                result = result.replace(/s/, letterComb[i][1]);
                console.log(result);
                counter++;
                countCharset++;
                continue;
            } else if (countCharset === 2) {
                result = secondCharset.replace(/f/, letterComb[i][0]);
                result = result.replace(/s/, letterComb[i][1]);
                console.log(result);
                counter++;
                countCharset++;
                continue;
            } else if (countCharset === 3) {
                result = thirdCharset.replace(/f/, letterComb[i][0]);
                result = result.replace(/s/, letterComb[i][1]);
                console.log(result);
                counter++;
                countCharset++;
                continue;
            } else if (countCharset === 4) {
                result = fourthCharset.replace(/f/, letterComb[i][0]);
                result = result.replace(/s/, letterComb[i][1]);
                console.log(result);
                counter++;
                countCharset = 1;
                continue;
            }
        }
    }
}
//printDNA(5);
printDNA(15);