// ==UserScript==
// @name         达加马
// @namespace    https://b23.tv/22UnV4z
// @version      0.1
// @description  登录后点击上方按钮然后点击语文再点击其他科即可
// @author       慕若
// @run-at       document-start
// @match        http*://test.k12media.cn:8000/tqweb/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const button = document.createElement('button');
button.className = 'text_lb';
button.textContent = '首页点此跳转后点击语文，接着点击其他科目后再选择语文才是正确的成绩';
button.style.fontSize = '16px'; // 调整字体大小
button.style.color = 'red'; // 设置字体颜色
button.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?doShowStudentReport',73067);
}
document.body.innerHTML = document.body.innerHTML.replace(/73067/g, '81196');
// 将按钮添加到页面最上面
document.body.prepend(button);
})();
