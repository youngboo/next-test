/**
 * 快排，把数组分为两份，左边的全小于中间值，右边的全大于中间值
 * @param arr
 * @returns {*}
 */
function quickSort(arr){
  if(arr.length<=1){
    return arr
  }
  let pivot = arr[Math.floor(arr.length/2)]
  let left = []
  let right = []
  let i = 0
   recursionArr(left,pivot,arr,i)

}
function recursionArr(left,right,pivot,arr,i){
  if(i >= arr.length -1){
    return left.concat(pivot,right)
  }
  else if(arr[i] < pivot){
    i++
    return recuLeft(arr[i],left)
  }else{
    i++
   // return recuRight(arr[i],right)
  }
  recursionArr(left,right,pivot,arr,i)
}
function recuLeft(leftValue,left){
  if(left.length < 1){
    left.push(leftValue)
  }else{
    let index = 0
    let find = false
    while(!find){
      if(left[index] >= leftValue){
        find = true
      }
      left.split(index,0,leftValue)
      index++
    }
  }

}