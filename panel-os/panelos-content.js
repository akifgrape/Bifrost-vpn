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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConfig = /*#__PURE__*/function () {
  function PosdConfig() {
    _classCallCheck(this, PosdConfig);
  }

  _createClass(PosdConfig, null, [{
    key: "CONFIG_PANELOS_VERSION",
    get: function get() {
      return '1.7.2';
    }
  }, {
    key: "CONFIG_PANEL_ID",
    get: function get() {
      return 1;
    }
  }, {
    key: "CONFIG_PARTNER_ID",
    get: function get() {
      return 10;
    }
  }, {
    key: "CONFIG_DISTRIBUTOR_ID",
    get: function get() {
      return 10;
    }
  }, {
    key: "CONFIG_PANELBACKEND_ENDPOINT",
    get: function get() {
      return 'https://analytics-toolbar.urban-vpn.com:40443';
    }
  }, {
    key: "CONFIG_PANELBACKEND_ENDPOINT_ULR_OUTTICKET",
    get: function get() {
      return '/tickets';
    }
  }, {
    key: "CONFIG_PANELBACKEND_ENDPOINT_ULR_INSTALL_EVENT",
    get: function get() {
      return '/install';
    }
  }, {
    key: "CONFIG_PANELBACKEND_ENDPOINT_ULR_CONFIGURATION",
    get: function get() {
      return '/configuration';
    }
  }, {
    key: "CONFIG_GLOBAL_ACTIVE_STATUS",
    get: function get() {
      return false;
    }
  }, {
    key: "CONFIG_USE_COMPRESSION",
    get: function get() {
      return true;
    }
  }, {
    key: "CONFIG_MARK_AD_CANDIDATES",
    get: function get() {
      return false;
    }
  }, {
    key: "CONFIG_MARK_PROCESSED_AD_CANDIDATES",
    get: function get() {
      return false;
    }
  }, {
    key: "CONFIG_ADBLOCKER_AVAILABLE",
    get: function get() {
      return true;
    }
  }, {
    key: "CONFIG_TARGET_URL_BY_CLICK_AVAILABLE",
    get: function get() {
      return true;
    }
  }, {
    key: "CONFIG_ANALYTIC_INSTALL_EVENTS_TRACING_AVAILABLE",
    get: function get() {
      return true;
    }
  }, {
    key: "CONFIG_ADBLOCK_INSPECTOR_AVAILABLE",
    get: function get() {
      return true;
    }
  }, {
    key: "CONFIG_UTILITY_HOST",
    get: function get() {
      return 'https://authentication.urban-vpn.com';
    }
  }]);

  return PosdConfig;
}();

module.exports = PosdConfig;

/***/ }),

/***/ "./src/content/AdBlockInspectorAgent.js":
/*!**********************************************!*\
  !*** ./src/content/AdBlockInspectorAgent.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdAdBlockInspectorAgent = /*#__PURE__*/function () {
  function PosdAdBlockInspectorAgent(id) {
    _classCallCheck(this, PosdAdBlockInspectorAgent);

    this.id = id;
    this.init = false;
    this.InspectorConfig = null;
  }

  _createClass(PosdAdBlockInspectorAgent, [{
    key: "Init",
    value: function Init(InspectorConfig) {
      this.InspectorConfig = InspectorConfig;

      if (!this.init && this.InspectorConfig && this.InspectorConfig.active) {
        this.init = true;
        setTimeout(this.CheckForActiveAdblocker.bind(this), this.GetAgentActivationTimeout() * 1000);
      }

      return this.init;
    }
  }, {
    key: "CheckForActiveAdblocker",
    value: function CheckForActiveAdblocker() {
      if (document.readyState === PosdConst.DOCUMENT_READYSTATE_LOADING) {
        document.addEventListener('DOMContentLoaded', this.CheckAdblockerActivityStatus.bind(this));
      } else if (document.readyState === PosdConst.DOCUMENT_READYSTATE_INTERACTIVE || document.readyState === PosdConst.DOCUMENT_READYSTATE_COMPLETE) {
        this.CheckAdblockerActivityStatus();
      }
    }
  }, {
    key: "CheckAdblockerActivityStatus",
    value: function CheckAdblockerActivityStatus() {
      var _this = this;

      var testAd = this.CreateDumpAdElement();
      setTimeout(function () {
        var report = {};
        report.hasActiveAdblock = _this.IsElementHidden(testAd);
        testAd.remove();
        PosdContentIOManager.SendAdBlockInspectorAgentReport(_this.id, report, null);
      }, this.GetAdblockerAdRemovingTimeout() * 1000);
    }
  }, {
    key: "IsElementHidden",
    value: function IsElementHidden(testAd) {
      return testAd.offsetHeight === 0;
    }
  }, {
    key: "CreateDumpAdElement",
    value: function CreateDumpAdElement() {
      var testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = this.GetAdblockerDetectionClassName();
      document.body.appendChild(testAd);
      return testAd;
    }
  }, {
    key: "GetAdblockerDetectionClassName",
    value: function GetAdblockerDetectionClassName() {
      return this.init && this.InspectorConfig && this.InspectorConfig.detectionClassName;
    }
  }, {
    key: "GetAgentActivationTimeout",
    value: function GetAgentActivationTimeout() {
      return this.init && this.InspectorConfig && this.InspectorConfig.agentActivationTimeoutSec;
    }
  }, {
    key: "GetAdblockerAdRemovingTimeout",
    value: function GetAdblockerAdRemovingTimeout() {
      return this.init && this.InspectorConfig && this.InspectorConfig.adRemovingTimeoutSec;
    }
  }]);

  return PosdAdBlockInspectorAgent;
}();

module.exports = PosdAdBlockInspectorAgent;

/***/ }),

/***/ "./src/content/AdBlockerAgent.js":
/*!***************************************!*\
  !*** ./src/content/AdBlockerAgent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdAdBlockerAgent = /*#__PURE__*/function () {
  function PosdAdBlockerAgent(id, IOManager) {
    _classCallCheck(this, PosdAdBlockerAgent);

    this.id = id;
    this.IOManager = IOManager;
    this.init = false;
    this.tabId = null;
    this.status = PosdCommon.GetDefaultAdblockerStatus();

    if (this.IOManager) {
      this.IOManager.onAdBlockerStatusChanged = this.onAdBlockerStatusChanged.bind(this);
    }
  }

  _createClass(PosdAdBlockerAgent, [{
    key: "GetStatus",
    value: function GetStatus() {
      return this.status;
    }
  }, {
    key: "Init",
    value: function Init(abBlockerStatus, tabId) {
      if (!this.init && PosdConfig.CONFIG_ADBLOCKER_AVAILABLE) {
        this.tabId = tabId;
        this.status = abBlockerStatus;
        this.init = true;
      }

      return this.init;
    }
  }, {
    key: "onAdBlockerStatusChanged",
    value: function onAdBlockerStatusChanged(status) {
      this.status = status;
    }
  }, {
    key: "SetHiddenAmount",
    value: function SetHiddenAmount(hiddenAmount) {
      if (hiddenAmount > 0) {
        PosdContentIOManager.SendHiddenAdCandidatesAmount(this.id, hiddenAmount);
      }
    }
  }, {
    key: "IsEnabled",
    value: function IsEnabled() {
      return this.init && PosdConfig.CONFIG_ADBLOCKER_AVAILABLE && this.status[PosdConst.ADBLOCKER_FOR_DISPLAY] === PosdConst.ADBLOCKER_STATUS_ENABLED;
    }
  }, {
    key: "IsEnabledForFacebook",
    value: function IsEnabledForFacebook() {
      return this.init && PosdConfig.CONFIG_ADBLOCKER_AVAILABLE && this.status[PosdConst.ADBLOCKER_FOR_FACEBOOK] === PosdConst.ADBLOCKER_STATUS_ENABLED;
    }
  }, {
    key: "IsEnabledForTwitter",
    value: function IsEnabledForTwitter() {
      return this.init && PosdConfig.CONFIG_ADBLOCKER_AVAILABLE && this.status[PosdConst.ADBLOCKER_FOR_TWITTER] === PosdConst.ADBLOCKER_STATUS_ENABLED;
    }
  }]);

  return PosdAdBlockerAgent;
}();

module.exports = PosdAdBlockerAgent;

/***/ }),

/***/ "./src/content/AdsCandidates.js":
/*!**************************************!*\
  !*** ./src/content/AdsCandidates.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdAdsCandidates = /*#__PURE__*/function () {
  function PosdAdsCandidates(id) {
    _classCallCheck(this, PosdAdsCandidates);

    this.id = id;
    this.active = false;
    this.candidates = [];
    this.hiddenAmount = 0;
    this.pageUrl = "";
    this.ticketId = "";
    this.onPageRefreshed = null;
  }

  _createClass(PosdAdsCandidates, [{
    key: "Activated",
    value: function Activated() {
      this.active = true;
    }
  }, {
    key: "CandidateHidden",
    value: function CandidateHidden() {
      this.hiddenAmount = this.hiddenAmount + 1;
    }
  }, {
    key: "ClearHiddenCounter",
    value: function ClearHiddenCounter() {
      this.hiddenAmount = 0;
    }
  }, {
    key: "ClearCandidates",
    value: function ClearCandidates() {
      this.candidates = [];
    }
  }, {
    key: "AddCandidate",
    value: function AddCandidate(candidat) {
      this.candidates.push(candidat);
    }
  }, {
    key: "PageRefreshed",
    value: function PageRefreshed(pageUrl, ticketId) {
      this.pageUrl = pageUrl;
      this.ticketId = ticketId;

      if (this.onPageRefreshed) {
        this.onPageRefreshed(pageUrl, ticketId);
      }
    }
  }, {
    key: "CandidatesCount",
    get: function get() {
      return this.candidates.length;
    }
  }, {
    key: "Candidates",
    get: function get() {
      return this.candidates;
    }
  }, {
    key: "HiddenAmount",
    get: function get() {
      return this.hiddenAmount;
    }
  }, {
    key: "PageUrl",
    get: function get() {
      return this.pageUrl;
    }
  }, {
    key: "TicketId",
    get: function get() {
      return this.ticketId;
    }
  }, {
    key: "IsActive",
    get: function get() {
      return this.active;
    }
  }, {
    key: "Context",
    get: function get() {
      return this;
    }
  }]);

  return PosdAdsCandidates;
}();

module.exports = PosdAdsCandidates;

/***/ }),

/***/ "./src/content/AdsManager.js":
/*!***********************************!*\
  !*** ./src/content/AdsManager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdSkinAds = __webpack_require__(/*! ./SkinAds */ "./src/content/SkinAds.js");

var PosdBannerAds = __webpack_require__(/*! ./BannerAds */ "./src/content/BannerAds.js");

var PosdHTML5Ads = __webpack_require__(/*! ./HTML5Ads */ "./src/content/HTML5Ads.js");

var PosdVideoAds = __webpack_require__(/*! ./VideoAds */ "./src/content/VideoAds.js");

var PosdFacebookAds = __webpack_require__(/*! ./FacebookAds */ "./src/content/FacebookAds.js");

var PosdTwitterAds = __webpack_require__(/*! ./TwitterAds */ "./src/content/TwitterAds.js");

var PosdAdsManager = /*#__PURE__*/function () {
  function PosdAdsManager(id, Config, IOManager, AdBlockerAgent) {
    _classCallCheck(this, PosdAdsManager);

    this.id = id;
    this.Config = Config;
    this.AdBlockerAgent = AdBlockerAgent;
    this.IOManager = IOManager;
    this.PageUrl = document.location.href;
    this.FacebookAds = null;
    this.TwitterAds = null;
    this.SkinAds = null;
    this.HTML5Ads = null;
    this.VideoAds = null;
    this.IsBlacklistedPublisher = PosdCommon.IsPublisherInBlacklist(this.PageUrl, this.Config.GetBlacklistPublishers());

    if (PosdCommon.IsFacebookUrl(this.PageUrl)) {
      this.FacebookAds = new PosdFacebookAds(id, this.Config, this.IOManager, this.AdBlockerAgent);
    } else if (PosdCommon.IsTwitterUrl(this.PageUrl)) {
      this.TwitterAds = new PosdTwitterAds(id, this.Config, this.IOManager, this.AdBlockerAgent);
    } else {
      this.SkinAds = new PosdSkinAds(id, this.Config, this.IOManager, this.AdBlockerAgent);
      this.BannerAds = new PosdBannerAds(id, this.Config, this.IOManager, this.AdBlockerAgent);
      this.HTML5Ads = new PosdHTML5Ads(id, this.Config, this.IOManager, this.AdBlockerAgent);
      this.VideoAds = new PosdVideoAds(id, this.Config, this.IOManager, !this.IsBlacklistedPublisher);
    }
  }

  _createClass(PosdAdsManager, [{
    key: "ActivateAdsdetectors",
    value: function ActivateAdsdetectors() {
      if (document.readyState === PosdConst.DOCUMENT_READYSTATE_LOADING) {
        document.addEventListener('DOMContentLoaded', this.StartAdsdetectors.bind(this));
      } else if (document.readyState === PosdConst.DOCUMENT_READYSTATE_INTERACTIVE || document.readyState === PosdConst.DOCUMENT_READYSTATE_COMPLETE) {
        this.StartAdsdetectors();
      }
    }
  }, {
    key: "StartAdsdetectors",
    value: function StartAdsdetectors() {
      if (!this.IsBlacklistedPublisher) {
        if (this.SkinAds) {
          this.SkinAds.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }

        if (this.BannerAds) {
          this.BannerAds.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }

        if (this.HTML5Ads) {
          this.HTML5Ads.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }

        if (this.VideoAds) {
          this.VideoAds.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }

        if (this.FacebookAds) {
          this.FacebookAds.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }

        if (this.TwitterAds) {
          this.TwitterAds.ActivateDetector(PosdConst.ACTIVATION_BY_ADS_MANAGER);
        }
      } else {}
    }
  }, {
    key: "PageRefreshed",
    value: function PageRefreshed(pageUrl, ticketId) {
      if (this.SkinAds) {
        this.SkinAds.PageRefreshed(pageUrl, ticketId);
      }

      if (this.BannerAds) {
        this.BannerAds.PageRefreshed(pageUrl, ticketId);
      }

      if (this.HTML5Ads) {
        this.HTML5Ads.PageRefreshed(pageUrl, ticketId);
      }

      if (this.VideoAds) {
        this.VideoAds.PageRefreshed(pageUrl, ticketId);
      }

      if (this.FacebookAds) {
        this.FacebookAds.PageRefreshed(pageUrl, ticketId);
      }

      if (this.TwitterAds) {
        this.TwitterAds.PageRefreshed(pageUrl, ticketId);
      }
    }
  }, {
    key: "GetHtml5CandidatesPrebildInfo",
    value: function GetHtml5CandidatesPrebildInfo() {
      if (this.HTML5Ads && this.HTML5Ads.IsActive) {
        return this.HTML5Ads.GetPrebildInfo();
      }

      return [];
    }
  }]);

  return PosdAdsManager;
}();

module.exports = PosdAdsManager;

/***/ }),

/***/ "./src/content/AtrMessageListener.js":
/*!*******************************************!*\
  !*** ./src/content/AtrMessageListener.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdMessage = __webpack_require__(/*! ../libs/Message */ "./src/libs/Message.js");

var PosdAtrMessageListener = /*#__PURE__*/function () {
  function PosdAtrMessageListener(id, onGotWindowMessageCallback) {
    _classCallCheck(this, PosdAtrMessageListener);

    this.id = id;
    this.onGotWindowMessageCallback = onGotWindowMessageCallback;
    this.mesToFrameDeactivationIntervalId = null;
  }

  _createClass(PosdAtrMessageListener, [{
    key: "SetId",
    value: function SetId(id) {
      this.id = id;
    }
  }, {
    key: "ActivateMesToFrameContentListener",
    value: function ActivateMesToFrameContentListener(expectedMesTypeRespond) {
      if (!this.mesToFrameDeactivationIntervalId) {
        this.mesToFrameDeactivationIntervalId = setInterval(this.CheckMesToFrameContent.bind(this), 300);
        setTimeout(this.DeactivateMesToFrameContentListener.bind(this), 3000);
      } else {}
    }
  }, {
    key: "CheckMesToFrameContent",
    value: function CheckMesToFrameContent() {
      try {
        var mesToFrameContent = document.body.getAttribute('bis_mes_to_fr');

        if (mesToFrameContent && mesToFrameContent) {
          var mes = JSON.parse(mesToFrameContent);
          document.body.setAttribute('bis_mes_to_fr', '');

          if (PosdMessage.IsValid(mes) && this.onGotWindowMessageCallback) {
            this.onGotWindowMessageCallback(mes);
          }

          this.DeactivateMesToFrameContentListener();
        }
      } catch (e) {}
    }
  }, {
    key: "DeactivateMesToFrameContentListener",
    value: function DeactivateMesToFrameContentListener() {
      if (this.mesToFrameDeactivationIntervalId) {
        clearInterval(this.mesToFrameDeactivationIntervalId);
        this.mesToFrameDeactivationIntervalId = null;
      }
    }
  }]);

  return PosdAtrMessageListener;
}();

module.exports = PosdAtrMessageListener;

/***/ }),

/***/ "./src/content/BannerAds.js":
/*!**********************************!*\
  !*** ./src/content/BannerAds.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdAdsCandidates = __webpack_require__(/*! ./AdsCandidates */ "./src/content/AdsCandidates.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdBannerAds = /*#__PURE__*/function (_PosdAdsCandidates) {
  _inherits(PosdBannerAds, _PosdAdsCandidates);

  function PosdBannerAds(id, Config, IOManager, AdBlockerAgent) {
    var _this;

    _classCallCheck(this, PosdBannerAds);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PosdBannerAds).call(this, id));
    _this.Config = Config;
    _this.IOManager = IOManager;
    _this.IOManager.onGotBannerCandidatesExtractionStatusesCallback = _this.onGoBannerCandidatesExtractionStatuses.bind(_assertThisInitialized(_this));
    _this.AdBlockerAgent = AdBlockerAgent;
    return _this;
  }

  _createClass(PosdBannerAds, [{
    key: "ActivateDetector",
    value: function ActivateDetector() {
      var _this2 = this;

      this.DetectCandidates();
      setTimeout(function () {
        _this2.DetectCandidates();
      }, 350);
      setInterval(function () {
        _this2.DetectCandidates();
      }, 700);
    }
  }, {
    key: "PushCandidate",
    value: function PushCandidate(candidatHtml, bisId) {
      var candidate = {
        bisId: bisId,
        content: PosdBase64.encode(candidatHtml)
      };
      this.AddCandidate(candidate);
    }
  }, {
    key: "IsValidCandidateSize",
    value: function IsValidCandidateSize(rectData) {
      if (rectData && rectData.width > 70 && rectData.height > 40 && rectData.height < 1100) {
        return true;
      }

      return false;
    }
  }, {
    key: "HideCandidate",
    value: function HideCandidate(el) {
      if (el && this.AdBlockerAgent.IsEnabled()) {
        PosdCommon.HideElement(el);
        this.CandidateHidden();
      }
    }
  }, {
    key: "SetBorderToCandidate",
    value: function SetBorderToCandidate(el) {
      if (el && PosdConfig.CONFIG_MARK_AD_CANDIDATES && !this.AdBlockerAgent.IsEnabled()) {
        if (PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES) {
          el.style.cssText += 'border: 6px solid blueviolet !important;';
        } else {
          el.style.cssText += 'border: 6px solid red !important;';
        }
      }
    }
  }, {
    key: "SendCandidatesToBackground",
    value: function SendCandidatesToBackground() {
      if (this.Candidates.length) {
        if (this.AdBlockerAgent.IsEnabled()) {
          this.AdBlockerAgent.SetHiddenAmount(this.HiddenAmount);
        }

        PosdContentIOManager.SendBannersCandidates(this.id, this.Candidates, null);
      }
    }
  }, {
    key: "DetectCandidates",
    value: function DetectCandidates() {
      if (this.AdBlockerAgent.IsEnabled()) {
        this.ClearHiddenCounter();
      }

      this.ClearCandidates();
      var fullImgCollection = PosdCommon.QuerySelectorAll(document, "A[href]:not([bis_size]) > img:not([bis_size])");

      for (var i = 0; i < fullImgCollection.length; i++) {
        var img = fullImgCollection[i];
        var imgSrc = img.src.toLowerCase();
        var a = fullImgCollection[i].parentNode;
        var aHref = a.href.toLowerCase();
        var isCandidate = false;

        if (!PosdCommon.IsInFilterList(this.Config.GetBlacklistBannerHref(), aHref) && !PosdCommon.IsInFilterList(this.Config.GetBlacklistBannerImgSrc(), imgSrc)) {
          if (PosdCommon.IsUrl(imgSrc) && PosdCommon.IsUrl(aHref) && !PosdCommon.IsUrlFromHost(document.location.host, aHref)) {
            isCandidate = true;
          } else if (PosdCommon.IsInFilterList(this.Config.GetWhitelistCandidatesUrlKeyWords(), imgSrc) || PosdCommon.IsInFilterList(this.Config.GetWhitelistCandidatesUrlKeyWords(), aHref)) {
            isCandidate = true;
          }
        }

        if (isCandidate) {
          var rectData = img.getBoundingClientRect();

          if (this.IsValidCandidateSize(rectData)) {
            this.SetBorderToCandidate(img);
            PosdCommon.SetFullSizeToElement(img);
            PosdCommon.SetFullSizeToElement(a);
            var bisId = PosdCommon.GenerateAndSetBisIdToBanner(img);
            this.PushCandidate(a.outerHTML, bisId);
            this.HideCandidate(img);
          }
        }
      }

      var imgCollection = PosdCommon.QuerySelectorAll(document, "img[onclick][onload][src]:not([bis_size])");

      for (var _i = 0; _i < imgCollection.length; _i++) {
        var _img = imgCollection[_i];

        var _imgSrc = _img.src.toLowerCase();

        if (!PosdCommon.IsInFilterList(this.Config.GetBlacklistBannerImgSrc(), _imgSrc)) {
          if (PosdCommon.IsUrl(_imgSrc) && !PosdCommon.IsUrlFromHost(document.location.host, _imgSrc) || PosdCommon.IsInFilterList(this.Config.GetWhitelistCandidatesUrlKeyWords(), _imgSrc)) {
            var _rectData = _img.getBoundingClientRect();

            if (this.IsValidCandidateSize(_rectData)) {
              this.SetBorderToCandidate(_img);
              PosdCommon.SetFullSizeToElement(_img);

              var _bisId = PosdCommon.GenerateAndSetBisIdToBanner(_img);

              this.PushCandidate(_img.outerHTML, _bisId);
              this.HideCandidate(_img);
            }
          }
        }
      }

      this.SendCandidatesToBackground();
    }
  }, {
    key: "onGoBannerCandidatesExtractionStatuses",
    value: function onGoBannerCandidatesExtractionStatuses(statuses) {
      if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES && statuses && statuses.length && !this.AdBlockerAgent.IsEnabled()) {
        for (var i = 0; i < statuses.length; i++) {
          var banner = PosdCommon.QuerySelector(document, "*[bis_id=\"".concat(statuses[i].bannerId, "\"]"));

          if (banner) {
            PosdCommon.UpdateCandidateStatusBorderColor(banner, statuses[i].extractionStatus);
          }
        }
      }
    }
  }]);

  return PosdBannerAds;
}(PosdAdsCandidates);

module.exports = PosdBannerAds;

/***/ }),

