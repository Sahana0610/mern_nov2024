//map method
const numb=[1,2,3,4,5]
const doubled=numb.map(num=>num*2);
console.log(doubled);

//filter method(gives even no. of arr)
const filt_num=[1,2,3,4,5];
const numbe=filt_num.filter(num=>num%2==0);
console.log(numbe);

//reduce method
const sum_numbers=[1,2,3,4,5]
const sum=sum_numbers.reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(sum);