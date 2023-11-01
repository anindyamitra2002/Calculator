
let string = "";
let dis = "";
const num = new Array();
let buttons = document.querySelectorAll('.btn');
let display = document.getElementById('disp');

function fact(n) {
    var res = 1;
    if (n == 0) {
        return 1;
    }
    else {
        for (let i = 1; i <= n; i++) {
            res = res * i;
        }
        return res;
    }
}
function getLastNum(str) {
    return str.match(/[0-9]+$/);
}
function getFirstNum(str1) {
    return str1.match(/^\d+/);
}
function nPr(str) {
    var n = getLastNum(str.split('P')[0]);
    var r = getFirstNum(str.split('P')[1]);
    let npr = (fact(n) / fact(n - r));
    str = str.replace(n[0].concat("P" + r[0]), npr.toString());
    return str
}
function nCr(str) {
    var n = getLastNum(str.split('C')[0]);
    var r = getFirstNum(str.split('C')[1]);
    let ncr = (fact(n) / (fact(r) * fact(n - r)));
    str = str.replace(n[0].concat("C" + r[0]), ncr.toString());
    return str
}

Array.from(buttons).forEach(element => {


    element.addEventListener('click', (e) => {
        // console.log(e.target)
        try {
            if (e.target.innerText === 'Del') {
                string = string.substring(0, string.length - 1);
                dis = string;
            }
            else if (e.target.innerText === 'AC') {
                string = "";
                dis = string;
            }
            else if (e.target.innerText === '^') {
                string = string + "**";
                dis = dis + "^";
            }
            else if (e.target.innerText === 'ᴨ') {
                string = string + "3.1428";
                dis = dis + "ᴨ";
            }
            else if (e.target.innerText === '℮') {
                string = string + "2.7183";
                dis = dis + "℮";
            }
            else if (e.target.innerText === '%') {
                string = string + "/100*";
                dis = dis + "% of ";
            }
            else if (e.target.innerText === '√') {
                string = string + "Math.sqrt(";
                dis = dis + "√(";
            }
            else if (e.target.innerText === 'sin()') {
                string = string + "Math.sin(";
                dis = dis + "sin(";
            }
            else if (e.target.innerText === 'cos()') {
                string = string + "Math.cos(";
                dis = dis + "cos(";
            }
            else if (e.target.innerText === 'tan()') {
                string = string + "Math.tan(";
                dis = dis + "tan(";
            }
            else if (e.target.innerText === 'log()') {
                string = string + "Math.log10(";
                dis = dis + "log(";
            }
            else if (e.target.innerText === 'sinֿ ¹()') {
                string = string + "Math.asin(";
                dis = dis + "sinֿ ¹(";
            }
            else if (e.target.innerText === '∛') {
                string = string + "Math.cbrt(";
                dis = dis + "∛(";
            }
            else if (e.target.innerText === '!') {
                string = string + "!";
                dis = dis + "!";
            }
            else if (e.target.innerText === 'x²') {
                string = string + "**2";
                dis = dis + "²";
            }
            else if (e.target.innerText === 'x³') {
                string = string + "**3";
                dis = dis + "³";
            }
            else if (e.target.innerText === 'log2()') {
                string = string + "Math.log2(";
                dis = dis + "log2(";
            }
            else if (e.target.innerText === 'ln()') {
                string = string + "Math.log(";
                dis = dis + "ln(";
            }
            else if (e.target.innerText === 'nPr') {
                string = string + "P"
                dis = dis + "P";
            }
            else if (e.target.innerText === 'nCr') {
                string = string + "C"
                dis = dis + "C";
            }

            else if (e.target.innerText === '=') {
                if (string.includes('P')) {
                    string = nPr(string);
                }
                else if (string.includes('C')) {
                    string = nCr(string);
                }
                else if (string.includes('!')) {
                    let x = getLastNum(string.split('!')[0]);
                    string = string.replace(x[0]+"!", fact(x));
                }
                try {
                    string = eval(string).toString();
                    dis = string;
                }
                catch (e) {
                    alert(e.name);
                }
            }
            else {
                string = string + e.target.innerText;
                dis = dis + e.target.innerText;
            }
            display.value = dis;
        } catch (e) {
            display.value = (e.name)
        }
    })

});


