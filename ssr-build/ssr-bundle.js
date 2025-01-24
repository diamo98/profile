module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dianamoyaosorio.github.io/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("Y3FI");

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = external_preact_["options"],
  e = c.__b,
  a = c.__r,
  v = c.diffed,
  l = c.__c,
  m = c.unmount,
  s = c.__;
function d(n, t) {
  c.__h && c.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function h(n) {
  return o = 1, p(D, n);
}
function p(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = o.__c.props !== n;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), c && c.call(this, n, t, r) || i;
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = d(t++, 3);
  !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function _(n, u) {
  var i = d(t++, 4);
  !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function A(n) {
  return o = 5, T(function () {
    return {
      current: n
    };
  }, []);
}
function F(n, t, r) {
  o = 6, _(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function T(n, r) {
  var u = d(t++, 7);
  return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
  return o = 8, T(function () {
    return n;
  }, t);
}
function x(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
  c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], c.__e(t, n.__v);
  }
}
c.__b = function (n) {
  r = null, e && e(n);
}, c.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function (n) {
  v && v(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), u = r = null;
}, c.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], c.__e(r, n.__v);
    }
  }), l && l(n, t);
}, c.unmount = function (n) {
  m && m(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function r() {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("ox/y");

// CONCATENATED MODULE: ./components/header/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"header":"header__OVZyn","logoContainer":"logoContainer__ltY64","logoText":"logoText__WMBBB","active":"active__r+Z6z"});
// CONCATENATED MODULE: ./components/header/index.js



var header_Header = function Header() {
  return Object(external_preact_["h"])("header", {
    class: style.header
  }, Object(external_preact_["h"])("div", {
    class: style.logoContainer
  }, Object(external_preact_["h"])("h1", {
    class: style.logoText
  }, "Diana Pamela Moya Osorio")), Object(external_preact_["h"])("nav", null, Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/"
  }, "Home"), Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/research"
  }, "Research"), Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/publications"
  }, "Publications"), Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/teaching"
  }, "Teaching"), Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/contact"
  }, "Contact")));
};
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./routes/home/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var home_style = ({"home":"home__uRcqa","main":"main__rhUV2","intro":"intro__AU9Zf","profileSection":"profileSection__jVCDF","profilePicture":"profilePicture__stP5f","profileButtons":"profileButtons__VOEqg","roundButton":"roundButton__kjhuK","buttonIcon":"buttonIcon__VG9YD","buttonText":"buttonText__G4ICD","introText":"introText__TFNqb","highlights":"highlights__EC3cF","highlightWrapper":"highlightWrapper__wK8EA","highlightGrid":"highlightGrid__ZuWHM","highlight":"highlight__Fzp3P","highlightImage":"highlightImage__c7oDY","footer":"footer__S9HD3"});
// CONCATENATED MODULE: ./routes/home/index.js