/***/ "./src/content/ConfigAgent.js":
/*!************************************!*\
  !*** ./src/content/ConfigAgent.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdConfigAgent = /*#__PURE__*/function () {
  function PosdConfigAgent(id, configEncoded) {
    _classCallCheck(this, PosdConfigAgent);

    this.id = id;
    this.configEncoded = configEncoded;
    this.config = JSON.parse(PosdBase64.decode(configEncoded));
  }

  _createClass(PosdConfigAgent, [{
    key: "GetConfigEncoded",
    value: function GetConfigEncoded() {
      return this.configEncoded;
    }
  }, {
    key: "GetBlacklistPublishers",
    value: function GetBlacklistPublishers() {
      return this.config.blacklistPublishers;
    }
  }, {
    key: "GetBlacklistBannerImgSrc",
    value: function GetBlacklistBannerImgSrc() {
      return this.config.blacklistBannerImgSrc;
    }
  }, {
    key: "GetBlacklistBannerHref",
    value: function GetBlacklistBannerHref() {
      return this.config.blacklistBannerHref;
    }
  }, {
    key: "GetBlacklistIframeSrc",
    value: function GetBlacklistIframeSrc() {
      return this.config.blacklistIframeSrc;
    }
  }, {
    key: "GetBlacklistIframeId",
    value: function GetBlacklistIframeId() {
      return this.config.blacklistIframeId;
    }
  }, {
    key: "GetBlacklistTargetUrl",
    value: function GetBlacklistTargetUrl() {
      return this.config.blacklistTargetUrl;
    }
  }, {
    key: "GetWhitelistCandidatesUrlKeyWords",
    value: function GetWhitelistCandidatesUrlKeyWords() {
      return this.config.whitelistCandidatesUrlKeyWords;
    }
  }, {
    key: "GetWhitelistRedirectionCode",
    value: function GetWhitelistRedirectionCode() {
      return this.config.whitelistRedirectionCode;
    }
  }, {
    key: "GetVideoValidatorsForHTML",
    value: function GetVideoValidatorsForHTML() {
      return this.config.videoValidatorsForHTML;
    }
  }, {
    key: "GetVideoValidatorsForJS",
    value: function GetVideoValidatorsForJS() {
      return this.config.videoValidatorsForJS;
    }
  }, {
    key: "GetVideoValidatorsForXHR",
    value: function GetVideoValidatorsForXHR() {
      return this.config.videoValidatorsForXHR;
    }
  }, {
    key: "GetFacebookConfig",
    value: function GetFacebookConfig() {
      return this.config.facebookConfig;
    }
  }, {
    key: "GetTwitterConfig",
    value: function GetTwitterConfig() {
      return this.config.twitterConfig;
    }
  }, {
    key: "GetAdBlockInspectorConfig",
    value: function GetAdBlockInspectorConfig() {
      return this.config.adBlockInspectorConfig;
    }
  }]);

  return PosdConfigAgent;
}();

module.exports = PosdConfigAgent;

/***/ }),

/***/ "./src/content/ContentIOManager.js":
/*!*****************************************!*\
  !*** ./src/content/ContentIOManager.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdMessage = __webpack_require__(/*! ../libs/Message */ "./src/libs/Message.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdContentIOManager = /*#__PURE__*/function () {
  function PosdContentIOManager(id) {
    _classCallCheck(this, PosdContentIOManager);

    this.id = id;
    this.init = false;
    this.onGotHTML5CandidatesExtractionStatusesCallback = null;
    this.onGotBannerCandidatesExtractionStatusesCallback = null;
    this.onGotVideoXHRTrafficCallback = null;
    this.onAdBlockerStatusChanged = null;
    this.onTabUrlChanged = null;
  }

  _createClass(PosdContentIOManager, [{
    key: "IsInit",
    value: function IsInit() {
      return this.init;
    }
  }, {
    key: "Init",
    value: function Init() {
      var _this = this;

      if (!this.init) {
        this.init = true;
        window.addEventListener("message", function (event) {
          try {
            var mes = event.data;

            if (PosdMessage.IsValid(mes)) {
              if (mes.type === PosdConst.MESSAGE_TYPE_VIDEO_XHR_CANDIDATE) {
                if (_this.onGotVideoXHRTrafficCallback) {
                  _this.onGotVideoXHRTrafficCallback(mes.content);
                }
              } else if (mes.type === PosdConst.MESSAGE_TYPE_FACEBOOK_VIDEO_DATA) {
                if (PosdCommon.IsFBVideoDataValid(mes.content)) {
                  PosdContentIOManager.SendFBVideoData(_this.id, mes.content);
                } else {}
              }
            } else {}
          } catch (e) {}
        }, false);

        if (PosdCommon.IsOnChromeRuntime()) {
          chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            var mes = request;

            if (PosdMessage.IsValid(mes) && mes.to === _this.id) {
              if (mes.type === PosdConst.MESSAGE_TYPE_HTML5_CANDIDATES_EXTRACTION_STATUSES) {
                if (_this.onGotHTML5CandidatesExtractionStatusesCallback) {
                  _this.onGotHTML5CandidatesExtractionStatusesCallback(mes.content);
                }
              } else if (mes.type === PosdConst.MESSAGE_TYPE_BANNER_CANDIDATES_EXTRACTION_STATUSES) {
                if (_this.onGotBannerCandidatesExtractionStatusesCallback) {
                  _this.onGotBannerCandidatesExtractionStatusesCallback(mes.content);
                }
              } else if (mes.type === PosdConst.MESSAGE_TYPE_TAB_URL_CHANGED) {
                if (_this.onTabUrlChanged) {
                  _this.onTabUrlChanged(mes.content);
                }
              } else if (mes.type === PosdConst.MESSAGE_TYPE_TAB_ADBLOCKER_STATUS_CHANGED) {
                if (_this.onAdBlockerStatusChanged) {
                  _this.onAdBlockerStatusChanged(mes.content);
                }
              }
            } else {}
          });
        }
      }
    }
  }, {
    key: "SendTicket",
    value: function SendTicket(ticket) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_OUT_TICKET;
      mes.from = this.id;
      mes.to = 'bg';
      mes.content = ticket;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes, this.onTicketSend.bind(this));
      }
    }
  }, {
    key: "onTicketSend",
    value: function onTicketSend(response) {
      if (response && response.status) {}
    }
  }], [{
    key: "SendHiddenAdCandidatesAmount",
    value: function SendHiddenAdCandidatesAmount(id, amount) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_HIDDEN_AD_CANDIDATES_AMOUNT;
      mes.from = id;
      mes.to = 'bg';
      mes.content = amount;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendInitMes",
    value: function SendInitMes(initData, onGetInitConfig) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_TAB_INITIALIZATION;
      mes.to = 'bg';
      mes.content = initData;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes, function (response) {
          if (response && response.config && onGetInitConfig) {
            onGetInitConfig(response.config);
          }
        });
      }
    }
  }, {
    key: "SendSinglePageReinitMes",
    value: function SendSinglePageReinitMes(reInitData) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_TAB_SINGLE_PAGE_REINITIALIZATION;
      mes.to = 'bg';
      mes.content = reInitData;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendNewPageCreatedTicket",
    value: function SendNewPageCreatedTicket(ticket) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_NEW_PAGE_CREATED_TICKET;
      mes.to = 'bg';
      mes.content = ticket;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendPanelRegulatorResult",
    value: function SendPanelRegulatorResult(isMaster) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_PANEL_REGULATOR_RESULT;
      mes.to = 'bg';
      mes.content = isMaster;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendMesToBackground",
    value: function SendMesToBackground(id, mesType, mesContent, onSentCallBack) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = mesType;
      mes.from = id;
      mes.to = 'bg';
      mes.content = mesContent;

      if (PosdCommon.IsOnChromeRuntime()) {
        if (onSentCallBack) {
          chrome.runtime.sendMessage(mes, onSentCallBack);
        } else {
          chrome.runtime.sendMessage(mes);
        }
      }
    }
  }, {
    key: "SendSkinAdsCandidates",
    value: function SendSkinAdsCandidates(id, skinAdsCandidates, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATES_DATA_SKINADS, skinAdsCandidates, onSentCallBack);
    }
  }, {
    key: "SendBannersCandidates",
    value: function SendBannersCandidates(id, bannerCandidates, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATES_DATA_BANNERS, bannerCandidates, onSentCallBack);
    }
  }, {
    key: "SendFacebookCandidates",
    value: function SendFacebookCandidates(id, facebookCandidates, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATES_DATA_FACEBOOK, facebookCandidates, onSentCallBack);
    }
  }, {
    key: "SendTwitterCandidates",
    value: function SendTwitterCandidates(id, candidates, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATES_DATA_TWITTER, candidates, onSentCallBack);
    }
  }, {
    key: "SendFacebookCandidatePlacements",
    value: function SendFacebookCandidatePlacements(id, facebookCandidatePlacements, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATE_PLACEMENTS_FACEBOOK, facebookCandidatePlacements, onSentCallBack);
    }
  }, {
    key: "SendTwitterCandidatePlacements",
    value: function SendTwitterCandidatePlacements(id, twitterCandidatePlacements, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATE_PLACEMENTS_TWITTER, twitterCandidatePlacements, onSentCallBack);
    }
  }, {
    key: "SendHtml5CandidatePlacements",
    value: function SendHtml5CandidatePlacements(id, html5CandidatePlacements, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_CANDIDATE_PLACEMENTS_HTML5, html5CandidatePlacements, onSentCallBack);
    }
  }, {
    key: "SendTestMes",
    value: function SendTestMes(id, test, onSentCallBack) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_TEST, test, onSentCallBack);
    }
  }, {
    key: "SendAdBlockInspectorAgentReport",
    value: function SendAdBlockInspectorAgentReport(id, mes) {
      PosdContentIOManager.SendMesToBackground(id, PosdConst.MESSAGE_TYPE_ADBLOCK_INSPECTOR_AGENT_REPORT, mes, null);
    }
  }, {
    key: "SendVideoHar",
    value: function SendVideoHar(id, videoTraffic) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_VIDEO_HAR;
      mes.from = id;
      mes.to = 'bg';
      mes.content = videoTraffic;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendFBVideoData",
    value: function SendFBVideoData(id, fbVidoeData) {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_FACEBOOK_VIDEO_DATA;
      mes.from = id;
      mes.to = 'bg';
      mes.content = fbVidoeData;

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }]);

  return PosdContentIOManager;
}();

module.exports = PosdContentIOManager;

/***/ }),

/***/ "./src/content/ContentValidator.js":
/*!*****************************************!*\
  !*** ./src/content/ContentValidator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdContentValidator = /*#__PURE__*/function () {
  function PosdContentValidator(chainId, frameId, bisId, Config) {
    _classCallCheck(this, PosdContentValidator);

    this.init = false;
    this.Config = Config;
    this.chainId = chainId;
    this.frameId = frameId;
    this.bisId = bisId;
    this.documentObj = null;
    this.onInputsDetectedCallback = null, this.onRedirectsDetectedCallback = null, this.detectedValidationInfo = {
      inputs: false,
      redirect: false
    };
  }

  _createClass(PosdContentValidator, [{
    key: "Init",
    value: function Init(documentObj, onInputsDetectedCallback, onRedirectsDetectedCallback) {
      if (!this.init && documentObj) {
        this.init = true;
        this.fullIdStr = PosdCommon.GetFullIdStr(this.chainId, this.frameId, this.bisId);
        this.documentObj = documentObj;
        this.onInputsDetectedCallback = onInputsDetectedCallback, this.onRedirectsDetectedCallback = onRedirectsDetectedCallback, void 0;
        this.ValidateContent();
      }

      return this.init;
    }
  }, {
    key: "ValidateContent",
    value: function ValidateContent() {
      if (!this.detectedValidationInfo.inputs) {
        var inputsAmount = this.GetInputsAmount();

        if (inputsAmount > 0) {
          this.detectedValidationInfo.inputs = true;

          if (this.onInputsDetectedCallback) {
            this.onInputsDetectedCallback();
          }
        }
      }

      if (!this.detectedValidationInfo.redirect) {
        if (this.HasRedirect()) {
          this.detectedValidationInfo.redirect = true;

          if (this.onRedirectsDetectedCallback) {
            this.onRedirectsDetectedCallback();
          }
        }
      }
    }
  }, {
    key: "GetInputsAmount",
    value: function GetInputsAmount() {
      var amount = 0;

      try {
        var inputs = PosdCommon.QuerySelectorAll(this.documentObj, 'input');

        if (inputs && inputs.length) {
          inputs.forEach(function (el) {
            var size = el.getBoundingClientRect();

            if (size.width > 0 && size.height > 0) {
              amount = amount + 1;
            }
          });
        }
      } catch (e) {}

      return amount;
    }
  }, {
    key: "IsWhiteListedRedirectionCode",
    value: function IsWhiteListedRedirectionCode(content) {
      var isWhiteListed = false;

      try {
        if (content && content.length && this.Config && this.Config.GetWhitelistRedirectionCode) {
          var whitelistRedirectionCode = this.Config.GetWhitelistRedirectionCode();

          for (var i = 0; i < whitelistRedirectionCode.length && !isWhiteListed; i++) {
            if (content.includes(whitelistRedirectionCode[i])) {
              isWhiteListed = true;
            }
          }
        } else {}
      } catch (e) {}

      return isWhiteListed;
    }
  }, {
    key: "HasRedirect",
    value: function HasRedirect() {
      var result = false;
      var scripts = PosdCommon.QuerySelectorAll(this.documentObj, 'script');

      for (var i = 0; i < scripts.length && !result; i++) {
        var content = scripts[i].innerHTML;

        if (content.length && content.includes('location.replace')) {
          if (this.IsWhiteListedRedirectionCode(content)) {
            result = false;
          } else {
            result = true;
          }
        }
      }

      return result;
    }
  }]);

  return PosdContentValidator;
}();

module.exports = PosdContentValidator;

/***/ }),

/***/ "./src/content/FacebookAds.js":
/*!************************************!*\
  !*** ./src/content/FacebookAds.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdAdsCandidates = __webpack_require__(/*! ./AdsCandidates */ "./src/content/AdsCandidates.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdFacebookVideoDetector = __webpack_require__(/*! ./FacebookVideoDetector */ "./src/content/FacebookVideoDetector.js");

var PosdFacebookAds = /*#__PURE__*/function (_PosdAdsCandidates) {
  _inherits(PosdFacebookAds, _PosdAdsCandidates);

  function PosdFacebookAds(id, Config, IOManager, AdBlockerAgent) {
    var _this;

    _classCallCheck(this, PosdFacebookAds);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PosdFacebookAds).call(this, id));
    _this.available = false;
    _this.onPageRefreshed = _this.onPageUrlChanged;
    _this.fbConfig = Config.GetFacebookConfig();
    _this.IOManager = IOManager;
    _this.AdBlockerAgent = AdBlockerAgent;
    _this.fbContentObserver = null;
    _this.fbFeedObserver = null;
    _this.fbFeedObserverActive = false;
    _this.fbFeed = null;
    _this.feedDetectorInterval = null;
    _this.designVersion = null;
    return _this;
  }

  _createClass(PosdFacebookAds, [{
    key: "onPageUrlChanged",
    value: function onPageUrlChanged(pageUrl, ticketId) {
      var _this2 = this;

      if (this.available) {
        setTimeout(function () {
          _this2.DetectFeedFacebookAds(PosdConst.AD_DETECTOR_INITIATOR_PAGECHANGE);
        }, 100);
      }
    }
  }, {
    key: "CheckIfAd",
    value: function CheckIfAd(post) {
      var _this3 = this;

      if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
        return this.fbConfig.possibleSponsoredTextQueries.some(function (query) {
          var result = post.querySelectorAll(query);
          return _toConsumableArray(result).some(function (t) {
            var isAd = false;
            var visibleText = '';
            var rawVisibleText = PosdFacebookAds.GetVisibleText(t);

            if (typeof rawVisibleText === "string") {
              visibleText = rawVisibleText;
            } else if (rawVisibleText.join) {
              visibleText = rawVisibleText.join('');
            }

            if (_this3.fbConfig.sponsoredTexts.some(function (sponsoredText) {
              return visibleText.indexOf(sponsoredText) !== -1;
            })) {
              t.setAttribute('bis_label', 'fb_feed_ad');
              isAd = true;
            }

            if (!isAd) {
              var deepText = PosdFacebookAds.GetVisibleSpansText(t, _this3.fbConfig.visibleSpansText);

              if (deepText !== visibleText) {
                if (_this3.fbConfig.sponsoredTexts.some(function (sponsoredText) {
                  return deepText.indexOf(sponsoredText) !== -1;
                })) {
                  t.setAttribute('bis_label', 'fb_feed_ad');
                  isAd = true;
                }
              }
            }

            return isAd;
          });
        });
      } else {
        var result = false;
        var links = post.querySelectorAll(this.fbConfig.possibleSponsoredTextQueriesNew);

        for (var i = 0; i < links.length && !result; i++) {
          var text = links[i].innerText;

          if (typeof text === "string" && text.length && this.fbConfig.sponsoredTexts.some(function (sponsoredText) {
            return text.includes(sponsoredText);
          })) {
            links[i].setAttribute('bis_label', 'fb_feed_ad');
            result = true;
          } else {
            var deepText = PosdFacebookAds.GetVisibleSpansText(links[i], this.fbConfig.visibleSpansText);

            if (deepText !== text) {
              if (typeof deepText === "string" && deepText.length && this.fbConfig.sponsoredTexts.some(function (sponsoredText) {
                return deepText.includes(sponsoredText);
              })) {
                links[i].setAttribute('bis_label', 'fb_feed_ad');
                result = true;
              }
            }
          }
        }

        return result;
      }
    }
  }, {
    key: "DetectFeedFacebookAds",
    value: function DetectFeedFacebookAds(initiator) {
      var currentTime = PosdCommon.GetCurrentTimestampMs();

      if (currentTime - this.lastFeedCheckTime > 500) {
        this.lastFeedCheckTime = currentTime;

        if (this.designVersion) {
          var fbFeed = null;

          if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
            fbFeed = document.getElementById(this.fbConfig.feed);
          } else {
            fbFeed = document.querySelector(this.fbConfig.feedNew);
          }

          if (fbFeed) {
            var posts = [];

            if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
              posts = fbFeed.querySelectorAll(this.fbConfig.posts);
            } else {
              posts = fbFeed.querySelectorAll(this.fbConfig.postsNew);
            }

            for (var i = 0; i < posts.length; i++) {
              var postSize = PosdCommon.GetElementSize(posts[i]);

              if (!posts[i].hasAttribute('bis_id') && postSize.w > 0 && postSize.h > 0) {
                if (this.CheckIfAd(posts[i])) {
                  if (this.AdBlockerAgent.IsEnabledForFacebook()) {
                    var hideStyleStr = this.HideAd(posts[i], postSize);
                  }

                  if (this.IsAdContentRendered(posts[i])) {
                    var bisId = PosdCommon.GenerateAndSetBisIdToFBAds(posts[i]);
                    var timeout = 1500 + PosdCommon.GetRandomIntInRange(0, 500);
                    setTimeout(this.ProcessFbCreative.bind(this, bisId, hideStyleStr), timeout);
                  } else {}
                }
              }
            }
          } else {}
        } else {}
      } else {}
    }
  }, {
    key: "HideAd",
    value: function HideAd(post, postSize) {
      var cssHideStr = '';

      if (post && postSize) {
        if (post && post.style) {
          post.style.cssText += "position: absolute !important; width: ".concat(postSize.w, "px; overflow: hidden; height: 0px;");
          cssHideStr = post.style.cssText;
          post.setAttribute('bis_hide_height', postSize.h);
        }
      }

      return cssHideStr;
    }
  }, {
    key: "IsAdContentRendered",
    value: function IsAdContentRendered(post) {
      var rendered = false;

      if (post) {
        var adSize = PosdCommon.GetFullElementSize(post);

        if (adSize.w > 0) {
          var imgs = post.querySelectorAll('img');

          if (imgs && imgs.length) {
            for (var j = 0; j < imgs.length && !rendered; j++) {
              var imgSize = PosdCommon.GetElementSize(imgs[j]);

              if (imgSize.w > 0 && imgSize.h > 0) {
                rendered = true;
              }
            }
          }
        }
      }

      return rendered;
    }
  }, {
    key: "ProcessFbCreative",
    value: function ProcessFbCreative(bisId, hideStyleStr) {
      try {
        var detected = false;
        var rendered = false;
        var isVideoAd = false;

        if (bisId) {
          var fbAd = document.querySelector("[bis_id=".concat(bisId, "]"));

          if (fbAd) {
            detected = true;
            rendered = this.IsAdContentRendered(fbAd);

            if (rendered) {
              isVideoAd = this.IsVideoCreative(fbAd);
              PosdContentIOManager.SendFacebookCandidatePlacements(this.id, 1, null);

              if (this.AdBlockerAgent.IsEnabledForFacebook()) {
                var adSize = PosdCommon.GetFullElementSize(fbAd);
                var hideHeight = fbAd.getAttribute('bis_hide_height');

                if (hideHeight) {
                  adSize.h = parseInt(hideHeight);
                }

                fbAd.setAttribute("bis_size", PosdCommon.ToJSON(adSize));
              } else {
                PosdCommon.SetFullSizeToElement(fbAd);
              }

              var elements = fbAd.querySelectorAll('*');

              for (var j = 0; j < elements.length; j++) {
                var elSize = PosdCommon.SetFullSizeToElement(elements[j]);

                if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
                  this.AddNeededStylesForElement(elements[j], elSize);
                }
              }

              var creatives = [];
              creatives.push(this.BuildCreative(fbAd, isVideoAd, hideStyleStr));

              if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
                this.SendFacebookCandidates(creatives);
              } else {
                if (this.fbConfig.aboutSectionConfigNew && this.fbConfig.aboutSectionConfigNew.loadAboutPage) {
                  this.LoadAboutPageAndSendCandidates(creatives);
                } else {
                  this.SendFacebookCandidates(creatives);
                }
              }

              if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES) {
                fbAd.style.cssText += 'border: 6px solid green !important;';
              }
            } else {
              if (fbAd.removeAttribute) {
                fbAd.removeAttribute('bis_id');
              }
            }
          }
        }

        if (!detected) {}
      } catch (e) {}
    }
  }, {
    key: "ActivateDetector",
    value: function ActivateDetector(activator) {
      var _this4 = this;

      if (activator === PosdConst.ACTIVATION_BY_ADS_MANAGER) {
        this.available = true;
      }

      this.lastFeedCheckTime = PosdCommon.GetCurrentTimestampMs() - 3000;

      if (!this.feedDetectorInterval) {
        this.feedDetectorInterval = setInterval(function () {
          _this4.DetectFeedFacebookAds(PosdConst.AD_DETECTOR_INITIATOR_TIMER);
        }, 3000);
      }

      var versionDetected = false;
      this.fbContent = document.getElementsByClassName(this.fbConfig.fbContent)[0];

      if (this.fbContent) {
        versionDetected = true;
        this.designVersion = PosdConst.FACEBOOK_DESIGN_VERSION_OLD;

        try {
          if (PosdCommon.IsChrome()) {
            this.fbConfig.videoDetectorConfig.PARSER_CONFIG.IFRAME.USE = false;
          } else if (PosdCommon.IsFirefox()) {
            this.fbConfig.videoDetectorConfig.PARSER_CONFIG.IFRAME.USE = true;
          }
        } catch (e) {}

        this.VideoTrafficDetector = new PosdFacebookVideoDetector(this.id);
        this.VideoTrafficDetector.InjectDetector(this.id + '_w', JSON.stringify(this.fbConfig.videoDetectorConfig));
      } else {
        this.fbContent = document.querySelector(this.fbConfig.fbContentNew);

        if (this.fbContent) {
          versionDetected = true;
          this.designVersion = PosdConst.FACEBOOK_DESIGN_VERSION_NEW;
          this.VideoTrafficDetector = new PosdFacebookVideoDetector(this.id);
          this.VideoTrafficDetector.InjectDetector(this.id + '_w', JSON.stringify(this.fbConfig.videoDetectorConfigNew));
        }
      }

      if (versionDetected) {
        this.fbContentObserver = new MutationObserver(this.RecheckDetectors.bind(this));
        this.fbContentObserver.observe(this.fbContent, {
          childList: true
        });
        this.RecheckDetectors();
        window.addEventListener('beforeunload', function () {
          if (_this4.fbContentObserver) {
            _this4.fbContentObserver.disconnect();
          }

          if (_this4.fbFeedObserver && _this4.fbFeedObserverActive) {
            _this4.fbFeedObserver.disconnect();
          }
        });
      } else {}
    }
  }, {
    key: "RecheckDetectors",
    value: function RecheckDetectors() {
      this.ActivateFeedDetector();
    }
  }, {
    key: "ActivateFeedDetector",
    value: function ActivateFeedDetector() {
      if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
        this.fbFeed = document.getElementById(this.fbConfig.feed);
      } else {
        this.fbFeed = document.querySelector(this.fbConfig.feedNew);
      }

      if (this.fbFeed) {
        if (!this.fbFeedObserver) {
          this.fbFeedObserver = new MutationObserver(this.DetectFeedFacebookAds.bind(this, PosdConst.AD_DETECTOR_INITIATOR_MUTATION));
        }

        this.DetectFeedFacebookAds(PosdConst.AD_DETECTOR_INITIATOR_ACTIVATION);

        if (this.fbFeedObserver && !this.fbFeedObserverActive) {
          this.fbFeedObserverActive = true;
          this.fbFeedObserver.observe(this.fbFeed, {
            childList: true,
            subtree: true
          });
        }
      } else {
        if (this.fbFeedObserver && this.fbFeedObserverActive) {
          this.fbFeedObserverActive = false;
          this.fbFeedObserver.disconnect();
        }
      }
    }
  }, {
    key: "BuildCreative",
    value: function BuildCreative(post, isVideoAd, hideStyleStr) {
      var postSize = PosdCommon.GetFullElementSize(post);

      if (this.AdBlockerAgent.IsEnabledForFacebook()) {
        var hideHeight = post.getAttribute('bis_hide_height');

        if (hideHeight) {
          postSize.h = parseInt(hideHeight);
        }
      }

      var links = document.querySelectorAll('link');
      var creative = "<html><head><meta charset=\"utf-8\">";

      for (var i = 0; i < links.length; i++) {
        creative = creative + links[i].outerHTML;
      }

      creative = creative + "</head><body style='position:absolute; top:0px; left:0px; width:".concat(postSize.w, "px; height:").concat(postSize.h, "px;'>").concat(post.outerHTML, "</body></html>");

      if (this.AdBlockerAgent.IsEnabledForFacebook()) {
        if (hideStyleStr && hideStyleStr.length && creative.includes(hideStyleStr)) {
          creative = creative.replace(hideStyleStr, '');
        }
      }

      var aboutPageLink = "";
      var aboutSectionContent = "";
      var loadAboutPage = false;

      if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
        if (this.fbConfig.aboutSectionConfig && this.fbConfig.aboutSectionConfig.loadAboutPage) {
          loadAboutPage = true;
        }
      } else {
        if (this.fbConfig.aboutSectionConfigNew && this.fbConfig.aboutSectionConfigNew.loadAboutPage) {
          loadAboutPage = true;
        }
      }

      if (this.fbConfig && loadAboutPage) {
        aboutPageLink = this.GetAboutPageLink(post);
      } else {}

      var creativeObj = {
        content: PosdBase64.encode(creative),
        adPlacementType: PosdConst.FACEBOOK_AD_PLACEMENT_TYPE_FEED,
        designVersion: this.designVersion,
        aboutPageLink: aboutPageLink,
        aboutSectionContent: aboutSectionContent,
        size: postSize
      };

      if (isVideoAd) {
        creativeObj.videoData = {
          videoId: '',
          videoUrl: '',
          audioUrl: ''
        };
      }

      return creativeObj;
    }
  }, {
    key: "GetAboutPageLink",
    value: function GetAboutPageLink(post) {
      var aboutPageLink = '';
      var aboutSectionConfig = null;

      if (this.designVersion === PosdConst.FACEBOOK_DESIGN_VERSION_OLD) {
        aboutSectionConfig = this.fbConfig.aboutSectionConfig;
      } else {
        aboutSectionConfig = this.fbConfig.aboutSectionConfigNew;
      }

      var sponsEl = post.querySelector("*[bis_label='fb_feed_ad'");
      var links = post.querySelectorAll("a[href^='".concat(aboutSectionConfig.hrefPrefix, "'"));

      if (sponsEl && links && links.length) {
        var url = '';
        var sponsElTop = sponsEl.getBoundingClientRect().top;
        var minTopDif = sponsElTop - post.getBoundingClientRect().top;

        for (var i = 0; i < links.length; i++) {
          var linkSize = links[i].getBoundingClientRect();

          if (links[i].href && linkSize.top < sponsElTop) {
            if (sponsElTop - linkSize.top < minTopDif) {
              minTopDif = sponsElTop - linkSize.top;
              url = links[i].href;
            }
          }
        }

        if (url.length) {
          var urlpath = url.substring(aboutSectionConfig.hrefPrefix.length, url.length);
          aboutPageLink = aboutSectionConfig.aboutPageTemplate.replace('%1', urlpath.substring(0, urlpath.indexOf('/')));
        }
      }

      return aboutPageLink;
    }
  }, {
    key: "IsVideoCreative",
    value: function IsVideoCreative(creative) {
      if (creative.querySelectorAll('video').length === 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "AddNeededStylesForElement",
    value: function AddNeededStylesForElement(element, elementSize) {
      try {
        if (elementSize.w <= 3 && elementSize.h <= 3 && (element.nodeName === 'SPAN' || element.nodeName === 'DIV')) {
          var classAtr = element.getAttribute('class');

          if (classAtr && classAtr.includes('accessible_elem')) {
            var computedStyle = getComputedStyle(element);
            element.setAttribute('bis_style', "clip:".concat(computedStyle.getPropertyValue('clip'), "; height:").concat(computedStyle.getPropertyValue('height'), "; overflow:").concat(computedStyle.getPropertyValue('overflow'), "; position:").concat(computedStyle.getPropertyValue('position'), "; white-space:").concat(computedStyle.getPropertyValue('white-space'), "; width:").concat(computedStyle.getPropertyValue('width'), ";"));
          }
        }
      } catch (e) {}
    }
  }, {
    key: "LoadAboutPageAndSendCandidates",
    value: function LoadAboutPageAndSendCandidates(creatives) {
      var _this5 = this;

      if (creatives && creatives.length) {
        var callUrl = creatives[0].aboutPageLink;

        if (callUrl && callUrl.length) {
          fetch(callUrl, {
            headers: this.fbConfig.aboutSectionConfigNew.headers,
            method: "GET"
          }).then(function (response) {
            if (response.status === 200) {
              return response.text();
            } else {
              _this5.SendFacebookCandidates(creatives);
            }
          }).then(function (data) {
            var aboutSectionContent = "";
            var strs = data.split(/\r?\n/);

            if (strs.length) {
              for (var i = 0; i < strs.length && !aboutSectionContent.length; i++) {
                if (strs[i].includes(_this5.fbConfig.aboutSectionConfigNew.contentCheckString)) {
                  aboutSectionContent = strs[i];
                }
              }
            }

            creatives[0].aboutSectionContent = PosdBase64.encode(aboutSectionContent);

            _this5.SendFacebookCandidates(creatives);
          })["catch"](function () {
            _this5.SendFacebookCandidates(creatives);
          });
        } else {
          this.SendFacebookCandidates(creatives);
        }
      }
    }
  }, {
    key: "SendFacebookCandidates",
    value: function SendFacebookCandidates(creatives) {
      PosdContentIOManager.SendFacebookCandidates(this.id, creatives, null);

      if (this.AdBlockerAgent.IsEnabledForFacebook()) {
        this.AdBlockerAgent.SetHiddenAmount(creatives.length);
      }
    }
  }], [{
    key: "GetVisibleText",
    value: function GetVisibleText(e) {
      var children = e.querySelectorAll(':scope > *');

      if (children.length !== 0) {
        return Array.prototype.slice.call(children).map(PosdFacebookAds.GetVisibleText).flat();
      }

      if (getComputedStyle(e).display !== 'none') {
        var text = e.innerText;

        try {
          if (text.length === 0 && e.getAttribute) {
            var dataContentAttr = e.getAttribute('data-content');

            if (dataContentAttr && dataContentAttr.length) {
              text = dataContentAttr;
            }
          }
        } catch (e) {}

        return text;
      } else {
        return '';
      }
    }
  }, {
    key: "GetVisibleSpansText",
    value: function GetVisibleSpansText(a, selector) {
      var elms = a.querySelectorAll(selector);
      var fullText = '';
      elms.forEach(function (e) {
        if (getComputedStyle(e).display !== 'none' && getComputedStyle(e).position !== "absolute") {
          try {
            var text = Array.from(e.childNodes).filter(function (node) {
              return node.nodeType === 3;
            }).map(function (node) {
              return node.nodeValue.trim();
            }).reduce(function (acc, value) {
              return acc + value;
            }, '');

            if (text.length === 0 && e.getAttribute) {
              var dataContentAttr = e.getAttribute('data-content');

              if (dataContentAttr && dataContentAttr.length) {
                text = dataContentAttr;
              }
            }

            fullText = fullText + text;
          } catch (e) {}
        }
      });
      return fullText;
    }
  }]);

  return PosdFacebookAds;
}(PosdAdsCandidates);

