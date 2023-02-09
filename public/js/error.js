let str = document.getElementsByTagName('div')[0].innerHTML.toString();
let i = 0;
document.getElementsByTagName('div')[0].innerHTML = "";

setTimeout(function() {
    let se = setInterval(function() {
        i++;
        document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByTagName('div')[0].innerHTML = str;
        }
    }, 10);
},0);