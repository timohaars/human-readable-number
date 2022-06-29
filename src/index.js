module.exports = function toReadable (value) {
    let str = String(value);
    let index = str.length - 1;
    let result;
    let ones = Array('','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');
    let teens = Array('ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    let tens = Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    if (str === '0') {
     return 'zero';
    }
     if (str.length === 1) {
        result = ones[Number(str)];
     } else if ((str.length === 2) && (value<20)) {
        result = teens[Number(str[str.length-1])];
     } else if ((str.length === 2) && (value >= 20) && (value%10 === 0)) {
        result = tens[Number(str[0])];
     } else if ((str.length === 2) && (value >= 20) && (value%10 !== 0)) {
        result = `${tens[Number(str[0])]} ${ones[Number(str[str.length-1])]}`;
     } else if ((str.length === 3) && (value >= 100) && (value%100 === 0)) {
        result = `${ones[Number(str[0])]} ${'hundred'}`;
     } else if ((str.length === 3) && (value > 100) && (value%100 !== 0) && (Number(str[1]) === 0)) {
        result = `${ones[Number(str[0])]} ${'hundred'} ${ones[Number(str[str.length -1])]}`;   
     } else if((str.length === 3) && (value > 100 && Number(str.slice(-2)) < 20)) { 
        result = `${ones[Number(str[0])]} ${'hundred'} ${teens[Number(str[str.length-1])]}`;
     } else if((str.length === 3) && (value > 100 && Number(str.slice(-2)) >= 20) && Number(str.slice(-2))%10 === 0) {
        result = `${ones[Number(str[0])]} ${'hundred'} ${tens[Number(str[1])]}`;
     } else if((str.length === 3) && (value > 100 && Number(str.slice(-2)) > 20) && (Number(str.slice(-2))%10 !== 0)) {
        result = `${ones[Number(str[0])]} ${'hundred'} ${tens[Number(str[1])]} ${ones[Number(str.slice(-1))]}`;
     } else if (value >= 1000) {
        result = 'This works up to 999';
     } else {
        
        result = 'Please, enter the number';
     }
     return result;
  } ;