module.exports = PosdFacebookAds;

/***/ }),

/***/ "./src/content/FacebookVideoDetector.js":
/*!**********************************************!*\
  !*** ./src/content/FacebookVideoDetector.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdFacebookVideoDetector = /*#__PURE__*/function () {
  function PosdFacebookVideoDetector(id) {
    _classCallCheck(this, PosdFacebookVideoDetector);

    this.id = id;
  }

  _createClass(PosdFacebookVideoDetector, [{
    key: "InjectDetector",
    value: function InjectDetector(id, config) {
      var script = document.createElement('script');

      if (script && script.setAttribute) {
        script.setAttribute('bis_use', 'true');
      }

      script.innerHTML = PosdFacebookVideoDetector.SendVideoData.toString() + "(" + function (id, config) {
        var PARSER_TYPE = {
          SCRIPT: 'SCRIPT',
          IFRAME: 'IFRAME',
          STREAM: 'STREAM',
          XML_HTTP_REQUEST: 'XML_HTTP_REQUEST'
        };

        var buildVideoData = function buildVideoData(videoId, videoUrl) {
          var audioUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var thumbnail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          return {
            detectionTime: Date.now() / 1000 | 0,
            previewImageUrl: thumbnail,
            videoId: videoId,
            videoUrl: videoUrl,
            audioUrl: audioUrl
          };
        };

        var cutTextBetween = function cutTextBetween(text, startText, endText) {
          var startPos = text.indexOf(startText);

          if (startPos === -1) {
            return false;
          }

          var endPos = text.indexOf(endText, startPos + startText.length);
          return text.substr(startPos + startText.length, endPos - startPos - startText.length);
        };

        var findParserAndParse = function findParserAndParse(text) {
          var parserType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var parsers = parserType ? config.PARSERS.filter(function (parser) {
            return parser.TYPE === parserType;
          }) : config.PARSERS;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var parser = _step.value;
              var checks = parser.CHECKER.filter(function (item) {
                return text.includes(item);
              });
              var needParse = parser.CHECKER.length === checks.length;

              if (needParse) {
                setTimeout(function () {
                  return parseText(parser, text);
                }, 0);
                return "break";
              }
            };

            for (var _iterator = parsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ret = _loop();

              if (_ret === "break") break;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        };

        var parseText = function parseText(parser, text) {
          text = text.replace(/ /g, '');
          var videoId = cutTextBetween(text, parser.VIDEO_ID.START, parser.VIDEO_ID.END);
          var hdSrc = null;
          var sdSrc = null;
          var audioUrl = '';
          var thumbnail = '';

          if (parser.VIDEO_HD_URL) {
            hdSrc = cutTextBetween(text, parser.VIDEO_HD_URL.START, parser.VIDEO_HD_URL.END);
          }

          if (parser.VIDEO_SD_URL) {
            sdSrc = cutTextBetween(text, parser.VIDEO_SD_URL.START, parser.VIDEO_SD_URL.END);
          }

          if (config.VIDEO_AUDIO_URL) {
            audioUrl = cutTextBetween(text, parser.VIDEO_AUDIO_URL.START, parser.VIDEO_AUDIO_URL.END);
            audioUrl = audioUrl ? audioUrl.split('\\').join('') : audioUrl;
          }

          if (parser.THUMBNAIL) {
            thumbnail = cutTextBetween(text, parser.THUMBNAIL.START, parser.THUMBNAIL.END);
            thumbnail = thumbnail ? thumbnail.split('\\').join('') : thumbnail;
          }

          var videoUrl = sdSrc ? sdSrc : hdSrc;

          if (videoUrl) {
            videoUrl = videoUrl.split('\\').join('');
            var videoData = buildVideoData(videoId, videoUrl, audioUrl, thumbnail);

            if (videoId) {
              setTimeout(asyncSendVideoData(videoData), 0);
            }
          }
        };

        var splitIfNeed = function splitIfNeed(parserConfigName, text) {
          text = String(text);
          var parserConfig = config.PARSER_CONFIG[parserConfigName];
          return parserConfig.SEPARATOR ? text.split(parserConfig.SEPARATOR) : [text];
        };

        var parse = function parse(text, parserConfigName) {
          var texts = splitIfNeed(parserConfigName, text);
          texts.forEach(function (text) {
            setTimeout(function () {
              return findParserAndParse(text, parserConfigName);
            }, 0);
          });
        };

        var asyncSendVideoData = function asyncSendVideoData(videoData) {
          return function () {
            SendVideoData(id, videoData);
          };
        };

        if (config.PARSER_CONFIG.IFRAME.USE) {
          var callback = function callback(mutationsList) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = mutationsList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var mutation = _step2.value;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  var _loop2 = function _loop2() {
                    var node = _step3.value;

                    if (node.tagName !== 'IFRAME') {
                      return "continue";
                    }

                    var isMatchUrl = !!config.PARSER_CONFIG.IFRAME.MATCH_URLS.filter(function (item) {
                      return node.src.includes(item);
                    }).length;

                    if (isMatchUrl) {
                      fetch(node.src).then(function (response) {
                        return response.text();
                      }).then(function (text) {
                        return setTimeout(function () {
                          return parse(text, PARSER_TYPE.IFRAME);
                        }, 0);
                      })["catch"](function (e) {});
                    }
                  };

                  for (var _iterator3 = mutation.removedNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _ret2 = _loop2();

                    if (_ret2 === "continue") continue;
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          };

          var mutationConfig = {
            attributes: false,
            childList: true,
            subtree: true
          };
          var observer = new MutationObserver(callback);
          observer.observe(document.body, mutationConfig);
        }

        if (config.PARSER_CONFIG.SCRIPT.USE) {
          var loadTextDataFromScripts = function loadTextDataFromScripts() {
            var scripts = document.querySelectorAll('script');
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = scripts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _script = _step4.value;

                if (_script.hasAttribute('bis_use')) {
                  continue;
                }

                _script.setAttribute('bis_use', 'true');

                parse(_script.innerHTML, PARSER_TYPE.SCRIPT);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          };

          setInterval(loadTextDataFromScripts, config.PARSER_CONFIG.SCRIPT.INTERVAL_MS || 5000);
        }

        if (config.PARSER_CONFIG.STREAM.USE) {
          var STORE_KEY = Symbol('STORE_PANEL_OS');
          window[STORE_KEY] = {};
          var store = window[STORE_KEY];

          var parseStreamParts = function parseStreamParts(texts) {
            return function () {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                var _loop3 = function _loop3() {
                  var text = _step5.value;
                  setTimeout(function () {
                    return findParserAndParse(text, PARSER_TYPE.STREAM);
                  }, 0);
                };

                for (var _iterator5 = texts[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  _loop3();
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                    _iterator5["return"]();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            };
          };

          var parseStreamIntegers = function parseStreamIntegers(url, integers) {
            return function () {
              var text = new TextDecoder('utf-8').decode(integers).toString();
              text = store[url] ? store[url].concat(text) : text;
              var separator = config.PARSER_CONFIG.STREAM.SEPARATOR;
              var parts = text.split(separator);
              var hasRest = parts.length > 0 && parts[parts.length - 1] !== '';
              store[url] = hasRest ? parts.pop() : '';
              setTimeout(parseStreamParts(parts), 0);
            };
          };

          var nativeFetch = fetch;

          fetch = function fetch() {
            var _this = this;

            var args = arguments;
            var url = arguments[0] instanceof Request ? arguments[0].url : arguments[0];
            return new Promise(function (resolve, reject) {
              var promise = nativeFetch.apply(_this, args);
              promise.then(function () {
                var isMatchUrl = !!config.PARSER_CONFIG.STREAM.MATCH_URLS.filter(function (item) {
                  return url.includes(item);
                }).length;

                if (isMatchUrl) {
                  var response = arguments[0];

                  if (response.body instanceof ReadableStream) {
                    var nativeReader = response.body.getReader;

                    response.body.getReader = function () {
                      var reader = nativeReader.apply(this, arguments);
                      var nativeRead = reader.read;

                      reader.read = function () {
                        return new Promise(function (resolve, reject) {
                          nativeRead.apply(reader, arguments).then(function () {
                            setTimeout(parseStreamIntegers(url, arguments[0].value), 0);
                            resolve.apply(this, arguments);
                          })["catch"](function (e) {
                            reject(e);
                          });
                        });
                      };

                      return reader;
                    };
                  }
                }

                resolve.apply(this, arguments);
              })["catch"](function () {
                reject.apply(this, arguments);
              });
            });
          };
        }

        if (config.PARSER_CONFIG.XML_HTTP_REQUEST.USE) {
          var open = XMLHttpRequest.prototype.open;

          XMLHttpRequest.prototype.open = function () {
            this.requestMethod = arguments[0];
            open.apply(this, arguments);
          };

          var send = XMLHttpRequest.prototype.send;

          XMLHttpRequest.prototype.send = function () {
            var onreadystatechange = this.onreadystatechange;

            this.onreadystatechange = function () {
              var _this2 = this;

              var matchUrls = config.PARSER_CONFIG.XML_HTTP_REQUEST.MATCH_URLS;

              if (this.readyState === 4 && matchUrls.filter(function (url) {
                return url.indexOf(_this2.responseURL);
              }).length > 0) {
                setTimeout(function () {
                  return parse(_this2.response, PARSER_TYPE.XML_HTTP_REQUEST);
                }, 0);
              }

              if (onreadystatechange) {
                return onreadystatechange.apply(this, arguments);
              }
            };

            return send.apply(this, arguments);
          };
        }
      }.toString() + "(\"".concat(id, "\", ").concat(config, "))");

      if (document.head) {
        document.head.appendChild(script);
      } else {}
    }
  }], [{
    key: "SendVideoData",
    value: function SendVideoData(id, videoData) {
      function GenerateQuickId() {
        var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return randomStrId.substring(0, 22);
      }

      try {
        var _mes = {
          posdMessageId: 'PANELOS_MESSAGE',
          posdHash: GenerateQuickId(),
          type: 'FACEBOOK_VIDEO_DATA',
          from: id,
          to: id.substring(0, id.length - 2),
          content: videoData
        };
        window.postMessage(_mes);
      } catch (e) {}
    }
  }]);

  return PosdFacebookVideoDetector;
}();

module.exports = PosdFacebookVideoDetector;

/***/ }),

/***/ "./src/content/FrameContent.js":
/*!*************************************!*\
  !*** ./src/content/FrameContent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdMessage = __webpack_require__(/*! ../libs/Message */ "./src/libs/Message.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdIframesIO = __webpack_require__(/*! ./IframesIO */ "./src/content/IframesIO.js");

var PosdContentValidator = __webpack_require__(/*! ./ContentValidator */ "./src/content/ContentValidator.js");

var PosdTargetUrlDetector = __webpack_require__(/*! ./TargetUrlDetector */ "./src/content/TargetUrlDetector.js");

var PosdVideoAds = __webpack_require__(/*! ./VideoAds */ "./src/content/VideoAds.js");

var PosdConfigAgent = __webpack_require__(/*! ./ConfigAgent */ "./src/content/ConfigAgent.js");

