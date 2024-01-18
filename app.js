

let nums=[4567, 222, 1098, 3455, 7823, 2222, 1090, 8765, 2987, 6544]
rezult=nums.filter((el, i, arr)=>{
    return el%2==0*i
})

for (i=0; i<rezult.length; i++) {
    // console.log(i);
    rezult[i]*=i
}
summa=rezult.reduce((total, el)=>{
    return total+el
},0)

console.log(nums);
console.log(rezult);
console.log(summa);

