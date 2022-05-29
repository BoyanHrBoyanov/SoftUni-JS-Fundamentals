function chessBoard(n) {
    console.log('<div class="chessboard">');

    for (let i = 1; i <= n; i++) {
        console.log(`\t<div>`);
        for (let j = 1; j <= n; j++) {
            if (i % 2 !== 0) {
                if (j % 2 !== 0) {
                    console.log(`\t\t<span class="black"></span>`);
                } else {
                    console.log(`\t\t<span class="white"></span>`);
                }
            } else {
                if (j % 2 === 0) {
                    console.log(`\t\t<span class="black"></span>`);
                } else {
                    console.log(`\t\t<span class="white"></span>`);
                }
            }
        }
        console.log(`\t</div>`);
    }
    console.log(`</div>`);

}
chessBoard(3);