var PosdFrameContent = /*#__PURE__*/function () {
  function PosdFrameContent() {
    _classCallCheck(this, PosdFrameContent);

    this.id = null;
    this.frameId = null;
    this.chainId = null;
    this.fullIdStr = '';
    this.init = false;
    this.chainActivated = false;
    this.finalFrame = false;
    this.activated = false;
    this.contentSenderTimer = null;
    this.activationInfo = null;
    this.IframesIO = null;
    this.TargetUrlDetector = null;
    this.ContentValidator = null;
    this.VideoAds = null;
    this.Config = null;
    this.recheckerInterval = null;
  }

  _createClass(PosdFrameContent, [{
    key: "Init",
    value: function Init() {
      if (!this.init) {
        this.init = true;
        setTimeout(this.SendInitMessage.bind(this), 700);
      }
    }
  }, {
    key: "SetBisStatus",
    value: function SetBisStatus() {
      if (document && document.body && document.body.setAttribute) {
        document.body.setAttribute("bis_status", "ok");
      } else {}
    }
  }, {
    key: "RecheckBisStatus",
    value: function RecheckBisStatus() {
      if (document && document.body && document.body.getAttribute) {
        if (document.body.getAttribute("bis_status") !== "ok") {
          this.SetBisStatus();
        }
      }
    }
  }, {
    key: "StopRechecker",
    value: function StopRechecker() {
      if (this.recheckerInterval) {
        clearInterval(this.recheckerInterval);
        this.recheckerInterval = null;
      }
    }
  }, {
    key: "SendInitMessage",
    value: function SendInitMessage() {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_IFRAME_INITIALIZATION;
      mes.from = this.id;
      mes.to = 'bg';
      mes.content = {
        location: document.location.href
      };

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes, this.onGotInitMesResponse.bind(this));
      }
    }
  }, {
    key: "onGotInitMesResponse",
    value: function onGotInitMesResponse(response) {
      if (response.status && response.status === 'ok' && PosdMessage.IsValid(response.mes)) {
        if (response.mes.content.activeStatus) {
          this.frameId = response.mes.content.frameId;
          this.fullIdStr = PosdCommon.GetFullIdStr(this.chainId, this.frameId, this.id);

          if (response.mes.content.isMaster) {
            this.SetBisStatus();
            setTimeout(this.StopRechecker.bind(this), 7000);
            this.recheckerInterval = setInterval(this.RecheckBisStatus.bind(this), 300);
            this.IframesIO = new PosdIframesIO(this.id);
            this.IframesIO.Init();
            this.IframesIO.onGotChainActivationCallback = this.onGotChainActivation.bind(this);
            this.IframesIO.onGotContentMesCallback = this.onGotContentMes.bind(this);
            this.Config = new PosdConfigAgent(this.id, response.mes.content.configuration);
            this.VideoAds = new PosdVideoAds(this.id, this.Config, this.IframesIO, true);

            if (document && document.body && document.body.setAttribute) {
              document.body.setAttribute("bis_frame_id", this.frameId);
            } else {}
          } else {}
        } else {}
      } else {}
    }
  }, {
    key: "onGotChainActivation",
    value: function onGotChainActivation(activationInfo) {
      if (activationInfo && activationInfo.headerInfo && activationInfo.headerInfo.bisId) {
        if (!this.chainActivated) {
          this.id = activationInfo.headerInfo.bisId;
          this.IframesIO.SetId(this.id);
          this.chainId = activationInfo.chainId;
          this.fullIdStr = PosdCommon.GetFullIdStr(this.chainId, this.frameId, this.id);
          this.StopRechecker();
          this.chainActivated = true;
          this.activationInfo = activationInfo;

          if (!this.Config) {
            if (activationInfo.configEncoded && activationInfo.configEncoded.length) {
              this.Config = new PosdConfigAgent(this.id, activationInfo.configEncoded);
            }
          }

          this.ContentValidator = new PosdContentValidator(this.chainId, this.frameId, this.id, this.Config);
          this.ContentValidator.Init(document, this.onContentInputsDetected.bind(this), this.onContentRedirectsDetected.bind(this));
          this.TargetUrlDetector = new PosdTargetUrlDetector(this.chainId, this.frameId, this.id, this.activationInfo.targetUrlCandidates, this.Config);
          this.TargetUrlDetector.Init(this.IframesIO);
          PosdFrameContent.SetBisId(document, window, this.id);
          PosdCommon.SetBisDepth(document.body, activationInfo.depth);
          PosdCommon.SetBisChainId(document.body, activationInfo.chainId);
          this.InjectJs();
          this.onGotActivationMes();
        } else {}
      } else {}
    }
  }, {
    key: "onGotActivationMes",
    value: function onGotActivationMes() {
      if (!this.activated) {
        this.activated = true;
        var frames = PosdCommon.QuerySelectorAll(document, 'iframe, frame');

        if (frames.length) {
          for (var i = 0; i < frames.length; i++) {
            PosdCommon.SetFullSizeToElement(frames[i], PosdFrameContent.GetAbsoluteCoordinates(this.activationInfo));
            PosdCommon.GenerateAndSetBisIdToFrame(frames[i]);
            PosdCommon.SetBisDepth(frames[i], this.activationInfo.depth + 1);
            PosdCommon.SetBisChainId(frames[i], this.activationInfo.chainId);

            if (PosdCommon.IsIframeHasContentScript(frames[i])) {
              PosdFrameContent.SendActivationMesToFrame(this.id, this.activationInfo.chainId, frames[i], this.activationInfo.depth + 1, this.Config);
            } else {
              var invalidChainSegmentContent = PosdFrameContent.GetInvalidChainSegmentContent(this.id, this.activationInfo.chainId, frames[i], this.activationInfo.depth + 1, this.Config);
              PosdFrameContent.SendInvalidChainSegmentContent(this.id, invalidChainSegmentContent);
            }
          }
        }

        this.TargetUrlDetector.DetectTargetUrl(1000, this.onTargerUrlDetected.bind(this));
      } else {}
    }
  }, {
    key: "onTargerUrlDetected",
    value: function onTargerUrlDetected() {
      if (!this.contentSenderTimer) {
        var sendWaitTime = PosdCommon.GetRandomIntInRange(0, 200);
        this.contentSenderTimer = setTimeout(this.SendContent.bind(this), sendWaitTime);
      } else {}
    }
  }, {
    key: "SendContent",
    value: function SendContent() {
      var _this = this;

      PosdFrameContent.PrepareContent(this.fullIdStr, document, PosdFrameContent.GetAbsoluteCoordinates(this.activationInfo));
      PosdFrameContent.RemoveInjectedJs(this.fullIdStr, document);
      var iframeContent = document.querySelector('html').outerHTML;

      if (iframeContent.length) {
        var mes = PosdMessage.EmptyMessage;
        mes.type = PosdConst.MESSAGE_TYPE_IFRAME_CONTENT;
        mes.from = this.id;
        mes.to = 'bg';
        mes.content = {
          isValid: true,
          headerInfo: this.activationInfo.headerInfo,
          contentFinal: PosdBase64.encode(iframeContent),
          targetUrl: this.TargetUrlDetector.FrameTargetUrl
        };

        if (PosdCommon.IsOnChromeRuntime()) {
          chrome.runtime.sendMessage(mes, function () {});
        }
      } else {}
    }
  }, {
    key: "onGotChainActivationResponse",
    value: function onGotChainActivationResponse() {}
  }, {
    key: "onGotContentMes",
    value: function onGotContentMes() {}
  }, {
    key: "onContentInputsDetected",
    value: function onContentInputsDetected() {
      this.IframesIO.SendInputsDetected();
    }
  }, {
    key: "onContentRedirectsDetected",
    value: function onContentRedirectsDetected() {
      this.IframesIO.SendRedirectDetected();
    }
  }, {
    key: "InjectJs",
    value: function InjectJs() {
      var script = document.createElement("script");

      if (script && script.setAttribute) {
        script.setAttribute("bis_script", "display");
      }

      script.innerHTML = "window.bisData = {id: '" + this.id + "_w'}; " + "(" + function () {
        function GenerateQuickId() {
          var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          return randomStrId.substring(0, 22);
        }

        function GetWindowEmbeddedTargetUrl() {
          function isValid(url) {
            return typeof url === 'string' && url.length > 0 && (url.indexOf('http') !== -1 || url.indexOf('//') !== -1);
          }

          var find = false;
          var targetUrl = '';
          var windowObj = window;

          try {
            if (typeof windowObj.clickTag !== 'undefined' && isValid(windowObj.clickTag)) {
              targetUrl = windowObj.clickTag;
              find = true;
            }
          } catch (e) {}

          try {
            if (!find && typeof windowObj.adData !== 'undefined' && typeof windowObj.adData.destination_url !== 'undefined' && isValid(windowObj.adData.destination_url)) {
              targetUrl = windowObj.adData.destination_url;
              find = true;
            }
          } catch (e) {}

          try {
            if (!find && typeof windowObj.BF !== 'undefined' && typeof windowObj.BF.Parameters !== 'undefined' && typeof windowObj.BF.Parameters.targeturl !== 'undefined' && isValid(windowObj.BF.Parameters.targeturl)) {
              targetUrl = windowObj.BF.Parameters.targeturl;
              find = true;
            }
          } catch (e) {}

          try {
            if (!find && typeof windowObj.ADAPT !== 'undefined' && typeof windowObj.ADAPT.symbols !== 'undefined' && typeof windowObj.ADAPT.symbols.stage !== 'undefined' && typeof windowObj.ADAPT.symbols.stage.clickUrl !== 'undefined' && isValid(windowObj.ADAPT.symbols.stage.clickUrl)) {
              targetUrl = windowObj.ADAPT.symbols.stage.clickUrl;
              find = true;
            }
          } catch (e) {}

          try {
            if (!find && typeof windowObj.admixAPI !== 'undefined' && typeof windowObj.admixAPI.ownerBanner !== 'undefined' && typeof windowObj.admixAPI.ownerBanner.clickUrl !== 'undefined' && isValid(windowObj.admixAPI.ownerBanner.clickUrl)) {
              targetUrl = windowObj.admixAPI.ownerBanner.clickUrl;
              find = true;
            }
          } catch (e) {}

          if (find) {}

          return targetUrl;
        }

        ;

        function GetWindowClickTargetUrl() {
          if (window.bisData) {
            var clickElements = document.querySelectorAll('*[onclick]:not(a), div, button, gwd-taparea');

            if (clickElements.length) {
              window.bisData.origWindowOpen = window.open;
              window.bisData.elementSquare = 0;
              window.bisData.clickTargetUrl = [];

              window.open = function (url, name, params) {
                window.bisData.clickTargetUrl.push({
                  href: url,
                  square: window.bisData.elementSquare
                });
                return null;
              };

              for (var i = 0; i < clickElements.length && window.bisData.clickTargetUrl.length === 0; i++) {
                try {
                  if (clickElements[i] && clickElements[i].click && clickElements[i].getBoundingClientRect) {
                    var rect = clickElements[i].getBoundingClientRect();

                    if (rect.width > 40 && rect.height > 40) {
                      window.bisData.elementSquare = rect.width * rect.height;
                      clickElements[i].click();
                    }
                  }
                } catch (e) {}
              }

              setTimeout(function () {
                window.open = window.bisData.origWindowOpen;
              }, 1000);
            }
          }
        }

        window.addEventListener('message', function (event) {
          function IsValid(mes) {
            if (typeof mes !== 'undefined') {
              if (typeof mes.posdMessageId !== 'undefined' && typeof mes.from !== 'undefined' && typeof mes.to !== 'undefined' && typeof mes.type !== 'undefined' && typeof mes.content !== 'undefined') {
                return mes.posdMessageId && mes.posdMessageId === 'PANELOS_MESSAGE';
              }
            }

            return false;
          }

          try {
            var id = window.bisData.id;
            var mes = event.data;

            if (IsValid(mes) && mes.to === window.bisData.id) {
              if (mes.type === 'GET_WINDOW_TARGET_URL') {
                var targetUrl = GetWindowEmbeddedTargetUrl();

                if (targetUrl.length) {
                  var response = {
                    posdMessageId: 'PANELOS_MESSAGE',
                    posdHash: GenerateQuickId(),
                    type: 'GET_WINDOW_TARGET_URL_RESPOND',
                    from: id,
                    to: id.substring(0, id.length - 2),
                    content: targetUrl
                  };

                  if (document.body && document.body.setAttribute) {
                    document.body.setAttribute('bis_mes_to_fr', JSON.stringify(response));
                  }

                  if (event.source.postMessage) {
                    event.source.postMessage(response, event.origin);
                  } else {}
                } else {}
              } else if (mes.type === 'GET_WINDOW_CLICK_TARGET_URL') {
                GetWindowClickTargetUrl();

                if (window.bisData && window.bisData.clickTargetUrl && window.bisData.clickTargetUrl.length) {
                  var _response = {
                    posdMessageId: 'PANELOS_MESSAGE',
                    posdHash: GenerateQuickId(),
                    type: 'GET_WINDOW_CLICK_TARGET_URL_RESPOND',
                    from: id,
                    to: id.substring(0, id.length - 2),
                    content: {
                      chainId: mes.content.chainId,
                      clickTargetUrl: window.bisData.clickTargetUrl
                    }
                  };

                  if (document.body && document.body.setAttribute) {
                    document.body.setAttribute('bis_mes_to_fr', JSON.stringify(_response));
                  }

                  if (event.source.postMessage) {
                    event.source.postMessage(_response, event.origin);
                  } else {}
                }
              }
            }
          } catch (e) {}
        }, false);
      }.toString() + "())";

      document.head.appendChild(script);
    }
  }], [{
    key: "SetBisId",
    value: function SetBisId(document, window, bisId) {
      if (window) {
        window.bis_id = bisId;
      }

      if (document) {
        document.bis_id = bisId;
      }

      if (document.body && document.body.setAttribute) {
        document.body.setAttribute("bis_body_id", bisId);
      }
    }
  }, {
    key: "RemoveInjectedJs",
    value: function RemoveInjectedJs(id, documentObj) {
      try {
        var scripts = documentObj.head.querySelectorAll("script[bis_script]");

        if (scripts && scripts.length) {
          for (var i = 0; i < scripts.length; i++) {
            scripts[i].remove();
          }
        } else {}
      } catch (e) {}
    }
  }, {
    key: "GetAbsoluteCoordinates",
    value: function GetAbsoluteCoordinates(activationInfo) {
      return {
        x: activationInfo.headerInfo.size.abs_x,
        y: activationInfo.headerInfo.size.abs_y
      };
    }
  }, {
    key: "PrepareContent",
    value: function PrepareContent(id, document, absoluteCoordinates) {
      var elementsCollection = PosdCommon.QuerySelectorAll(document, "*:not(html):not(script):not(head):not(meta):not(link):not(title):not(style):not(param)");

      for (var i = 0; i < elementsCollection.length; i++) {
        var element = elementsCollection[i];

        if (element) {
          try {
            var hasBackgroundImg = false;
            var backgroundImg = window.getComputedStyle(element).backgroundImage;

            if (backgroundImg && backgroundImg.length && backgroundImg != 'none' && backgroundImg.includes('url')) {
              backgroundImg = backgroundImg.replace(/"/g, "'");
              hasBackgroundImg = true;
            }

            if (element.hasAttribute("style")) {
              var styles = element.getAttribute("style");

              if (styles && element.setAttribute) {
                styles = styles.replace(/"/g, "'");
                element.setAttribute("style", styles);

                if (hasBackgroundImg) {
                  element.style.cssText += "background-image: " + backgroundImg + ";";
                  element.setAttribute("bis_label", "style");
                }
              }
            } else {
              if (hasBackgroundImg && element.setAttribute) {
                element.setAttribute("style", "background-image: " + backgroundImg + ";");
                element.setAttribute("bis_label", "style");
              }
            }

            try {
              if (element.attributes && element.attributes.length) {
                for (var j = 0; j < element.attributes.length; j++) {
                  if (element.attributes[j] && element.attributes[j].value && element.attributes[j].value.length && element.attributes[j].name !== "src") {
                    if (element.attributes[j].value.includes("\"")) {
                      element.attributes[j].value = element.attributes[j].value.replace(/"/g, "'");
                    }
                  }
                }
              }
            } catch (err) {}

            PosdCommon.SetFullSizeToElement(element, absoluteCoordinates);
          } catch (err) {}
        }
      }
    }
  }, {
    key: "ExtractContent",
    value: function ExtractContent(id, windowObj) {
      return windowObj.document.querySelector('html').outerHTML;
    }
  }, {
    key: "GetFrameHeaderInfo",
    value: function GetFrameHeaderInfo(chainId, frame, depth) {
      var frameHeaderInfo = {
        depth: depth,
        chainId: chainId,
        frameId: frame.id,
        src: frame.src,
        size: JSON.parse(frame.getAttribute('bis_size')),
        bisId: frame.getAttribute("bis_id")
      };

      if (depth === 0) {
        frameHeaderInfo.topHeaderContent = PosdBase64.encode(frame.outerHTML);
      }

      return frameHeaderInfo;
    }
  }, {
    key: "SendActivationMesToFrame",
    value: function SendActivationMesToFrame(id, chainId, frame, depth, config) {
      var result = false;

      try {
        var configEncoded = '';

        if (config && config.GetConfigEncoded) {
          configEncoded = config.GetConfigEncoded();
        }

        if (frame) {
          var mes = PosdMessage.EmptyMessage;
          mes.type = PosdConst.MESSAGE_TYPE_CHAIN_ACTIVATION;
          mes.from = id;
          mes.to = 'fr';
          mes.content = {
            chainId: chainId,
            depth: depth,
            headerInfo: PosdFrameContent.GetFrameHeaderInfo(chainId, frame, depth),
            configEncoded: configEncoded,
            targetUrlCandidates: []
          };

          if (PosdCommon.IsIframeSecure(frame)) {
            if (frame.contentWindow && frame.contentWindow.postMessage) {
              frame.contentWindow.postMessage(mes, frame.src);
            } else {}
          } else {
            try {
              var targetUrlCandidates = PosdTargetUrlDetector.DetectTargetUrlFromWindowObj(id, frame.contentWindow, config);

              if (targetUrlCandidates.length) {
                mes.content.targetUrlCandidates = targetUrlCandidates;
              }
            } catch (e) {}

            if (frame.contentWindow.document.body.setAttribute) {
              frame.contentWindow.document.body.setAttribute('bis_activation', PosdBase64.encode(JSON.stringify(mes)));
            } else {}
          }

          result = true;
        }
      } catch (e) {}

      return result;
    }
  }, {
    key: "GetInvalidChainSegmentContent",
    value: function GetInvalidChainSegmentContent(id, chainId, frame, depth, config) {
      var segmentContent = {};
      var isChainCompleted = false;
      var headerInfo = PosdFrameContent.GetFrameHeaderInfo(chainId, frame, depth);
      var absoluteCoordinates = {
        x: headerInfo.size.x,
        y: headerInfo.size.y
      };

      try {
        var frames = PosdCommon.QuerySelectorAll(frame.contentWindow.document, 'iframe, frame');

        if (frames.length === 0) {
          isChainCompleted = true;
        } else {
          isChainCompleted = false;

          for (var i = 0; i < frames.length; i++) {
            PosdCommon.SetFullSizeToElement(frames[i], absoluteCoordinates);
            PosdCommon.GenerateAndSetBisIdToFrame(frames[i]);
            PosdCommon.SetBisDepth(frames[i], depth + 1);
            PosdFrameContent.SendActivationMesToFrame(id, chainId, frames[i], depth + 1, config);
          }
        }

        PosdFrameContent.PrepareContent(id, frame.contentWindow.document, absoluteCoordinates);
        segmentContent.isValid = false;
        segmentContent.isChainCompleted = isChainCompleted;
        segmentContent.headerInfo = headerInfo;
        segmentContent.contentFinal = PosdBase64.encode(PosdFrameContent.ExtractContent(id, frame.contentWindow));
        segmentContent.targetUrl = PosdTargetUrlDetector.DetectTargetUrlFromWindowObj(id, frame.contentWindow, config);
      } catch (e) {}

      return segmentContent;
    }
  }, {
    key: "SendInvalidChainSegmentContent",
    value: function SendInvalidChainSegmentContent(id, invalidChainSegmentContent) {
      if (invalidChainSegmentContent) {
        var mes = PosdMessage.EmptyMessage;
        mes.type = PosdConst.MESSAGE_TYPE_IFRAME_INVALID_CHAIN_SEGMENT_CONTENT;
        mes.from = id;
        mes.to = 'bg';
        mes.content = invalidChainSegmentContent;

        if (PosdCommon.IsOnChromeRuntime()) {
          chrome.runtime.sendMessage(mes);
        }
      } else {}
    }
  }]);

  return PosdFrameContent;
}();

module.exports = PosdFrameContent;

/***/ }),

/***/ "./src/content/HTML5Ads.js":
/*!*********************************!*\
  !*** ./src/content/HTML5Ads.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdAdsCandidates = __webpack_require__(/*! ./AdsCandidates */ "./src/content/AdsCandidates.js");

var PosdFrameContent = __webpack_require__(/*! ./FrameContent */ "./src/content/FrameContent.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdHTML5Ads = /*#__PURE__*/function (_PosdAdsCandidates) {
  _inherits(PosdHTML5Ads, _PosdAdsCandidates);

  function PosdHTML5Ads(id, Config, IOManager, AdBlockerAgent) {
    var _this;

    _classCallCheck(this, PosdHTML5Ads);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PosdHTML5Ads).call(this, id));
    _this.Config = Config;
    _this.IOManager = IOManager;
    _this.IOManager.onGotHTML5CandidatesExtractionStatusesCallback = _this.onGotHTML5CandidatesExtractionStatuses.bind(_assertThisInitialized(_this));
    _this.AdBlockerAgent = AdBlockerAgent;
    _this.topFramesCandidates = [];
    _this.onDetectedCallback = null;
    _this.chainIdCounter = 0;
    return _this;
  }

  _createClass(PosdHTML5Ads, [{
    key: "ActivateDetector",
    value: function ActivateDetector() {
      var _this2 = this;

      this.Activated();
      this.DetectHTML5AdsCandidates();
      setTimeout(function () {
        _this2.DetectHTML5AdsCandidates();
      }, 350);
      setInterval(function () {
        _this2.DetectHTML5AdsCandidates();
      }, 700);
    }
  }, {
    key: "DetectHTML5AdsCandidates",
    value: function DetectHTML5AdsCandidates() {
      var _this3 = this;

      if (this.AdBlockerAgent.IsEnabled()) {
        this.ClearHiddenCounter();
      }

      var frames = PosdCommon.QuerySelectorAll(document, 'iframe:not([bis_size]), frame:not([bis_size])');
      var newCandidatesAmount = 0;

      if (frames.length) {
        for (var i = 0; i < frames.length; i++) {
          var framesSrc = frames[i].src.toLowerCase();

          if (!PosdCommon.IsInFilterList(this.Config.GetBlacklistIframeSrc(), framesSrc) && !PosdCommon.IsInFilterList(this.Config.GetBlacklistIframeId(), frames[i].id)) {
            if (!this.IsFrameFromSite(framesSrc) || PosdCommon.IsInFilterList(this.Config.GetWhitelistCandidatesUrlKeyWords(), framesSrc)) {
              var rectData = frames[i].getBoundingClientRect();

              if (rectData.width > 70 && rectData.height > 40 && rectData.height < 1100) {
                PosdCommon.SetFullSizeToElement(frames[i]);
                var bisId = PosdCommon.GenerateAndSetBisIdToFrame(frames[i]);
                this.chainIdCounter = this.chainIdCounter + 1;
                var candidate = {
                  ticketId: this.TicketId,
                  pageUrl: this.PageUrl,
                  bisId: bisId,
                  chainId: this.chainIdCounter,
                  detectionTime: new Date().getTime(),
                  processingStartTime: null,
                  frame: frames[i],
                  isSecure: PosdCommon.IsIframeSecure(frames[i]),
                  hasContentScript: PosdCommon.IsIframeHasContentScript(frames[i]),
                  status: PosdConst.CANDIDATE_PROCESS_STATUS_DETECED
                };
                this.topFramesCandidates.push(candidate);
                PosdCommon.SetBisDepth(frames[i], 0);
                PosdCommon.SetBisChainId(frames[i], this.chainIdCounter);
                newCandidatesAmount = newCandidatesAmount + 1;

                if (this.AdBlockerAgent.IsEnabled()) {
                  PosdCommon.HideElement(frames[i]);
                  this.CandidateHidden();
                }

                if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && !this.AdBlockerAgent.IsEnabled()) {
                  frames[i].style.cssText += 'border: 6px solid red !important;';
                }
              }
            } else {
              PosdCommon.SetFullSizeToElement(frames[i]);
            }
          } else {
            PosdCommon.SetFullSizeToElement(frames[i]);
          }
        }
      }

      if (newCandidatesAmount > 0) {
        PosdContentIOManager.SendHtml5CandidatePlacements(this.id, newCandidatesAmount, null);

        var _loop = function _loop(_i) {
          if (_this3.topFramesCandidates[_i].status === PosdConst.CANDIDATE_PROCESS_STATUS_DETECED) {
            _this3.topFramesCandidates[_i].status = PosdConst.CANDIDATE_PROCESS_STATUS_START_PROCESSING;
            setTimeout(function () {
              _this3.ActivateCandidateProcessing(_this3.topFramesCandidates[_i]);
            }, 3000 + PosdCommon.GetRandomIntInRange(0, 500));
          }
        };

        for (var _i = 0; _i < this.topFramesCandidates.length; _i++) {
          _loop(_i);
        }

        if (this.AdBlockerAgent.IsEnabled()) {
          this.AdBlockerAgent.SetHiddenAmount(this.HiddenAmount);
        }
      }

      return this.topFramesCandidates.length;
    }
  }, {
    key: "onGotHTML5CandidatesExtractionStatuses",
    value: function onGotHTML5CandidatesExtractionStatuses(statuses) {
      if (statuses && statuses.length) {
        for (var i = 0; i < statuses.length; i++) {
          if (this.AdBlockerAgent.IsEnabled() && statuses[i].extractionStatus.filteredOut) {
            PosdCommon.UnhideElement(PosdCommon.QuerySelector(document, "iframe[bis_chainid=\"".concat(statuses[i].chainId, "\"]")));
          } else if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES) {
            var iframe = PosdCommon.QuerySelector(document, "iframe[bis_chainid=\"".concat(statuses[i].chainId, "\"]"));

            if (iframe) {
              PosdCommon.UpdateCandidateStatusBorderColor(iframe, statuses[i].extractionStatus);
            }
          }
        }
      }
    }
  }, {
    key: "ActivateCandidateProcessing",
    value: function ActivateCandidateProcessing(candidate) {
      if (candidate && candidate.status && candidate.status === PosdConst.CANDIDATE_PROCESS_STATUS_START_PROCESSING) {
        candidate.processingStartTime = new Date().getTime();
        candidate.status = PosdConst.CANDIDATE_PROCESS_STATUS_PROCESSING_ACTIVATED;
        var isSecure = PosdCommon.IsIframeSecure(candidate.frame);

        if (candidate.isSecure !== isSecure) {
          candidate.isSecure = isSecure;
        }

        var hasContentScript = PosdCommon.IsIframeHasContentScript(candidate.frame);

        if (candidate.hasContentScript !== hasContentScript) {
          candidate.hasContentScript = hasContentScript;
        }

        if (candidate.hasContentScript) {
          PosdFrameContent.SendActivationMesToFrame(this.id, candidate.chainId, candidate.frame, 0, this.Config);
        } else {
          var invalidChainSegmentContent = PosdFrameContent.GetInvalidChainSegmentContent(this.id, candidate.chainId, candidate.frame, 0, this.Config);

          if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES && invalidChainSegmentContent.isChainCompleted) {
            var extractionStatus = {
              fullContentExtracted: false,
              targetUrlExtracted: false,
              sentToBackend: false
            };

            if (invalidChainSegmentContent.contentFinal && invalidChainSegmentContent.contentFinal.length) {
              extractionStatus.fullContentExtracted = true;
            }

            if (invalidChainSegmentContent.targetUrl && invalidChainSegmentContent.targetUrl.length) {
              extractionStatus.targetUrlExtracted = true;
            }

            PosdCommon.UpdateCandidateStatusBorderColor(candidate.frame, extractionStatus);
          } else {}

          PosdFrameContent.SendInvalidChainSegmentContent(this.id, invalidChainSegmentContent);
        }
      } else {}
    }
  }, {
    key: "GetPrebildInfo",
    value: function GetPrebildInfo() {
      var preBuildInfo = [];
      var currentTime = new Date().getTime();

      for (var i = 0; i < this.topFramesCandidates.length; i++) {
        if (this.topFramesCandidates[i].status === PosdConst.CANDIDATE_PROCESS_STATUS_PROCESSING_ACTIVATED) {
          this.topFramesCandidates[i].status = PosdConst.CANDIDATE_PROCESS_STATUS_PREBUILD_INFO_SENT;
          preBuildInfo.push({
            ticketId: this.topFramesCandidates[i].ticketId,
            pageUrl: this.topFramesCandidates[i].pageUrl,
            bisId: this.topFramesCandidates[i].bisId,
            chainId: this.topFramesCandidates[i].chainId,
            timeAfterDetection: currentTime - this.topFramesCandidates[i].detectionTime,
            timeAfterProcessingStart: currentTime - this.topFramesCandidates[i].processingStartTime
          });
        }
      }

      return preBuildInfo;
    }
  }, {
    key: "IsFrameFromSite",
    value: function IsFrameFromSite(iframesSrc) {
      var result = false;
      var src = iframesSrc;

      if (src.length) {
        var urlEndIndex = src.indexOf('?');

        if (urlEndIndex > 0) {
          src = iframesSrc.substring(0, urlEndIndex);
        } else {
          urlEndIndex = src.indexOf('#');

          if (urlEndIndex > 0) {
            src = iframesSrc.substring(0, urlEndIndex);
          }
        }

        if (src.indexOf(window.location.host) != -1) {
          result = true;
        } else {
          if (!PosdCommon.IsUrl(src) && src != 'about:blank') {
            result = true;
          }
        }
      }

      return result;
    }
  }]);

  return PosdHTML5Ads;
}(PosdAdsCandidates);

