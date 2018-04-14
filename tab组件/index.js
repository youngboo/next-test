/**
 * 题目要求：
 * 实现 Tab 组件，传入容器id，
 * 规定容器内的有 .tab-item 类名的元素是 Tab 选择器，它的 href 属性对应了要显示内容元素的 id
 * 点击 Tab 选择器元素会给该选择器增加 active 类名，并且显示对应的内容元素。
 * .panels 类名的是内容容器，默认隐藏，只会显示当前选择的内容
 */

/**
 * Tab 组件
 * @param {String} containerId 容器Id
 */
function Tab(containerId) {
    this.tab = document.getElementById(containerId);
    this.items = this.tab.getElementsByClassName("tab-item");
    this.panels = this.tab.getElementsByClassName("panel");
    this.init = function(){
        for(let i = 0; i<this.items.length; i++){
            let item = this.items[i];
            item.setAttribute("href",this.panels[i].id);
            item.classList.remove("active");
            item.addEventListener("click",()=>{
                this.active(i);
            },false);
        }
        for (let panel of this.panels){
            panel.style.display = "none";
        }

        //初始化第一个
        this.items[0].classList.add("active");
        this.panels[0].style.display = "";
        return true;
    };
    this.finished = this.init();

}

/**
 * active 方法，可以控制第几个 Tab 组件显示
 * @param {Number} index 要显示的 tab 的序号，从0开始
 */
Tab.prototype.active = function(index) {
    for (let i = 0; i<this.items.length; i++){
        let item = this.items[i];
        if(i == index){
            item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    }
    for (let j = 0; j<this.panels.length; j++){
        let panel = this.panels[j];
        if(j == index){
            panel.style.display = "";
        }else{
            panel.style.display = "none";
        }
    }
};


var tab = new Tab('container1');
console.log(tab.finished);
tab.active(2);
var tab2 = new Tab('container2');