/*! For license information please see content.js.LICENSE.txt */
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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 373);
}({
    0: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var keys = __webpack_require__(2);
        exports.METADATA_KEY = keys;
        var container_1 = __webpack_require__(45);
        exports.Container = container_1.Container;
        var literal_types_1 = __webpack_require__(7);
        exports.BindingScopeEnum = literal_types_1.BindingScopeEnum, exports.BindingTypeEnum = literal_types_1.BindingTypeEnum, 
        exports.TargetTypeEnum = literal_types_1.TargetTypeEnum;
        var container_module_1 = __webpack_require__(61);
        exports.AsyncContainerModule = container_module_1.AsyncContainerModule, exports.ContainerModule = container_module_1.ContainerModule;
        var injectable_1 = __webpack_require__(62);
        exports.injectable = injectable_1.injectable;
        var tagged_1 = __webpack_require__(63);
        exports.tagged = tagged_1.tagged;
        var named_1 = __webpack_require__(64);
        exports.named = named_1.named;
        var inject_1 = __webpack_require__(25);
        exports.inject = inject_1.inject, exports.LazyServiceIdentifer = inject_1.LazyServiceIdentifer;
        var optional_1 = __webpack_require__(65);
        exports.optional = optional_1.optional;
        var unmanaged_1 = __webpack_require__(66);
        exports.unmanaged = unmanaged_1.unmanaged;
        var multi_inject_1 = __webpack_require__(67);
        exports.multiInject = multi_inject_1.multiInject;
        var target_name_1 = __webpack_require__(68);
        exports.targetName = target_name_1.targetName;
        var post_construct_1 = __webpack_require__(69);
        exports.postConstruct = post_construct_1.postConstruct;
        var metadata_reader_1 = __webpack_require__(23);
        exports.MetadataReader = metadata_reader_1.MetadataReader;
        var id_1 = __webpack_require__(9);
        exports.id = id_1.id;
        var decorator_utils_1 = __webpack_require__(8);
        exports.decorate = decorator_utils_1.decorate;
        var constraint_helpers_1 = __webpack_require__(28);
        exports.traverseAncerstors = constraint_helpers_1.traverseAncerstors, exports.taggedConstraint = constraint_helpers_1.taggedConstraint, 
        exports.namedConstraint = constraint_helpers_1.namedConstraint, exports.typeConstraint = constraint_helpers_1.typeConstraint;
        var serialization_1 = __webpack_require__(11);
        exports.getServiceIdentifierAsString = serialization_1.getServiceIdentifierAsString;
        var binding_utils_1 = __webpack_require__(70);
        exports.multiBindToService = binding_utils_1.multiBindToService;
    },
    1: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Mario_1 = __webpack_require__(43);
        exports.Mario = Mario_1.Mario;
        var MarioModule_1 = __webpack_require__(79);
        exports.MarioModule = MarioModule_1.MarioModule;
        var MarioEvent_1 = __webpack_require__(17);
        exports.MarioEvent = MarioEvent_1.MarioEvent;
        var MARIO_TYPES_1 = __webpack_require__(4);
        exports.MARIO_TYPES = MARIO_TYPES_1.MARIO_TYPES;
        var ExternalDispatcher_1 = __webpack_require__(32);
        exports.ExternalDispatcher = ExternalDispatcher_1.ExternalDispatcher;
        var CacheService_1 = __webpack_require__(80);
        exports.CacheService = CacheService_1.CacheService;
        var ContentDispatcherService_1 = __webpack_require__(33);
        exports.ContentDispatcherService = ContentDispatcherService_1.ContentDispatcherService;
        var InternalDispatcher_1 = __webpack_require__(29);
        exports.InternalDispatcher = InternalDispatcher_1.InternalDispatcher;
        var LoggerService_1 = __webpack_require__(30);
        exports.LoggerService = LoggerService_1.LoggerService;
        var TabService_1 = __webpack_require__(20);
        exports.TabService = TabService_1.TabService;
        var NavigationService_1 = __webpack_require__(40);
        exports.NavigationService = NavigationService_1.NavigationService;
        var WebRequestService_1 = __webpack_require__(83);
        exports.WebRequestService = WebRequestService_1.WebRequestService;
        var StorageService_1 = __webpack_require__(85);
        exports.StorageService = StorageService_1.StorageService;
    },
    11: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3);
        function getServiceIdentifierAsString(serviceIdentifier) {
            return "function" == typeof serviceIdentifier ? serviceIdentifier.name : "symbol" == typeof serviceIdentifier ? serviceIdentifier.toString() : serviceIdentifier;
        }
        function getFunctionName(v) {
            if (v.name) return v.name;
            var name_1 = v.toString(), match = name_1.match(/^function\s*([^\s(]+)/);
            return match ? match[1] : "Anonymous function: " + name_1;
        }
        exports.getServiceIdentifierAsString = getServiceIdentifierAsString, exports.listRegisteredBindingsForServiceIdentifier = function(container, serviceIdentifier, getBindings) {
            var registeredBindingsList = "", registeredBindings = getBindings(container, serviceIdentifier);
            return 0 !== registeredBindings.length && (registeredBindingsList = "\nRegistered bindings:", 
            registeredBindings.forEach((function(binding) {
                var name = "Object";
                null !== binding.implementationType && (name = getFunctionName(binding.implementationType)), 
                registeredBindingsList = registeredBindingsList + "\n " + name, binding.constraint.metaData && (registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData);
            }))), registeredBindingsList;
        }, exports.circularDependencyToException = function circularDependencyToException(request) {
            request.childRequests.forEach((function(childRequest) {
                if (function alreadyDependencyChain(request, serviceIdentifier) {
                    return null !== request.parentRequest && (request.parentRequest.serviceIdentifier === serviceIdentifier || alreadyDependencyChain(request.parentRequest, serviceIdentifier));
                }(childRequest, childRequest.serviceIdentifier)) {
                    var services = function(request) {
                        return function _createStringArr(req, result) {
                            void 0 === result && (result = []);
                            var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
                            return result.push(serviceIdentifier), null !== req.parentRequest ? _createStringArr(req.parentRequest, result) : result;
                        }(request).reverse().join(" --\x3e ");
                    }(childRequest);
                    throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
                }
                circularDependencyToException(childRequest);
            }));
        }, exports.listMetadataForTarget = function(serviceIdentifierString, target) {
            if (target.isTagged() || target.isNamed()) {
                var m_1 = "", namedTag = target.getNamedTag(), otherTags = target.getCustomTags();
                return null !== namedTag && (m_1 += namedTag.toString() + "\n"), null !== otherTags && otherTags.forEach((function(tag) {
                    m_1 += tag.toString() + "\n";
                })), " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
            }
            return " " + serviceIdentifierString;
        }, exports.getFunctionName = getFunctionName;
    },
    12: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.MODE = exports.STATUS = exports.UrlsSafeCheckTypes = void 0, exports.UrlsSafeCheckTypes = {
            USC_STATE_SERVICE: Symbol.for("USC_STATE_SERVICE"),
            USC_CHECK_SERVICE: Symbol.for("USC_CHECK_SERVICE"),
            USC_DATA_SERVICE: Symbol.for("USC_DATA_SERVICE"),
            USC_REQUEST_SERVICE: Symbol.for("USC_REQUEST_SERVICE"),
            USC_TAB_EVENTS_PROCESS_SERVICE: Symbol.for("USC_TAB_EVENTS_PROCESS_SERVICE"),
            USC_STATE_DATA_SERVICE: Symbol.for("USC_STATE_DATA_SERVICE"),
            USC_QUEUE_SERVICE: Symbol.for("USC_QUEUE_SERVICE"),
            USC_ENABLED: Symbol.for("USC_ENABLED"),
            USC_INIT_MODE: Symbol.for("USC_INIT_MODE"),
            USC_ENDPOINT_DOMAIN: Symbol.for("USC_ENDPOINT_DOMAIN"),
            USC_PANELLIST_ID: Symbol.for("USC_PANELLIST_ID"),
            USC_PANEL_ID: Symbol.for("USC_PANEL_ID"),
            USC_PARTNER_ID: Symbol.for("USC_PARTNER_ID"),
            USC_DISTRIBUTOR_ID: Symbol.for("USC_DISTRIBUTOR_ID"),
            USC_TRACK_LOADING_STATE: Symbol.for("USC_TRACK_LOADING_STATE"),
            USC_LOGGING: Symbol.for("USC_LOGGING")
        }, function(STATUS) {
            STATUS.NONE = "NONE", STATUS.SAFE = "SAFE", STATUS.UNSAFE = "UNSAFE", STATUS.UNKNOWN = "UNKNOWN";
        }(exports.STATUS || (exports.STATUS = {})), function(MODE) {
            MODE.BASIC = "BASIC", MODE.FULL = "FULL";
        }(exports.MODE || (exports.MODE = {}));
    },
    157: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(IframeEvents) {
            IframeEvents.CLOSE = "SAFESEARCH_CLOSE_NOTIFICATION_IFRAME", IframeEvents.GOTO_URL = "SAFESEARCH_GOTO_URL";
        }(exports.IframeEvents || (exports.IframeEvents = {}));
    },
    16: function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
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
    18: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_when_syntax_1 = __webpack_require__(19), BindingOnSyntax = function() {
            function BindingOnSyntax(binding) {
                this._binding = binding;
            }
            return BindingOnSyntax.prototype.onActivation = function(handler) {
                return this._binding.onActivation = handler, new binding_when_syntax_1.BindingWhenSyntax(this._binding);
            }, BindingOnSyntax;
        }();
        exports.BindingOnSyntax = BindingOnSyntax;
    },
    19: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_on_syntax_1 = __webpack_require__(18), constraint_helpers_1 = __webpack_require__(28), BindingWhenSyntax = function() {
            function BindingWhenSyntax(binding) {
                this._binding = binding;
            }
            return BindingWhenSyntax.prototype.when = function(constraint) {
                return this._binding.constraint = constraint, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenTargetNamed = function(name) {
                return this._binding.constraint = constraint_helpers_1.namedConstraint(name), new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenTargetIsDefault = function() {
                return this._binding.constraint = function(request) {
                    return null !== request.target && !request.target.isNamed() && !request.target.isTagged();
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenTargetTagged = function(tag, value) {
                return this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value), 
                new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenInjectedInto = function(parent) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenParentNamed = function(name) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenParentTagged = function(tag, value) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenAnyAncestorIs = function(ancestor) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenNoAncestorIs = function(ancestor) {
                return this._binding.constraint = function(request) {
                    return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenAnyAncestorNamed = function(name) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenNoAncestorNamed = function(name) {
                return this._binding.constraint = function(request) {
                    return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenAnyAncestorTagged = function(tag, value) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenNoAncestorTagged = function(tag, value) {
                return this._binding.constraint = function(request) {
                    return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenAnyAncestorMatches = function(constraint) {
                return this._binding.constraint = function(request) {
                    return constraint_helpers_1.traverseAncerstors(request, constraint);
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax.prototype.whenNoAncestorMatches = function(constraint) {
                return this._binding.constraint = function(request) {
                    return !constraint_helpers_1.traverseAncerstors(request, constraint);
                }, new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }, BindingWhenSyntax;
        }();
        exports.BindingWhenSyntax = BindingWhenSyntax;
    },
    2: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.NAMED_TAG = "named", exports.NAME_TAG = "name", exports.UNMANAGED_TAG = "unmanaged", 
        exports.OPTIONAL_TAG = "optional", exports.INJECT_TAG = "inject", exports.MULTI_INJECT_TAG = "multi_inject", 
        exports.TAGGED = "inversify:tagged", exports.TAGGED_PROP = "inversify:tagged_props", 
        exports.PARAM_TYPES = "inversify:paramtypes", exports.DESIGN_PARAM_TYPES = "design:paramtypes", 
        exports.POST_CONSTRUCT = "post_construct";
    },
    20: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), index_1 = __webpack_require__(1), MARIO_TYPES_1 = __webpack_require__(4), TabServiceEvents_1 = __webpack_require__(31);
        let TabService = class TabService {
            constructor(dispatcherService) {
                this.dispatcherService = dispatcherService, this.isListenOnCreated = !1, this.isListenOnUpdated = !1, 
                this.isListenOnMoved = !1, this.isListenOnActivated = !1, this.isListenOnHighlighted = !1, 
                this.isListenOnDetached = !1, this.isListenOnAttached = !1, this.isListenOnRemoved = !1, 
                this.isListenOnReplaced = !1, this.isListenOnZoomChange = !1;
            }
            listenOnCreated() {
                this.isListenOnCreated || (this.isListenOnCreated = !0, chrome.tabs.onCreated.addListener(tab => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_CREATED, {
                        tab: tab
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnUpdated() {
                this.isListenOnUpdated || (this.isListenOnUpdated = !0, chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_UPDATED, {
                        tabId: tabId,
                        changeInfo: changeInfo,
                        tab: tab
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnMoved() {
                this.isListenOnMoved || (this.isListenOnMoved = !0, chrome.tabs.onMoved.addListener((tabId, moveInfo) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_MOVED, {
                        tabId: tabId,
                        moveInfo: moveInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnActivated() {
                this.isListenOnActivated || (this.isListenOnActivated = !0, chrome.tabs.onActivated.addListener(activeInfo => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_ACTIVATED, {
                        activeInfo: activeInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnHighlighted() {
                this.isListenOnHighlighted || (this.isListenOnHighlighted = !0, chrome.tabs.onHighlighted.addListener(highlightInfo => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_HIGHLIGHTED, {
                        highlightInfo: highlightInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnDetached() {
                this.isListenOnDetached || (this.isListenOnDetached = !0, chrome.tabs.onDetached.addListener((tabId, detachInfo) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_DETACHED, {
                        tabId: tabId,
                        detachInfo: detachInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnAttached() {
                this.isListenOnAttached || (this.isListenOnAttached = !0, chrome.tabs.onAttached.addListener((tabId, attachInfo) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_ATTACHED, {
                        tabId: tabId,
                        attachInfo: attachInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnRemoved() {
                this.isListenOnRemoved || (this.isListenOnRemoved = !0, chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_REMOVED, {
                        tabId: tabId,
                        removeInfo: removeInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnReplaced() {
                this.isListenOnReplaced || (this.isListenOnReplaced = !0, chrome.tabs.onReplaced.addListener((addedTabId, removedTabId) => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_REPLACED, {
                        addedTabId: addedTabId,
                        removedTabId: removedTabId
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnZoomChange() {
                this.isListenOnZoomChange || (this.isListenOnZoomChange = !0, chrome.tabs.onZoomChange.addListener(zoomChangeInfo => {
                    const event = new index_1.MarioEvent(TabServiceEvents_1.TabServiceEvents.ON_TAB_ZOOM_CHANGE, {
                        zoomChangeInfo: zoomChangeInfo
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            sendMessage(tabId, message) {
                chrome.tabs.sendMessage(tabId, message, result => {
                    chrome.runtime.lastError;
                });
            }
            query(queryInfo) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.query(queryInfo, tabs => {
                                resolve(tabs);
                            });
                        } catch (e) {
                            reject();
                        }
                    });
                }));
            }
            reload(tabId, reloadProperties = {}) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.reload(tabId, reloadProperties, () => {
                                resolve();
                            });
                        } catch (e) {
                            reject();
                        }
                    });
                }));
            }
            create(properties) {
                chrome.tabs.create(properties);
            }
            get(tabId) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.get(tabId, tab => resolve(tab));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            getCurrent() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.getCurrent(tab => resolve(tab));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            duplicate(tabId) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.duplicate(tabId, tab => resolve(tab));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            highlight(highlightInfo) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.highlight(highlightInfo, () => resolve());
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            update(updateProperties, tabId) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.update(tabId, updateProperties, tab => resolve(tab));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            move(tabs, moveProperties) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.move(tabs, moveProperties, tabs => resolve(tabs));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            remove(tabs) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.tabs.remove(tabs, tabs => resolve(tabs));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
        };
        TabService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], TabService), 
        exports.TabService = TabService;
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
    22: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(BrowserEnum) {
            BrowserEnum.CHROME_BROWSER = "CHROME_BROWSER", BrowserEnum.FIREFOX_BROWSER = "FIREFOX_BROWSER", 
            BrowserEnum.EDGE_BROWSER = "EDGE_BROWSER", BrowserEnum.SAFARI_BROWSER = "SAFARI_BROWSER", 
            BrowserEnum.OPERA_BROWSER = "OPERA_BROWSER", BrowserEnum.CHROMIUM_BROWSER = "CHROMIUM_BROWSER";
        }(exports.BrowserEnum || (exports.BrowserEnum = {}));
    },
    23: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), MetadataReader = function() {
            function MetadataReader() {}
            return MetadataReader.prototype.getConstructorMetadata = function(constructorFunc) {
                return {
                    compilerGeneratedMetadata: Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc),
                    userGeneratedMetadata: Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc) || {}
                };
            }, MetadataReader.prototype.getPropertiesMetadata = function(constructorFunc) {
                return Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
            }, MetadataReader;
        }();
        exports.MetadataReader = MetadataReader;
    },
    24: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3);
        exports.isStackOverflowExeption = function(error) {
            return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
        };
    },
    25: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var error_msgs_1 = __webpack_require__(3), METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8), LazyServiceIdentifer = function() {
            function LazyServiceIdentifer(cb) {
                this._cb = cb;
            }
            return LazyServiceIdentifer.prototype.unwrap = function() {
                return this._cb();
            }, LazyServiceIdentifer;
        }();
        exports.LazyServiceIdentifer = LazyServiceIdentifer, exports.inject = function(serviceIdentifier) {
            return function(target, targetKey, index) {
                if (void 0 === serviceIdentifier) throw new Error(error_msgs_1.UNDEFINED_INJECT_ANNOTATION(target.name));
                var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
                "number" == typeof index ? decorator_utils_1.tagParameter(target, targetKey, index, metadata) : decorator_utils_1.tagProperty(target, targetKey, metadata);
            };
        };
    },
    26: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), id_1 = __webpack_require__(9), metadata_1 = __webpack_require__(5), queryable_string_1 = __webpack_require__(52), Target = function() {
            function Target(type, name, serviceIdentifier, namedOrTagged) {
                this.id = id_1.id(), this.type = type, this.serviceIdentifier = serviceIdentifier, 
                this.name = new queryable_string_1.QueryableString(name || ""), this.metadata = new Array;
                var metadataItem = null;
                "string" == typeof namedOrTagged ? metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged) : namedOrTagged instanceof metadata_1.Metadata && (metadataItem = namedOrTagged), 
                null !== metadataItem && this.metadata.push(metadataItem);
            }
            return Target.prototype.hasTag = function(key) {
                for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
                    if (_a[_i].key === key) return !0;
                }
                return !1;
            }, Target.prototype.isArray = function() {
                return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
            }, Target.prototype.matchesArray = function(name) {
                return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
            }, Target.prototype.isNamed = function() {
                return this.hasTag(METADATA_KEY.NAMED_TAG);
            }, Target.prototype.isTagged = function() {
                return this.metadata.some((function(m) {
                    return m.key !== METADATA_KEY.INJECT_TAG && m.key !== METADATA_KEY.MULTI_INJECT_TAG && m.key !== METADATA_KEY.NAME_TAG && m.key !== METADATA_KEY.UNMANAGED_TAG && m.key !== METADATA_KEY.NAMED_TAG;
                }));
            }, Target.prototype.isOptional = function() {
                return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(!0);
            }, Target.prototype.getNamedTag = function() {
                return this.isNamed() ? this.metadata.filter((function(m) {
                    return m.key === METADATA_KEY.NAMED_TAG;
                }))[0] : null;
            }, Target.prototype.getCustomTags = function() {
                return this.isTagged() ? this.metadata.filter((function(m) {
                    return m.key !== METADATA_KEY.INJECT_TAG && m.key !== METADATA_KEY.MULTI_INJECT_TAG && m.key !== METADATA_KEY.NAME_TAG && m.key !== METADATA_KEY.UNMANAGED_TAG && m.key !== METADATA_KEY.NAMED_TAG;
                })) : null;
            }, Target.prototype.matchesNamedTag = function(name) {
                return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
            }, Target.prototype.matchesTag = function(key) {
                var _this = this;
                return function(value) {
                    for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                        var m = _a[_i];
                        if (m.key === key && m.value === value) return !0;
                    }
                    return !1;
                };
            }, Target;
        }();
        exports.Target = Target;
    },
    27: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_on_syntax_1 = __webpack_require__(18), binding_when_syntax_1 = __webpack_require__(19), BindingWhenOnSyntax = function() {
            function BindingWhenOnSyntax(binding) {
                this._binding = binding, this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding), 
                this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
            }
            return BindingWhenOnSyntax.prototype.when = function(constraint) {
                return this._bindingWhenSyntax.when(constraint);
            }, BindingWhenOnSyntax.prototype.whenTargetNamed = function(name) {
                return this._bindingWhenSyntax.whenTargetNamed(name);
            }, BindingWhenOnSyntax.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault();
            }, BindingWhenOnSyntax.prototype.whenTargetTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenTargetTagged(tag, value);
            }, BindingWhenOnSyntax.prototype.whenInjectedInto = function(parent) {
                return this._bindingWhenSyntax.whenInjectedInto(parent);
            }, BindingWhenOnSyntax.prototype.whenParentNamed = function(name) {
                return this._bindingWhenSyntax.whenParentNamed(name);
            }, BindingWhenOnSyntax.prototype.whenParentTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenParentTagged(tag, value);
            }, BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function(ancestor) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
            }, BindingWhenOnSyntax.prototype.whenNoAncestorIs = function(ancestor) {
                return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
            }, BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function(name) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
            }, BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
            }, BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function(name) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(name);
            }, BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
            }, BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function(constraint) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
            }, BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function(constraint) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
            }, BindingWhenOnSyntax.prototype.onActivation = function(handler) {
                return this._bindingOnSyntax.onActivation(handler);
            }, BindingWhenOnSyntax;
        }();
        exports.BindingWhenOnSyntax = BindingWhenOnSyntax;
    },
    28: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), traverseAncerstors = function(request, constraint) {
            var parent = request.parentRequest;
            return null !== parent && (!!constraint(parent) || traverseAncerstors(parent, constraint));
        };
        exports.traverseAncerstors = traverseAncerstors;
        var taggedConstraint = function(key) {
            return function(value) {
                var constraint = function(request) {
                    return null !== request && null !== request.target && request.target.matchesTag(key)(value);
                };
                return constraint.metaData = new metadata_1.Metadata(key, value), constraint;
            };
        };
        exports.taggedConstraint = taggedConstraint;
        var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
        exports.namedConstraint = namedConstraint;
        exports.typeConstraint = function(type) {
            return function(request) {
                var binding = null;
                if (null !== request) {
                    if (binding = request.bindings[0], "string" == typeof type) return binding.serviceIdentifier === type;
                    var constructor = request.bindings[0].implementationType;
                    return type === constructor;
                }
                return !1;
            };
        };
    },
    29: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), InternalDispatcherListenerIsNotRegisteredException_1 = __webpack_require__(71);
        let InternalDispatcher = class InternalDispatcher {
            constructor(container, loggerService) {
                this.container = container, this.loggerService = loggerService, this.counter = 0, 
                this.listeners = {}, this.listenersIndex = {};
            }
            emit(event) {
                return __awaiter(this, void 0, void 0, (function*() {
                    this.loggerService.event("InternalDispatcher", event);
                    const listeners = this.getEventListeners(event.event), promises = [];
                    for (const key in listeners) {
                        const listener = listeners[key], promise = listener.handle.apply(listener, [ event ]);
                        promises.push(promise);
                    }
                    Promise.all(promises).then();
                }));
            }
            on(useClass) {
                this.container.bind(useClass).toSelf().inSingletonScope();
                const handler = this.container.get(useClass), eventName = handler.on();
                this.loggerService.log(`InternalDispatcher: register a listener on event "${eventName}"`), 
                void 0 === this.listeners[eventName] && (this.listeners[eventName] = []);
                const id = ++this.counter;
                return this.listenersIndex[id] = eventName, this.listeners[eventName][id] = handler, 
                id;
            }
            hasEventListeners(eventName) {
                return this.listeners.hasOwnProperty(eventName) && this.listeners[eventName].length > 0;
            }
            getEventListeners(eventName) {
                if (this.hasEventListeners(eventName)) {
                    return this.listeners[eventName].filter(value => !!value.handle);
                }
                return [];
            }
            getListener(id) {
                if (!this.hasListener(id)) throw new InternalDispatcherListenerIsNotRegisteredException_1.InternalDispatcherListenerIsNotRegisteredException(`a listener with id "${id}" is not registered`);
                const eventName = this.listenersIndex[id];
                return this.listeners[eventName][id];
            }
            removeListener(id) {
                if (!this.hasListener(id)) throw new InternalDispatcherListenerIsNotRegisteredException_1.InternalDispatcherListenerIsNotRegisteredException(`a listener with id "${id}" is not registered`);
                const eventName = this.listenersIndex[id];
                delete this.listenersIndex[id], delete this.listeners[eventName][id];
            }
            hasListener(listenerId) {
                return this.listenersIndex.hasOwnProperty(listenerId);
            }
        };
        InternalDispatcher = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.CONTAINER)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ Object, Object ]) ], InternalDispatcher), 
        exports.InternalDispatcher = InternalDispatcher;
    },
    3: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.", 
        exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:", 
        exports.NULL_ARGUMENT = "NULL argument", exports.KEY_NOT_FOUND = "Key Not Found", 
        exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:", exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:", 
        exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:", exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:", 
        exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:", 
        exports.UNDEFINED_INJECT_ANNOTATION = function(name) {
            return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
        }, exports.CIRCULAR_DEPENDENCY = "Circular dependency found:", exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.", 
        exports.INVALID_BINDING_TYPE = "Invalid binding type:", exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.", 
        exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!", 
        exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!", 
        exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier", 
        exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.", 
        exports.ARGUMENTS_LENGTH_MISMATCH = function() {
            for (var values = [], _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
            return "The number of constructor arguments in the derived class " + values[0] + " must be >= than the number of constructor arguments of its base class.";
        }, exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.", 
        exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", 
        exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean", 
        exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean", 
        exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class", 
        exports.POST_CONSTRUCT_ERROR = function() {
            for (var values = [], _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
            return "@postConstruct error in class " + values[0] + ": " + values[1];
        }, exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function() {
            for (var values = [], _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
            return "It looks like there is a circular dependency in one of the '" + values[0] + "' bindings. Please investigate bindings withservice identifier '" + values[1] + "'.";
        }, exports.STACK_OVERFLOW = "Maximum call stack size exceeded";
    },
    30: function(module, exports, __webpack_require__) {
        "use strict";
        var LoggerService_1, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), stringify = __webpack_require__(73);
        let LoggerService = LoggerService_1 = class LoggerService {
            constructor() {
                this.onLogListeners = [], this.onEventListeners = [], this.onErrorListeners = [], 
                this.onWarnListeners = [], this.onFilterLogListeners = [];
            }
            log(message, args) {
                const output = this.time();
                output[0] += "%c[INFO] %c" + message, output.push(this.color(LoggerService_1.LIGHT_BLUE_COLOR) + this.fontWeight(600)), 
                output.push(this.color(LoggerService_1.BLACK_COLOR));
                let argsOutput = "";
                void 0 !== args && (argsOutput = stringify(args, null, 2));
                const cleanOutput = this.prepareOutput(output[0], argsOutput);
                !this.filterInfo(cleanOutput) && console.log.apply(console, output), this.handleOnLogListeners(message, args, cleanOutput);
            }
            event(message, event) {
                const output = this.time();
                output[0] += `%c[EVENT ${event.event}] %c${message}`, output.push(this.color(LoggerService_1.LIGHT_GREEN_COLOR) + this.fontWeight(600)), 
                output.push(this.color(LoggerService_1.BLACK_COLOR)), console.log.apply(console, output);
                const argsOutput = stringify(event.data, null, 2);
                this.handleOnEventListeners(message, event, this.prepareOutput(output[0], argsOutput));
            }
            warn(message, args) {
                const output = this.time();
                output[0] += "%c[WARN] %c" + message, output.push(this.color(LoggerService_1.RED_COLOR) + this.fontWeight(600)), 
                output.push(this.color(LoggerService_1.BLACK_COLOR)), console.log.apply(console, output);
                let argsOutput = "";
                void 0 !== args && (console.log(args), argsOutput = stringify(args, null, 2)), this.handleOnWarnListeners(message, args, this.prepareOutput(output[0], argsOutput));
            }
            error(e) {
                const output = this.time();
                output[0] += "%c[ERROR] %c" + e.message, output.push(this.color(LoggerService_1.RED_COLOR) + this.fontWeight(600)), 
                output.push(this.color(LoggerService_1.BLACK_COLOR)), console.log.apply(console, output), 
                this.handleOnErrorListeners(e);
            }
            onLog(callback) {
                this.onLogListeners.push(callback);
            }
            onEvent(callback) {
                this.onEventListeners.push(callback);
            }
            onWarn(callback) {
                this.onWarnListeners.push(callback);
            }
            onError(callback) {
                this.onErrorListeners.push(callback);
            }
            onFilterLog(callback) {
                this.onFilterLogListeners.push(callback);
            }
            handleOnLogListeners(message, args, output) {
                for (const listener of this.onLogListeners) listener(message, args, output);
            }
            handleOnWarnListeners(message, args, output) {
                for (const listener of this.onWarnListeners) listener(message, args, output);
            }
            handleOnEventListeners(message, event, output) {
                for (const listener of this.onEventListeners) listener(message, event, output);
            }
            handleOnErrorListeners(e, output) {
                for (const listener of this.onErrorListeners) listener(e, output);
            }
            filterInfo(cleanOutput) {
                for (const listener of this.onFilterLogListeners) {
                    if (listener(cleanOutput)) return !0;
                }
                return !1;
            }
            time() {
                const date = new Date;
                let time = "%c[";
                return time += `tz:${date.getTimezoneOffset()} `, time += this.pad(date.getDate().toString(), 2) + "/", 
                time += this.pad(date.getMonth().toString(), 2) + "/", time += date.getFullYear() + " ", 
                time += this.pad(date.getHours().toString(), 2) + ":", time += this.pad(date.getMinutes().toString(), 2) + ":", 
                time += this.pad(date.getSeconds().toString(), 2) + " ", time += "" + this.pad(date.getMilliseconds().toString(), 4), 
                time += "]%c ", [ time, this.fontWeight(600), this.color(LoggerService_1.BLACK_COLOR) ];
            }
            color(color) {
                return `color: ${color};`;
            }
            fontWeight(value) {
                return `font-weight: ${value};`;
            }
            pad(str, width, z) {
                const char = z || "0";
                return str.length >= width ? str : new Array(width - str.length + 1).join(char) + str;
            }
            prepareOutput(output, args) {
                return `${output.replace(/%c/g, "")}\n${args}`;
            }
        };
        LoggerService.BLACK_COLOR = "#000", LoggerService.RED_COLOR = "#f40f3f", LoggerService.LIGHT_GREEN_COLOR = "#1e9f3e", 
        LoggerService.LIGHT_BLUE_COLOR = "#4285f4", LoggerService = LoggerService_1 = __decorate([ inversify_1.injectable() ], LoggerService), 
        exports.LoggerService = LoggerService;
    },
    31: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(TabServiceEvents) {
            TabServiceEvents.ON_TAB_CREATED = "ON_TAB_CREATED", TabServiceEvents.ON_TAB_UPDATED = "ON_TAB_UPDATED", 
            TabServiceEvents.ON_TAB_MOVED = "ON_TAB_MOVED", TabServiceEvents.ON_TAB_ACTIVATED = "ON_TAB_ACTIVATED", 
            TabServiceEvents.ON_TAB_HIGHLIGHTED = "ON_TAB_HIGHLIGHTED", TabServiceEvents.ON_TAB_DETACHED = "ON_TAB_DETACHED", 
            TabServiceEvents.ON_TAB_ATTACHED = "ON_TAB_ATTACHED", TabServiceEvents.ON_TAB_REMOVED = "ON_TAB_REMOVED", 
            TabServiceEvents.ON_TAB_REPLACED = "ON_TAB_REPLACED", TabServiceEvents.ON_TAB_ZOOM_CHANGE = "ON_TAB_ZOOM_CHANGE";
        }(exports.TabServiceEvents || (exports.TabServiceEvents = {}));
    },
    32: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), ExternalDispatcherEvents_1 = __webpack_require__(39), ExternalDispatcherListenerIsNotFoundException_1 = __webpack_require__(77);
        let ExternalDispatcher = class ExternalDispatcher {
            constructor(container, loggerService, tabService) {
                this.container = container, this.loggerService = loggerService, this.tabService = tabService, 
                this.listeners = {}, this.listenersIndex = {}, this.counter = 0, chrome.runtime.onMessage.addListener((message, sender, response) => {
                    if (this.loggerService.log("ExternalDispatcher: received a message", message), this.internalEmit(ExternalDispatcherEvents_1.ExternalDispatcherEvents.ON_ANY_MESSAGE, message, sender, response), 
                    this.isEventMessage(message)) {
                        const scope = message.event;
                        this.loggerService.event("ExternalDispatcher: emit", message), this.internalEmit(scope, message, sender, response);
                    }
                    return !0;
                });
            }
            emit(tabId, event) {
                this.loggerService.event("ExternalDispatcher: emit", event), this.tabService.sendMessage(tabId, event);
            }
            on(useClass) {
                this.validateContainer();
                const handler = this.bind(useClass);
                return this.loggerService.log(`ExternalDispatcher: register an event listener "${handler.on()}"`), 
                this.addEventListener(handler.on(), handler);
            }
            removeListener(listenerId) {
                if (!this.hasListeners(listenerId)) throw new ExternalDispatcherListenerIsNotFoundException_1.ExternalDispatcherListenerIsNotFoundException(`Listener with id "${listenerId}" is not found`);
                this.loggerService.log(`ExternalDispatcher: remove an event listener "${listenerId}"`);
                const scope = this.listenersIndex[listenerId];
                delete this.listeners[scope][listenerId], delete this.listenersIndex[listenerId];
            }
            getListener(listenerId) {
                if (!this.hasListeners(listenerId)) throw new ExternalDispatcherListenerIsNotFoundException_1.ExternalDispatcherListenerIsNotFoundException(`Listener with id "${listenerId}" is not found`);
                const scope = this.listenersIndex[listenerId];
                return this.listeners[scope][listenerId];
            }
            hasListeners(listenerId) {
                return void 0 !== this.listenersIndex[listenerId];
            }
            getEventListeners(event) {
                return this.hasEventListeners(event) ? this.listeners[event] : [];
            }
            hasEventListeners(event) {
                return void 0 !== this.listeners[event];
            }
            validateContainer() {}
            isEventMessage(message) {
                return "object" == typeof message && "string" == typeof message.event;
            }
            internalEmit(scope, message, sender, sendResponse) {
                if (!this.hasEventListeners(scope)) return;
                const promises = [], listeners = this.listeners[scope];
                for (const key of Object.keys(listeners)) {
                    const listener = listeners[key], promise = listener.handle.apply(listener, [ message, sender, sendResponse ]);
                    promises.push(promise);
                }
                Promise.all(promises).then();
            }
            addEventListener(scope, handler) {
                this.validateContainer(), void 0 === this.listeners[scope] && (this.listeners[scope] = {});
                const id = ++this.counter;
                return this.listeners[scope][id] = handler, this.listenersIndex[id] = scope, id;
            }
            bind(useClass) {
                return this.container.bind(useClass).toSelf().inSingletonScope(), this.container.get(useClass);
            }
        };
        ExternalDispatcher = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.CONTAINER)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __param(2, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.TAB_SERVICE)), __metadata("design:paramtypes", [ Object, Object, Object ]) ], ExternalDispatcher), 
        exports.ExternalDispatcher = ExternalDispatcher;
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
    373: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const notification_1 = __webpack_require__(374), GoogleAnalyticsContentDispatcher_1 = __webpack_require__(95), dispatcherService = new (__webpack_require__(1).ContentDispatcherService), googleAnalytics = new GoogleAnalyticsContentDispatcher_1.GoogleAnalyticsContentDispatcher(dispatcherService);
        new notification_1.NotificationService(googleAnalytics);
    },
    374: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const src_1 = __webpack_require__(1), UrlsSafeCheckEvents_1 = __webpack_require__(41), UrlsSafeCheckTypes_1 = __webpack_require__(12), IframeEvents_1 = __webpack_require__(157);
        exports.NotificationService = class NotificationService {
            constructor(googleAnalytics) {
                this.googleAnalytics = googleAnalytics, this.dispatcher = new src_1.ContentDispatcherService;
                const _this = this;
                window.addEventListener("message", event => {
                    event && event.data && event.data.message && _this.onIframeMessage(event.data);
                }, !1), this.dispatcher.on(UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED, message => {
                    const {status: status, notificationMuted: notificationMuted} = message.data;
                    status !== UrlsSafeCheckTypes_1.STATUS.UNSAFE || notificationMuted || this.showUnsafePopup();
                });
            }
            onIframeMessage(data) {
                switch (data.message) {
                  case IframeEvents_1.IframeEvents.CLOSE:
                    this.hideUnsafePopup();
                    break;

                  case IframeEvents_1.IframeEvents.GOTO_URL:
                    window.location = data.url;
                }
            }
            showUnsafePopup() {
                this.googleAnalytics.trackEvent({
                    category: "unsafe_popup",
                    action: "shown"
                }), this.getIframeElement() || this.injectIframeDynamic();
            }
            hideUnsafePopup() {
                try {
                    this.googleAnalytics.trackEvent({
                        category: "unsafe_popup",
                        action: "hidden"
                    });
                } catch (err) {}
                const element = this.getIframeElement();
                element && element.remove();
            }
            injectIframeDynamic() {
                const iFrame = document.createElement("iframe");
                iFrame.style.width = "665px", iFrame.style.height = "265px", iFrame.style.position = "fixed", 
                iFrame.style.top = "16px", iFrame.style.right = "16px", iFrame.style.zIndex = "9999999999", 
                iFrame.style.borderRadius = "8px", iFrame.style.boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.3)", 
                iFrame.style.backgroundColor = "#ffffff", iFrame.style.border = "solid 1px #d7d7d7", 
                iFrame.src = chrome.extension.getURL("content/safecheck-notification/notification-iframe/index.html"), 
                iFrame.id = "safesearch_notification_iframe", document.body.insertBefore(iFrame, document.body.firstChild);
            }
            getIframeElement() {
                return document.getElementById("safesearch_notification_iframe");
            }
        };
    },
    38: function(module, exports) {
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, function(marker) {
                    if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                    clearTimeout(marker);
                    try {
                        cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
        process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    },
    39: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(ExternalDispatcherEvents) {
            ExternalDispatcherEvents.ON_ANY_MESSAGE = "ON_ANY_MESSAGE";
        }(exports.ExternalDispatcherEvents || (exports.ExternalDispatcherEvents = {}));
    },
    4: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const MARIO_TYPES = {
            ALARM_SERVICE: Symbol.for("ALARM_SERVICE"),
            BROWSER: Symbol.for("BROWSER"),
            BROWSER_ACTION: Symbol.for("BROWSER_ACTION"),
            CACHE_SERVICE: Symbol.for("CACHE_SERVICE"),
            CONTAINER: Symbol.for("CONTAINER"),
            INTERNAL_DISPATCHER: Symbol.for("INTERNAL_DISPATCHER"),
            LOCAL_STORAGE_SERVICE: Symbol.for("LOCAL_STORAGE_SERVICE"),
            LOGGER_SERVICE: Symbol.for("LOGGER_SERVICE"),
            STORAGE_SERVICE: Symbol.for("STORAGE_SERVICE"),
            TAB_SERVICE: Symbol.for("TAB_SERVICE"),
            NAVIGATION_SERVICE: Symbol.for("NAVIGATION_SERVICE"),
            WEB_REQUEST_SERVICE: Symbol.for("WEB_REQUEST_SERVICE"),
            PROXY_SERVICE: Symbol.for("PROXY_SERVICE"),
            EXTENSION_SERVICE: Symbol.for("EXTENSION_SERVICE"),
            EXTERNAL_DISPATCHER: Symbol.for("EXTERNAL_DISPATCHER"),
            OMNIBOX_SERVICE: Symbol.for("OMNIBOX_SERVICE"),
            WINDOW_POST: Symbol.for("WINDOW_POST"),
            MANAGEMENT: Symbol.for("MANAGEMENT")
        };
        exports.MARIO_TYPES = MARIO_TYPES;
    },
    40: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), index_1 = __webpack_require__(1), MARIO_TYPES_1 = __webpack_require__(4), NavigationServiceEvents_1 = __webpack_require__(82);
        let NavigationService = class NavigationService {
            constructor(dispatcherService) {
                this.dispatcherService = dispatcherService, this.isListenOnBeforeNavigate = !1, 
                this.isListenOnCommitted = !1, this.isListenOnDOMContentLoaded = !1, this.isListenOnCompleted = !1, 
                this.isListenOnErrorOccurred = !1, this.isListenOnCreatedNavigationTarget = !1, 
                this.isListenOnReferenceFragmentUpdated = !1, this.isListenOnTabReplaced = !1, this.isListenOnHistoryStateUpdated = !1;
            }
            listenOnBeforeNavigate() {
                this.isListenOnBeforeNavigate || (this.isListenOnBeforeNavigate = !0, chrome.webNavigation.onBeforeNavigate.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_BEFORE_NAVIGATE, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnCommitted() {
                this.isListenOnCommitted || (this.isListenOnCommitted = !0, chrome.webNavigation.onCommitted.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_COMMITTED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnDOMContentLoaded() {
                this.isListenOnDOMContentLoaded || (this.isListenOnDOMContentLoaded = !0, chrome.webNavigation.onDOMContentLoaded.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_DOM_CONTENT_LOADED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnCompleted() {
                this.isListenOnCompleted || (this.isListenOnCompleted = !0, chrome.webNavigation.onCompleted.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_COMPLETED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnErrorOccurred() {
                this.isListenOnErrorOccurred || (this.isListenOnErrorOccurred = !0, chrome.webNavigation.onErrorOccurred.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_ERROR_OCCURRED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnCreatedNavigationTarget() {
                this.isListenOnCreatedNavigationTarget || (this.isListenOnCreatedNavigationTarget = !0, 
                chrome.webNavigation.onCreatedNavigationTarget.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_CREATED_NAVIGATION_TARGET, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnReferenceFragmentUpdated() {
                this.isListenOnReferenceFragmentUpdated || (this.isListenOnReferenceFragmentUpdated = !0, 
                chrome.webNavigation.onReferenceFragmentUpdated.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnTabReplaced() {
                this.isListenOnTabReplaced || (this.isListenOnTabReplaced = !0, chrome.webNavigation.onTabReplaced.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_TAB_REPLACED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            listenOnHistoryStateUpdated() {
                this.isListenOnHistoryStateUpdated || (this.isListenOnHistoryStateUpdated = !0, 
                chrome.webNavigation.onHistoryStateUpdated.addListener(details => {
                    const event = new index_1.MarioEvent(NavigationServiceEvents_1.NavigationServiceEvents.NAVIGATION_ON_HISTORY_STATE_UPDATED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }));
            }
            getFrame(properties) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.webNavigation.getFrame(properties, frame => resolve(frame));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            getAllFrames(properties) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.webNavigation.getAllFrames(properties, frames => resolve(frames));
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
        };
        NavigationService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], NavigationService), 
        exports.NavigationService = NavigationService;
    },
    41: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.UrlsSafeCheckEvents = void 0, function(UrlsSafeCheckEvents) {
            UrlsSafeCheckEvents.SAFE_STATUS_UPDATED = "URLS_SAFE_CHECK__STATUS_UPDATED", UrlsSafeCheckEvents.GET_ACTIVE_TAB_STATE = "URLS_SAFE_CHECK__GET_ACTIVE_TAB_STATE", 
            UrlsSafeCheckEvents.MUTE_NOTIFICATION = "URLS_SAFE_CHECK__MUTE_NOTIFICATION", UrlsSafeCheckEvents.CONTENT_URL_REWRITED = "URLS_SAFE_CHECK__CONTENT_URL_REWRITED";
        }(exports.UrlsSafeCheckEvents || (exports.UrlsSafeCheckEvents = {}));
    },
    42: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.GoogleAnalyticsEvents = void 0, function(GoogleAnalyticsEvents) {
            GoogleAnalyticsEvents.TRACK_PAGE = "GOOGLE_ANALYTICS_TRACK_PAGE", GoogleAnalyticsEvents.TRACK_EVENT = "GOOGLE_ANALYTICS_TRACK_EVENT";
        }(exports.GoogleAnalyticsEvents || (exports.GoogleAnalyticsEvents = {}));
    },
    43: function(module, exports, __webpack_require__) {
        "use strict";
        (function(global) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __webpack_require__(44);
            const inversify_1 = __webpack_require__(0), InternalDispatcher_1 = __webpack_require__(29), LoggerService_1 = __webpack_require__(30), TabService_1 = __webpack_require__(20), CoreServiceIsNotRegisteredException_1 = __webpack_require__(74), Extension_1 = __webpack_require__(76), MARIO_TYPES_1 = __webpack_require__(4), ExternalDispatcher_1 = __webpack_require__(32);
            exports.Mario = class Mario {
                constructor(browser, options = {}) {
                    this.isInitialized = !1, this._container = options.container ? options.container : new inversify_1.Container, 
                    this._container.bind(MARIO_TYPES_1.MARIO_TYPES.BROWSER).toConstantValue(browser), 
                    this._container.bind(MARIO_TYPES_1.MARIO_TYPES.CONTAINER).toConstantValue(this._container);
                    const loggerService = options.logger ? options.logger : LoggerService_1.LoggerService, internalDispatcherService = options.internalDispatcher ? options.internalDispatcher : InternalDispatcher_1.InternalDispatcher, externalDispatcherService = options.externalDispatcher ? options.externalDispatcher : ExternalDispatcher_1.ExternalDispatcher, tabService = options.tab ? options.tab : TabService_1.TabService;
                    this.registerService(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE, loggerService), this.logger().log(`Core: this build is for "${browser.toString()}"`), 
                    this.registerService(MARIO_TYPES_1.MARIO_TYPES.EXTENSION_SERVICE, Extension_1.Extension), 
                    this.extension(), this.registerService(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER, internalDispatcherService), 
                    this.registerService(MARIO_TYPES_1.MARIO_TYPES.EXTERNAL_DISPATCHER, externalDispatcherService), 
                    this.registerService(MARIO_TYPES_1.MARIO_TYPES.TAB_SERVICE, tabService), global.window.mario = this, 
                    this.coreInitialized();
                }
                registerModule(useClass, options) {
                    return __awaiter(this, void 0, void 0, (function*() {
                        const module = new useClass(this);
                        this.logger().log(`Core: registering a module "${module.name()}"`);
                        try {
                            yield module.register(options), this.logger().log(`Core: the module "${module.name()}" is registered`);
                        } catch (e) {
                            this.logger().error(e);
                        }
                    }));
                }
                registerService(name, useClass) {
                    this.isCoreInitialized() && this.logger().log(`Core: registered a service "${name.toString()}"`), 
                    this.hasService(name) || this._container.bind(name).to(useClass).inSingletonScope();
                }
                getService(name) {
                    if (!this.hasService(name)) {
                        const message = `Can't get service: service '${name.toString()}' is not registered`;
                        throw this.isCoreInitialized() && this.logger().warn(message), new CoreServiceIsNotRegisteredException_1.CoreServiceIsNotRegisteredException(message);
                    }
                    return this._container.get(name);
                }
                hasService(name) {
                    return this._container.isBound(name);
                }
                internalDispatcher() {
                    return this.getService(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER);
                }
                externalDispatcher() {
                    return this.getService(MARIO_TYPES_1.MARIO_TYPES.EXTERNAL_DISPATCHER);
                }
                logger() {
                    return this.getService(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE);
                }
                container() {
                    return this._container;
                }
                tabService() {
                    return this.getService(MARIO_TYPES_1.MARIO_TYPES.TAB_SERVICE);
                }
                extension() {
                    return this.getService(MARIO_TYPES_1.MARIO_TYPES.EXTENSION_SERVICE);
                }
                coreInitialized() {
                    this.isInitialized = !0;
                }
                isCoreInitialized() {
                    return this.isInitialized;
                }
            };
        }).call(this, __webpack_require__(16));
    },
    44: function(module, exports, __webpack_require__) {
        (function(process, global) {
            var Reflect;
            !function(Reflect) {
                !function(factory) {
                    var root = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(), exporter = makeExporter(Reflect);
                    function makeExporter(target, previous) {
                        return function(key, value) {
                            "function" != typeof target[key] && Object.defineProperty(target, key, {
                                configurable: !0,
                                writable: !0,
                                value: value
                            }), previous && previous(key, value);
                        };
                    }
                    void 0 === root.Reflect ? root.Reflect = Reflect : exporter = makeExporter(root.Reflect, exporter), 
                    function(exporter) {
                        var hasOwn = Object.prototype.hasOwnProperty, supportsSymbol = "function" == typeof Symbol, toPrimitiveSymbol = supportsSymbol && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive", iteratorSymbol = supportsSymbol && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator", supportsCreate = "function" == typeof Object.create, supportsProto = {
                            __proto__: []
                        } instanceof Array, downLevel = !supportsCreate && !supportsProto, HashMap = {
                            create: supportsCreate ? function() {
                                return MakeDictionary(Object.create(null));
                            } : supportsProto ? function() {
                                return MakeDictionary({
                                    __proto__: null
                                });
                            } : function() {
                                return MakeDictionary({});
                            },
                            has: downLevel ? function(map, key) {
                                return hasOwn.call(map, key);
                            } : function(map, key) {
                                return key in map;
                            },
                            get: downLevel ? function(map, key) {
                                return hasOwn.call(map, key) ? map[key] : void 0;
                            } : function(map, key) {
                                return map[key];
                            }
                        }, functionPrototype = Object.getPrototypeOf(Function), usePolyfill = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, _Map = usePolyfill || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function() {
                            var cacheSentinel = {}, arraySentinel = [], MapIterator = function() {
                                function MapIterator(keys, values, selector) {
                                    this._index = 0, this._keys = keys, this._values = values, this._selector = selector;
                                }
                                return MapIterator.prototype["@@iterator"] = function() {
                                    return this;
                                }, MapIterator.prototype[iteratorSymbol] = function() {
                                    return this;
                                }, MapIterator.prototype.next = function() {
                                    var index = this._index;
                                    if (index >= 0 && index < this._keys.length) {
                                        var result = this._selector(this._keys[index], this._values[index]);
                                        return index + 1 >= this._keys.length ? (this._index = -1, this._keys = arraySentinel, 
                                        this._values = arraySentinel) : this._index++, {
                                            value: result,
                                            done: !1
                                        };
                                    }
                                    return {
                                        value: void 0,
                                        done: !0
                                    };
                                }, MapIterator.prototype.throw = function(error) {
                                    throw this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                                    error;
                                }, MapIterator.prototype.return = function(value) {
                                    return this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                                    {
                                        value: value,
                                        done: !0
                                    };
                                }, MapIterator;
                            }();
                            return function() {
                                function Map() {
                                    this._keys = [], this._values = [], this._cacheKey = cacheSentinel, this._cacheIndex = -2;
                                }
                                return Object.defineProperty(Map.prototype, "size", {
                                    get: function() {
                                        return this._keys.length;
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), Map.prototype.has = function(key) {
                                    return this._find(key, !1) >= 0;
                                }, Map.prototype.get = function(key) {
                                    var index = this._find(key, !1);
                                    return index >= 0 ? this._values[index] : void 0;
                                }, Map.prototype.set = function(key, value) {
                                    var index = this._find(key, !0);
                                    return this._values[index] = value, this;
                                }, Map.prototype.delete = function(key) {
                                    var index = this._find(key, !1);
                                    if (index >= 0) {
                                        for (var size = this._keys.length, i = index + 1; i < size; i++) this._keys[i - 1] = this._keys[i], 
                                        this._values[i - 1] = this._values[i];
                                        return this._keys.length--, this._values.length--, key === this._cacheKey && (this._cacheKey = cacheSentinel, 
                                        this._cacheIndex = -2), !0;
                                    }
                                    return !1;
                                }, Map.prototype.clear = function() {
                                    this._keys.length = 0, this._values.length = 0, this._cacheKey = cacheSentinel, 
                                    this._cacheIndex = -2;
                                }, Map.prototype.keys = function() {
                                    return new MapIterator(this._keys, this._values, getKey);
                                }, Map.prototype.values = function() {
                                    return new MapIterator(this._keys, this._values, getValue);
                                }, Map.prototype.entries = function() {
                                    return new MapIterator(this._keys, this._values, getEntry);
                                }, Map.prototype["@@iterator"] = function() {
                                    return this.entries();
                                }, Map.prototype[iteratorSymbol] = function() {
                                    return this.entries();
                                }, Map.prototype._find = function(key, insert) {
                                    return this._cacheKey !== key && (this._cacheIndex = this._keys.indexOf(this._cacheKey = key)), 
                                    this._cacheIndex < 0 && insert && (this._cacheIndex = this._keys.length, this._keys.push(key), 
                                    this._values.push(void 0)), this._cacheIndex;
                                }, Map;
                            }();
                            function getKey(key, _) {
                                return key;
                            }
                            function getValue(_, value) {
                                return value;
                            }
                            function getEntry(key, value) {
                                return [ key, value ];
                            }
                        }() : Map, _Set = usePolyfill || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function() {
                            function Set() {
                                this._map = new _Map;
                            }
                            return Object.defineProperty(Set.prototype, "size", {
                                get: function() {
                                    return this._map.size;
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Set.prototype.has = function(value) {
                                return this._map.has(value);
                            }, Set.prototype.add = function(value) {
                                return this._map.set(value, value), this;
                            }, Set.prototype.delete = function(value) {
                                return this._map.delete(value);
                            }, Set.prototype.clear = function() {
                                this._map.clear();
                            }, Set.prototype.keys = function() {
                                return this._map.keys();
                            }, Set.prototype.values = function() {
                                return this._map.values();
                            }, Set.prototype.entries = function() {
                                return this._map.entries();
                            }, Set.prototype["@@iterator"] = function() {
                                return this.keys();
                            }, Set.prototype[iteratorSymbol] = function() {
                                return this.keys();
                            }, Set;
                        }() : Set, Metadata = new (usePolyfill || "function" != typeof WeakMap ? function() {
                            var keys = HashMap.create(), rootKey = CreateUniqueKey();
                            return function() {
                                function WeakMap() {
                                    this._key = CreateUniqueKey();
                                }
                                return WeakMap.prototype.has = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table && HashMap.has(table, this._key);
                                }, WeakMap.prototype.get = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table ? HashMap.get(table, this._key) : void 0;
                                }, WeakMap.prototype.set = function(target, value) {
                                    return GetOrCreateWeakMapTable(target, !0)[this._key] = value, this;
                                }, WeakMap.prototype.delete = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table && delete table[this._key];
                                }, WeakMap.prototype.clear = function() {
                                    this._key = CreateUniqueKey();
                                }, WeakMap;
                            }();
                            function CreateUniqueKey() {
                                var key;
                                do {
                                    key = "@@WeakMap@@" + CreateUUID();
                                } while (HashMap.has(keys, key));
                                return keys[key] = !0, key;
                            }
                            function GetOrCreateWeakMapTable(target, create) {
                                if (!hasOwn.call(target, rootKey)) {
                                    if (!create) return;
                                    Object.defineProperty(target, rootKey, {
                                        value: HashMap.create()
                                    });
                                }
                                return target[rootKey];
                            }
                            function FillRandomBytes(buffer, size) {
                                for (var i = 0; i < size; ++i) buffer[i] = 255 * Math.random() | 0;
                                return buffer;
                            }
                            function CreateUUID() {
                                var size, data = (size = 16, "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(size)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(size)) : FillRandomBytes(new Uint8Array(size), size) : FillRandomBytes(new Array(size), size));
                                data[6] = 79 & data[6] | 64, data[8] = 191 & data[8] | 128;
                                for (var result = "", offset = 0; offset < 16; ++offset) {
                                    var byte = data[offset];
                                    4 !== offset && 6 !== offset && 8 !== offset || (result += "-"), byte < 16 && (result += "0"), 
                                    result += byte.toString(16).toLowerCase();
                                }
                                return result;
                            }
                        }() : WeakMap);
                        function GetOrCreateMetadataMap(O, P, Create) {
                            var targetMetadata = Metadata.get(O);
                            if (IsUndefined(targetMetadata)) {
                                if (!Create) return;
                                targetMetadata = new _Map, Metadata.set(O, targetMetadata);
                            }
                            var metadataMap = targetMetadata.get(P);
                            if (IsUndefined(metadataMap)) {
                                if (!Create) return;
                                metadataMap = new _Map, targetMetadata.set(P, metadataMap);
                            }
                            return metadataMap;
                        }
                        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                            var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            return !IsUndefined(metadataMap) && !!metadataMap.has(MetadataKey);
                        }
                        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                            var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            if (!IsUndefined(metadataMap)) return metadataMap.get(MetadataKey);
                        }
                        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                            GetOrCreateMetadataMap(O, P, !0).set(MetadataKey, MetadataValue);
                        }
                        function OrdinaryOwnMetadataKeys(O, P) {
                            var keys = [], metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            if (IsUndefined(metadataMap)) return keys;
                            for (var iterator = function(obj) {
                                var method = GetMethod(obj, iteratorSymbol);
                                if (!IsCallable(method)) throw new TypeError;
                                var iterator = method.call(obj);
                                if (!IsObject(iterator)) throw new TypeError;
                                return iterator;
                            }(metadataMap.keys()), k = 0; ;) {
                                var next = IteratorStep(iterator);
                                if (!next) return keys.length = k, keys;
                                var nextValue = next.value;
                                try {
                                    keys[k] = nextValue;
                                } catch (e) {
                                    try {
                                        IteratorClose(iterator);
                                    } finally {
                                        throw e;
                                    }
                                }
                                k++;
                            }
                        }
                        function Type(x) {
                            if (null === x) return 1;
                            switch (typeof x) {
                              case "undefined":
                                return 0;

                              case "boolean":
                                return 2;

                              case "string":
                                return 3;

                              case "symbol":
                                return 4;

                              case "number":
                                return 5;

                              case "object":
                                return null === x ? 1 : 6;

                              default:
                                return 6;
                            }
                        }
                        function IsUndefined(x) {
                            return void 0 === x;
                        }
                        function IsNull(x) {
                            return null === x;
                        }
                        function IsObject(x) {
                            return "object" == typeof x ? null !== x : "function" == typeof x;
                        }
                        function ToPrimitive(input, PreferredType) {
                            switch (Type(input)) {
                              case 0:
                              case 1:
                              case 2:
                              case 3:
                              case 4:
                              case 5:
                                return input;
                            }
                            var hint = 3 === PreferredType ? "string" : 5 === PreferredType ? "number" : "default", exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                            if (void 0 !== exoticToPrim) {
                                var result = exoticToPrim.call(input, hint);
                                if (IsObject(result)) throw new TypeError;
                                return result;
                            }
                            return function(O, hint) {
                                if ("string" === hint) {
                                    var toString_1 = O.toString;
                                    if (IsCallable(toString_1)) if (!IsObject(result = toString_1.call(O))) return result;
                                    if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                                } else {
                                    var valueOf;
                                    if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                                    var result, toString_2 = O.toString;
                                    if (IsCallable(toString_2)) if (!IsObject(result = toString_2.call(O))) return result;
                                }
                                throw new TypeError;
                            }(input, "default" === hint ? "number" : hint);
                        }
                        function ToPropertyKey(argument) {
                            var key = ToPrimitive(argument, 3);
                            return "symbol" == typeof key ? key : function(argument) {
                                return "" + argument;
                            }(key);
                        }
                        function IsArray(argument) {
                            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : "[object Array]" === Object.prototype.toString.call(argument);
                        }
                        function IsCallable(argument) {
                            return "function" == typeof argument;
                        }
                        function IsConstructor(argument) {
                            return "function" == typeof argument;
                        }
                        function GetMethod(V, P) {
                            var func = V[P];
                            if (null != func) {
                                if (!IsCallable(func)) throw new TypeError;
                                return func;
                            }
                        }
                        function IteratorStep(iterator) {
                            var result = iterator.next();
                            return !result.done && result;
                        }
                        function IteratorClose(iterator) {
                            var f = iterator.return;
                            f && f.call(iterator);
                        }
                        function OrdinaryGetPrototypeOf(O) {
                            var proto = Object.getPrototypeOf(O);
                            if ("function" != typeof O || O === functionPrototype) return proto;
                            if (proto !== functionPrototype) return proto;
                            var prototype = O.prototype, prototypeProto = prototype && Object.getPrototypeOf(prototype);
                            if (null == prototypeProto || prototypeProto === Object.prototype) return proto;
                            var constructor = prototypeProto.constructor;
                            return "function" != typeof constructor || constructor === O ? proto : constructor;
                        }
                        function MakeDictionary(obj) {
                            return obj.__ = void 0, delete obj.__, obj;
                        }
                        exporter("decorate", (function(decorators, target, propertyKey, attributes) {
                            if (IsUndefined(propertyKey)) {
                                if (!IsArray(decorators)) throw new TypeError;
                                if (!IsConstructor(target)) throw new TypeError;
                                return function(decorators, target) {
                                    for (var i = decorators.length - 1; i >= 0; --i) {
                                        var decorated = (0, decorators[i])(target);
                                        if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                            if (!IsConstructor(decorated)) throw new TypeError;
                                            target = decorated;
                                        }
                                    }
                                    return target;
                                }(decorators, target);
                            }
                            if (!IsArray(decorators)) throw new TypeError;
                            if (!IsObject(target)) throw new TypeError;
                            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError;
                            return IsNull(attributes) && (attributes = void 0), function(decorators, target, propertyKey, descriptor) {
                                for (var i = decorators.length - 1; i >= 0; --i) {
                                    var decorated = (0, decorators[i])(target, propertyKey, descriptor);
                                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                        if (!IsObject(decorated)) throw new TypeError;
                                        descriptor = decorated;
                                    }
                                }
                                return descriptor;
                            }(decorators, target, propertyKey = ToPropertyKey(propertyKey), attributes);
                        })), exporter("metadata", (function(metadataKey, metadataValue) {
                            return function(target, propertyKey) {
                                if (!IsObject(target)) throw new TypeError;
                                if (!IsUndefined(propertyKey) && !function(argument) {
                                    switch (Type(argument)) {
                                      case 3:
                                      case 4:
                                        return !0;

                                      default:
                                        return !1;
                                    }
                                }(propertyKey)) throw new TypeError;
                                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                            };
                        })), exporter("defineMetadata", (function(metadataKey, metadataValue, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                        })), exporter("hasMetadata", (function(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryHasMetadata(MetadataKey, O, P) {
                                if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return !0;
                                var parent = OrdinaryGetPrototypeOf(O);
                                return !IsNull(parent) && OrdinaryHasMetadata(MetadataKey, parent, P);
                            }(metadataKey, target, propertyKey);
                        })), exporter("hasOwnMetadata", (function(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
                        })), exporter("getMetadata", (function(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryGetMetadata(MetadataKey, O, P) {
                                if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                                var parent = OrdinaryGetPrototypeOf(O);
                                return IsNull(parent) ? void 0 : OrdinaryGetMetadata(MetadataKey, parent, P);
                            }(metadataKey, target, propertyKey);
                        })), exporter("getOwnMetadata", (function(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
                        })), exporter("getMetadataKeys", (function(target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryMetadataKeys(O, P) {
                                var ownKeys = OrdinaryOwnMetadataKeys(O, P), parent = OrdinaryGetPrototypeOf(O);
                                if (null === parent) return ownKeys;
                                var parentKeys = OrdinaryMetadataKeys(parent, P);
                                if (parentKeys.length <= 0) return ownKeys;
                                if (ownKeys.length <= 0) return parentKeys;
                                for (var set = new _Set, keys = [], _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                                    var key = ownKeys_1[_i];
                                    set.has(key) || (set.add(key), keys.push(key));
                                }
                                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                                    key = parentKeys_1[_a];
                                    set.has(key) || (set.add(key), keys.push(key));
                                }
                                return keys;
                            }(target, propertyKey);
                        })), exporter("getOwnMetadataKeys", (function(target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryOwnMetadataKeys(target, propertyKey);
                        })), exporter("deleteMetadata", (function(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey));
                            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, !1);
                            if (IsUndefined(metadataMap)) return !1;
                            if (!metadataMap.delete(metadataKey)) return !1;
                            if (metadataMap.size > 0) return !0;
                            var targetMetadata = Metadata.get(target);
                            return targetMetadata.delete(propertyKey), targetMetadata.size > 0 || Metadata.delete(target), 
                            !0;
                        }));
                    }(exporter);
                }();
            }(Reflect || (Reflect = {}));
        }).call(this, __webpack_require__(38), __webpack_require__(16));
    },
    45: function(module, exports, __webpack_require__) {
        "use strict";
        var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P((function(resolve) {
                        resolve(result.value);
                    })).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        }, __generator = this && this.__generator || function(thisArg, body) {
            var f, y, t, g, _ = {
                label: 0,
                sent: function() {
                    if (1 & t[0]) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return function(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        for (;_; ) try {
                            if (f = 1, y && (t = y[2 & op[0] ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                            switch (y = 0, t && (op = [ 0, t.value ]), op[0]) {
                              case 0:
                              case 1:
                                t = op;
                                break;

                              case 4:
                                return _.label++, {
                                    value: op[1],
                                    done: !1
                                };

                              case 5:
                                _.label++, y = op[1], op = [ 0 ];
                                continue;

                              case 7:
                                op = _.ops.pop(), _.trys.pop();
                                continue;

                              default:
                                if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                    _ = 0;
                                    continue;
                                }
                                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (6 === op[0] && _.label < t[1]) {
                                    _.label = t[1], t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2], _.ops.push(op);
                                    break;
                                }
                                t[2] && _.ops.pop(), _.trys.pop();
                                continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [ 6, e ], y = 0;
                        } finally {
                            f = t = 0;
                        }
                        if (5 & op[0]) throw op[1];
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: !0
                        };
                    }([ n, v ]);
                };
            }
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_1 = __webpack_require__(46), ERROR_MSGS = __webpack_require__(3), literal_types_1 = __webpack_require__(7), METADATA_KEY = __webpack_require__(2), metadata_reader_1 = __webpack_require__(23), planner_1 = __webpack_require__(47), resolver_1 = __webpack_require__(54), binding_to_syntax_1 = __webpack_require__(56), id_1 = __webpack_require__(9), serialization_1 = __webpack_require__(11), container_snapshot_1 = __webpack_require__(59), lookup_1 = __webpack_require__(60), Container = function() {
            function Container(containerOptions) {
                var options = containerOptions || {};
                if ("object" != typeof options) throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
                if (void 0 === options.defaultScope) options.defaultScope = literal_types_1.BindingScopeEnum.Transient; else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton && options.defaultScope !== literal_types_1.BindingScopeEnum.Transient && options.defaultScope !== literal_types_1.BindingScopeEnum.Request) throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                if (void 0 === options.autoBindInjectable) options.autoBindInjectable = !1; else if ("boolean" != typeof options.autoBindInjectable) throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                if (void 0 === options.skipBaseClassChecks) options.skipBaseClassChecks = !1; else if ("boolean" != typeof options.skipBaseClassChecks) throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
                this.options = {
                    autoBindInjectable: options.autoBindInjectable,
                    defaultScope: options.defaultScope,
                    skipBaseClassChecks: options.skipBaseClassChecks
                }, this.id = id_1.id(), this._bindingDictionary = new lookup_1.Lookup, this._snapshots = [], 
                this._middleware = null, this.parent = null, this._metadataReader = new metadata_reader_1.MetadataReader;
            }
            return Container.merge = function(container1, container2) {
                var container = new Container, bindingDictionary = planner_1.getBindingDictionary(container), bindingDictionary1 = planner_1.getBindingDictionary(container1), bindingDictionary2 = planner_1.getBindingDictionary(container2);
                function copyDictionary(origin, destination) {
                    origin.traverse((function(key, value) {
                        value.forEach((function(binding) {
                            destination.add(binding.serviceIdentifier, binding.clone());
                        }));
                    }));
                }
                return copyDictionary(bindingDictionary1, bindingDictionary), copyDictionary(bindingDictionary2, bindingDictionary), 
                container;
            }, Container.prototype.load = function() {
                for (var modules = [], _i = 0; _i < arguments.length; _i++) modules[_i] = arguments[_i];
                for (var getHelpers = this._getContainerModuleHelpersFactory(), _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
                    var currentModule = modules_1[_a], containerModuleHelpers = getHelpers(currentModule.id);
                    currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
                }
            }, Container.prototype.loadAsync = function() {
                for (var modules = [], _i = 0; _i < arguments.length; _i++) modules[_i] = arguments[_i];
                return __awaiter(this, void 0, void 0, (function() {
                    var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
                    return __generator(this, (function(_b) {
                        switch (_b.label) {
                          case 0:
                            getHelpers = this._getContainerModuleHelpersFactory(), _a = 0, modules_2 = modules, 
                            _b.label = 1;

                          case 1:
                            return _a < modules_2.length ? (currentModule = modules_2[_a], containerModuleHelpers = getHelpers(currentModule.id), 
                            [ 4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction) ]) : [ 3, 4 ];

                          case 2:
                            _b.sent(), _b.label = 3;

                          case 3:
                            return _a++, [ 3, 1 ];

                          case 4:
                            return [ 2 ];
                        }
                    }));
                }));
            }, Container.prototype.unload = function() {
                for (var _this = this, modules = [], _i = 0; _i < arguments.length; _i++) modules[_i] = arguments[_i];
                var conditionFactory = function(expected) {
                    return function(item) {
                        return item.moduleId === expected;
                    };
                };
                modules.forEach((function(module) {
                    var condition = conditionFactory(module.id);
                    _this._bindingDictionary.removeByCondition(condition);
                }));
            }, Container.prototype.bind = function(serviceIdentifier) {
                var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient, binding = new binding_1.Binding(serviceIdentifier, scope);
                return this._bindingDictionary.add(serviceIdentifier, binding), new binding_to_syntax_1.BindingToSyntax(binding);
            }, Container.prototype.rebind = function(serviceIdentifier) {
                return this.unbind(serviceIdentifier), this.bind(serviceIdentifier);
            }, Container.prototype.unbind = function(serviceIdentifier) {
                try {
                    this._bindingDictionary.remove(serviceIdentifier);
                } catch (e) {
                    throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
                }
            }, Container.prototype.unbindAll = function() {
                this._bindingDictionary = new lookup_1.Lookup;
            }, Container.prototype.isBound = function(serviceIdentifier) {
                var bound = this._bindingDictionary.hasKey(serviceIdentifier);
                return !bound && this.parent && (bound = this.parent.isBound(serviceIdentifier)), 
                bound;
            }, Container.prototype.isBoundNamed = function(serviceIdentifier, named) {
                return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
            }, Container.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
                var bound = !1;
                if (this._bindingDictionary.hasKey(serviceIdentifier)) {
                    var bindings = this._bindingDictionary.get(serviceIdentifier), request_1 = planner_1.createMockRequest(this, serviceIdentifier, key, value);
                    bound = bindings.some((function(b) {
                        return b.constraint(request_1);
                    }));
                }
                return !bound && this.parent && (bound = this.parent.isBoundTagged(serviceIdentifier, key, value)), 
                bound;
            }, Container.prototype.snapshot = function() {
                this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
            }, Container.prototype.restore = function() {
                var snapshot = this._snapshots.pop();
                if (void 0 === snapshot) throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
                this._bindingDictionary = snapshot.bindings, this._middleware = snapshot.middleware;
            }, Container.prototype.createChild = function(containerOptions) {
                var child = new Container(containerOptions || this.options);
                return child.parent = this, child;
            }, Container.prototype.applyMiddleware = function() {
                for (var middlewares = [], _i = 0; _i < arguments.length; _i++) middlewares[_i] = arguments[_i];
                var initial = this._middleware ? this._middleware : this._planAndResolve();
                this._middleware = middlewares.reduce((function(prev, curr) {
                    return curr(prev);
                }), initial);
            }, Container.prototype.applyCustomMetadataReader = function(metadataReader) {
                this._metadataReader = metadataReader;
            }, Container.prototype.get = function(serviceIdentifier) {
                return this._get(!1, !1, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
            }, Container.prototype.getTagged = function(serviceIdentifier, key, value) {
                return this._get(!1, !1, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
            }, Container.prototype.getNamed = function(serviceIdentifier, named) {
                return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
            }, Container.prototype.getAll = function(serviceIdentifier) {
                return this._get(!0, !0, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
            }, Container.prototype.getAllTagged = function(serviceIdentifier, key, value) {
                return this._get(!1, !0, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
            }, Container.prototype.getAllNamed = function(serviceIdentifier, named) {
                return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
            }, Container.prototype.resolve = function(constructorFunction) {
                var tempContainer = this.createChild();
                return tempContainer.bind(constructorFunction).toSelf(), tempContainer.get(constructorFunction);
            }, Container.prototype._getContainerModuleHelpersFactory = function() {
                var _this = this, setModuleId = function(bindingToSyntax, moduleId) {
                    bindingToSyntax._binding.moduleId = moduleId;
                }, getRebindFunction = function(moduleId) {
                    return function(serviceIdentifier) {
                        var bindingToSyntax = _this.rebind.bind(_this)(serviceIdentifier);
                        return setModuleId(bindingToSyntax, moduleId), bindingToSyntax;
                    };
                };
                return function(mId) {
                    return {
                        bindFunction: (moduleId = mId, function(serviceIdentifier) {
                            var bindingToSyntax = _this.bind.bind(_this)(serviceIdentifier);
                            return setModuleId(bindingToSyntax, moduleId), bindingToSyntax;
                        }),
                        isboundFunction: function(serviceIdentifier) {
                            return _this.isBound.bind(_this)(serviceIdentifier);
                        },
                        rebindFunction: getRebindFunction(mId),
                        unbindFunction: function(serviceIdentifier) {
                            _this.unbind.bind(_this)(serviceIdentifier);
                        }
                    };
                    var moduleId;
                };
            }, Container.prototype._get = function(avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
                var result = null, defaultArgs = {
                    avoidConstraints: avoidConstraints,
                    contextInterceptor: function(context) {
                        return context;
                    },
                    isMultiInject: isMultiInject,
                    key: key,
                    serviceIdentifier: serviceIdentifier,
                    targetType: targetType,
                    value: value
                };
                if (this._middleware) {
                    if (null == (result = this._middleware(defaultArgs))) throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
                } else result = this._planAndResolve()(defaultArgs);
                return result;
            }, Container.prototype._planAndResolve = function() {
                var _this = this;
                return function(args) {
                    var context = planner_1.plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
                    return context = args.contextInterceptor(context), resolver_1.resolve(context);
                };
            }, Container;
        }();
        exports.Container = Container;
    },
    46: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var literal_types_1 = __webpack_require__(7), id_1 = __webpack_require__(9), Binding = function() {
            function Binding(serviceIdentifier, scope) {
                this.id = id_1.id(), this.activated = !1, this.serviceIdentifier = serviceIdentifier, 
                this.scope = scope, this.type = literal_types_1.BindingTypeEnum.Invalid, this.constraint = function(request) {
                    return !0;
                }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, 
                this.onActivation = null, this.dynamicValue = null;
            }
            return Binding.prototype.clone = function() {
                var clone = new Binding(this.serviceIdentifier, this.scope);
                return clone.activated = !1, clone.implementationType = this.implementationType, 
                clone.dynamicValue = this.dynamicValue, clone.scope = this.scope, clone.type = this.type, 
                clone.factory = this.factory, clone.provider = this.provider, clone.constraint = this.constraint, 
                clone.onActivation = this.onActivation, clone.cache = this.cache, clone;
            }, Binding;
        }();
        exports.Binding = Binding;
    },
    47: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_count_1 = __webpack_require__(48), ERROR_MSGS = __webpack_require__(3), literal_types_1 = __webpack_require__(7), METADATA_KEY = __webpack_require__(2), exceptions_1 = __webpack_require__(24), serialization_1 = __webpack_require__(11), context_1 = __webpack_require__(49), metadata_1 = __webpack_require__(5), plan_1 = __webpack_require__(50), reflection_utils_1 = __webpack_require__(51), request_1 = __webpack_require__(53), target_1 = __webpack_require__(26);
        function getBindingDictionary(cntnr) {
            return cntnr._bindingDictionary;
        }
        function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
            var bindings = getBindings(context.container, target.serviceIdentifier), activeBindings = [];
            return bindings.length === binding_count_1.BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && "function" == typeof target.serviceIdentifier && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata && (context.container.bind(target.serviceIdentifier).toSelf(), 
            bindings = getBindings(context.container, target.serviceIdentifier)), activeBindings = avoidConstraints ? bindings : bindings.filter((function(binding) {
                var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
                return binding.constraint(request);
            })), function(serviceIdentifier, bindings, target, container) {
                switch (bindings.length) {
                  case binding_count_1.BindingCount.NoBindingsAvailable:
                    if (target.isOptional()) return bindings;
                    var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier), msg = ERROR_MSGS.NOT_REGISTERED;
                    throw msg += serialization_1.listMetadataForTarget(serviceIdentifierString, target), 
                    msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings), 
                    new Error(msg);

                  case binding_count_1.BindingCount.OnlyOneBindingAvailable:
                    if (!target.isArray()) return bindings;

                  case binding_count_1.BindingCount.MultipleBindingsAvailable:
                  default:
                    if (target.isArray()) return bindings;
                    serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier), 
                    msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                    throw msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings), 
                    new Error(msg);
                }
            }(target.serviceIdentifier, activeBindings, target, context.container), activeBindings;
        }
        function getBindings(container, serviceIdentifier) {
            var bindings = [], bindingDictionary = getBindingDictionary(container);
            return bindingDictionary.hasKey(serviceIdentifier) ? bindings = bindingDictionary.get(serviceIdentifier) : null !== container.parent && (bindings = getBindings(container.parent, serviceIdentifier)), 
            bindings;
        }
        exports.getBindingDictionary = getBindingDictionary, exports.plan = function(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
            void 0 === avoidConstraints && (avoidConstraints = !1);
            var context = new context_1.Context(container), target = function(isMultiInject, targetType, serviceIdentifier, name, key, value) {
                var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG, injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier), target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
                if (void 0 !== key) {
                    var tagMetadata = new metadata_1.Metadata(key, value);
                    target.metadata.push(tagMetadata);
                }
                return target;
            }(isMultiInject, targetType, serviceIdentifier, "", key, value);
            try {
                return function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
                    var activeBindings, childRequest;
                    if (null === parentRequest) {
                        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target), 
                        childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
                        var thePlan = new plan_1.Plan(context, childRequest);
                        context.addPlan(thePlan);
                    } else activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target), 
                    childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
                    activeBindings.forEach((function(binding) {
                        var subChildRequest = null;
                        if (target.isArray()) subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target); else {
                            if (binding.cache) return;
                            subChildRequest = childRequest;
                        }
                        if (binding.type === literal_types_1.BindingTypeEnum.Instance && null !== binding.implementationType) {
                            var dependencies = reflection_utils_1.getDependencies(metadataReader, binding.implementationType);
                            if (!context.container.options.skipBaseClassChecks) {
                                var baseClassDependencyCount = reflection_utils_1.getBaseClassDependencyCount(metadataReader, binding.implementationType);
                                if (dependencies.length < baseClassDependencyCount) {
                                    var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH(reflection_utils_1.getFunctionName(binding.implementationType));
                                    throw new Error(error);
                                }
                            }
                            dependencies.forEach((function(dependency) {
                                _createSubRequests(metadataReader, !1, dependency.serviceIdentifier, context, subChildRequest, dependency);
                            }));
                        }
                    }));
                }(metadataReader, avoidConstraints, serviceIdentifier, context, null, target), context;
            } catch (error) {
                throw exceptions_1.isStackOverflowExeption(error) && context.plan && serialization_1.circularDependencyToException(context.plan.rootRequest), 
                error;
            }
        }, exports.createMockRequest = function(container, serviceIdentifier, key, value) {
            var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value)), context = new context_1.Context(container);
            return new request_1.Request(serviceIdentifier, context, null, [], target);
        };
    },
    48: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.BindingCount = {
            MultipleBindingsAvailable: 2,
            NoBindingsAvailable: 0,
            OnlyOneBindingAvailable: 1
        };
    },
    49: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var id_1 = __webpack_require__(9), Context = function() {
            function Context(container) {
                this.id = id_1.id(), this.container = container;
            }
            return Context.prototype.addPlan = function(plan) {
                this.plan = plan;
            }, Context.prototype.setCurrentRequest = function(currentRequest) {
                this.currentRequest = currentRequest;
            }, Context;
        }();
        exports.Context = Context;
    },
    5: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), Metadata = function() {
            function Metadata(key, value) {
                this.key = key, this.value = value;
            }
            return Metadata.prototype.toString = function() {
                return this.key === METADATA_KEY.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
            }, Metadata;
        }();
        exports.Metadata = Metadata;
    },
    50: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Plan = function(parentContext, rootRequest) {
            this.parentContext = parentContext, this.rootRequest = rootRequest;
        };
        exports.Plan = Plan;
    },
    51: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var inject_1 = __webpack_require__(25), ERROR_MSGS = __webpack_require__(3), literal_types_1 = __webpack_require__(7), METADATA_KEY = __webpack_require__(2), serialization_1 = __webpack_require__(11);
        exports.getFunctionName = serialization_1.getFunctionName;
        var target_1 = __webpack_require__(26);
        function getTargets(metadataReader, constructorName, func, isBaseClass) {
            var metadata = metadataReader.getConstructorMetadata(func), serviceIdentifiers = metadata.compilerGeneratedMetadata;
            if (void 0 === serviceIdentifiers) {
                var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
                throw new Error(msg);
            }
            var constructorArgsMetadata = metadata.userGeneratedMetadata, keys = Object.keys(constructorArgsMetadata), constructorTargets = function(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
                for (var targets = [], i = 0; i < iterations; i++) {
                    var target = getConstructorArgsAsTarget(i, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
                    null !== target && targets.push(target);
                }
                return targets;
            }(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, 0 === func.length && keys.length > 0 ? keys.length : func.length), propertyTargets = function getClassPropsAsTargets(metadataReader, constructorFunc) {
                for (var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc), targets = [], keys = Object.keys(classPropsMetadata), _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i], targetMetadata = classPropsMetadata[key], metadata = formatTargetMetadata(classPropsMetadata[key]), targetName = metadata.targetName || key, serviceIdentifier = metadata.inject || metadata.multiInject, target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIdentifier);
                    target.metadata = targetMetadata, targets.push(target);
                }
                var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
                if (baseConstructor !== Object) {
                    var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
                    targets = targets.concat(baseTargets);
                }
                return targets;
            }(metadataReader, func);
            return constructorTargets.concat(propertyTargets);
        }
        function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
            var targetMetadata = constructorArgsMetadata[index.toString()] || [], metadata = formatTargetMetadata(targetMetadata), isManaged = !0 !== metadata.unmanaged, serviceIdentifier = serviceIdentifiers[index], injectIdentifier = metadata.inject || metadata.multiInject;
            if ((serviceIdentifier = injectIdentifier || serviceIdentifier) instanceof inject_1.LazyServiceIdentifer && (serviceIdentifier = serviceIdentifier.unwrap()), 
            isManaged) {
                if (!isBaseClass && (serviceIdentifier === Object || serviceIdentifier === Function || void 0 === serviceIdentifier)) {
                    var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
                    throw new Error(msg);
                }
                var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
                return target.metadata = targetMetadata, target;
            }
            return null;
        }
        function formatTargetMetadata(targetMetadata) {
            var targetMetadataMap = {};
            return targetMetadata.forEach((function(m) {
                targetMetadataMap[m.key.toString()] = m.value;
            })), {
                inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
                multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
                targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
                unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
            };
        }
        exports.getDependencies = function(metadataReader, func) {
            return getTargets(metadataReader, serialization_1.getFunctionName(func), func, !1);
        }, exports.getBaseClassDependencyCount = function getBaseClassDependencyCount(metadataReader, func) {
            var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
            if (baseConstructor !== Object) {
                var targets = getTargets(metadataReader, serialization_1.getFunctionName(baseConstructor), baseConstructor, !0), metadata = targets.map((function(t) {
                    return t.metadata.filter((function(m) {
                        return m.key === METADATA_KEY.UNMANAGED_TAG;
                    }));
                })), unmanagedCount = [].concat.apply([], metadata).length, dependencyCount = targets.length - unmanagedCount;
                return dependencyCount > 0 ? dependencyCount : getBaseClassDependencyCount(metadataReader, baseConstructor);
            }
            return 0;
        };
    },
    52: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var QueryableString = function() {
            function QueryableString(str) {
                this.str = str;
            }
            return QueryableString.prototype.startsWith = function(searchString) {
                return 0 === this.str.indexOf(searchString);
            }, QueryableString.prototype.endsWith = function(searchString) {
                var reverseString, reverseSearchString = searchString.split("").reverse().join("");
                return reverseString = this.str.split("").reverse().join(""), this.startsWith.call({
                    str: reverseString
                }, reverseSearchString);
            }, QueryableString.prototype.contains = function(searchString) {
                return -1 !== this.str.indexOf(searchString);
            }, QueryableString.prototype.equals = function(compareString) {
                return this.str === compareString;
            }, QueryableString.prototype.value = function() {
                return this.str;
            }, QueryableString;
        }();
        exports.QueryableString = QueryableString;
    },
    53: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var id_1 = __webpack_require__(9), Request = function() {
            function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
                this.id = id_1.id(), this.serviceIdentifier = serviceIdentifier, this.parentContext = parentContext, 
                this.parentRequest = parentRequest, this.target = target, this.childRequests = [], 
                this.bindings = Array.isArray(bindings) ? bindings : [ bindings ], this.requestScope = null === parentRequest ? new Map : null;
            }
            return Request.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
                var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
                return this.childRequests.push(child), child;
            }, Request;
        }();
        exports.Request = Request;
    },
    54: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3), literal_types_1 = __webpack_require__(7), exceptions_1 = __webpack_require__(24), serialization_1 = __webpack_require__(11), instantiation_1 = __webpack_require__(55), invokeFactory = function(factoryType, serviceIdentifier, fn) {
            try {
                return fn();
            } catch (error) {
                throw exceptions_1.isStackOverflowExeption(error) ? new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryType, serviceIdentifier.toString())) : error;
            }
        }, _resolveRequest = function(requestScope) {
            return function(request) {
                request.parentContext.setCurrentRequest(request);
                var bindings = request.bindings, childRequests = request.childRequests, targetIsAnArray = request.target && request.target.isArray(), targetParentIsNotAnArray = !(request.parentRequest && request.parentRequest.target && request.target && request.parentRequest.target.matchesArray(request.target.serviceIdentifier));
                if (targetIsAnArray && targetParentIsNotAnArray) return childRequests.map((function(childRequest) {
                    return _resolveRequest(requestScope)(childRequest);
                }));
                var result = null;
                if (!request.target.isOptional() || 0 !== bindings.length) {
                    var binding_1 = bindings[0], isSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Singleton, isRequestSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Request;
                    if (isSingleton && binding_1.activated) return binding_1.cache;
                    if (isRequestSingleton && null !== requestScope && requestScope.has(binding_1.id)) return requestScope.get(binding_1.id);
                    if (binding_1.type === literal_types_1.BindingTypeEnum.ConstantValue) result = binding_1.cache; else if (binding_1.type === literal_types_1.BindingTypeEnum.Function) result = binding_1.cache; else if (binding_1.type === literal_types_1.BindingTypeEnum.Constructor) result = binding_1.implementationType; else if (binding_1.type === literal_types_1.BindingTypeEnum.DynamicValue && null !== binding_1.dynamicValue) result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, (function() {
                        return binding_1.dynamicValue(request.parentContext);
                    })); else if (binding_1.type === literal_types_1.BindingTypeEnum.Factory && null !== binding_1.factory) result = invokeFactory("toFactory", binding_1.serviceIdentifier, (function() {
                        return binding_1.factory(request.parentContext);
                    })); else if (binding_1.type === literal_types_1.BindingTypeEnum.Provider && null !== binding_1.provider) result = invokeFactory("toProvider", binding_1.serviceIdentifier, (function() {
                        return binding_1.provider(request.parentContext);
                    })); else {
                        if (binding_1.type !== literal_types_1.BindingTypeEnum.Instance || null === binding_1.implementationType) {
                            var serviceIdentifier = serialization_1.getServiceIdentifierAsString(request.serviceIdentifier);
                            throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifier);
                        }
                        result = instantiation_1.resolveInstance(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
                    }
                    return "function" == typeof binding_1.onActivation && (result = binding_1.onActivation(request.parentContext, result)), 
                    isSingleton && (binding_1.cache = result, binding_1.activated = !0), isRequestSingleton && null !== requestScope && !requestScope.has(binding_1.id) && requestScope.set(binding_1.id, result), 
                    result;
                }
            };
        };
        exports.resolve = function(context) {
            return _resolveRequest(context.plan.rootRequest.requestScope)(context.plan.rootRequest);
        };
    },
    55: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var error_msgs_1 = __webpack_require__(3), literal_types_1 = __webpack_require__(7), METADATA_KEY = __webpack_require__(2);
        exports.resolveInstance = function(constr, childRequests, resolveRequest) {
            var Func, injections, result = null;
            if (childRequests.length > 0) {
                var constructorInjections = childRequests.filter((function(childRequest) {
                    return null !== childRequest.target && childRequest.target.type === literal_types_1.TargetTypeEnum.ConstructorArgument;
                })).map(resolveRequest);
                injections = constructorInjections, result = function(instance, childRequests, resolveRequest) {
                    var propertyInjectionsRequests = childRequests.filter((function(childRequest) {
                        return null !== childRequest.target && childRequest.target.type === literal_types_1.TargetTypeEnum.ClassProperty;
                    })), propertyInjections = propertyInjectionsRequests.map(resolveRequest);
                    return propertyInjectionsRequests.forEach((function(r, index) {
                        var propertyName;
                        propertyName = r.target.name.value();
                        var injection = propertyInjections[index];
                        instance[propertyName] = injection;
                    })), instance;
                }(result = new ((Func = constr).bind.apply(Func, [ void 0 ].concat(injections))), childRequests, resolveRequest);
            } else result = new constr;
            return function(constr, result) {
                if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
                    var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
                    try {
                        result[data.value]();
                    } catch (e) {
                        throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
                    }
                }
            }(constr, result), result;
        };
    },
    56: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3), literal_types_1 = __webpack_require__(7), binding_in_when_on_syntax_1 = __webpack_require__(57), binding_when_on_syntax_1 = __webpack_require__(27), BindingToSyntax = function() {
            function BindingToSyntax(binding) {
                this._binding = binding;
            }
            return BindingToSyntax.prototype.to = function(constructor) {
                return this._binding.type = literal_types_1.BindingTypeEnum.Instance, this._binding.implementationType = constructor, 
                new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toSelf = function() {
                if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
                var self = this._binding.serviceIdentifier;
                return this.to(self);
            }, BindingToSyntax.prototype.toConstantValue = function(value) {
                return this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue, this._binding.cache = value, 
                this._binding.dynamicValue = null, this._binding.implementationType = null, new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toDynamicValue = function(func) {
                return this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue, this._binding.cache = null, 
                this._binding.dynamicValue = func, this._binding.implementationType = null, new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toConstructor = function(constructor) {
                return this._binding.type = literal_types_1.BindingTypeEnum.Constructor, this._binding.implementationType = constructor, 
                new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toFactory = function(factory) {
                return this._binding.type = literal_types_1.BindingTypeEnum.Factory, this._binding.factory = factory, 
                new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toFunction = function(func) {
                if ("function" != typeof func) throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
                var bindingWhenOnSyntax = this.toConstantValue(func);
                return this._binding.type = literal_types_1.BindingTypeEnum.Function, bindingWhenOnSyntax;
            }, BindingToSyntax.prototype.toAutoFactory = function(serviceIdentifier) {
                return this._binding.type = literal_types_1.BindingTypeEnum.Factory, this._binding.factory = function(context) {
                    return function() {
                        return context.container.get(serviceIdentifier);
                    };
                }, new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toProvider = function(provider) {
                return this._binding.type = literal_types_1.BindingTypeEnum.Provider, this._binding.provider = provider, 
                new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingToSyntax.prototype.toService = function(service) {
                this.toDynamicValue((function(context) {
                    return context.container.get(service);
                }));
            }, BindingToSyntax;
        }();
        exports.BindingToSyntax = BindingToSyntax;
    },
    57: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var binding_in_syntax_1 = __webpack_require__(58), binding_on_syntax_1 = __webpack_require__(18), binding_when_syntax_1 = __webpack_require__(19), BindingInWhenOnSyntax = function() {
            function BindingInWhenOnSyntax(binding) {
                this._binding = binding, this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding), 
                this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding), 
                this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
            }
            return BindingInWhenOnSyntax.prototype.inRequestScope = function() {
                return this._bindingInSyntax.inRequestScope();
            }, BindingInWhenOnSyntax.prototype.inSingletonScope = function() {
                return this._bindingInSyntax.inSingletonScope();
            }, BindingInWhenOnSyntax.prototype.inTransientScope = function() {
                return this._bindingInSyntax.inTransientScope();
            }, BindingInWhenOnSyntax.prototype.when = function(constraint) {
                return this._bindingWhenSyntax.when(constraint);
            }, BindingInWhenOnSyntax.prototype.whenTargetNamed = function(name) {
                return this._bindingWhenSyntax.whenTargetNamed(name);
            }, BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault();
            }, BindingInWhenOnSyntax.prototype.whenTargetTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenTargetTagged(tag, value);
            }, BindingInWhenOnSyntax.prototype.whenInjectedInto = function(parent) {
                return this._bindingWhenSyntax.whenInjectedInto(parent);
            }, BindingInWhenOnSyntax.prototype.whenParentNamed = function(name) {
                return this._bindingWhenSyntax.whenParentNamed(name);
            }, BindingInWhenOnSyntax.prototype.whenParentTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenParentTagged(tag, value);
            }, BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function(ancestor) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
            }, BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function(ancestor) {
                return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
            }, BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function(name) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
            }, BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
            }, BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function(name) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(name);
            }, BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function(tag, value) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
            }, BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function(constraint) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
            }, BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function(constraint) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
            }, BindingInWhenOnSyntax.prototype.onActivation = function(handler) {
                return this._bindingOnSyntax.onActivation(handler);
            }, BindingInWhenOnSyntax;
        }();
        exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;
    },
    58: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var literal_types_1 = __webpack_require__(7), binding_when_on_syntax_1 = __webpack_require__(27), BindingInSyntax = function() {
            function BindingInSyntax(binding) {
                this._binding = binding;
            }
            return BindingInSyntax.prototype.inRequestScope = function() {
                return this._binding.scope = literal_types_1.BindingScopeEnum.Request, new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingInSyntax.prototype.inSingletonScope = function() {
                return this._binding.scope = literal_types_1.BindingScopeEnum.Singleton, new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingInSyntax.prototype.inTransientScope = function() {
                return this._binding.scope = literal_types_1.BindingScopeEnum.Transient, new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
            }, BindingInSyntax;
        }();
        exports.BindingInSyntax = BindingInSyntax;
    },
    59: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ContainerSnapshot = function() {
            function ContainerSnapshot() {}
            return ContainerSnapshot.of = function(bindings, middleware) {
                var snapshot = new ContainerSnapshot;
                return snapshot.bindings = bindings, snapshot.middleware = middleware, snapshot;
            }, ContainerSnapshot;
        }();
        exports.ContainerSnapshot = ContainerSnapshot;
    },
    60: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3), Lookup = function() {
            function Lookup() {
                this._map = new Map;
            }
            return Lookup.prototype.getMap = function() {
                return this._map;
            }, Lookup.prototype.add = function(serviceIdentifier, value) {
                if (null == serviceIdentifier) throw new Error(ERROR_MSGS.NULL_ARGUMENT);
                if (null == value) throw new Error(ERROR_MSGS.NULL_ARGUMENT);
                var entry = this._map.get(serviceIdentifier);
                void 0 !== entry ? (entry.push(value), this._map.set(serviceIdentifier, entry)) : this._map.set(serviceIdentifier, [ value ]);
            }, Lookup.prototype.get = function(serviceIdentifier) {
                if (null == serviceIdentifier) throw new Error(ERROR_MSGS.NULL_ARGUMENT);
                var entry = this._map.get(serviceIdentifier);
                if (void 0 !== entry) return entry;
                throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
            }, Lookup.prototype.remove = function(serviceIdentifier) {
                if (null == serviceIdentifier) throw new Error(ERROR_MSGS.NULL_ARGUMENT);
                if (!this._map.delete(serviceIdentifier)) throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
            }, Lookup.prototype.removeByCondition = function(condition) {
                var _this = this;
                this._map.forEach((function(entries, key) {
                    var updatedEntries = entries.filter((function(entry) {
                        return !condition(entry);
                    }));
                    updatedEntries.length > 0 ? _this._map.set(key, updatedEntries) : _this._map.delete(key);
                }));
            }, Lookup.prototype.hasKey = function(serviceIdentifier) {
                if (null == serviceIdentifier) throw new Error(ERROR_MSGS.NULL_ARGUMENT);
                return this._map.has(serviceIdentifier);
            }, Lookup.prototype.clone = function() {
                var copy = new Lookup;
                return this._map.forEach((function(value, key) {
                    value.forEach((function(b) {
                        return copy.add(key, b.clone());
                    }));
                })), copy;
            }, Lookup.prototype.traverse = function(func) {
                this._map.forEach((function(value, key) {
                    func(key, value);
                }));
            }, Lookup;
        }();
        exports.Lookup = Lookup;
    },
    61: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var id_1 = __webpack_require__(9), ContainerModule = function(registry) {
            this.id = id_1.id(), this.registry = registry;
        };
        exports.ContainerModule = ContainerModule;
        var AsyncContainerModule = function(registry) {
            this.id = id_1.id(), this.registry = registry;
        };
        exports.AsyncContainerModule = AsyncContainerModule;
    },
    62: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERRORS_MSGS = __webpack_require__(3), METADATA_KEY = __webpack_require__(2);
        exports.injectable = function() {
            return function(target) {
                if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
                var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
                return Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target), target;
            };
        };
    },
    63: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.tagged = function(metadataKey, metadataValue) {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
                "number" == typeof index ? decorator_utils_1.tagParameter(target, targetKey, index, metadata) : decorator_utils_1.tagProperty(target, targetKey, metadata);
            };
        };
    },
    64: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.named = function(name) {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
                "number" == typeof index ? decorator_utils_1.tagParameter(target, targetKey, index, metadata) : decorator_utils_1.tagProperty(target, targetKey, metadata);
            };
        };
    },
    65: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.optional = function() {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, !0);
                "number" == typeof index ? decorator_utils_1.tagParameter(target, targetKey, index, metadata) : decorator_utils_1.tagProperty(target, targetKey, metadata);
            };
        };
    },
    66: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.unmanaged = function() {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, !0);
                decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            };
        };
    },
    67: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.multiInject = function(serviceIdentifier) {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
                "number" == typeof index ? decorator_utils_1.tagParameter(target, targetKey, index, metadata) : decorator_utils_1.tagProperty(target, targetKey, metadata);
            };
        };
    },
    68: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5), decorator_utils_1 = __webpack_require__(8);
        exports.targetName = function(name) {
            return function(target, targetKey, index) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
                decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            };
        };
    },
    69: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERRORS_MSGS = __webpack_require__(3), METADATA_KEY = __webpack_require__(2), metadata_1 = __webpack_require__(5);
        exports.postConstruct = function() {
            return function(target, propertyKey, descriptor) {
                var metadata = new metadata_1.Metadata(METADATA_KEY.POST_CONSTRUCT, propertyKey);
                if (Reflect.hasOwnMetadata(METADATA_KEY.POST_CONSTRUCT, target.constructor)) throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
                Reflect.defineMetadata(METADATA_KEY.POST_CONSTRUCT, metadata, target.constructor);
            };
        };
    },
    7: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.BindingScopeEnum = {
            Request: "Request",
            Singleton: "Singleton",
            Transient: "Transient"
        };
        exports.BindingTypeEnum = {
            ConstantValue: "ConstantValue",
            Constructor: "Constructor",
            DynamicValue: "DynamicValue",
            Factory: "Factory",
            Function: "Function",
            Instance: "Instance",
            Invalid: "Invalid",
            Provider: "Provider"
        };
        exports.TargetTypeEnum = {
            ClassProperty: "ClassProperty",
            ConstructorArgument: "ConstructorArgument",
            Variable: "Variable"
        };
    },
    70: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.multiBindToService = function(container) {
            return function(service) {
                return function() {
                    for (var types = [], _i = 0; _i < arguments.length; _i++) types[_i] = arguments[_i];
                    return types.forEach((function(t) {
                        return container.bind(t).toService(service);
                    }));
                };
            };
        };
    },
    71: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const InternalDispatcherException_1 = __webpack_require__(72);
        class InternalDispatcherListenerIsNotRegisteredException extends InternalDispatcherException_1.InternalDispatcherException {}
        exports.InternalDispatcherListenerIsNotRegisteredException = InternalDispatcherListenerIsNotRegisteredException;
    },
    72: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        class InternalDispatcherException extends Error {}
        exports.InternalDispatcherException = InternalDispatcherException;
    },
    73: function(module, exports) {
        function serializer(replacer, cycleReplacer) {
            var stack = [], keys = [];
            return null == cycleReplacer && (cycleReplacer = function(key, value) {
                return stack[0] === value ? "[Circular ~]" : "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            }), function(key, value) {
                if (stack.length > 0) {
                    var thisPos = stack.indexOf(this);
                    ~thisPos ? stack.splice(thisPos + 1) : stack.push(this), ~thisPos ? keys.splice(thisPos, 1 / 0, key) : keys.push(key), 
                    ~stack.indexOf(value) && (value = cycleReplacer.call(this, key, value));
                } else stack.push(value);
                return null == replacer ? value : replacer.call(this, key, value);
            };
        }
        (module.exports = function(obj, replacer, spaces, cycleReplacer) {
            return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
        }).getSerialize = serializer;
    },
    74: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const CoreException_1 = __webpack_require__(75);
        class CoreServiceIsNotRegisteredException extends CoreException_1.CoreException {}
        exports.CoreServiceIsNotRegisteredException = CoreServiceIsNotRegisteredException;
    },
    75: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        class CoreException extends Error {}
        exports.CoreException = CoreException;
    },
    76: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = (__webpack_require__(22), 
        __webpack_require__(4));
        let Extension = class Extension {
            constructor(browserEnum) {
                this.browserEnum = browserEnum, this.isOnInstalledFired = !1, this.listeners = [], 
                chrome.runtime.onInstalled.addListener(details => {
                    this.isOnInstalledFired = !0, this.installedDetails = details, this.handleOnInstall();
                });
            }
            onInstall(callback) {
                this.listeners.push({
                    callback: callback
                }), this.isOnInstalledFired && this.handleOnInstall();
            }
            setUninstallURL(url, callback) {
                chrome.runtime.setUninstallURL(url, callback);
            }
            manifest() {
                return chrome.runtime.getManifest();
            }
            browser() {
                return this.browserEnum;
            }
            handleOnInstall() {
                for (const listener of this.listeners) listener.callback(this.installedDetails);
                this.listeners = [];
            }
        };
        Extension = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.BROWSER)), __metadata("design:paramtypes", [ String ]) ], Extension), 
        exports.Extension = Extension;
    },
    77: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const ExternalDispatcherException_1 = __webpack_require__(78);
        class ExternalDispatcherListenerIsNotFoundException extends ExternalDispatcherException_1.ExternalDispatcherException {}
        exports.ExternalDispatcherListenerIsNotFoundException = ExternalDispatcherListenerIsNotFoundException;
    },
    78: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        class ExternalDispatcherException extends Error {}
        exports.ExternalDispatcherException = ExternalDispatcherException;
    },
    79: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.MarioModule = class MarioModule {
            constructor(_core) {
                this._core = _core;
            }
            mario() {
                return this._core;
            }
        };
    },
    8: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ERROR_MSGS = __webpack_require__(3), METADATA_KEY = __webpack_require__(2);
        function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
            var paramsOrPropertiesMetadata = {}, isParameterDecorator = "number" == typeof parameterIndex, key = void 0 !== parameterIndex && isParameterDecorator ? parameterIndex.toString() : propertyName;
            if (isParameterDecorator && void 0 !== propertyName) throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
            Reflect.hasOwnMetadata(metadataKey, annotationTarget) && (paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget));
            var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
            if (Array.isArray(paramOrPropertyMetadata)) for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
                var m = paramOrPropertyMetadata_1[_i];
                if (m.key === metadata.key) throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key.toString());
            } else paramOrPropertyMetadata = [];
            paramOrPropertyMetadata.push(metadata), paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata, 
            Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
        }
        function _decorate(decorators, target) {
            Reflect.decorate(decorators, target);
        }
        function _param(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }
        exports.tagParameter = function(annotationTarget, propertyName, parameterIndex, metadata) {
            _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, propertyName, metadata, parameterIndex);
        }, exports.tagProperty = function(annotationTarget, propertyName, metadata) {
            _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
        }, exports.decorate = function(decorator, target, parameterIndex) {
            "number" == typeof parameterIndex ? _decorate([ _param(parameterIndex, decorator) ], target) : "string" == typeof parameterIndex ? Reflect.decorate([ decorator ], target, parameterIndex) : _decorate([ decorator ], target);
        };
    },
    80: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), MarioEvent_1 = __webpack_require__(17), MARIO_TYPES_1 = __webpack_require__(4), CacheEvents_1 = __webpack_require__(81);
        let CacheService = class CacheService {
            constructor(logger, dispatcher) {
                this.logger = logger, this.dispatcher = dispatcher;
            }
            clear() {
                return __awaiter(this, void 0, void 0, (function*() {
                    yield this.dispatcher.emit(new MarioEvent_1.MarioEvent(CacheEvents_1.CacheEvents.BEFORE_CLEAR_CACHE)), 
                    yield this.cacheRemoveAll(), yield this.dispatcher.emit(new MarioEvent_1.MarioEvent(CacheEvents_1.CacheEvents.AFTER_CLEAR_CACHE));
                }));
            }
            cacheRemoveAll() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.browsingData.removeCache({}, () => {
                                resolve();
                            });
                        } catch (e) {
                            this.logger.error(e), reject();
                        }
                    });
                }));
            }
        };
        CacheService.EVENT_BEFORE_CLEAR_CACHE = "beforeClearCache", CacheService.EVENT_AFTER_CLEAR_CACHE = "afterClearCache", 
        CacheService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object, Object ]) ], CacheService), 
        exports.CacheService = CacheService;
    },
    81: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(CacheEvents) {
            CacheEvents.BEFORE_CLEAR_CACHE = "BEFORE_CLEAR_CACHE", CacheEvents.AFTER_CLEAR_CACHE = "AFTER_CLEAR_CACHE";
        }(exports.CacheEvents || (exports.CacheEvents = {}));
    },
    82: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(NavigationServiceEvents) {
            NavigationServiceEvents.NAVIGATION_ON_BEFORE_NAVIGATE = "NAVIGATION_ON_BEFORE_NAVIGATE", 
            NavigationServiceEvents.NAVIGATION_ON_COMMITTED = "NAVIGATION_ON_COMMITTED", NavigationServiceEvents.NAVIGATION_ON_DOM_CONTENT_LOADED = "NAVIGATION_ON_DOM_CONTENT_LOADED", 
            NavigationServiceEvents.NAVIGATION_ON_COMPLETED = "NAVIGATION_ON_COMPLETED", NavigationServiceEvents.NAVIGATION_ON_ERROR_OCCURRED = "NAVIGATION_ON_ERROR_OCCURRED", 
            NavigationServiceEvents.NAVIGATION_ON_CREATED_NAVIGATION_TARGET = "NAVIGATION_ON_CREATED_NAVIGATION_TARGET", 
            NavigationServiceEvents.NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED = "NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED", 
            NavigationServiceEvents.NAVIGATION_ON_TAB_REPLACED = "NAVIGATION_ON_TAB_REMOVED", 
            NavigationServiceEvents.NAVIGATION_ON_HISTORY_STATE_UPDATED = "NAVIGATION_ON_HISTORY_STATE_UPDATED";
        }(exports.NavigationServiceEvents || (exports.NavigationServiceEvents = {}));
    },
    83: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __metadata = this && this.__metadata || function(k, v) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
        }, __param = this && this.__param || function(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0), index_1 = __webpack_require__(1), MARIO_TYPES_1 = __webpack_require__(4), WebRequestServiceEvents_1 = __webpack_require__(84);
        let WebRequestService = class WebRequestService {
            constructor(dispatcherService) {
                this.dispatcherService = dispatcherService, this.isListenOnBeforeRequest = !1, this.isListenOnBeforeSendHeaders = !1, 
                this.isListenOnSendHeaders = !1, this.isListenOnHeadersReceived = !1, this.isListenOnAuthRequired = !1, 
                this.isListenOnResponseStarted = !1, this.isListenOnBeforeRedirect = !1, this.isListenOnCompleted = !1, 
                this.isListenOnErrorOccurred = !1, this.isListenOnActionIgnored = !1;
            }
            listenOnBeforeRequest(filter, opt_extraInfoSpec) {
                this.isListenOnBeforeRequest || (this.isListenOnBeforeRequest = !0, chrome.webRequest.onBeforeRequest.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REQUEST, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnBeforeSendHeaders(filter, opt_extraInfoSpec) {
                this.isListenOnBeforeSendHeaders || (this.isListenOnBeforeSendHeaders = !0, chrome.webRequest.onBeforeSendHeaders.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_SEND_HEADERS, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnSendHeaders(filter, opt_extraInfoSpec) {
                this.isListenOnSendHeaders || (this.isListenOnSendHeaders = !0, chrome.webRequest.onSendHeaders.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_SEND_HEADERS, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnHeadersReceived(filter, opt_extraInfoSpec) {
                this.isListenOnHeadersReceived || (this.isListenOnHeadersReceived = !0, chrome.webRequest.onHeadersReceived.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_HEADERS_RECEIVED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnAuthRequired(filter, opt_extraInfoSpec) {
                this.isListenOnAuthRequired || (this.isListenOnAuthRequired = !0, chrome.webRequest.onAuthRequired.addListener((details, callback) => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_AUTH_REQUIRED, {
                        details: details,
                        callback: callback
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnResponseStarted(filter, opt_extraInfoSpec) {
                this.isListenOnResponseStarted || (this.isListenOnResponseStarted = !0, chrome.webRequest.onResponseStarted.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_RESPONSE_STARTED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnBeforeRedirect(filter, opt_extraInfoSpec) {
                this.isListenOnBeforeRedirect || (this.isListenOnBeforeRedirect = !0, chrome.webRequest.onBeforeRedirect.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REDIRECT, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnCompleted(filter, opt_extraInfoSpec) {
                this.isListenOnCompleted || (this.isListenOnCompleted = !0, chrome.webRequest.onCompleted.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_COMPLETED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnErrorOccurred(filter, opt_extraInfoSpec) {
                this.isListenOnErrorOccurred || (this.isListenOnErrorOccurred = !0, chrome.webRequest.onErrorOccurred.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_ERROR_OCCURRED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            listenOnActionIgnored(filter, opt_extraInfoSpec) {
                this.isListenOnActionIgnored || (this.isListenOnActionIgnored = !0, chrome.webRequest.onActionIgnored.addListener(details => {
                    const event = new index_1.MarioEvent(WebRequestServiceEvents_1.WebRequestServiceEvents.WEB_REQUEST_ON_ACTION_IGNORED, {
                        details: details
                    });
                    this.dispatcherService.emit(event).then();
                }, filter, opt_extraInfoSpec));
            }
            handlerBehaviorChanged() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.webRequest.handlerBehaviorChanged(() => resolve());
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
        };
        WebRequestService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], WebRequestService), 
        exports.WebRequestService = WebRequestService;
    },
    84: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), function(WebRequestServiceEvents) {
            WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REQUEST = "WEB_REQUEST_ON_BEFORE_REQUEST", 
            WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_SEND_HEADERS = "WEB_REQUEST_ON_BEFORE_SEND_HEADERS", 
            WebRequestServiceEvents.WEB_REQUEST_ON_SEND_HEADERS = "WEB_REQUEST_ON_SEND_HEADERS", 
            WebRequestServiceEvents.WEB_REQUEST_ON_HEADERS_RECEIVED = "WEB_REQUEST_ON_HEADERS_RECEIVED", 
            WebRequestServiceEvents.WEB_REQUEST_ON_AUTH_REQUIRED = "WEB_REQUEST_ON_AUTH_REQUIRED", 
            WebRequestServiceEvents.WEB_REQUEST_ON_RESPONSE_STARTED = "WEB_REQUEST_ON_RESPONSE_STARTED", 
            WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REDIRECT = "WEB_REQUEST_ON_BEFORE_REDIRECT", 
            WebRequestServiceEvents.WEB_REQUEST_ON_COMPLETED = "WEB_REQUEST_ON_COMPLETED", WebRequestServiceEvents.WEB_REQUEST_ON_ERROR_OCCURRED = "WEB_REQUEST_ON_ERROR_OCCURRED", 
            WebRequestServiceEvents.WEB_REQUEST_ON_ACTION_IGNORED = "WEB_REQUEST_ON_ACTION_IGNORED";
        }(exports.WebRequestServiceEvents || (exports.WebRequestServiceEvents = {}));
    },
    85: function(module, exports, __webpack_require__) {
        "use strict";
        var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const inversify_1 = __webpack_require__(0);
        let StorageService = class StorageService {
            get(key) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        chrome.storage.local.get(key, data => {
                            const response = void 0 !== data[key] ? data[key] : null;
                            resolve(response);
                        });
                    });
                }));
            }
            set(key, value) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        const data = {};
                        data[key] = value, chrome.storage.local.set(data, () => resolve());
                    });
                }));
            }
            has(key) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return null !== (yield this.get(key));
                }));
            }
            remove(keys) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        try {
                            chrome.storage.local.remove(keys, () => resolve());
                        } catch (e) {
                            reject(e);
                        }
                    });
                }));
            }
            clean() {
                chrome.storage.local.clear();
            }
        };
        StorageService = __decorate([ inversify_1.injectable() ], StorageService), exports.StorageService = StorageService;
    },
    9: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var idCounter = 0;
        exports.id = function() {
            return idCounter++;
        };
    },
    95: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.GoogleAnalyticsContentDispatcher = void 0;
        const src_1 = __webpack_require__(1), GoogleAnalyticsEvents_1 = __webpack_require__(42);
        exports.GoogleAnalyticsContentDispatcher = class GoogleAnalyticsContentDispatcher {
            constructor(dispatcher) {
                this.dispatcher = dispatcher;
            }
            trackPage(data) {
                const message = new src_1.MarioEvent(GoogleAnalyticsEvents_1.GoogleAnalyticsEvents.TRACK_PAGE, data);
                this.dispatcher.emit(message);
            }
            trackEvent(data) {
                const message = new src_1.MarioEvent(GoogleAnalyticsEvents_1.GoogleAnalyticsEvents.TRACK_EVENT, data);
                this.dispatcher.emit(message);
            }
        };
    }
});
//# sourceMappingURL=content.js.map