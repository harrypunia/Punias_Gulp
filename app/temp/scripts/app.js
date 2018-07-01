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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/app.js":
/*!******************************!*\
  !*** ./app/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var lazyLoad = new Vue({\n    data: {\n        mobile: false,\n    },\n    methods: {\n        mobileCheck: function () {\n            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n                this.mobile = true;\n            } else {\n                this.mobile = false;\n            }\n        },\n        changeButton: function () {\n            var btn = document.getElementById('getInTouch');\n            btn.setAttribute('href', \"tel: +19311119814\");\n            btn.innerHTML = 'Call us now';\n        },\n        scrollToView: function (id, offset, addRemove, className) {\n            var object = document.getElementById(id),\n                objectPos = object.getBoundingClientRect().top,\n                y = window.pageYOffset;\n\n            if (addRemove == 'add') {\n                if (objectPos < offset) {\n                    object.classList.add(className);\n                }\n            } else if (addRemove == 'remove') {\n                if (objectPos < offset) {\n                    object.classList.remove(className);\n                }\n            }\n        },\n        scrollToViewFunctions: function () {\n            this.scrollToView('intro--heading', 550, 'add', 'lazy--opacity');\n            this.scrollToView('intro--para', 550, 'add', 'lazy--opacity');\n            this.scrollToView('erp__rows', 400, 'remove', 'lazy--rows');\n            this.scrollToView('services', 550, 'remove', 'lazy--services');\n            this.scrollToView('moreServices', 400, 'remove', 'lazy--more-services');\n        }\n    },\n    created: function () {\n        this.mobileCheck();\n        if (this.mobile == true) {\n            this.changeButton();\n        };\n        window.addEventListener(\"scroll\", this.scrollToViewFunctions, false);\n    }\n});\nvar parallax = new Vue({\n    methods: {\n        parallaxTranslate: function (id, val, startStop, target, dist) {\n            var targetPos = document.getElementById(target).getBoundingClientRect().top;\n\n            if (startStop = 'start') {\n                if (targetPos > dist) {\n                    id.style.transform = 'translate3d(0, ' + val + 'px, 0)';\n                }\n            }\n        },\n        parallaxDraw: function () {\n            var heroImg = document.getElementById('heroImg'),\n                heroText = document.getElementById('heroText'),\n                yPos = (window.pageYOffset / 4000),\n                intro = document.getElementById('intro');\n\n            this.parallaxTranslate(heroImg, (yPos * -1000), 'stop', 'intro', 200);\n            this.parallaxTranslate(heroText, (yPos * 1000), 'stop', 'intro', 600);\n\n            requestAnimationFrame(this.parallaxDraw);\n        }\n    },\n    created: function () {\n        window.addEventListener(\"DOMContentLoaded\", this.parallaxDraw, false);\n    },\n    destroyed: function () {\n        window.removeEventListener(\"DOMContentLoaded\", this.parallaxDraw, false);\n    }\n})\nvar services = new Vue({\n    el: '#services',\n    data: {\n        learn: false,\n        currElement: 'implement'\n    },\n    methods: {\n        resetActive: function () {\n            document.getElementById(this.currElement).classList.remove(\"active\");\n        },\n        showText: function (e) {\n            var id = e.currentTarget.id,\n                object = document.getElementById(id);\n\n            this.resetActive();\n            this.currElement = id;\n            object.classList.add(\"active\");\n        }\n    }\n});\nvar moreServices = new Vue({\n    el: '#moreServices',\n    data: {\n        active: false,\n        currListItem: 0,\n        services: [{\n            name: 'License',\n            description: 'We are official partners with SAP and provide licensing to our clients who do not have one and make the later processes quick and easy.'\n        }, {\n            name: 'Cloud',\n            description: 'PUNIAS is a partner of AWS, Microsoft Azure and Ctrl S. We provide cost effective cloud services on an of these platforms.'\n        }, {\n            name: 'JIRA',\n            description: 'We do JIRA implementation as per your business requirement with custom workflows. We have expert JIRA consultants who can configure everything as per your requirements.'\n        }, {\n            name: 'GSP/ASP',\n            description: 'We have partnered with WEP Technologies to deliver and GST solution which is integrated in SAP for handling all GST related work including preparation of returns, validation and filing on government portal.'\n        }, {\n            name: 'Business Analysis',\n            description: 'We provide services on Business Process Analysis for optimization of processes, resource utilization, Controls, SOD etc.'\n        }, {\n            name: 'Training',\n            description: 'We provide trainings in: 1. SAP User trainings in all modules. 2. MS-Excel Training. 3. MS-Word and Power-point Trainings.'\n        }, {\n            name: 'MS-Excel Macros',\n            description: 'PUNIAS has done projects on MS-Excel Macro tools for companies like KOHLER and Exicom. As of today many users are stuck with performing same complex tasks in Excel every day or week or month. We develop macros for such repetitive and complex excel worksheets thereby reducing time wasted on such manual excel work and saving lot of cost for the Company. We have developed and E-Way Bill tool using excel macros for generation of bulk e-way bills through government portal.'\n        }, {\n            name: 'Digitization',\n            description: 'Digitisation: We help organizations, digitise all their physical documents. For this we implement Document Management System, which has all built-in document features like accessibility controls; document search; document editing controls; document release workflows; document versions etc.'\n        }]\n    },\n    methods: {\n        switchServices: function (el, i) {\n            this.currListItem = i;\n            console.log(this.currListItem);\n            this.services.push();\n        }\n    }\n});\nvar team = new Vue({\n    el: '#team',\n    data: {\n        currEmployee: 0,\n        employees: [{\n            name: 'Baljit S. Punia',\n            designation: 'CEO',\n            smallImage: 'assets/img/employee1.jpg',\n            bigImage: 'assets/img/employee1-large.png',\n            quote: 'Being the owner of the organization, I make sure that you as a consumer get, hands down, the best services in the market.'\n        }, {\n            name: 'Harry Punia',\n            designation: 'General Manager',\n            smallImage: 'assets/img/employee2.jpg',\n            bigImage: '',\n            quote: \"Techinally i own the company but my father is running it. God damnit!\"\n        }, {\n            name: 'Dilsher Singh',\n            designation: 'HR Manager',\n            smallImage: 'assets/img/employee3.jpg',\n            bigImage: '',\n            quote: \"I'm just a firend of harry wandering in this website trying to figure my way otta here.\"\n        }, {\n            name: 'Riya Sachdeva',\n            designation: 'Head Developer',\n            smallImage: 'assets/img/employee4.jpg',\n            bigImage: '',\n            quote: 'I was born in delhi and literally became a friend of this dude over the internet. Guess 21st century is kicking it hard on us.'\n        }, ]\n    },\n    methods: {\n        switchEmployee: function (el, i) {\n            el.currentTarget.classList.add('active');\n            this.employees.push();\n            this.currEmployee = i;\n        }\n    }\n});\n\n//# sourceURL=webpack:///./app/assets/js/app.js?");

/***/ })

/******/ });