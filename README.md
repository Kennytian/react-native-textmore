# react-native-textmore

[![Build Status](https://travis-ci.org/Kennytian/react-native-textmore.svg?branch=master)](https://travis-ci.org/Kennytian/react-native-textmore)
[![npm version](http://img.shields.io/npm/v/react-native-textmore.svg?style=flat-square)](https://npmjs.org/package/react-native-textmore "View this project on npm")
[![npm version](http://img.shields.io/npm/dm/react-native-textmore.svg?style=flat-square)](https://npmjs.org/package/react-native-textmore "View this project on npm")
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Github Issues](http://githubbadges.herokuapp.com/pikesley/githubbadges/issues.svg)](https://github.com/Kennytian/react-native-textmore/issues)
[![Pending Pull-Requests](http://githubbadges.herokuapp.com/pikesley/githubbadges/pulls.svg)](https://github.com/Kennytian/react-native-textmore/pulls)


### Install

`npm install react-native-textmore --save`

### Usage:
```
<TextMore contentStyle={{color :'red' }} contentLines={2} contentText={'如果 v都会指 了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。'} />
    
<TextMore moreText={['Close', 'Open']} contentText={'如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。'} />
 
<TextMore contentLines={4} contentText={'map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。'} />
```

https://github.com/Kennytian/react-native-textmore/blob/master/examples/launcher.js

### Run Example:
Clone this repository from Github and cd to 'examples' directory then run `npm install`.

### Screenshot:
![屏幕截图](http://ww2.sinaimg.cn/mw690/77c29b23gw1f84xu9ue6oj20fm0t0wh1.jpg)