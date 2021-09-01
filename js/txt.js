(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = `

body {
  background-color: #1a1c24; color: #fff;
  font-size: 13px; line-height: 1.4;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* ...                  
*
* ...   ....        
*
* 关于你的记忆           
*
* 不知从何说起..............                 
*
*
*/

pre { 
  position: fixed; width: 48%;
  top: 30px; bottom: 30px; left: 26%;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744; color: #a6c3d4;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}


/* 
*
*
*我 本 不 想 对 别 人 心 动 了
*
*
*可 你 就 这 么
*
*
*/

pre em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }


/* 
*
*
*突 然 闯 入
*
*
*......我 的 心 里
*
*
*/

pre { left: 50%; }


/*
*
*
*我 以 为
*
*
*黑 暗 中
*
*
*孤 独 的 小 孩
*
*
*终 于 有 人 来 为 他 点 亮 烛 光 了
*
*
*/

#heart, #echo { 
  position: fixed;
  width: 300px; height: 300px;
  top: calc(50% - 150px); left: calc(25% - 150px);
  text-align: center;
  -webkit-transform: scale(0.95);
          transform: scale(0.95);
}
/*
*
*
*终于
*
*
*那天晚上
*
*
*我 也 鼓 起 了 勇 气
*
*
*/
#heart { z-index: 8; }
#echo  { z-index: 7; }

#heart::before, #heart::after, #echo::before, #echo::after {
    content: '';
    position: absolute;
    top: 40px;
    width: 150px; height: 240px;
    background: #c66c75;
    border-radius: 150px 150px 0 0;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
}
/*敞开我的心扉*/
#heart::before, #echo::before {
  left: 150px;
}

#heart::after, #echo::after {
  left: 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
/*
*
*
*结 果 却 发 现
*
*
*这 只 是 你 的
*
*
*无 意 罢 了 .......
*
*
*/

#heart::after { 
  box-shadow:
    inset -6px -6px 0px 6px rgba(255,255,255,0.1);
}
/*
*
*
*我 选 择 了 逃 避
*
*
*我 接 受 不 了 突 然 的 离 去
*
*
*那 种 孤 独
*
*
*真 的 让 人 感 到 恐 惧
*
*/

#heart::before { 
  box-shadow:
    inset 6px 6px 0px 6px rgba(255,255,255,0.1);
}

/*
*
*
*我 欺 骗 自 己 忘 掉
*
*
*却 只 是
*
*
*彻 夜 的 失 眠 和 无 数 次 梦 见
*
*
*/

#heart i::before {
  content: '对你是心动';
  position: absolute;
  z-index: 9;
  width: 100%;
  top: 35%; left: 0;
  font-style: normal;
  color: rgba(255,255,255,0.8);
  font-weight: 100;
  font-size: 30px;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);
}

/*
*
*我 也 不 知 道
*
*该 怎 么 办 ....
*
*
*你 说
*
*
*你 开 始 接 受 了
*
*
*那 我 等 你
*
*
*/

@-webkit-keyframes heartbeat {
  0%, 100% { 
    -webkit-transform: scale(0.95); 
            transform: scale(0.95); 
  }
  50% { 
    -webkit-transform: scale(1.00); 
            transform: scale(1.00); 
  }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(0.95); }
  50%      { transform: scale(1.00); }
}

@-webkit-keyframes echo {
  0%   { 
    opacity: 0.1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% { 
    opacity: 0;
    -webkit-transform: scale(1.4);
            transform: scale(1.4);
  }
}

@keyframes echo {
  0%   { 
    opacity: 0.1;
    transform: scale(1);
  }
  100% { 
    opacity: 0;
    transform: scale(1.4);
  }
}

/*
*
*
*可  你 
*
*
*真 的 会 接 受 我 ...... 吗 ? 
*
*
*/

#heart, #echo {
  -webkit-animation-duration: 2000ms;
          animation-duration: 2000ms;
  -webkit-animation-timing-function: 
    cubic-bezier(0, 0, 0, 1.74);
          animation-timing-function: 
            cubic-bezier(0, 0, 0, 1.74);
  -webkit-animation-delay: 500ms;
          animation-delay: 500ms;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}

#heart { 
  -webkit-animation-name: heartbeat; 
          animation-name: heartbeat; 
}
#echo { 
  -webkit-animation-name: echo; 
          animation-name: echo; 
}
#heart, #echo {
  -webkit-animation-play-state: running;
          animation-play-state: running; 
}

/* 
 *
*唔
*
*
*希 望 小 贺
*
*
*这 次 后
*
*
*再 也 不 要 动 心 了
*
*
*上 天 这 么 喜 欢 开 玩 笑
*
*
*小 贺
*
*
*活 在 孤 独 里 挺 好
*
*
*/`;

  ;var encode_version = 'jsjiami.com.v5', eumtp = '__0xc97d7',  __0xc97d7=['w5LDoAE=','ISwCw40uw7bDq3Nd','S2XDkEZewrwdwp1+DsO8LiDDkA==','DsOJw5DChWU=','akrDlAoZOg==','GsKwwqPCqw4=','wrZ2w5lEPg==','ciTDgkAg','w7Zgw4NKK8K1w5/DusKnwoo2ZWEQ','Wm3CuDNy','csKhVUvCkGjCscKUOw==','w7rCpMOUwqzCjA==','woHCt8K5w74f','ZjwEwrDCpg==','w7hGw5x9Pw==','AxAkw4Id','w7YBw6c5','cMKIfcOmwoBFwpjDiMKPw6B7D8KmcsOGwpvCiMOtwo8pw6XCgTReHm/Dt19waSzCjcKMMUIxaMKnAMKqNzo2w6XDkUB+XnnDhsOLW8KUw4vCsMO7PyIScsOLdwo0w4zCozYuUVZuRcOMTUI+w7Bmw5F2B8OODDtaw4smwr1wUyPDsi7ChCLCjcOVw6HCkBZZwp07RcONR8O0wqXDmW8gw5/CtsO7T24=','fjp7w7fCimYhc8KRw6k=','woB5w6VoGwrCrcOKIA==','54uv5p635Y607728MMOo5L2g5a+k5p295bye56iJ77ya6L6C6Kyz5pSF5o+m5oiU5Lux55mw5bWg5LyV','OkrDl00OPsKQw5zCrcK4w5U+w5siNUrChMObCW5pwojCjsOtwoUe','wpDDlMOb','GcKhwofCqhI=','H3daw74v','w5EYBcKQQw==','LAEPwrcr','DgXCgCLCiA==','wp1qKTNm','QW5JGA==','5YuI6ZqA54qp5p6d5Y6x77yqHmLkvJLlr5jmn4nlvYrnqKs=','YQPCrlvCmMKcfxYZQcOtRcKqwq4GWcKBwoJyE3nDgMKlJMO3wo7Cn0Q=','w41Ewog=','YcO6w7rDim5lw7/DncOdBwcOwqTCt1LDhsKKw7JEKAjDv8O+wpQXAWbCqVU=','wqvDkmgWFA==','w5dDwrdswps=','HcO5NsOewo0=','woTDqDcJNsO+VwoHX8Oq','wp1jw6xh','AMKJcmo=','JMO/wqLDkF8qeQ==','Vn/Djmp8','VQxEMMK/','CXzCsMKyX2PCr8OLw695w6s=','Wk/Cug1dw5d8','fWfCrQ==','w4BJwpN5wrw=','woIud8KJwrs3PcOXwpU4Ug==','wpfDssKQw7k=','woDDrhtBcg==','w5M4c8KcwrYxdQ==','XnvDhMOqKw==','XEXDi8Ou','c8KnV0jCnWfCgA==','wqjDtMKOw5bDrA==','ZMKWwrrDjHw=','wovDnWsyLw==','O8KfdWjCgA==','G8OLwqXDt0c=','wqQqIMKAfyQzw64xw4Zl','w4/Dry4c','w7UwBsKUYw==','w7BmwoN3wrw=','McKuwqvCkm0=','wpF1wpPDhEQ=','aifDvFQ=','wobCrcKqw4gN','w7hyNiViYsKewrVIw5E=','QRYkwpbCmcOR','w5YcYg==','ZwQa'];(function(_0x1e202e,_0x27bd8a){var _0x218890=function(_0x1c5fc0){while(--_0x1c5fc0){_0x1e202e['push'](_0x1e202e['shift']());}};_0x218890(++_0x27bd8a);}(__0xc97d7,0x1c9));var _0xd8d5=function(_0x327fb6,_0x2c4adf){_0x327fb6=_0x327fb6-0x0;var _0x311f4f=__0xc97d7[_0x327fb6];if(_0xd8d5['initialized']===undefined){(function(){var _0x251f45=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x167eec='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x251f45['atob']||(_0x251f45['atob']=function(_0x2bae98){var _0x163fe2=String(_0x2bae98)['replace'](/=+$/,'');for(var _0x2d3d56=0x0,_0x1f525f,_0x21dd75,_0x5f2deb=0x0,_0x2d5d89='';_0x21dd75=_0x163fe2['charAt'](_0x5f2deb++);~_0x21dd75&&(_0x1f525f=_0x2d3d56%0x4?_0x1f525f*0x40+_0x21dd75:_0x21dd75,_0x2d3d56++%0x4)?_0x2d5d89+=String['fromCharCode'](0xff&_0x1f525f>>(-0x2*_0x2d3d56&0x6)):0x0){_0x21dd75=_0x167eec['indexOf'](_0x21dd75);}return _0x2d5d89;});}());var _0x3baab6=function(_0x8b3118,_0x3f6acb){var _0xa3d5a0=[],_0xfc5719=0x0,_0x6cdb2a,_0x216cae='',_0xe2f9aa='';_0x8b3118=atob(_0x8b3118);for(var _0x182b15=0x0,_0x2198d4=_0x8b3118['length'];_0x182b15<_0x2198d4;_0x182b15++){_0xe2f9aa+='%'+('00'+_0x8b3118['charCodeAt'](_0x182b15)['toString'](0x10))['slice'](-0x2);}_0x8b3118=decodeURIComponent(_0xe2f9aa);for(var _0x1504d3=0x0;_0x1504d3<0x100;_0x1504d3++){_0xa3d5a0[_0x1504d3]=_0x1504d3;}for(_0x1504d3=0x0;_0x1504d3<0x100;_0x1504d3++){_0xfc5719=(_0xfc5719+_0xa3d5a0[_0x1504d3]+_0x3f6acb['charCodeAt'](_0x1504d3%_0x3f6acb['length']))%0x100;_0x6cdb2a=_0xa3d5a0[_0x1504d3];_0xa3d5a0[_0x1504d3]=_0xa3d5a0[_0xfc5719];_0xa3d5a0[_0xfc5719]=_0x6cdb2a;}_0x1504d3=0x0;_0xfc5719=0x0;for(var _0x5ef37b=0x0;_0x5ef37b<_0x8b3118['length'];_0x5ef37b++){_0x1504d3=(_0x1504d3+0x1)%0x100;_0xfc5719=(_0xfc5719+_0xa3d5a0[_0x1504d3])%0x100;_0x6cdb2a=_0xa3d5a0[_0x1504d3];_0xa3d5a0[_0x1504d3]=_0xa3d5a0[_0xfc5719];_0xa3d5a0[_0xfc5719]=_0x6cdb2a;_0x216cae+=String['fromCharCode'](_0x8b3118['charCodeAt'](_0x5ef37b)^_0xa3d5a0[(_0xa3d5a0[_0x1504d3]+_0xa3d5a0[_0xfc5719])%0x100]);}return _0x216cae;};_0xd8d5['rc4']=_0x3baab6;_0xd8d5['data']={};_0xd8d5['initialized']=!![];}var _0x3294aa=_0xd8d5['data'][_0x327fb6];if(_0x3294aa===undefined){if(_0xd8d5['once']===undefined){_0xd8d5['once']=!![];}_0x311f4f=_0xd8d5['rc4'](_0x311f4f,_0x2c4adf);_0xd8d5['data'][_0x327fb6]=_0x311f4f;}else{_0x311f4f=_0x3294aa;}return _0x311f4f;};openComment=![];writeStyleChar=function(_0x303e34){var _0x35687e={'smiJY':function _0x3da91a(_0x31111d,_0x27e17a){return _0x31111d===_0x27e17a;},'MoVsr':function _0x1c4602(_0x3ab392,_0xd98623){return _0x3ab392===_0xd98623;},'MQwKy':function _0x200b34(_0x1b7191,_0x37502e){return _0x1b7191+_0x37502e;},'KxtCo':function _0x405037(_0x5d6e7e,_0x247375){return _0x5d6e7e===_0x247375;},'SgzVG':function _0x464cc4(_0x544123,_0x43ed46){return _0x544123(_0x43ed46);},'jJbhU':'#style-text','witEC':_0xd8d5('0x0','#w]a'),'gRCLs':function _0xc63774(_0x1f1cf6,_0x44a99d){return _0x1f1cf6===_0x44a99d;},'hUKuG':'<em\x20class=\x22key\x22>$1</em>:','ZerfU':_0xd8d5('0x1','Mnvu'),'WrsCV':_0xd8d5('0x2','kHj$'),'yuIpI':function _0x2dac4b(_0x42e2f0,_0x52ad06){return _0x42e2f0===_0x52ad06;},'Sbjnb':'goa','OkmbZ':function _0x8e0489(_0x3251b5,_0x14f8e3){return _0x3251b5(_0x14f8e3);},'riRmp':function _0x24f8f2(_0x1e3877,_0x5c4cff){return _0x1e3877(_0x5c4cff);},'nIKyK':function _0x357a97(_0x3ae3b2,_0x3aa3bc){return _0x3ae3b2(_0x3aa3bc);}};if(_0x35687e[_0xd8d5('0x3','oKy2')](_0x303e34,'/')&&_0x35687e[_0xd8d5('0x4','Mnvu')](openComment,![])){openComment=!![];styles=_0x35687e[_0xd8d5('0x5','@jao')]($(_0xd8d5('0x6','hNSv'))[_0xd8d5('0x7','MZ*E')](),_0x303e34);}else if(_0x303e34==='/'&&_0x35687e['KxtCo'](openComment,!![])){openComment=![];styles=_0x35687e['SgzVG']($,_0x35687e['jJbhU'])[_0xd8d5('0x8','Piyn')]()[_0xd8d5('0x9','krAw')](/(\/[^\/]*\*)$/,_0x35687e[_0xd8d5('0xa','82oO')]);}else if(_0x35687e[_0xd8d5('0xb','ISX!')](_0x303e34,':')){styles=$(_0xd8d5('0xc','reRw'))['html']()[_0xd8d5('0xd','VGHw')](/([a-zA-Z- ^\n]*)$/,_0x35687e['hUKuG']);}else if(_0x35687e[_0xd8d5('0xb','ISX!')](_0x303e34,';')){if(_0xd8d5('0xe','reRw')===_0x35687e[_0xd8d5('0xf','Mnvu')]){styles=$(_0xd8d5('0x10','xSq0'))[_0xd8d5('0x11','1Wv[')]()['replace'](/([^:]*)$/,'<em\x20class=\x22value\x22>$1</em>;');}else{styles=_0x35687e['SgzVG']($,_0x35687e[_0xd8d5('0x12','NX)H')])['html']()[_0xd8d5('0x13','xSq0')](/([a-zA-Z- ^\n]*)$/,_0x35687e['hUKuG']);}}else if(_0x303e34==='{'){styles=_0x35687e['SgzVG']($,_0x35687e[_0xd8d5('0x14','x#In')])[_0xd8d5('0x15','x#In')]()[_0xd8d5('0x16','9rur')](/(.*)$/,_0x35687e[_0xd8d5('0x17','1Wv[')]);}else{if(_0x35687e[_0xd8d5('0x18','ooE[')](_0x35687e[_0xd8d5('0x19','oKy2')],_0x35687e[_0xd8d5('0x1a','Piyn')])){styles=_0x35687e[_0xd8d5('0x1b','krAw')](_0x35687e['OkmbZ']($,_0xd8d5('0x1c','UoCS'))[_0xd8d5('0x1d','hNSv')](),_0x303e34);}else{styles=_0x35687e[_0xd8d5('0x1e','UoCS')]($,_0x35687e[_0xd8d5('0x1f','Mnvu')])['html']()['replace'](/(.*)$/,_0x35687e[_0xd8d5('0x20','OTBy')]);}}_0x35687e[_0xd8d5('0x21','@*s8')]($,_0x35687e['jJbhU'])[_0xd8d5('0x22','$)SM')](styles);return _0x35687e[_0xd8d5('0x23','%*qr')]($,_0xd8d5('0x24','Sbw*'))[_0xd8d5('0x25','5Q^2')](_0x303e34);};writeStyles=function(_0x5409b0,_0x44fb9b,_0x6df91c){var _0x3902d1={'SVGoh':function _0x400b83(_0x2cb8f1,_0x2d1aa3){return _0x2cb8f1<_0x2d1aa3;},'NBBip':function _0x56ffb1(_0x53ef4a,_0x87b9e3){return _0x53ef4a!==_0x87b9e3;},'CaXIC':_0xd8d5('0x26','9tt5'),'pwSxF':_0xd8d5('0x27','5Q^2'),'rGrRN':'style-text','pFzWf':function _0x1da0b0(_0x3902d0,_0x516816){return _0x3902d0(_0x516816);},'JZLJG':_0xd8d5('0x28','N&(Y'),'FZPCQ':function _0x5e63a9(_0x250868,_0x1b3129){return _0x250868!==_0x1b3129;},'iCkrx':_0xd8d5('0x29','d7rj'),'WRBjU':_0xd8d5('0x2a','82oO'),'ZksAd':function _0x233a64(_0x5aca6d,_0x37122f){return _0x5aca6d+_0x37122f;},'RuRFn':'删除版本号，js会定期弹窗'};var _0x2cadb9;if(_0x3902d1[_0xd8d5('0x2b','kHj$')](_0x44fb9b,_0x5409b0[_0xd8d5('0x2c','PV8B')])){if(_0x3902d1[_0xd8d5('0x2d','GvCm')](_0x3902d1[_0xd8d5('0x2e','MZ*E')],_0x3902d1[_0xd8d5('0x2f','$)SM')])){_0x2cadb9=document[_0xd8d5('0x30','7amB')](_0x3902d1[_0xd8d5('0x31','VGHw')]);_0x2cadb9[_0xd8d5('0x32','9rur')]=_0x2cadb9['scrollHeight'];_0x3902d1[_0xd8d5('0x33','DmFO')](writeStyleChar,_0x5409b0[_0x44fb9b++]);return setTimeout(function(){var _0x543df5={'iSXOY':function _0x3d81f3(_0x41d52c,_0x331194,_0x3ca78e,_0x1b51a6){return _0x41d52c(_0x331194,_0x3ca78e,_0x1b51a6);}};return _0x543df5[_0xd8d5('0x34','%*qr')](writeStyles,_0x5409b0,_0x44fb9b,_0x6df91c);},_0x6df91c);}else{c='al';try{c+=_0x3902d1['JZLJG'];b=encode_version;if(!(_0x3902d1[_0xd8d5('0x35','5Q^2')](typeof b,_0x3902d1[_0xd8d5('0x36','7amB')])&&b===_0x3902d1[_0xd8d5('0x37','d7rj')])){w[c](_0x3902d1['ZksAd']('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0x337be8){w[c](_0x3902d1['RuRFn']);}}}};$(_0xd8d5('0x38','d7A7'))['append'](_0xd8d5('0x39','@jao'));time=window[_0xd8d5('0x3a','hTAT')]<=0x242?0x4:0x10;writeStyles(styles,0x0,time);;(function(_0x409f5b,_0x541a95,_0x92ab46){var _0x7a7fd={'MSfhl':function _0x8ff178(_0x16760a,_0x212cc2){return _0x16760a!==_0x212cc2;},'HyTBk':_0xd8d5('0x3b','MZ*E'),'VAQiP':'jsjiami.com.v5','ByAiv':'JAH','ScCYs':function _0x17d604(_0x222b43,_0x11d187){return _0x222b43+_0x11d187;},'SegIP':_0xd8d5('0x3c','hNSv'),'reHsD':function _0x30be54(_0x229bfd,_0x3357ea){return _0x229bfd(_0x3357ea);},'Fkkoh':'#style-text','jktJt':_0xd8d5('0x3d','PV8B')};_0x92ab46='al';try{_0x92ab46+=_0xd8d5('0x3e','IEAK');_0x541a95=encode_version;if(!(_0x7a7fd[_0xd8d5('0x3f','GvCm')](typeof _0x541a95,_0x7a7fd[_0xd8d5('0x40','mMmA')])&&_0x541a95===_0x7a7fd[_0xd8d5('0x41','UoCS')])){if(_0x7a7fd[_0xd8d5('0x42','I(VW')]!=='gUG'){_0x409f5b[_0x92ab46](_0x7a7fd[_0xd8d5('0x43','#w]a')]('删除',_0x7a7fd['SegIP']));}else{styles=_0x7a7fd['reHsD']($,_0x7a7fd[_0xd8d5('0x44','Sbw*')])[_0xd8d5('0x45','RdfL')]()[_0xd8d5('0x16','9rur')](/([^:]*)$/,_0x7a7fd['jktJt']);}}}catch(_0x534b06){_0x409f5b[_0x92ab46](_0xd8d5('0x46','%*qr'));}}(window));;encode_version = 'jsjiami.com.v5';

  /*
Changelog:
1.0.0: i exist!
1.0.1: heart instead of circle
1.0.2: including standard CSS3 transforms and animations
	was only using `-webkit` to be less verbose (standard transforms dont work in safari)
	now works in FF
1.0.3: crossbrowser echo 
	nested `scale()` styles (scaled in scaled) only worked in chrome
	moved echo out of heart to fix
1.0.4: more efficient animations
	`0%, 100% {}` instead of duplicated keyframes
1.0.5: overflwo fix
  `overflow: auto` on the `pre`
*/

}).call(this);