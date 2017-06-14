// ==UserScript==
// @name         CUITWifiBoomed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  CUITWifiBoomed
// @author       wcxaaa
// @match        http://10.254.241.19:10000/software.html?wlanuserip=1b99895446266e32519a0d7db1b920a9&wlanacname=97a2ecf6f720c9b94344e81caa687812&ssid=&nasip=9146c4376ca4d4ab9a67a9844f8bc16d&snmpagentip=&mac=294be932189f0a49c38f1c01b6c112ea&t=wireless-v2&url=f71a0d3c9431fa70ed8aae1b9ba6d271474b3610f1cac094&apmac=&nasid=97a2ecf6f720c9b94344e81caa687812&vid=d1dcc4dea42924fd&port=5713b715b3a64d6a&nasportid=42f79eb53725d6ee652dfa421b44ee786df7f4b2c9d2759f9c01c20483d6de817c96294d5cef0068
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let content = `


<section style="font-family: sans, "Noto Sans CJK SC", "WenQuanYi Zen Hei", sans-serif; font-size: 75%;">

  <main style="box-sizing: border-box;    margin: 21vh 9vw;    padding: 0 24px;    position: relative;">
    <div>
      <h1>很遗憾，您的wifi又炸了</h1>
    </div>
    <div>
      <p>您可以尝试：</p>
      <ul style="list-style-type: none;">
        <li><a href="http://192.168.1.1">打开路由器</a></li>
        <li><a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E8%BD%B0%E7%82%B8%E5%9B%BE%E4%B9%A6%E9%A6%86&oq=div%2520%25E5%2588%25A0%25E9%2599%25A4%25E6%2589%2580%25E6%259C%2589%25E5%25AD%2590%25E5%2585%2583%25E7%25B4%25A0&rsv_pq=f22eeacb00011cc6&rsv_t=0d58tPstYyEnR%2B1%2BTqIG43UvK5R7V4pRYZhmS22ugEV7pmUP2vFtvu6pMaQ&rqlang=cn&rsv_enter=1&inputT=2587&rsv_sug3=29&rsv_sug1=23&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2587">轰炸图书馆</a></li>
        <li><a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%8E%BB%E5%B1%8E&oq=%25E8%25BD%25B0%25E7%2582%25B8%25E5%259B%25BE%25E4%25B9%25A6%25E9%25A6%2586&rsv_pq=e8de11c100004a0d&rsv_t=fbf7KAtpMguKN%2BNJiP6s07Xc2mIGHYRrrd%2FqDGhiJdjI3W6bImESB9N8bAY&rqlang=cn&rsv_enter=0&inputT=2592&rsv_sug3=31&rsv_sug1=25&rsv_sug7=100&rsv_n=2&rsv_sug4=2592">去屎</a></li>
        <li><a href="http://www.cuit.edu.cn">再次访问学校官网</a></li>
      </ul>
    </div>

  </main>



</section>
`;
    
    document.querySelector("body").innerHTML = content;
})();