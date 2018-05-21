var MyCookie = {

  get:function (key) {
    reg = new RegExp('(?:'+key+'=)(.+?);')
    match = document.cookie.match(reg)
    return match[1];
  },
  set:function (key,value) {

  },
  remove:function (key) {

  }
}