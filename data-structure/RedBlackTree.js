/**
 * 红黑树
 * 初始化，一个节点node的定义是
 * 方法：增加node
 *      遍历node
 */
class RedBlackTree{
  constructor (num){
    this.centerNode = new Node(num)
  }
  add(num){
    this.centerNode.addChild(num)
  }
  toArray(){
    let arr = []
    this.recurNode(arr,this.centerNode)
  }
  recurNode(arr,node){
    if(node){
      this.recurNode(arr,node.left)
      arr.push(node.center)
      this.recurNode(arr,node.right)
    }
  }

}
class Node{
  constructor (center){
   this.center = center
  }
  addChild(num){
    if(num < this.center){
      this.left = new Node(num)
    }else{
      this.right = new Node(num)
    }
  }
  hasLeft(){
    return this.left
  }
  hasRight(){
    return this.right
  }
}