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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 371);
}({
    101: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(PostBgEvents) {
            PostBgEvents.RESPONSE = "WINDOW_POST_MESSAGE_RESPONSE", PostBgEvents.EVENT = "WINDOW_POST_MESSAGE_EVENT";
        }(exports.PostBgEvents || (exports.PostBgEvents = {}));
    },
    152: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const ContentDispatcherService_1 = __webpack_require__(33), PostClient_1 = __webpack_require__(153), PostServer_1 = __webpack_require__(154), PostHelper_1 = __webpack_require__(94);
        if ("text/html" === document.contentType) {
            const dispatcher = new ContentDispatcherService_1.ContentDispatcherService, serverName = PostHelper_1.PostHelper.serverName(), clientName = PostHelper_1.PostHelper.clientName(), server = new PostServer_1.PostServer(serverName, clientName, dispatcher);
            window[Symbol.for(serverName)] = server;
            const script = document.createElement("script");
            script.innerHTML = `\n    window[Symbol.for('${clientName}')] = new (${PostClient_1.PostClient.toString()})('${clientName}', '${serverName}')`, 
            script.async = !1, document.documentElement.appendChild(script);
        }
    },
    153: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.PostClient = class PostClient {
            constructor(name, destination) {
                this.name = name, this.destination = destination, this.serverListeners = {}, this.bgRequestsListeners = {}, 
                this.bgEventsListeners = {}, window.addEventListener("message", message => {
                    const data = message.data, isNotForMe = !(data.destination && data.destination === this.name), hasNotEventProp = !data.event;
                    if (!isNotForMe && !hasNotEventProp) if ("MARIO_POST_SERVER__BG_RESPONSE" === data.event) {
                        const response = data.args;
                        if (this.hasBgRequestListener(response.requestId)) {
                            try {
                                this.bgRequestsListeners[response.requestId](response.response);
                            } catch (e) {
                                console.log(e);
                            }
                            delete this.bgRequestsListeners[response.requestId];
                        }
                    } else if ("MARIO_POST_SERVER__BG_EVENT" === data.event) {
                        const response = data.args;
                        if (this.hasBgEventListener(response.event)) try {
                            this.bgEventsListeners[data.id](response.payload);
                        } catch (e) {
                            console.log(e);
                        }
                    } else if (this.hasServerListener(data.event)) try {
                        this.serverListeners[data.event](data.args);
                    } catch (e) {
                        console.log(e);
                    } else console.log("event not handled: " + data.event);
                });
            }
            emitToServer(event, args) {
                const id = this.generateUIID(), message = {
                    args: args,
                    destination: this.destination,
                    event: event,
                    id: id
                };
                return window.postMessage(message, location.origin), id;
            }
            emitToBg(bgEventName, args) {
                const requestId = this.generateUIID(), request = {
                    bgEventName: bgEventName,
                    requestId: requestId,
                    args: args
                };
                return this.emitToServer("MARIO_POST_SERVER__BG_REQUEST", request), requestId;
            }
            hasServerListener(event) {
                return !!this.serverListeners[event];
            }
            hasBgRequestListener(requestId) {
                return !!this.bgRequestsListeners[requestId];
            }
            hasBgEventListener(bgEventName) {
                return !!this.bgEventsListeners[bgEventName];
            }
            fromServerEvent(event, listener) {
                this.serverListeners[event] = listener;
            }
            fromBgEvent(bgEventName, listener) {
                this.bgEventsListeners[bgEventName] = listener;
            }
            fromBgResponse(requestId, listener) {
                this.bgRequestsListeners[requestId] = listener;
            }
            generateUIID() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    const r = 16 * Math.random() | 0;
                    return ("x" === c ? r : 3 & r | 8).toString(16);
                }));
            }
        };
    },
    154: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const PostBgEvents_1 = __webpack_require__(101), MarioEvent_1 = __webpack_require__(17), PostServerEvents_1 = __webpack_require__(155), guid_typescript_1 = __webpack_require__(21), PostClientEvents_1 = __webpack_require__(156);
        exports.PostServer = class PostServer {
            constructor(name, destination, dispatcher) {
                this.name = name, this.destination = destination, this.dispatcher = dispatcher, 
                this.listeners = {}, window.addEventListener("message", message => {
                    const data = message.data, isNotForMe = !(data.destination && data.destination === this.name), hasNotEventProp = !data.event;
                    if (!isNotForMe && !hasNotEventProp) if (data.event === PostClientEvents_1.PostClientEvents.BG_REQUEST) {
                        const request = data.args;
                        this.dispatcher.emit(new MarioEvent_1.MarioEvent(request.bgEventName, request.args, request.requestId));
                    } else this.hasClientListener(data.event) && this.listeners[data.event](data.args);
                }), this.dispatcher.on(PostBgEvents_1.PostBgEvents.RESPONSE, marioEvent => {
                    const response = marioEvent.data, args = {
                        requestId: marioEvent.id,
                        response: response.response
                    };
                    this.emitToClient(PostServerEvents_1.PostServerEvents.BG_RESPONSE, args);
                }), this.dispatcher.on(PostBgEvents_1.PostBgEvents.EVENT, marioEvent => {
                    const payload = marioEvent.data, args = {
                        event: payload.event,
                        payload: payload.payload
                    };
                    this.emitToClient(PostServerEvents_1.PostServerEvents.BG_EVENT, args);
                });
            }
            emitToClient(event, args) {
                const message = {
                    args: args,
                    destination: this.destination,
                    event: event,
                    id: guid_typescript_1.Guid.create().toString()
                };
                window.postMessage(message, location.origin);
            }
            fromClient(event, listener) {
                this.listeners[event] = listener;
            }
            hasClientListener(event) {
                return !!this.listeners[event];
            }
        };
    },
    155: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(PostServerEvents) {
            PostServerEvents.BG_RESPONSE = "MARIO_POST_SERVER__BG_RESPONSE", PostServerEvents.BG_EVENT = "MARIO_POST_SERVER__BG_EVENT";
        }(exports.PostServerEvents || (exports.PostServerEvents = {}));
    },
    156: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(PostClientEvents) {
            PostClientEvents.BG_REQUEST = "MARIO_POST_SERVER__BG_REQUEST";
        }(exports.PostClientEvents || (exports.PostClientEvents = {}));
    },
    17: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const guid_typescript_1 = __webpack_require__(21);
        exports.MarioEvent = class MarioEvent {
            constructor(event, data, id) {
                this.event = event, this.data = data, this.id = id || guid_typescript_1.Guid.create().toString();
            }
        };
    },
    21: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0;
        var Guid = function() {
            function Guid(guid) {
                if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
                this.value = Guid.EMPTY, guid && Guid.isGuid(guid) && (this.value = guid);
            }
            return Guid.isGuid = function(guid) {
                var value = guid.toString();
                return guid && (guid instanceof Guid || Guid.validator.test(value));
            }, Guid.create = function() {
                return new Guid([ Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3) ].join("-"));
            }, Guid.createEmpty = function() {
                return new Guid("emptyguid");
            }, Guid.parse = function(guid) {
                return new Guid(guid);
            }, Guid.raw = function() {
                return [ Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3) ].join("-");
            }, Guid.gen = function(count) {
                for (var out = "", i = 0; i < count; i++) out += (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
                return out;
            }, Guid.prototype.equals = function(other) {
                return Guid.isGuid(other) && this.value === other.toString();
            }, Guid.prototype.isEmpty = function() {
                return this.value === Guid.EMPTY;
            }, Guid.prototype.toString = function() {
                return this.value;
            }, Guid.prototype.toJSON = function() {
                return {
                    value: this.value
                };
            }, Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), 
            Guid.EMPTY = "00000000-0000-0000-0000-000000000000", Guid;
        }();
        exports.Guid = Guid;
    },
    33: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.ContentDispatcherService = class ContentDispatcherService {
            constructor() {
                this.listeners = {}, this.listenersIndex = {}, this.counter = 0, chrome.runtime.onMessage.addListener(message => {
                    if (!this.isEventMessage(message)) return;
                    if (!this.hasEventListeners(message.event)) return void console.log("ContentDispatcherService: no listeners for an event " + message.event);
                    const promises = [], listeners = this.listeners[message.event];
                    for (const key of Object.keys(listeners)) {
                        const promise = (0, listeners[key])(message);
                        promises.push(promise);
                    }
                    return Promise.all(promises).then(), !1;
                });
            }
            emit(event, callback) {
                chrome.runtime.sendMessage(event, callback);
            }
            on(event, handler) {
                const id = ++this.counter;
                return this.hasEventListeners(event) || (this.listeners[event] = {}), this.listeners[event][id] = handler, 
                this.listenersIndex[id] = event, id;
            }
            hasEventListeners(event) {
                return void 0 !== this.listeners[event];
            }
            removeListener(listenerId) {
                if (this.hasListener(listenerId)) {
                    const event = this.listenersIndex[listenerId];
                    delete this.listeners[event][listenerId], delete this.listenersIndex[listenerId];
                }
            }
            hasListener(listenerId) {
                return this.listenersIndex.hasOwnProperty(listenerId);
            }
            getListener(listenerId) {
                if (!this.hasListener(listenerId)) throw new Error("boom");
                const event = this.listenersIndex[listenerId];
                return this.listeners[event][listenerId];
            }
            isEventMessage(message) {
                return "object" == typeof message && "string" == typeof message.event;
            }
        };
    },
    371: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), __webpack_require__(152);
        const PostHelper_1 = __webpack_require__(94), page_context_1 = __webpack_require__(372), clientName = PostHelper_1.PostHelper.clientName(), script = document.createElement("script");
        script.async = !1, script.innerHTML = `\n    new (${page_context_1.PageContext.toString()})('${clientName}')\n`, 
        document.documentElement.appendChild(script);
    },
    372: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.PageContext = void 0;
        exports.PageContext = class PageContext {
            constructor(clientKey) {
                this.client = window[Symbol.for(clientKey)], this.bindEvents();
            }
            bindEvents() {
                const self = this;
                var f;
                history.pushState = (f = history.pushState, function() {
                    const ret = f.apply(this, arguments);
                    return self.onUrlChange(), ret;
                });
                let firstReplaceEvent = !0;
                history.replaceState = (f => function(params) {
                    var ret = f.apply(this, arguments);
                    return firstReplaceEvent || self.onUrlChange(), firstReplaceEvent = !1, ret;
                })(history.replaceState), window.addEventListener("hashchange", (function() {
                    self.onUrlChange();
                }));
            }
            onUrlChange() {
                this.client.emitToBg("URLS_SAFE_CHECK__CONTENT_URL_REWRITED");
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
//# sourceMappingURL=safecheck.js.map