var home_Home = function Home() {
  return Object(external_preact_["h"])("div", {
    class: home_style.home
  }, Object(external_preact_["h"])("main", {
    class: home_style.main
  }, Object(external_preact_["h"])("section", {
    class: home_style.intro
  }, Object(external_preact_["h"])("div", {
    class: home_style.profileSection
  }, Object(external_preact_["h"])("img", {
    src: "/assets/Diana6Gflagship.jpg",
    alt: "Diana Moya",
    class: home_style.profilePicture
  }), Object(external_preact_["h"])("div", {
    class: home_style.profileButtons
  }, Object(external_preact_["h"])("a", {
    href: "https://www.google.com/url?q=https%3A%2F%2Fbr.linkedin.com%2Fin%2Fdiana-pamela-moya-osorio-508a9b172&sa=D&sntz=1&usg=AOvVaw0KFpAfx4GYVNrYhr4Y0VYo",
    class: home_style.roundButton,
    "aria-label": "LinkedIn"
  }, Object(external_preact_["h"])("img", {
    src: "/assets/LI-In-Bug.png?height=24&width=24",
    alt: "LinkedIn",
    class: home_style.buttonIcon
  })), Object(external_preact_["h"])("a", {
    href: "https://scholar.google.ch/citations?hl=de&user=RgcMUu4AAAAJ&view_op=list_works&sortby=pubdate",
    class: home_style.roundButton,
    "aria-label": "Google Scholar"
  }, Object(external_preact_["h"])("img", {
    src: "/assets/Scholar_logo.svg?height=24&width=24",
    alt: "Google Scholar",
    class: home_style.buttonIcon
  })), Object(external_preact_["h"])("a", {
    href: "https://elliit.se/wp-content/uploads/2023/11/ELLIIT_Recruited_Faculty_catalogue_Diana_MoyaOsorio.pdf",
    class: home_style.roundButton,
    "aria-label": "Elliit"
  }, Object(external_preact_["h"])("img", {
    src: "/assets/Untitled.png?height=24&width=24",
    alt: "Elliit",
    class: home_style.buttonIcon
  })))), Object(external_preact_["h"])("div", {
    class: home_style.introText
  }, Object(external_preact_["h"])("h1", null, "Diana Pamela Moya Osorio"), Object(external_preact_["h"])("h2", null, "Associate Professor, Link\xF6ping University"), Object(external_preact_["h"])("p", null, "Diana Pamela Moya Osorio is currently Associate Professor at the Communication Systems Division, Department of Electrical Engineering, Link\xF6ping University, Sweden, and an ELLIIT recruited faculty. Previously, she was Senior Research Fellow and Adjunct Professor at the Centre for Wireless Communications, University of Oulu, Finland. She received the B.Sc. degree in electronics and telecommunications engineering from the Armed Forces University, Ecuador, in 2008, and the M.Sc. and D.Sc. degrees in electrical engineering with emphasis on telecommunications and telematics from the University of Campinas, Brazil, in 2011 and 2015, respectively. From 2015 to 2022, she was an Assistant Professor with the Department of Electrical Engineering, Federal University of S\xE3o Carlos, Brazil. From 2020 to 2023, she was also a Postdoctoral Researcher for the Academy of Finland. She has served as TPC and reviewer for several journals and conferences. Currently, she is Associate Editor of IEEE Wireless Communications Letters, IEEE Communication Letters, and IEEE Transactions on Information Forensics & Security. She also serves as working group leader for Trustworthy 6G at the Cost Action 6G-PHYSEC. Her research interests include wireless communications in general, signal processing for wireless communications, physical layer security, and integrated sensing and communications."))), Object(external_preact_["h"])("section", {
    class: home_style.highlights
  }, Object(external_preact_["h"])("h2", null, "Research Highlights"), Object(external_preact_["h"])("div", {
    class: home_style.highlightWrapper
  }, Object(external_preact_["h"])("div", {
    class: home_style.highlightGrid
  }, Object(external_preact_["h"])(home_ResearchHighlight, {
    title: "Physical layer security and privacy (PLS)",
    description: "Physical Layer Security is a security approach that operates directly on wireless signals, leveraging the unique characteristics of the propagation channel and hardware as sources of entropy to ensure confidentiality, integrity, and authentication.",
    imageUrl: "/assets/pls.jpg",
    link: "https://liu.se/en/research/physical-layer-security-in-massive-mimo"
  }), Object(external_preact_["h"])(home_ResearchHighlight, {
    title: "Integrated Sensing and Communications (ISAC)",
    description: "One of the most promising features that will be integral part of the next generation of wireless mobile networks, 6G, is the integration of sensing functionality.",
    imageUrl: "/assets/isac.jpg",
    link: "https://liu.se/en/research/isac"
  }))))), Object(external_preact_["h"])("footer", {
    class: home_style.footer
  }, Object(external_preact_["h"])("p", null, "\xA9 2025 Diana Moya. All rights reserved.")));
};
var home_ResearchHighlight = function ResearchHighlight(_ref) {
  var title = _ref.title,
    description = _ref.description,
    imageUrl = _ref.imageUrl,
    link = _ref.link;
  return Object(external_preact_["h"])("a", {
    href: link,
    class: home_style.highlight,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(external_preact_["h"])("img", {
    src: imageUrl,
    alt: title,
    class: home_style.highlightImage
  }), Object(external_preact_["h"])("h3", null, title), Object(external_preact_["h"])("p", null, description));
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./routes/research/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var research_style = ({"research":"research__oSkHo","tabs":"tabs__Pn7Jz","active":"active__I-Eu6","content":"content__GjZDW"});
// CONCATENATED MODULE: ./routes/research/index.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var research_Research = function Research() {
  var _useState = h('interests'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var renderContent = function renderContent() {
    switch (activeTab) {
      case 'interests':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Research Interests"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Wireless communications."), Object(external_preact_["h"])("li", null, "Integrated sensing and communications (ISAC)."), Object(external_preact_["h"])("li", null, "Multiple antenna communications."), Object(external_preact_["h"])("li", null, "Trustworthiness in 6G and physical layer security.")));
      case 'group':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Research Group and Former Students"), Object(external_preact_["h"])("h3", null, "Doctoral Students:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Henrik \xC5kesson, Link\xF6ping University. Main supervisor."), Object(external_preact_["h"])("li", null, "Palatip Jopanya, Link\xF6ping University. Main supervisor."), Object(external_preact_["h"])("li", null, "Ahmet Kaplan. Link\xF6ping University. Co-supervisor."), Object(external_preact_["h"])("li", null, "Dexin Kong. Link\xF6ping University. Co-supervisor.")), Object(external_preact_["h"])("h3", null, "Former Students:"), Object(external_preact_["h"])("h4", null, "Doctoral Students:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Jos\xE9 David Vega S\xE1nchez, Escuela Polit\xE9cnica Nacional (EPN), Ecuador. Co-supervisor.")), Object(external_preact_["h"])("h4", null, "Master Students:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Henrik \xC5kesson (2024). Link\xF6ping University. Supervisor."), Object(external_preact_["h"])("li", null, "Simon Persson (2024). Link\xF6ping University. Examiner."), Object(external_preact_["h"])("li", null, "Gunnar Engstr\xF6m (2024). Link\xF6ping University. Examiner."), Object(external_preact_["h"])("li", null, "Xavier Alejandro Flores Cabezas (2022), University of Oulu, Finland. Supervisor.")));
      case 'projects':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Projects and Grants"), Object(external_preact_["h"])("h3", null, "Projects:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "HIGH-SENSE: Multiband Cooperation for High-Resolution Sensing in ISAC Systems, funded by ELLIIT - Call E. 2025-2029."), Object(external_preact_["h"])("li", null, "ALERT: eArLy warning systEms for dRone detection based on disTributed integrated sensing and communication, funded by WASP. PI. 2024-2029."), Object(external_preact_["h"])("li", null, "CO-ISAC: Coherent Processing for Multi-Static ISAC Systems in 6G Networks, funded by Vinnova (6G \u2013 Research and innovation 2024). Co-PI. 2025-2026"), Object(external_preact_["h"])("li", null, "RE-ROUTE. Main contact from UOULU and Task 4.3 leader. (2023-2027). Funding: Eu HORIZON-MSCA-SE-2021."), Object(external_preact_["h"])("li", null, "FAITH - SaFeguarding mAchine-type communIcation neTworks at the pHysical layer. Principal Investigator (2020-2024). Funding: Academy of Finland"), Object(external_preact_["h"])("li", null, "INSPIRE-5Gplus, 5G PPP, 5G Security. Task leader (2019-2022). Funding: Horizon 2020 Project"), Object(external_preact_["h"])("li", null, "Security in wireless communication systems 5G: New approaches from the Physical Layer Perspective. Principal Investigator (2017-2020). Funding: Brazilian National Council for Scientific and Technological Development (CNPq)."), Object(external_preact_["h"])("li", null, "Ultra-reliable and low-latency communications for 5G. Principal Investigator (2018-2019). Funding: S\xE3o Paulo Research Foundation (FAPESP).")), Object(external_preact_["h"])("h3", null, "Grants:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Postdoctoral research fellow grant. (2020-2024) Funding: Academy of Finland"), Object(external_preact_["h"])("li", null, "Ultra-reliable and low-latency communications for 5G networks. Grant Researcher Abroad (2018-2019) Funding: S\xE3o Paulo Research Foundation (FAPESP)"), Object(external_preact_["h"])("li", null, "Doctoral Student grant. (2011-2015) Funding: Coordination of Superior Level Staff Improvement (CAPES)"), Object(external_preact_["h"])("li", null, "Master\xB4s Student grant. (2009-2011) Brazilian National Council for Scientific and Technological Development (CNPq)")));
      default:
        return null;
    }
  };
  return Object(external_preact_["h"])("div", {
    class: research_style.research
  }, Object(external_preact_["h"])("h1", null, "Research"), Object(external_preact_["h"])("div", {
    class: research_style.tabs
  }, Object(external_preact_["h"])("button", {
    class: activeTab === 'interests' ? research_style.active : '',
    onClick: function onClick() {
      return setActiveTab('interests');
    }
  }, "Research Interests"), Object(external_preact_["h"])("button", {
    class: activeTab === 'group' ? research_style.active : '',
    onClick: function onClick() {
      return setActiveTab('group');
    }
  }, "Research Group"), Object(external_preact_["h"])("button", {
    class: activeTab === 'projects' ? research_style.active : '',
    onClick: function onClick() {
      return setActiveTab('projects');
    }
  }, "Projects and Grants")), Object(external_preact_["h"])("div", {
    class: research_style.content
  }, renderContent()));
};
/* harmony default export */ var research = (research_Research);
// CONCATENATED MODULE: ./routes/publications/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var publications_style = ({"publications":"publications__cOC1o","searchContainer":"searchContainer__Fgbcq","searchInput":"searchInput__sGm4A","publicationList":"publicationList__VPrun","publicationItem":"publicationItem__kEduN","authors":"authors__I-trl","publication":"publication__yFRl+","year":"year__s+F6K","citations":"citations__Zb-WD","noResults":"noResults__OCjIo"});
// EXTERNAL MODULE: ./scholar_data.json
var scholar_data = __webpack_require__("r6Ba");

