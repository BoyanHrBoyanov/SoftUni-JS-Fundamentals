function reverseString (text) {
    let size = text.length;
    let end = size - 1;
    let reversed = "";

    for (let i = end; i >= 0; i--) {
        let currentLetter = text.charAt(i);
        reversed += currentLetter;

    }
    console.log(reversed);

}
reverseString("1234");