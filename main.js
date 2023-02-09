// # String Theory
//1 
function xify(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        n += 'x';
    }
    return n;
}

//2
function yellingChars(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        n += str[i] + '!';
    }
    return n;
}

//3
function indexedChars(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        n += i + str[i];
    }
    return n;
}

//4
function exclaim(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '?') {
            n += '!';
        } else {
            n += str[i];
        }
    }
    return n;
}

//5
function truncate(str) {
    if (str.length <= 15) {
        return str;
    } else {
        return str.slice(0, 15) + '...';
    }
}

//6
function ciEmailify(str) {
    let name = str.split(' ');
    let fname = name[0].toLowerCase();
    let lname = name[1].toLowerCase();
    return fname + '.' + lname + '@codeimmersives.com';
}

//7
function reverse(str) {
    let n = '';
    for (let i = str.length - 1; i >= 0; i--) {
        n += str[i];
    }
    return n;
}

//8
function onlyVowels(str) {
    let n = '';
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            n += str[i];
        }
    }
    return n;
}

//9
function crazyCase(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            n += str[i].toUpperCase();
        } else {
            n += str[i].toLowerCase();
        }
    }
    return n;
}

//10
function titleCase(str) {
    let x = str.split(' ');
    let n = '';
    for (let i = 0; i < x.length; i++) {
        n += x[i][0].toUpperCase() + x[i].slice(1).toLowerCase() + ' ';
    }
    return n.trim();
}

//11
function camelCase(str) {
    let x = str.split(' ');
    let n = '';
    for (let i = 0; i < x.length; i++) {
        if (i === 0) {
            n += x[i].toLowerCase();
        } else {
            n += x[i][0].toUpperCase() + x[i].slice(1).toLowerCase();
        }
    }
    return n;
}

//12
function crazyCase2ReturnOfCrazyCase(str) {
    let n = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            n += str[i].toUpperCase();
        } else if (str[i] === ' ') {
            n += ' ';
        } else {
            n += str[i].toLowerCase();
        }
    }
    return n;
}

//results
console.log(xify('hello'));
console.log(yellingChars('goodness'));
console.log(indexedChars('hello'));
console.log(exclaim('I can\'t believe it\'s not butter!'));
console.log(truncate('Oh my goodness, this is a long sentence!'));
console.log(ciEmailify('colin jaffe'));
console.log(reverse('colin'));
console.log(onlyVowels('colin jaffe'));
console.log(crazyCase('colin jaffe'));
console.log(titleCase('colin jaffe'));
console.log(camelCase('colin jaffe'));
console.log(crazyCase2ReturnOfCrazyCase('colin jaffe'));