module.exports = PosdHTML5Ads;

/***/ }),

/***/ "./src/content/IframesIO.js":
/*!**********************************!*\
  !*** ./src/content/IframesIO.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdMessage = __webpack_require__(/*! ../libs/Message */ "./src/libs/Message.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdAtrMessageListener = __webpack_require__(/*! ./AtrMessageListener */ "./src/content/AtrMessageListener.js");

var PosdIframesIO = /*#__PURE__*/function () {
  function PosdIframesIO(id) {
    _classCallCheck(this, PosdIframesIO);

    this.id = id;
    this.init = false;
    this.AtrMessageListeners = [];
    this.webNavigationIframes = [];
    this.chainActivationListernerIntervalId = null;
    this.onWindowEmbeddedTargetUrlDetectionCallback = null;
    this.onGotContentMesCallback = null;
    this.onGotChainActivationCallback = null;
    this.onGotVideoXHRTrafficCallback = null;
    this.chainActivationEventProcessed = false;
    this.processedMessages = [];
  }

  _createClass(PosdIframesIO, [{
    key: "IsInit",
    value: function IsInit() {
      return this.init;
    }
  }, {
    key: "SetId",
    value: function SetId(id) {
      this.id = id;

      if (this.AtrMessageListener) {
        this.AtrMessageListener.SetId(id);
      }
    }
  }, {
    key: "Init",
    value: function Init() {
      var _this = this;

      if (!this.init) {
        this.init = true;
        window.addEventListener("message", function (event) {
          try {
            var mes = event.data;

            _this.ProcessWindowMessage(mes);
          } catch (e) {}
        }, false);

        if (PosdCommon.IsOnChromeRuntime()) {
          chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            var mes = request;

            if (PosdMessage.IsValid(mes)) {
              if (mes.type === PosdConst.MESSAGE_TYPE_GET_FRAME_CONTENT) {
                if (mes.multiTo.includes(_this.id)) {
                  _this.webNavigationIframes = mes.content;

                  if (_this.onGotContentMesCallback) {
                    _this.onGotContentMesCallback();
                  }
                }
              } else if (mes.type === PosdConst.MESSAGE_TYPE_TARGET_URL_DETECTION_BY_CLICK) {
                if (mes.multiTo.includes(_this.id)) {
                  _this.ActivateWindowClickTargetUrlDetection(mes.content);
                }
              }
            } else {}
          });
        }

        this.chainActivationListernerIntervalId = setInterval(function () {
          try {
            if (!_this.chainActivationEventProcessed) {
              var activAttr = document.body.getAttribute('bis_activation');

              if (activAttr && activAttr.length) {
                var mes = JSON.parse(PosdBase64.decode(activAttr));

                if (PosdMessage.IsValid(mes)) {
                  if (mes.type === PosdConst.MESSAGE_TYPE_CHAIN_ACTIVATION) {
                    _this.chainActivationEventProcessed = true;
                    clearInterval(_this.chainActivationListernerIntervalId);
                    _this.chainActivationListernerIntervalId = null;
                    document.body.setAttribute('bis_activation', 'done');

                    if (_this.onGotChainActivationCallback) {
                      _this.onGotChainActivationCallback(mes.content);
                    }
                  }
                }
              }
            }
          } catch (e) {}
        }, 500);
      }
    }
  }, {
    key: "ProcessWindowMessage",
    value: function ProcessWindowMessage(mes) {
      if (PosdMessage.IsValid(mes)) {
        if (mes.posdHash && !this.processedMessages.includes(mes.posdHash)) {
          if (mes.posdHash && mes.posdHash.length) {
            this.processedMessages.push(mes.posdHash);
          }

          if (mes.type === PosdConst.MESSAGE_TYPE_CHAIN_ACTIVATION) {
            if (this.chainActivationListernerIntervalId) {
              clearInterval(this.chainActivationListernerIntervalId);
              this.chainActivationListernerIntervalId = null;
            }

            if (this.onGotChainActivationCallback) {
              this.onGotChainActivationCallback(mes.content);
            }
          } else if (mes.type === PosdConst.MESSAGE_TYPE_GET_WINDOW_TARGET_URL_RESPOND) {
            if (this.onWindowEmbeddedTargetUrlDetectionCallback) {
              this.onWindowEmbeddedTargetUrlDetectionCallback(mes.content);
            } else {}
          } else if (mes.type === PosdConst.MESSAGE_TYPE_GET_WINDOW_CLICK_TARGET_URL_RESPOND) {
            mes.to = 'bg';

            if (PosdCommon.IsOnChromeRuntime()) {
              chrome.runtime.sendMessage(mes);
            }
          } else if (mes.type === PosdConst.MESSAGE_TYPE_VIDEO_XHR_CANDIDATE) {
            if (this.onGotVideoXHRTrafficCallback) {
              this.onGotVideoXHRTrafficCallback(mes.content);
            } else {}
          }
        } else {}
      } else {}
    }
  }, {
    key: "ActivateWindowEmbeddedTargetUrlDetection",
    value: function ActivateWindowEmbeddedTargetUrlDetection(onWindowEmbeddedTargetUrlDetectionCallback) {
      try {
        this.onWindowEmbeddedTargetUrlDetectionCallback = onWindowEmbeddedTargetUrlDetectionCallback;
        var mes = PosdMessage.EmptyMessage;
        mes.type = PosdConst.MESSAGE_TYPE_GET_WINDOW_TARGET_URL;
        mes.from = this.id;
        mes.to = this.id + "_w";

        if (window.postMessage) {
          window.postMessage(mes, '*');
        } else {}

        var atrMessageListener = new PosdAtrMessageListener(this.id, this.ProcessWindowMessage.bind(this));
        atrMessageListener.ActivateMesToFrameContentListener(PosdConst.MESSAGE_TYPE_GET_WINDOW_TARGET_URL_RESPOND);
        this.AtrMessageListeners.push(atrMessageListener);
      } catch (e) {}
    }
  }, {
    key: "ActivateWindowClickTargetUrlDetection",
    value: function ActivateWindowClickTargetUrlDetection(inMesContent) {
      try {
        var mes = PosdMessage.EmptyMessage;
        mes.type = PosdConst.MESSAGE_TYPE_GET_WINDOW_CLICK_TARGET_URL;
        mes.from = this.id;
        mes.to = this.id + "_w";
        mes.content = inMesContent;

        if (window.postMessage) {
          window.postMessage(mes, '*');
        } else {}

        var atrMessageListener = new PosdAtrMessageListener(this.id, this.ProcessWindowMessage.bind(this));
        atrMessageListener.ActivateMesToFrameContentListener(PosdConst.MESSAGE_TYPE_GET_WINDOW_CLICK_TARGET_URL);
        this.AtrMessageListeners.push(atrMessageListener);
      } catch (e) {}
    }
  }, {
    key: "SendInputsDetected",
    value: function SendInputsDetected() {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_IFRAME_CONTENT_INFO_DETECTED_INPUTS;
      mes.from = this.id;
      mes.to = 'bg';

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "SendRedirectDetected",
    value: function SendRedirectDetected() {
      var mes = PosdMessage.EmptyMessage;
      mes.type = PosdConst.MESSAGE_TYPE_IFRAME_CONTENT_INFO_DETECTED_REDIRECTS;
      mes.from = this.id;
      mes.to = 'bg';

      if (PosdCommon.IsOnChromeRuntime()) {
        chrome.runtime.sendMessage(mes);
      }
    }
  }, {
    key: "Context",
    get: function get() {
      return this;
    }
  }]);

  return PosdIframesIO;
}();

module.exports = PosdIframesIO;

/***/ }),

/***/ "./src/content/MainPageContent.js":
/*!****************************************!*\
  !*** ./src/content/MainPageContent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdTicket = __webpack_require__(/*! ./Ticket */ "./src/content/Ticket.js");

var PosdAdsManager = __webpack_require__(/*! ./AdsManager */ "./src/content/AdsManager.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdAdBlockerAgent = __webpack_require__(/*! ./AdBlockerAgent */ "./src/content/AdBlockerAgent.js");

var PosdAdBlockInspectorAgent = __webpack_require__(/*! ./AdBlockInspectorAgent */ "./src/content/AdBlockInspectorAgent.js");

var PosdConfigAgent = __webpack_require__(/*! ./ConfigAgent */ "./src/content/ConfigAgent.js");

var PosdPanelsRegulator = __webpack_require__(/*! ./PanelsRegulator */ "./src/content/PanelsRegulator.js");

var PosdMainPageContent = /*#__PURE__*/function () {
  function PosdMainPageContent() {
    _classCallCheck(this, PosdMainPageContent);

    this.id = null;
    this.tabId = null;
    this.init = false;
    this.panelistId = '';
    this.adsCandidatesDetectionInterval = null;
    this.ticket = null;
    this.RefreshTicket();
  }

  _createClass(PosdMainPageContent, [{
    key: "RefreshTicket",
    value: function RefreshTicket() {
      this.pageUrl = document.location.href;
      this.ticketId = PosdCommon.GenerateTicketId();
      this.cycleNumber = 0;
      this.ticket = PosdTicket.GetSingleOutTicket(this.panelistId, this.ticketId, this.tabId);

      if (this.init && this.AdsManager) {
        this.AdsManager.PageRefreshed(this.pageUrl, this.ticketId);
      }
    }
  }, {
    key: "Init",
    value: function Init() {
      if (!this.init) {
        PosdContentIOManager.SendInitMes({
          ticketId: this.ticketId,
          url: this.pageUrl
        }, this.onGetInitConfig.bind(this));
      }
    }
  }, {
    key: "onGetInitConfig",
    value: function onGetInitConfig(config) {
      if (config.activeStatus) {
        if (!this.init) {
          this.init = true;
          this.tabId = config.tabId;
          this.id = 'mp_' + config.tabId;
          this.panelistId = config.panelistId;
          this.ticket.tabId = this.tabId;
          this.ticket.panelistId = this.panelistId;
          this.Config = new PosdConfigAgent(this.id, config.configuration);
          this.IOManager = new PosdContentIOManager(this.id);
          this.IOManager.onTabUrlChanged = this.onTabUrlChanged.bind(this);
          this.IOManager.Init();
          this.AdBlockerAgent = new PosdAdBlockerAgent(this.id, this.IOManager);
          this.AdBlockerAgent.Init(config.adBlockerStatus, config.tabId);
          this.AdsManager = new PosdAdsManager(this.id, this.Config, this.IOManager, this.AdBlockerAgent);
          this.PanelsRegulator = new PosdPanelsRegulator(this.id);
          this.PanelsRegulator.Init(this.AdBlockerAgent, this.onGotRegulatorRespond.bind(this));

          if (config.activeAdBlockInspectorAgent) {
            this.AdBlockInspectorAgent = new PosdAdBlockInspectorAgent(this.id);
            this.AdBlockInspectorAgent.Init(this.Config.GetAdBlockInspectorConfig());
          } else {}
        }
      } else {}
    }
  }, {
    key: "onGotRegulatorRespond",
    value: function onGotRegulatorRespond(isMaster) {
      if (this.init) {
        if (isMaster) {
          this.adsCandidatesDetectionInterval = setInterval(this.onAdsCandidatesDetected.bind(this), 10000);
          this.AdsManager.ActivateAdsdetectors();
          PosdContentIOManager.SendNewPageCreatedTicket(PosdCommon.ToJSON(this.ticket));
        } else {}

        PosdContentIOManager.SendPanelRegulatorResult(isMaster);
      }
    }
  }, {
    key: "onTabUrlChanged",
    value: function onTabUrlChanged(changeInfo) {
      if (changeInfo && changeInfo.newUrl && changeInfo.initedTicketId) {
        if (changeInfo.newUrl !== this.pageUrl && changeInfo.initedTicketId === this.ticketId) {
          this.RefreshTicket();
          PosdContentIOManager.SendSinglePageReinitMes({
            ticketId: this.ticketId,
            url: this.pageUrl
          });
        }
      }
    }
  }, {
    key: "onAdsCandidatesDetected",
    value: function onAdsCandidatesDetected() {
      if (this.init) {
        if (PosdCommon.IsOnChromeRuntime()) {
          if (this.panelistId.length) {
            this.cycleNumber = this.cycleNumber + 1;
            this.ticket.panelistId = this.panelistId;
            this.ticket.windowSize = PosdCommon.GetWindowSize();

            if (this.cycleNumber > 1) {
              this.ticket.firstVisit = false;
            }

            this.ticket.adCandidatesHtml5 = this.AdsManager.GetHtml5CandidatesPrebildInfo();
            this.IOManager.SendTicket(PosdCommon.ToJSON(this.ticket));
          } else {}
        } else {
          if (this.adsCandidatesDetectionInterval) {
            clearInterval(this.adsCandidatesDetectionInterval);
          }
        }
      }
    }
  }]);

  return PosdMainPageContent;
}();

module.exports = PosdMainPageContent;

/***/ }),

/***/ "./src/content/PanelsRegulator.js":
/*!****************************************!*\
  !*** ./src/content/PanelsRegulator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdPanelsRegulator = /*#__PURE__*/function () {
  function PosdPanelsRegulator(id) {
    _classCallCheck(this, PosdPanelsRegulator);

    this.id = id;
    this.init = false;
    this.extensionId = '' + chrome.runtime.id;
    this.AdBlockerAgent = null;
    this.onInitCallback = null;
  }

  _createClass(PosdPanelsRegulator, [{
    key: "Init",
    value: function Init(AdBlockerAgent, onInitCallback) {
      if (!this.init && AdBlockerAgent) {
        this.onInitCallback = onInitCallback;
        this.init = true;
        this.AdBlockerAgent = AdBlockerAgent;

        if (document.readyState === PosdConst.DOCUMENT_READYSTATE_LOADING) {
          document.addEventListener('DOMContentLoaded', this.ActivateRegulator.bind(this));
        } else if (document.readyState === PosdConst.DOCUMENT_READYSTATE_INTERACTIVE || document.readyState === PosdConst.DOCUMENT_READYSTATE_COMPLETE) {
          this.ActivateRegulator();
        }
      }
    }
  }, {
    key: "ActivateRegulator",
    value: function ActivateRegulator() {
      this.RegisterPanel();
      setTimeout(this.Regulate.bind(this), 500);
    }
  }, {
    key: "Regulate",
    value: function Regulate() {
      var isMaster = true;
      var masterExtensionId = '';
      var register = [];

      try {
        var registerStr = document.body.getAttribute('bis_register');

        if (registerStr && registerStr.length) {
          register = JSON.parse(PosdBase64.decode(registerStr));

          for (var i = 0; i < register.length && masterExtensionId.length === 0; i++) {
            if (register[i].master) {
              masterExtensionId = register[i].extensionId;
            }
          }

          if (masterExtensionId.length) {
            if (this.extensionId !== masterExtensionId) {
              isMaster = false;
            }
          }
        }
      } catch (e) {}

      if (this.onInitCallback) {
        this.onInitCallback(isMaster);
      }
    }
  }, {
    key: "GetPanelScore",
    value: function GetPanelScore() {
      var spliteVersion = PosdConfig.CONFIG_PANELOS_VERSION.split('.');
      var score = parseInt(spliteVersion[0]) * 10000 + parseInt(spliteVersion[1]) * 100 + parseInt(spliteVersion[2]);
      var adblockerStatus = this.AdBlockerAgent.GetStatus();

      if (PosdCommon.IsFacebookUrl(document.location.href)) {
        if (adblockerStatus[PosdConst.ADBLOCKER_FOR_FACEBOOK] === PosdConst.ADBLOCKER_STATUS_ENABLED) {
          score = score * 10;
        }
      } else if (PosdCommon.IsTwitterUrl(document.location.href)) {
        if (adblockerStatus[PosdConst.ADBLOCKER_FOR_TWITTER] === PosdConst.ADBLOCKER_STATUS_ENABLED) {
          score = score * 10;
        }
      } else if (adblockerStatus[PosdConst.ADBLOCKER_FOR_DISPLAY] === PosdConst.ADBLOCKER_STATUS_ENABLED) {
        score = score * 10;
      }

      return score;
    }
  }, {
    key: "UpdateRegister",
    value: function UpdateRegister(register) {
      var registerRecord = {
        master: true,
        extensionId: this.extensionId,
        adblockerStatus: this.AdBlockerAgent.GetStatus(),
        version: PosdConfig.CONFIG_PANELOS_VERSION,
        score: this.GetPanelScore()
      };
      var isNew = true;

      for (var i = 0; i < register.length && isNew; i++) {
        if (register[i].extensionId === this.extensionId) {
          isNew = false;
          register[i] = registerRecord;
        }
      }

      if (isNew) {
        register.push(registerRecord);
      }
    }
  }, {
    key: "ChooseWinner",
    value: function ChooseWinner(register) {
      if (register && register.length) {
        if (register.length === 1) {} else {
          var masterIndex = 0;
          var masterScore = register[masterIndex].score;

          for (var i = 0; i < register.length; i++) {
            register[i].master = false;

            if (register[i].score > masterScore) {
              masterScore = register[i].score;
              masterIndex = i;
            }
          }

          register[masterIndex].master = true;
        }
      }
    }
  }, {
    key: "RegisterPanel",
    value: function RegisterPanel() {
      try {
        var register = [];
        var registerStr = document.body.getAttribute('bis_register');

        if (registerStr && registerStr.length) {
          register = JSON.parse(PosdBase64.decode(registerStr));
        }

        this.UpdateRegister(register);
        this.ChooseWinner(register);
        document.body.setAttribute('bis_register', PosdBase64.encode(JSON.stringify(register)));
      } catch (e) {}
    }
  }]);

  return PosdPanelsRegulator;
}();

module.exports = PosdPanelsRegulator;

/***/ }),

/***/ "./src/content/SkinAds.js":
/*!********************************!*\
  !*** ./src/content/SkinAds.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdAdsCandidates = __webpack_require__(/*! ./AdsCandidates */ "./src/content/AdsCandidates.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdSkinAds = /*#__PURE__*/function (_PosdAdsCandidates) {
  _inherits(PosdSkinAds, _PosdAdsCandidates);

  function PosdSkinAds(id, Config, IOManager, AdBlockerAgent) {
    var _this;

    _classCallCheck(this, PosdSkinAds);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PosdSkinAds).call(this, id));
    _this.Config = Config;
    _this.IOManager = IOManager;
    _this.AdBlockerAgent = AdBlockerAgent;
    return _this;
  }

  _createClass(PosdSkinAds, [{
    key: "ActivateDetector",
    value: function ActivateDetector() {
      var _this2 = this;

      this.DetectCandidates();
      setTimeout(function () {
        _this2.DetectCandidates();
      }, 500);
      setInterval(function () {
        _this2.DetectCandidates();
      }, 1000);
    }
  }, {
    key: "SendCandidatesToBackground",
    value: function SendCandidatesToBackground() {
      if (this.Candidates.length) {
        if (this.AdBlockerAgent.IsEnabled()) {
          this.AdBlockerAgent.SetHiddenAmount(this.HiddenAmount);
        }

        PosdContentIOManager.SendSkinAdsCandidates(this.id, this.Candidates, null);
      }
    }
  }, {
    key: "DetectCandidates",
    value: function DetectCandidates() {
      if (this.AdBlockerAgent.IsEnabled()) {
        this.ClearHiddenCounter();
      }

      this.ClearCandidates();
      this.GetSkinAdFromBodyBackground();

      if (this.CandidatesCount == 0) {
        this.GetSkinAdFromDivBackground();
      }

      this.SendCandidatesToBackground();
    }
  }, {
    key: "GetSkinAdFromBodyBackground",
    value: function GetSkinAdFromBodyBackground() {
      var candidate = {
        source: [],
        targetUrl: []
      };
      var backgroundImageSrc = PosdCommon.GetUrlFromStyleStr(window.getComputedStyle(document.body).backgroundImage);

      if (backgroundImageSrc && PosdCommon.IsUrl(backgroundImageSrc)) {
        var skinAdsource = {
          type: "single",
          src: backgroundImageSrc,
          size: PosdCommon.GetFullElementSize(document.body)
        };
        candidate.source.push(skinAdsource);
        var fullHrefCollection = PosdCommon.QuerySelectorAll(document, "A[href]:not([bis_skin_checked])");

        for (var i = 0; i < fullHrefCollection.length; i++) {
          var element = fullHrefCollection[i];

          if (element.setAttribute) {
            element.setAttribute("bis_skin_checked", "1");
          }

          var rectData = element.getBoundingClientRect();

          if (element.href && rectData.width > 50 && rectData.height > 500 && rectData.left == 0) {
            if (PosdCommon.IsUrl(element.href)) {
              candidate.targetUrl.push(element.href);
            }
          }
        }
      }

      if (candidate.source.length && candidate.targetUrl.length) {
        if (this.AdBlockerAgent.IsEnabled()) {
          if (document.body && document.body.style) {
            document.body.style.backgroundImage = 'none';
            this.CandidateHidden();
          }
        }

        this.AddCandidate(candidate);
      }
    }
  }, {
    key: "GetSkinAdFromDivBackground",
    value: function GetSkinAdFromDivBackground() {
      var candidate = {
        source: [],
        targetUrl: []
      };
      var findSkinAdDiv = false;
      var fullDivCollection = PosdCommon.QuerySelectorAll(document, "div:not([bis_skin_checked])");

      for (var i = 0; i < fullDivCollection.length && !findSkinAdDiv; i++) {
        var element = fullDivCollection[i];

        if (element.setAttribute) {
          element.setAttribute("bis_skin_checked", "1");
        }

        var rectData = element.getBoundingClientRect();

        if (rectData.width > 50 && rectData.height > 500 && rectData.left == 0) {
          var backgroundImageSrc = PosdCommon.GetUrlFromStyleStr(window.getComputedStyle(element).backgroundImage);

          if (backgroundImageSrc && PosdCommon.IsUrl(backgroundImageSrc)) {
            var skinAdsource = {
              type: "single",
              src: backgroundImageSrc,
              size: PosdCommon.GetFullElementSize(element)
            };
            candidate.source.push(skinAdsource);
            findSkinAdDiv = true;

            if (this.AdBlockerAgent.IsEnabled() && element.style) {
              element.style.backgroundImage = 'none';
              this.CandidateHidden();
            }
          }
        }
      }

      if (findSkinAdDiv) {
        var fullHrefCollection = PosdCommon.QuerySelectorAll(document, "A[href]:not([bis_skin_checked])");

        for (var j = 0; j < fullHrefCollection.length; j++) {
          var element = fullHrefCollection[j];

          if (element.setAttribute) {
            element.setAttribute("bis_skin_checked", "1");
          }

          var rectData = element.getBoundingClientRect();

          if (element.href && rectData.left == 0) {
            if (rectData.width > 50 && rectData.height > 500 || rectData.width > 500 && rectData.height > 50) {
              if (PosdCommon.IsUrl(element.href)) {
                candidate.targetUrl.push(element.href);
              }
            }
          }
        }
      }

      if (candidate.source.length && candidate.targetUrl.length) {
        this.AddCandidate(candidate);
      }
    }
  }]);

  return PosdSkinAds;
}(PosdAdsCandidates);