// CONCATENATED MODULE: ./routes/publications/index.js
function publications_slicedToArray(r, e) { return publications_arrayWithHoles(r) || publications_iterableToArrayLimit(r, e) || publications_unsupportedIterableToArray(r, e) || publications_nonIterableRest(); }
function publications_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function publications_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return publications_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? publications_arrayLikeToArray(r, a) : void 0; } }
function publications_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function publications_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function publications_arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var publications_Publications = function Publications() {
  var _useState = h([]),
    _useState2 = publications_slicedToArray(_useState, 2),
    publications = _useState2[0],
    setPublications = _useState2[1];
  var _useState3 = h(''),
    _useState4 = publications_slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  y(function () {
    setPublications(scholar_data.articles || []);
  }, []);
  var filteredPublications = publications.filter(function (pub) {
    return pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) || pub.publication.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return Object(external_preact_["h"])("div", {
    class: publications_style.publications
  }, Object(external_preact_["h"])("h1", null, "Publications"), Object(external_preact_["h"])("div", {
    class: publications_style.searchContainer
  }, Object(external_preact_["h"])("input", {
    type: "text",
    placeholder: "Search publications...",
    value: searchTerm,
    onInput: function onInput(e) {
      return setSearchTerm(e.target.value);
    },
    class: publications_style.searchInput
  })), Object(external_preact_["h"])("ul", {
    class: publications_style.publicationList
  }, filteredPublications.map(function (pub, index) {
    return Object(external_preact_["h"])("li", {
      key: index,
      class: publications_style.publicationItem
    }, Object(external_preact_["h"])("h2", null, pub.title), Object(external_preact_["h"])("p", {
      class: publications_style.authors
    }, pub.authors), Object(external_preact_["h"])("p", {
      class: publications_style.publication
    }, pub.publication), Object(external_preact_["h"])("p", {
      class: publications_style.year
    }, "Year: ", pub.year), Object(external_preact_["h"])("p", {
      class: publications_style.citations
    }, "Citations: ", pub.citations));
  })), filteredPublications.length === 0 && Object(external_preact_["h"])("p", {
    class: publications_style.noResults
  }, "No publications found matching your search."));
};
/* harmony default export */ var routes_publications = (publications_Publications);
// CONCATENATED MODULE: ./routes/teaching/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var teaching_style = ({"teaching":"teaching__03GY1","tabs":"tabs__RSoKi","active":"active__fN-9L","content":"content__9EK8M"});
// CONCATENATED MODULE: ./routes/teaching/index.js
function teaching_slicedToArray(r, e) { return teaching_arrayWithHoles(r) || teaching_iterableToArrayLimit(r, e) || teaching_unsupportedIterableToArray(r, e) || teaching_nonIterableRest(); }
function teaching_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function teaching_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return teaching_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? teaching_arrayLikeToArray(r, a) : void 0; } }
function teaching_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function teaching_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function teaching_arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var teaching_Teaching = function Teaching() {
  var _useState = h('graduate'),
    _useState2 = teaching_slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var renderContent = function renderContent() {
    switch (activeTab) {
      case 'graduate':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Graduate Courses"), Object(external_preact_["h"])("h3", null, "Master-level courses:"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Information and Communication Engineering TSKS35, Fall 2024. Link\xF6ping University."), Object(external_preact_["h"])("li", null, "Multiple Antenna Communications TSKS14, Spring 2024. Link\xF6ping University."), Object(external_preact_["h"])("li", null, "Modern topics in telecommunications and radio engineering 10 \u2013 Intelligent security. Spring 2023. University of Oulu, Finland."), Object(external_preact_["h"])("li", null, "Stochastic Processes for Engineering, Fall 2019. UFSCar, Brazil")));
      case 'undergraduate':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Undergraduate Courses"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Scientific Computing for Electrical and Mechanical Engineering, Spring/Fall, yearly from 2015 to 2019. UFSCar, Brazil"), Object(external_preact_["h"])("li", null, "Introduction to Wireless Communications, Spring 2016, Fall 2016, Spring 2017, Spring 2018. UFSCar, Brazil")));
      case 'other':
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, "Other Educational and Public Lectures"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Invited Lecture \"Physical Layer Security in 6G\", Escuela Polit\xE9cnica Nacional (EPN), Ecuador"), Object(external_preact_["h"])("li", null, "Invited Lecture: \"On the road to 6G, what comes next?\", Universidad de las Am\xE9ricas (UDLA), Ecuador"), Object(external_preact_["h"])("li", null, "Invited Lecture: \"What is 6G?\", University of the Armed Forces (ESPE), Ecuador"), Object(external_preact_["h"])("li", null, "Invited Lecture \"Security for 6G mobile networks\", UDLA, Ecuador"), Object(external_preact_["h"])("li", null, "Invited Lecture \"Security and Privacy in 6G\", ESPE, Ecuador")));
      default:
        return null;
    }
  };
  return Object(external_preact_["h"])("div", {
    class: teaching_style.teaching
  }, Object(external_preact_["h"])("h1", null, "Teaching"), Object(external_preact_["h"])("div", {
    class: teaching_style.tabs
  }, Object(external_preact_["h"])("button", {
    class: activeTab === 'graduate' ? teaching_style.active : '',
    onClick: function onClick() {
      return setActiveTab('graduate');
    }
  }, "Graduate Courses"), Object(external_preact_["h"])("button", {
    class: activeTab === 'undergraduate' ? teaching_style.active : '',
    onClick: function onClick() {
      return setActiveTab('undergraduate');
    }
  }, "Undergraduate Courses"), Object(external_preact_["h"])("button", {
    class: activeTab === 'other' ? teaching_style.active : '',
    onClick: function onClick() {
      return setActiveTab('other');
    }
  }, "Other Lectures")), Object(external_preact_["h"])("div", {
    class: teaching_style.content
  }, renderContent()));
};
/* harmony default export */ var teaching = (teaching_Teaching);
// CONCATENATED MODULE: ./routes/contact/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var contact_style = ({"contact":"contact__pu-Fn","contactInfo":"contactInfo__CY8Nr","infoItem":"infoItem__nzGqu"});
// CONCATENATED MODULE: ./routes/contact/index.js


