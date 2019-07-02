window.onload = function(){
    var welcomeEle = document.createElement('div');
    welcomeEle.innerHTML = '<h3>我的JS成功載入了</h3>';
    document.getElementsByTagName('body')[0].appendChild(welcomeEle);
};