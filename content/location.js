!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 369);
}({
    369: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const PostHelper_1 = __webpack_require__(94), HideMyLocation_1 = __webpack_require__(370);
        if ("text/html" === document.contentType) {
            const script = document.createElement("script"), clientName = PostHelper_1.PostHelper.clientName();
            script.innerHTML = `\n    const hideMyLocation = new (${HideMyLocation_1.HideMyLocation.toString()})('${clientName}')\n  `, 
            script.async = !1, document.documentElement.appendChild(script);
        }
    },
    370: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.HideMyLocation = void 0;
        exports.HideMyLocation = class HideMyLocation {
            constructor(clientKey) {
                this.clientKey = clientKey, this.watchIDs = {}, this.client = window[Symbol.for(clientKey)];
                const getCurrentPosition = navigator.geolocation.getCurrentPosition, watchPosition = navigator.geolocation.watchPosition, clearWatch = navigator.geolocation.clearWatch, self = this;
                navigator.geolocation.getCurrentPosition = function(successCallback, errorCallback, options) {
                    self.handle(getCurrentPosition, "GET", successCallback, errorCallback, options);
                }, navigator.geolocation.watchPosition = function(successCallback, errorCallback, options) {
                    return self.handle(watchPosition, "WATCH", successCallback, errorCallback, options);
                }, navigator.geolocation.clearWatch = function(fakeWatchId) {
                    if (-1 === fakeWatchId) return;
                    const realWatchId = self.watchIDs[fakeWatchId];
                    return delete self.watchIDs[fakeWatchId], clearWatch.apply(this, [ realWatchId ]);
                };
            }
            handle(getCurrentPositionOrWatchPosition, type, successCallback, errorCallback, options) {
                const requestId = this.client.emitToBg("HIDE_MY_LOCATION__GET_LOCATION");
                let fakeWatchId = this.getRandomInt(0, 1e5);
                if (this.client.fromBgResponse(requestId, response => {
                    if (response.enabled) if ("SUCCESS" === response.status) {
                        const position = this.map(response);
                        successCallback(position);
                    } else {
                        const error = this.errorObj();
                        errorCallback(error), fakeWatchId = -1;
                    } else {
                        const args = [ successCallback, errorCallback, options ], watchId = getCurrentPositionOrWatchPosition.apply(navigator.geolocation, args);
                        "WATCH" === type && (this.watchIDs[fakeWatchId] = watchId);
                    }
                }), "WATCH" === type) return fakeWatchId;
            }
            map(response) {
                return {
                    coords: {
                        accuracy: 20,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        latitude: response.latitude,
                        longitude: response.longitude,
                        speed: null
                    },
                    timestamp: Date.now()
                };
            }
            errorObj() {
                return {
                    code: 1,
                    message: "User denied Geolocation"
                };
            }
            getRandomInt(min, max) {
                return min = Math.ceil(min), max = Math.floor(max), Math.floor(Math.random() * (max - min + 1)) + min;
            }
        };
    },
    94: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.PostHelper = class PostHelper {
            static serverName() {
                return "MARIO_POST_SERVER_" + chrome.runtime.id;
            }
            static clientName() {
                return "MARIO_POST_CLIENT_" + chrome.runtime.id;
            }
        };
    }
});
//# sourceMappingURL=location.js.map