var contact_Contact = function Contact() {
  return Object(external_preact_["h"])("div", {
    class: contact_style.contact
  }, Object(external_preact_["h"])("h1", null, "Contact Information"), Object(external_preact_["h"])("div", {
    class: contact_style.contactInfo
  }, Object(external_preact_["h"])("div", {
    class: contact_style.infoItem
  }, Object(external_preact_["h"])("h2", null, "Email"), Object(external_preact_["h"])("p", null, Object(external_preact_["h"])("a", {
    href: "mailto:diana.moya.osorio@liu.se"
  }, "diana.moya.osorio@liu.se"))), Object(external_preact_["h"])("div", {
    class: contact_style.infoItem
  }, Object(external_preact_["h"])("h2", null, "Department"), Object(external_preact_["h"])("p", null, "Department of Electrical Engineering")), Object(external_preact_["h"])("div", {
    class: contact_style.infoItem
  }, Object(external_preact_["h"])("h2", null, "Mailing Address"), Object(external_preact_["h"])("p", null, "SE-581 83 Link\xF6ping")), Object(external_preact_["h"])("div", {
    class: contact_style.infoItem
  }, Object(external_preact_["h"])("h2", null, "Visiting Address"), Object(external_preact_["h"])("p", null, "Building B, Entrance 29, top floor"), Object(external_preact_["h"])("p", null, "Corridor A, Office 3A:436"), Object(external_preact_["h"])("p", null, "Campus Valla, Link\xF6ping"))));
};
/* harmony default export */ var contact = (contact_Contact);
// CONCATENATED MODULE: ./routes/admin/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var admin_style = ({"admin":"admin__SGkMS","loginForm":"loginForm__JzD45","logoutButton":"logoutButton__oZKCk"});
// CONCATENATED MODULE: ./routes/google-scholar-scraper/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var google_scholar_scraper_style = ({"scraperContainer":"scraperContainer__cMV1G","scrapeButton":"scrapeButton__DsaZV","refreshButton":"refreshButton__TQ1fo","error":"error__FfBKN","loading":"loading__AT0sn","result":"result__ayCcW"});
// CONCATENATED MODULE: ./routes/google-scholar-scraper/index.js
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function google_scholar_scraper_slicedToArray(r, e) { return google_scholar_scraper_arrayWithHoles(r) || google_scholar_scraper_iterableToArrayLimit(r, e) || google_scholar_scraper_unsupportedIterableToArray(r, e) || google_scholar_scraper_nonIterableRest(); }
function google_scholar_scraper_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function google_scholar_scraper_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return google_scholar_scraper_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? google_scholar_scraper_arrayLikeToArray(r, a) : void 0; } }
function google_scholar_scraper_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function google_scholar_scraper_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function google_scholar_scraper_arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var google_scholar_scraper_GoogleScholarScraper = function GoogleScholarScraper() {
  var _scholarData$articles, _scholarData$articles2;
  var _useState = h(null),
    _useState2 = google_scholar_scraper_slicedToArray(_useState, 2),
    scholarData = _useState2[0],
    setScholarData = _useState2[1];
  var _useState3 = h(false),
    _useState4 = google_scholar_scraper_slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = h(null),
    _useState6 = google_scholar_scraper_slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = h('http://localhost:3000'),
    _useState8 = google_scholar_scraper_slicedToArray(_useState7, 2),
    serverUrl = _useState8[0],
    setServerUrl = _useState8[1];
  y(function () {
    fetchScholarData();
  }, []);
  var fetchScholarData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      setIsLoading(true);
      setError(null);
      try {
        var response = yield fetch("".concat(serverUrl, "/api/get-scholar-data"));
        if (!response.ok) {
          var errorData = yield response.json();
          throw new Error("HTTP error! status: ".concat(response.status, ", message: ").concat(errorData.error));
        }
        var data = yield response.json();
        if (Object.keys(data).length === 0) {
          setError('No data available. Please scrape Google Scholar first.');
        } else {
          setScholarData(data);
        }
      } catch (error) {
        console.error('Error fetching Google Scholar data:', error);
        setError("Failed to fetch Google Scholar data: ".concat(error.message));
      }
      setIsLoading(false);
    });
    return function fetchScholarData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleScrape = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      setIsLoading(true);
      setError(null);
      try {
        var response = yield fetch("".concat(serverUrl, "/api/scrape-google-scholar"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          var errorData = yield response.json();
          throw new Error("HTTP error! status: ".concat(response.status, ", message: ").concat(errorData.error));
        }
        var data = yield response.json();
        setScholarData(data);
      } catch (error) {
        console.error('Error scraping Google Scholar:', error);
        setError("Failed to scrape Google Scholar: ".concat(error.message));
      }
      setIsLoading(false);
    });
    return function handleScrape() {
      return _ref2.apply(this, arguments);
    };
  }();
  return Object(external_preact_["h"])("div", {
    class: google_scholar_scraper_style.scraperContainer
  }, Object(external_preact_["h"])("h2", null, "Google Scholar Data"), Object(external_preact_["h"])("button", {
    onClick: handleScrape,
    disabled: isLoading,
    class: google_scholar_scraper_style.scrapeButton
  }, isLoading ? 'Updating...' : 'Update Google Scholar Data'), Object(external_preact_["h"])("button", {
    onClick: fetchScholarData,
    disabled: isLoading,
    class: google_scholar_scraper_style.refreshButton
  }, "Refresh Data from File"), error && Object(external_preact_["h"])("div", {
    class: google_scholar_scraper_style.error
  }, error), isLoading && Object(external_preact_["h"])("div", {
    class: google_scholar_scraper_style.loading
  }, "Loading... This may take a few minutes."), scholarData && Object(external_preact_["h"])("div", {
    class: google_scholar_scraper_style.result
  }, Object(external_preact_["h"])("h3", null, "Scholar Data:"), Object(external_preact_["h"])("p", null, "Name: ", scholarData.name), Object(external_preact_["h"])("p", null, "Affiliation: ", scholarData.affiliation), Object(external_preact_["h"])("p", null, "H-index: ", scholarData.hIndex), Object(external_preact_["h"])("p", null, "i10-index: ", scholarData.i10Index), Object(external_preact_["h"])("p", null, "Total Citations: ", scholarData.citations), Object(external_preact_["h"])("p", null, "Last Updated: ", new Date(scholarData.lastUpdated).toLocaleString()), Object(external_preact_["h"])("h4", null, "Articles (", ((_scholarData$articles = scholarData.articles) === null || _scholarData$articles === void 0 ? void 0 : _scholarData$articles.length) || 0, "):"), Object(external_preact_["h"])("ul", null, ((_scholarData$articles2 = scholarData.articles) === null || _scholarData$articles2 === void 0 ? void 0 : _scholarData$articles2.map(function (article, index) {
    return Object(external_preact_["h"])("li", {
      key: index
    }, Object(external_preact_["h"])("strong", null, article.title), Object(external_preact_["h"])("br", null), article.authors, Object(external_preact_["h"])("br", null), article.publication, " (", article.year, ")", Object(external_preact_["h"])("br", null), "Citations: ", article.citations);
  })) || Object(external_preact_["h"])("li", null, "No articles available"))));
};
/* harmony default export */ var google_scholar_scraper = (google_scholar_scraper_GoogleScholarScraper);
// CONCATENATED MODULE: ./routes/admin/index.js
function admin_slicedToArray(r, e) { return admin_arrayWithHoles(r) || admin_iterableToArrayLimit(r, e) || admin_unsupportedIterableToArray(r, e) || admin_nonIterableRest(); }
function admin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function admin_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return admin_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? admin_arrayLikeToArray(r, a) : void 0; } }
function admin_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function admin_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function admin_arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var admin_Admin = function Admin() {
  var _useState = h(false),
    _useState2 = admin_slicedToArray(_useState, 2),
    isAuthenticated = _useState2[0],
    setIsAuthenticated = _useState2[1];
  var _useState3 = h(''),
    _useState4 = admin_slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var correctPassword = 'adminpass123'; // In a real app, this should be securely stored

  y(function () {
    // Check if user is already authenticated
    var auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Incorrect password');
    }
  };
  var handleLogout = function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };
  if (!isAuthenticated) {
    return Object(external_preact_["h"])("div", {
      class: admin_style.admin
    }, Object(external_preact_["h"])("h1", null, "Admin Login"), Object(external_preact_["h"])("form", {
      onSubmit: handleLogin,
      class: admin_style.loginForm
    }, Object(external_preact_["h"])("input", {
      type: "password",
      value: password,
      onInput: function onInput(e) {
        return setPassword(e.target.value);
      },
      placeholder: "Enter password",
      required: true
    }), Object(external_preact_["h"])("button", {
      type: "submit"
    }, "Login")));
  }
  return Object(external_preact_["h"])("div", {
    class: admin_style.admin
  }, Object(external_preact_["h"])("h1", null, "Admin Panel"), Object(external_preact_["h"])("button", {
    onClick: handleLogout,
    class: admin_style.logoutButton
  }, "Logout"), Object(external_preact_["h"])(google_scholar_scraper, null));
};
/* harmony default export */ var admin = (admin_Admin);
// CONCATENATED MODULE: ./components/app.js
function app_slicedToArray(r, e) { return app_arrayWithHoles(r) || app_iterableToArrayLimit(r, e) || app_unsupportedIterableToArray(r, e) || app_nonIterableRest(); }
function app_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function app_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return app_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? app_arrayLikeToArray(r, a) : void 0; } }
function app_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function app_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function app_arrayWithHoles(r) { if (Array.isArray(r)) return r; }










