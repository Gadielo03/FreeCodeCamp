const textinput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');



const isPalindrome = (str) => {
    const regex = /[a-z]*[\d]*/gi;
    const filteredStr = str.match(regex).join('').toLowerCase();
    return filteredStr === filteredStr.split('').reverse().join('');
}

const checkPalindrome = () => {
    const text = textinput.value;
    if(text == ""){
        alert('Please input a value');
    }else
    if(isPalindrome(text)){
        result.innerText = `${text} is a palindrome`;
    }else {
        result.innerText = `${text} is not a palindrome`;
    }
}
checkButton.addEventListener('click', checkPalindrome);