module.exports = PosdSkinAds;

/***/ }),

/***/ "./src/content/TargetUrlDetector.js":
/*!******************************************!*\
  !*** ./src/content/TargetUrlDetector.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdTargetUrlDetector = /*#__PURE__*/function () {
  function PosdTargetUrlDetector(chainId, frameId, id, activationTargetUrlCandidates, Config) {
    _classCallCheck(this, PosdTargetUrlDetector);

    this.id = id;
    this.fullIdStr = PosdCommon.GetFullIdStr(chainId, frameId, id);
    this.init = false;
    this.targetUrl = [];
    this.targetUrlDetected = false;
    this.IframesIO = null;
    this.activationTargetUrlCandidates = activationTargetUrlCandidates;
    this.Config = Config;
    this.detectionTimerId = null;
    this.onDetectTargetUrlCallBack = null;
  }

  _createClass(PosdTargetUrlDetector, [{
    key: "Init",
    value: function Init(IO) {
      if (IO) {
        this.IframesIO = IO;
        this.init = true;
      }

      return this.init;
    }
  }, {
    key: "DetectTargetUrl",
    value: function DetectTargetUrl(detectionTimeoutMs, onDetectTargetUrlCallBack) {
      if (this.init && !this.targetUrlDetected && this.Config) {
        this.onDetectTargetUrlCallBack = onDetectTargetUrlCallBack;
        this.detectionTimerId = setTimeout(this.onTargetUrlDetectionTimout.bind(this), detectionTimeoutMs);

        if (this.activationTargetUrlCandidates && this.activationTargetUrlCandidates.length) {
          this.targetUrl = this.activationTargetUrlCandidates;
          this.TargetUrlDetected();
        } else {
          this.targetUrl = PosdTargetUrlDetector.GetHyperlinkEmbeddedTargetUrls(this.id, document, this.Config);
          var docTargetUrl = PosdTargetUrlDetector.GetDocumentEmbeddedTargetUrl(this.id, document);

          if (docTargetUrl.length) {
            if (!PosdCommon.IsInFilterList(this.Config.GetBlacklistTargetUrl(), docTargetUrl)) {
              this.targetUrl.push({
                href: docTargetUrl,
                square: 1000000
              });
              this.TargetUrlDetected();
            }
          }

          if (!this.targetUrlDetected) {
            this.IframesIO.ActivateWindowEmbeddedTargetUrlDetection(this.onGetWindowEmbeddedTargetUrl.bind(this));
          }
        }
      }
    }
  }, {
    key: "onGetWindowEmbeddedTargetUrl",
    value: function onGetWindowEmbeddedTargetUrl(winTargetUrl) {
      if (PosdCommon.IsUrl(winTargetUrl) && !PosdCommon.IsInFilterList(this.Config.GetBlacklistTargetUrl(), winTargetUrl)) {
        this.targetUrl.push({
          href: winTargetUrl,
          square: 1000000
        });
      } else {}

      this.TargetUrlDetected();
    }
  }, {
    key: "onTargetUrlDetectionTimout",
    value: function onTargetUrlDetectionTimout() {
      if (!this.targetUrlDetected) {
        this.TargetUrlDetected();
      }
    }
  }, {
    key: "TargetUrlDetected",
    value: function TargetUrlDetected() {
      this.targetUrlDetected = true;

      if (this.detectionTimerId) {
        clearTimeout(this.detectionTimerId);
        this.detectionTimerId = null;
      }

      if (this.onDetectTargetUrlCallBack) {
        this.onDetectTargetUrlCallBack();
      }
    }
  }, {
    key: "FrameTargetUrl",
    get: function get() {
      return this.targetUrl;
    }
  }], [{
    key: "GetWindowEmbeddedTargetUrl",
    value: function GetWindowEmbeddedTargetUrl(windowObj) {
      function isValid(url) {
        return typeof url === 'string' && url.length > 0 && (url.indexOf('http') !== -1 || url.indexOf('//') !== -1);
      }

      var find = false;
      var targetUrl = '';

      try {
        if (typeof windowObj.clickTag !== 'undefined' && isValid(windowObj.clickTag)) {
          targetUrl = windowObj.clickTag;
          find = true;
        }
      } catch (e) {}

      try {
        if (!find && typeof windowObj.adData !== 'undefined' && typeof windowObj.adData.destination_url !== 'undefined' && isValid(windowObj.adData.destination_url)) {
          targetUrl = windowObj.adData.destination_url;
          find = true;
        }
      } catch (e) {}

      try {
        if (!find && typeof windowObj.BF !== 'undefined' && typeof windowObj.BF.Parameters !== 'undefined' && typeof windowObj.BF.Parameters.targeturl !== 'undefined' && isValid(windowObj.BF.Parameters.targeturl)) {
          targetUrl = windowObj.BF.Parameters.targeturl;
          find = true;
        }
      } catch (e) {}

      try {
        if (!find && typeof windowObj.ADAPT !== 'undefined' && typeof windowObj.ADAPT.symbols !== 'undefined' && typeof windowObj.ADAPT.symbols.stage !== 'undefined' && typeof windowObj.ADAPT.symbols.stage.clickUrl !== 'undefined' && isValid(windowObj.ADAPT.symbols.stage.clickUrl)) {
          targetUrl = windowObj.ADAPT.symbols.stage.clickUrl;
          find = true;
        }
      } catch (e) {}

      try {
        if (!find && typeof windowObj.admixAPI !== 'undefined' && typeof windowObj.admixAPI.ownerBanner !== 'undefined' && typeof windowObj.admixAPI.ownerBanner.clickUrl !== 'undefined' && isValid(windowObj.admixAPI.ownerBanner.clickUrl)) {
          targetUrl = windowObj.admixAPI.ownerBanner.clickUrl;
          find = true;
        }
      } catch (e) {}

      return targetUrl;
    }
  }, {
    key: "DetectTargetUrlFromWindowObj",
    value: function DetectTargetUrlFromWindowObj(id, windowObj, config) {
      var targetUrl = [];

      try {
        targetUrl = PosdTargetUrlDetector.GetHyperlinkEmbeddedTargetUrls(id, windowObj.document, config);
      } catch (e) {}

      try {
        var docTargetUrl = PosdTargetUrlDetector.GetDocumentEmbeddedTargetUrl(id, windowObj.document);

        if (docTargetUrl.length) {
          if (!PosdCommon.IsInFilterList(config.GetBlacklistTargetUrl(), docTargetUrl)) {
            targetUrl.push({
              href: docTargetUrl,
              square: 1000000
            });
          }
        }
      } catch (e) {}

      try {
        var winTargetUrl = PosdTargetUrlDetector.GetWindowEmbeddedTargetUrl(windowObj);

        if (winTargetUrl.length) {
          if (!PosdCommon.IsInFilterList(config.GetBlacklistTargetUrl(), winTargetUrl)) {
            targetUrl.push({
              href: winTargetUrl,
              square: 1000001
            });
          }
        }
      } catch (e) {}

      return targetUrl;
    }
  }, {
    key: "GetHyperlinkEmbeddedTargetUrls",
    value: function GetHyperlinkEmbeddedTargetUrls(id, documentObj, config) {
      var elements = PosdCommon.QuerySelectorAll(documentObj, "A[href]");
      var a, aSize, aSquare;
      var targetUrl = [];
      var minSquareLimit = 100;

      for (var i = 0; i < elements.length; i++) {
        a = elements[i];

        if (!PosdCommon.IsInFilterList(config.GetBlacklistTargetUrl(), a.href)) {
          aSize = PosdCommon.GetElementSize(a);
          aSquare = aSize.w * aSize.h;
          var inEl = a.querySelectorAll('img, canvas');

          if (inEl.length) {
            var inElSize = void 0,
                inElSquare = void 0;

            for (var j = 0; j < inEl.length; j++) {
              inElSize = PosdCommon.GetElementSize(inEl[j]);
              inElSquare = inElSize.w * inElSize.h;

              if (inElSquare > aSquare) {
                aSquare = inElSquare;
                aSize.w = inElSize.w;
                aSize.h = inElSize.h;
              }
            }
          }

          if (aSquare >= minSquareLimit) {
            if (PosdCommon.IsUrl(a.href)) {
              targetUrl.push({
                href: a.href,
                square: aSquare
              });
            }
          } else {}
        } else {}
      }

      return targetUrl;
    }
  }, {
    key: "GetDocumentEmbeddedTargetUrl",
    value: function GetDocumentEmbeddedTargetUrl(id, documentObj) {
      function isValid(url) {
        return typeof url === "string" && url.length > 0 && (url.indexOf("http") !== -1 || url.indexOf("//") !== -1);
      }

      var find = false;
      var targetUrl = '';

      try {
        var scripts = documentObj.querySelectorAll('script[type="application/json"]');

        for (var i = 0; i < scripts.length && !find; i++) {
          var data = scripts[i].outerText;

          if (data.length > 1 && data[0] === '{' && data[data.length - 1] === '}' && data.indexOf("targets") != -1 && data.indexOf("redirectUrl") != -1 && data.indexOf("finalUrl") != -1) {
            var dataObj = JSON.parse(data);

            if (typeof dataObj.targets !== 'undefined' && typeof dataObj.targets.redirectUrl !== 'undefined' && typeof dataObj.targets.redirectUrl.finalUrl !== 'undefined') {
              if (isValid(dataObj.targets.redirectUrl.finalUrl)) {
                targetUrl = dataObj.targets.redirectUrl.finalUrl;
                find = true;
              }
            }
          }
        }
      } catch (e) {}

      return targetUrl;
    }
  }]);

  return PosdTargetUrlDetector;
}();

module.exports = PosdTargetUrlDetector;

/***/ }),

/***/ "./src/content/Ticket.js":
/*!*******************************!*\
  !*** ./src/content/Ticket.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdTicket = /*#__PURE__*/function () {
  function PosdTicket() {
    _classCallCheck(this, PosdTicket);
  }

  _createClass(PosdTicket, null, [{
    key: "GetSingleOutTicket",
    value: function GetSingleOutTicket(panelistId, ticketId, tabId) {
      var ticket = {
        tabId: tabId,
        ticketFormatVersion: 3,
        panelistId: panelistId,
        panelId: PosdConfig.CONFIG_PANEL_ID,
        partnerId: PosdConfig.CONFIG_PARTNER_ID,
        distributorId: PosdConfig.CONFIG_DISTRIBUTOR_ID,
        ticketId: ticketId,
        firstVisit: true,
        url: document.location.href,
        userAgent: navigator.userAgent,
        creationTime: PosdCommon.GetCurrentDataTimeStr(),
        windowSize: PosdCommon.GetWindowSize(),
        timeOnPage: 0,
        adCandidatesSkinAd: [],
        adCandidatesBanner: [],
        adCandidatesHtml5: [],
        adsFacebook: [],
        adsTwitter: [],
        adCandidatePlacements: {
          skinAd: 0,
          banner: 0,
          html5: 0,
          facebook: 0,
          twitter: 0
        },
        videoTraffics: [],
        activeAdBlocker: false
      };
      var baseHref = PosdCommon.GetBaseHref();

      if (baseHref !== "") {
        ticket.base = baseHref;
      }

      var manifestData = chrome.runtime.getManifest();
      ticket.extensionVersion = manifestData.version;
      ticket.panelosVersion = PosdConfig.CONFIG_PANELOS_VERSION;
      return ticket;
    }
  }]);

  return PosdTicket;
}();

module.exports = PosdTicket;

/***/ }),

/***/ "./src/content/TwitterAds.js":
/*!***********************************!*\
  !*** ./src/content/TwitterAds.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PosdConfig = __webpack_require__(/*! ../config */ "./src/config.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdAdsCandidates = __webpack_require__(/*! ./AdsCandidates */ "./src/content/AdsCandidates.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdTwitterAds = /*#__PURE__*/function (_PosdAdsCandidates) {
  _inherits(PosdTwitterAds, _PosdAdsCandidates);

  function PosdTwitterAds(id, Config, IOManager, AdBlockerAgent) {
    var _this;

    _classCallCheck(this, PosdTwitterAds);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PosdTwitterAds).call(this, id));
    _this.available = false;
    _this.onPageRefreshed = _this.onPageUrlChanged;
    _this.fwConfig = Config.GetTwitterConfig();
    _this.IOManager = IOManager;
    _this.AdBlockerAgent = AdBlockerAgent;
    _this.feedObserver = null;
    _this.rightColumnObserver = null;
    _this.elementId = 0;
    _this.activated = false;
    _this.processTwitterAdsInterval = null;
    _this.observerNodesListenerInterval = null;
    _this.reactivateDetectorTimeout = null;
    _this.observerNodesChecksAmount = 0;
    _this.lastFeedPostAdsCheckTime = PosdCommon.GetCurrentTimestampMs();
    _this.lastFeedWhoToFollowAdsCheckTime = PosdCommon.GetCurrentTimestampMs();
    _this.lastRightColumnWhoToFollowAdsCheckTime = PosdCommon.GetCurrentTimestampMs();
    return _this;
  }

  _createClass(PosdTwitterAds, [{
    key: "onPageUrlChanged",
    value: function onPageUrlChanged(pageUrl, ticketId) {
      if (this.available) {
        if (!this.reactivateDetectorTimeout) {
          this.reactivateDetectorTimeout = setTimeout(this.ReActivateDetector.bind(this), 100);
        } else {}
      }
    }
  }, {
    key: "ActivateDetector",
    value: function ActivateDetector(activator) {
      var _this2 = this;

      if (activator === PosdConst.ACTIVATION_BY_ADS_MANAGER) {
        this.available = true;
      }

      if (this.fwConfig && !this.activated) {
        this.activated = true;
        this.lastFeedPostAdsCheckTime = PosdCommon.GetCurrentTimestampMs() - 3000;
        this.lastFeedWhoToFollowAdsCheckTime = PosdCommon.GetCurrentTimestampMs() - 3000;
        this.lastRightColumnWhoToFollowAdsCheckTime = PosdCommon.GetCurrentTimestampMs() - 3000;
        this.processTwitterAdsInterval = setInterval(this.processTwitterAds.bind(this, PosdConst.AD_DETECTOR_INITIATOR_TIMER), 1000);

        if (this.AdBlockerAgent.IsEnabledForTwitter()) {
          this.processTwitterAds(PosdConst.AD_DETECTOR_INITIATOR_ACTIVATION);
          setTimeout(this.processTwitterAds.bind(this, PosdConst.AD_DETECTOR_INITIATOR_ACTIVATION), 350);
          setTimeout(this.processTwitterAds.bind(this, PosdConst.AD_DETECTOR_INITIATOR_ACTIVATION), 700);
        }

        this.observerNodesListenerInterval = setInterval(function () {
          _this2.observerNodesChecksAmount = _this2.observerNodesChecksAmount + 1;
          var feed = document.querySelector(_this2.fwConfig.FEED_CONTAINER);

          if (!_this2.feedObserver && feed) {
            _this2.feedObserver = new MutationObserver(_this2.processFeedTwitterAds.bind(_this2, PosdConst.AD_DETECTOR_INITIATOR_MUTATION));

            _this2.feedObserver.observe(feed, {
              childList: true,
              subtree: true
            });
          }

          var rightColumn = document.querySelector(_this2.fwConfig.RIGHT_COLUMN_CONTAINER);

          if (!_this2.rightColumnObserver && rightColumn) {
            _this2.rightColumnObserver = new MutationObserver(_this2.processRightColumnWhoToFollowAds.bind(_this2, PosdConst.AD_DETECTOR_INITIATOR_MUTATION));

            _this2.rightColumnObserver.observe(rightColumn, {
              childList: true,
              subtree: true
            });
          }

          if (feed && rightColumn || _this2.observerNodesChecksAmount > 20) {
            clearInterval(_this2.observerNodesListenerInterval);
            _this2.observerNodesListenerInterval = null;
          }
        }, 300);
      }
    }
  }, {
    key: "DeactivateDetector",
    value: function DeactivateDetector() {
      if (this.processTwitterAdsInterval) {
        clearInterval(this.processTwitterAdsInterval);
        this.processTwitterAdsInterval = null;
      }

      if (this.observerNodesListenerInterval) {
        clearInterval(this.observerNodesListenerInterval);
        this.observerNodesListenerInterval = null;
      }

      if (this.feedObserver) {
        this.feedObserver.disconnect();
        this.feedObserver = null;
      }

      if (this.rightColumnObserver) {
        this.rightColumnObserver.disconnect();
        this.rightColumnObserver = null;
      }

      this.observerNodesChecksAmount = 0;
      this.activated = false;
    }
  }, {
    key: "ReActivateDetector",
    value: function ReActivateDetector() {
      this.reactivateDetectorTimeout = null;
      this.DeactivateDetector();
      this.ActivateDetector();
    }
  }, {
    key: "processFeedTwitterAds",
    value: function processFeedTwitterAds(initiator) {
      this.processFeedPostAds(initiator);
      this.processFeedWhoToFollowAds(initiator);
    }
  }, {
    key: "processTwitterAds",
    value: function processTwitterAds(initiator) {
      this.processRightColumnWhoToFollowAds(initiator);
      this.processFeedTwitterAds(initiator);
    }
  }, {
    key: "processFeedPostAds",
    value: function processFeedPostAds(initiator) {
      var currentTime = PosdCommon.GetCurrentTimestampMs();

      if (currentTime - this.lastFeedPostAdsCheckTime > 300) {
        this.extractOccurrences(PosdConst.TWITTER_AD_PLACEMENT_TYPE_FEED);
        this.lastFeedPostAdsCheckTime = currentTime;
      }
    }
  }, {
    key: "processRightColumnWhoToFollowAds",
    value: function processRightColumnWhoToFollowAds(initiator) {
      var currentTime = PosdCommon.GetCurrentTimestampMs();

      if (currentTime - this.lastRightColumnWhoToFollowAdsCheckTime > 300) {
        this.extractOccurrences(PosdConst.TWITTER_AD_PLACEMENT_TYPE_RIGHT_COLUMN_WHO_TO_FOLLOW);
        this.lastRightColumnWhoToFollowAdsCheckTime = currentTime;
      }
    }
  }, {
    key: "processFeedWhoToFollowAds",
    value: function processFeedWhoToFollowAds(initiator) {
      var currentTime = PosdCommon.GetCurrentTimestampMs();

      if (currentTime - this.lastFeedWhoToFollowAdsCheckTime > 300) {
        this.extractOccurrences(PosdConst.TWITTER_AD_PLACEMENT_TYPE_FEED_WHO_TO_FOLLOW);
        this.lastFeedWhoToFollowAdsCheckTime = currentTime;
      }
    }
  }, {
    key: "extractOccurrences",
    value: function extractOccurrences(adPlacementType) {
      var allCells = [];

      if (adPlacementType === PosdConst.TWITTER_AD_PLACEMENT_TYPE_RIGHT_COLUMN_WHO_TO_FOLLOW) {
        allCells = Array.from(document.querySelectorAll(this.fwConfig.RIGHT_COLUMN_WHO_TO_FOLLOW_SELECTOR));
      } else if (adPlacementType === PosdConst.TWITTER_AD_PLACEMENT_TYPE_FEED) {
        allCells = Array.from(document.querySelectorAll(this.fwConfig.FEED_TWEETS_SELECTOR));
      } else if (adPlacementType === PosdConst.TWITTER_AD_PLACEMENT_TYPE_FEED_WHO_TO_FOLLOW) {
        allCells = Array.from(document.querySelectorAll(this.fwConfig.FEED_WHO_TO_FOLLOW_SELECTOR));
      }

      if (allCells.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = allCells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cell = _step.value;

            if (!cell.hasAttribute(PosdConst.ATTRIBUTE_BIS_ID) && !cell.hasAttribute(PosdConst.ATTRIBUTE_BIS_SIZE)) {
              if (this.IsPostContentRendered(cell)) {
                var size = PosdCommon.SetFullSizeToElement(cell);

                if (this.isPromoted(cell)) {
                  var bisId = PosdCommon.GenerateAndSetBisIdToTwitterAds(cell);
                  this.setSizesAndIdForAllElements(cell);
                  var adTwitter = {
                    content: PosdBase64.encode(cell.outerHTML),
                    screenName: this.getSponsorScreenName(cell),
                    stylesByElementBisId: this.getStylesByElementsBisId(cell),
                    adPlacementType: adPlacementType,
                    size: size,
                    userDataByScreenName: ""
                  };

                  if (this.AdBlockerAgent.IsEnabledForTwitter()) {
                    PosdCommon.HideElement(cell);
                    this.AdBlockerAgent.SetHiddenAmount(1);
                  }

                  setTimeout(this.processAndSendTwitterAd.bind(this, bisId, adTwitter), 100);
                }
              } else {}
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "processAndSendTwitterAd",
    value: function processAndSendTwitterAd(bisId, adTwitter) {
      var ad = document.querySelector("[bis_id=".concat(bisId, "]"));

      if (ad) {
        PosdContentIOManager.SendTwitterCandidatePlacements(this.id, 1, null);
        PosdContentIOManager.SendTwitterCandidates(this.id, [adTwitter], null);

        if (PosdConfig.CONFIG_MARK_AD_CANDIDATES && PosdConfig.CONFIG_MARK_PROCESSED_AD_CANDIDATES) {
          ad.style.cssText += 'border: 6px solid green !important;';
        }
      }
    }
  }, {
    key: "setSizesAndIdForAllElements",
    value: function setSizesAndIdForAllElements(element) {
      var _this3 = this;

      if (element) {
        var elementId = this.getElementId();
        element.setAttribute(PosdConst.ATTRIBUTE_BIS_ELEMENT_ID, elementId);
        element.querySelectorAll('*').forEach(function (node) {
          var elementId = _this3.getElementId();

          node.setAttribute(PosdConst.ATTRIBUTE_BIS_ELEMENT_ID, elementId);
          PosdCommon.SetFullSizeToElement(node);
        });
      }
    }
  }, {
    key: "isPromoted",
    value: function isPromoted(cell) {
      var _this4 = this;

      if (cell) {
        var promotedCandidate = Array.from(cell.querySelectorAll(this.fwConfig.PROMOTED_SELECTOR));

        if (promotedCandidate.length) {
          return promotedCandidate.some(function (el) {
            if (el.textContent) {
              var promotedText = el.textContent;
              return _this4.fwConfig.PROMOTED_ALIASES.some(function (promotedWord) {
                return promotedText.indexOf(promotedWord) >= 0;
              });
            } else {
              return false;
            }
          });
        }
      }

      return false;
    }
  }, {
    key: "minimiseComputedStyles",
    value: function minimiseComputedStyles(computedStyles) {
      var minimisedComputedStyles = {};

      for (var i = 0; i < computedStyles.length; i++) {
        var propertyName = computedStyles.item(i);
        var propertyValue = computedStyles.getPropertyValue(propertyName);

        if (!minimisedComputedStyles[propertyValue]) {
          minimisedComputedStyles[propertyValue] = [];
        }

        var propertyIndex = PosdConst.KNOWN_CSS_NAMES.indexOf(propertyName);

        if (propertyIndex >= 0) {
          minimisedComputedStyles[propertyValue].push(propertyIndex);
        } else {
          minimisedComputedStyles[propertyValue].push(propertyName);
        }
      }

      return minimisedComputedStyles;
    }
  }, {
    key: "getStyles",
    value: function getStyles(node) {
      var computedStyles = window.getComputedStyle(node, null);
      return this.minimiseComputedStyles(computedStyles);
    }
  }, {
    key: "addStylesForNode",
    value: function addStylesForNode(node, stylesByElementBisId) {
      var styles = this.getStyles(node);
      var bisElementId = node.getAttribute(PosdConst.ATTRIBUTE_BIS_ELEMENT_ID);
      stylesByElementBisId[bisElementId] = styles;
    }
  }, {
    key: "getStylesByElementsBisId",
    value: function getStylesByElementsBisId(tweetNode) {
      var _this5 = this;

      var stylesByElementsBisId = {};
      this.addStylesForNode(tweetNode, stylesByElementsBisId);
      tweetNode.querySelectorAll('*').forEach(function (node) {
        _this5.addStylesForNode(node, stylesByElementsBisId);
      });
      return stylesByElementsBisId;
    }
  }, {
    key: "getSponsorPageRelativeUrl",
    value: function getSponsorPageRelativeUrl(ad) {
      var href = "";
      var elms = ad.querySelectorAll('a');

      if (elms.length) {
        href = elms[0].getAttribute("href");
        var hrefX = elms[0].getBoundingClientRect().x;
        elms.forEach(function (el) {
          if (el.getBoundingClientRect().x < hrefX) {
            href = el.getAttribute("href");
            hrefX = el.getBoundingClientRect().x;
          }
        });
      }

      return href;
    }
  }, {
    key: "getSponsorScreenName",
    value: function getSponsorScreenName(ad) {
      var sponsorPageRelativeUrl = this.getSponsorPageRelativeUrl(ad);
      var startIndex = sponsorPageRelativeUrl.lastIndexOf("/") + 1;
      var screenName = sponsorPageRelativeUrl.substring(startIndex);
      return screenName;
    }
  }, {
    key: "IsPostContentRendered",
    value: function IsPostContentRendered(post) {
      var rendered = false;

      if (post) {
        var progressbars = post.querySelectorAll(this.fwConfig.PROGRESS_SELECTOR);

        if (progressbars && progressbars.length === 0) {
          var adSize = PosdCommon.GetFullElementSize(post);

          if (adSize.w > 0) {
            var imgs = post.querySelectorAll('img');

            if (imgs && imgs.length) {
              for (var j = 0; j < imgs.length && !rendered; j++) {
                var imgSize = PosdCommon.GetElementSize(imgs[j]);

                if (imgSize.w > 0 && imgSize.h > 0) {
                  rendered = true;
                }
              }
            }
          }
        }
      }

      return rendered;
    }
  }, {
    key: "getElementId",
    value: function getElementId() {
      return this.elementId++;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(adCells) {
      return typeof adCells == 'undefined' || adCells.length === 0;
    }
  }]);

  return PosdTwitterAds;
}(PosdAdsCandidates);

module.exports = PosdTwitterAds;

/***/ }),

/***/ "./src/content/VideoAds.js":
/*!*********************************!*\
  !*** ./src/content/VideoAds.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdBase64 = __webpack_require__(/*! ../libs/base64 */ "./src/libs/base64.js");