var app_App = function App() {
  var _useState = h(""),
    _useState2 = app_slicedToArray(_useState, 2),
    basePath = _useState2[0],
    setBasePath = _useState2[1];
  y(function () {
    // Check if we're running on GitHub Pages
    var isGitHubPages = window.location.hostname.includes("github.io");
    setBasePath(isGitHubPages ? "/dianamoyaosorio.github.io" : "");
  }, []);
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(header, null), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es["Router"], null, Object(external_preact_["h"])(home, {
    path: "".concat(basePath, "/")
  }), Object(external_preact_["h"])(research, {
    path: "".concat(basePath, "/research")
  }), Object(external_preact_["h"])(routes_publications, {
    path: "".concat(basePath, "/publications")
  }), Object(external_preact_["h"])(teaching, {
    path: "".concat(basePath, "/teaching")
  }), Object(external_preact_["h"])(contact, {
    path: "".concat(basePath, "/contact")
  }), Object(external_preact_["h"])(admin, {
    path: "".concat(basePath, "/adm")
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./index.js



if (typeof window !== "undefined") {
  Object(external_preact_["render"])(Object(external_preact_["h"])(app, null), document.getElementById("app") || document.body);
}

/***/ }),

/***/ "Y3FI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Link = function Link(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', assign({
    onClick: handleLinkClick
  }, props));
};
var Route = function Route(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "r6Ba":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Diana Moya Osorio\",\"affiliation\":\"Associate Professor at Link�ping University\",\"hIndex\":\"18\",\"i10Index\":\"25\",\"citations\":\"1734\",\"articles\":[{\"title\":\"Secure mmWave MIMO Networks Employing Hybrid Active-Passive RIS\",\"authors\":\"EN Egashira, DPM Osorio, NT Nguyen, M Juntti\",\"publication\":\"IEEE Transactions on Communications, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Privacy-Preserving Framework for Cell-Free MIMO ISAC Systems\",\"authors\":\"H �kesson, DPM Osorio\",\"publication\":\"arXiv preprint arXiv:2409.12874, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Reducing Dynamic Range in Bistatic Backscatter Communication via Beamforming Design\",\"authors\":\"A Kaplan, DPM Osorio, EG Larsson\",\"publication\":\"2024 IEEE 25th International Workshop on Signal Processing Advances in�…, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Propagation Distance Estimation for Radio over Fiber with Cascaded Structure\",\"authors\":\"D Kong, DPM Osorio, EG Larsson\",\"publication\":\"2024 IEEE 25th International Workshop on Signal Processing Advances in�…, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Performance Evaluation of MRC Systems Over Sub-Terahertz MFTR Fading Channels\",\"authors\":\"NO Garz�n, HC Mora, F Almeida, J Vega, D Moya\",\"publication\":\"IEEE Communications Letters, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Analysis and Simulation of Precoding and User Association for Securing Hybrid RF/VLC Systems\",\"authors\":\"IWG Da Silva, EEB Olivo, M Katz, DPM Osorio\",\"publication\":\"IEEE Sensors Journal, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Trustworthy 6G: Misconceptions, Attributes, and the Labeling Approach\",\"authors\":\"DPM Osorio, B Etzlinger, J Karamachoski\",\"publication\":\"Authorea Preprints, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Physical Layer Security Beamforming Design via Deep Unfolding\",\"authors\":\"I Bilbao, NT Nguyen, DPM Osorio, V Tapio, M Juntti, E Iradier, ...\",\"publication\":\"2024 IEEE International Mediterranean Conference on Communications and�…, 2024\",\"year\":\"2024\",\"citations\":\"\"},{\"title\":\"Access Point Selection for Bistatic Backscatter Communication in Cell-Free MIMO\",\"authors\":\"A Kaplan, DPM Osorio, EG Larsson\",\"publication\":\"ICC 2024-IEEE International Conference on Communications, 3214-3219, 2024\",\"year\":\"2024\",\"citations\":\"1\"},{\"title\":\"Strategic Deployment of Swarm of UAVs for Secure IoT Networks\",\"authors\":\"XAF Cabezas, DPM Osorio\",\"publication\":\"IEEE Transactions on Aerospace and Electronic Systems, 2024\",\"year\":\"2024\",\"citations\":\"1\"},{\"title\":\"Efficient Framework for UAV-Based Distributed Sensing\",\"authors\":\"XAF Cabezas, DPM Osorio, M Juntti\",\"publication\":\"2024 IEEE Wireless Communications and Networking Conference (WCNC), 1-6, 2024\",\"year\":\"2024\",\"citations\":\"3*\"},{\"title\":\"Fluid Antenna System: Secrecy Outage Probability Analysis\",\"authors\":\"JD Vega-S�nchez, L Urquiza-Aguiar, HRC Mora, NVO Garz�n, ...\",\"publication\":\"IEEE Transactions on Vehicular Technology, 2024\",\"year\":\"2024\",\"citations\":\"6\"},{\"title\":\"Comparative Evaluation of Radio Network Planning for Different 5G-NR Channel Models on Urban Macro Environments in Quito City\",\"authors\":\"VRF Guijarro, JD Vega-S�nchez, MCP Paredes, FG Ar�valo, DPM Osorio\",\"publication\":\"IEEE Access, 2024\",\"year\":\"2024\",\"citations\":\"5\"},{\"title\":\"Novel expressions for the outage probability and diversity gains in fluid antenna system\",\"authors\":\"JD Vega-S�nchez, AE L�pez-Ram�rez, L Urquiza-Aguiar, DPM Osorio\",\"publication\":\"IEEE Wireless Communications Letters, 2023\",\"year\":\"2023\",\"citations\":\"21\"},{\"title\":\"A simple method for the performance analysis of fluid antenna systems under correlated Nakagami-m fading\",\"authors\":\"JD Vega-S�nchez, L Urquiza-Aguiar, MCP Paredes, DPM Osorio\",\"publication\":\"IEEE Wireless Communications Letters, 2023\",\"year\":\"2023\",\"citations\":\"14\"},{\"title\":\"VLC Systems\",\"authors\":\"IWG da Silva, EEB Olivo, M Katz, DPM Osorio\",\"publication\":\"Authorea Preprints, 2023\",\"year\":\"2023\",\"citations\":\"\"},{\"title\":\"6G Security Vision-A Concise Update\",\"authors\":\"G G�r, P Porambage, DM Osorio, AA Yavuz, M Liyanage\",\"publication\":\"\",\"year\":\"2023\",\"citations\":\"2\"},{\"title\":\"Multi-Static ISAC in Cell-Free Massive MIMO: Precoder Design and Privacy Assessment\",\"authors\":\"IWG da Silva, DPM Osorio, M Juntti\",\"publication\":\"Globecom workshops 2023, 2023\",\"year\":\"2023\",\"citations\":\"9\"},{\"title\":\"Multi UAV-enabled Distributed Sensing: Cooperation Orchestration and Detection Protocol\",\"authors\":\"XAF Cabezas, DPM Osorio, M Juntti\",\"publication\":\"arXiv preprint arXiv:2309.05114, 2023\",\"year\":\"2023\",\"citations\":\"1\"},{\"title\":\"Multi UAV-enabled Distributed Sensing: Cooperation Orchestration and Detection Protocol\",\"authors\":\"XA Flores Cabezas, DP Moya Osorio, M Juntti\",\"publication\":\"arXiv e-prints, arXiv: 2309.05114, 2023\",\"year\":\"2023\",\"citations\":\"\"},{\"title\":\"Physical Layer Security\",\"authors\":\"DPM Osorio, JD Vega‐S�nchez, EEB Olivo, AN Barreto\",\"publication\":\"Security and Privacy Vision in 6G: A Comprehensive Guide, 305-325, 2023\",\"year\":\"2023\",\"citations\":\"\"},{\"title\":\"A multi-armed bandit framework for efficient UAV-based cooperative jamming coverage\",\"authors\":\"XAF Cabezas, DPM Osorio, M Juntti\",\"publication\":\"IEEE Transactions on Vehicular Technology, 2023\",\"year\":\"2023\",\"citations\":\"6\"},{\"title\":\"Secure Precoding and User Association for Multiuser Hybrid RF/VLC Systems\",\"authors\":\"I Wanderley Gomes da Silva, EE Ben�tez Olivo, M Katz, DP Moya Osorio\",\"publication\":\"TechRxiv, 2023\",\"year\":\"2023\",\"citations\":\"5\"},{\"title\":\"Blockchain and game theory convergence for network slice brokering\",\"authors\":\"T Hewa, P Porambage, A Kalla, DPM Osorio, M Liyanage, M Ylianttila\",\"publication\":\"Computer 56 (3), 80-91, 2023\",\"year\":\"2023\",\"citations\":\"1\"},{\"title\":\"Privacy Performance of MIMO Dual-Functional Radar-Communications with Internal Adversary\",\"authors\":\"IWG da Silva, DPM Osorio, M Juntti\",\"publication\":\"International Conference on Communications ICC 2023 Workshops, 2023\",\"year\":\"2023\",\"citations\":\"4\"},{\"title\":\"Intelligent Transportation Systems in the Context of 5G-Beyond and 6G Networks\",\"authors\":\"AK I. Kilanioti, G. Rizzo, B. M. Masini, A. Bazzi, D. P. M. Osorio, F ...\",\"publication\":\"IEEE Conference on Standards for Communications and Networking (CSCN), 2022\",\"year\":\"2022\",\"citations\":\"9\"},{\"title\":\"Positioning and power optimisation for UAV-assisted networks in the presence of eavesdroppers: a multi-armed bandit approach\",\"authors\":\"XA Flores Cabezas, DP Moya Osorio, M Latva-aho\",\"publication\":\"EURASIP Journal on Wireless Communications and Networking 2022 (1), 85, 2022\",\"year\":\"2022\",\"citations\":\"7\"},{\"title\":\"Joint precoding and user association for multiuser hybrid RF/VLC systems under secrecy constraints.\",\"authors\":\"IWGD Silva\",\"publication\":\"Universidade Estadual Paulista (Unesp), 2022\",\"year\":\"2022\",\"citations\":\"\"},{\"title\":\"Secrecy Capacity Maximization for a Hybrid Relay-RIS Scheme in mmWave MIMO Networks\",\"authors\":\"EN Egashira, DPM Osorio, NT Nguyen, M Juntti\",\"publication\":\"2022 IEEE 95th Vehicular Technology Conference:(VTC2022-Spring), 1-6, 2022\",\"year\":\"2022\",\"citations\":\"20\"},{\"title\":\"Impact of wireless energy transfer strategies on the secrecy performance of untrustworthy relay networks\",\"authors\":\"EN Egashira, DPM Osorio, EEB Olivo\",\"publication\":\"IEEE Transactions on Vehicular Technology 71 (6), 6859-6863, 2022\",\"year\":\"2022\",\"citations\":\"2\"},{\"title\":\"Impact of self-energy recycling and cooperative jamming on SWIPT-based FD relay networks with secrecy constraints\",\"authors\":\"IWG Da Silva, JDV Sanchez, EEB Olivo, DPM Osorio\",\"publication\":\"IEEE Access 10, 24132-24148, 2022\",\"year\":\"2022\",\"citations\":\"12\"},{\"title\":\"Towards 6G-enabled Internet of Vehicles: Security and Privacy\",\"authors\":\"DPM Osorio, I Ahmad, JDV S�nchez, A Gurtov, J Scholliers, M Kutila, ...\",\"publication\":\"IEEE Open Journal of the Communications Society, 2022\",\"year\":\"2022\",\"citations\":\"117\"},{\"title\":\"On the Secrecy Performance of a Hybrid RF/VLC System\",\"authors\":\"IWG da Silva, DPM Osorio, EEB Olivo, I Ahmed, M Katz\",\"publication\":\"Simp�sio Brasileiro de Telecomunica��es e Processamento de Sinais, 2021\",\"year\":\"2021\",\"citations\":\"3\"},{\"title\":\"Wireless-powered full-duplex UAV relay networks over FTR channels\",\"authors\":\"DDP Mucin, DPM Osorio, EEB Olivo\",\"publication\":\"IEEE Open Journal of the Communications Society 2, 2205-2218, 2021\",\"year\":\"2021\",\"citations\":\"18\"},{\"title\":\"Secure Hybrid RF/VLC under Statistical Queuing Constraints\",\"authors\":\"IWG da Silva, DPM Osorio, EEB Olivo, I Ahmed, M Katz\",\"publication\":\"17th International Symposium on Wireless Communication Systems, 2021\",\"year\":\"2021\",\"citations\":\"6\"},{\"title\":\"Imperfect jamming cancellation on NOMA networks with randomly located eavesdroppers\",\"authors\":\"GM da Silva, DPM Osorio, M Latva-aho\",\"publication\":\"IEEE International Symposium on Personal, Indoor and Mobile Radio Communications, 2021\",\"year\":\"2021\",\"citations\":\"4\"},{\"title\":\"Distributed UAV-enabled zero-forcing cooperative jamming scheme for safeguarding future wireless networks\",\"authors\":\"XAF Cabezas, DPM Osorio, M Latva-aho\",\"publication\":\"IEEE International Symposium on Personal, Indoor and Mobile Radio Communications, 2021\",\"year\":\"2021\",\"citations\":\"9\"},{\"title\":\"T�cnicas de Seguran�a na Camada F�sica para Sistemas de Comunica��o Moveis H�bridos RF/VLC\",\"authors\":\"IWG da Silva, DP Moya Osorio, HVA Galeti\",\"publication\":\"Universidade Federal de S�o Carlos, 2021\",\"year\":\"2021\",\"citations\":\"\"},{\"title\":\"Machine type communications\",\"authors\":\"NH Mahmood, S B�cker, I Moerman, OA L�pez, A Munari, K Mikhaylov, ...\",\"publication\":\"SPRINGER PUBLISHING COMPANY, 2021\",\"year\":\"2021\",\"citations\":\"8\"},{\"title\":\"Machine type communications: key drivers and enablers towards the 6G era\",\"authors\":\"NH Mahmood, S B�cker, I Moerman, OA L�pez, A Munari, K Mikhaylov, ...\",\"publication\":\"EURASIP Journal on Wireless Communications and Networking 2021 (1), 134, 2021\",\"year\":\"2021\",\"citations\":\"93\"},{\"title\":\"6G security challenges and potential solutions\",\"authors\":\"P Porambage, G G�r, DPM Osorio, M Livanage, M Ylianttila\",\"publication\":\"2021 Joint European Conference on Networks and Communications & 6G Summit�…, 2021\",\"year\":\"2021\",\"citations\":\"138\"},{\"title\":\"Information-Theoretic Security of MIMO Networks Under - Shadowed Fading Channels\",\"authors\":\"JDV S�nchez, DPM Osorio, FJ L�pez-Mart�nez, MCP Paredes, ...\",\"publication\":\"IEEE Transactions on Vehicular Technology 70 (7), 6302-6318, 2021\",\"year\":\"2021\",\"citations\":\"26*\"},{\"title\":\"Weighted Secrecy Coverage Analysis and the Impact of Friendly Jamming over UAV-Enabled Networks\",\"authors\":\"XAF Cabezas, DPM Osorio, M Latva-aho\",\"publication\":\"2021 Joint EuCNC & 6GSummit (Best Student Paper Award), 2021\",\"year\":\"2021\",\"citations\":\"10\"},{\"title\":\"The roadmap to 6G security and privacy\",\"authors\":\"P Porambage, G G�r, DPM Osorio, M Liyanage, A Gurtov, M Ylianttila\",\"publication\":\"IEEE Open Journal of the Communications Society 2, 1094-1122, 2021\",\"year\":\"2021\",\"citations\":\"316\"},{\"title\":\"Survey on physical layer security for 5G wireless networks\",\"authors\":\"JDV S�nchez, L Urquiza-Aguiar, MCP Paredes, DPM Osorio\",\"publication\":\"Annals of Telecommunications 76 (3), 155-174, 2021\",\"year\":\"2021\",\"citations\":\"76\"},{\"title\":\"On the secrecy performance over N-wave with diffuse power fading channel\",\"authors\":\"JV Sanchez, DPM Osorio, FJ L�pez-Mart�nez, MCP Paredes, ...\",\"publication\":\"IEEE Transactions on Vehicular Technology, 2020\",\"year\":\"2020\",\"citations\":\"16\"},{\"title\":\"On the performance of power splitting-based SWIPT in self-energy recycling full-duplex relaying networks\",\"authors\":\"IWG Da Silva, DPM Osorio, EEB Olivo, OLA L�pez, H Alves, M Latva-aho\",\"publication\":\"2020 54th Asilomar Conference on Signals, Systems, and Computers, 1272-1276, 2020\",\"year\":\"2020\",\"citations\":\"3\"},{\"title\":\"Uso de geometria estoc�stica para analise e simula��o de redes de comunica��o sem fio multicelulares\",\"authors\":\"MK Tojeiro\",\"publication\":\"Universidade Federal de S�o Carlos, 2020\",\"year\":\"2020\",\"citations\":\"\"},{\"title\":\"Safeguarding MTC at the physical layer: Potentials and challenges\",\"authors\":\"DPM Osorio, EEB Olivo, H Alves, M Latva-Aho\",\"publication\":\"IEEE Access 8, 101437-101447, 2020\",\"year\":\"2020\",\"citations\":\"27\"},{\"title\":\"Six key features of machine type communication in 6G\",\"authors\":\"NH Mahmood, H Alves, OA L�pez, M Shehab, DPM Osorio, M Latva-Aho\",\"publication\":\"2020 2nd 6G Wireless Summit (6G SUMMIT), 1-5, 2020\",\"year\":\"2020\",\"citations\":\"260\"},{\"title\":\"Six key features of machine type communication in 6G\",\"authors\":\"NH Mahmood, H Alves, OA L�pez, M Shehab, DPM Osorio, M Latva-Aho\",\"publication\":\"2020 2nd 6G Wireless Summit (6G SUMMIT), 1-5, 2020\",\"year\":\"2020\",\"citations\":\"\"},{\"title\":\"Six key features of machine type communication in 6G\",\"authors\":\"NH Mahmood, H Alves, OA L�pez, M Shehab, DPM Osorio, M Latva-Aho\",\"publication\":\"2020 2nd 6G Wireless Summit (6G SUMMIT), 1-5, 2020\",\"year\":\"2020\",\"citations\":\"\"},{\"title\":\"On the statistics of the ratio of nonconstrained arbitrary α‐μ random variables: A general framework and applications\",\"authors\":\"JD Vega Sanchez, DP Moya Osorio, EE Benitez Olivo, H Alves, ...\",\"publication\":\"Transactions on Emerging Telecommunications Technologies 31 (3), e3832, 2020\",\"year\":\"2020\",\"citations\":\"12\"},{\"title\":\"Physical‐Layer Security for 5G and Beyond\",\"authors\":\"DP Moya Osorio, JD Vega S�nchez, H Alves\",\"publication\":\"Wiley 5G Ref: The Essential 5G Reference Online, 2019\",\"year\":\"2019\",\"citations\":\"31\"},{\"title\":\"On the secrecy performance and power allocation in relaying networks with untrusted relay in the partial secrecy regime\",\"authors\":\"DPM Osorio, H Alves, EEB Olivo\",\"publication\":\"IEEE Transactions on Information Forensics and Security 15, 2268-2281, 2019\",\"year\":\"2019\",\"citations\":\"14\"},{\"title\":\"Performance analysis of full-duplex relay-aided NOMA systems using partial relay selection\",\"authors\":\"A Tregancini, EEB Olivo, DPM Osorio, CHM De Lima, H Alves\",\"publication\":\"IEEE Transactions on Vehicular Technology 69 (1), 622-635, 2019\",\"year\":\"2019\",\"citations\":\"67\"},{\"title\":\"Secrecy performance of untrustworthy AF relay networks using cooperative jamming and SWIPT\",\"authors\":\"EN Egashira, EEB Olivo, DPM Osorio, H Alves\",\"publication\":\"2019 IEEE 30th Annual International Symposium on Personal, Indoor and Mobile�…, 2019\",\"year\":\"2019\",\"citations\":\"6\"},{\"title\":\"Opportunities for autonomous UAV in harsh environments\",\"authors\":\"R La Scalea, M Rodrigues, DPM Osorio, CH Lima, RD Souza, H Alves, ...\",\"publication\":\"2019 16th International Symposium on Wireless Communication Systems (ISWCS�…, 2019\",\"year\":\"2019\",\"citations\":\"24\"},{\"title\":\"Adaptive secure rate allocation via TAS/MRC under multi-antenna eavesdroppers\",\"authors\":\"I Muhammad, OLA L�pez, H Alves, DPM Osorio, EEB Olivo, M Latva-Aho\",\"publication\":\"2019 16th International Symposium on Wireless Communication Systems (ISWCS�…, 2019\",\"year\":\"2019\",\"citations\":\"2\"},{\"title\":\"A case study of primary user arrival prediction using the energy detector and the hidden markov model in cognitive radio networks\",\"authors\":\"GMD Santana, RS Cristo, JP Diguet, C Dezan, OD PM, BK RLJC\",\"publication\":\"2019 IEEE Symposium on Computers and Communications (ISCC), 1195-1198, 2019\",\"year\":\"2019\",\"citations\":\"3\"},{\"title\":\"Six Key Enablers for Machine Type Communication in 6G\",\"authors\":\"N Huda Mahmood, H Alves, O Alcaraz L�pez, M Shehab, ...\",\"publication\":\"arXiv e-prints, arXiv: 1903.05406, 2019\",\"year\":\"2019\",\"citations\":\"1\"},{\"title\":\"INtelligent Security and PervasIve tRust for 5G and Beyond\",\"authors\":\"V Lefebvre, VH La, L Rossi, P Derez, NPP UMU, OM CLS, RC Benzaid, ...\",\"publication\":\"\",\"year\":\"2019\",\"citations\":\"\"},{\"title\":\"Desempenho de Outage de Sigilo para Redes AF com Relay n�o Confi�vel usando WET e Jamming Baseados no Destino\",\"authors\":\"EN EGASHIRA, EEB OLIVO, DPM OSORIO\",\"publication\":\"XXXVII Brazilian Symposium on Telecommunications and Signal Processing (SBrT'19), 2019\",\"year\":\"2019\",\"citations\":\"1\"},{\"title\":\"An�lise de Outage para Redes Cooperativas-Cognitivas com Sele��o Oportunista e Parcial de Relays Full Duplex\",\"authors\":\"DP Mucin, EEB OLIVO, DPM OSORIO\",\"publication\":\"XXXVII Brazilian Symposium on Telecommunications and Signal Processing (SBrT'19), 2019\",\"year\":\"2019\",\"citations\":\"\"},{\"title\":\"Desempenho de Redes Cooperativas Full Duplex Baseadas em NOMA e Sele��o Parcial de Relays\",\"authors\":\"AT JUNIOR, EEB OLIVO, DPM OSORIO\",\"publication\":\"XXXVII Brazilian Symposium on Telecommunications and Signal Processing (SBrT'19), 2019\",\"year\":\"2019\",\"citations\":\"\"},{\"title\":\"Impact of Outdated CSI on the Secrecy Performance of Multiple Untrusted Relay Networks with Direct Link and Destination-Based Jamming\",\"authors\":\"IWGS SILVA, M TOJEIRO, EEB OLIVO, DPM OSORIO\",\"publication\":\"XXXVII Brazilian Symposium on Telecommunications and Signal Processing (SBrT'19), 2019\",\"year\":\"2019\",\"citations\":\"\"},{\"title\":\"Secrecy performance for multiple untrusted relay networks using destination-based jamming with direct link\",\"authors\":\"DPM Osorio, EEB Olivo, H Alves\",\"publication\":\"2018 IEEE 29th Annual International Symposium on Personal, Indoor and Mobile�…, 2018\",\"year\":\"2018\",\"citations\":\"11\"},{\"title\":\"MARIO: A Cognitive Radio Primary User Arrivals Data Generator\",\"authors\":\"RS Cristo, GMD Santana, DPM Osorio, KR Branco\",\"publication\":\"2018 IEEE Symposium on Computers and Communications (ISCC), 01137-01142, 2018\",\"year\":\"2018\",\"citations\":\"2\"},{\"title\":\"Cognitive Radio for UAV communications: Opportunities and future challenges\",\"authors\":\"GMD Santana, RS Cristo, C Dezan, JP Diguet, DPM Osorio, KR Branco\",\"publication\":\"2018 International Conference on Unmanned Aircraft Systems (ICUAS), 760-768, 2018\",\"year\":\"2018\",\"citations\":\"49\"},{\"title\":\"Impact of primary-user interference on multiuser cognitive relaying networks\",\"authors\":\"DPM Osorio, EEB Olivo, MK Tojeiro, LFV Peres\",\"publication\":\"Journal of Communication and Information Systems 33 (1), 2018\",\"year\":\"2018\",\"citations\":\"3\"},{\"title\":\"Cognitive full-duplex decode-and-forward relaying networks with usable direct link and transmit-power constraints\",\"authors\":\"EEB Olivo, DPM Osorio, H Alves, JCS Santos Filho, M Latva-Aho\",\"publication\":\"IEEE access 6, 24983-24995, 2018\",\"year\":\"2018\",\"citations\":\"18\"},{\"title\":\"An open-source framework for smart meters: Data communication and security traffic analysis\",\"authors\":\"RT Caropreso, RAS Fernandes, DPM Osorio, IN Silva\",\"publication\":\"IEEE Transactions on Industrial Electronics 66 (2), 1638-1647, 2018\",\"year\":\"2018\",\"citations\":\"24\"},{\"title\":\"Impacto da interfer�ncia da rede prim�ria em redes cooperativas e cognitivas multiusu�rio do tipo underlay\",\"authors\":\"LFV Peres, MK Tojeiro, DPM Osorio, EEB Olivo\",\"publication\":\"Proc. XXXV Brazilian Telecommunications and Signal Processing Symposium, 2017\",\"year\":\"2017\",\"citations\":\"1*\"},{\"title\":\"Underlay Cognitive Networks with Partial Relay Selection and Primary-User Interference\",\"authors\":\"DPM Osorio, EEB Olivo\",\"publication\":\"XXXV Brazilian Telecommunications and Signal Processing Symposium, 2017\",\"year\":\"2017\",\"citations\":\"\"},{\"title\":\"An adaptive transmission scheme for amplify-and-forward relaying networks\",\"authors\":\"DPM Osorio, EEB Olivo, H Alves, JCS Santos Filho, M Latva-aho\",\"publication\":\"IEEE Transactions on Communications 65 (1), 66-78, 2016\",\"year\":\"2016\",\"citations\":\"16\"},{\"title\":\"Distributed link selection in multirelay multiuser networks\",\"authors\":\"DP Moya Osorio, EE Ben�tez Olivo, DB da Costa, JC Silveira Santos Filho\",\"publication\":\"Transactions on Emerging Telecommunications Technologies 27 (7), 939-951, 2016\",\"year\":\"2016\",\"citations\":\"4\"},{\"title\":\"An adaptive transmission scheme for cognitive decode-and-forward relaying networks: Half duplex, full duplex, or no cooperation\",\"authors\":\"EEB Olivo, DPM Osorio, H Alves, JCS Santos Filho, M Latva-aho\",\"publication\":\"IEEE Transactions on Wireless Communications 15 (8), 5586-5602, 2016\",\"year\":\"2016\",\"citations\":\"42*\"},{\"title\":\"Client/server multi-frame data exchange architecture embedded in residential smart meters\",\"authors\":\"RASFDPMO R. T. Caropreso, F. A. S. Borges, I. N. Silva\",\"publication\":\"IEEE Power and Energy Society General Meeting (PESGM) 2016, 1 - 5, 2016\",\"year\":\"2016\",\"citations\":\"2\"},{\"title\":\"Exploiting the direct link in full-duplex amplify-and-forward relaying networks\",\"authors\":\"DPM Osorio, EEB Olivo, H Alves, JCS Santos Filho, M Latva-aho\",\"publication\":\"IEEE Signal Processing Letters 22 (10), 1766-1770, 2015\",\"year\":\"2015\",\"citations\":\"84\"},{\"title\":\"Multiuser incremental decode‐and‐forward relaying under outdated channel estimates\",\"authors\":\"EE Ben�tez Olivo, DP Moya Osorio, DB da Costa, JCS Santos Filho\",\"publication\":\"Electronics Letters 51 (4), 369-371, 2015\",\"year\":\"2015\",\"citations\":\"7\"},{\"title\":\"Impact of outdated channel estimates on a distributed link-selection scheme for AF relaying networks\",\"authors\":\"DPM Osorio, EEB Olivo, DB da Costa, JCS Santos Filho\",\"publication\":\"IEEE Wireless Communications Letters 4 (2), 185-188, 2015\",\"year\":\"2015\",\"citations\":\"4\"},{\"title\":\"Spectrally efficient schemes for amplify-and-forward relay networks= Esquemas espectralmente eficientes para redes com retransmissores do tipo amplifica-e-encaminha\",\"authors\":\"DP Moya Osorio\",\"publication\":\"Doctoral Thesis, Universidade Estadual de Campinas-UNICAMP, 2015\",\"year\":\"2015\",\"citations\":\"\"},{\"title\":\"Outage performance of spectrally efficient schemes for multiuser cognitive relaying networks with underlay spectrum sharing\",\"authors\":\"EEB Olivo, DPM Osorio, DB da Costa, JCS Santos Filho\",\"publication\":\"IEEE Transactions on Wireless Communications 13 (12), 6629-6642, 2014\",\"year\":\"2014\",\"citations\":\"19\"},{\"title\":\"Outage analysis of a spectrally efficient scheme for multiuser cognitive relaying networks with spectrum sharing constraints\",\"authors\":\"EEB Olivo, DPM Osorio, DB da Costa, JCS Santos Filho\",\"publication\":\"2013 IEEE 24th Annual International Symposium on Personal, Indoor, and�…, 2013\",\"year\":\"2013\",\"citations\":\"7*\"},{\"title\":\"A distributed and spectrally efficient link selection scheme for multiuser multirelay networks with transmit beamforming\",\"authors\":\"DPM Osorio, EEB Olivo, DB da Costa, JCSS Filhot\",\"publication\":\"2013 IEEE 24th Annual International Symposium on Personal, Indoor, and�…, 2013\",\"year\":\"2013\",\"citations\":\"\"},{\"title\":\"Conditionally-Distributed Link Selection in Multiuser Multirelay Networks with Transmit Beamforming\",\"authors\":\"EMO Moya, EE Ben�tez Olivo, DB Costa, JCS Santos Filho\",\"publication\":\"https://www. sbrt. org. br/sbrt2013, 2013\",\"year\":\"2013\",\"citations\":\"\"},{\"title\":\"Outage analysis of a spectrum-sharing cognitive relaying network with improved spectral efficiency\",\"authors\":\"EEB Olivo, DPM Osorio, DB da Costa, JCS Santos Filho\",\"publication\":\"Proc. XXXI Brazilian Telecommunications Symposium, 2013\",\"year\":\"2013\",\"citations\":\"\"},{\"title\":\"Avalia�ao dos efeitos da interfer�ncia de co-canal e da diversidade de antenas na probabilidade de erro de bit para modula�oes m-qam em canais com desvanecimento rayleigh\",\"authors\":\"E Benıtez, D Moya, G Quelal, C de Almeida\",\"publication\":\"Brazilian Telecommunication Symposium, 2011\",\"year\":\"2011\",\"citations\":\"6\"},{\"title\":\"Simulador para avalia��o da efici�ncia espectral m�dia de redes celulares na presen�a de interfer�ncia de co-canal\",\"authors\":\"DP Moya Osorio\",\"publication\":\"Master’s thesis, Universidade Estadual de Campinas-UNICAMP, 2011\",\"year\":\"2011\",\"citations\":\"5*\"},{\"title\":\"Avalia��o da Efici�ncia Espectral M�dia para o Enlace Reverso de Redes Celulares na Presen�a de Interfer�ncia de Co-Canal\",\"authors\":\"DP Moya Osorio, EE Bentez, Q G., C de Almeida\",\"publication\":\"\",\"year\":\"2011\",\"citations\":\"\"},{\"title\":\"Prototipo de una tarjeta para el control y localizaci�n vehicular utilizando mensajes SMS\",\"authors\":\"D Moya, E Ben�tez, G Olmedo, J Larco\",\"publication\":\"MASKAY 1 (1), 1-9, 2011\",\"year\":\"2011\",\"citations\":\"\"},{\"title\":\"Evaluation of the effects of co-channel interference on the bit error rate for QPSK and M-QAM modulations\",\"authors\":\"E Ben�tez, G Quelal, D Moya, D Altamirano, C de Almeida\",\"publication\":\"Proc. 7th International Telecommunications Symposium, ITS 2010, 2010\",\"year\":\"2010\",\"citations\":\"3\"},{\"title\":\"DEPARTAMENTO DE EL�CTRICA Y ELECTRONICA\",\"authors\":\"LVU MENSAJES, EEB OLIVO, DPM OSORIO\",\"publication\":\"\",\"year\":\"2008\",\"citations\":\"\"},{\"title\":\"IEEE COMMUNICATIONS SOCIETY\",\"authors\":\"CB CHAE, J CHOI, X CHU, H DHILLON, I KRIKIDIS, M MATTHAIOU, ...\",\"publication\":\"\",\"year\":\"\",\"citations\":\"\"},{\"title\":\"Six key enablers for machine type communication in 6G. arXiv 2019\",\"authors\":\"NH Mahmood, H Alves, OA L�pez, M Shehab, DPM Osorio, M Latva-Aho\",\"publication\":\"arXiv preprint arXiv:1903.05406, 0\",\"year\":\"\",\"citations\":\"7\"}],\"lastUpdated\":\"2025-01-08T14:37:51.218Z\"}");

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map