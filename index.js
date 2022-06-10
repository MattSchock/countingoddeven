let number = prompt('please input a number to count to');
number = parseInt(number);
let log = ''
for(let i = 1; i <= number; i++) {
     //log = log + i
     if (i % 2 == 0) {
        log = log + i + " Even "
     } else {
        log = log + i + " odd "
     }
};
console.log(log);