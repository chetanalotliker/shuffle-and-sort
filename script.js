const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mainArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let shuffled = [];

function shuffle() {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    shuffled = array;
    document.getElementById("shuffledarr").value = shuffled.toString();
    for (let i = 0; i < mainArr.length; i++) {
        document.getElementById("item-" + mainArr[i]).innerHTML = shuffled[i];
    }
}

function sort() {
    const shuffledarr = (document.getElementById('shuffledarr').value).split(',')
    const sortedArray = shuffledarr.sort();
    document.getElementById('shuffledarr').value = sortedArray.toString();

    sortedArray.forEach((val) => {
        document.getElementById("item-" + val).innerHTML = val;
    })
}