var PosdCommon = __webpack_require__(/*! ../libs/Common */ "./src/libs/Common.js");

var PosdVideoTraffic = __webpack_require__(/*! ./VideoTraffic */ "./src/content/VideoTraffic.js");

var PosdVideoTrafficDetector = __webpack_require__(/*! ./VideoTrafficDetector */ "./src/content/VideoTrafficDetector.js");

var PosdVideoTrafficValidator = __webpack_require__(/*! ./VideoTrafficValidator */ "./src/content/VideoTrafficValidator.js");

var PosdContentIOManager = __webpack_require__(/*! ./ContentIOManager */ "./src/content/ContentIOManager.js");

var PosdVideoAds = /*#__PURE__*/function () {
  function PosdVideoAds(id, Config, IOManager, injectXhrDetector) {
    _classCallCheck(this, PosdVideoAds);

    this.id = id;
    this.Config = Config;
    this.IOManager = IOManager;
    this.onDetectVideoHarCallback = null;
    this.VideoTrafficValidator = new PosdVideoTrafficValidator(this.id, this.Config);
    this.VideoTrafficDetector = new PosdVideoTrafficDetector(this.id);

    if (injectXhrDetector) {
      this.VideoTrafficDetector.InjectXhrDetector();
      this.IOManager.onGotVideoXHRTrafficCallback = this.ProcessVideoXHRTraffic.bind(this);
    } else {}
  }

  _createClass(PosdVideoAds, [{
    key: "ActivateDetector",
    value: function ActivateDetector() {
      this.CheckVideoTrafficInHTML();
      this.CheckVideoTrafficInJS();
    }
  }, {
    key: "PageRefreshed",
    value: function PageRefreshed(pageUrl, ticketId) {
      this.CheckVideoTrafficInHTML();
      this.CheckVideoTrafficInJS();
    }
  }, {
    key: "CheckVideoTrafficInHTML",
    value: function CheckVideoTrafficInHTML() {
      var videoTraffic = new PosdVideoTraffic(PosdConst.VIDEO_TRAFFIC_SOURCE_HTML, "GET", window.location.href, "text/html", document.documentElement.outerHTML);
      var validatorOnSuccess = this.VideoTrafficValidator.Validate(videoTraffic);

      if (validatorOnSuccess) {
        this.SendVideoTraffic(videoTraffic, validatorOnSuccess);
      } else {}
    }
  }, {
    key: "CheckVideoTrafficInJS",
    value: function CheckVideoTrafficInJS() {
      var scripts = PosdCommon.QuerySelectorAll(document, 'script');

      for (var i = 0; i < scripts.length; i++) {
        var videoTraffic = new PosdVideoTraffic(PosdConst.VIDEO_TRAFFIC_SOURCE_JS, "GET", scripts[i].src, "text/javascript", scripts[i].innerHTML);
        var validatorOnSuccess = this.VideoTrafficValidator.Validate(videoTraffic);

        if (validatorOnSuccess) {
          this.SendVideoTraffic(videoTraffic, validatorOnSuccess);
        } else {}
      }
    }
  }, {
    key: "ProcessVideoXHRTraffic",
    value: function ProcessVideoXHRTraffic(xhr) {
      if (PosdVideoTraffic.IsXHRvalid(xhr)) {
        var videoTraffic = new PosdVideoTraffic(PosdConst.VIDEO_TRAFFIC_SOURCE_XHR, xhr.requestMethod, xhr.url, xhr.type, xhr.content);
        var validatorOnSuccess = this.VideoTrafficValidator.Validate(videoTraffic);

        if (validatorOnSuccess) {
          this.SendVideoTraffic(videoTraffic, validatorOnSuccess);
        } else {}
      } else {}
    }
  }, {
    key: "SendVideoTraffic",
    value: function SendVideoTraffic(videoTraffic, validatorOnSuccess) {
      if (videoTraffic && validatorOnSuccess) {
        var videoHar = {
          requestMethod: videoTraffic.GetRequestMethod(),
          url: videoTraffic.GetUrl(),
          contentType: videoTraffic.GetType(),
          encodedText: PosdBase64.encode(videoTraffic.GetContent()),
          mediaType: validatorOnSuccess['name'],
          alias: validatorOnSuccess['alias']
        };
        PosdContentIOManager.SendVideoHar(this.id, videoHar);
      } else {}
    }
  }]);

  return PosdVideoAds;
}();

module.exports = PosdVideoAds;

/***/ }),

/***/ "./src/content/VideoTraffic.js":
/*!*************************************!*\
  !*** ./src/content/VideoTraffic.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdVideoTraffic = /*#__PURE__*/function () {
  function PosdVideoTraffic(trafficSource, requestMethod, url, type, content) {
    _classCallCheck(this, PosdVideoTraffic);

    this.trafficSource = trafficSource;
    this.requestMethod = requestMethod;
    this.url = url;
    this.type = type;
    this.content = content;
  }

  _createClass(PosdVideoTraffic, [{
    key: "GetTrafficSource",
    value: function GetTrafficSource() {
      return this.trafficSource;
    }
  }, {
    key: "GetRequestMethod",
    value: function GetRequestMethod() {
      return this.requestMethod;
    }
  }, {
    key: "GetUrl",
    value: function GetUrl() {
      return this.url;
    }
  }, {
    key: "GetType",
    value: function GetType() {
      return this.type;
    }
  }, {
    key: "GetContent",
    value: function GetContent() {
      return this.content;
    }
  }], [{
    key: "IsXHRvalid",
    value: function IsXHRvalid(xhr) {
      return xhr && xhr.hasOwnProperty('requestMethod') && xhr.hasOwnProperty('url') && xhr.url !== '';
    }
  }]);

  return PosdVideoTraffic;
}();

module.exports = PosdVideoTraffic;

/***/ }),

/***/ "./src/content/VideoTrafficDetector.js":
/*!*********************************************!*\
  !*** ./src/content/VideoTrafficDetector.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdVideoTrafficDetector = /*#__PURE__*/function () {
  function PosdVideoTrafficDetector(id) {
    _classCallCheck(this, PosdVideoTrafficDetector);

    this.id = id;
  }

  _createClass(PosdVideoTrafficDetector, [{
    key: "InjectXhrDetector",
    value: function InjectXhrDetector() {
      var inject = function inject() {
        var open = XMLHttpRequest.prototype.open;

        XMLHttpRequest.prototype.open = function () {
          this.requestMethod = arguments[0];
          open.apply(this, arguments);
        };

        var send = XMLHttpRequest.prototype.send;

        XMLHttpRequest.prototype.send = function () {
          var onreadystatechange = this.onreadystatechange;

          this.onreadystatechange = function () {
            function GenerateQuickId() {
              var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
              return randomStrId.substring(0, 22);
            }

            try {
              if (this.readyState === 4) {
                var id = 'detector';
                var mes = {
                  posdMessageId: 'PANELOS_MESSAGE',
                  posdHash: GenerateQuickId(),
                  type: 'VIDEO_XHR_CANDIDATE',
                  from: id,
                  to: id.substring(0, id.length - 2),
                  content: {
                    requestMethod: this.requestMethod,
                    url: this.responseURL,
                    type: this.getResponseHeader('content-type'),
                    content: this.response
                  }
                };
                window.postMessage(mes, '*');
              }
            } catch (e) {}

            if (onreadystatechange) {
              return onreadystatechange.apply(this, arguments);
            }
          };

          return send.apply(this, arguments);
        };
      };

      var script = document.createElement("script");
      script.innerHTML = "(".concat(inject.toString(), ")();");

      if (document.head) {
        document.head.appendChild(script);
      } else {}
    }
  }]);

  return PosdVideoTrafficDetector;
}();

module.exports = PosdVideoTrafficDetector;

/***/ }),

/***/ "./src/content/VideoTrafficValidator.js":
/*!**********************************************!*\
  !*** ./src/content/VideoTrafficValidator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdVideoTrafficValidator = /*#__PURE__*/function () {
  function PosdVideoTrafficValidator(id, Config) {
    _classCallCheck(this, PosdVideoTrafficValidator);

    this.id = id;
    this.Config = Config;
  }

  _createClass(PosdVideoTrafficValidator, [{
    key: "Validate",
    value: function Validate(videoTraffic) {
      var validators = [];
      var getValidators = false;

      if (videoTraffic) {
        if (videoTraffic.GetTrafficSource() === PosdConst.VIDEO_TRAFFIC_SOURCE_HTML) {
          validators = this.Config.GetVideoValidatorsForHTML();
          getValidators = true;
        } else if (videoTraffic.GetTrafficSource() === PosdConst.VIDEO_TRAFFIC_SOURCE_XHR) {
          validators = this.Config.GetVideoValidatorsForXHR();
          getValidators = true;
        } else if (videoTraffic.GetTrafficSource() === PosdConst.VIDEO_TRAFFIC_SOURCE_JS) {
          validators = this.Config.GetVideoValidatorsForJS();
          getValidators = true;
        }

        if (getValidators) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = validators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var validator = _step.value;
              var isValid = this.ValidateUseConfiguration(videoTraffic, validator);

              if (isValid) {
                return validator;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "ValidateUseConfiguration",
    value: function ValidateUseConfiguration(response, configuration) {
      var keys = Object.keys(configuration);
      var validators = [];

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];

        if (key.indexOf('Pattern') !== -1) {
          validators.push(key);
        }
      }

      var passed = 0;
      var handlers = {
        'domainPattern': 'GetUrl',
        'mimePattern': 'GetType',
        'contentPattern': 'GetContent'
      };

      for (var _i2 = 0, _validators = validators; _i2 < _validators.length; _i2++) {
        var validator = _validators[_i2];
        var regex = this.CreateRegExp(configuration[validator]);
        var handler = handlers[validator];
        passed += regex.test(response[handler]()) ? 1 : 0;
      }

      return passed === validators.length;
    }
  }, {
    key: "CreateRegExp",
    value: function CreateRegExp(str) {
      var flags = str.replace(/.*\/([gimy]*)$/, '$1');
      var pattern = str.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
      var regex = new RegExp(pattern, flags);
      return regex;
    }
  }]);

  return PosdVideoTrafficValidator;
}();

module.exports = PosdVideoTrafficValidator;

/***/ }),

/***/ "./src/content/main.js":
/*!*****************************!*\
  !*** ./src/content/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var PosdConst = __webpack_require__(/*! ../libs/Constants */ "./src/libs/Constants.js");

var PosdMainPageContent = __webpack_require__(/*! ./MainPageContent */ "./src/content/MainPageContent.js");

var PosdFrameContent = __webpack_require__(/*! ./FrameContent */ "./src/content/FrameContent.js");

if (self == top) {
  var posdMainPageContent = new PosdMainPageContent();
  posdMainPageContent.Init();
} else {
  if (document.readyState === PosdConst.DOCUMENT_READYSTATE_LOADING) {
    document.addEventListener('DOMContentLoaded', function () {
      var posdFrameContent = new PosdFrameContent();
      posdFrameContent.Init();
    });
  } else if (document.readyState === PosdConst.DOCUMENT_READYSTATE_INTERACTIVE || document.readyState === PosdConst.DOCUMENT_READYSTATE_COMPLETE) {
    var posdFrameContent = new PosdFrameContent();
    posdFrameContent.Init();
  }
}

/***/ }),

/***/ "./src/libs/Common.js":
/*!****************************!*\
  !*** ./src/libs/Common.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ./Constants */ "./src/libs/Constants.js");

