webpackJsonp([6],{"./app/containers/HomePage/logic/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/HomePage/logic/reducer.js":function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case s.a:return e.set("username",t.name.replace(/@/gi,""));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/immutable/dist/immutable.js"),s=(n.n(o),n("./app/containers/HomePage/logic/constants.js")),r=n.i(o.fromJS)({username:""});t.default=a}});