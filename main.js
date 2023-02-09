// # String Theory
//1 
function xify(str) {
    let nstr = '';
    for (let i = 0; i < str.length; i++) {
        nstr += 'x';
    }
    return nstr;
}

//2
function yellingChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + '!';
    }
    return result;
}

//3
function indexedChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += i + str[i];
    }
    return result;
}

//4
function exclaim(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '?') {
            result += '!';
        } else {
            result += str[i];
        }
    }
    return result;
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
    let firstName = name[0].toLowerCase();
    let lastName = name[1].toLowerCase();
    return firstName + '.' + lastName + '@codeimmersives.com';
}

//7
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

//8
function onlyVowels(str) {
    let result = '';
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            result += str[i];
        }
    }
    return result;
}

//9
function crazyCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

//10
function titleCase(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
    }
    return result.trim();
}

//11
function camelCase(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            result += words[i].toLowerCase();
        } else {
            result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return result;
}

//12
function crazyCase2ReturnOfCrazyCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else if (str[i] === ' ') {
            result += ' ';
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
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