var PosdCommon = /*#__PURE__*/function () {
  function PosdCommon() {
    _classCallCheck(this, PosdCommon);
  }

  _createClass(PosdCommon, null, [{
    key: "QuerySelectorAll",
    value: function QuerySelectorAll(context, argument) {
      return document.__proto__.querySelectorAll.call(context, argument);
    }
  }, {
    key: "QuerySelector",
    value: function QuerySelector(context, argument) {
      return document.__proto__.querySelector.call(context, argument);
    }
  }, {
    key: "Escape",
    value: function Escape(str) {
      return str.replace(/\"/g, "&quot;");
    }
  }, {
    key: "ToJSON",
    value: function ToJSON(obj) {
      if (typeof obj.toJSON == 'function') {
        return obj.toJSON();
      } else {
        return JSON.stringify(obj);
      }
    }
  }, {
    key: "GetBaseHref",
    value: function GetBaseHref() {
      var base = PosdCommon.QuerySelector(document, "base");

      if (base && base.href) {
        return base.href;
      } else {
        return "";
      }
    }
  }, {
    key: "GetTabIdKey",
    value: function GetTabIdKey(tabId) {
      return 'tb_' + tabId;
    }
  }, {
    key: "GetMainPageId",
    value: function GetMainPageId(tabId) {
      return 'mp_' + tabId;
    }
  }, {
    key: "IsOnChromeRuntime",
    value: function IsOnChromeRuntime() {
      if (chrome.app) {
        return typeof chrome.app.isInstalled !== 'undefined';
      }

      return true;
    }
  }, {
    key: "GetElementSize",
    value: function GetElementSize(element) {
      var size = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };

      if (element && element.getBoundingClientRect) {
        var rect = element.getBoundingClientRect();
        size = {
          x: ~~(rect.left + window.pageXOffset),
          y: ~~(rect.top + window.pageYOffset),
          w: ~~rect.width,
          h: ~~rect.height
        };
      }

      return size;
    }
  }, {
    key: "IsCoordinatesValid",
    value: function IsCoordinatesValid(coordinates) {
      if (coordinates && coordinates.hasOwnProperty('x') && typeof coordinates.x === "number" && coordinates.hasOwnProperty('y') && typeof coordinates.y === "number") {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "GetFullElementSize",
    value: function GetFullElementSize(element, absoluteCoordinates, offsetCoordinates) {
      var size = PosdCommon.GetElementSize(element);

      if (PosdCommon.IsCoordinatesValid(offsetCoordinates)) {
        size.x = size.x + offsetCoordinates.x;
        size.y = size.y + offsetCoordinates.y;
      }

      if (PosdCommon.IsCoordinatesValid(absoluteCoordinates)) {
        size.abs_x = size.x + absoluteCoordinates.x;
        size.abs_y = size.y + absoluteCoordinates.y;
      } else {
        size.abs_x = size.x;
        size.abs_y = size.y;
      }

      return size;
    }
  }, {
    key: "SetFullSizeToElement",
    value: function SetFullSizeToElement(element, absoluteCoordinates, offsetCoordinates) {
      var size = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };

      if (PosdCommon.IsCoordinatesValid(offsetCoordinates)) {
        size.x = size.x + offsetCoordinates.x;
        size.y = size.y + offsetCoordinates.y;
      }

      if (element && element.setAttribute) {
        size = PosdCommon.GetFullElementSize(element, absoluteCoordinates, offsetCoordinates);
        element.setAttribute("bis_size", PosdCommon.ToJSON(size));
      }

      return size;
    }
  }, {
    key: "GenerateAndSetBisId",
    value: function GenerateAndSetBisId(element, prefix) {
      var bisId = prefix + PosdCommon.GenerateQuickId();

      if (element && element.setAttribute) {
        element.setAttribute(PosdConst.ATTRIBUTE_BIS_ID, bisId);
      }

      return bisId;
    }
  }, {
    key: "GenerateAndSetBisIdToFrame",
    value: function GenerateAndSetBisIdToFrame(element) {
      return PosdCommon.GenerateAndSetBisId(element, "fr_");
    }
  }, {
    key: "GenerateAndSetBisIdToBanner",
    value: function GenerateAndSetBisIdToBanner(element) {
      return PosdCommon.GenerateAndSetBisId(element, "bn_");
    }
  }, {
    key: "GenerateAndSetBisIdToFBAds",
    value: function GenerateAndSetBisIdToFBAds(element) {
      return PosdCommon.GenerateAndSetBisId(element, "fb_");
    }
  }, {
    key: "GenerateAndSetBisIdToTwitterAds",
    value: function GenerateAndSetBisIdToTwitterAds(element) {
      return PosdCommon.GenerateAndSetBisId(element, "tw_");
    }
  }, {
    key: "SetBisDepth",
    value: function SetBisDepth(element, depth) {
      if (element && element.setAttribute) {
        element.setAttribute("bis_depth", depth);
      }
    }
  }, {
    key: "SetBisChainId",
    value: function SetBisChainId(element, chainId) {
      if (element && element.setAttribute) {
        element.setAttribute("bis_chainid", chainId);
      }
    }
  }, {
    key: "SetBannerId",
    value: function SetBannerId(element, bannerId) {
      if (element && element.setAttribute) {
        element.setAttribute("bis_bannerid", bannerId);
      }
    }
  }, {
    key: "HideElement",
    value: function HideElement(element) {
      if (element && element.style) {
        element.style.cssText += 'left: -10000px !important; position: absolute !important;';
      }
    }
  }, {
    key: "UnhideElement",
    value: function UnhideElement(element) {
      if (element && element.style) {
        var style = element.style.cssText;

        if (style.includes('left: -10000px !important; position: absolute !important;')) {
          style = style.replace('left: -10000px !important; position: absolute !important;', '');
          element.style.cssText = style;
        }
      }
    }
  }, {
    key: "UpdateCandidateStatusBorderColor",
    value: function UpdateCandidateStatusBorderColor(candidate, extractionStatus) {
      if (candidate && candidate.style && candidate.style.cssText && extractionStatus) {
        var newBorder = '';

        if (extractionStatus.filteredOut) {
          newBorder = 'border: 6px solid orange !important;';
        } else if (extractionStatus.sentToBackend) {
          newBorder = 'border: 6px solid green !important;';
        } else if (extractionStatus.targetUrlExtracted) {
          newBorder = 'border: 6px solid blueviolet !important;';
        } else if (extractionStatus.fullContentExtracted) {
          newBorder = 'border: 6px solid blue !important;';
        }

        var style = candidate.style.cssText;

        if (!style.includes(newBorder)) {
          style = style.replace(/border: 6px solid .{3,} !important;/, newBorder);
          candidate.style.cssText = style;
        }
      }
    }
  }, {
    key: "GetMainDomainFromHost",
    value: function GetMainDomainFromHost(host) {
      if (host && host.split) {
        var domainPath = host.split('.');

        if (domainPath.length >= 2) {
          return domainPath[domainPath.length - 2] + '.' + domainPath[domainPath.length - 1];
        }
      }

      return null;
    }
  }, {
    key: "GetMainDomainFromUrl",
    value: function GetMainDomainFromUrl(url) {
      return PosdCommon.GetMainDomainFromHost(PosdCommon.GetHostNameFromUrl(url));
    }
  }, {
    key: "GetHostNameFromUrl",
    value: function GetHostNameFromUrl(url) {
      var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

      if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
      } else {
        return null;
      }
    }
  }, {
    key: "IsUrlFromHost",
    value: function IsUrlFromHost(host, url) {
      return host.indexOf(PosdCommon.GetMainDomainFromUrl(url)) !== -1;
    }
  }, {
    key: "IsPublisherInBlacklist",
    value: function IsPublisherInBlacklist(url, blacklistPublishers) {
      var result = false;
      var hostName = PosdCommon.GetHostNameFromUrl(url);

      if (blacklistPublishers && blacklistPublishers.length) {
        if (hostName && blacklistPublishers.includes(hostName)) {
          result = true;
        }
      }

      return result;
    }
  }, {
    key: "GetUrlFromStyleStr",
    value: function GetUrlFromStyleStr(styleStr) {
      var str = styleStr.replace(/"/g, "'");
      var starIndex = str.indexOf("http");

      if (starIndex == -1) {
        starIndex = str.indexOf("//");
      }

      var endIndex = str.indexOf("'", starIndex);
      var url = "";

      if (starIndex > 0 && endIndex > 0 && starIndex < endIndex) {
        url = str.substr(starIndex, endIndex - starIndex);
      }

      return url;
    }
  }, {
    key: "IsUrl",
    value: function IsUrl(str) {
      return str.indexOf("http") !== -1 || str.indexOf("//") !== -1;
    }
  }, {
    key: "GetCurrentDataTimeStr",
    value: function GetCurrentDataTimeStr() {
      function Normalize2(val) {
        if (val < 10) {
          return "0" + val;
        }

        return "" + val;
      }

      var now = new Date();
      return "".concat(now.getFullYear(), "-").concat(Normalize2(now.getMonth() + 1), "-").concat(Normalize2(now.getDate()), " ").concat(Normalize2(now.getHours()), ":").concat(Normalize2(now.getMinutes()), ":").concat(Normalize2(now.getSeconds()));
    }
  }, {
    key: "GetWindowSize",
    value: function GetWindowSize() {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      };
    }
  }, {
    key: "IsIframeHasContentScript",
    value: function IsIframeHasContentScript(iframe) {
      try {
        if (iframe) {
          if (!PosdCommon.IsIframeSecure(iframe)) {
            if (iframe.contentDocument.body.getAttribute("bis_status") !== "ok") {
              return false;
            }
          }
        }
      } catch (e) {}

      return true;
    }
  }, {
    key: "IsIframeSecure",
    value: function IsIframeSecure(iframe) {
      if (iframe) {
        if (iframe.src.length === 0 || iframe.src === "about:blank" || iframe.src === "about:srcdoc" || iframe.src.indexOf("javascript:") === 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "IsValidBisId",
    value: function IsValidBisId(bisId) {
      if (bisId.startsWith('mp_') || bisId.startsWith('bg_') || bisId.startsWith('fr_')) {
        return true;
      }

      return false;
    }
  }, {
    key: "IsYouTubeUrl",
    value: function IsYouTubeUrl(url) {
      var host = PosdCommon.GetHostNameFromUrl(url);

      if (host) {
        return host.indexOf("youtube.com") !== -1;
      } else {
        return false;
      }
    }
  }, {
    key: "IsFacebookUrl",
    value: function IsFacebookUrl(url) {
      var host = PosdCommon.GetHostNameFromUrl(url);

      if (host) {
        return host.indexOf("facebook.com") !== -1;
      } else {
        return false;
      }
    }
  }, {
    key: "IsTwitterUrl",
    value: function IsTwitterUrl(url) {
      var host = PosdCommon.GetHostNameFromUrl(url);

      if (host) {
        return host.indexOf("twitter.com") !== -1;
      } else {
        return false;
      }
    }
  }, {
    key: "GetFullIdStr",
    value: function GetFullIdStr(chainId, frameId, bisId) {
      return "ext:".concat(chrome.runtime.id, "-chainId:").concat(chainId, "-frameId:").concat(frameId, "-bisId:").concat(bisId);
    }
  }, {
    key: "GetRandomIntInRange",
    value: function GetRandomIntInRange(min, max) {
      return parseInt((Math.random() * (max - min) + min).toFixed(0));
    }
  }, {
    key: "GetCurrentTimestamp",
    value: function GetCurrentTimestamp() {
      return Date.now() / 1000 | 0;
    }
  }, {
    key: "GetCurrentTimestampMs",
    value: function GetCurrentTimestampMs() {
      return Date.now();
    }
  }, {
    key: "GenerateQuickId",
    value: function GenerateQuickId() {
      var randomStrId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      return randomStrId.substring(0, 22);
    }
  }, {
    key: "GenerateTicketId",
    value: function GenerateTicketId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }, {
    key: "IsInFilterList",
    value: function IsInFilterList(list, str) {
      var inList = false;

      if (list) {
        for (var i = 0; i < list.length && !inList; i++) {
          if (str.indexOf(list[i]) != -1) {
            inList = true;
          }
        }
      }

      return inList;
    }
  }, {
    key: "IsChrome",
    value: function IsChrome() {
      return navigator.userAgent.indexOf('Chrome') !== -1;
    }
  }, {
    key: "IsFirefox",
    value: function IsFirefox() {
      return navigator.userAgent.indexOf('Firefox') !== -1;
    }
  }, {
    key: "IsFBVideoDataValid",
    value: function IsFBVideoDataValid(videoData) {
      var valid = false;

      if (videoData) {
        try {
          if (typeof videoData.detectionTime === "number" && typeof videoData.videoId === "string" && typeof videoData.videoUrl === "string" && videoData.videoId.length && videoData.videoUrl.length) {
            valid = true;
          }
        } catch (e) {}
      }

      return valid;
    }
  }, {
    key: "GetDefaultAdblockerStatus",
    value: function GetDefaultAdblockerStatus() {
      var status = {};
      status[PosdConst.ADBLOCKER_FOR_DISPLAY] = PosdConst.ADBLOCKER_STATUS_DISABLED;
      status[PosdConst.ADBLOCKER_FOR_FACEBOOK] = PosdConst.ADBLOCKER_STATUS_DISABLED;
      status[PosdConst.ADBLOCKER_FOR_TWITTER] = PosdConst.ADBLOCKER_STATUS_DISABLED;
      return status;
    }
  }]);

  return PosdCommon;
}();

module.exports = PosdCommon;

/***/ }),

/***/ "./src/libs/Constants.js":
/*!*******************************!*\
  !*** ./src/libs/Constants.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = /*#__PURE__*/function () {
  function PosdConst() {
    _classCallCheck(this, PosdConst);
  }

  _createClass(PosdConst, null, [{
    key: "DOCUMENT_READYSTATE_LOADING",
    get: function get() {
      return 'loading';
    }
  }, {
    key: "DOCUMENT_READYSTATE_INTERACTIVE",
    get: function get() {
      return 'interactive';
    }
  }, {
    key: "DOCUMENT_READYSTATE_COMPLETE",
    get: function get() {
      return 'complete';
    }
  }, {
    key: "ATTRIBUTE_BIS_ID",
    get: function get() {
      return "bis_id";
    }
  }, {
    key: "ATTRIBUTE_BIS_SIZE",
    get: function get() {
      return "bis_size";
    }
  }, {
    key: "ATTRIBUTE_BIS_ELEMENT_ID",
    get: function get() {
      return "bis_element_id";
    }
  }, {
    key: "ACTIVATION_BY_ADS_MANAGER",
    get: function get() {
      return "ACTIVATION_BY_ADS_MANAGER";
    }
  }, {
    key: "MESSAGE_ID",
    get: function get() {
      return 'PANELOS_MESSAGE';
    }
  }, {
    key: "MESSAGE_TYPE_TEST",
    get: function get() {
      return 'TEST';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_CONTENT",
    get: function get() {
      return 'IFRAME_CONTENT';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_INVALID_CHAIN_SEGMENT_CONTENT",
    get: function get() {
      return 'IFRAME_INVALID_CHAIN_SEGMENT_CONTENT';
    }
  }, {
    key: "MESSAGE_TYPE_TAB_INITIALIZATION",
    get: function get() {
      return 'TAB_INITIALIZATION';
    }
  }, {
    key: "MESSAGE_TYPE_TAB_SINGLE_PAGE_REINITIALIZATION",
    get: function get() {
      return 'TAB_SINGLE_PAGE_REINITIALIZATION';
    }
  }, {
    key: "MESSAGE_TYPE_TAB_URL_CHANGED",
    get: function get() {
      return 'TAB_URL_CHANGED';
    }
  }, {
    key: "MESSAGE_TYPE_TAB_ADBLOCKER_STATUS_CHANGED",
    get: function get() {
      return 'TAB_ADBLOCKER_STATUS_CHANGED';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_INITIALIZATION",
    get: function get() {
      return 'IFRAME_INITIALIZATION';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_INITIALIZATION_RESPONSE",
    get: function get() {
      return 'IFRAME_INITIALIZATION_RESPONSE';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_CONTENT_INFO_DETECTED_INPUTS",
    get: function get() {
      return 'IFRAME_CONTENT_INFO_DETECTED_INPUTS';
    }
  }, {
    key: "MESSAGE_TYPE_IFRAME_CONTENT_INFO_DETECTED_REDIRECTS",
    get: function get() {
      return 'IFRAME_CONTENT_INFO_DETECTED_REDIRECTS';
    }
  }, {
    key: "MESSAGE_TYPE_HIDDEN_AD_CANDIDATES_AMOUNT",
    get: function get() {
      return 'HIDDEN_AD_CANDIDATES_AMOUNT';
    }
  }, {
    key: "MESSAGE_TYPE_GET_WINDOW_TARGET_URL",
    get: function get() {
      return 'GET_WINDOW_TARGET_URL';
    }
  }, {
    key: "MESSAGE_TYPE_GET_WINDOW_TARGET_URL_RESPOND",
    get: function get() {
      return 'GET_WINDOW_TARGET_URL_RESPOND';
    }
  }, {
    key: "MESSAGE_TYPE_GET_WINDOW_CLICK_TARGET_URL",
    get: function get() {
      return 'GET_WINDOW_CLICK_TARGET_URL';
    }
  }, {
    key: "MESSAGE_TYPE_GET_WINDOW_CLICK_TARGET_URL_RESPOND",
    get: function get() {
      return 'GET_WINDOW_CLICK_TARGET_URL_RESPOND';
    }
  }, {
    key: "MESSAGE_TYPE_GET_FRAME_CONTENT",
    get: function get() {
      return 'GET_FRAME_CONTENT';
    }
  }, {
    key: "MESSAGE_TYPE_TARGET_URL_DETECTION_BY_CLICK",
    get: function get() {
      return 'TARGET_URL_DETECTION_BY_CLICK';
    }
  }, {
    key: "MESSAGE_TYPE_NEW_PAGE_CREATED_TICKET",
    get: function get() {
      return 'NEW_PAGE_CREATED_TICKET';
    }
  }, {
    key: "MESSAGE_TYPE_PANEL_REGULATOR_RESULT",
    get: function get() {
      return 'PANEL_REGULATOR_RESULT';
    }
  }, {
    key: "MESSAGE_TYPE_OUT_TICKET",
    get: function get() {
      return 'OUT_TICKET';
    }
  }, {
    key: "MESSAGE_TYPE_CHAIN_ACTIVATION",
    get: function get() {
      return 'CHAIN_ACTIVATION';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATES_DATA_SKINADS",
    get: function get() {
      return 'CANDIDATES_DATA_SKINADS';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATES_DATA_BANNERS",
    get: function get() {
      return 'CANDIDATES_DATA_BANNERS';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATES_DATA_FACEBOOK",
    get: function get() {
      return 'CANDIDATES_DATA_FACEBOOK';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATES_DATA_TWITTER",
    get: function get() {
      return 'CANDIDATES_DATA_TWITTER';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATE_PLACEMENTS_FACEBOOK",
    get: function get() {
      return 'CANDIDATE_PLACEMENTS_FACEBOOK';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATE_PLACEMENTS_TWITTER",
    get: function get() {
      return 'CANDIDATE_PLACEMENTS_TWITTER';
    }
  }, {
    key: "MESSAGE_TYPE_CANDIDATE_PLACEMENTS_HTML5",
    get: function get() {
      return 'CANDIDATE_PLACEMENTS_HTML5';
    }
  }, {
    key: "MESSAGE_TYPE_HTML5_CANDIDATES_EXTRACTION_STATUSES",
    get: function get() {
      return 'HTML5_CANDIDATES_EXTRACTION_STATUSES';
    }
  }, {
    key: "MESSAGE_TYPE_BANNER_CANDIDATES_EXTRACTION_STATUSES",
    get: function get() {
      return 'BANNER_CANDIDATES_EXTRACTION_STATUSES';
    }
  }, {
    key: "MESSAGE_TYPE_VIDEO_XHR_CANDIDATE",
    get: function get() {
      return 'VIDEO_XHR_CANDIDATE';
    }
  }, {
    key: "MESSAGE_TYPE_VIDEO_HAR",
    get: function get() {
      return 'VIDEO_HAR';
    }
  }, {
    key: "MESSAGE_TYPE_FACEBOOK_VIDEO_DATA",
    get: function get() {
      return 'FACEBOOK_VIDEO_DATA';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_GET_PANELIST_ID",
    get: function get() {
      return 'GET_PANELIST_ID';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_GET_PANELOS_VERSION",
    get: function get() {
      return 'GET_PANELOS_VERSION';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_GET_ADBLOCKER_STATUS",
    get: function get() {
      return 'GET_ADBLOCKER_STATUS';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_GET_ADBLOCKER_COUNTERS",
    get: function get() {
      return 'GET_ADBLOCKER_COUNTERS';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_ENABLE_ADBLOCKER",
    get: function get() {
      return 'ENABLE_ADBLOCKER';
    }
  }, {
    key: "MESSAGE_TYPE_PANELOS_CLIENT_REQUESTS_DISABLE_ADBLOCKER",
    get: function get() {
      return 'DISABLE_ADBLOCKER';
    }
  }, {
    key: "MESSAGE_TYPE_ADBLOCK_INSPECTOR_AGENT_REPORT",
    get: function get() {
      return 'ADBLOCK_INSPECTOR_AGENT_REPORT';
    }
  }, {
    key: "ADBLOCKER_STATUS_ENABLED",
    get: function get() {
      return 'enabled';
    }
  }, {
    key: "ADBLOCKER_STATUS_DISABLED",
    get: function get() {
      return 'disabled';
    }
  }, {
    key: "VIDEO_TRAFFIC_SOURCE_HTML",
    get: function get() {
      return 'HTML';
    }
  }, {
    key: "VIDEO_TRAFFIC_SOURCE_JS",
    get: function get() {
      return 'JS';
    }
  }, {
    key: "VIDEO_TRAFFIC_SOURCE_XHR",
    get: function get() {
      return 'XHR';
    }
  }, {
    key: "VIDEO_TRAFFIC_MEDIA_TYPE_HTML",
    get: function get() {
      return 'HTML';
    }
  }, {
    key: "VIDEO_TRAFFIC_ALIAS_YT_JSON_NEXTPAGE",
    get: function get() {
      return 'YT_JSON_NEXTPAGE';
    }
  }, {
    key: "FACEBOOK_AD_PLACEMENT_TYPE_FEED",
    get: function get() {
      return 'feed';
    }
  }, {
    key: "FACEBOOK_AD_PLACEMENT_TYPE_STORIES",
    get: function get() {
      return 'stories';
    }
  }, {
    key: "FACEBOOK_AD_PLACEMENT_TYPE_RIGHT_COLOM",
    get: function get() {
      return 'rightColom';
    }
  }, {
    key: "FACEBOOK_AD_PLACEMENT_TYPE_VIDEO_PAGE",
    get: function get() {
      return 'videoPage';
    }
  }, {
    key: "TWITTER_AD_PLACEMENT_TYPE_FEED",
    get: function get() {
      return 'feedPost';
    }
  }, {
    key: "TWITTER_AD_PLACEMENT_TYPE_FEED_WHO_TO_FOLLOW",
    get: function get() {
      return 'feedWhoToFollow';
    }
  }, {
    key: "TWITTER_AD_PLACEMENT_TYPE_RIGHT_COLUMN_WHO_TO_FOLLOW",
    get: function get() {
      return 'rightColumnWhoToFollow';
    }
  }, {
    key: "KNOWN_CSS_NAMES",
    get: function get() {
      return ["align-content", "align-items", "align-self", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "block-size", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-left-color", "border-left-style", "border-left-width", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-start-end-radius", "border-start-start-radius", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-adjust", "color-interpolation", "color-interpolation-filters", "column-count", "column-fill", "column-gap", "column-rule-color", "column-rule-style", "column-rule-width", "column-width", "contain", "content", "counter-increment", "counter-reset", "counter-set", "cursor", "cx", "cy", "direction", "display", "dominant-baseline", "empty-cells", "fill", "fill-opacity", "fill-rule", "filter", "flex-basis", "flex-direction", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column-end", "grid-column-start", "grid-row-end", "grid-row-start", "grid-template-areas", "grid-template-columns", "grid-template-rows", "height", "hyphens", "image-orientation", "image-rendering", "ime-mode", "inline-size", "inset-block-end", "inset-block-start", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "list-style-image", "list-style-position", "list-style-type", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marker-end", "marker-mid", "marker-start", "mask", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-position-x", "mask-position-y", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "object-fit", "object-position", "opacity", "order", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-anchor", "overflow-block", "overflow-inline", "overflow-wrap", "overflow-x", "overflow-y", "overscroll-behavior-x", "overscroll-behavior-y", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "paint-order", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "r", "resize", "right", "row-gap", "ruby-align", "ruby-position", "rx", "ry", "scroll-behavior", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "scrollbar-color", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "table-layout", "text-align", "text-align-last", "text-anchor", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip-ink", "text-decoration-style", "text-decoration-thickness", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-offset", "top", "touch-action", "transform", "transform-box", "transform-origin", "transform-style", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vector-effect", "vertical-align", "visibility", "white-space", "width", "will-change", "word-break", "word-spacing", "writing-mode", "x", "y", "z-index", "-moz-appearance", "-moz-box-align", "-moz-box-direction", "-moz-box-flex", "-moz-box-ordinal-group", "-moz-box-orient", "-moz-box-pack", "-moz-float-edge", "-moz-force-broken-image-icon", "-moz-image-region", "-moz-orient", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-moz-stack-sizing", "-moz-tab-size", "-moz-text-size-adjust", "-moz-user-focus", "-moz-user-input", "-moz-user-modify", "-moz-window-dragging", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke-color", "-webkit-text-stroke-width", "offset-distance", "offset-path", "offset-rotate", "orphans", "speak", "tab-size", "text-underline-position", "text-size-adjust", "widows", "zoom", "-webkit-appearance", "-webkit-border-horizontal-spacing", "-webkit-border-image", "-webkit-border-vertical-spacing", "-webkit-box-align", "-webkit-box-decoration-break", "-webkit-box-direction", "-webkit-box-flex", "-webkit-box-ordinal-group", "-webkit-box-orient", "-webkit-box-pack", "-webkit-box-reflect", "column-span", "backdrop-filter", "-webkit-font-smoothing", "-webkit-highlight", "-webkit-hyphenate-character", "-webkit-line-break", "-webkit-locale", "-webkit-margin-before-collapse", "-webkit-margin-after-collapse", "-webkit-mask-box-image", "-webkit-mask-box-image-outset", "-webkit-mask-box-image-repeat", "-webkit-mask-box-image-slice", "-webkit-mask-box-image-source", "-webkit-mask-box-image-width", "-webkit-mask-clip", "-webkit-mask-composite", "-webkit-mask-image", "-webkit-mask-origin", "-webkit-mask-position", "-webkit-mask-repeat", "-webkit-mask-size", "-webkit-print-color-adjust", "-webkit-rtl-ordering", "-webkit-tap-highlight-color", "-webkit-text-combine", "-webkit-text-decorations-in-effect", "-webkit-text-emphasis-color", "-webkit-text-emphasis-position", "-webkit-text-emphasis-style", "-webkit-text-orientation", "-webkit-text-security", "-webkit-user-drag", "-webkit-user-modify", "-webkit-writing-mode", "-webkit-app-region", "buffered-rendering", "color-rendering", "alignment-baseline", "baseline-shift", "d"];
    }
  }, {
    key: "FACEBOOK_DESIGN_VERSION_OLD",
    get: function get() {
      return 1;
    }
  }, {
    key: "FACEBOOK_DESIGN_VERSION_NEW",
    get: function get() {
      return 2;
    }
  }, {
    key: "OUT_TICKET_TYPE_SINGLE",
    get: function get() {
      return 'SINGLE';
    }
  }, {
    key: "OUT_TICKET_TYPE_MULTI",
    get: function get() {
      return 'MULTI';
    }
  }, {
    key: "ADBLOCKER_FOR_DISPLAY",
    get: function get() {
      return 'DISPLAY';
    }
  }, {
    key: "ADBLOCKER_FOR_FACEBOOK",
    get: function get() {
      return 'FACEBOOK';
    }
  }, {
    key: "ADBLOCKER_FOR_TWITTER",
    get: function get() {
      return 'TWITTER';
    }
  }, {
    key: "AD_DETECTOR_INITIATOR_TIMER",
    get: function get() {
      return 'timer';
    }
  }, {
    key: "AD_DETECTOR_INITIATOR_MUTATION",
    get: function get() {
      return 'mutation';
    }
  }, {
    key: "AD_DETECTOR_INITIATOR_PAGECHANGE",
    get: function get() {
      return 'pagechange';
    }
  }, {
    key: "AD_DETECTOR_INITIATOR_ACTIVATION",
    get: function get() {
      return 'activation';
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_NONE",
    get: function get() {
      return 0;
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_INITED",
    get: function get() {
      return 1;
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_STARTED",
    get: function get() {
      return 2;
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_TARGET_URL_DETECTION_STARTED",
    get: function get() {
      return 3;
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_TARGET_URL_DETECTION_FINISHED",
    get: function get() {
      return 4;
    }
  }, {
    key: "IFRAMES_CHAIN_BUILDING_STATUS_FINISHED",
    get: function get() {
      return 5;
    }
  }, {
    key: "CANDIDATE_PROCESS_STATUS_DETECED",
    get: function get() {
      return 1;
    }
  }, {
    key: "CANDIDATE_PROCESS_STATUS_START_PROCESSING",
    get: function get() {
      return 2;
    }
  }, {
    key: "CANDIDATE_PROCESS_STATUS_PROCESSING_ACTIVATED",
    get: function get() {
      return 3;
    }
  }, {
    key: "CANDIDATE_PROCESS_STATUS_PREBUILD_INFO_SENT",
    get: function get() {
      return 4;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_INIT",
    get: function get() {
      return 0;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_STARTED",
    get: function get() {
      return 1;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_GETTING_WEBNAVIGATION_IFRAMES",
    get: function get() {
      return 2;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_GOT_WEBNAVIGATION_IFRAMES",
    get: function get() {
      return 3;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_CONSTRUCT_IFRAME_CHAINS_ACTIVE",
    get: function get() {
      return 4;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_CONSTRUCT_IFRAME_CHAINS_DONE",
    get: function get() {
      return 5;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_DEEP_TARGET_URL_DETECTION_ACTIVE",
    get: function get() {
      return 6;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_DEEP_TARGET_URL_DETECTION_DONE",
    get: function get() {
      return 7;
    }
  }, {
    key: "TICKET_BUILDING_STATUS_DONE",
    get: function get() {
      return 8;
    }
  }, {
    key: "MAX_OUT_TICKETS_QUEUE_LENGTH",
    get: function get() {
      return 20;
    }
  }]);

  return PosdConst;
}();

module.exports = PosdConst;

/***/ }),

/***/ "./src/libs/Message.js":
/*!*****************************!*\
  !*** ./src/libs/Message.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PosdConst = __webpack_require__(/*! ./Constants */ "./src/libs/Constants.js");

var PosdCommon = __webpack_require__(/*! ./Common */ "./src/libs/Common.js");

var PosdMessage = /*#__PURE__*/function () {
  function PosdMessage() {
    _classCallCheck(this, PosdMessage);
  }

  _createClass(PosdMessage, null, [{
    key: "IsValid",
    value: function IsValid(mes) {
      try {
        if (typeof mes !== 'undefined') {
          if (typeof mes.posdMessageId !== 'undefined' && typeof mes.type !== 'undefined' && typeof mes.content !== 'undefined') {
            return mes.posdMessageId && mes.posdMessageId === PosdConst.MESSAGE_ID;
          }
        }
      } catch (e) {}

      return false;
    }
  }, {
    key: "IsStrictValid",
    value: function IsStrictValid(mes) {
      try {
        if (typeof mes !== 'undefined') {
          if (typeof mes.posdMessageId !== 'undefined' && typeof mes.from !== 'undefined' && typeof mes.to !== 'undefined' && typeof mes.type !== 'undefined' && typeof mes.content !== 'undefined') {
            return mes.posdMessageId && mes.posdMessageId === PosdConst.MESSAGE_ID;
          }
        }
      } catch (e) {}

      return false;
    }
  }, {
    key: "EmptyMessage",
    get: function get() {
      return {
        posdMessageId: PosdConst.MESSAGE_ID,
        posdHash: PosdCommon.GenerateQuickId(),
        from: '',
        to: '',
        multiTo: [],
        type: '',
        content: ''
      };
    }
  }]);

  return PosdMessage;
}();

module.exports = PosdMessage;

/***/ }),

/***/ "./src/libs/base64.js":
/*!****************************!*\
  !*** ./src/libs/base64.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PosdBase64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = PosdBase64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }

    return output;
  },
  decode: function decode(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = PosdBase64._utf8_decode(output);
    return output;
  },
  _utf8_encode: function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  },
  _utf8_decode: function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  }
};
module.exports = PosdBase64;

/***/ })

/******/ });