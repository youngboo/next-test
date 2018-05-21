var rDate = /^(\d{4})([0|1]?\d)([0|1|2|3]?\d)$/; // 正则写在这里
var rDate1 = /^(\d{4})([0|1]\d)\d+/;;
// 下面的变量，其结果都要符合预期
var ret1 = rDate.exec('20130211');
var ret2 = rDate.exec('20133211');
var ret3 = rDate.exec('2013211');
var ret4 = rDate.exec('2013251');
var ret5 = rDate.exec('201321');
var ret6 = rDate.exec('1321');
//console.log(ret3);
/**
 * 数字转换成千分位的数字，如10000，转为10,000
 */
var reg = /(?=((?!\b)\d{3})+$)/g;

var num = 143210000+'';
console.log(num.match(reg));
num = num.replace(reg,',');
console.log(num);

/**
 * 寻找所有非P元素
 * (?=匹配尖括号里的所有东西除了属性)
 * 如何匹配
 * @type {string}
 */
var s = '<div id="babalala">paragraph </div><p>哈哈哈</p><span class="yellow">hello jsonp!</span><strong>呵呵呵pi!</strong>';
var r = /<((?!p)[a-z]*?).*?>.+?<\/(\1)>/g; // 正则写在这里
var matchs = s.match(r);
console.log(matchs);
console.log(s.replace(r, '<$1p>'));