let arr:number[]=[0,1]
function total(){

    let temp = arr[arr.length-2]+ arr[arr.length-1]
    arr.push(temp)
    if(arr.length<5){
        total()
    }
}
total()
let sum=0
arr.forEach((el)=>{
    sum+=el
})
console.log(sum)
