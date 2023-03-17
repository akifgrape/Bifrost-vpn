/*! For license information please see build.js.LICENSE.txt */
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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 376);
}([ function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.NAMED_TAG = "named", exports.NAME_TAG = "name", exports.UNMANAGED_TAG = "unmanaged", 
    exports.OPTIONAL_TAG = "optional", exports.INJECT_TAG = "inject", exports.MULTI_INJECT_TAG = "multi_inject", 
    exports.TAGGED = "inversify:tagged", exports.TAGGED_PROP = "inversify:tagged_props", 
    exports.PARAM_TYPES = "inversify:paramtypes", exports.DESIGN_PARAM_TYPES = "design:paramtypes", 
    exports.POST_CONSTRUCT = "post_construct";
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(306);
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var idCounter = 0;
    exports.id = function() {
        return idCounter++;
    };
}, function(module, exports) {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg), value = info.value;
        } catch (error) {
            return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    module.exports = function(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise((function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(void 0);
            }));
        };
    };
}, function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ContentEvents) {
        ContentEvents.POPUP_COUNT = "POPUP_COUNTER", ContentEvents.POPUP_GET_COUNTER = "POPUP_GET_COUNTER", 
        ContentEvents.REDIRECT_TO_SAFE_PAGE = "REDIRECT_TO_SAFE_PAGE", ContentEvents.POPUP_GET_PROTECTION_STATE = "POPUP_GET_PROTECTION_STATE", 
        ContentEvents.POPUP_SET_PROTECTION_STATE = "POPUP_SET_PROTECTION_STATE";
    }(exports.ContentEvents || (exports.ContentEvents = {}));
}, function(module, exports) {
    module.exports = function(useSourceMap) {
        var list = [];
        return list.toString = function() {
            return this.map((function(item) {
                var content = function(item, useSourceMap) {
                    var content = item[1] || "", cssMapping = item[3];
                    if (!cssMapping) return content;
                    if (useSourceMap && "function" == typeof btoa) {
                        var sourceMapping = (sourceMap = cssMapping, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), sourceURLs = cssMapping.sources.map((function(source) {
                            return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                        }));
                        return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
                    }
                    var sourceMap;
                    return [ content ].join("\n");
                }(item, useSourceMap);
                return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
            })).join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function listToStyles(parentId, list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], part = {
                id: parentId + ":" + i,
                css: item[1],
                media: item[2],
                sourceMap: item[3]
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "default", (function() {
        return addStylesClient;
    }));
    var hasDocument = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !hasDocument) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var stylesInDom = {}, head = hasDocument && (document.head || document.getElementsByTagName("head")[0]), singletonElement = null, singletonCounter = 0, isProduction = !1, noop = function() {}, options = null, isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function addStylesClient(parentId, list, _isProduction, _options) {
        isProduction = _isProduction, options = _options || {};
        var styles = listToStyles(parentId, list);
        return addStylesToDom(styles), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i];
                (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle);
            }
            newList ? addStylesToDom(styles = listToStyles(parentId, newList)) : styles = [];
            for (i = 0; i < mayRemove.length; i++) {
                var domStyle;
                if (0 === (domStyle = mayRemove[i]).refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    }
    function addStylesToDom(styles) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
                domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
            } else {
                var parts = [];
                for (j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function createStyleElement() {
        var styleElement = document.createElement("style");
        return styleElement.type = "text/css", head.appendChild(styleElement), styleElement;
    }
    function addStyle(obj) {
        var update, remove, styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');
        if (styleElement) {
            if (isProduction) return noop;
            styleElement.parentNode.removeChild(styleElement);
        }
        if (isOldIE) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement()), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), 
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else styleElement = createStyleElement(), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            styleElement.parentNode.removeChild(styleElement);
        };
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    var textStore, replaceText = (textStore = [], function(index, replacement) {
        return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
    });
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
        if (media && styleElement.setAttribute("media", media), options.ssrId && styleElement.setAttribute("data-vue-ssr-id", obj.id), 
        sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */", css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), 
        styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
}, function(module, exports) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(BrowserEnum) {
        BrowserEnum.CHROME_BROWSER = "CHROME_BROWSER", BrowserEnum.FIREFOX_BROWSER = "FIREFOX_BROWSER", 
        BrowserEnum.EDGE_BROWSER = "EDGE_BROWSER", BrowserEnum.SAFARI_BROWSER = "SAFARI_BROWSER", 
        BrowserEnum.OPERA_BROWSER = "OPERA_BROWSER", BrowserEnum.CHROMIUM_BROWSER = "CHROMIUM_BROWSER";
    }(exports.BrowserEnum || (exports.BrowserEnum = {}));
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var ERROR_MSGS = __webpack_require__(3);
    exports.isStackOverflowExeption = function(error) {
        return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
    };
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
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
    }), exports.isChrome = function() {
        return !0;
    }, exports.isEdge = function() {
        return !1;
    }, exports.getBrowserBlankPageUrl = function() {
        let url = "about:blank";
        return url = "chrome://newtab/", url;
    }, exports.delay = function(ms) {
        return __awaiter(this, void 0, void 0, (function*() {
            return new Promise(resolve => setTimeout(resolve, ms));
        }));
    }, exports.isBugsnagEnabled = function() {
        return Boolean(1);
    }, exports.noop = function() {};
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(FeatureTypes) {
        FeatureTypes.PROXY = "PROXY", FeatureTypes.AD_BLOCKER = "AD_BLOCKER", FeatureTypes.ANTIMALWARE = "ANTIMALWARE", 
        FeatureTypes.ANALYTICS_BLOCKER = "ANALYTICS_BLOCKER", FeatureTypes.HISTORY_CLEANER = "HISTORY_CLEANER", 
        FeatureTypes.CACHE_CLEANER = "CACHE_CLEANER";
    }(exports.FeatureTypes || (exports.FeatureTypes = {}));
}, , function(module, exports) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ExternalDispatcherEvents) {
        ExternalDispatcherEvents.ON_ANY_MESSAGE = "ON_ANY_MESSAGE";
    }(exports.ExternalDispatcherEvents || (exports.ExternalDispatcherEvents = {}));
}, function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.GoogleAnalyticsEvents = void 0, function(GoogleAnalyticsEvents) {
        GoogleAnalyticsEvents.TRACK_PAGE = "GOOGLE_ANALYTICS_TRACK_PAGE", GoogleAnalyticsEvents.TRACK_EVENT = "GOOGLE_ANALYTICS_TRACK_EVENT";
    }(exports.GoogleAnalyticsEvents || (exports.GoogleAnalyticsEvents = {}));
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    exports.BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
    };
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Plan = function(parentContext, rootRequest) {
        this.parentContext = parentContext, this.rootRequest = rootRequest;
    };
    exports.Plan = Plan;
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const InternalDispatcherException_1 = __webpack_require__(72);
    class InternalDispatcherListenerIsNotRegisteredException extends InternalDispatcherException_1.InternalDispatcherException {}
    exports.InternalDispatcherListenerIsNotRegisteredException = InternalDispatcherListenerIsNotRegisteredException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    class InternalDispatcherException extends Error {}
    exports.InternalDispatcherException = InternalDispatcherException;
}, function(module, exports) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const CoreException_1 = __webpack_require__(75);
    class CoreServiceIsNotRegisteredException extends CoreException_1.CoreException {}
    exports.CoreServiceIsNotRegisteredException = CoreServiceIsNotRegisteredException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    class CoreException extends Error {}
    exports.CoreException = CoreException;
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const ExternalDispatcherException_1 = __webpack_require__(78);
    class ExternalDispatcherListenerIsNotFoundException extends ExternalDispatcherException_1.ExternalDispatcherException {}
    exports.ExternalDispatcherListenerIsNotFoundException = ExternalDispatcherListenerIsNotFoundException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    class ExternalDispatcherException extends Error {}
    exports.ExternalDispatcherException = ExternalDispatcherException;
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(CacheEvents) {
        CacheEvents.BEFORE_CLEAR_CACHE = "BEFORE_CLEAR_CACHE", CacheEvents.AFTER_CLEAR_CACHE = "AFTER_CLEAR_CACHE";
    }(exports.CacheEvents || (exports.CacheEvents = {}));
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports) {
    module.exports = function(url) {
        return "string" != typeof url ? url : (/^['"].*['"]$/.test(url) && (url = url.slice(1, -1)), 
        /["'() \t\n]/.test(url) ? '"' + url.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : url);
    };
}, , , , , , , , , function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(HISTORY_CLEAN_TYPE) {
        HISTORY_CLEAN_TYPE.WHEN_LEAVE = "WHEN_LEAVE", HISTORY_CLEAN_TYPE.EVERY_DAY = "EVERY_DAY", 
        HISTORY_CLEAN_TYPE.EVERY_HOUR = "EVERY_HOUR";
    }(exports.HISTORY_CLEAN_TYPE || (exports.HISTORY_CLEAN_TYPE = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(CACHE_CLEAN_TYPE) {
        CACHE_CLEAN_TYPE.WHEN_LEAVE = "WHEN_LEAVE", CACHE_CLEAN_TYPE.EVERY_DAY = "EVERY_DAY", 
        CACHE_CLEAN_TYPE.EVERY_HOUR = "EVERY_HOUR";
    }(exports.CACHE_CLEAN_TYPE || (exports.CACHE_CLEAN_TYPE = {}));
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function(global, setImmediate) {
        var emptyObject = Object.freeze({});
        function isUndef(v) {
            return null == v;
        }
        function isDef(v) {
            return null != v;
        }
        function isTrue(v) {
            return !0 === v;
        }
        function isPrimitive(value) {
            return "string" == typeof value || "number" == typeof value || "symbol" == typeof value || "boolean" == typeof value;
        }
        function isObject(obj) {
            return null !== obj && "object" == typeof obj;
        }
        var _toString = Object.prototype.toString;
        function isPlainObject(obj) {
            return "[object Object]" === _toString.call(obj);
        }
        function isRegExp(v) {
            return "[object RegExp]" === _toString.call(v);
        }
        function isValidArrayIndex(val) {
            var n = parseFloat(String(val));
            return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
            return isDef(val) && "function" == typeof val.then && "function" == typeof val.catch;
        }
        function toString(val) {
            return null == val ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
        }
        function makeMap(str, expectsLowerCase) {
            for (var map = Object.create(null), list = str.split(","), i = 0; i < list.length; i++) map[list[i]] = !0;
            return expectsLowerCase ? function(val) {
                return map[val.toLowerCase()];
            } : function(val) {
                return map[val];
            };
        }
        var isBuiltInTag = makeMap("slot,component", !0), isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove(arr, item) {
            if (arr.length) {
                var index = arr.indexOf(item);
                if (index > -1) return arr.splice(index, 1);
            }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
            return hasOwnProperty.call(obj, key);
        }
        function cached(fn) {
            var cache = Object.create(null);
            return function(str) {
                return cache[str] || (cache[str] = fn(str));
            };
        }
        var camelizeRE = /-(\w)/g, camelize = cached((function(str) {
            return str.replace(camelizeRE, (function(_, c) {
                return c ? c.toUpperCase() : "";
            }));
        })), capitalize = cached((function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })), hyphenateRE = /\B([A-Z])/g, hyphenate = cached((function(str) {
            return str.replace(hyphenateRE, "-$1").toLowerCase();
        }));
        var bind = Function.prototype.bind ? function(fn, ctx) {
            return fn.bind(ctx);
        } : function(fn, ctx) {
            function boundFn(a) {
                var l = arguments.length;
                return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
            }
            return boundFn._length = fn.length, boundFn;
        };
        function toArray(list, start) {
            start = start || 0;
            for (var i = list.length - start, ret = new Array(i); i--; ) ret[i] = list[i + start];
            return ret;
        }
        function extend(to, _from) {
            for (var key in _from) to[key] = _from[key];
            return to;
        }
        function toObject(arr) {
            for (var res = {}, i = 0; i < arr.length; i++) arr[i] && extend(res, arr[i]);
            return res;
        }
        function noop(a, b, c) {}
        var no = function(a, b, c) {
            return !1;
        }, identity = function(_) {
            return _;
        };
        function looseEqual(a, b) {
            if (a === b) return !0;
            var isObjectA = isObject(a), isObjectB = isObject(b);
            if (!isObjectA || !isObjectB) return !isObjectA && !isObjectB && String(a) === String(b);
            try {
                var isArrayA = Array.isArray(a), isArrayB = Array.isArray(b);
                if (isArrayA && isArrayB) return a.length === b.length && a.every((function(e, i) {
                    return looseEqual(e, b[i]);
                }));
                if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
                if (isArrayA || isArrayB) return !1;
                var keysA = Object.keys(a), keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every((function(key) {
                    return looseEqual(a[key], b[key]);
                }));
            } catch (e) {
                return !1;
            }
        }
        function looseIndexOf(arr, val) {
            for (var i = 0; i < arr.length; i++) if (looseEqual(arr[i], val)) return i;
            return -1;
        }
        function once(fn) {
            var called = !1;
            return function() {
                called || (called = !0, fn.apply(this, arguments));
            };
        }
        var ASSET_TYPES = [ "component", "directive", "filter" ], LIFECYCLE_HOOKS = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], config = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: no,
            isReservedAttr: no,
            isUnknownElement: no,
            getTagNamespace: noop,
            parsePlatformTagName: identity,
            mustUseProp: no,
            async: !0,
            _lifecycleHooks: LIFECYCLE_HOOKS
        }, unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function isReserved(str) {
            var c = (str + "").charCodeAt(0);
            return 36 === c || 95 === c;
        }
        function def(obj, key, val, enumerable) {
            Object.defineProperty(obj, key, {
                value: val,
                enumerable: !!enumerable,
                writable: !0,
                configurable: !0
            });
        }
        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        var _isServer, hasProto = "__proto__" in {}, inBrowser = "undefined" != typeof window, inWeex = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, weexPlatform = inWeex && WXEnvironment.platform.toLowerCase(), UA = inBrowser && window.navigator.userAgent.toLowerCase(), isIE = UA && /msie|trident/.test(UA), isIE9 = UA && UA.indexOf("msie 9.0") > 0, isEdge = UA && UA.indexOf("edge/") > 0, isIOS = (UA && UA.indexOf("android"), 
        UA && /iphone|ipad|ipod|ios/.test(UA) || "ios" === weexPlatform), isFF = (UA && /chrome\/\d+/.test(UA), 
        UA && /phantomjs/.test(UA), UA && UA.match(/firefox\/(\d+)/)), nativeWatch = {}.watch, supportsPassive = !1;
        if (inBrowser) try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
                get: function() {
                    supportsPassive = !0;
                }
            }), window.addEventListener("test-passive", null, opts);
        } catch (e) {}
        var isServerRendering = function() {
            return void 0 === _isServer && (_isServer = !inBrowser && !inWeex && void 0 !== global && (global.process && "server" === global.process.env.VUE_ENV)), 
            _isServer;
        }, devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
            return "function" == typeof Ctor && /native code/.test(Ctor.toString());
        }
        var _Set, hasSymbol = "undefined" != typeof Symbol && isNative(Symbol) && "undefined" != typeof Reflect && isNative(Reflect.ownKeys);
        _Set = "undefined" != typeof Set && isNative(Set) ? Set : function() {
            function Set() {
                this.set = Object.create(null);
            }
            return Set.prototype.has = function(key) {
                return !0 === this.set[key];
            }, Set.prototype.add = function(key) {
                this.set[key] = !0;
            }, Set.prototype.clear = function() {
                this.set = Object.create(null);
            }, Set;
        }();
        var warn = noop, uid = 0, Dep = function() {
            this.id = uid++, this.subs = [];
        };
        Dep.prototype.addSub = function(sub) {
            this.subs.push(sub);
        }, Dep.prototype.removeSub = function(sub) {
            remove(this.subs, sub);
        }, Dep.prototype.depend = function() {
            Dep.target && Dep.target.addDep(this);
        }, Dep.prototype.notify = function() {
            var subs = this.subs.slice();
            for (var i = 0, l = subs.length; i < l; i++) subs[i].update();
        }, Dep.target = null;
        var targetStack = [];
        function pushTarget(target) {
            targetStack.push(target), Dep.target = target;
        }
        function popTarget() {
            targetStack.pop(), Dep.target = targetStack[targetStack.length - 1];
        }
        var VNode = function(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
            this.tag = tag, this.data = data, this.children = children, this.text = text, this.elm = elm, 
            this.ns = void 0, this.context = context, this.fnContext = void 0, this.fnOptions = void 0, 
            this.fnScopeId = void 0, this.key = data && data.key, this.componentOptions = componentOptions, 
            this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, 
            this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, 
            this.asyncFactory = asyncFactory, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
        }, prototypeAccessors = {
            child: {
                configurable: !0
            }
        };
        prototypeAccessors.child.get = function() {
            return this.componentInstance;
        }, Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function(text) {
            void 0 === text && (text = "");
            var node = new VNode;
            return node.text = text, node.isComment = !0, node;
        };
        function createTextVNode(val) {
            return new VNode(void 0, void 0, void 0, String(val));
        }
        function cloneVNode(vnode) {
            var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
            return cloned.ns = vnode.ns, cloned.isStatic = vnode.isStatic, cloned.key = vnode.key, 
            cloned.isComment = vnode.isComment, cloned.fnContext = vnode.fnContext, cloned.fnOptions = vnode.fnOptions, 
            cloned.fnScopeId = vnode.fnScopeId, cloned.asyncMeta = vnode.asyncMeta, cloned.isCloned = !0, 
            cloned;
        }
        var arrayProto = Array.prototype, arrayMethods = Object.create(arrayProto);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach((function(method) {
            var original = arrayProto[method];
            def(arrayMethods, method, (function() {
                for (var args = [], len = arguments.length; len--; ) args[len] = arguments[len];
                var inserted, result = original.apply(this, args), ob = this.__ob__;
                switch (method) {
                  case "push":
                  case "unshift":
                    inserted = args;
                    break;

                  case "splice":
                    inserted = args.slice(2);
                }
                return inserted && ob.observeArray(inserted), ob.dep.notify(), result;
            }));
        }));
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods), shouldObserve = !0;
        function toggleObserving(value) {
            shouldObserve = value;
        }
        var Observer = function(value) {
            this.value = value, this.dep = new Dep, this.vmCount = 0, def(value, "__ob__", this), 
            Array.isArray(value) ? (hasProto ? function(target, src) {
                target.__proto__ = src;
            }(value, arrayMethods) : function(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }(value, arrayMethods, arrayKeys), this.observeArray(value)) : this.walk(value);
        };
        function observe(value, asRootData) {
            var ob;
            if (isObject(value) && !(value instanceof VNode)) return hasOwn(value, "__ob__") && value.__ob__ instanceof Observer ? ob = value.__ob__ : shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue && (ob = new Observer(value)), 
            asRootData && ob && ob.vmCount++, ob;
        }
        function defineReactive$$1(obj, key, val, customSetter, shallow) {
            var dep = new Dep, property = Object.getOwnPropertyDescriptor(obj, key);
            if (!property || !1 !== property.configurable) {
                var getter = property && property.get, setter = property && property.set;
                getter && !setter || 2 !== arguments.length || (val = obj[key]);
                var childOb = !shallow && observe(val);
                Object.defineProperty(obj, key, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var value = getter ? getter.call(obj) : val;
                        return Dep.target && (dep.depend(), childOb && (childOb.dep.depend(), Array.isArray(value) && dependArray(value))), 
                        value;
                    },
                    set: function(newVal) {
                        var value = getter ? getter.call(obj) : val;
                        newVal === value || newVal != newVal && value != value || getter && !setter || (setter ? setter.call(obj, newVal) : val = newVal, 
                        childOb = !shallow && observe(newVal), dep.notify());
                    }
                });
            }
        }
        function set(target, key, val) {
            if (Array.isArray(target) && isValidArrayIndex(key)) return target.length = Math.max(target.length, key), 
            target.splice(key, 1, val), val;
            if (key in target && !(key in Object.prototype)) return target[key] = val, val;
            var ob = target.__ob__;
            return target._isVue || ob && ob.vmCount ? val : ob ? (defineReactive$$1(ob.value, key, val), 
            ob.dep.notify(), val) : (target[key] = val, val);
        }
        function del(target, key) {
            if (Array.isArray(target) && isValidArrayIndex(key)) target.splice(key, 1); else {
                var ob = target.__ob__;
                target._isVue || ob && ob.vmCount || hasOwn(target, key) && (delete target[key], 
                ob && ob.dep.notify());
            }
        }
        function dependArray(value) {
            for (var e = void 0, i = 0, l = value.length; i < l; i++) (e = value[i]) && e.__ob__ && e.__ob__.dep.depend(), 
            Array.isArray(e) && dependArray(e);
        }
        Observer.prototype.walk = function(obj) {
            for (var keys = Object.keys(obj), i = 0; i < keys.length; i++) defineReactive$$1(obj, keys[i]);
        }, Observer.prototype.observeArray = function(items) {
            for (var i = 0, l = items.length; i < l; i++) observe(items[i]);
        };
        var strats = config.optionMergeStrategies;
        function mergeData(to, from) {
            if (!from) return to;
            for (var key, toVal, fromVal, keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from), i = 0; i < keys.length; i++) "__ob__" !== (key = keys[i]) && (toVal = to[key], 
            fromVal = from[key], hasOwn(to, key) ? toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal) && mergeData(toVal, fromVal) : set(to, key, fromVal));
            return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
            return vm ? function() {
                var instanceData = "function" == typeof childVal ? childVal.call(vm, vm) : childVal, defaultData = "function" == typeof parentVal ? parentVal.call(vm, vm) : parentVal;
                return instanceData ? mergeData(instanceData, defaultData) : defaultData;
            } : childVal ? parentVal ? function() {
                return mergeData("function" == typeof childVal ? childVal.call(this, this) : childVal, "function" == typeof parentVal ? parentVal.call(this, this) : parentVal);
            } : childVal : parentVal;
        }
        function mergeHook(parentVal, childVal) {
            var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
            return res ? function(hooks) {
                for (var res = [], i = 0; i < hooks.length; i++) -1 === res.indexOf(hooks[i]) && res.push(hooks[i]);
                return res;
            }(res) : res;
        }
        function mergeAssets(parentVal, childVal, vm, key) {
            var res = Object.create(parentVal || null);
            return childVal ? extend(res, childVal) : res;
        }
        strats.data = function(parentVal, childVal, vm) {
            return vm ? mergeDataOrFn(parentVal, childVal, vm) : childVal && "function" != typeof childVal ? parentVal : mergeDataOrFn(parentVal, childVal);
        }, LIFECYCLE_HOOKS.forEach((function(hook) {
            strats[hook] = mergeHook;
        })), ASSET_TYPES.forEach((function(type) {
            strats[type + "s"] = mergeAssets;
        })), strats.watch = function(parentVal, childVal, vm, key) {
            if (parentVal === nativeWatch && (parentVal = void 0), childVal === nativeWatch && (childVal = void 0), 
            !childVal) return Object.create(parentVal || null);
            if (!parentVal) return childVal;
            var ret = {};
            for (var key$1 in extend(ret, parentVal), childVal) {
                var parent = ret[key$1], child = childVal[key$1];
                parent && !Array.isArray(parent) && (parent = [ parent ]), ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [ child ];
            }
            return ret;
        }, strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
            if (!parentVal) return childVal;
            var ret = Object.create(null);
            return extend(ret, parentVal), childVal && extend(ret, childVal), ret;
        }, strats.provide = mergeDataOrFn;
        var defaultStrat = function(parentVal, childVal) {
            return void 0 === childVal ? parentVal : childVal;
        };
        function mergeOptions(parent, child, vm) {
            if ("function" == typeof child && (child = child.options), function(options, vm) {
                var props = options.props;
                if (props) {
                    var i, val, res = {};
                    if (Array.isArray(props)) for (i = props.length; i--; ) "string" == typeof (val = props[i]) && (res[camelize(val)] = {
                        type: null
                    }); else if (isPlainObject(props)) for (var key in props) val = props[key], res[camelize(key)] = isPlainObject(val) ? val : {
                        type: val
                    }; else 0;
                    options.props = res;
                }
            }(child), function(options, vm) {
                var inject = options.inject;
                if (inject) {
                    var normalized = options.inject = {};
                    if (Array.isArray(inject)) for (var i = 0; i < inject.length; i++) normalized[inject[i]] = {
                        from: inject[i]
                    }; else if (isPlainObject(inject)) for (var key in inject) {
                        var val = inject[key];
                        normalized[key] = isPlainObject(val) ? extend({
                            from: key
                        }, val) : {
                            from: val
                        };
                    } else 0;
                }
            }(child), function(options) {
                var dirs = options.directives;
                if (dirs) for (var key in dirs) {
                    var def$$1 = dirs[key];
                    "function" == typeof def$$1 && (dirs[key] = {
                        bind: def$$1,
                        update: def$$1
                    });
                }
            }(child), !child._base && (child.extends && (parent = mergeOptions(parent, child.extends, vm)), 
            child.mixins)) for (var i = 0, l = child.mixins.length; i < l; i++) parent = mergeOptions(parent, child.mixins[i], vm);
            var key, options = {};
            for (key in parent) mergeField(key);
            for (key in child) hasOwn(parent, key) || mergeField(key);
            function mergeField(key) {
                var strat = strats[key] || defaultStrat;
                options[key] = strat(parent[key], child[key], vm, key);
            }
            return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
            if ("string" == typeof id) {
                var assets = options[type];
                if (hasOwn(assets, id)) return assets[id];
                var camelizedId = camelize(id);
                if (hasOwn(assets, camelizedId)) return assets[camelizedId];
                var PascalCaseId = capitalize(camelizedId);
                return hasOwn(assets, PascalCaseId) ? assets[PascalCaseId] : assets[id] || assets[camelizedId] || assets[PascalCaseId];
            }
        }
        function validateProp(key, propOptions, propsData, vm) {
            var prop = propOptions[key], absent = !hasOwn(propsData, key), value = propsData[key], booleanIndex = getTypeIndex(Boolean, prop.type);
            if (booleanIndex > -1) if (absent && !hasOwn(prop, "default")) value = !1; else if ("" === value || value === hyphenate(key)) {
                var stringIndex = getTypeIndex(String, prop.type);
                (stringIndex < 0 || booleanIndex < stringIndex) && (value = !0);
            }
            if (void 0 === value) {
                value = function(vm, prop, key) {
                    if (!hasOwn(prop, "default")) return;
                    var def = prop.default;
                    0;
                    if (vm && vm.$options.propsData && void 0 === vm.$options.propsData[key] && void 0 !== vm._props[key]) return vm._props[key];
                    return "function" == typeof def && "Function" !== getType(prop.type) ? def.call(vm) : def;
                }(vm, prop, key);
                var prevShouldObserve = shouldObserve;
                toggleObserving(!0), observe(value), toggleObserving(prevShouldObserve);
            }
            return value;
        }
        function getType(fn) {
            var match = fn && fn.toString().match(/^\s*function (\w+)/);
            return match ? match[1] : "";
        }
        function isSameType(a, b) {
            return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
            if (!Array.isArray(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
            for (var i = 0, len = expectedTypes.length; i < len; i++) if (isSameType(expectedTypes[i], type)) return i;
            return -1;
        }
        function handleError(err, vm, info) {
            pushTarget();
            try {
                if (vm) for (var cur = vm; cur = cur.$parent; ) {
                    var hooks = cur.$options.errorCaptured;
                    if (hooks) for (var i = 0; i < hooks.length; i++) try {
                        if (!1 === hooks[i].call(cur, err, vm, info)) return;
                    } catch (e) {
                        globalHandleError(e, cur, "errorCaptured hook");
                    }
                }
                globalHandleError(err, vm, info);
            } finally {
                popTarget();
            }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
            var res;
            try {
                (res = args ? handler.apply(context, args) : handler.call(context)) && !res._isVue && isPromise(res) && !res._handled && (res.catch((function(e) {
                    return handleError(e, vm, info + " (Promise/async)");
                })), res._handled = !0);
            } catch (e) {
                handleError(e, vm, info);
            }
            return res;
        }
        function globalHandleError(err, vm, info) {
            if (config.errorHandler) try {
                return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
                e !== err && logError(e, null, "config.errorHandler");
            }
            logError(err, vm, info);
        }
        function logError(err, vm, info) {
            if (!inBrowser && !inWeex || "undefined" == typeof console) throw err;
            console.error(err);
        }
        var timerFunc, isUsingMicroTask = !1, callbacks = [], pending = !1;
        function flushCallbacks() {
            pending = !1;
            var copies = callbacks.slice(0);
            callbacks.length = 0;
            for (var i = 0; i < copies.length; i++) copies[i]();
        }
        if ("undefined" != typeof Promise && isNative(Promise)) {
            var p = Promise.resolve();
            timerFunc = function() {
                p.then(flushCallbacks), isIOS && setTimeout(noop);
            }, isUsingMicroTask = !0;
        } else if (isIE || "undefined" == typeof MutationObserver || !isNative(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) timerFunc = void 0 !== setImmediate && isNative(setImmediate) ? function() {
            setImmediate(flushCallbacks);
        } : function() {
            setTimeout(flushCallbacks, 0);
        }; else {
            var counter = 1, observer = new MutationObserver(flushCallbacks), textNode = document.createTextNode(String(counter));
            observer.observe(textNode, {
                characterData: !0
            }), timerFunc = function() {
                counter = (counter + 1) % 2, textNode.data = String(counter);
            }, isUsingMicroTask = !0;
        }
        function nextTick(cb, ctx) {
            var _resolve;
            if (callbacks.push((function() {
                if (cb) try {
                    cb.call(ctx);
                } catch (e) {
                    handleError(e, ctx, "nextTick");
                } else _resolve && _resolve(ctx);
            })), pending || (pending = !0, timerFunc()), !cb && "undefined" != typeof Promise) return new Promise((function(resolve) {
                _resolve = resolve;
            }));
        }
        var seenObjects = new _Set;
        function traverse(val) {
            !function _traverse(val, seen) {
                var i, keys, isA = Array.isArray(val);
                if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) return;
                if (val.__ob__) {
                    var depId = val.__ob__.dep.id;
                    if (seen.has(depId)) return;
                    seen.add(depId);
                }
                if (isA) for (i = val.length; i--; ) _traverse(val[i], seen); else for (keys = Object.keys(val), 
                i = keys.length; i--; ) _traverse(val[keys[i]], seen);
            }(val, seenObjects), seenObjects.clear();
        }
        var normalizeEvent = cached((function(name) {
            var passive = "&" === name.charAt(0), once$$1 = "~" === (name = passive ? name.slice(1) : name).charAt(0), capture = "!" === (name = once$$1 ? name.slice(1) : name).charAt(0);
            return {
                name: name = capture ? name.slice(1) : name,
                once: once$$1,
                capture: capture,
                passive: passive
            };
        }));
        function createFnInvoker(fns, vm) {
            function invoker() {
                var arguments$1 = arguments, fns = invoker.fns;
                if (!Array.isArray(fns)) return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
                for (var cloned = fns.slice(), i = 0; i < cloned.length; i++) invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
            }
            return invoker.fns = fns, invoker;
        }
        function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
            var name, cur, old, event;
            for (name in on) cur = on[name], old = oldOn[name], event = normalizeEvent(name), 
            isUndef(cur) || (isUndef(old) ? (isUndef(cur.fns) && (cur = on[name] = createFnInvoker(cur, vm)), 
            isTrue(event.once) && (cur = on[name] = createOnceHandler(event.name, cur, event.capture)), 
            add(event.name, cur, event.capture, event.passive, event.params)) : cur !== old && (old.fns = cur, 
            on[name] = old));
            for (name in oldOn) isUndef(on[name]) && remove$$1((event = normalizeEvent(name)).name, oldOn[name], event.capture);
        }
        function mergeVNodeHook(def, hookKey, hook) {
            var invoker;
            def instanceof VNode && (def = def.data.hook || (def.data.hook = {}));
            var oldHook = def[hookKey];
            function wrappedHook() {
                hook.apply(this, arguments), remove(invoker.fns, wrappedHook);
            }
            isUndef(oldHook) ? invoker = createFnInvoker([ wrappedHook ]) : isDef(oldHook.fns) && isTrue(oldHook.merged) ? (invoker = oldHook).fns.push(wrappedHook) : invoker = createFnInvoker([ oldHook, wrappedHook ]), 
            invoker.merged = !0, def[hookKey] = invoker;
        }
        function checkProp(res, hash, key, altKey, preserve) {
            if (isDef(hash)) {
                if (hasOwn(hash, key)) return res[key] = hash[key], preserve || delete hash[key], 
                !0;
                if (hasOwn(hash, altKey)) return res[key] = hash[altKey], preserve || delete hash[altKey], 
                !0;
            }
            return !1;
        }
        function normalizeChildren(children) {
            return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? function normalizeArrayChildren(children, nestedIndex) {
                var i, c, lastIndex, last, res = [];
                for (i = 0; i < children.length; i++) isUndef(c = children[i]) || "boolean" == typeof c || (lastIndex = res.length - 1, 
                last = res[lastIndex], Array.isArray(c) ? c.length > 0 && (isTextNode((c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i))[0]) && isTextNode(last) && (res[lastIndex] = createTextVNode(last.text + c[0].text), 
                c.shift()), res.push.apply(res, c)) : isPrimitive(c) ? isTextNode(last) ? res[lastIndex] = createTextVNode(last.text + c) : "" !== c && res.push(createTextVNode(c)) : isTextNode(c) && isTextNode(last) ? res[lastIndex] = createTextVNode(last.text + c.text) : (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex) && (c.key = "__vlist" + nestedIndex + "_" + i + "__"), 
                res.push(c)));
                return res;
            }(children) : void 0;
        }
        function isTextNode(node) {
            return isDef(node) && isDef(node.text) && !1 === node.isComment;
        }
        function resolveInject(inject, vm) {
            if (inject) {
                for (var result = Object.create(null), keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject), i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if ("__ob__" !== key) {
                        for (var provideKey = inject[key].from, source = vm; source; ) {
                            if (source._provided && hasOwn(source._provided, provideKey)) {
                                result[key] = source._provided[provideKey];
                                break;
                            }
                            source = source.$parent;
                        }
                        if (!source) if ("default" in inject[key]) {
                            var provideDefault = inject[key].default;
                            result[key] = "function" == typeof provideDefault ? provideDefault.call(vm) : provideDefault;
                        } else 0;
                    }
                }
                return result;
            }
        }
        function resolveSlots(children, context) {
            if (!children || !children.length) return {};
            for (var slots = {}, i = 0, l = children.length; i < l; i++) {
                var child = children[i], data = child.data;
                if (data && data.attrs && data.attrs.slot && delete data.attrs.slot, child.context !== context && child.fnContext !== context || !data || null == data.slot) (slots.default || (slots.default = [])).push(child); else {
                    var name = data.slot, slot = slots[name] || (slots[name] = []);
                    "template" === child.tag ? slot.push.apply(slot, child.children || []) : slot.push(child);
                }
            }
            for (var name$1 in slots) slots[name$1].every(isWhitespace) && delete slots[name$1];
            return slots;
        }
        function isWhitespace(node) {
            return node.isComment && !node.asyncFactory || " " === node.text;
        }
        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
            var res, hasNormalSlots = Object.keys(normalSlots).length > 0, isStable = slots ? !!slots.$stable : !hasNormalSlots, key = slots && slots.$key;
            if (slots) {
                if (slots._normalized) return slots._normalized;
                if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) return prevSlots;
                for (var key$1 in res = {}, slots) slots[key$1] && "$" !== key$1[0] && (res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]));
            } else res = {};
            for (var key$2 in normalSlots) key$2 in res || (res[key$2] = proxyNormalSlot(normalSlots, key$2));
            return slots && Object.isExtensible(slots) && (slots._normalized = res), def(res, "$stable", isStable), 
            def(res, "$key", key), def(res, "$hasNormal", hasNormalSlots), res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
            var normalized = function() {
                var res = arguments.length ? fn.apply(null, arguments) : fn({});
                return (res = res && "object" == typeof res && !Array.isArray(res) ? [ res ] : normalizeChildren(res)) && (0 === res.length || 1 === res.length && res[0].isComment) ? void 0 : res;
            };
            return fn.proxy && Object.defineProperty(normalSlots, key, {
                get: normalized,
                enumerable: !0,
                configurable: !0
            }), normalized;
        }
        function proxyNormalSlot(slots, key) {
            return function() {
                return slots[key];
            };
        }
        function renderList(val, render) {
            var ret, i, l, keys, key;
            if (Array.isArray(val) || "string" == typeof val) for (ret = new Array(val.length), 
            i = 0, l = val.length; i < l; i++) ret[i] = render(val[i], i); else if ("number" == typeof val) for (ret = new Array(val), 
            i = 0; i < val; i++) ret[i] = render(i + 1, i); else if (isObject(val)) if (hasSymbol && val[Symbol.iterator]) {
                ret = [];
                for (var iterator = val[Symbol.iterator](), result = iterator.next(); !result.done; ) ret.push(render(result.value, ret.length)), 
                result = iterator.next();
            } else for (keys = Object.keys(val), ret = new Array(keys.length), i = 0, l = keys.length; i < l; i++) key = keys[i], 
            ret[i] = render(val[key], key, i);
            return isDef(ret) || (ret = []), ret._isVList = !0, ret;
        }
        function renderSlot(name, fallback, props, bindObject) {
            var nodes, scopedSlotFn = this.$scopedSlots[name];
            scopedSlotFn ? (props = props || {}, bindObject && (props = extend(extend({}, bindObject), props)), 
            nodes = scopedSlotFn(props) || fallback) : nodes = this.$slots[name] || fallback;
            var target = props && props.slot;
            return target ? this.$createElement("template", {
                slot: target
            }, nodes) : nodes;
        }
        function resolveFilter(id) {
            return resolveAsset(this.$options, "filters", id) || identity;
        }
        function isKeyNotMatch(expect, actual) {
            return Array.isArray(expect) ? -1 === expect.indexOf(actual) : expect !== actual;
        }
        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
            var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
            return builtInKeyName && eventKeyName && !config.keyCodes[key] ? isKeyNotMatch(builtInKeyName, eventKeyName) : mappedKeyCode ? isKeyNotMatch(mappedKeyCode, eventKeyCode) : eventKeyName ? hyphenate(eventKeyName) !== key : void 0;
        }
        function bindObjectProps(data, tag, value, asProp, isSync) {
            if (value) if (isObject(value)) {
                var hash;
                Array.isArray(value) && (value = toObject(value));
                var loop = function(key) {
                    if ("class" === key || "style" === key || isReservedAttribute(key)) hash = data; else {
                        var type = data.attrs && data.attrs.type;
                        hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                    }
                    var camelizedKey = camelize(key), hyphenatedKey = hyphenate(key);
                    camelizedKey in hash || hyphenatedKey in hash || (hash[key] = value[key], isSync && ((data.on || (data.on = {}))["update:" + key] = function($event) {
                        value[key] = $event;
                    }));
                };
                for (var key in value) loop(key);
            } else ;
            return data;
        }
        function renderStatic(index, isInFor) {
            var cached = this._staticTrees || (this._staticTrees = []), tree = cached[index];
            return tree && !isInFor || markStatic(tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this), "__static__" + index, !1), 
            tree;
        }
        function markOnce(tree, index, key) {
            return markStatic(tree, "__once__" + index + (key ? "_" + key : ""), !0), tree;
        }
        function markStatic(tree, key, isOnce) {
            if (Array.isArray(tree)) for (var i = 0; i < tree.length; i++) tree[i] && "string" != typeof tree[i] && markStaticNode(tree[i], key + "_" + i, isOnce); else markStaticNode(tree, key, isOnce);
        }
        function markStaticNode(node, key, isOnce) {
            node.isStatic = !0, node.key = key, node.isOnce = isOnce;
        }
        function bindObjectListeners(data, value) {
            if (value) if (isPlainObject(value)) {
                var on = data.on = data.on ? extend({}, data.on) : {};
                for (var key in value) {
                    var existing = on[key], ours = value[key];
                    on[key] = existing ? [].concat(existing, ours) : ours;
                }
            } else ;
            return data;
        }
        function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
            res = res || {
                $stable: !hasDynamicKeys
            };
            for (var i = 0; i < fns.length; i++) {
                var slot = fns[i];
                Array.isArray(slot) ? resolveScopedSlots(slot, res, hasDynamicKeys) : slot && (slot.proxy && (slot.fn.proxy = !0), 
                res[slot.key] = slot.fn);
            }
            return contentHashKey && (res.$key = contentHashKey), res;
        }
        function bindDynamicKeys(baseObj, values) {
            for (var i = 0; i < values.length; i += 2) {
                var key = values[i];
                "string" == typeof key && key && (baseObj[values[i]] = values[i + 1]);
            }
            return baseObj;
        }
        function prependModifier(value, symbol) {
            return "string" == typeof value ? symbol + value : value;
        }
        function installRenderHelpers(target) {
            target._o = markOnce, target._n = toNumber, target._s = toString, target._l = renderList, 
            target._t = renderSlot, target._q = looseEqual, target._i = looseIndexOf, target._m = renderStatic, 
            target._f = resolveFilter, target._k = checkKeyCodes, target._b = bindObjectProps, 
            target._v = createTextVNode, target._e = createEmptyVNode, target._u = resolveScopedSlots, 
            target._g = bindObjectListeners, target._d = bindDynamicKeys, target._p = prependModifier;
        }
        function FunctionalRenderContext(data, props, children, parent, Ctor) {
            var contextVm, this$1 = this, options = Ctor.options;
            hasOwn(parent, "_uid") ? (contextVm = Object.create(parent))._original = parent : (contextVm = parent, 
            parent = parent._original);
            var isCompiled = isTrue(options._compiled), needNormalization = !isCompiled;
            this.data = data, this.props = props, this.children = children, this.parent = parent, 
            this.listeners = data.on || emptyObject, this.injections = resolveInject(options.inject, parent), 
            this.slots = function() {
                return this$1.$slots || normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent)), 
                this$1.$slots;
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return normalizeScopedSlots(data.scopedSlots, this.slots());
                }
            }), isCompiled && (this.$options = options, this.$slots = this.slots(), this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots)), 
            options._scopeId ? this._c = function(a, b, c, d) {
                var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                return vnode && !Array.isArray(vnode) && (vnode.fnScopeId = options._scopeId, vnode.fnContext = parent), 
                vnode;
            } : this._c = function(a, b, c, d) {
                return createElement(contextVm, a, b, c, d, needNormalization);
            };
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
            var clone = cloneVNode(vnode);
            return clone.fnContext = contextVm, clone.fnOptions = options, data.slot && ((clone.data || (clone.data = {})).slot = data.slot), 
            clone;
        }
        function mergeProps(to, from) {
            for (var key in from) to[camelize(key)] = from[key];
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        var componentVNodeHooks = {
            init: function(vnode, hydrating) {
                if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                    var mountedNode = vnode;
                    componentVNodeHooks.prepatch(mountedNode, mountedNode);
                } else {
                    (vnode.componentInstance = function(vnode, parent) {
                        var options = {
                            _isComponent: !0,
                            _parentVnode: vnode,
                            parent: parent
                        }, inlineTemplate = vnode.data.inlineTemplate;
                        isDef(inlineTemplate) && (options.render = inlineTemplate.render, options.staticRenderFns = inlineTemplate.staticRenderFns);
                        return new vnode.componentOptions.Ctor(options);
                    }(vnode, activeInstance)).$mount(hydrating ? vnode.elm : void 0, hydrating);
                }
            },
            prepatch: function(oldVnode, vnode) {
                var options = vnode.componentOptions;
                !function(vm, propsData, listeners, parentVnode, renderChildren) {
                    0;
                    var newScopedSlots = parentVnode.data.scopedSlots, oldScopedSlots = vm.$scopedSlots, hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key), needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
                    vm.$options._parentVnode = parentVnode, vm.$vnode = parentVnode, vm._vnode && (vm._vnode.parent = parentVnode);
                    if (vm.$options._renderChildren = renderChildren, vm.$attrs = parentVnode.data.attrs || emptyObject, 
                    vm.$listeners = listeners || emptyObject, propsData && vm.$options.props) {
                        toggleObserving(!1);
                        for (var props = vm._props, propKeys = vm.$options._propKeys || [], i = 0; i < propKeys.length; i++) {
                            var key = propKeys[i], propOptions = vm.$options.props;
                            props[key] = validateProp(key, propOptions, propsData, vm);
                        }
                        toggleObserving(!0), vm.$options.propsData = propsData;
                    }
                    listeners = listeners || emptyObject;
                    var oldListeners = vm.$options._parentListeners;
                    vm.$options._parentListeners = listeners, updateComponentListeners(vm, listeners, oldListeners), 
                    needsForceUpdate && (vm.$slots = resolveSlots(renderChildren, parentVnode.context), 
                    vm.$forceUpdate());
                    0;
                }(vnode.componentInstance = oldVnode.componentInstance, options.propsData, options.listeners, vnode, options.children);
            },
            insert: function(vnode) {
                var vm, context = vnode.context, componentInstance = vnode.componentInstance;
                componentInstance._isMounted || (componentInstance._isMounted = !0, callHook(componentInstance, "mounted")), 
                vnode.data.keepAlive && (context._isMounted ? ((vm = componentInstance)._inactive = !1, 
                activatedChildren.push(vm)) : activateChildComponent(componentInstance, !0));
            },
            destroy: function(vnode) {
                var componentInstance = vnode.componentInstance;
                componentInstance._isDestroyed || (vnode.data.keepAlive ? function deactivateChildComponent(vm, direct) {
                    if (direct && (vm._directInactive = !0, isInInactiveTree(vm))) return;
                    if (!vm._inactive) {
                        vm._inactive = !0;
                        for (var i = 0; i < vm.$children.length; i++) deactivateChildComponent(vm.$children[i]);
                        callHook(vm, "deactivated");
                    }
                }(componentInstance, !0) : componentInstance.$destroy());
            }
        }, hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
            if (!isUndef(Ctor)) {
                var baseCtor = context.$options._base;
                if (isObject(Ctor) && (Ctor = baseCtor.extend(Ctor)), "function" == typeof Ctor) {
                    var asyncFactory;
                    if (isUndef(Ctor.cid) && void 0 === (Ctor = function(factory, baseCtor) {
                        if (isTrue(factory.error) && isDef(factory.errorComp)) return factory.errorComp;
                        if (isDef(factory.resolved)) return factory.resolved;
                        var owner = currentRenderingInstance;
                        owner && isDef(factory.owners) && -1 === factory.owners.indexOf(owner) && factory.owners.push(owner);
                        if (isTrue(factory.loading) && isDef(factory.loadingComp)) return factory.loadingComp;
                        if (owner && !isDef(factory.owners)) {
                            var owners = factory.owners = [ owner ], sync = !0, timerLoading = null, timerTimeout = null;
                            owner.$on("hook:destroyed", (function() {
                                return remove(owners, owner);
                            }));
                            var forceRender = function(renderCompleted) {
                                for (var i = 0, l = owners.length; i < l; i++) owners[i].$forceUpdate();
                                renderCompleted && (owners.length = 0, null !== timerLoading && (clearTimeout(timerLoading), 
                                timerLoading = null), null !== timerTimeout && (clearTimeout(timerTimeout), timerTimeout = null));
                            }, resolve = once((function(res) {
                                factory.resolved = ensureCtor(res, baseCtor), sync ? owners.length = 0 : forceRender(!0);
                            })), reject = once((function(reason) {
                                isDef(factory.errorComp) && (factory.error = !0, forceRender(!0));
                            })), res = factory(resolve, reject);
                            return isObject(res) && (isPromise(res) ? isUndef(factory.resolved) && res.then(resolve, reject) : isPromise(res.component) && (res.component.then(resolve, reject), 
                            isDef(res.error) && (factory.errorComp = ensureCtor(res.error, baseCtor)), isDef(res.loading) && (factory.loadingComp = ensureCtor(res.loading, baseCtor), 
                            0 === res.delay ? factory.loading = !0 : timerLoading = setTimeout((function() {
                                timerLoading = null, isUndef(factory.resolved) && isUndef(factory.error) && (factory.loading = !0, 
                                forceRender(!1));
                            }), res.delay || 200)), isDef(res.timeout) && (timerTimeout = setTimeout((function() {
                                timerTimeout = null, isUndef(factory.resolved) && reject(null);
                            }), res.timeout)))), sync = !1, factory.loading ? factory.loadingComp : factory.resolved;
                        }
                    }(asyncFactory = Ctor, baseCtor))) return function(factory, data, context, children, tag) {
                        var node = createEmptyVNode();
                        return node.asyncFactory = factory, node.asyncMeta = {
                            data: data,
                            context: context,
                            children: children,
                            tag: tag
                        }, node;
                    }(asyncFactory, data, context, children, tag);
                    data = data || {}, resolveConstructorOptions(Ctor), isDef(data.model) && function(options, data) {
                        var prop = options.model && options.model.prop || "value", event = options.model && options.model.event || "input";
                        (data.attrs || (data.attrs = {}))[prop] = data.model.value;
                        var on = data.on || (data.on = {}), existing = on[event], callback = data.model.callback;
                        isDef(existing) ? (Array.isArray(existing) ? -1 === existing.indexOf(callback) : existing !== callback) && (on[event] = [ callback ].concat(existing)) : on[event] = callback;
                    }(Ctor.options, data);
                    var propsData = function(data, Ctor, tag) {
                        var propOptions = Ctor.options.props;
                        if (!isUndef(propOptions)) {
                            var res = {}, attrs = data.attrs, props = data.props;
                            if (isDef(attrs) || isDef(props)) for (var key in propOptions) {
                                var altKey = hyphenate(key);
                                checkProp(res, props, key, altKey, !0) || checkProp(res, attrs, key, altKey, !1);
                            }
                            return res;
                        }
                    }(data, Ctor);
                    if (isTrue(Ctor.options.functional)) return function(Ctor, propsData, data, contextVm, children) {
                        var options = Ctor.options, props = {}, propOptions = options.props;
                        if (isDef(propOptions)) for (var key in propOptions) props[key] = validateProp(key, propOptions, propsData || emptyObject); else isDef(data.attrs) && mergeProps(props, data.attrs), 
                        isDef(data.props) && mergeProps(props, data.props);
                        var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor), vnode = options.render.call(null, renderContext._c, renderContext);
                        if (vnode instanceof VNode) return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
                        if (Array.isArray(vnode)) {
                            for (var vnodes = normalizeChildren(vnode) || [], res = new Array(vnodes.length), i = 0; i < vnodes.length; i++) res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
                            return res;
                        }
                    }(Ctor, propsData, data, context, children);
                    var listeners = data.on;
                    if (data.on = data.nativeOn, isTrue(Ctor.options.abstract)) {
                        var slot = data.slot;
                        data = {}, slot && (data.slot = slot);
                    }
                    !function(data) {
                        for (var hooks = data.hook || (data.hook = {}), i = 0; i < hooksToMerge.length; i++) {
                            var key = hooksToMerge[i], existing = hooks[key], toMerge = componentVNodeHooks[key];
                            existing === toMerge || existing && existing._merged || (hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge);
                        }
                    }(data);
                    var name = Ctor.options.name || tag;
                    return new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
                        Ctor: Ctor,
                        propsData: propsData,
                        listeners: listeners,
                        tag: tag,
                        children: children
                    }, asyncFactory);
                }
            }
        }
        function mergeHook$1(f1, f2) {
            var merged = function(a, b) {
                f1(a, b), f2(a, b);
            };
            return merged._merged = !0, merged;
        }
        function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
            return (Array.isArray(data) || isPrimitive(data)) && (normalizationType = children, 
            children = data, data = void 0), isTrue(alwaysNormalize) && (normalizationType = 2), 
            function(context, tag, data, children, normalizationType) {
                if (isDef(data) && isDef(data.__ob__)) return createEmptyVNode();
                isDef(data) && isDef(data.is) && (tag = data.is);
                if (!tag) return createEmptyVNode();
                0;
                Array.isArray(children) && "function" == typeof children[0] && ((data = data || {}).scopedSlots = {
                    default: children[0]
                }, children.length = 0);
                2 === normalizationType ? children = normalizeChildren(children) : 1 === normalizationType && (children = function(children) {
                    for (var i = 0; i < children.length; i++) if (Array.isArray(children[i])) return Array.prototype.concat.apply([], children);
                    return children;
                }(children));
                var vnode, ns;
                if ("string" == typeof tag) {
                    var Ctor;
                    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag), vnode = config.isReservedTag(tag) ? new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context) : data && data.pre || !isDef(Ctor = resolveAsset(context.$options, "components", tag)) ? new VNode(tag, data, children, void 0, void 0, context) : createComponent(Ctor, data, context, children, tag);
                } else vnode = createComponent(tag, data, context, children);
                return Array.isArray(vnode) ? vnode : isDef(vnode) ? (isDef(ns) && function applyNS(vnode, ns, force) {
                    vnode.ns = ns, "foreignObject" === vnode.tag && (ns = void 0, force = !0);
                    if (isDef(vnode.children)) for (var i = 0, l = vnode.children.length; i < l; i++) {
                        var child = vnode.children[i];
                        isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && "svg" !== child.tag) && applyNS(child, ns, force);
                    }
                }(vnode, ns), isDef(data) && function(data) {
                    isObject(data.style) && traverse(data.style);
                    isObject(data.class) && traverse(data.class);
                }(data), vnode) : createEmptyVNode();
            }(context, tag, data, children, normalizationType);
        }
        var target, currentRenderingInstance = null;
        function ensureCtor(comp, base) {
            return (comp.__esModule || hasSymbol && "Module" === comp[Symbol.toStringTag]) && (comp = comp.default), 
            isObject(comp) ? base.extend(comp) : comp;
        }
        function isAsyncPlaceholder(node) {
            return node.isComment && node.asyncFactory;
        }
        function getFirstComponentChild(children) {
            if (Array.isArray(children)) for (var i = 0; i < children.length; i++) {
                var c = children[i];
                if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) return c;
            }
        }
        function add(event, fn) {
            target.$on(event, fn);
        }
        function remove$1(event, fn) {
            target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
            var _target = target;
            return function onceHandler() {
                var res = fn.apply(null, arguments);
                null !== res && _target.$off(event, onceHandler);
            };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
            target = vm, updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm), 
            target = void 0;
        }
        var activeInstance = null;
        function setActiveInstance(vm) {
            var prevActiveInstance = activeInstance;
            return activeInstance = vm, function() {
                activeInstance = prevActiveInstance;
            };
        }
        function isInInactiveTree(vm) {
            for (;vm && (vm = vm.$parent); ) if (vm._inactive) return !0;
            return !1;
        }
        function activateChildComponent(vm, direct) {
            if (direct) {
                if (vm._directInactive = !1, isInInactiveTree(vm)) return;
            } else if (vm._directInactive) return;
            if (vm._inactive || null === vm._inactive) {
                vm._inactive = !1;
                for (var i = 0; i < vm.$children.length; i++) activateChildComponent(vm.$children[i]);
                callHook(vm, "activated");
            }
        }
        function callHook(vm, hook) {
            pushTarget();
            var handlers = vm.$options[hook], info = hook + " hook";
            if (handlers) for (var i = 0, j = handlers.length; i < j; i++) invokeWithErrorHandling(handlers[i], vm, null, vm, info);
            vm._hasHookEvent && vm.$emit("hook:" + hook), popTarget();
        }
        var queue = [], activatedChildren = [], has = {}, waiting = !1, flushing = !1, index = 0;
        var currentFlushTimestamp = 0, getNow = Date.now;
        if (inBrowser && !isIE) {
            var performance = window.performance;
            performance && "function" == typeof performance.now && getNow() > document.createEvent("Event").timeStamp && (getNow = function() {
                return performance.now();
            });
        }
        function flushSchedulerQueue() {
            var watcher, id;
            for (currentFlushTimestamp = getNow(), flushing = !0, queue.sort((function(a, b) {
                return a.id - b.id;
            })), index = 0; index < queue.length; index++) (watcher = queue[index]).before && watcher.before(), 
            id = watcher.id, has[id] = null, watcher.run();
            var activatedQueue = activatedChildren.slice(), updatedQueue = queue.slice();
            index = queue.length = activatedChildren.length = 0, has = {}, waiting = flushing = !1, 
            function(queue) {
                for (var i = 0; i < queue.length; i++) queue[i]._inactive = !0, activateChildComponent(queue[i], !0);
            }(activatedQueue), function(queue) {
                var i = queue.length;
                for (;i--; ) {
                    var watcher = queue[i], vm = watcher.vm;
                    vm._watcher === watcher && vm._isMounted && !vm._isDestroyed && callHook(vm, "updated");
                }
            }(updatedQueue), devtools && config.devtools && devtools.emit("flush");
        }
        var uid$2 = 0, Watcher = function(vm, expOrFn, cb, options, isRenderWatcher) {
            this.vm = vm, isRenderWatcher && (vm._watcher = this), vm._watchers.push(this), 
            options ? (this.deep = !!options.deep, this.user = !!options.user, this.lazy = !!options.lazy, 
            this.sync = !!options.sync, this.before = options.before) : this.deep = this.user = this.lazy = this.sync = !1, 
            this.cb = cb, this.id = ++uid$2, this.active = !0, this.dirty = this.lazy, this.deps = [], 
            this.newDeps = [], this.depIds = new _Set, this.newDepIds = new _Set, this.expression = "", 
            "function" == typeof expOrFn ? this.getter = expOrFn : (this.getter = function(path) {
                if (!bailRE.test(path)) {
                    var segments = path.split(".");
                    return function(obj) {
                        for (var i = 0; i < segments.length; i++) {
                            if (!obj) return;
                            obj = obj[segments[i]];
                        }
                        return obj;
                    };
                }
            }(expOrFn), this.getter || (this.getter = noop)), this.value = this.lazy ? void 0 : this.get();
        };
        Watcher.prototype.get = function() {
            var value;
            pushTarget(this);
            var vm = this.vm;
            try {
                value = this.getter.call(vm, vm);
            } catch (e) {
                if (!this.user) throw e;
                handleError(e, vm, 'getter for watcher "' + this.expression + '"');
            } finally {
                this.deep && traverse(value), popTarget(), this.cleanupDeps();
            }
            return value;
        }, Watcher.prototype.addDep = function(dep) {
            var id = dep.id;
            this.newDepIds.has(id) || (this.newDepIds.add(id), this.newDeps.push(dep), this.depIds.has(id) || dep.addSub(this));
        }, Watcher.prototype.cleanupDeps = function() {
            for (var i = this.deps.length; i--; ) {
                var dep = this.deps[i];
                this.newDepIds.has(dep.id) || dep.removeSub(this);
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = tmp, this.newDepIds.clear(), tmp = this.deps, 
            this.deps = this.newDeps, this.newDeps = tmp, this.newDeps.length = 0;
        }, Watcher.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(watcher) {
                var id = watcher.id;
                if (null == has[id]) {
                    if (has[id] = !0, flushing) {
                        for (var i = queue.length - 1; i > index && queue[i].id > watcher.id; ) i--;
                        queue.splice(i + 1, 0, watcher);
                    } else queue.push(watcher);
                    waiting || (waiting = !0, nextTick(flushSchedulerQueue));
                }
            }(this);
        }, Watcher.prototype.run = function() {
            if (this.active) {
                var value = this.get();
                if (value !== this.value || isObject(value) || this.deep) {
                    var oldValue = this.value;
                    if (this.value = value, this.user) try {
                        this.cb.call(this.vm, value, oldValue);
                    } catch (e) {
                        handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                    } else this.cb.call(this.vm, value, oldValue);
                }
            }
        }, Watcher.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1;
        }, Watcher.prototype.depend = function() {
            for (var i = this.deps.length; i--; ) this.deps[i].depend();
        }, Watcher.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || remove(this.vm._watchers, this);
                for (var i = this.deps.length; i--; ) this.deps[i].removeSub(this);
                this.active = !1;
            }
        };
        var sharedPropertyDefinition = {
            enumerable: !0,
            configurable: !0,
            get: noop,
            set: noop
        };
        function proxy(target, sourceKey, key) {
            sharedPropertyDefinition.get = function() {
                return this[sourceKey][key];
            }, sharedPropertyDefinition.set = function(val) {
                this[sourceKey][key] = val;
            }, Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function initState(vm) {
            vm._watchers = [];
            var opts = vm.$options;
            opts.props && function(vm, propsOptions) {
                var propsData = vm.$options.propsData || {}, props = vm._props = {}, keys = vm.$options._propKeys = [];
                vm.$parent && toggleObserving(!1);
                var loop = function(key) {
                    keys.push(key);
                    var value = validateProp(key, propsOptions, propsData, vm);
                    defineReactive$$1(props, key, value), key in vm || proxy(vm, "_props", key);
                };
                for (var key in propsOptions) loop(key);
                toggleObserving(!0);
            }(vm, opts.props), opts.methods && function(vm, methods) {
                vm.$options.props;
                for (var key in methods) vm[key] = "function" != typeof methods[key] ? noop : bind(methods[key], vm);
            }(vm, opts.methods), opts.data ? function(vm) {
                var data = vm.$options.data;
                isPlainObject(data = vm._data = "function" == typeof data ? function(data, vm) {
                    pushTarget();
                    try {
                        return data.call(vm, vm);
                    } catch (e) {
                        return handleError(e, vm, "data()"), {};
                    } finally {
                        popTarget();
                    }
                }(data, vm) : data || {}) || (data = {});
                var keys = Object.keys(data), props = vm.$options.props, i = (vm.$options.methods, 
                keys.length);
                for (;i--; ) {
                    var key = keys[i];
                    0, props && hasOwn(props, key) || isReserved(key) || proxy(vm, "_data", key);
                }
                observe(data, !0);
            }(vm) : observe(vm._data = {}, !0), opts.computed && function(vm, computed) {
                var watchers = vm._computedWatchers = Object.create(null), isSSR = isServerRendering();
                for (var key in computed) {
                    var userDef = computed[key], getter = "function" == typeof userDef ? userDef : userDef.get;
                    0, isSSR || (watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions)), 
                    key in vm || defineComputed(vm, key, userDef);
                }
            }(vm, opts.computed), opts.watch && opts.watch !== nativeWatch && function(vm, watch) {
                for (var key in watch) {
                    var handler = watch[key];
                    if (Array.isArray(handler)) for (var i = 0; i < handler.length; i++) createWatcher(vm, key, handler[i]); else createWatcher(vm, key, handler);
                }
            }(vm, opts.watch);
        }
        var computedWatcherOptions = {
            lazy: !0
        };
        function defineComputed(target, key, userDef) {
            var shouldCache = !isServerRendering();
            "function" == typeof userDef ? (sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef), 
            sharedPropertyDefinition.set = noop) : (sharedPropertyDefinition.get = userDef.get ? shouldCache && !1 !== userDef.cache ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop, 
            sharedPropertyDefinition.set = userDef.set || noop), Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
            return function() {
                var watcher = this._computedWatchers && this._computedWatchers[key];
                if (watcher) return watcher.dirty && watcher.evaluate(), Dep.target && watcher.depend(), 
                watcher.value;
            };
        }
        function createGetterInvoker(fn) {
            return function() {
                return fn.call(this, this);
            };
        }
        function createWatcher(vm, expOrFn, handler, options) {
            return isPlainObject(handler) && (options = handler, handler = handler.handler), 
            "string" == typeof handler && (handler = vm[handler]), vm.$watch(expOrFn, handler, options);
        }
        var uid$3 = 0;
        function resolveConstructorOptions(Ctor) {
            var options = Ctor.options;
            if (Ctor.super) {
                var superOptions = resolveConstructorOptions(Ctor.super);
                if (superOptions !== Ctor.superOptions) {
                    Ctor.superOptions = superOptions;
                    var modifiedOptions = function(Ctor) {
                        var modified, latest = Ctor.options, sealed = Ctor.sealedOptions;
                        for (var key in latest) latest[key] !== sealed[key] && (modified || (modified = {}), 
                        modified[key] = latest[key]);
                        return modified;
                    }(Ctor);
                    modifiedOptions && extend(Ctor.extendOptions, modifiedOptions), (options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)).name && (options.components[options.name] = Ctor);
                }
            }
            return options;
        }
        function Vue(options) {
            this._init(options);
        }
        function initExtend(Vue) {
            Vue.cid = 0;
            var cid = 1;
            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var Super = this, SuperId = Super.cid, cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                if (cachedCtors[SuperId]) return cachedCtors[SuperId];
                var name = extendOptions.name || Super.options.name;
                var Sub = function(options) {
                    this._init(options);
                };
                return (Sub.prototype = Object.create(Super.prototype)).constructor = Sub, Sub.cid = cid++, 
                Sub.options = mergeOptions(Super.options, extendOptions), Sub.super = Super, Sub.options.props && function(Comp) {
                    var props = Comp.options.props;
                    for (var key in props) proxy(Comp.prototype, "_props", key);
                }(Sub), Sub.options.computed && function(Comp) {
                    var computed = Comp.options.computed;
                    for (var key in computed) defineComputed(Comp.prototype, key, computed[key]);
                }(Sub), Sub.extend = Super.extend, Sub.mixin = Super.mixin, Sub.use = Super.use, 
                ASSET_TYPES.forEach((function(type) {
                    Sub[type] = Super[type];
                })), name && (Sub.options.components[name] = Sub), Sub.superOptions = Super.options, 
                Sub.extendOptions = extendOptions, Sub.sealedOptions = extend({}, Sub.options), 
                cachedCtors[SuperId] = Sub, Sub;
            };
        }
        function getComponentName(opts) {
            return opts && (opts.Ctor.options.name || opts.tag);
        }
        function matches(pattern, name) {
            return Array.isArray(pattern) ? pattern.indexOf(name) > -1 : "string" == typeof pattern ? pattern.split(",").indexOf(name) > -1 : !!isRegExp(pattern) && pattern.test(name);
        }
        function pruneCache(keepAliveInstance, filter) {
            var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
            for (var key in cache) {
                var cachedNode = cache[key];
                if (cachedNode) {
                    var name = getComponentName(cachedNode.componentOptions);
                    name && !filter(name) && pruneCacheEntry(cache, key, keys, _vnode);
                }
            }
        }
        function pruneCacheEntry(cache, key, keys, current) {
            var cached$$1 = cache[key];
            !cached$$1 || current && cached$$1.tag === current.tag || cached$$1.componentInstance.$destroy(), 
            cache[key] = null, remove(keys, key);
        }
        !function(Vue) {
            Vue.prototype._init = function(options) {
                var vm = this;
                vm._uid = uid$3++, vm._isVue = !0, options && options._isComponent ? function(vm, options) {
                    var opts = vm.$options = Object.create(vm.constructor.options), parentVnode = options._parentVnode;
                    opts.parent = options.parent, opts._parentVnode = parentVnode;
                    var vnodeComponentOptions = parentVnode.componentOptions;
                    opts.propsData = vnodeComponentOptions.propsData, opts._parentListeners = vnodeComponentOptions.listeners, 
                    opts._renderChildren = vnodeComponentOptions.children, opts._componentTag = vnodeComponentOptions.tag, 
                    options.render && (opts.render = options.render, opts.staticRenderFns = options.staticRenderFns);
                }(vm, options) : vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm), 
                vm._renderProxy = vm, vm._self = vm, function(vm) {
                    var options = vm.$options, parent = options.parent;
                    if (parent && !options.abstract) {
                        for (;parent.$options.abstract && parent.$parent; ) parent = parent.$parent;
                        parent.$children.push(vm);
                    }
                    vm.$parent = parent, vm.$root = parent ? parent.$root : vm, vm.$children = [], vm.$refs = {}, 
                    vm._watcher = null, vm._inactive = null, vm._directInactive = !1, vm._isMounted = !1, 
                    vm._isDestroyed = !1, vm._isBeingDestroyed = !1;
                }(vm), function(vm) {
                    vm._events = Object.create(null), vm._hasHookEvent = !1;
                    var listeners = vm.$options._parentListeners;
                    listeners && updateComponentListeners(vm, listeners);
                }(vm), function(vm) {
                    vm._vnode = null, vm._staticTrees = null;
                    var options = vm.$options, parentVnode = vm.$vnode = options._parentVnode, renderContext = parentVnode && parentVnode.context;
                    vm.$slots = resolveSlots(options._renderChildren, renderContext), vm.$scopedSlots = emptyObject, 
                    vm._c = function(a, b, c, d) {
                        return createElement(vm, a, b, c, d, !1);
                    }, vm.$createElement = function(a, b, c, d) {
                        return createElement(vm, a, b, c, d, !0);
                    };
                    var parentData = parentVnode && parentVnode.data;
                    defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, !0), 
                    defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, null, !0);
                }(vm), callHook(vm, "beforeCreate"), function(vm) {
                    var result = resolveInject(vm.$options.inject, vm);
                    result && (toggleObserving(!1), Object.keys(result).forEach((function(key) {
                        defineReactive$$1(vm, key, result[key]);
                    })), toggleObserving(!0));
                }(vm), initState(vm), function(vm) {
                    var provide = vm.$options.provide;
                    provide && (vm._provided = "function" == typeof provide ? provide.call(vm) : provide);
                }(vm), callHook(vm, "created"), vm.$options.el && vm.$mount(vm.$options.el);
            };
        }(Vue), function(Vue) {
            var dataDef = {
                get: function() {
                    return this._data;
                }
            }, propsDef = {
                get: function() {
                    return this._props;
                }
            };
            Object.defineProperty(Vue.prototype, "$data", dataDef), Object.defineProperty(Vue.prototype, "$props", propsDef), 
            Vue.prototype.$set = set, Vue.prototype.$delete = del, Vue.prototype.$watch = function(expOrFn, cb, options) {
                if (isPlainObject(cb)) return createWatcher(this, expOrFn, cb, options);
                (options = options || {}).user = !0;
                var watcher = new Watcher(this, expOrFn, cb, options);
                if (options.immediate) try {
                    cb.call(this, watcher.value);
                } catch (error) {
                    handleError(error, this, 'callback for immediate watcher "' + watcher.expression + '"');
                }
                return function() {
                    watcher.teardown();
                };
            };
        }(Vue), function(Vue) {
            var hookRE = /^hook:/;
            Vue.prototype.$on = function(event, fn) {
                var vm = this;
                if (Array.isArray(event)) for (var i = 0, l = event.length; i < l; i++) vm.$on(event[i], fn); else (vm._events[event] || (vm._events[event] = [])).push(fn), 
                hookRE.test(event) && (vm._hasHookEvent = !0);
                return vm;
            }, Vue.prototype.$once = function(event, fn) {
                var vm = this;
                function on() {
                    vm.$off(event, on), fn.apply(vm, arguments);
                }
                return on.fn = fn, vm.$on(event, on), vm;
            }, Vue.prototype.$off = function(event, fn) {
                var vm = this;
                if (!arguments.length) return vm._events = Object.create(null), vm;
                if (Array.isArray(event)) {
                    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) vm.$off(event[i$1], fn);
                    return vm;
                }
                var cb, cbs = vm._events[event];
                if (!cbs) return vm;
                if (!fn) return vm._events[event] = null, vm;
                for (var i = cbs.length; i--; ) if ((cb = cbs[i]) === fn || cb.fn === fn) {
                    cbs.splice(i, 1);
                    break;
                }
                return vm;
            }, Vue.prototype.$emit = function(event) {
                var vm = this, cbs = vm._events[event];
                if (cbs) {
                    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                    for (var args = toArray(arguments, 1), info = 'event handler for "' + event + '"', i = 0, l = cbs.length; i < l; i++) invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                }
                return vm;
            };
        }(Vue), function(Vue) {
            Vue.prototype._update = function(vnode, hydrating) {
                var vm = this, prevEl = vm.$el, prevVnode = vm._vnode, restoreActiveInstance = setActiveInstance(vm);
                vm._vnode = vnode, vm.$el = prevVnode ? vm.__patch__(prevVnode, vnode) : vm.__patch__(vm.$el, vnode, hydrating, !1), 
                restoreActiveInstance(), prevEl && (prevEl.__vue__ = null), vm.$el && (vm.$el.__vue__ = vm), 
                vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode && (vm.$parent.$el = vm.$el);
            }, Vue.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update();
            }, Vue.prototype.$destroy = function() {
                var vm = this;
                if (!vm._isBeingDestroyed) {
                    callHook(vm, "beforeDestroy"), vm._isBeingDestroyed = !0;
                    var parent = vm.$parent;
                    !parent || parent._isBeingDestroyed || vm.$options.abstract || remove(parent.$children, vm), 
                    vm._watcher && vm._watcher.teardown();
                    for (var i = vm._watchers.length; i--; ) vm._watchers[i].teardown();
                    vm._data.__ob__ && vm._data.__ob__.vmCount--, vm._isDestroyed = !0, vm.__patch__(vm._vnode, null), 
                    callHook(vm, "destroyed"), vm.$off(), vm.$el && (vm.$el.__vue__ = null), vm.$vnode && (vm.$vnode.parent = null);
                }
            };
        }(Vue), function(Vue) {
            installRenderHelpers(Vue.prototype), Vue.prototype.$nextTick = function(fn) {
                return nextTick(fn, this);
            }, Vue.prototype._render = function() {
                var vnode, vm = this, ref = vm.$options, render = ref.render, _parentVnode = ref._parentVnode;
                _parentVnode && (vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots)), 
                vm.$vnode = _parentVnode;
                try {
                    currentRenderingInstance = vm, vnode = render.call(vm._renderProxy, vm.$createElement);
                } catch (e) {
                    handleError(e, vm, "render"), vnode = vm._vnode;
                } finally {
                    currentRenderingInstance = null;
                }
                return Array.isArray(vnode) && 1 === vnode.length && (vnode = vnode[0]), vnode instanceof VNode || (vnode = createEmptyVNode()), 
                vnode.parent = _parentVnode, vnode;
            };
        }(Vue);
        var patternTypes = [ String, RegExp, Array ], builtInComponents = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: patternTypes,
                    exclude: patternTypes,
                    max: [ String, Number ]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = [];
                },
                destroyed: function() {
                    for (var key in this.cache) pruneCacheEntry(this.cache, key, this.keys);
                },
                mounted: function() {
                    var this$1 = this;
                    this.$watch("include", (function(val) {
                        pruneCache(this$1, (function(name) {
                            return matches(val, name);
                        }));
                    })), this.$watch("exclude", (function(val) {
                        pruneCache(this$1, (function(name) {
                            return !matches(val, name);
                        }));
                    }));
                },
                render: function() {
                    var slot = this.$slots.default, vnode = getFirstComponentChild(slot), componentOptions = vnode && vnode.componentOptions;
                    if (componentOptions) {
                        var name = getComponentName(componentOptions), include = this.include, exclude = this.exclude;
                        if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) return vnode;
                        var cache = this.cache, keys = this.keys, key = null == vnode.key ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                        cache[key] ? (vnode.componentInstance = cache[key].componentInstance, remove(keys, key), 
                        keys.push(key)) : (cache[key] = vnode, keys.push(key), this.max && keys.length > parseInt(this.max) && pruneCacheEntry(cache, keys[0], keys, this._vnode)), 
                        vnode.data.keepAlive = !0;
                    }
                    return vnode || slot && slot[0];
                }
            }
        };
        !function(Vue) {
            var configDef = {
                get: function() {
                    return config;
                }
            };
            Object.defineProperty(Vue, "config", configDef), Vue.util = {
                warn: warn,
                extend: extend,
                mergeOptions: mergeOptions,
                defineReactive: defineReactive$$1
            }, Vue.set = set, Vue.delete = del, Vue.nextTick = nextTick, Vue.observable = function(obj) {
                return observe(obj), obj;
            }, Vue.options = Object.create(null), ASSET_TYPES.forEach((function(type) {
                Vue.options[type + "s"] = Object.create(null);
            })), Vue.options._base = Vue, extend(Vue.options.components, builtInComponents), 
            function(Vue) {
                Vue.use = function(plugin) {
                    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
                    if (installedPlugins.indexOf(plugin) > -1) return this;
                    var args = toArray(arguments, 1);
                    return args.unshift(this), "function" == typeof plugin.install ? plugin.install.apply(plugin, args) : "function" == typeof plugin && plugin.apply(null, args), 
                    installedPlugins.push(plugin), this;
                };
            }(Vue), function(Vue) {
                Vue.mixin = function(mixin) {
                    return this.options = mergeOptions(this.options, mixin), this;
                };
            }(Vue), initExtend(Vue), function(Vue) {
                ASSET_TYPES.forEach((function(type) {
                    Vue[type] = function(id, definition) {
                        return definition ? ("component" === type && isPlainObject(definition) && (definition.name = definition.name || id, 
                        definition = this.options._base.extend(definition)), "directive" === type && "function" == typeof definition && (definition = {
                            bind: definition,
                            update: definition
                        }), this.options[type + "s"][id] = definition, definition) : this.options[type + "s"][id];
                    };
                }));
            }(Vue);
        }(Vue), Object.defineProperty(Vue.prototype, "$isServer", {
            get: isServerRendering
        }), Object.defineProperty(Vue.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext;
            }
        }), Object.defineProperty(Vue, "FunctionalRenderContext", {
            value: FunctionalRenderContext
        }), Vue.version = "2.6.11";
        var isReservedAttr = makeMap("style,class"), acceptValue = makeMap("input,textarea,option,select,progress"), mustUseProp = function(tag, type, attr) {
            return "value" === attr && acceptValue(tag) && "button" !== type || "selected" === attr && "option" === tag || "checked" === attr && "input" === tag || "muted" === attr && "video" === tag;
        }, isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck"), isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only"), isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), xlinkNS = "http://www.w3.org/1999/xlink", isXlink = function(name) {
            return ":" === name.charAt(5) && "xlink" === name.slice(0, 5);
        }, getXlinkProp = function(name) {
            return isXlink(name) ? name.slice(6, name.length) : "";
        }, isFalsyAttrValue = function(val) {
            return null == val || !1 === val;
        };
        function genClassForVnode(vnode) {
            for (var data = vnode.data, parentNode = vnode, childNode = vnode; isDef(childNode.componentInstance); ) (childNode = childNode.componentInstance._vnode) && childNode.data && (data = mergeClassData(childNode.data, data));
            for (;isDef(parentNode = parentNode.parent); ) parentNode && parentNode.data && (data = mergeClassData(data, parentNode.data));
            return function(staticClass, dynamicClass) {
                if (isDef(staticClass) || isDef(dynamicClass)) return concat(staticClass, stringifyClass(dynamicClass));
                return "";
            }(data.staticClass, data.class);
        }
        function mergeClassData(child, parent) {
            return {
                staticClass: concat(child.staticClass, parent.staticClass),
                class: isDef(child.class) ? [ child.class, parent.class ] : parent.class
            };
        }
        function concat(a, b) {
            return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
            return Array.isArray(value) ? function(value) {
                for (var stringified, res = "", i = 0, l = value.length; i < l; i++) isDef(stringified = stringifyClass(value[i])) && "" !== stringified && (res && (res += " "), 
                res += stringified);
                return res;
            }(value) : isObject(value) ? function(value) {
                var res = "";
                for (var key in value) value[key] && (res && (res += " "), res += key);
                return res;
            }(value) : "string" == typeof value ? value : "";
        }
        var namespaceMap = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        }, isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), isReservedTag = function(tag) {
            return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
            return isSVG(tag) ? "svg" : "math" === tag ? "math" : void 0;
        }
        var unknownElementCache = Object.create(null);
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        function query(el) {
            if ("string" == typeof el) {
                var selected = document.querySelector(el);
                return selected || document.createElement("div");
            }
            return el;
        }
        var nodeOps = Object.freeze({
            createElement: function(tagName, vnode) {
                var elm = document.createElement(tagName);
                return "select" !== tagName || vnode.data && vnode.data.attrs && void 0 !== vnode.data.attrs.multiple && elm.setAttribute("multiple", "multiple"), 
                elm;
            },
            createElementNS: function(namespace, tagName) {
                return document.createElementNS(namespaceMap[namespace], tagName);
            },
            createTextNode: function(text) {
                return document.createTextNode(text);
            },
            createComment: function(text) {
                return document.createComment(text);
            },
            insertBefore: function(parentNode, newNode, referenceNode) {
                parentNode.insertBefore(newNode, referenceNode);
            },
            removeChild: function(node, child) {
                node.removeChild(child);
            },
            appendChild: function(node, child) {
                node.appendChild(child);
            },
            parentNode: function(node) {
                return node.parentNode;
            },
            nextSibling: function(node) {
                return node.nextSibling;
            },
            tagName: function(node) {
                return node.tagName;
            },
            setTextContent: function(node, text) {
                node.textContent = text;
            },
            setStyleScope: function(node, scopeId) {
                node.setAttribute(scopeId, "");
            }
        }), ref = {
            create: function(_, vnode) {
                registerRef(vnode);
            },
            update: function(oldVnode, vnode) {
                oldVnode.data.ref !== vnode.data.ref && (registerRef(oldVnode, !0), registerRef(vnode));
            },
            destroy: function(vnode) {
                registerRef(vnode, !0);
            }
        };
        function registerRef(vnode, isRemoval) {
            var key = vnode.data.ref;
            if (isDef(key)) {
                var vm = vnode.context, ref = vnode.componentInstance || vnode.elm, refs = vm.$refs;
                isRemoval ? Array.isArray(refs[key]) ? remove(refs[key], ref) : refs[key] === ref && (refs[key] = void 0) : vnode.data.refInFor ? Array.isArray(refs[key]) ? refs[key].indexOf(ref) < 0 && refs[key].push(ref) : refs[key] = [ ref ] : refs[key] = ref;
            }
        }
        var emptyNode = new VNode("", {}, []), hooks = [ "create", "activate", "update", "remove", "destroy" ];
        function sameVnode(a, b) {
            return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && function(a, b) {
                if ("input" !== a.tag) return !0;
                var i, typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type, typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
            }(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
            var i, key, map = {};
            for (i = beginIdx; i <= endIdx; ++i) isDef(key = children[i].key) && (map[key] = i);
            return map;
        }
        var directives = {
            create: updateDirectives,
            update: updateDirectives,
            destroy: function(vnode) {
                updateDirectives(vnode, emptyNode);
            }
        };
        function updateDirectives(oldVnode, vnode) {
            (oldVnode.data.directives || vnode.data.directives) && function(oldVnode, vnode) {
                var key, oldDir, dir, isCreate = oldVnode === emptyNode, isDestroy = vnode === emptyNode, oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context), newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context), dirsWithInsert = [], dirsWithPostpatch = [];
                for (key in newDirs) oldDir = oldDirs[key], dir = newDirs[key], oldDir ? (dir.oldValue = oldDir.value, 
                dir.oldArg = oldDir.arg, callHook$1(dir, "update", vnode, oldVnode), dir.def && dir.def.componentUpdated && dirsWithPostpatch.push(dir)) : (callHook$1(dir, "bind", vnode, oldVnode), 
                dir.def && dir.def.inserted && dirsWithInsert.push(dir));
                if (dirsWithInsert.length) {
                    var callInsert = function() {
                        for (var i = 0; i < dirsWithInsert.length; i++) callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
                    };
                    isCreate ? mergeVNodeHook(vnode, "insert", callInsert) : callInsert();
                }
                dirsWithPostpatch.length && mergeVNodeHook(vnode, "postpatch", (function() {
                    for (var i = 0; i < dirsWithPostpatch.length; i++) callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
                }));
                if (!isCreate) for (key in oldDirs) newDirs[key] || callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
            }(oldVnode, vnode);
        }
        var emptyModifiers = Object.create(null);
        function normalizeDirectives$1(dirs, vm) {
            var i, dir, res = Object.create(null);
            if (!dirs) return res;
            for (i = 0; i < dirs.length; i++) (dir = dirs[i]).modifiers || (dir.modifiers = emptyModifiers), 
            res[getRawDirName(dir)] = dir, dir.def = resolveAsset(vm.$options, "directives", dir.name);
            return res;
        }
        function getRawDirName(dir) {
            return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
        }
        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
            var fn = dir.def && dir.def[hook];
            if (fn) try {
                fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
                handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
            }
        }
        var baseModules = [ ref, directives ];
        function updateAttrs(oldVnode, vnode) {
            var opts = vnode.componentOptions;
            if (!(isDef(opts) && !1 === opts.Ctor.options.inheritAttrs || isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs))) {
                var key, cur, elm = vnode.elm, oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
                for (key in isDef(attrs.__ob__) && (attrs = vnode.data.attrs = extend({}, attrs)), 
                attrs) cur = attrs[key], oldAttrs[key] !== cur && setAttr(elm, key, cur);
                for (key in (isIE || isEdge) && attrs.value !== oldAttrs.value && setAttr(elm, "value", attrs.value), 
                oldAttrs) isUndef(attrs[key]) && (isXlink(key) ? elm.removeAttributeNS(xlinkNS, getXlinkProp(key)) : isEnumeratedAttr(key) || elm.removeAttribute(key));
            }
        }
        function setAttr(el, key, value) {
            el.tagName.indexOf("-") > -1 ? baseSetAttr(el, key, value) : isBooleanAttr(key) ? isFalsyAttrValue(value) ? el.removeAttribute(key) : (value = "allowfullscreen" === key && "EMBED" === el.tagName ? "true" : key, 
            el.setAttribute(key, value)) : isEnumeratedAttr(key) ? el.setAttribute(key, function(key, value) {
                return isFalsyAttrValue(value) || "false" === value ? "false" : "contenteditable" === key && isValidContentEditableValue(value) ? value : "true";
            }(key, value)) : isXlink(key) ? isFalsyAttrValue(value) ? el.removeAttributeNS(xlinkNS, getXlinkProp(key)) : el.setAttributeNS(xlinkNS, key, value) : baseSetAttr(el, key, value);
        }
        function baseSetAttr(el, key, value) {
            if (isFalsyAttrValue(value)) el.removeAttribute(key); else {
                if (isIE && !isIE9 && "TEXTAREA" === el.tagName && "placeholder" === key && "" !== value && !el.__ieph) {
                    var blocker = function(e) {
                        e.stopImmediatePropagation(), el.removeEventListener("input", blocker);
                    };
                    el.addEventListener("input", blocker), el.__ieph = !0;
                }
                el.setAttribute(key, value);
            }
        }
        var attrs = {
            create: updateAttrs,
            update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
            var el = vnode.elm, data = vnode.data, oldData = oldVnode.data;
            if (!(isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
                var cls = genClassForVnode(vnode), transitionClass = el._transitionClasses;
                isDef(transitionClass) && (cls = concat(cls, stringifyClass(transitionClass))), 
                cls !== el._prevClass && (el.setAttribute("class", cls), el._prevClass = cls);
            }
        }
        var len, str, chr, index$1, expressionPos, expressionEndPos, klass = {
            create: updateClass,
            update: updateClass
        }, validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
            var c, prev, i, expression, filters, inSingle = !1, inDouble = !1, inTemplateString = !1, inRegex = !1, curly = 0, square = 0, paren = 0, lastFilterIndex = 0;
            for (i = 0; i < exp.length; i++) if (prev = c, c = exp.charCodeAt(i), inSingle) 39 === c && 92 !== prev && (inSingle = !1); else if (inDouble) 34 === c && 92 !== prev && (inDouble = !1); else if (inTemplateString) 96 === c && 92 !== prev && (inTemplateString = !1); else if (inRegex) 47 === c && 92 !== prev && (inRegex = !1); else if (124 !== c || 124 === exp.charCodeAt(i + 1) || 124 === exp.charCodeAt(i - 1) || curly || square || paren) {
                switch (c) {
                  case 34:
                    inDouble = !0;
                    break;

                  case 39:
                    inSingle = !0;
                    break;

                  case 96:
                    inTemplateString = !0;
                    break;

                  case 40:
                    paren++;
                    break;

                  case 41:
                    paren--;
                    break;

                  case 91:
                    square++;
                    break;

                  case 93:
                    square--;
                    break;

                  case 123:
                    curly++;
                    break;

                  case 125:
                    curly--;
                }
                if (47 === c) {
                    for (var j = i - 1, p = void 0; j >= 0 && " " === (p = exp.charAt(j)); j--) ;
                    p && validDivisionCharRE.test(p) || (inRegex = !0);
                }
            } else void 0 === expression ? (lastFilterIndex = i + 1, expression = exp.slice(0, i).trim()) : pushFilter();
            function pushFilter() {
                (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim()), lastFilterIndex = i + 1;
            }
            if (void 0 === expression ? expression = exp.slice(0, i).trim() : 0 !== lastFilterIndex && pushFilter(), 
            filters) for (i = 0; i < filters.length; i++) expression = wrapFilter(expression, filters[i]);
            return expression;
        }
        function wrapFilter(exp, filter) {
            var i = filter.indexOf("(");
            if (i < 0) return '_f("' + filter + '")(' + exp + ")";
            var name = filter.slice(0, i), args = filter.slice(i + 1);
            return '_f("' + name + '")(' + exp + (")" !== args ? "," + args : args);
        }
        function baseWarn(msg, range) {
            console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules, key) {
            return modules ? modules.map((function(m) {
                return m[key];
            })).filter((function(_) {
                return _;
            })) : [];
        }
        function addProp(el, name, value, range, dynamic) {
            (el.props || (el.props = [])).push(rangeSetItem({
                name: name,
                value: value,
                dynamic: dynamic
            }, range)), el.plain = !1;
        }
        function addAttr(el, name, value, range, dynamic) {
            (dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = [])).push(rangeSetItem({
                name: name,
                value: value,
                dynamic: dynamic
            }, range)), el.plain = !1;
        }
        function addRawAttr(el, name, value, range) {
            el.attrsMap[name] = value, el.attrsList.push(rangeSetItem({
                name: name,
                value: value
            }, range));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
            (el.directives || (el.directives = [])).push(rangeSetItem({
                name: name,
                rawName: rawName,
                value: value,
                arg: arg,
                isDynamicArg: isDynamicArg,
                modifiers: modifiers
            }, range)), el.plain = !1;
        }
        function prependModifierMarker(symbol, name, dynamic) {
            return dynamic ? "_p(" + name + ',"' + symbol + '")' : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
            var events;
            (modifiers = modifiers || emptyObject).right ? dynamic ? name = "(" + name + ")==='click'?'contextmenu':(" + name + ")" : "click" === name && (name = "contextmenu", 
            delete modifiers.right) : modifiers.middle && (dynamic ? name = "(" + name + ")==='click'?'mouseup':(" + name + ")" : "click" === name && (name = "mouseup")), 
            modifiers.capture && (delete modifiers.capture, name = prependModifierMarker("!", name, dynamic)), 
            modifiers.once && (delete modifiers.once, name = prependModifierMarker("~", name, dynamic)), 
            modifiers.passive && (delete modifiers.passive, name = prependModifierMarker("&", name, dynamic)), 
            modifiers.native ? (delete modifiers.native, events = el.nativeEvents || (el.nativeEvents = {})) : events = el.events || (el.events = {});
            var newHandler = rangeSetItem({
                value: value.trim(),
                dynamic: dynamic
            }, range);
            modifiers !== emptyObject && (newHandler.modifiers = modifiers);
            var handlers = events[name];
            Array.isArray(handlers) ? important ? handlers.unshift(newHandler) : handlers.push(newHandler) : events[name] = handlers ? important ? [ newHandler, handlers ] : [ handlers, newHandler ] : newHandler, 
            el.plain = !1;
        }
        function getBindingAttr(el, name, getStatic) {
            var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
            if (null != dynamicValue) return parseFilters(dynamicValue);
            if (!1 !== getStatic) {
                var staticValue = getAndRemoveAttr(el, name);
                if (null != staticValue) return JSON.stringify(staticValue);
            }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
            var val;
            if (null != (val = el.attrsMap[name])) for (var list = el.attrsList, i = 0, l = list.length; i < l; i++) if (list[i].name === name) {
                list.splice(i, 1);
                break;
            }
            return removeFromMap && delete el.attrsMap[name], val;
        }
        function getAndRemoveAttrByRegex(el, name) {
            for (var list = el.attrsList, i = 0, l = list.length; i < l; i++) {
                var attr = list[i];
                if (name.test(attr.name)) return list.splice(i, 1), attr;
            }
        }
        function rangeSetItem(item, range) {
            return range && (null != range.start && (item.start = range.start), null != range.end && (item.end = range.end)), 
            item;
        }
        function genComponentModel(el, value, modifiers) {
            var ref = modifiers || {}, number = ref.number, valueExpression = "$$v";
            ref.trim && (valueExpression = "(typeof $$v === 'string'? $$v.trim(): $$v)"), number && (valueExpression = "_n(" + valueExpression + ")");
            var assignment = genAssignmentCode(value, valueExpression);
            el.model = {
                value: "(" + value + ")",
                expression: JSON.stringify(value),
                callback: "function ($$v) {" + assignment + "}"
            };
        }
        function genAssignmentCode(value, assignment) {
            var res = function(val) {
                if (val = val.trim(), len = val.length, val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) return (index$1 = val.lastIndexOf(".")) > -1 ? {
                    exp: val.slice(0, index$1),
                    key: '"' + val.slice(index$1 + 1) + '"'
                } : {
                    exp: val,
                    key: null
                };
                str = val, index$1 = expressionPos = expressionEndPos = 0;
                for (;!eof(); ) isStringStart(chr = next()) ? parseString(chr) : 91 === chr && parseBracket(chr);
                return {
                    exp: val.slice(0, expressionPos),
                    key: val.slice(expressionPos + 1, expressionEndPos)
                };
            }(value);
            return null === res.key ? value + "=" + assignment : "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
        }
        function next() {
            return str.charCodeAt(++index$1);
        }
        function eof() {
            return index$1 >= len;
        }
        function isStringStart(chr) {
            return 34 === chr || 39 === chr;
        }
        function parseBracket(chr) {
            var inBracket = 1;
            for (expressionPos = index$1; !eof(); ) if (isStringStart(chr = next())) parseString(chr); else if (91 === chr && inBracket++, 
            93 === chr && inBracket--, 0 === inBracket) {
                expressionEndPos = index$1;
                break;
            }
        }
        function parseString(chr) {
            for (var stringQuote = chr; !eof() && (chr = next()) !== stringQuote; ) ;
        }
        var target$1;
        function createOnceHandler$1(event, handler, capture) {
            var _target = target$1;
            return function onceHandler() {
                var res = handler.apply(null, arguments);
                null !== res && remove$2(event, onceHandler, capture, _target);
            };
        }
        var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
        function add$1(name, handler, capture, passive) {
            if (useMicrotaskFix) {
                var attachedTimestamp = currentFlushTimestamp, original = handler;
                handler = original._wrapper = function(e) {
                    if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) return original.apply(this, arguments);
                };
            }
            target$1.addEventListener(name, handler, supportsPassive ? {
                capture: capture,
                passive: passive
            } : capture);
        }
        function remove$2(name, handler, capture, _target) {
            (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
        }
        function updateDOMListeners(oldVnode, vnode) {
            if (!isUndef(oldVnode.data.on) || !isUndef(vnode.data.on)) {
                var on = vnode.data.on || {}, oldOn = oldVnode.data.on || {};
                target$1 = vnode.elm, function(on) {
                    if (isDef(on.__r)) {
                        var event = isIE ? "change" : "input";
                        on[event] = [].concat(on.__r, on[event] || []), delete on.__r;
                    }
                    isDef(on.__c) && (on.change = [].concat(on.__c, on.change || []), delete on.__c);
                }(on), updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context), 
                target$1 = void 0;
            }
        }
        var svgContainer, events = {
            create: updateDOMListeners,
            update: updateDOMListeners
        };
        function updateDOMProps(oldVnode, vnode) {
            if (!isUndef(oldVnode.data.domProps) || !isUndef(vnode.data.domProps)) {
                var key, cur, elm = vnode.elm, oldProps = oldVnode.data.domProps || {}, props = vnode.data.domProps || {};
                for (key in isDef(props.__ob__) && (props = vnode.data.domProps = extend({}, props)), 
                oldProps) key in props || (elm[key] = "");
                for (key in props) {
                    if (cur = props[key], "textContent" === key || "innerHTML" === key) {
                        if (vnode.children && (vnode.children.length = 0), cur === oldProps[key]) continue;
                        1 === elm.childNodes.length && elm.removeChild(elm.childNodes[0]);
                    }
                    if ("value" === key && "PROGRESS" !== elm.tagName) {
                        elm._value = cur;
                        var strCur = isUndef(cur) ? "" : String(cur);
                        shouldUpdateValue(elm, strCur) && (elm.value = strCur);
                    } else if ("innerHTML" === key && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
                        (svgContainer = svgContainer || document.createElement("div")).innerHTML = "<svg>" + cur + "</svg>";
                        for (var svg = svgContainer.firstChild; elm.firstChild; ) elm.removeChild(elm.firstChild);
                        for (;svg.firstChild; ) elm.appendChild(svg.firstChild);
                    } else if (cur !== oldProps[key]) try {
                        elm[key] = cur;
                    } catch (e) {}
                }
            }
        }
        function shouldUpdateValue(elm, checkVal) {
            return !elm.composing && ("OPTION" === elm.tagName || function(elm, checkVal) {
                var notInFocus = !0;
                try {
                    notInFocus = document.activeElement !== elm;
                } catch (e) {}
                return notInFocus && elm.value !== checkVal;
            }(elm, checkVal) || function(elm, newVal) {
                var value = elm.value, modifiers = elm._vModifiers;
                if (isDef(modifiers)) {
                    if (modifiers.number) return toNumber(value) !== toNumber(newVal);
                    if (modifiers.trim) return value.trim() !== newVal.trim();
                }
                return value !== newVal;
            }(elm, checkVal));
        }
        var domProps = {
            create: updateDOMProps,
            update: updateDOMProps
        }, parseStyleText = cached((function(cssText) {
            var res = {}, propertyDelimiter = /:(.+)/;
            return cssText.split(/;(?![^(]*\))/g).forEach((function(item) {
                if (item) {
                    var tmp = item.split(propertyDelimiter);
                    tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                }
            })), res;
        }));
        function normalizeStyleData(data) {
            var style = normalizeStyleBinding(data.style);
            return data.staticStyle ? extend(data.staticStyle, style) : style;
        }
        function normalizeStyleBinding(bindingStyle) {
            return Array.isArray(bindingStyle) ? toObject(bindingStyle) : "string" == typeof bindingStyle ? parseStyleText(bindingStyle) : bindingStyle;
        }
        var emptyStyle, cssVarRE = /^--/, importantRE = /\s*!important$/, setProp = function(el, name, val) {
            if (cssVarRE.test(name)) el.style.setProperty(name, val); else if (importantRE.test(val)) el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important"); else {
                var normalizedName = normalize(name);
                if (Array.isArray(val)) for (var i = 0, len = val.length; i < len; i++) el.style[normalizedName] = val[i]; else el.style[normalizedName] = val;
            }
        }, vendorNames = [ "Webkit", "Moz", "ms" ], normalize = cached((function(prop) {
            if (emptyStyle = emptyStyle || document.createElement("div").style, "filter" !== (prop = camelize(prop)) && prop in emptyStyle) return prop;
            for (var capName = prop.charAt(0).toUpperCase() + prop.slice(1), i = 0; i < vendorNames.length; i++) {
                var name = vendorNames[i] + capName;
                if (name in emptyStyle) return name;
            }
        }));
        function updateStyle(oldVnode, vnode) {
            var data = vnode.data, oldData = oldVnode.data;
            if (!(isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style))) {
                var cur, name, el = vnode.elm, oldStaticStyle = oldData.staticStyle, oldStyleBinding = oldData.normalizedStyle || oldData.style || {}, oldStyle = oldStaticStyle || oldStyleBinding, style = normalizeStyleBinding(vnode.data.style) || {};
                vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
                var newStyle = function(vnode, checkChild) {
                    var styleData, res = {};
                    if (checkChild) for (var childNode = vnode; childNode.componentInstance; ) (childNode = childNode.componentInstance._vnode) && childNode.data && (styleData = normalizeStyleData(childNode.data)) && extend(res, styleData);
                    (styleData = normalizeStyleData(vnode.data)) && extend(res, styleData);
                    for (var parentNode = vnode; parentNode = parentNode.parent; ) parentNode.data && (styleData = normalizeStyleData(parentNode.data)) && extend(res, styleData);
                    return res;
                }(vnode, !0);
                for (name in oldStyle) isUndef(newStyle[name]) && setProp(el, name, "");
                for (name in newStyle) (cur = newStyle[name]) !== oldStyle[name] && setProp(el, name, null == cur ? "" : cur);
            }
        }
        var style = {
            create: updateStyle,
            update: updateStyle
        }, whitespaceRE = /\s+/;
        function addClass(el, cls) {
            if (cls && (cls = cls.trim())) if (el.classList) cls.indexOf(" ") > -1 ? cls.split(whitespaceRE).forEach((function(c) {
                return el.classList.add(c);
            })) : el.classList.add(cls); else {
                var cur = " " + (el.getAttribute("class") || "") + " ";
                cur.indexOf(" " + cls + " ") < 0 && el.setAttribute("class", (cur + cls).trim());
            }
        }
        function removeClass(el, cls) {
            if (cls && (cls = cls.trim())) if (el.classList) cls.indexOf(" ") > -1 ? cls.split(whitespaceRE).forEach((function(c) {
                return el.classList.remove(c);
            })) : el.classList.remove(cls), el.classList.length || el.removeAttribute("class"); else {
                for (var cur = " " + (el.getAttribute("class") || "") + " ", tar = " " + cls + " "; cur.indexOf(tar) >= 0; ) cur = cur.replace(tar, " ");
                (cur = cur.trim()) ? el.setAttribute("class", cur) : el.removeAttribute("class");
            }
        }
        function resolveTransition(def$$1) {
            if (def$$1) {
                if ("object" == typeof def$$1) {
                    var res = {};
                    return !1 !== def$$1.css && extend(res, autoCssTransition(def$$1.name || "v")), 
                    extend(res, def$$1), res;
                }
                return "string" == typeof def$$1 ? autoCssTransition(def$$1) : void 0;
            }
        }
        var autoCssTransition = cached((function(name) {
            return {
                enterClass: name + "-enter",
                enterToClass: name + "-enter-to",
                enterActiveClass: name + "-enter-active",
                leaveClass: name + "-leave",
                leaveToClass: name + "-leave-to",
                leaveActiveClass: name + "-leave-active"
            };
        })), hasTransition = inBrowser && !isIE9, transitionProp = "transition", transitionEndEvent = "transitionend", animationProp = "animation", animationEndEvent = "animationend";
        hasTransition && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (transitionProp = "WebkitTransition", 
        transitionEndEvent = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (animationProp = "WebkitAnimation", 
        animationEndEvent = "webkitAnimationEnd"));
        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
            return fn();
        };
        function nextFrame(fn) {
            raf((function() {
                raf(fn);
            }));
        }
        function addTransitionClass(el, cls) {
            var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
            transitionClasses.indexOf(cls) < 0 && (transitionClasses.push(cls), addClass(el, cls));
        }
        function removeTransitionClass(el, cls) {
            el._transitionClasses && remove(el._transitionClasses, cls), removeClass(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
            var ref = getTransitionInfo(el, expectedType), type = ref.type, timeout = ref.timeout, propCount = ref.propCount;
            if (!type) return cb();
            var event = "transition" === type ? transitionEndEvent : animationEndEvent, ended = 0, end = function() {
                el.removeEventListener(event, onEnd), cb();
            }, onEnd = function(e) {
                e.target === el && ++ended >= propCount && end();
            };
            setTimeout((function() {
                ended < propCount && end();
            }), timeout + 1), el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
            var type, styles = window.getComputedStyle(el), transitionDelays = (styles[transitionProp + "Delay"] || "").split(", "), transitionDurations = (styles[transitionProp + "Duration"] || "").split(", "), transitionTimeout = getTimeout(transitionDelays, transitionDurations), animationDelays = (styles[animationProp + "Delay"] || "").split(", "), animationDurations = (styles[animationProp + "Duration"] || "").split(", "), animationTimeout = getTimeout(animationDelays, animationDurations), timeout = 0, propCount = 0;
            return "transition" === expectedType ? transitionTimeout > 0 && (type = "transition", 
            timeout = transitionTimeout, propCount = transitionDurations.length) : "animation" === expectedType ? animationTimeout > 0 && (type = "animation", 
            timeout = animationTimeout, propCount = animationDurations.length) : propCount = (type = (timeout = Math.max(transitionTimeout, animationTimeout)) > 0 ? transitionTimeout > animationTimeout ? "transition" : "animation" : null) ? "transition" === type ? transitionDurations.length : animationDurations.length : 0, 
            {
                type: type,
                timeout: timeout,
                propCount: propCount,
                hasTransform: "transition" === type && transformRE.test(styles[transitionProp + "Property"])
            };
        }
        function getTimeout(delays, durations) {
            for (;delays.length < durations.length; ) delays = delays.concat(delays);
            return Math.max.apply(null, durations.map((function(d, i) {
                return toMs(d) + toMs(delays[i]);
            })));
        }
        function toMs(s) {
            return 1e3 * Number(s.slice(0, -1).replace(",", "."));
        }
        function enter(vnode, toggleDisplay) {
            var el = vnode.elm;
            isDef(el._leaveCb) && (el._leaveCb.cancelled = !0, el._leaveCb());
            var data = resolveTransition(vnode.data.transition);
            if (!isUndef(data) && !isDef(el._enterCb) && 1 === el.nodeType) {
                for (var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration, context = activeInstance, transitionNode = activeInstance.$vnode; transitionNode && transitionNode.parent; ) context = transitionNode.context, 
                transitionNode = transitionNode.parent;
                var isAppear = !context._isMounted || !vnode.isRootInsert;
                if (!isAppear || appear || "" === appear) {
                    var startClass = isAppear && appearClass ? appearClass : enterClass, activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass, toClass = isAppear && appearToClass ? appearToClass : enterToClass, beforeEnterHook = isAppear && beforeAppear || beforeEnter, enterHook = isAppear && "function" == typeof appear ? appear : enter, afterEnterHook = isAppear && afterAppear || afterEnter, enterCancelledHook = isAppear && appearCancelled || enterCancelled, explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
                    0;
                    var expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(enterHook), cb = el._enterCb = once((function() {
                        expectsCSS && (removeTransitionClass(el, toClass), removeTransitionClass(el, activeClass)), 
                        cb.cancelled ? (expectsCSS && removeTransitionClass(el, startClass), enterCancelledHook && enterCancelledHook(el)) : afterEnterHook && afterEnterHook(el), 
                        el._enterCb = null;
                    }));
                    vnode.data.show || mergeVNodeHook(vnode, "insert", (function() {
                        var parent = el.parentNode, pendingNode = parent && parent._pending && parent._pending[vnode.key];
                        pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb && pendingNode.elm._leaveCb(), 
                        enterHook && enterHook(el, cb);
                    })), beforeEnterHook && beforeEnterHook(el), expectsCSS && (addTransitionClass(el, startClass), 
                    addTransitionClass(el, activeClass), nextFrame((function() {
                        removeTransitionClass(el, startClass), cb.cancelled || (addTransitionClass(el, toClass), 
                        userWantsControl || (isValidDuration(explicitEnterDuration) ? setTimeout(cb, explicitEnterDuration) : whenTransitionEnds(el, type, cb)));
                    }))), vnode.data.show && (toggleDisplay && toggleDisplay(), enterHook && enterHook(el, cb)), 
                    expectsCSS || userWantsControl || cb();
                }
            }
        }
        function leave(vnode, rm) {
            var el = vnode.elm;
            isDef(el._enterCb) && (el._enterCb.cancelled = !0, el._enterCb());
            var data = resolveTransition(vnode.data.transition);
            if (isUndef(data) || 1 !== el.nodeType) return rm();
            if (!isDef(el._leaveCb)) {
                var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration, expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(leave), explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
                0;
                var cb = el._leaveCb = once((function() {
                    el.parentNode && el.parentNode._pending && (el.parentNode._pending[vnode.key] = null), 
                    expectsCSS && (removeTransitionClass(el, leaveToClass), removeTransitionClass(el, leaveActiveClass)), 
                    cb.cancelled ? (expectsCSS && removeTransitionClass(el, leaveClass), leaveCancelled && leaveCancelled(el)) : (rm(), 
                    afterLeave && afterLeave(el)), el._leaveCb = null;
                }));
                delayLeave ? delayLeave(performLeave) : performLeave();
            }
            function performLeave() {
                cb.cancelled || (!vnode.data.show && el.parentNode && ((el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode), 
                beforeLeave && beforeLeave(el), expectsCSS && (addTransitionClass(el, leaveClass), 
                addTransitionClass(el, leaveActiveClass), nextFrame((function() {
                    removeTransitionClass(el, leaveClass), cb.cancelled || (addTransitionClass(el, leaveToClass), 
                    userWantsControl || (isValidDuration(explicitLeaveDuration) ? setTimeout(cb, explicitLeaveDuration) : whenTransitionEnds(el, type, cb)));
                }))), leave && leave(el, cb), expectsCSS || userWantsControl || cb());
            }
        }
        function isValidDuration(val) {
            return "number" == typeof val && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
            if (isUndef(fn)) return !1;
            var invokerFns = fn.fns;
            return isDef(invokerFns) ? getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns) : (fn._length || fn.length) > 1;
        }
        function _enter(_, vnode) {
            !0 !== vnode.data.show && enter(vnode);
        }
        var patch = function(backend) {
            var i, j, cbs = {}, modules = backend.modules, nodeOps = backend.nodeOps;
            for (i = 0; i < hooks.length; ++i) for (cbs[hooks[i]] = [], j = 0; j < modules.length; ++j) isDef(modules[j][hooks[i]]) && cbs[hooks[i]].push(modules[j][hooks[i]]);
            function removeNode(el) {
                var parent = nodeOps.parentNode(el);
                isDef(parent) && nodeOps.removeChild(parent, el);
            }
            function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
                if (isDef(vnode.elm) && isDef(ownerArray) && (vnode = ownerArray[index] = cloneVNode(vnode)), 
                vnode.isRootInsert = !nested, !function(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i = vnode.data;
                    if (isDef(i)) {
                        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                        if (isDef(i = i.hook) && isDef(i = i.init) && i(vnode, !1), isDef(vnode.componentInstance)) return initComponent(vnode, insertedVnodeQueue), 
                        insert(parentElm, vnode.elm, refElm), isTrue(isReactivated) && function(vnode, insertedVnodeQueue, parentElm, refElm) {
                            var i, innerNode = vnode;
                            for (;innerNode.componentInstance; ) if (innerNode = innerNode.componentInstance._vnode, 
                            isDef(i = innerNode.data) && isDef(i = i.transition)) {
                                for (i = 0; i < cbs.activate.length; ++i) cbs.activate[i](emptyNode, innerNode);
                                insertedVnodeQueue.push(innerNode);
                                break;
                            }
                            insert(parentElm, vnode.elm, refElm);
                        }(vnode, insertedVnodeQueue, parentElm, refElm), !0;
                    }
                }(vnode, insertedVnodeQueue, parentElm, refElm)) {
                    var data = vnode.data, children = vnode.children, tag = vnode.tag;
                    isDef(tag) ? (vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode), 
                    setScope(vnode), createChildren(vnode, children, insertedVnodeQueue), isDef(data) && invokeCreateHooks(vnode, insertedVnodeQueue), 
                    insert(parentElm, vnode.elm, refElm)) : isTrue(vnode.isComment) ? (vnode.elm = nodeOps.createComment(vnode.text), 
                    insert(parentElm, vnode.elm, refElm)) : (vnode.elm = nodeOps.createTextNode(vnode.text), 
                    insert(parentElm, vnode.elm, refElm));
                }
            }
            function initComponent(vnode, insertedVnodeQueue) {
                isDef(vnode.data.pendingInsert) && (insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert), 
                vnode.data.pendingInsert = null), vnode.elm = vnode.componentInstance.$el, isPatchable(vnode) ? (invokeCreateHooks(vnode, insertedVnodeQueue), 
                setScope(vnode)) : (registerRef(vnode), insertedVnodeQueue.push(vnode));
            }
            function insert(parent, elm, ref$$1) {
                isDef(parent) && (isDef(ref$$1) ? nodeOps.parentNode(ref$$1) === parent && nodeOps.insertBefore(parent, elm, ref$$1) : nodeOps.appendChild(parent, elm));
            }
            function createChildren(vnode, children, insertedVnodeQueue) {
                if (Array.isArray(children)) {
                    0;
                    for (var i = 0; i < children.length; ++i) createElm(children[i], insertedVnodeQueue, vnode.elm, null, !0, children, i);
                } else isPrimitive(vnode.text) && nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
            }
            function isPatchable(vnode) {
                for (;vnode.componentInstance; ) vnode = vnode.componentInstance._vnode;
                return isDef(vnode.tag);
            }
            function invokeCreateHooks(vnode, insertedVnodeQueue) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, vnode);
                isDef(i = vnode.data.hook) && (isDef(i.create) && i.create(emptyNode, vnode), isDef(i.insert) && insertedVnodeQueue.push(vnode));
            }
            function setScope(vnode) {
                var i;
                if (isDef(i = vnode.fnScopeId)) nodeOps.setStyleScope(vnode.elm, i); else for (var ancestor = vnode; ancestor; ) isDef(i = ancestor.context) && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i), 
                ancestor = ancestor.parent;
                isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i);
            }
            function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                for (;startIdx <= endIdx; ++startIdx) createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, !1, vnodes, startIdx);
            }
            function invokeDestroyHook(vnode) {
                var i, j, data = vnode.data;
                if (isDef(data)) for (isDef(i = data.hook) && isDef(i = i.destroy) && i(vnode), 
                i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
                if (isDef(i = vnode.children)) for (j = 0; j < vnode.children.length; ++j) invokeDestroyHook(vnode.children[j]);
            }
            function removeVnodes(vnodes, startIdx, endIdx) {
                for (;startIdx <= endIdx; ++startIdx) {
                    var ch = vnodes[startIdx];
                    isDef(ch) && (isDef(ch.tag) ? (removeAndInvokeRemoveHook(ch), invokeDestroyHook(ch)) : removeNode(ch.elm));
                }
            }
            function removeAndInvokeRemoveHook(vnode, rm) {
                if (isDef(rm) || isDef(vnode.data)) {
                    var i, listeners = cbs.remove.length + 1;
                    for (isDef(rm) ? rm.listeners += listeners : rm = function(childElm, listeners) {
                        function remove$$1() {
                            0 == --remove$$1.listeners && removeNode(childElm);
                        }
                        return remove$$1.listeners = listeners, remove$$1;
                    }(vnode.elm, listeners), isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data) && removeAndInvokeRemoveHook(i, rm), 
                    i = 0; i < cbs.remove.length; ++i) cbs.remove[i](vnode, rm);
                    isDef(i = vnode.data.hook) && isDef(i = i.remove) ? i(vnode, rm) : rm();
                } else removeNode(vnode.elm);
            }
            function findIdxInOld(node, oldCh, start, end) {
                for (var i = start; i < end; i++) {
                    var c = oldCh[i];
                    if (isDef(c) && sameVnode(node, c)) return i;
                }
            }
            function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
                if (oldVnode !== vnode) {
                    isDef(vnode.elm) && isDef(ownerArray) && (vnode = ownerArray[index] = cloneVNode(vnode));
                    var elm = vnode.elm = oldVnode.elm;
                    if (isTrue(oldVnode.isAsyncPlaceholder)) isDef(vnode.asyncFactory.resolved) ? hydrate(oldVnode.elm, vnode, insertedVnodeQueue) : vnode.isAsyncPlaceholder = !0; else if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) vnode.componentInstance = oldVnode.componentInstance; else {
                        var i, data = vnode.data;
                        isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch) && i(oldVnode, vnode);
                        var oldCh = oldVnode.children, ch = vnode.children;
                        if (isDef(data) && isPatchable(vnode)) {
                            for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
                            isDef(i = data.hook) && isDef(i = i.update) && i(oldVnode, vnode);
                        }
                        isUndef(vnode.text) ? isDef(oldCh) && isDef(ch) ? oldCh !== ch && function(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                            var oldKeyToIdx, idxInOld, vnodeToMove, oldStartIdx = 0, newStartIdx = 0, oldEndIdx = oldCh.length - 1, oldStartVnode = oldCh[0], oldEndVnode = oldCh[oldEndIdx], newEndIdx = newCh.length - 1, newStartVnode = newCh[0], newEndVnode = newCh[newEndIdx], canMove = !removeOnly;
                            for (0; oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx; ) isUndef(oldStartVnode) ? oldStartVnode = oldCh[++oldStartIdx] : isUndef(oldEndVnode) ? oldEndVnode = oldCh[--oldEndIdx] : sameVnode(oldStartVnode, newStartVnode) ? (patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                            oldStartVnode = oldCh[++oldStartIdx], newStartVnode = newCh[++newStartIdx]) : sameVnode(oldEndVnode, newEndVnode) ? (patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx), 
                            oldEndVnode = oldCh[--oldEndIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldStartVnode, newEndVnode) ? (patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx), 
                            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm)), 
                            oldStartVnode = oldCh[++oldStartIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldEndVnode, newStartVnode) ? (patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm), 
                            oldEndVnode = oldCh[--oldEndIdx], newStartVnode = newCh[++newStartIdx]) : (isUndef(oldKeyToIdx) && (oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)), 
                            isUndef(idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)) ? createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx) : sameVnode(vnodeToMove = oldCh[idxInOld], newStartVnode) ? (patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                            oldCh[idxInOld] = void 0, canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)) : createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx), 
                            newStartVnode = newCh[++newStartIdx]);
                            oldStartIdx > oldEndIdx ? addVnodes(parentElm, isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue) : newStartIdx > newEndIdx && removeVnodes(oldCh, oldStartIdx, oldEndIdx);
                        }(elm, oldCh, ch, insertedVnodeQueue, removeOnly) : isDef(ch) ? (isDef(oldVnode.text) && nodeOps.setTextContent(elm, ""), 
                        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)) : isDef(oldCh) ? removeVnodes(oldCh, 0, oldCh.length - 1) : isDef(oldVnode.text) && nodeOps.setTextContent(elm, "") : oldVnode.text !== vnode.text && nodeOps.setTextContent(elm, vnode.text), 
                        isDef(data) && isDef(i = data.hook) && isDef(i = i.postpatch) && i(oldVnode, vnode);
                    }
                }
            }
            function invokeInsertHook(vnode, queue, initial) {
                if (isTrue(initial) && isDef(vnode.parent)) vnode.parent.data.pendingInsert = queue; else for (var i = 0; i < queue.length; ++i) queue[i].data.hook.insert(queue[i]);
            }
            var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
            function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
                var i, tag = vnode.tag, data = vnode.data, children = vnode.children;
                if (inVPre = inVPre || data && data.pre, vnode.elm = elm, isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) return vnode.isAsyncPlaceholder = !0, 
                !0;
                if (isDef(data) && (isDef(i = data.hook) && isDef(i = i.init) && i(vnode, !0), isDef(i = vnode.componentInstance))) return initComponent(vnode, insertedVnodeQueue), 
                !0;
                if (isDef(tag)) {
                    if (isDef(children)) if (elm.hasChildNodes()) if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                        if (i !== elm.innerHTML) return !1;
                    } else {
                        for (var childrenMatch = !0, childNode = elm.firstChild, i$1 = 0; i$1 < children.length; i$1++) {
                            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                                childrenMatch = !1;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        if (!childrenMatch || childNode) return !1;
                    } else createChildren(vnode, children, insertedVnodeQueue);
                    if (isDef(data)) {
                        var fullInvoke = !1;
                        for (var key in data) if (!isRenderedModule(key)) {
                            fullInvoke = !0, invokeCreateHooks(vnode, insertedVnodeQueue);
                            break;
                        }
                        !fullInvoke && data.class && traverse(data.class);
                    }
                } else elm.data !== vnode.text && (elm.data = vnode.text);
                return !0;
            }
            return function(oldVnode, vnode, hydrating, removeOnly) {
                if (!isUndef(vnode)) {
                    var elm, isInitialPatch = !1, insertedVnodeQueue = [];
                    if (isUndef(oldVnode)) isInitialPatch = !0, createElm(vnode, insertedVnodeQueue); else {
                        var isRealElement = isDef(oldVnode.nodeType);
                        if (!isRealElement && sameVnode(oldVnode, vnode)) patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly); else {
                            if (isRealElement) {
                                if (1 === oldVnode.nodeType && oldVnode.hasAttribute("data-server-rendered") && (oldVnode.removeAttribute("data-server-rendered"), 
                                hydrating = !0), isTrue(hydrating) && hydrate(oldVnode, vnode, insertedVnodeQueue)) return invokeInsertHook(vnode, insertedVnodeQueue, !0), 
                                oldVnode;
                                elm = oldVnode, oldVnode = new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], void 0, elm);
                            }
                            var oldElm = oldVnode.elm, parentElm = nodeOps.parentNode(oldElm);
                            if (createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)), 
                            isDef(vnode.parent)) for (var ancestor = vnode.parent, patchable = isPatchable(vnode); ancestor; ) {
                                for (var i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](ancestor);
                                if (ancestor.elm = vnode.elm, patchable) {
                                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, ancestor);
                                    var insert = ancestor.data.hook.insert;
                                    if (insert.merged) for (var i$2 = 1; i$2 < insert.fns.length; i$2++) insert.fns[i$2]();
                                } else registerRef(ancestor);
                                ancestor = ancestor.parent;
                            }
                            isDef(parentElm) ? removeVnodes([ oldVnode ], 0, 0) : isDef(oldVnode.tag) && invokeDestroyHook(oldVnode);
                        }
                    }
                    return invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch), vnode.elm;
                }
                isDef(oldVnode) && invokeDestroyHook(oldVnode);
            };
        }({
            nodeOps: nodeOps,
            modules: [ attrs, klass, events, domProps, style, inBrowser ? {
                create: _enter,
                activate: _enter,
                remove: function(vnode, rm) {
                    !0 !== vnode.data.show ? leave(vnode, rm) : rm();
                }
            } : {} ].concat(baseModules)
        });
        isIE9 && document.addEventListener("selectionchange", (function() {
            var el = document.activeElement;
            el && el.vmodel && trigger(el, "input");
        }));
        var directive = {
            inserted: function(el, binding, vnode, oldVnode) {
                "select" === vnode.tag ? (oldVnode.elm && !oldVnode.elm._vOptions ? mergeVNodeHook(vnode, "postpatch", (function() {
                    directive.componentUpdated(el, binding, vnode);
                })) : setSelected(el, binding, vnode.context), el._vOptions = [].map.call(el.options, getValue)) : ("textarea" === vnode.tag || isTextInputType(el.type)) && (el._vModifiers = binding.modifiers, 
                binding.modifiers.lazy || (el.addEventListener("compositionstart", onCompositionStart), 
                el.addEventListener("compositionend", onCompositionEnd), el.addEventListener("change", onCompositionEnd), 
                isIE9 && (el.vmodel = !0)));
            },
            componentUpdated: function(el, binding, vnode) {
                if ("select" === vnode.tag) {
                    setSelected(el, binding, vnode.context);
                    var prevOptions = el._vOptions, curOptions = el._vOptions = [].map.call(el.options, getValue);
                    if (curOptions.some((function(o, i) {
                        return !looseEqual(o, prevOptions[i]);
                    }))) (el.multiple ? binding.value.some((function(v) {
                        return hasNoMatchingOption(v, curOptions);
                    })) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)) && trigger(el, "change");
                }
            }
        };
        function setSelected(el, binding, vm) {
            actuallySetSelected(el, binding, vm), (isIE || isEdge) && setTimeout((function() {
                actuallySetSelected(el, binding, vm);
            }), 0);
        }
        function actuallySetSelected(el, binding, vm) {
            var value = binding.value, isMultiple = el.multiple;
            if (!isMultiple || Array.isArray(value)) {
                for (var selected, option, i = 0, l = el.options.length; i < l; i++) if (option = el.options[i], 
                isMultiple) selected = looseIndexOf(value, getValue(option)) > -1, option.selected !== selected && (option.selected = selected); else if (looseEqual(getValue(option), value)) return void (el.selectedIndex !== i && (el.selectedIndex = i));
                isMultiple || (el.selectedIndex = -1);
            }
        }
        function hasNoMatchingOption(value, options) {
            return options.every((function(o) {
                return !looseEqual(o, value);
            }));
        }
        function getValue(option) {
            return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
            e.target.composing = !0;
        }
        function onCompositionEnd(e) {
            e.target.composing && (e.target.composing = !1, trigger(e.target, "input"));
        }
        function trigger(el, type) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(type, !0, !0), el.dispatchEvent(e);
        }
        function locateNode(vnode) {
            return !vnode.componentInstance || vnode.data && vnode.data.transition ? vnode : locateNode(vnode.componentInstance._vnode);
        }
        var platformDirectives = {
            model: directive,
            show: {
                bind: function(el, ref, vnode) {
                    var value = ref.value, transition$$1 = (vnode = locateNode(vnode)).data && vnode.data.transition, originalDisplay = el.__vOriginalDisplay = "none" === el.style.display ? "" : el.style.display;
                    value && transition$$1 ? (vnode.data.show = !0, enter(vnode, (function() {
                        el.style.display = originalDisplay;
                    }))) : el.style.display = value ? originalDisplay : "none";
                },
                update: function(el, ref, vnode) {
                    var value = ref.value;
                    !value != !ref.oldValue && ((vnode = locateNode(vnode)).data && vnode.data.transition ? (vnode.data.show = !0, 
                    value ? enter(vnode, (function() {
                        el.style.display = el.__vOriginalDisplay;
                    })) : leave(vnode, (function() {
                        el.style.display = "none";
                    }))) : el.style.display = value ? el.__vOriginalDisplay : "none");
                },
                unbind: function(el, binding, vnode, oldVnode, isDestroy) {
                    isDestroy || (el.style.display = el.__vOriginalDisplay);
                }
            }
        }, transitionProps = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [ Number, String, Object ]
        };
        function getRealChild(vnode) {
            var compOptions = vnode && vnode.componentOptions;
            return compOptions && compOptions.Ctor.options.abstract ? getRealChild(getFirstComponentChild(compOptions.children)) : vnode;
        }
        function extractTransitionData(comp) {
            var data = {}, options = comp.$options;
            for (var key in options.propsData) data[key] = comp[key];
            var listeners = options._parentListeners;
            for (var key$1 in listeners) data[camelize(key$1)] = listeners[key$1];
            return data;
        }
        function placeholder(h, rawChild) {
            if (/\d-keep-alive$/.test(rawChild.tag)) return h("keep-alive", {
                props: rawChild.componentOptions.propsData
            });
        }
        var isNotTextNode = function(c) {
            return c.tag || isAsyncPlaceholder(c);
        }, isVShowDirective = function(d) {
            return "show" === d.name;
        }, Transition = {
            name: "transition",
            props: transitionProps,
            abstract: !0,
            render: function(h) {
                var this$1 = this, children = this.$slots.default;
                if (children && (children = children.filter(isNotTextNode)).length) {
                    0;
                    var mode = this.mode;
                    0;
                    var rawChild = children[0];
                    if (function(vnode) {
                        for (;vnode = vnode.parent; ) if (vnode.data.transition) return !0;
                    }(this.$vnode)) return rawChild;
                    var child = getRealChild(rawChild);
                    if (!child) return rawChild;
                    if (this._leaving) return placeholder(h, rawChild);
                    var id = "__transition-" + this._uid + "-";
                    child.key = null == child.key ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? 0 === String(child.key).indexOf(id) ? child.key : id + child.key : child.key;
                    var data = (child.data || (child.data = {})).transition = extractTransitionData(this), oldRawChild = this._vnode, oldChild = getRealChild(oldRawChild);
                    if (child.data.directives && child.data.directives.some(isVShowDirective) && (child.data.show = !0), 
                    oldChild && oldChild.data && !function(child, oldChild) {
                        return oldChild.key === child.key && oldChild.tag === child.tag;
                    }(child, oldChild) && !isAsyncPlaceholder(oldChild) && (!oldChild.componentInstance || !oldChild.componentInstance._vnode.isComment)) {
                        var oldData = oldChild.data.transition = extend({}, data);
                        if ("out-in" === mode) return this._leaving = !0, mergeVNodeHook(oldData, "afterLeave", (function() {
                            this$1._leaving = !1, this$1.$forceUpdate();
                        })), placeholder(h, rawChild);
                        if ("in-out" === mode) {
                            if (isAsyncPlaceholder(child)) return oldRawChild;
                            var delayedLeave, performLeave = function() {
                                delayedLeave();
                            };
                            mergeVNodeHook(data, "afterEnter", performLeave), mergeVNodeHook(data, "enterCancelled", performLeave), 
                            mergeVNodeHook(oldData, "delayLeave", (function(leave) {
                                delayedLeave = leave;
                            }));
                        }
                    }
                    return rawChild;
                }
            }
        }, props = extend({
            tag: String,
            moveClass: String
        }, transitionProps);
        function callPendingCbs(c) {
            c.elm._moveCb && c.elm._moveCb(), c.elm._enterCb && c.elm._enterCb();
        }
        function recordPosition(c) {
            c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
            var oldPos = c.data.pos, newPos = c.data.newPos, dx = oldPos.left - newPos.left, dy = oldPos.top - newPos.top;
            if (dx || dy) {
                c.data.moved = !0;
                var s = c.elm.style;
                s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)", s.transitionDuration = "0s";
            }
        }
        delete props.mode;
        var platformComponents = {
            Transition: Transition,
            TransitionGroup: {
                props: props,
                beforeMount: function() {
                    var this$1 = this, update = this._update;
                    this._update = function(vnode, hydrating) {
                        var restoreActiveInstance = setActiveInstance(this$1);
                        this$1.__patch__(this$1._vnode, this$1.kept, !1, !0), this$1._vnode = this$1.kept, 
                        restoreActiveInstance(), update.call(this$1, vnode, hydrating);
                    };
                },
                render: function(h) {
                    for (var tag = this.tag || this.$vnode.data.tag || "span", map = Object.create(null), prevChildren = this.prevChildren = this.children, rawChildren = this.$slots.default || [], children = this.children = [], transitionData = extractTransitionData(this), i = 0; i < rawChildren.length; i++) {
                        var c = rawChildren[i];
                        if (c.tag) if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) children.push(c), 
                        map[c.key] = c, (c.data || (c.data = {})).transition = transitionData; else ;
                    }
                    if (prevChildren) {
                        for (var kept = [], removed = [], i$1 = 0; i$1 < prevChildren.length; i$1++) {
                            var c$1 = prevChildren[i$1];
                            c$1.data.transition = transitionData, c$1.data.pos = c$1.elm.getBoundingClientRect(), 
                            map[c$1.key] ? kept.push(c$1) : removed.push(c$1);
                        }
                        this.kept = h(tag, null, kept), this.removed = removed;
                    }
                    return h(tag, null, children);
                },
                updated: function() {
                    var children = this.prevChildren, moveClass = this.moveClass || (this.name || "v") + "-move";
                    children.length && this.hasMove(children[0].elm, moveClass) && (children.forEach(callPendingCbs), 
                    children.forEach(recordPosition), children.forEach(applyTranslation), this._reflow = document.body.offsetHeight, 
                    children.forEach((function(c) {
                        if (c.data.moved) {
                            var el = c.elm, s = el.style;
                            addTransitionClass(el, moveClass), s.transform = s.WebkitTransform = s.transitionDuration = "", 
                            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                                e && e.target !== el || e && !/transform$/.test(e.propertyName) || (el.removeEventListener(transitionEndEvent, cb), 
                                el._moveCb = null, removeTransitionClass(el, moveClass));
                            });
                        }
                    })));
                },
                methods: {
                    hasMove: function(el, moveClass) {
                        if (!hasTransition) return !1;
                        if (this._hasMove) return this._hasMove;
                        var clone = el.cloneNode();
                        el._transitionClasses && el._transitionClasses.forEach((function(cls) {
                            removeClass(clone, cls);
                        })), addClass(clone, moveClass), clone.style.display = "none", this.$el.appendChild(clone);
                        var info = getTransitionInfo(clone);
                        return this.$el.removeChild(clone), this._hasMove = info.hasTransform;
                    }
                }
            }
        };
        Vue.config.mustUseProp = mustUseProp, Vue.config.isReservedTag = isReservedTag, 
        Vue.config.isReservedAttr = isReservedAttr, Vue.config.getTagNamespace = getTagNamespace, 
        Vue.config.isUnknownElement = function(tag) {
            if (!inBrowser) return !0;
            if (isReservedTag(tag)) return !1;
            if (tag = tag.toLowerCase(), null != unknownElementCache[tag]) return unknownElementCache[tag];
            var el = document.createElement(tag);
            return tag.indexOf("-") > -1 ? unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement : unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
        }, extend(Vue.options.directives, platformDirectives), extend(Vue.options.components, platformComponents), 
        Vue.prototype.__patch__ = inBrowser ? patch : noop, Vue.prototype.$mount = function(el, hydrating) {
            return function(vm, el, hydrating) {
                var updateComponent;
                return vm.$el = el, vm.$options.render || (vm.$options.render = createEmptyVNode), 
                callHook(vm, "beforeMount"), updateComponent = function() {
                    vm._update(vm._render(), hydrating);
                }, new Watcher(vm, updateComponent, noop, {
                    before: function() {
                        vm._isMounted && !vm._isDestroyed && callHook(vm, "beforeUpdate");
                    }
                }, !0), hydrating = !1, null == vm.$vnode && (vm._isMounted = !0, callHook(vm, "mounted")), 
                vm;
            }(this, el = el && inBrowser ? query(el) : void 0, hydrating);
        }, inBrowser && setTimeout((function() {
            config.devtools && devtools && devtools.emit("init", Vue);
        }), 0);
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g, regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g, buildRegex = cached((function(delimiters) {
            var open = delimiters[0].replace(regexEscapeRE, "\\$&"), close = delimiters[1].replace(regexEscapeRE, "\\$&");
            return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        }));
        var klass$1 = {
            staticKeys: [ "staticClass" ],
            transformNode: function(el, options) {
                options.warn;
                var staticClass = getAndRemoveAttr(el, "class");
                staticClass && (el.staticClass = JSON.stringify(staticClass));
                var classBinding = getBindingAttr(el, "class", !1);
                classBinding && (el.classBinding = classBinding);
            },
            genData: function(el) {
                var data = "";
                return el.staticClass && (data += "staticClass:" + el.staticClass + ","), el.classBinding && (data += "class:" + el.classBinding + ","), 
                data;
            }
        };
        var decoder, style$1 = {
            staticKeys: [ "staticStyle" ],
            transformNode: function(el, options) {
                options.warn;
                var staticStyle = getAndRemoveAttr(el, "style");
                staticStyle && (el.staticStyle = JSON.stringify(parseStyleText(staticStyle)));
                var styleBinding = getBindingAttr(el, "style", !1);
                styleBinding && (el.styleBinding = styleBinding);
            },
            genData: function(el) {
                var data = "";
                return el.staticStyle && (data += "staticStyle:" + el.staticStyle + ","), el.styleBinding && (data += "style:(" + el.styleBinding + "),"), 
                data;
            }
        }, he_decode = function(html) {
            return (decoder = decoder || document.createElement("div")).innerHTML = html, decoder.textContent;
        }, isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*", qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")", startTagOpen = new RegExp("^<" + qnameCapture), startTagClose = /^\s*(\/?)>/, endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>"), doctype = /^<!DOCTYPE [^>]+>/i, comment = /^<!\--/, conditionalComment = /^<!\[/, isPlainTextElement = makeMap("script,style,textarea", !0), reCache = {}, decodingMap = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        }, encodedAttr = /&(?:lt|gt|quot|amp|#39);/g, encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, isIgnoreNewlineTag = makeMap("pre,textarea", !0), shouldIgnoreFirstNewline = function(tag, html) {
            return tag && isIgnoreNewlineTag(tag) && "\n" === html[0];
        };
        function decodeAttr(value, shouldDecodeNewlines) {
            var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
            return value.replace(re, (function(match) {
                return decodingMap[match];
            }));
        }
        var warn$2, delimiters, transforms, preTransforms, postTransforms, platformIsPreTag, platformMustUseProp, platformGetTagNamespace, onRE = /^@|^v-on:/, dirRE = /^v-|^@|^:|^#/, forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, stripParensRE = /^\(|\)$/g, dynamicArgRE = /^\[.*\]$/, argRE = /:(.*)$/, bindRE = /^:|^\.|^v-bind:/, modifierRE = /\.[^.\]]+(?=[^\]]*$)/g, slotRE = /^v-slot(:|$)|^#/, lineBreakRE = /[\r\n]/, whitespaceRE$1 = /\s+/g, decodeHTMLCached = cached(he_decode);
        function createASTElement(tag, attrs, parent) {
            return {
                type: 1,
                tag: tag,
                attrsList: attrs,
                attrsMap: makeAttrsMap(attrs),
                rawAttrsMap: {},
                parent: parent,
                children: []
            };
        }
        function parse(template, options) {
            warn$2 = options.warn || baseWarn, platformIsPreTag = options.isPreTag || no, platformMustUseProp = options.mustUseProp || no, 
            platformGetTagNamespace = options.getTagNamespace || no;
            var isReservedTag = options.isReservedTag || no;
            (function(el) {
                return !!el.component || !isReservedTag(el.tag);
            }), transforms = pluckModuleFunction(options.modules, "transformNode"), preTransforms = pluckModuleFunction(options.modules, "preTransformNode"), 
            postTransforms = pluckModuleFunction(options.modules, "postTransformNode"), delimiters = options.delimiters;
            var root, currentParent, stack = [], preserveWhitespace = !1 !== options.preserveWhitespace, whitespaceOption = options.whitespace, inVPre = !1, inPre = !1;
            function closeElement(element) {
                if (trimEndingWhitespace(element), inVPre || element.processed || (element = processElement(element, options)), 
                stack.length || element === root || root.if && (element.elseif || element.else) && addIfCondition(root, {
                    exp: element.elseif,
                    block: element
                }), currentParent && !element.forbidden) if (element.elseif || element.else) el = element, 
                (prev = function(children) {
                    for (var i = children.length; i--; ) {
                        if (1 === children[i].type) return children[i];
                        children.pop();
                    }
                }(currentParent.children)) && prev.if && addIfCondition(prev, {
                    exp: el.elseif,
                    block: el
                }); else {
                    if (element.slotScope) {
                        var name = element.slotTarget || '"default"';
                        (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                    }
                    currentParent.children.push(element), element.parent = currentParent;
                }
                var el, prev;
                element.children = element.children.filter((function(c) {
                    return !c.slotScope;
                })), trimEndingWhitespace(element), element.pre && (inVPre = !1), platformIsPreTag(element.tag) && (inPre = !1);
                for (var i = 0; i < postTransforms.length; i++) postTransforms[i](element, options);
            }
            function trimEndingWhitespace(el) {
                if (!inPre) for (var lastNode; (lastNode = el.children[el.children.length - 1]) && 3 === lastNode.type && " " === lastNode.text; ) el.children.pop();
            }
            return function(html, options) {
                for (var last, lastTag, stack = [], expectHTML = options.expectHTML, isUnaryTag$$1 = options.isUnaryTag || no, canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no, index = 0; html; ) {
                    if (last = html, lastTag && isPlainTextElement(lastTag)) {
                        var endTagLength = 0, stackedTag = lastTag.toLowerCase(), reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i")), rest$1 = html.replace(reStackedTag, (function(all, text, endTag) {
                            return endTagLength = endTag.length, isPlainTextElement(stackedTag) || "noscript" === stackedTag || (text = text.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), 
                            shouldIgnoreFirstNewline(stackedTag, text) && (text = text.slice(1)), options.chars && options.chars(text), 
                            "";
                        }));
                        index += html.length - rest$1.length, html = rest$1, parseEndTag(stackedTag, index - endTagLength, index);
                    } else {
                        var textEnd = html.indexOf("<");
                        if (0 === textEnd) {
                            if (comment.test(html)) {
                                var commentEnd = html.indexOf("--\x3e");
                                if (commentEnd >= 0) {
                                    options.shouldKeepComment && options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3), 
                                    advance(commentEnd + 3);
                                    continue;
                                }
                            }
                            if (conditionalComment.test(html)) {
                                var conditionalEnd = html.indexOf("]>");
                                if (conditionalEnd >= 0) {
                                    advance(conditionalEnd + 2);
                                    continue;
                                }
                            }
                            var doctypeMatch = html.match(doctype);
                            if (doctypeMatch) {
                                advance(doctypeMatch[0].length);
                                continue;
                            }
                            var endTagMatch = html.match(endTag);
                            if (endTagMatch) {
                                var curIndex = index;
                                advance(endTagMatch[0].length), parseEndTag(endTagMatch[1], curIndex, index);
                                continue;
                            }
                            var startTagMatch = parseStartTag();
                            if (startTagMatch) {
                                handleStartTag(startTagMatch), shouldIgnoreFirstNewline(startTagMatch.tagName, html) && advance(1);
                                continue;
                            }
                        }
                        var text = void 0, rest = void 0, next = void 0;
                        if (textEnd >= 0) {
                            for (rest = html.slice(textEnd); !(endTag.test(rest) || startTagOpen.test(rest) || comment.test(rest) || conditionalComment.test(rest) || (next = rest.indexOf("<", 1)) < 0); ) textEnd += next, 
                            rest = html.slice(textEnd);
                            text = html.substring(0, textEnd);
                        }
                        textEnd < 0 && (text = html), text && advance(text.length), options.chars && text && options.chars(text, index - text.length, index);
                    }
                    if (html === last) {
                        options.chars && options.chars(html);
                        break;
                    }
                }
                function advance(n) {
                    index += n, html = html.substring(n);
                }
                function parseStartTag() {
                    var start = html.match(startTagOpen);
                    if (start) {
                        var end, attr, match = {
                            tagName: start[1],
                            attrs: [],
                            start: index
                        };
                        for (advance(start[0].length); !(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute)); ) attr.start = index, 
                        advance(attr[0].length), attr.end = index, match.attrs.push(attr);
                        if (end) return match.unarySlash = end[1], advance(end[0].length), match.end = index, 
                        match;
                    }
                }
                function handleStartTag(match) {
                    var tagName = match.tagName, unarySlash = match.unarySlash;
                    expectHTML && ("p" === lastTag && isNonPhrasingTag(tagName) && parseEndTag(lastTag), 
                    canBeLeftOpenTag$$1(tagName) && lastTag === tagName && parseEndTag(tagName));
                    for (var unary = isUnaryTag$$1(tagName) || !!unarySlash, l = match.attrs.length, attrs = new Array(l), i = 0; i < l; i++) {
                        var args = match.attrs[i], value = args[3] || args[4] || args[5] || "", shouldDecodeNewlines = "a" === tagName && "href" === args[1] ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
                        attrs[i] = {
                            name: args[1],
                            value: decodeAttr(value, shouldDecodeNewlines)
                        };
                    }
                    unary || (stack.push({
                        tag: tagName,
                        lowerCasedTag: tagName.toLowerCase(),
                        attrs: attrs,
                        start: match.start,
                        end: match.end
                    }), lastTag = tagName), options.start && options.start(tagName, attrs, unary, match.start, match.end);
                }
                function parseEndTag(tagName, start, end) {
                    var pos, lowerCasedTagName;
                    if (null == start && (start = index), null == end && (end = index), tagName) for (lowerCasedTagName = tagName.toLowerCase(), 
                    pos = stack.length - 1; pos >= 0 && stack[pos].lowerCasedTag !== lowerCasedTagName; pos--) ; else pos = 0;
                    if (pos >= 0) {
                        for (var i = stack.length - 1; i >= pos; i--) options.end && options.end(stack[i].tag, start, end);
                        stack.length = pos, lastTag = pos && stack[pos - 1].tag;
                    } else "br" === lowerCasedTagName ? options.start && options.start(tagName, [], !0, start, end) : "p" === lowerCasedTagName && (options.start && options.start(tagName, [], !1, start, end), 
                    options.end && options.end(tagName, start, end));
                }
                parseEndTag();
            }(template, {
                warn: warn$2,
                expectHTML: options.expectHTML,
                isUnaryTag: options.isUnaryTag,
                canBeLeftOpenTag: options.canBeLeftOpenTag,
                shouldDecodeNewlines: options.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
                shouldKeepComment: options.comments,
                outputSourceRange: options.outputSourceRange,
                start: function(tag, attrs, unary, start$1, end) {
                    var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
                    isIE && "svg" === ns && (attrs = function(attrs) {
                        for (var res = [], i = 0; i < attrs.length; i++) {
                            var attr = attrs[i];
                            ieNSBug.test(attr.name) || (attr.name = attr.name.replace(ieNSPrefix, ""), res.push(attr));
                        }
                        return res;
                    }(attrs));
                    var el, element = createASTElement(tag, attrs, currentParent);
                    ns && (element.ns = ns), "style" !== (el = element).tag && ("script" !== el.tag || el.attrsMap.type && "text/javascript" !== el.attrsMap.type) || isServerRendering() || (element.forbidden = !0);
                    for (var i = 0; i < preTransforms.length; i++) element = preTransforms[i](element, options) || element;
                    inVPre || (!function(el) {
                        null != getAndRemoveAttr(el, "v-pre") && (el.pre = !0);
                    }(element), element.pre && (inVPre = !0)), platformIsPreTag(element.tag) && (inPre = !0), 
                    inVPre ? function(el) {
                        var list = el.attrsList, len = list.length;
                        if (len) for (var attrs = el.attrs = new Array(len), i = 0; i < len; i++) attrs[i] = {
                            name: list[i].name,
                            value: JSON.stringify(list[i].value)
                        }, null != list[i].start && (attrs[i].start = list[i].start, attrs[i].end = list[i].end); else el.pre || (el.plain = !0);
                    }(element) : element.processed || (processFor(element), function(el) {
                        var exp = getAndRemoveAttr(el, "v-if");
                        if (exp) el.if = exp, addIfCondition(el, {
                            exp: exp,
                            block: el
                        }); else {
                            null != getAndRemoveAttr(el, "v-else") && (el.else = !0);
                            var elseif = getAndRemoveAttr(el, "v-else-if");
                            elseif && (el.elseif = elseif);
                        }
                    }(element), function(el) {
                        null != getAndRemoveAttr(el, "v-once") && (el.once = !0);
                    }(element)), root || (root = element), unary ? closeElement(element) : (currentParent = element, 
                    stack.push(element));
                },
                end: function(tag, start, end$1) {
                    var element = stack[stack.length - 1];
                    stack.length -= 1, currentParent = stack[stack.length - 1], closeElement(element);
                },
                chars: function(text, start, end) {
                    if (currentParent && (!isIE || "textarea" !== currentParent.tag || currentParent.attrsMap.placeholder !== text)) {
                        var el, res, child, children = currentParent.children;
                        if (text = inPre || text.trim() ? "script" === (el = currentParent).tag || "style" === el.tag ? text : decodeHTMLCached(text) : children.length ? whitespaceOption ? "condense" === whitespaceOption && lineBreakRE.test(text) ? "" : " " : preserveWhitespace ? " " : "" : "") inPre || "condense" !== whitespaceOption || (text = text.replace(whitespaceRE$1, " ")), 
                        !inVPre && " " !== text && (res = function(text, delimiters) {
                            var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
                            if (tagRE.test(text)) {
                                for (var match, index, tokenValue, tokens = [], rawTokens = [], lastIndex = tagRE.lastIndex = 0; match = tagRE.exec(text); ) {
                                    (index = match.index) > lastIndex && (rawTokens.push(tokenValue = text.slice(lastIndex, index)), 
                                    tokens.push(JSON.stringify(tokenValue)));
                                    var exp = parseFilters(match[1].trim());
                                    tokens.push("_s(" + exp + ")"), rawTokens.push({
                                        "@binding": exp
                                    }), lastIndex = index + match[0].length;
                                }
                                return lastIndex < text.length && (rawTokens.push(tokenValue = text.slice(lastIndex)), 
                                tokens.push(JSON.stringify(tokenValue))), {
                                    expression: tokens.join("+"),
                                    tokens: rawTokens
                                };
                            }
                        }(text, delimiters)) ? child = {
                            type: 2,
                            expression: res.expression,
                            tokens: res.tokens,
                            text: text
                        } : " " === text && children.length && " " === children[children.length - 1].text || (child = {
                            type: 3,
                            text: text
                        }), child && children.push(child);
                    }
                },
                comment: function(text, start, end) {
                    if (currentParent) {
                        var child = {
                            type: 3,
                            text: text,
                            isComment: !0
                        };
                        0, currentParent.children.push(child);
                    }
                }
            }), root;
        }
        function processElement(element, options) {
            var el;
            !function(el) {
                var exp = getBindingAttr(el, "key");
                if (exp) {
                    el.key = exp;
                }
            }(element), element.plain = !element.key && !element.scopedSlots && !element.attrsList.length, 
            function(el) {
                var ref = getBindingAttr(el, "ref");
                ref && (el.ref = ref, el.refInFor = function(el) {
                    var parent = el;
                    for (;parent; ) {
                        if (void 0 !== parent.for) return !0;
                        parent = parent.parent;
                    }
                    return !1;
                }(el));
            }(element), function(el) {
                var slotScope;
                "template" === el.tag ? (slotScope = getAndRemoveAttr(el, "scope"), el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope")) : (slotScope = getAndRemoveAttr(el, "slot-scope")) && (el.slotScope = slotScope);
                var slotTarget = getBindingAttr(el, "slot");
                slotTarget && (el.slotTarget = '""' === slotTarget ? '"default"' : slotTarget, el.slotTargetDynamic = !(!el.attrsMap[":slot"] && !el.attrsMap["v-bind:slot"]), 
                "template" === el.tag || el.slotScope || addAttr(el, "slot", slotTarget, function(el, name) {
                    return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
                }(el, "slot")));
                if ("template" === el.tag) {
                    var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
                    if (slotBinding) {
                        0;
                        var ref = getSlotName(slotBinding), name = ref.name, dynamic = ref.dynamic;
                        el.slotTarget = name, el.slotTargetDynamic = dynamic, el.slotScope = slotBinding.value || "_empty_";
                    }
                } else {
                    var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
                    if (slotBinding$1) {
                        0;
                        var slots = el.scopedSlots || (el.scopedSlots = {}), ref$1 = getSlotName(slotBinding$1), name$1 = ref$1.name, dynamic$1 = ref$1.dynamic, slotContainer = slots[name$1] = createASTElement("template", [], el);
                        slotContainer.slotTarget = name$1, slotContainer.slotTargetDynamic = dynamic$1, 
                        slotContainer.children = el.children.filter((function(c) {
                            if (!c.slotScope) return c.parent = slotContainer, !0;
                        })), slotContainer.slotScope = slotBinding$1.value || "_empty_", el.children = [], 
                        el.plain = !1;
                    }
                }
            }(element), "slot" === (el = element).tag && (el.slotName = getBindingAttr(el, "name")), 
            function(el) {
                var binding;
                (binding = getBindingAttr(el, "is")) && (el.component = binding);
                null != getAndRemoveAttr(el, "inline-template") && (el.inlineTemplate = !0);
            }(element);
            for (var i = 0; i < transforms.length; i++) element = transforms[i](element, options) || element;
            return function(el) {
                var i, l, name, rawName, value, modifiers, syncGen, isDynamic, list = el.attrsList;
                for (i = 0, l = list.length; i < l; i++) {
                    if (name = rawName = list[i].name, value = list[i].value, dirRE.test(name)) if (el.hasBindings = !0, 
                    (modifiers = parseModifiers(name.replace(dirRE, ""))) && (name = name.replace(modifierRE, "")), 
                    bindRE.test(name)) name = name.replace(bindRE, ""), value = parseFilters(value), 
                    (isDynamic = dynamicArgRE.test(name)) && (name = name.slice(1, -1)), modifiers && (modifiers.prop && !isDynamic && "innerHtml" === (name = camelize(name)) && (name = "innerHTML"), 
                    modifiers.camel && !isDynamic && (name = camelize(name)), modifiers.sync && (syncGen = genAssignmentCode(value, "$event"), 
                    isDynamic ? addHandler(el, '"update:"+(' + name + ")", syncGen, null, !1, 0, list[i], !0) : (addHandler(el, "update:" + camelize(name), syncGen, null, !1, 0, list[i]), 
                    hyphenate(name) !== camelize(name) && addHandler(el, "update:" + hyphenate(name), syncGen, null, !1, 0, list[i])))), 
                    modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name) ? addProp(el, name, value, list[i], isDynamic) : addAttr(el, name, value, list[i], isDynamic); else if (onRE.test(name)) name = name.replace(onRE, ""), 
                    (isDynamic = dynamicArgRE.test(name)) && (name = name.slice(1, -1)), addHandler(el, name, value, modifiers, !1, 0, list[i], isDynamic); else {
                        var argMatch = (name = name.replace(dirRE, "")).match(argRE), arg = argMatch && argMatch[1];
                        isDynamic = !1, arg && (name = name.slice(0, -(arg.length + 1)), dynamicArgRE.test(arg) && (arg = arg.slice(1, -1), 
                        isDynamic = !0)), addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                    } else addAttr(el, name, JSON.stringify(value), list[i]), !el.component && "muted" === name && platformMustUseProp(el.tag, el.attrsMap.type, name) && addProp(el, name, "true", list[i]);
                }
            }(element), element;
        }
        function processFor(el) {
            var exp;
            if (exp = getAndRemoveAttr(el, "v-for")) {
                var res = function(exp) {
                    var inMatch = exp.match(forAliasRE);
                    if (!inMatch) return;
                    var res = {};
                    res.for = inMatch[2].trim();
                    var alias = inMatch[1].trim().replace(stripParensRE, ""), iteratorMatch = alias.match(forIteratorRE);
                    iteratorMatch ? (res.alias = alias.replace(forIteratorRE, "").trim(), res.iterator1 = iteratorMatch[1].trim(), 
                    iteratorMatch[2] && (res.iterator2 = iteratorMatch[2].trim())) : res.alias = alias;
                    return res;
                }(exp);
                res && extend(el, res);
            }
        }
        function addIfCondition(el, condition) {
            el.ifConditions || (el.ifConditions = []), el.ifConditions.push(condition);
        }
        function getSlotName(binding) {
            var name = binding.name.replace(slotRE, "");
            return name || "#" !== binding.name[0] && (name = "default"), dynamicArgRE.test(name) ? {
                name: name.slice(1, -1),
                dynamic: !0
            } : {
                name: '"' + name + '"',
                dynamic: !1
            };
        }
        function parseModifiers(name) {
            var match = name.match(modifierRE);
            if (match) {
                var ret = {};
                return match.forEach((function(m) {
                    ret[m.slice(1)] = !0;
                })), ret;
            }
        }
        function makeAttrsMap(attrs) {
            for (var map = {}, i = 0, l = attrs.length; i < l; i++) map[attrs[i].name] = attrs[i].value;
            return map;
        }
        var ieNSBug = /^xmlns:NS\d+/, ieNSPrefix = /^NS\d+:/;
        function cloneASTElement(el) {
            return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var modules$1 = [ klass$1, style$1, {
            preTransformNode: function(el, options) {
                if ("input" === el.tag) {
                    var typeBinding, map = el.attrsMap;
                    if (!map["v-model"]) return;
                    if ((map[":type"] || map["v-bind:type"]) && (typeBinding = getBindingAttr(el, "type")), 
                    map.type || typeBinding || !map["v-bind"] || (typeBinding = "(" + map["v-bind"] + ").type"), 
                    typeBinding) {
                        var ifCondition = getAndRemoveAttr(el, "v-if", !0), ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "", hasElse = null != getAndRemoveAttr(el, "v-else", !0), elseIfCondition = getAndRemoveAttr(el, "v-else-if", !0), branch0 = cloneASTElement(el);
                        processFor(branch0), addRawAttr(branch0, "type", "checkbox"), processElement(branch0, options), 
                        branch0.processed = !0, branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra, 
                        addIfCondition(branch0, {
                            exp: branch0.if,
                            block: branch0
                        });
                        var branch1 = cloneASTElement(el);
                        getAndRemoveAttr(branch1, "v-for", !0), addRawAttr(branch1, "type", "radio"), processElement(branch1, options), 
                        addIfCondition(branch0, {
                            exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                            block: branch1
                        });
                        var branch2 = cloneASTElement(el);
                        return getAndRemoveAttr(branch2, "v-for", !0), addRawAttr(branch2, ":type", typeBinding), 
                        processElement(branch2, options), addIfCondition(branch0, {
                            exp: ifCondition,
                            block: branch2
                        }), hasElse ? branch0.else = !0 : elseIfCondition && (branch0.elseif = elseIfCondition), 
                        branch0;
                    }
                }
            }
        } ];
        var isStaticKey, isPlatformReservedTag, baseOptions = {
            expectHTML: !0,
            modules: modules$1,
            directives: {
                model: function(el, dir, _warn) {
                    _warn;
                    var value = dir.value, modifiers = dir.modifiers, tag = el.tag, type = el.attrsMap.type;
                    if (el.component) return genComponentModel(el, value, modifiers), !1;
                    if ("select" === tag) !function(el, value, modifiers) {
                        var code = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (modifiers && modifiers.number ? "_n(val)" : "val") + "});";
                        code = code + " " + genAssignmentCode(value, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), 
                        addHandler(el, "change", code, null, !0);
                    }(el, value, modifiers); else if ("input" === tag && "checkbox" === type) !function(el, value, modifiers) {
                        var number = modifiers && modifiers.number, valueBinding = getBindingAttr(el, "value") || "null", trueValueBinding = getBindingAttr(el, "true-value") || "true", falseValueBinding = getBindingAttr(el, "false-value") || "false";
                        addProp(el, "checked", "Array.isArray(" + value + ")?_i(" + value + "," + valueBinding + ")>-1" + ("true" === trueValueBinding ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")")), 
                        addHandler(el, "change", "var $$a=" + value + ",$$el=$event.target,$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");if(Array.isArray($$a)){var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + genAssignmentCode(value, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + genAssignmentCode(value, "$$c") + "}", null, !0);
                    }(el, value, modifiers); else if ("input" === tag && "radio" === type) !function(el, value, modifiers) {
                        var number = modifiers && modifiers.number, valueBinding = getBindingAttr(el, "value") || "null";
                        addProp(el, "checked", "_q(" + value + "," + (valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding) + ")"), 
                        addHandler(el, "change", genAssignmentCode(value, valueBinding), null, !0);
                    }(el, value, modifiers); else if ("input" === tag || "textarea" === tag) !function(el, value, modifiers) {
                        var type = el.attrsMap.type;
                        0;
                        var ref = modifiers || {}, lazy = ref.lazy, number = ref.number, trim = ref.trim, needCompositionGuard = !lazy && "range" !== type, event = lazy ? "change" : "range" === type ? "__r" : "input", valueExpression = "$event.target.value";
                        trim && (valueExpression = "$event.target.value.trim()");
                        number && (valueExpression = "_n(" + valueExpression + ")");
                        var code = genAssignmentCode(value, valueExpression);
                        needCompositionGuard && (code = "if($event.target.composing)return;" + code);
                        addProp(el, "value", "(" + value + ")"), addHandler(el, event, code, null, !0), 
                        (trim || number) && addHandler(el, "blur", "$forceUpdate()");
                    }(el, value, modifiers); else {
                        if (!config.isReservedTag(tag)) return genComponentModel(el, value, modifiers), 
                        !1;
                    }
                    return !0;
                },
                text: function(el, dir) {
                    dir.value && addProp(el, "textContent", "_s(" + dir.value + ")", dir);
                },
                html: function(el, dir) {
                    dir.value && addProp(el, "innerHTML", "_s(" + dir.value + ")", dir);
                }
            },
            isPreTag: function(tag) {
                return "pre" === tag;
            },
            isUnaryTag: isUnaryTag,
            mustUseProp: mustUseProp,
            canBeLeftOpenTag: canBeLeftOpenTag,
            isReservedTag: isReservedTag,
            getTagNamespace: getTagNamespace,
            staticKeys: function(modules) {
                return modules.reduce((function(keys, m) {
                    return keys.concat(m.staticKeys || []);
                }), []).join(",");
            }(modules$1)
        }, genStaticKeysCached = cached((function(keys) {
            return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }));
        function optimize(root, options) {
            root && (isStaticKey = genStaticKeysCached(options.staticKeys || ""), isPlatformReservedTag = options.isReservedTag || no, 
            function markStatic$1(node) {
                if (node.static = function(node) {
                    if (2 === node.type) return !1;
                    if (3 === node.type) return !0;
                    return !(!node.pre && (node.hasBindings || node.if || node.for || isBuiltInTag(node.tag) || !isPlatformReservedTag(node.tag) || function(node) {
                        for (;node.parent; ) {
                            if ("template" !== (node = node.parent).tag) return !1;
                            if (node.for) return !0;
                        }
                        return !1;
                    }(node) || !Object.keys(node).every(isStaticKey)));
                }(node), 1 === node.type) {
                    if (!isPlatformReservedTag(node.tag) && "slot" !== node.tag && null == node.attrsMap["inline-template"]) return;
                    for (var i = 0, l = node.children.length; i < l; i++) {
                        var child = node.children[i];
                        markStatic$1(child), child.static || (node.static = !1);
                    }
                    if (node.ifConditions) for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                        var block = node.ifConditions[i$1].block;
                        markStatic$1(block), block.static || (node.static = !1);
                    }
                }
            }(root), function markStaticRoots(node, isInFor) {
                if (1 === node.type) {
                    if ((node.static || node.once) && (node.staticInFor = isInFor), node.static && node.children.length && (1 !== node.children.length || 3 !== node.children[0].type)) return void (node.staticRoot = !0);
                    if (node.staticRoot = !1, node.children) for (var i = 0, l = node.children.length; i < l; i++) markStaticRoots(node.children[i], isInFor || !!node.for);
                    if (node.ifConditions) for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) markStaticRoots(node.ifConditions[i$1].block, isInFor);
                }
            }(root, !1));
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, fnInvokeRE = /\([^)]*?\);*$/, simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, keyCodes = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [ 8, 46 ]
        }, keyNames = {
            esc: [ "Esc", "Escape" ],
            tab: "Tab",
            enter: "Enter",
            space: [ " ", "Spacebar" ],
            up: [ "Up", "ArrowUp" ],
            left: [ "Left", "ArrowLeft" ],
            right: [ "Right", "ArrowRight" ],
            down: [ "Down", "ArrowDown" ],
            delete: [ "Backspace", "Delete", "Del" ]
        }, genGuard = function(condition) {
            return "if(" + condition + ")return null;";
        }, modifierCode = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: genGuard("$event.target !== $event.currentTarget"),
            ctrl: genGuard("!$event.ctrlKey"),
            shift: genGuard("!$event.shiftKey"),
            alt: genGuard("!$event.altKey"),
            meta: genGuard("!$event.metaKey"),
            left: genGuard("'button' in $event && $event.button !== 0"),
            middle: genGuard("'button' in $event && $event.button !== 1"),
            right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events, isNative) {
            var prefix = isNative ? "nativeOn:" : "on:", staticHandlers = "", dynamicHandlers = "";
            for (var name in events) {
                var handlerCode = genHandler(events[name]);
                events[name] && events[name].dynamic ? dynamicHandlers += name + "," + handlerCode + "," : staticHandlers += '"' + name + '":' + handlerCode + ",";
            }
            return staticHandlers = "{" + staticHandlers.slice(0, -1) + "}", dynamicHandlers ? prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])" : prefix + staticHandlers;
        }
        function genHandler(handler) {
            if (!handler) return "function(){}";
            if (Array.isArray(handler)) return "[" + handler.map((function(handler) {
                return genHandler(handler);
            })).join(",") + "]";
            var isMethodPath = simplePathRE.test(handler.value), isFunctionExpression = fnExpRE.test(handler.value), isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
            if (handler.modifiers) {
                var code = "", genModifierCode = "", keys = [];
                for (var key in handler.modifiers) if (modifierCode[key]) genModifierCode += modifierCode[key], 
                keyCodes[key] && keys.push(key); else if ("exact" === key) {
                    var modifiers = handler.modifiers;
                    genModifierCode += genGuard([ "ctrl", "shift", "alt", "meta" ].filter((function(keyModifier) {
                        return !modifiers[keyModifier];
                    })).map((function(keyModifier) {
                        return "$event." + keyModifier + "Key";
                    })).join("||"));
                } else keys.push(key);
                return keys.length && (code += function(keys) {
                    return "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join("&&") + ")return null;";
                }(keys)), genModifierCode && (code += genModifierCode), "function($event){" + code + (isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
            }
            return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
        }
        function genFilterCode(key) {
            var keyVal = parseInt(key, 10);
            if (keyVal) return "$event.keyCode!==" + keyVal;
            var keyCode = keyCodes[key], keyName = keyNames[key];
            return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + ",$event.key," + JSON.stringify(keyName) + ")";
        }
        var baseDirectives = {
            on: function(el, dir) {
                el.wrapListeners = function(code) {
                    return "_g(" + code + "," + dir.value + ")";
                };
            },
            bind: function(el, dir) {
                el.wrapData = function(code) {
                    return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? "true" : "false") + (dir.modifiers && dir.modifiers.sync ? ",true" : "") + ")";
                };
            },
            cloak: noop
        }, CodegenState = function(options) {
            this.options = options, this.warn = options.warn || baseWarn, this.transforms = pluckModuleFunction(options.modules, "transformCode"), 
            this.dataGenFns = pluckModuleFunction(options.modules, "genData"), this.directives = extend(extend({}, baseDirectives), options.directives);
            var isReservedTag = options.isReservedTag || no;
            this.maybeComponent = function(el) {
                return !!el.component || !isReservedTag(el.tag);
            }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
        };
        function generate(ast, options) {
            var state = new CodegenState(options);
            return {
                render: "with(this){return " + (ast ? genElement(ast, state) : '_c("div")') + "}",
                staticRenderFns: state.staticRenderFns
            };
        }
        function genElement(el, state) {
            if (el.parent && (el.pre = el.pre || el.parent.pre), el.staticRoot && !el.staticProcessed) return genStatic(el, state);
            if (el.once && !el.onceProcessed) return genOnce(el, state);
            if (el.for && !el.forProcessed) return genFor(el, state);
            if (el.if && !el.ifProcessed) return genIf(el, state);
            if ("template" !== el.tag || el.slotTarget || state.pre) {
                if ("slot" === el.tag) return function(el, state) {
                    var slotName = el.slotName || '"default"', children = genChildren(el, state), res = "_t(" + slotName + (children ? "," + children : ""), attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map((function(attr) {
                        return {
                            name: camelize(attr.name),
                            value: attr.value,
                            dynamic: attr.dynamic
                        };
                    }))) : null, bind$$1 = el.attrsMap["v-bind"];
                    !attrs && !bind$$1 || children || (res += ",null");
                    attrs && (res += "," + attrs);
                    bind$$1 && (res += (attrs ? "" : ",null") + "," + bind$$1);
                    return res + ")";
                }(el, state);
                var code;
                if (el.component) code = function(componentName, el, state) {
                    var children = el.inlineTemplate ? null : genChildren(el, state, !0);
                    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : "") + ")";
                }(el.component, el, state); else {
                    var data;
                    (!el.plain || el.pre && state.maybeComponent(el)) && (data = genData$2(el, state));
                    var children = el.inlineTemplate ? null : genChildren(el, state, !0);
                    code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
                }
                for (var i = 0; i < state.transforms.length; i++) code = state.transforms[i](el, code);
                return code;
            }
            return genChildren(el, state) || "void 0";
        }
        function genStatic(el, state) {
            el.staticProcessed = !0;
            var originalPreState = state.pre;
            return el.pre && (state.pre = el.pre), state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}"), 
            state.pre = originalPreState, "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el, state) {
            if (el.onceProcessed = !0, el.if && !el.ifProcessed) return genIf(el, state);
            if (el.staticInFor) {
                for (var key = "", parent = el.parent; parent; ) {
                    if (parent.for) {
                        key = parent.key;
                        break;
                    }
                    parent = parent.parent;
                }
                return key ? "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")" : genElement(el, state);
            }
            return genStatic(el, state);
        }
        function genIf(el, state, altGen, altEmpty) {
            return el.ifProcessed = !0, function genIfConditions(conditions, state, altGen, altEmpty) {
                if (!conditions.length) return altEmpty || "_e()";
                var condition = conditions.shift();
                return condition.exp ? "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty) : "" + genTernaryExp(condition.block);
                function genTernaryExp(el) {
                    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
                }
            }(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genFor(el, state, altGen, altHelper) {
            var exp = el.for, alias = el.alias, iterator1 = el.iterator1 ? "," + el.iterator1 : "", iterator2 = el.iterator2 ? "," + el.iterator2 : "";
            return el.forProcessed = !0, (altHelper || "_l") + "((" + exp + "),function(" + alias + iterator1 + iterator2 + "){return " + (altGen || genElement)(el, state) + "})";
        }
        function genData$2(el, state) {
            var data = "{", dirs = function(el, state) {
                var dirs = el.directives;
                if (!dirs) return;
                var i, l, dir, needRuntime, res = "directives:[", hasRuntime = !1;
                for (i = 0, l = dirs.length; i < l; i++) {
                    dir = dirs[i], needRuntime = !0;
                    var gen = state.directives[dir.name];
                    gen && (needRuntime = !!gen(el, dir, state.warn)), needRuntime && (hasRuntime = !0, 
                    res += '{name:"' + dir.name + '",rawName:"' + dir.rawName + '"' + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : '"' + dir.arg + '"') : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},");
                }
                if (hasRuntime) return res.slice(0, -1) + "]";
            }(el, state);
            dirs && (data += dirs + ","), el.key && (data += "key:" + el.key + ","), el.ref && (data += "ref:" + el.ref + ","), 
            el.refInFor && (data += "refInFor:true,"), el.pre && (data += "pre:true,"), el.component && (data += 'tag:"' + el.tag + '",');
            for (var i = 0; i < state.dataGenFns.length; i++) data += state.dataGenFns[i](el);
            if (el.attrs && (data += "attrs:" + genProps(el.attrs) + ","), el.props && (data += "domProps:" + genProps(el.props) + ","), 
            el.events && (data += genHandlers(el.events, !1) + ","), el.nativeEvents && (data += genHandlers(el.nativeEvents, !0) + ","), 
            el.slotTarget && !el.slotScope && (data += "slot:" + el.slotTarget + ","), el.scopedSlots && (data += function(el, slots, state) {
                var needsForceUpdate = el.for || Object.keys(slots).some((function(key) {
                    var slot = slots[key];
                    return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
                })), needsKey = !!el.if;
                if (!needsForceUpdate) for (var parent = el.parent; parent; ) {
                    if (parent.slotScope && "_empty_" !== parent.slotScope || parent.for) {
                        needsForceUpdate = !0;
                        break;
                    }
                    parent.if && (needsKey = !0), parent = parent.parent;
                }
                var generatedSlots = Object.keys(slots).map((function(key) {
                    return genScopedSlot(slots[key], state);
                })).join(",");
                return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + function(str) {
                    var hash = 5381, i = str.length;
                    for (;i; ) hash = 33 * hash ^ str.charCodeAt(--i);
                    return hash >>> 0;
                }(generatedSlots) : "") + ")";
            }(el, el.scopedSlots, state) + ","), el.model && (data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},"), 
            el.inlineTemplate) {
                var inlineTemplate = function(el, state) {
                    var ast = el.children[0];
                    0;
                    if (ast && 1 === ast.type) {
                        var inlineRenderFns = generate(ast, state.options);
                        return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map((function(code) {
                            return "function(){" + code + "}";
                        })).join(",") + "]}";
                    }
                }(el, state);
                inlineTemplate && (data += inlineTemplate + ",");
            }
            return data = data.replace(/,$/, "") + "}", el.dynamicAttrs && (data = "_b(" + data + ',"' + el.tag + '",' + genProps(el.dynamicAttrs) + ")"), 
            el.wrapData && (data = el.wrapData(data)), el.wrapListeners && (data = el.wrapListeners(data)), 
            data;
        }
        function containsSlotChild(el) {
            return 1 === el.type && ("slot" === el.tag || el.children.some(containsSlotChild));
        }
        function genScopedSlot(el, state) {
            var isLegacySyntax = el.attrsMap["slot-scope"];
            if (el.if && !el.ifProcessed && !isLegacySyntax) return genIf(el, state, genScopedSlot, "null");
            if (el.for && !el.forProcessed) return genFor(el, state, genScopedSlot);
            var slotScope = "_empty_" === el.slotScope ? "" : String(el.slotScope), fn = "function(" + slotScope + "){return " + ("template" === el.tag ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || "undefined") + ":undefined" : genChildren(el, state) || "undefined" : genElement(el, state)) + "}", reverseProxy = slotScope ? "" : ",proxy:true";
            return "{key:" + (el.slotTarget || '"default"') + ",fn:" + fn + reverseProxy + "}";
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
            var children = el.children;
            if (children.length) {
                var el$1 = children[0];
                if (1 === children.length && el$1.for && "template" !== el$1.tag && "slot" !== el$1.tag) {
                    var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
                    return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
                }
                var normalizationType$1 = checkSkip ? function(children, maybeComponent) {
                    for (var res = 0, i = 0; i < children.length; i++) {
                        var el = children[i];
                        if (1 === el.type) {
                            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some((function(c) {
                                return needsNormalization(c.block);
                            }))) {
                                res = 2;
                                break;
                            }
                            (maybeComponent(el) || el.ifConditions && el.ifConditions.some((function(c) {
                                return maybeComponent(c.block);
                            }))) && (res = 1);
                        }
                    }
                    return res;
                }(children, state.maybeComponent) : 0, gen = altGenNode || genNode;
                return "[" + children.map((function(c) {
                    return gen(c, state);
                })).join(",") + "]" + (normalizationType$1 ? "," + normalizationType$1 : "");
            }
        }
        function needsNormalization(el) {
            return void 0 !== el.for || "template" === el.tag || "slot" === el.tag;
        }
        function genNode(node, state) {
            return 1 === node.type ? genElement(node, state) : 3 === node.type && node.isComment ? function(comment) {
                return "_e(" + JSON.stringify(comment.text) + ")";
            }(node) : function(text) {
                return "_v(" + (2 === text.type ? text.expression : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
            }(node);
        }
        function genProps(props) {
            for (var staticProps = "", dynamicProps = "", i = 0; i < props.length; i++) {
                var prop = props[i], value = transformSpecialNewlines(prop.value);
                prop.dynamic ? dynamicProps += prop.name + "," + value + "," : staticProps += '"' + prop.name + '":' + value + ",";
            }
            return staticProps = "{" + staticProps.slice(0, -1) + "}", dynamicProps ? "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])" : staticProps;
        }
        function transformSpecialNewlines(text) {
            return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), 
        new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        function createFunction(code, errors) {
            try {
                return new Function(code);
            } catch (err) {
                return errors.push({
                    err: err,
                    code: code
                }), noop;
            }
        }
        function createCompileToFunctionFn(compile) {
            var cache = Object.create(null);
            return function(template, options, vm) {
                (options = extend({}, options)).warn;
                delete options.warn;
                var key = options.delimiters ? String(options.delimiters) + template : template;
                if (cache[key]) return cache[key];
                var compiled = compile(template, options);
                var res = {}, fnGenErrors = [];
                return res.render = createFunction(compiled.render, fnGenErrors), res.staticRenderFns = compiled.staticRenderFns.map((function(code) {
                    return createFunction(code, fnGenErrors);
                })), cache[key] = res;
            };
        }
        var baseCompile, div, ref$1 = (baseCompile = function(template, options) {
            var ast = parse(template.trim(), options);
            !1 !== options.optimize && optimize(ast, options);
            var code = generate(ast, options);
            return {
                ast: ast,
                render: code.render,
                staticRenderFns: code.staticRenderFns
            };
        }, function(baseOptions) {
            function compile(template, options) {
                var finalOptions = Object.create(baseOptions), errors = [], tips = [];
                if (options) for (var key in options.modules && (finalOptions.modules = (baseOptions.modules || []).concat(options.modules)), 
                options.directives && (finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives)), 
                options) "modules" !== key && "directives" !== key && (finalOptions[key] = options[key]);
                finalOptions.warn = function(msg, range, tip) {
                    (tip ? tips : errors).push(msg);
                };
                var compiled = baseCompile(template.trim(), finalOptions);
                return compiled.errors = errors, compiled.tips = tips, compiled;
            }
            return {
                compile: compile,
                compileToFunctions: createCompileToFunctionFn(compile)
            };
        })(baseOptions), compileToFunctions = (ref$1.compile, ref$1.compileToFunctions);
        function getShouldDecode(href) {
            return (div = div || document.createElement("div")).innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>', 
            div.innerHTML.indexOf("&#10;") > 0;
        }
        var shouldDecodeNewlines = !!inBrowser && getShouldDecode(!1), shouldDecodeNewlinesForHref = !!inBrowser && getShouldDecode(!0), idToTemplate = cached((function(id) {
            var el = query(id);
            return el && el.innerHTML;
        })), mount = Vue.prototype.$mount;
        Vue.prototype.$mount = function(el, hydrating) {
            if ((el = el && query(el)) === document.body || el === document.documentElement) return this;
            var options = this.$options;
            if (!options.render) {
                var template = options.template;
                if (template) if ("string" == typeof template) "#" === template.charAt(0) && (template = idToTemplate(template)); else {
                    if (!template.nodeType) return this;
                    template = template.innerHTML;
                } else el && (template = function(el) {
                    if (el.outerHTML) return el.outerHTML;
                    var container = document.createElement("div");
                    return container.appendChild(el.cloneNode(!0)), container.innerHTML;
                }(el));
                if (template) {
                    0;
                    var ref = compileToFunctions(template, {
                        outputSourceRange: !1,
                        shouldDecodeNewlines: shouldDecodeNewlines,
                        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                        delimiters: options.delimiters,
                        comments: options.comments
                    }, this), render = ref.render, staticRenderFns = ref.staticRenderFns;
                    options.render = render, options.staticRenderFns = staticRenderFns;
                }
            }
            return mount.call(this, el, hydrating);
        }, Vue.compile = compileToFunctions, __webpack_exports__.a = Vue;
    }).call(this, __webpack_require__(16), __webpack_require__(367).setImmediate);
}, , , , , , , , , function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/rate-icon.png?8d43e709d8c7df1aa6a11d00e1e84a9d";
}, , , , , , , , , function(module, exports, __webpack_require__) {
    var content = __webpack_require__(309);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("2042c968", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(311);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("492782c5", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(313);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("3bf0d2b0", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(315);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("ac68fa5e", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(318);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("a7b3023c", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(320);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("fefb32aa", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(322);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("72940ea4", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(325);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("43bed206", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(327);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("fd725a4a", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(331);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("38d135ac", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(339);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("77146ce9", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(342);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("13942f3d", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(345);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("35eda575", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(348);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("3ebb5511", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(350);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("7eff301e", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(352);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("2c8e7419", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(354);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("54e43793", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(356);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("5138a3b7", content, !1, {});
}, function(module, exports) {
    module.exports = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    };
}, function(module, exports) {
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    module.exports = function(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), 
        Constructor;
    };
}, , , , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ExtensionMode) {
        ExtensionMode.NORMAL = "NORMAL", ExtensionMode.ANNOUNCEMENT = "ANNOUNCEMENT";
    }(exports.ExtensionMode || (exports.ExtensionMode = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(TabContentEvents) {
        TabContentEvents.CREATE_TAB = "CREATE_TAB";
    }(exports.TabContentEvents || (exports.TabContentEvents = {}));
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/icon-power.svg?9bcb9d4cb313ddb2bb7605080c15bf00";
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const __1 = __webpack_require__(1), TabContentEvents_1 = __webpack_require__(140);
    exports.TabDispatcher = class TabDispatcher {
        constructor(dispatcher) {
            this.dispatcher = dispatcher;
        }
        create(createProps) {
            this.dispatcher.emit(new __1.MarioEvent(TabContentEvents_1.TabContentEvents.CREATE_TAB, createProps));
        }
    };
}, function(module, exports, __webpack_require__) {
    module.exports = function() {
        var _$src_1 = {}, _this = this;
        _$src_1 = {
            name: "vue",
            init: function(client, Vue) {
                if (void 0 === Vue && (Vue = window.Vue), !Vue) throw new Error("cannot find Vue");
                var prev = Vue.config.errorHandler;
                return Vue.config.errorHandler = function(err, vm, info) {
                    var report = new client.BugsnagReport(err.name, err.message, client.BugsnagReport.getStacktrace(err), {
                        severity: "error",
                        unhandled: !0,
                        severityReason: {
                            type: "unhandledException"
                        }
                    }, err);
                    report.updateMetaData("vue", {
                        errorInfo: info,
                        component: vm ? formatComponentName(vm, !0) : void 0,
                        props: vm ? vm.$options.propsData : void 0
                    }), client.notify(report), "undefined" != typeof console && "function" == typeof console.error && console.error(err), 
                    "function" == typeof prev && prev.call(_this, err, vm, info);
                }, null;
            }
        };
        var formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) return "<Root>";
            var options = "function" == typeof vm && null != vm.cid ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {}, name = options.name || options._componentTag, file = options.__file;
            if (!name && file) {
                var match = file.match(/([^/\\]+)\.vue$/);
                name = match && match[1];
            }
            return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && !1 !== includeFile ? " at " + file : "");
        }, classify = _$src_1.classify = function(str) {
            return str.replace(/(?:^|[-_])(\w)/g, (function(c) {
                return c.toUpperCase();
            })).replace(/[-_]/g, "");
        };
        return _$src_1;
    }();
}, function(module, exports) {
    module.exports = function(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    };
}, function(module, exports, __webpack_require__) {
    !function(exports) {
        "use strict";
        function get(element) {
            return getComputedStyle(element);
        }
        function set(element, obj) {
            for (var key in obj) {
                var val = obj[key];
                "number" == typeof val && (val += "px"), element.style[key] = val;
            }
            return element;
        }
        function div(className) {
            var div = document.createElement("div");
            return div.className = className, div;
        }
        var elMatches = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
        function matches(element, query) {
            if (!elMatches) throw new Error("No element matching method supported");
            return elMatches.call(element, query);
        }
        function remove(element) {
            element.remove ? element.remove() : element.parentNode && element.parentNode.removeChild(element);
        }
        function queryChildren(element, selector) {
            return Array.prototype.filter.call(element.children, (function(child) {
                return matches(child, selector);
            }));
        }
        var cls_main = "ps", cls_rtl = "ps__rtl", cls_element = {
            thumb: function(x) {
                return "ps__thumb-" + x;
            },
            rail: function(x) {
                return "ps__rail-" + x;
            },
            consuming: "ps__child--consume"
        }, cls_state = {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(x) {
                return "ps--active-" + x;
            },
            scrolling: function(x) {
                return "ps--scrolling-" + x;
            }
        }, scrollingClassTimeout = {
            x: null,
            y: null
        };
        function addScrollingClass(i, x) {
            var classList = i.element.classList, className = cls_state.scrolling(x);
            classList.contains(className) ? clearTimeout(scrollingClassTimeout[x]) : classList.add(className);
        }
        function removeScrollingClass(i, x) {
            scrollingClassTimeout[x] = setTimeout((function() {
                return i.isAlive && i.element.classList.remove(cls_state.scrolling(x));
            }), i.settings.scrollingThreshold);
        }
        var EventElement = function(element) {
            this.element = element, this.handlers = {};
        }, prototypeAccessors = {
            isEmpty: {
                configurable: !0
            }
        };
        EventElement.prototype.bind = function(eventName, handler) {
            void 0 === this.handlers[eventName] && (this.handlers[eventName] = []), this.handlers[eventName].push(handler), 
            this.element.addEventListener(eventName, handler, !1);
        }, EventElement.prototype.unbind = function(eventName, target) {
            var this$1 = this;
            this.handlers[eventName] = this.handlers[eventName].filter((function(handler) {
                return !(!target || handler === target) || (this$1.element.removeEventListener(eventName, handler, !1), 
                !1);
            }));
        }, EventElement.prototype.unbindAll = function() {
            for (var name in this.handlers) this.unbind(name);
        }, prototypeAccessors.isEmpty.get = function() {
            var this$1 = this;
            return Object.keys(this.handlers).every((function(key) {
                return 0 === this$1.handlers[key].length;
            }));
        }, Object.defineProperties(EventElement.prototype, prototypeAccessors);
        var EventManager = function() {
            this.eventElements = [];
        };
        function createEvent(name) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(name);
            var evt = document.createEvent("CustomEvent");
            return evt.initCustomEvent(name, !1, !1, void 0), evt;
        }
        function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
            var fields;
            if (void 0 === useScrollingClass && (useScrollingClass = !0), void 0 === forceFireReachEvent && (forceFireReachEvent = !1), 
            "top" === axis) fields = [ "contentHeight", "containerHeight", "scrollTop", "y", "up", "down" ]; else {
                if ("left" !== axis) throw new Error("A proper axis should be provided");
                fields = [ "contentWidth", "containerWidth", "scrollLeft", "x", "left", "right" ];
            }
            !function(i, diff, ref, useScrollingClass, forceFireReachEvent) {
                var contentHeight = ref[0], containerHeight = ref[1], scrollTop = ref[2], y = ref[3], up = ref[4], down = ref[5];
                void 0 === useScrollingClass && (useScrollingClass = !0), void 0 === forceFireReachEvent && (forceFireReachEvent = !1);
                var element = i.element;
                i.reach[y] = null, element[scrollTop] < 1 && (i.reach[y] = "start"), element[scrollTop] > i[contentHeight] - i[containerHeight] - 1 && (i.reach[y] = "end"), 
                diff && (element.dispatchEvent(createEvent("ps-scroll-" + y)), diff < 0 ? element.dispatchEvent(createEvent("ps-scroll-" + up)) : diff > 0 && element.dispatchEvent(createEvent("ps-scroll-" + down)), 
                useScrollingClass && function(i, x) {
                    addScrollingClass(i, x), removeScrollingClass(i, x);
                }(i, y)), i.reach[y] && (diff || forceFireReachEvent) && element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
            }(i, diff, fields, useScrollingClass, forceFireReachEvent);
        }
        function toInt(x) {
            return parseInt(x, 10) || 0;
        }
        EventManager.prototype.eventElement = function(element) {
            var ee = this.eventElements.filter((function(ee) {
                return ee.element === element;
            }))[0];
            return ee || (ee = new EventElement(element), this.eventElements.push(ee)), ee;
        }, EventManager.prototype.bind = function(element, eventName, handler) {
            this.eventElement(element).bind(eventName, handler);
        }, EventManager.prototype.unbind = function(element, eventName, handler) {
            var ee = this.eventElement(element);
            ee.unbind(eventName, handler), ee.isEmpty && this.eventElements.splice(this.eventElements.indexOf(ee), 1);
        }, EventManager.prototype.unbindAll = function() {
            this.eventElements.forEach((function(e) {
                return e.unbindAll();
            })), this.eventElements = [];
        }, EventManager.prototype.once = function(element, eventName, handler) {
            var ee = this.eventElement(element), onceHandler = function(evt) {
                ee.unbind(eventName, onceHandler), handler(evt);
            };
            ee.bind(eventName, onceHandler);
        };
        var env = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        };
        function updateGeometry(i) {
            var element = i.element, roundedScrollTop = Math.floor(element.scrollTop), rect = element.getBoundingClientRect();
            i.containerWidth = Math.ceil(rect.width), i.containerHeight = Math.ceil(rect.height), 
            i.contentWidth = element.scrollWidth, i.contentHeight = element.scrollHeight, element.contains(i.scrollbarXRail) || (queryChildren(element, cls_element.rail("x")).forEach((function(el) {
                return remove(el);
            })), element.appendChild(i.scrollbarXRail)), element.contains(i.scrollbarYRail) || (queryChildren(element, cls_element.rail("y")).forEach((function(el) {
                return remove(el);
            })), element.appendChild(i.scrollbarYRail)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, 
            i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, 
            i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth)), 
            i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, 
            !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, 
            i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, 
            i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight)), 
            i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, 
            i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), 
            i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight), 
            function(element, i) {
                var xRailOffset = {
                    width: i.railXWidth
                }, roundedScrollTop = Math.floor(element.scrollTop);
                i.isRtl ? xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth : xRailOffset.left = element.scrollLeft, 
                i.isScrollbarXUsingBottom ? xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop : xRailOffset.top = i.scrollbarXTop + roundedScrollTop, 
                set(i.scrollbarXRail, xRailOffset);
                var yRailOffset = {
                    top: roundedScrollTop,
                    height: i.railYHeight
                };
                i.isScrollbarYUsingRight ? i.isRtl ? yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9 : yRailOffset.right = i.scrollbarYRight - element.scrollLeft : i.isRtl ? yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : yRailOffset.left = i.scrollbarYLeft + element.scrollLeft, 
                set(i.scrollbarYRail, yRailOffset), set(i.scrollbarX, {
                    left: i.scrollbarXLeft,
                    width: i.scrollbarXWidth - i.railBorderXWidth
                }), set(i.scrollbarY, {
                    top: i.scrollbarYTop,
                    height: i.scrollbarYHeight - i.railBorderYWidth
                });
            }(element, i), i.scrollbarXActive ? element.classList.add(cls_state.active("x")) : (element.classList.remove(cls_state.active("x")), 
            i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, element.scrollLeft = !0 === i.isRtl ? i.contentWidth : 0), 
            i.scrollbarYActive ? element.classList.add(cls_state.active("y")) : (element.classList.remove(cls_state.active("y")), 
            i.scrollbarYHeight = 0, i.scrollbarYTop = 0, element.scrollTop = 0);
        }
        function getThumbSize(i, thumbSize) {
            return i.settings.minScrollbarLength && (thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength)), 
            i.settings.maxScrollbarLength && (thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength)), 
            thumbSize;
        }
        function bindMouseScrollHandler(i, ref) {
            var containerHeight = ref[0], contentHeight = ref[1], pageY = ref[2], railYHeight = ref[3], scrollbarY = ref[4], scrollbarYHeight = ref[5], scrollTop = ref[6], y = ref[7], scrollbarYRail = ref[8], element = i.element, startingScrollTop = null, startingMousePageY = null, scrollBy = null;
            function mouseMoveHandler(e) {
                e.touches && e.touches[0] && (e[pageY] = e.touches[0].pageY), element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY), 
                addScrollingClass(i, y), updateGeometry(i), e.stopPropagation(), e.preventDefault();
            }
            function mouseUpHandler() {
                removeScrollingClass(i, y), i[scrollbarYRail].classList.remove(cls_state.clicking), 
                i.event.unbind(i.ownerDocument, "mousemove", mouseMoveHandler);
            }
            function bindMoves(e, touchMode) {
                startingScrollTop = element[scrollTop], touchMode && e.touches && (e[pageY] = e.touches[0].pageY), 
                startingMousePageY = e[pageY], scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]), 
                touchMode ? i.event.bind(i.ownerDocument, "touchmove", mouseMoveHandler) : (i.event.bind(i.ownerDocument, "mousemove", mouseMoveHandler), 
                i.event.once(i.ownerDocument, "mouseup", mouseUpHandler), e.preventDefault()), i[scrollbarYRail].classList.add(cls_state.clicking), 
                e.stopPropagation();
            }
            i.event.bind(i[scrollbarY], "mousedown", (function(e) {
                bindMoves(e);
            })), i.event.bind(i[scrollbarY], "touchstart", (function(e) {
                bindMoves(e, !0);
            }));
        }
        var handlers = {
            "click-rail": function(i) {
                i.element, i.event.bind(i.scrollbarY, "mousedown", (function(e) {
                    return e.stopPropagation();
                })), i.event.bind(i.scrollbarYRail, "mousedown", (function(e) {
                    var direction = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top > i.scrollbarYTop ? 1 : -1;
                    i.element.scrollTop += direction * i.containerHeight, updateGeometry(i), e.stopPropagation();
                })), i.event.bind(i.scrollbarX, "mousedown", (function(e) {
                    return e.stopPropagation();
                })), i.event.bind(i.scrollbarXRail, "mousedown", (function(e) {
                    var direction = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left > i.scrollbarXLeft ? 1 : -1;
                    i.element.scrollLeft += direction * i.containerWidth, updateGeometry(i), e.stopPropagation();
                }));
            },
            "drag-thumb": function(i) {
                bindMouseScrollHandler(i, [ "containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail" ]), 
                bindMouseScrollHandler(i, [ "containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail" ]);
            },
            keyboard: function(i) {
                var element = i.element;
                i.event.bind(i.ownerDocument, "keydown", (function(e) {
                    if (!(e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) && (matches(element, ":hover") || matches(i.scrollbarX, ":focus") || matches(i.scrollbarY, ":focus"))) {
                        var el, activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
                        if (activeElement) {
                            if ("IFRAME" === activeElement.tagName) activeElement = activeElement.contentDocument.activeElement; else for (;activeElement.shadowRoot; ) activeElement = activeElement.shadowRoot.activeElement;
                            if (matches(el = activeElement, "input,[contenteditable]") || matches(el, "select,[contenteditable]") || matches(el, "textarea,[contenteditable]") || matches(el, "button,[contenteditable]")) return;
                        }
                        var deltaX = 0, deltaY = 0;
                        switch (e.which) {
                          case 37:
                            deltaX = e.metaKey ? -i.contentWidth : e.altKey ? -i.containerWidth : -30;
                            break;

                          case 38:
                            deltaY = e.metaKey ? i.contentHeight : e.altKey ? i.containerHeight : 30;
                            break;

                          case 39:
                            deltaX = e.metaKey ? i.contentWidth : e.altKey ? i.containerWidth : 30;
                            break;

                          case 40:
                            deltaY = e.metaKey ? -i.contentHeight : e.altKey ? -i.containerHeight : -30;
                            break;

                          case 32:
                            deltaY = e.shiftKey ? i.containerHeight : -i.containerHeight;
                            break;

                          case 33:
                            deltaY = i.containerHeight;
                            break;

                          case 34:
                            deltaY = -i.containerHeight;
                            break;

                          case 36:
                            deltaY = i.contentHeight;
                            break;

                          case 35:
                            deltaY = -i.contentHeight;
                            break;

                          default:
                            return;
                        }
                        i.settings.suppressScrollX && 0 !== deltaX || i.settings.suppressScrollY && 0 !== deltaY || (element.scrollTop -= deltaY, 
                        element.scrollLeft += deltaX, updateGeometry(i), function(deltaX, deltaY) {
                            var scrollTop = Math.floor(element.scrollTop);
                            if (0 === deltaX) {
                                if (!i.scrollbarYActive) return !1;
                                if (0 === scrollTop && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) return !i.settings.wheelPropagation;
                            }
                            var scrollLeft = element.scrollLeft;
                            if (0 === deltaY) {
                                if (!i.scrollbarXActive) return !1;
                                if (0 === scrollLeft && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) return !i.settings.wheelPropagation;
                            }
                            return !0;
                        }(deltaX, deltaY) && e.preventDefault());
                    }
                }));
            },
            wheel: function(i) {
                var element = i.element;
                function mousewheelHandler(e) {
                    var ref = function(e) {
                        var deltaX = e.deltaX, deltaY = -1 * e.deltaY;
                        return void 0 !== deltaX && void 0 !== deltaY || (deltaX = -1 * e.wheelDeltaX / 6, 
                        deltaY = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (deltaX *= 10, 
                        deltaY *= 10), deltaX != deltaX && deltaY != deltaY && (deltaX = 0, deltaY = e.wheelDelta), 
                        e.shiftKey ? [ -deltaY, -deltaX ] : [ deltaX, deltaY ];
                    }(e), deltaX = ref[0], deltaY = ref[1];
                    if (!function(target, deltaX, deltaY) {
                        if (!env.isWebKit && element.querySelector("select:focus")) return !0;
                        if (!element.contains(target)) return !1;
                        for (var cursor = target; cursor && cursor !== element; ) {
                            if (cursor.classList.contains(cls_element.consuming)) return !0;
                            var style = get(cursor);
                            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
                                var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                                if (maxScrollTop > 0 && (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0)) return !0;
                            }
                            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
                                var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
                                if (maxScrollLeft > 0 && (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0)) return !0;
                            }
                            cursor = cursor.parentNode;
                        }
                        return !1;
                    }(e.target, deltaX, deltaY)) {
                        var shouldPrevent = !1;
                        i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (deltaY ? element.scrollTop -= deltaY * i.settings.wheelSpeed : element.scrollTop += deltaX * i.settings.wheelSpeed, 
                        shouldPrevent = !0) : i.scrollbarXActive && !i.scrollbarYActive && (deltaX ? element.scrollLeft += deltaX * i.settings.wheelSpeed : element.scrollLeft -= deltaY * i.settings.wheelSpeed, 
                        shouldPrevent = !0) : (element.scrollTop -= deltaY * i.settings.wheelSpeed, element.scrollLeft += deltaX * i.settings.wheelSpeed), 
                        updateGeometry(i), (shouldPrevent = shouldPrevent || function(deltaX, deltaY) {
                            var roundedScrollTop = Math.floor(element.scrollTop), isTop = 0 === element.scrollTop, isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight, isLeft = 0 === element.scrollLeft, isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
                            return !(Math.abs(deltaY) > Math.abs(deltaX) ? isTop || isBottom : isLeft || isRight) || !i.settings.wheelPropagation;
                        }(deltaX, deltaY)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
                    }
                }
                void 0 !== window.onwheel ? i.event.bind(element, "wheel", mousewheelHandler) : void 0 !== window.onmousewheel && i.event.bind(element, "mousewheel", mousewheelHandler);
            },
            touch: function(i) {
                if (env.supportsTouch || env.supportsIePointer) {
                    var element = i.element, startOffset = {}, startTime = 0, speed = {}, easingLoop = null;
                    env.supportsTouch ? (i.event.bind(element, "touchstart", touchStart), i.event.bind(element, "touchmove", touchMove), 
                    i.event.bind(element, "touchend", touchEnd)) : env.supportsIePointer && (window.PointerEvent ? (i.event.bind(element, "pointerdown", touchStart), 
                    i.event.bind(element, "pointermove", touchMove), i.event.bind(element, "pointerup", touchEnd)) : window.MSPointerEvent && (i.event.bind(element, "MSPointerDown", touchStart), 
                    i.event.bind(element, "MSPointerMove", touchMove), i.event.bind(element, "MSPointerUp", touchEnd)));
                }
                function applyTouchMove(differenceX, differenceY) {
                    element.scrollTop -= differenceY, element.scrollLeft -= differenceX, updateGeometry(i);
                }
                function getTouch(e) {
                    return e.targetTouches ? e.targetTouches[0] : e;
                }
                function shouldHandle(e) {
                    return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE));
                }
                function touchStart(e) {
                    if (shouldHandle(e)) {
                        var touch = getTouch(e);
                        startOffset.pageX = touch.pageX, startOffset.pageY = touch.pageY, startTime = (new Date).getTime(), 
                        null !== easingLoop && clearInterval(easingLoop);
                    }
                }
                function touchMove(e) {
                    if (shouldHandle(e)) {
                        var touch = getTouch(e), currentOffset = {
                            pageX: touch.pageX,
                            pageY: touch.pageY
                        }, differenceX = currentOffset.pageX - startOffset.pageX, differenceY = currentOffset.pageY - startOffset.pageY;
                        if (function(target, deltaX, deltaY) {
                            if (!element.contains(target)) return !1;
                            for (var cursor = target; cursor && cursor !== element; ) {
                                if (cursor.classList.contains(cls_element.consuming)) return !0;
                                var style = get(cursor);
                                if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
                                    var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                                    if (maxScrollTop > 0 && (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0)) return !0;
                                }
                                if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
                                    var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
                                    if (maxScrollLeft > 0 && (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0)) return !0;
                                }
                                cursor = cursor.parentNode;
                            }
                            return !1;
                        }(e.target, differenceX, differenceY)) return;
                        applyTouchMove(differenceX, differenceY), startOffset = currentOffset;
                        var currentTime = (new Date).getTime(), timeGap = currentTime - startTime;
                        timeGap > 0 && (speed.x = differenceX / timeGap, speed.y = differenceY / timeGap, 
                        startTime = currentTime), function(deltaX, deltaY) {
                            var scrollTop = Math.floor(element.scrollTop), scrollLeft = element.scrollLeft, magnitudeX = Math.abs(deltaX), magnitudeY = Math.abs(deltaY);
                            if (magnitudeY > magnitudeX) {
                                if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && 0 === scrollTop) return 0 === window.scrollY && deltaY > 0 && env.isChrome;
                            } else if (magnitudeX > magnitudeY && (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && 0 === scrollLeft)) return !0;
                            return !0;
                        }(differenceX, differenceY) && e.preventDefault();
                    }
                }
                function touchEnd() {
                    i.settings.swipeEasing && (clearInterval(easingLoop), easingLoop = setInterval((function() {
                        i.isInitialized ? clearInterval(easingLoop) : speed.x || speed.y ? Math.abs(speed.x) < .01 && Math.abs(speed.y) < .01 ? clearInterval(easingLoop) : (applyTouchMove(30 * speed.x, 30 * speed.y), 
                        speed.x *= .8, speed.y *= .8) : clearInterval(easingLoop);
                    }), 10));
                }
            }
        }, PerfectScrollbar = function(element, userSettings) {
            var this$1 = this;
            if (void 0 === userSettings && (userSettings = {}), "string" == typeof element && (element = document.querySelector(element)), 
            !element || !element.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var key in this.element = element, element.classList.add(cls_main), this.settings = {
                handlers: [ "click-rail", "drag-thumb", "keyboard", "wheel", "touch" ],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollingThreshold: 1e3,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !0,
                wheelSpeed: 1
            }, userSettings) this.settings[key] = userSettings[key];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, 
            this.contentHeight = null;
            var result, originalScrollLeft, focus = function() {
                return element.classList.add(cls_state.focus);
            }, blur = function() {
                return element.classList.remove(cls_state.focus);
            };
            this.isRtl = "rtl" === get(element).direction, !0 === this.isRtl && element.classList.add(cls_rtl), 
            this.isNegativeScroll = (originalScrollLeft = element.scrollLeft, element.scrollLeft = -1, 
            result = element.scrollLeft < 0, element.scrollLeft = originalScrollLeft, result), 
            this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0, 
            this.event = new EventManager, this.ownerDocument = element.ownerDocument || document, 
            this.scrollbarXRail = div(cls_element.rail("x")), element.appendChild(this.scrollbarXRail), 
            this.scrollbarX = div(cls_element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), 
            this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", focus), 
            this.event.bind(this.scrollbarX, "blur", blur), this.scrollbarXActive = null, this.scrollbarXWidth = null, 
            this.scrollbarXLeft = null;
            var railXStyle = get(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(railXStyle.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, 
            this.scrollbarXTop = toInt(railXStyle.top)) : this.isScrollbarXUsingBottom = !0, 
            this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth), 
            set(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight), 
            set(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = div(cls_element.rail("y")), 
            element.appendChild(this.scrollbarYRail), this.scrollbarY = div(cls_element.thumb("y")), 
            this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), 
            this.event.bind(this.scrollbarY, "focus", focus), this.event.bind(this.scrollbarY, "blur", blur), 
            this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var railYStyle = get(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(railYStyle.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, 
            this.scrollbarYLeft = toInt(railYStyle.left)) : this.isScrollbarYUsingRight = !0, 
            this.scrollbarYOuterWidth = this.isRtl ? function(element) {
                var styles = get(element);
                return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
            }(this.scrollbarY) : null, this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth), 
            set(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom), 
            set(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: element.scrollLeft <= 0 ? "start" : element.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: element.scrollTop <= 0 ? "start" : element.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach((function(handlerName) {
                return handlers[handlerName](this$1);
            })), this.lastScrollTop = Math.floor(element.scrollTop), this.lastScrollLeft = element.scrollLeft, 
            this.event.bind(this.element, "scroll", (function(e) {
                return this$1.onScroll(e);
            })), updateGeometry(this);
        };
        PerfectScrollbar.prototype.update = function() {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, 
            set(this.scrollbarXRail, {
                display: "block"
            }), set(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight), 
            this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom), 
            set(this.scrollbarXRail, {
                display: "none"
            }), set(this.scrollbarYRail, {
                display: "none"
            }), updateGeometry(this), processScrollDiff(this, "top", 0, !1, !0), processScrollDiff(this, "left", 0, !1, !0), 
            set(this.scrollbarXRail, {
                display: ""
            }), set(this.scrollbarYRail, {
                display: ""
            }));
        }, PerfectScrollbar.prototype.onScroll = function(e) {
            this.isAlive && (updateGeometry(this), processScrollDiff(this, "top", this.element.scrollTop - this.lastScrollTop), 
            processScrollDiff(this, "left", this.element.scrollLeft - this.lastScrollLeft), 
            this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
        }, PerfectScrollbar.prototype.destroy = function() {
            this.isAlive && (this.event.unbindAll(), remove(this.scrollbarX), remove(this.scrollbarY), 
            remove(this.scrollbarXRail), remove(this.scrollbarYRail), this.removePsClasses(), 
            this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, 
            this.scrollbarYRail = null, this.isAlive = !1);
        }, PerfectScrollbar.prototype.removePsClasses = function() {
            this.element.className = this.element.className.split(" ").filter((function(name) {
                return !name.match(/^ps([-_].+|)$/);
            })).join(" ");
        };
        var PerfectScrollbar$1 = {
            name: "PerfectScrollbar",
            props: {
                options: {
                    type: Object,
                    required: !1,
                    default: function() {}
                },
                tag: {
                    type: String,
                    required: !1,
                    default: "div"
                },
                watchOptions: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            data: function() {
                return {
                    ps: null
                };
            },
            watch: {
                watchOptions: function(shouldWatch) {
                    !shouldWatch && this.watcher ? this.watcher() : this.createWatcher();
                }
            },
            mounted: function() {
                this.create(), this.watchOptions && this.createWatcher();
            },
            updated: function() {
                var this$1 = this;
                this.$nextTick((function() {
                    this$1.update();
                }));
            },
            beforeDestroy: function() {
                this.destroy();
            },
            methods: {
                create: function() {
                    this.ps && this.$isServer || (this.ps = new PerfectScrollbar(this.$refs.container, this.options));
                },
                createWatcher: function() {
                    var this$1 = this;
                    this.watcher = this.$watch("options", (function() {
                        this$1.destroy(), this$1.create();
                    }), {
                        deep: !0
                    });
                },
                update: function() {
                    this.ps && this.ps.update();
                },
                destroy: function() {
                    this.ps && (this.ps.destroy(), this.ps = null);
                }
            },
            render: function(h) {
                return h(this.tag, {
                    ref: "container",
                    class: "ps",
                    on: this.$listeners
                }, this.$slots.default);
            }
        };
        function install(Vue, settings) {
            settings && (settings.name && "string" == typeof settings.name && (PerfectScrollbar$1.name = settings.name), 
            settings.options && "object" == typeof settings.options && (PerfectScrollbar$1.props.options.default = function() {
                return settings.options;
            }), settings.tag && "string" == typeof settings.tag && (PerfectScrollbar$1.props.tag.default = settings.tag), 
            settings.watchOptions && "boolean" == typeof settings.watchOptions && (PerfectScrollbar$1.props.watchOptions = settings.watchOptions)), 
            Vue.component(PerfectScrollbar$1.name, PerfectScrollbar$1);
        }
        exports.install = install, exports.PerfectScrollbar = PerfectScrollbar$1, exports.default = install, 
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }(exports);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
    var runtime = function(exports) {
        "use strict";
        var Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
            return generator._invoke = function(innerFn, self, context) {
                var state = "suspendedStart";
                return function(method, arg) {
                    if ("executing" === state) throw new Error("Generator is already running");
                    if ("completed" === state) {
                        if ("throw" === method) throw arg;
                        return doneResult();
                    }
                    for (context.method = method, context.arg = arg; ;) {
                        var delegate = context.delegate;
                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);
                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }
                        if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                            if ("suspendedStart" === state) throw state = "completed", context.arg;
                            context.dispatchException(context.arg);
                        } else "return" === context.method && context.abrupt("return", context.arg);
                        state = "executing";
                        var record = tryCatch(innerFn, self, context);
                        if ("normal" === record.type) {
                            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                            return {
                                value: record.arg,
                                done: context.done
                            };
                        }
                        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                    }
                };
            }(innerFn, self, context), generator;
        }
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        function defineIteratorMethods(prototype) {
            [ "next", "throw", "return" ].forEach((function(method) {
                prototype[method] = function(arg) {
                    return this._invoke(method, arg);
                };
            }));
        }
        function AsyncIterator(generator, PromiseImpl) {
            var previousPromise;
            this._invoke = function(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl((function(resolve, reject) {
                        !function invoke(method, arg, resolve, reject) {
                            var record = tryCatch(generator[method], generator, arg);
                            if ("throw" !== record.type) {
                                var result = record.arg, value = result.value;
                                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then((function(value) {
                                    invoke("next", value, resolve, reject);
                                }), (function(err) {
                                    invoke("throw", err, resolve, reject);
                                })) : PromiseImpl.resolve(value).then((function(unwrapped) {
                                    result.value = unwrapped, resolve(result);
                                }), (function(error) {
                                    return invoke("throw", error, resolve, reject);
                                }));
                            }
                            reject(record.arg);
                        }(method, arg, resolve, reject);
                    }));
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            };
        }
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (void 0 === method) {
                if (context.delegate = null, "throw" === context.method) {
                    if (delegate.iterator.return && (context.method = "return", context.arg = void 0, 
                    maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                    context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, 
            context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, 
            "return" !== context.method && (context.method = "next", context.arg = void 0), 
            context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), 
            context.delegate = null, ContinueSentinel);
        }
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], 
            entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
        }
        function Context(tryLocsList) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if ("function" == typeof iterable.next) return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        for (;++i < iterable.length; ) if (hasOwn.call(iterable, i)) return next.value = iterable[i], 
                        next.done = !1, next;
                        return next.value = void 0, next.done = !0, next;
                    };
                    return next.next = next;
                }
            }
            return {
                next: doneResult
            };
        }
        function doneResult() {
            return {
                value: void 0,
                done: !0
            };
        }
        return GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype, 
        GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", 
        exports.isGeneratorFunction = function(genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function(genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, 
            toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), 
            genFun.prototype = Object.create(Gp), genFun;
        }, exports.awrap = function(arg) {
            return {
                __await: arg
            };
        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        }, exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then((function(result) {
                return result.done ? result.value : iter.next();
            }));
        }, defineIteratorMethods(Gp), Gp[toStringTagSymbol] = "Generator", Gp[iteratorSymbol] = function() {
            return this;
        }, Gp.toString = function() {
            return "[object Generator]";
        }, exports.keys = function(object) {
            var keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
                for (;keys.length; ) {
                    var key = keys.pop();
                    if (key in object) return next.value = key, next.done = !1, next;
                }
                return next.done = !0, next;
            };
        }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), 
                !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
            },
            stop: function() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", 
                    context.arg = void 0), !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i], record = entry.completion;
                    if ("root" === entry.tryLoc) return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        } else {
                            if (!hasFinally) throw new Error("try statement without catch or finally");
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", 
                this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function(record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, 
                this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), 
                ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), 
                    resetTryEntry(entry), ContinueSentinel;
                }
            },
            catch: function(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if ("throw" === record.type) {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                return this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
            }
        }, exports;
    }(module.exports);
    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        Function("r", "regeneratorRuntime = r")(runtime);
    }
}, function(module, exports) {
    var PanelOSAdBlockerClient = {
        PANELOS_CLIENT_CONSTS: {
            MESSAGE_ID: "PANELOS_MESSAGE",
            GET_ADBLOCKER_STATUS: "GET_ADBLOCKER_STATUS",
            GET_ADBLOCKER_COUNTERS: "GET_ADBLOCKER_COUNTERS",
            ENABLE_ADBLOCKER: "ENABLE_ADBLOCKER",
            DISABLE_ADBLOCKER: "DISABLE_ADBLOCKER"
        },
        PANELOS_CLIENT_ERRORS: {
            UNKNOWN: {
                code: 0,
                description: "error unknown"
            },
            GET_ADBLOCKER_STATUS: {
                code: 3,
                description: "error get AdBlocker status"
            },
            GET_ADBLOCKER_COUNTERS: {
                code: 4,
                description: "error get AdBlocker counters"
            },
            ENABLE_ADBLOCKER: {
                code: 5,
                description: "AdBlocker activation error"
            },
            DISABLE_ADBLOCKER: {
                code: 6,
                description: "AdBlocker deactivation error"
            }
        },
        GetMessage: function(type, content) {
            return {
                posdMessageId: this.PANELOS_CLIENT_CONSTS.MESSAGE_ID,
                type: type,
                content: content
            };
        },
        EnableAdBlocker: function(onEnabledCallback, onErrorCallback) {
            var _this = this;
            chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.ENABLE_ADBLOCKER, ""), (function(response) {
                response && response.adBlockerStatus && onEnabledCallback ? onEnabledCallback(response.adBlockerStatus) : onErrorCallback && onErrorCallback(_this.PANELOS_CLIENT_ERRORS.ENABLE_ADBLOCKER);
            }));
        },
        DisableAdBlocker: function(onDisabledCallback, onErrorCallback) {
            var _this2 = this;
            chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.DISABLE_ADBLOCKER, ""), (function(response) {
                response && response.adBlockerStatus && onDisabledCallback ? onDisabledCallback(response.adBlockerStatus) : onErrorCallback && onErrorCallback(_this2.PANELOS_CLIENT_ERRORS.DISABLE_ADBLOCKER);
            }));
        },
        GetAdBlockerStatus: function(onGetAdBlockerStatusCallback, onErrorCallback) {
            var _this3 = this;
            chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.GET_ADBLOCKER_STATUS, ""), (function(response) {
                response && response.adBlockerStatus && onGetAdBlockerStatusCallback ? onGetAdBlockerStatusCallback(response.adBlockerStatus) : onErrorCallback && onErrorCallback(_this3.PANELOS_CLIENT_ERRORS.GET_ADBLOCKER_STATUS);
            }));
        },
        GetAdBlockerCounters: function(onGetAdBlockerCountersCallback, onErrorCallback) {
            var _this4 = this;
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, (function(tabs) {
                tabs && tabs[0] && tabs[0].id && chrome.runtime.sendMessage(_this4.GetMessage(_this4.PANELOS_CLIENT_CONSTS.GET_ADBLOCKER_COUNTERS, tabs[0].id), (function(response) {
                    response && response.counters && onGetAdBlockerCountersCallback ? onGetAdBlockerCountersCallback(response.counters) : onErrorCallback && onErrorCallback(_this4.PANELOS_CLIENT_ERRORS.GET_ADBLOCKER_COUNTERS);
                }));
            }));
        }
    };
    window.PanelOSClient = PanelOSAdBlockerClient;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_CrossButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_CrossButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".cross_button {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.cross_button:hover::after,\n.cross_button:hover::before {\n  background: #A55EEA;\n}\n.cross_button::after {\n  display: block;\n  height: 2px;\n  content: '';\n  background: #717171;\n  transform: rotate(-45deg);\n  position: absolute;\n  width: 13px;\n  top: 7px;\n  left: 1px;\n}\n.cross_button::before {\n  display: block;\n  height: 2px;\n  content: '';\n  background: #717171;\n  transform: rotate(45deg);\n  position: absolute;\n  width: 13px;\n  left: 1px;\n  top: 7px;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Menu_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Menu_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".menu {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -1000px;\n}\n.menu.menu--active {\n  right: 0;\n  left: 0;\n}\n.menu.menu--active .menu__box {\n  right: 0;\n}\n.menu.menu--active .menu__shadow {\n  display: block;\n}\n.menu__shadow {\n  background: #000;\n  opacity: 0.4;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: none;\n  z-index: 90;\n}\n.menu__close {\n  position: absolute;\n  right: 9px;\n  top: 9px;\n}\n.menu__box {\n  transition: all 0.3s;\n  background: #fafafa;\n  top: 0;\n  right: -185px;\n  bottom: 0;\n  position: absolute;\n  width: 150px;\n  padding-top: 22px;\n  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n}\n.menu__list {\n  list-style: none;\n  padding: 0 15px;\n}\n.menu__item {\n  text-transform: uppercase;\n  padding: 5px 0;\n  font-size: 14px;\n}\n.menu__link {\n  color: #4aade6;\n  text-decoration: none;\n}\n.menu__link:hover {\n  text-decoration: underline;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_DotsButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_DotsButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".dots_button {\n  position: relative;\n  width: 9px;\n  height: 25px;\n  cursor: pointer;\n  margin-right: -3px;\n  display: inline-block;\n}\n.dots_button--active {\n  background: #edecea;\n}\n.dots_button__dot {\n  width: 3px;\n  height: 3px;\n  background: #1c98e0;\n  position: absolute;\n  left: 3px;\n}\n.dots_button__dot_top {\n  top: 3px;\n}\n.dots_button__dot_middle {\n  top: 11px;\n}\n.dots_button__dot_bottom {\n  bottom: 3px;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Loader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Loader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".loader {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n.loader.loader--dark .loader__spin {\n  border: 10px solid #382121;\n  border-top: 10px solid #fff;\n}\n.loader.loader--dark .loader__text {\n  color: #fff;\n}\n.loader__spin {\n  position: absolute;\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #A55EEA;\n  width: 100px;\n  height: 100px;\n  left: calc(50% - 50px);\n  top: calc(59% - 105px);\n  animation: spin 1s linear infinite;\n  z-index: 10000;\n}\n.loader__text {\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n  top: 270px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  letter-spacing: 1px;\n}\n.loader__bg {\n  background: #5a5a5a;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0.6;\n}\n@keyframes spin {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/logo.png?70ff766ae57cab773867cbe8427be5e4";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, "\n.logo {\n  cursor: pointer;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Promotion_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_Promotion_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".promotion--strong {\n  font-weight: 600;\n}\n.promotion--italic {\n  font-style: italic;\n}\n.promotion--normal {\n  font-style: normal;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_MainLayout_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_MainLayout_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".main_layout__header {\n  position: relative;\n  padding: 8px 16px 3px 16px;\n}\n.main_layout__body {\n  min-height: 465px;\n  position: relative;\n  background: #fff;\n}\n.main_layout__footer {\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 6px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 18px;\n  background: #f2f2f2;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.main_layout__footer a {\n  font-weight: 600;\n  color: #000;\n}\n.main_layout__footer a:visited {\n  color: #000;\n}\n.header_menu {\n  float: right;\n  margin-top: -3px;\n}\n.header_menu .dots_button {\n  vertical-align: middle;\n}\n.header_menu a.settings-link {\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  background-image: url(" + escape(__webpack_require__(323)) + ");\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/settings.svg?2c725b8eeeb5859a339f607742899095";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_List_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_List_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".list {\n  list-style-type: none;\n  margin-top: 10px;\n  text-align: left;\n  font-size: 14px;\n  line-height: 20px;\n  display: inline-block;\n}\n.list__item {\n  position: relative;\n  padding-left: 20px;\n}\n.list__item.list__item--check::before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  border-left: 1px solid #A55EEA;\n  border-bottom: 1px solid #A55EEA;\n  width: 10px;\n  height: 6px;\n  left: 0;\n  top: 4px;\n  transform: rotate(-45deg);\n}\n.list__item.list__item--cross::after {\n  display: block;\n  height: 2px;\n  content: '';\n  background: #717171;\n  transform: rotate(-45deg);\n  position: absolute;\n  width: 13px;\n  top: 9px;\n  left: 1px;\n}\n.list__item.list__item--cross::before {\n  display: block;\n  height: 2px;\n  content: '';\n  background: #717171;\n  transform: rotate(45deg);\n  position: absolute;\n  width: 13px;\n  left: 1px;\n  top: 9px;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_PowerButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_PowerButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".power_button {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  width: 92px;\n}\n.power_button .power_button--on {\n  height: 92px;\n  background-image: url(" + escape(__webpack_require__(328)) + ");\n  background-size: 92px 92px;\n}\n.power_button .power_button--off {\n  height: 92px;\n  background-image: url(" + escape(__webpack_require__(329)) + ');\n  background-size: 92px 92px;\n}\n.power_button__circle {\n  height: 42px;\n  width: 42px;\n  border-radius: 25px;\n  border: solid 2px #ffffff;\n  position: absolute;\n  top: -10px;\n  text-align: center;\n  box-sizing: content-box;\n  line-height: 40px;\n  transition: right 0.2s;\n}\n.power_button__circle::after {\n  display: inline-block;\n  content: "";\n  width: 19px;\n  height: 19px;\n  border-radius: 12px;\n  border: 2px solid #fff;\n  vertical-align: middle;\n}\n.power_button__circle::before {\n  display: inline-block;\n  content: "";\n  width: 2px;\n  height: 10px;\n  left: 15px;\n  top: 8px;\n  background: #fff;\n  position: absolute;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n', "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/power-button-on.svg?06f2fe6704c3b45e56256f52999ee844";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/power-button-off.svg?90e9e397b2f3ec36904d0ecfa3b5e021";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ProtectionLevelBar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ProtectionLevelBar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".protection-level-bar {\n  display: inline-block;\n  position: relative;\n  width: 270px;\n  height: 150px;\n}\n.protection-level-bar .level-meter {\n  background-repeat: no-repeat;\n  height: 100%;\n}\n.protection-level-bar .level-meter.level-1 {\n  background-image: url(" + escape(__webpack_require__(332)) + ");\n  background-size: 230px 110px;\n  background-position: 12px 20px;\n}\n.protection-level-bar .level-meter.level-2 {\n  background-image: url(" + escape(__webpack_require__(333)) + ");\n  background-size: 215px 125px;\n  background-position: 28px 5px;\n}\n.protection-level-bar .level-meter.level-3 {\n  background-image: url(" + escape(__webpack_require__(334)) + ");\n  background-size: 215px 130px;\n  background-position: 27px 2px;\n}\n.protection-level-bar .level-meter.level-4 {\n  background-image: url(" + escape(__webpack_require__(335)) + ");\n  background-size: 215px 125px;\n  background-position: 28px 7px;\n}\n.protection-level-bar .level-meter.level-5 {\n  background-image: url(" + escape(__webpack_require__(336)) + ");\n  background-size: 230px 110px;\n  background-position: 28px 23px;\n}\n.protection-level-bar .level-meter.level-6 {\n  background-image: url(" + escape(__webpack_require__(337)) + ");\n  background-size: 240px;\n  background-position: 27px 23px;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level1.svg?9b68de24dc3da39f8e30aa18af9064c8";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level2.svg?0468ecc488a9f38f3a8bcc75b7028b95";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level3.svg?8fdb499618f10c9e04c143aa8d8faa17";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level4.svg?aac32d64bf4b710584c6fd93b912a0c0";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level5.svg?b28804f6da69a97b33bc05c1de535b73";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/level6.svg?d25d8c2417d899af29ba943da3b9ab2c";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_MainPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_MainPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".status-box {\n  text-align: center;\n}\n.status-box .title {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  color: #A55EEA;\n}\n.status-box .note {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  padding-top: 5px;\n}\n.status-box .robot-box {\n  background: #E5E5E5;\n  text-align: right;\n  height: 75px;\n}\n.status-box .robot-box i {\n  background: url(" + escape(__webpack_require__(340)) + ") no-repeat;\n  display: inline-block;\n  width: 184px;\n  height: 135px;\n  margin-top: -20px;\n  margin-right: 7px;\n}\n.status__unprotected .title {\n  text-transform: uppercase;\n  padding-top: 43px;\n}\n.status__unprotected .power-button-box {\n  position: relative;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: -46px;\n}\n.status__protected .title {\n  padding-top: 42px;\n}\n.status__protected .power-button-box {\n  position: relative;\n  text-align: center;\n  margin-top: -75px;\n  margin-bottom: -25px;\n}\n.protection-level-bar {\n  margin-top: 15px;\n}\n.ad-box {\n  background: #191919;\n  color: #efefec;\n  padding: 60px 18px 45px 18px;\n  min-height: 200px;\n}\n.ip-details {\n  list-style-type: none;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n}\n.ip-details strong {\n  font-weight: 500;\n}\n.consent-box {\n  text-align: center;\n  font-size: 9px;\n  margin-top: 20px;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/main-robot.svg?49df81a78068887210dc87101d5ff25f";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SimpleLayout_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SimpleLayout_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".simple_layout__header {\n  position: relative;\n  padding: 8px 16px 3px 16px;\n}\n.simple_layout__body {\n  text-align: center;\n  min-height: 465px;\n  height: 465px;\n}\n.simple_layout__footer {\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 6px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  line-height: 18px;\n  background: #f2f2f2;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.simple_layout__footer a {\n  font-weight: 600;\n  color: #000;\n}\n.simple_layout__footer a:visited {\n  color: #000;\n}\n.simple_layout__close {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\nh1 {\n  font-family: Aileron;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 26px;\n  text-align: center;\n}\n.button_pink {\n  background: #A55EEA;\n  color: #fff;\n  font-weight: 600;\n  padding: 12px;\n  border-radius: 6px;\n  width: 210px;\n  font-size: 14px;\n  cursor: pointer;\n  border: 0;\n}\n.button_pink:hover {\n  background: #fff;\n  border: 2px solid #A55EEA;\n  color: #A55EEA;\n}\n.welcome-explanation-text {\n  padding: 20px 15px;\n  font-family: Aileron;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n}\n.cta-image {\n  padding-bottom: 27px;\n}\n.agreement_cancel,\n.agreement_agree {\n  display: inline-block;\n  width: 108px;\n  height: 36px;\n  padding: 0;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/interruptionImage.svg?c1445c673c7d4369e64f47bf13112a04";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_InterruptionPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_InterruptionPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, "", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/robot.svg?9c2a5c7237a1cd8a2e4000056d095019";
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_RateUsPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_RateUsPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".rate-icon {\n  width: 40px;\n  padding: 0 3px;\n}\n.rate-icon--greyed {\n  filter: grayscale(100%);\n  opacity: 0.7;\n}\n.recommend-us {\n  padding-top: 20px;\n  font-family: Aileron;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n}\n.footer-robot {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ToggleButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ToggleButton_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".toggle_button {\n  display: inline-block;\n  width: 38px;\n  height: 13px;\n  border-radius: 11.5px;\n  border: solid 1px #999;\n  background-color: #C4C4C4;\n  position: relative;\n  cursor: pointer;\n}\n.toggle_button::after {\n  transition: left 0.2s;\n}\n.toggle_button.toggle_button--on {\n  background: transparent;\n}\n.toggle_button.toggle_button--on:hover::after {\n  background-color: #D2D2D2;\n}\n.toggle_button.toggle_button--on::after {\n  display: block;\n  position: absolute;\n  left: 18px;\n  top: -5px;\n  content: '';\n  width: 18px;\n  height: 18px;\n  border-radius: 22px;\n  border: solid 1px #fff;\n  background: url(" + escape(__webpack_require__(197)) + ") #D2D2D2 no-repeat;\n  background-position: 4px 3px;\n}\n.toggle_button.toggle_button--off:hover::after {\n  background-color: #A5989D;\n}\n.toggle_button.toggle_button--off::after {\n  display: block;\n  position: absolute;\n  left: -2px;\n  top: -5px;\n  content: '';\n  width: 18px;\n  height: 18px;\n  border-radius: 22px;\n  border: solid 1px #fff;\n  background: url(" + escape(__webpack_require__(197)) + ") #A5989D no-repeat;\n  background-position: 4px 3px;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SelectionList_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SelectionList_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".component-selection-list .option-wrap {\n  padding: 10px 30px;\n  cursor: pointer;\n  border-bottom: solid 1px #FFFFFF16;\n}\n.component-selection-list .option-wrap > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n.component-selection-list .option-disabled {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.component-selection-list .option-disabled .option-title {\n  color: #969494 !important;\n}\n.component-selection-list .option-disabled .radio-circle {\n  border: 2px solid #969494 !important;\n}\n.component-selection-list .option-title {\n  font-size: 13px;\n  color: #fff;\n  margin-left: 10px;\n}\n.component-selection-list .radio-circle {\n  width: 12px;\n  height: 12px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  padding: 2px;\n}\n.component-selection-list .option-wrap.radio-selected .radio-circle {\n  border-color: #A55EEA;\n  opacity: 1;\n}\n.component-selection-list .radio-fill {\n  width: 6px;\n  height: 6px;\n  background-color: #A55EEA;\n  border-radius: 50%;\n}\n.component-selection-list.disabled {\n  opacity: 0.6;\n}\n.component-selection-list.disabled .option-wrap {\n  cursor: default;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SettingsPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_SettingsPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".page-settings-layout .simple_layout__body {\n  background: #191919;\n  text-align: left;\n}\n.page-settings {\n  color: #fff;\n}\n.page-settings .row {\n  border-bottom: solid 1px #FFFFFF16;\n  padding: 10px 0;\n}\n.page-settings .sub-row {\n  border-top: solid 1px #FFFFFF16;\n  padding: 10px 30px;\n}\n.page-settings .toggle-controller {\n  font-size: 16px;\n  display: flex;\n  padding: 0 20px;\n}\n.page-settings .toggle-controller .label {\n  flex: 1;\n}\n.page-settings .toggle-controller .toggle-button-box {\n  text-align: right;\n}\n.page-settings .toggle-button-box {\n  display: inline-block;\n  vertical-align: middle;\n}\n.page-settings .vc-collapse .header {\n  font-size: 16px;\n}\n.page-settings .vc-collapse .v-collapse-content {\n  font-size: 16px;\n  display: none;\n}\n.page-settings .vc-collapse .v-collapse-content.v-collapse-content-end {\n  display: block;\n}\n", "" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_AnnouncementPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
    __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_AnnouncementPage_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__).a;
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".announcement-title {\n  font-weight: 600;\n  font-size: 19px;\n  margin-top: 10px;\n}\n.announcement-description {\n  font-style: normal;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 14px 30px 0;\n}\n.announcement-description i {\n  position: relative;\n  margin: 15px auto 14px;\n  background: url(" + escape(__webpack_require__(357)) + ") no-repeat;\n  display: block;\n  width: 37px;\n  height: 37px;\n}\n.announcement-description i::after {\n  background: url(" + escape(__webpack_require__(358)) + ") no-repeat;\n  display: block;\n  position: absolute;\n  left: 45px;\n  top: -12px;\n  content: '';\n  width: 42px;\n  height: 36px;\n}\n.announcement-dangerometer {\n  background: url(" + escape(__webpack_require__(359)) + ") no-repeat;\n  background-size: 100% 100%;\n  width: 141px;\n  height: 75px;\n  margin: 10px auto 3px;\n}\n.announcement-proxy {\n  font-size: 14px;\n  line-height: 17px;\n}\n.announcement-proxy a {\n  text-decoration: underline;\n}\n.announcement-controls {\n  margin-top: 15px;\n}\n.announcement-controls button {\n  width: 190px;\n  height: 35px;\n  font-size: 14px;\n  padding: unset;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/cog.svg?ca19499bf8598c148ff5c5b622758fe4";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/arroy.svg?73a49adcde2b2f79c5d64bb9f265df23";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/images/dangerometer.svg?d25d8c2417d899af29ba943da3b9ab2c";
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(361);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("484a0e97", content, !1, {});
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.ps {\n    position: relative;\n}", "" ]);
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(363);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)("6cc28c55", content, !1, {});
}, function(module, exports, __webpack_require__) {
    var escape = __webpack_require__(86);
    (module.exports = __webpack_require__(14)(!1)).push([ module.i, ".loader {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n.loader.loader--dark .loader__spin {\n  border: 10px solid #382121;\n  border-top: 10px solid #fff;\n}\n.loader.loader--dark .loader__text {\n  color: #fff;\n}\n.loader__spin {\n  position: absolute;\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #A55EEA;\n  width: 100px;\n  height: 100px;\n  left: calc(50% - 50px);\n  top: calc(59% - 105px);\n  animation: spin 1s linear infinite;\n  z-index: 10000;\n}\n.loader__text {\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n  top: 270px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  letter-spacing: 1px;\n}\n.loader__bg {\n  background: #5a5a5a;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0.6;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@font-face {\n  font-family: Aileron;\n  font-weight: normal;\n  src: url(" + escape(__webpack_require__(364)) + ") format('opentype');\n}\n@font-face {\n  font-family: Aileron;\n  font-weight: bold;\n  src: url(" + escape(__webpack_require__(365)) + ") format('opentype');\n}\n@font-face {\n  font-family: Timer;\n  src: url(" + escape(__webpack_require__(366)) + ") format('opentype');\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  width: 300px;\n  overflow: hidden;\n  font-family: Aileron;\n}\na {\n  cursor: pointer;\n}\n#app {\n  overflow: hidden;\n}\n.pink-color {\n  color: #A55EEA;\n}\n.font-bold {\n  font-weight: bold;\n}\nbutton {\n  background: #333;\n  color: #fff;\n  font-weight: 600;\n  padding: 12px;\n  border-radius: 6px;\n  width: 210px;\n  font-size: 14px;\n  cursor: pointer;\n  border: 0;\n}\nbutton:hover {\n  background: #fff;\n  border: 2px solid #000;\n  color: #000;\n}\n", "" ]);
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/fonts/Aileron-Regular.otf?d321fa78bb7190a8ca7e14213ef63203";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/fonts/Aileron-Bold.otf?3cdf602b3281ee10ef3c7260cafd634f";
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "/popup/fonts/trs-million rg.otf?42f6c555813248bd0c274cd41c3e393e";
}, function(module, exports, __webpack_require__) {
    (function(global) {
        var scope = void 0 !== global && global || "undefined" != typeof self && self || window, apply = Function.prototype.apply;
        function Timeout(id, clearFn) {
            this._id = id, this._clearFn = clearFn;
        }
        exports.setTimeout = function() {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
        }, exports.setInterval = function() {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
        }, exports.clearTimeout = exports.clearInterval = function(timeout) {
            timeout && timeout.close();
        }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
            this._clearFn.call(scope, this._id);
        }, exports.enroll = function(item, msecs) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs;
        }, exports.unenroll = function(item) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = -1;
        }, exports._unrefActive = exports.active = function(item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;
            msecs >= 0 && (item._idleTimeoutId = setTimeout((function() {
                item._onTimeout && item._onTimeout();
            }), msecs));
        }, __webpack_require__(368), exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== global && global.setImmediate || this && this.setImmediate, 
        exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== global && global.clearImmediate || this && this.clearImmediate;
    }).call(this, __webpack_require__(16));
}, function(module, exports, __webpack_require__) {
    (function(global, process) {
        !function(global, undefined) {
            "use strict";
            if (!global.setImmediate) {
                var registerImmediate, html, channel, messagePrefix, onGlobalMessage, nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1, doc = global.document, attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                attachTo = attachTo && attachTo.setTimeout ? attachTo : global, "[object process]" === {}.toString.call(global.process) ? registerImmediate = function(handle) {
                    process.nextTick((function() {
                        runIfPresent(handle);
                    }));
                } : !function() {
                    if (global.postMessage && !global.importScripts) {
                        var postMessageIsAsynchronous = !0, oldOnMessage = global.onmessage;
                        return global.onmessage = function() {
                            postMessageIsAsynchronous = !1;
                        }, global.postMessage("", "*"), global.onmessage = oldOnMessage, postMessageIsAsynchronous;
                    }
                }() ? global.MessageChannel ? ((channel = new MessageChannel).port1.onmessage = function(event) {
                    runIfPresent(event.data);
                }, registerImmediate = function(handle) {
                    channel.port2.postMessage(handle);
                }) : doc && "onreadystatechange" in doc.createElement("script") ? (html = doc.documentElement, 
                registerImmediate = function(handle) {
                    var script = doc.createElement("script");
                    script.onreadystatechange = function() {
                        runIfPresent(handle), script.onreadystatechange = null, html.removeChild(script), 
                        script = null;
                    }, html.appendChild(script);
                }) : registerImmediate = function(handle) {
                    setTimeout(runIfPresent, 0, handle);
                } : (messagePrefix = "setImmediate$" + Math.random() + "$", onGlobalMessage = function(event) {
                    event.source === global && "string" == typeof event.data && 0 === event.data.indexOf(messagePrefix) && runIfPresent(+event.data.slice(messagePrefix.length));
                }, global.addEventListener ? global.addEventListener("message", onGlobalMessage, !1) : global.attachEvent("onmessage", onGlobalMessage), 
                registerImmediate = function(handle) {
                    global.postMessage(messagePrefix + handle, "*");
                }), attachTo.setImmediate = function(callback) {
                    "function" != typeof callback && (callback = new Function("" + callback));
                    for (var args = new Array(arguments.length - 1), i = 0; i < args.length; i++) args[i] = arguments[i + 1];
                    var task = {
                        callback: callback,
                        args: args
                    };
                    return tasksByHandle[nextHandle] = task, registerImmediate(nextHandle), nextHandle++;
                }, attachTo.clearImmediate = clearImmediate;
            }
            function clearImmediate(handle) {
                delete tasksByHandle[handle];
            }
            function runIfPresent(handle) {
                if (currentlyRunningATask) setTimeout(runIfPresent, 0, handle); else {
                    var task = tasksByHandle[handle];
                    if (task) {
                        currentlyRunningATask = !0;
                        try {
                            !function(task) {
                                var callback = task.callback, args = task.args;
                                switch (args.length) {
                                  case 0:
                                    callback();
                                    break;

                                  case 1:
                                    callback(args[0]);
                                    break;

                                  case 2:
                                    callback(args[0], args[1]);
                                    break;

                                  case 3:
                                    callback(args[0], args[1], args[2]);
                                    break;

                                  default:
                                    callback.apply(void 0, args);
                                }
                            }(task);
                        } finally {
                            clearImmediate(handle), currentlyRunningATask = !1;
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === global ? this : global : self);
    }).call(this, __webpack_require__(16), __webpack_require__(38));
}, , , , , , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var regenerator = __webpack_require__(6), regenerator_default = __webpack_require__.n(regenerator), asyncToGenerator = __webpack_require__(10), asyncToGenerator_default = __webpack_require__.n(asyncToGenerator), classCallCheck = __webpack_require__(134), classCallCheck_default = __webpack_require__.n(classCallCheck), createClass = __webpack_require__(135), createClass_default = __webpack_require__.n(createClass), Registry_Registry = (__webpack_require__(307), 
    function() {
        function Registry() {
            classCallCheck_default()(this, Registry), this.store = new Map;
        }
        return createClass_default()(Registry, [ {
            key: "set",
            value: function(key, obj) {
                this.store.set(key, obj);
            }
        }, {
            key: "get",
            value: function(key) {
                return this.store.get(key);
            }
        } ], [ {
            key: "getInstance",
            value: function() {
                return Registry.$instance || (Registry.$instance = new Registry);
            }
        } ]), Registry;
    }()), SERVICES_GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS", SERVICES_EXTERNAL_DISPATCHER = "EXTERNAL_DISPATCHER", SERVICES_TAB_SERVICE = "TAB_SERVICE", SERVICES_MANAGEMENT = "MANAGEMENT", SERVICES_LOCATION_SERVICE = "LOCATION_SERVICE", SERVICES_IP_INFO_SERVICE = "IP_INFO_SERVICE", SERVICES_PAGE_HISTORY_SERVICE = "PAGE_HISTORY_SERVICE", SERVICES_PANEL_OS = "PANEL_OS", SERVICES_POLICY = "POLICY", SERVICES_BACKGROUND_PAGE = "BACKGROUND_PAGE", SERVICES_BUGSNAG = "BUGSNAG", SERVICES_SAFE_CHECK_STATE_SERVICE = "SAFE_CHECK_STATE_SERVICE", SERVICES_AD_BLOCKER = "AD_BLOCKER", SERVICES_EXTENSION_MODE = "EXTENSION_MODE", SERVICES_INTERRUPTION_SERVICE = "INTERRUPTION_SERVICE", SERVICES_FLAG_SERVICE = "FLAG_SERVICE", SERVICES_PROMOTION_SERVICE = "PROMOTION_SERVICE", register = Registry_Registry.getInstance(), PanelOS_PanelOS = function() {
        function PanelOS() {
            classCallCheck_default()(this, PanelOS);
        }
        return createClass_default()(PanelOS, [ {
            key: "getAdCounters",
            value: function() {
                return new Promise((function(resolve) {
                    PanelOSClient.GetAdBlockerCounters((function(response) {
                        return resolve(response);
                    }));
                }));
            }
        }, {
            key: "isDisabled",
            value: function() {
                return new Promise((function(resolve, reject) {
                    PanelOSClient.GetAdBlockerStatus((function(response) {
                        resolve("disabled" === response.DISPLAY);
                    }));
                }));
            }
        }, {
            key: "enable",
            value: function() {
                register.get(SERVICES_BACKGROUND_PAGE).EnableAdBlocker((function(status) {}), (function(error) {}), [ "DISPLAY" ]);
            }
        }, {
            key: "disable",
            value: function() {
                register.get(SERVICES_BACKGROUND_PAGE).DisableAdBlocker((function(status) {}), (function(error) {}), [ "DISPLAY" ]);
            }
        } ]), PanelOS;
    }(), src = __webpack_require__(1), TabDispatcher = __webpack_require__(198), GoogleAnalyticsContentDispatcher = __webpack_require__(95), setupRegistry_register = Registry_Registry.getInstance(), dispatcherService = new src.ContentDispatcherService, googleAnalytics = new GoogleAnalyticsContentDispatcher.GoogleAnalyticsContentDispatcher(dispatcherService), tabDispatcher = new TabDispatcher.TabDispatcher(dispatcherService);
    setupRegistry_register.set(SERVICES_PANEL_OS, new PanelOS_PanelOS), setupRegistry_register.set(SERVICES_EXTERNAL_DISPATCHER, dispatcherService), 
    setupRegistry_register.set(SERVICES_TAB_SERVICE, tabDispatcher), setupRegistry_register.set(SERVICES_GOOGLE_ANALYTICS, googleAnalytics);
    var bugsnag_vue = __webpack_require__(199), bugsnag_vue_default = __webpack_require__.n(bugsnag_vue), vue_esm = __webpack_require__(98);
    function isError(err) {
        return Object.prototype.toString.call(err).indexOf("Error") > -1;
    }
    function isExtendedError(constructor, err) {
        return err instanceof constructor || err && (err.name === constructor.name || err._name === constructor._name);
    }
    function extend(a, b) {
        for (var key in b) a[key] = b[key];
        return a;
    }
    var View = {
        name: "RouterView",
        functional: !0,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function(_, ref) {
            var props = ref.props, children = ref.children, parent = ref.parent, data = ref.data;
            data.routerView = !0;
            for (var h = parent.$createElement, name = props.name, route = parent.$route, cache = parent._routerViewCache || (parent._routerViewCache = {}), depth = 0, inactive = !1; parent && parent._routerRoot !== parent; ) {
                var vnodeData = parent.$vnode ? parent.$vnode.data : {};
                vnodeData.routerView && depth++, vnodeData.keepAlive && parent._directInactive && parent._inactive && (inactive = !0), 
                parent = parent.$parent;
            }
            if (data.routerViewDepth = depth, inactive) {
                var cachedData = cache[name], cachedComponent = cachedData && cachedData.component;
                return cachedComponent ? (cachedData.configProps && fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps), 
                h(cachedComponent, data, children)) : h();
            }
            var matched = route.matched[depth], component = matched && matched.components[name];
            if (!matched || !component) return cache[name] = null, h();
            cache[name] = {
                component: component
            }, data.registerRouteInstance = function(vm, val) {
                var current = matched.instances[name];
                (val && current !== vm || !val && current === vm) && (matched.instances[name] = val);
            }, (data.hook || (data.hook = {})).prepatch = function(_, vnode) {
                matched.instances[name] = vnode.componentInstance;
            }, data.hook.init = function(vnode) {
                vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name] && (matched.instances[name] = vnode.componentInstance);
            };
            var configProps = matched.props && matched.props[name];
            return configProps && (extend(cache[name], {
                route: route,
                configProps: configProps
            }), fillPropsinData(component, data, route, configProps)), h(component, data, children);
        }
    };
    function fillPropsinData(component, data, route, configProps) {
        var propsToPass = data.props = function(route, config) {
            switch (typeof config) {
              case "undefined":
                return;

              case "object":
                return config;

              case "function":
                return config(route);

              case "boolean":
                return config ? route.params : void 0;

              default:
                0;
            }
        }(route, configProps);
        if (propsToPass) {
            propsToPass = data.props = extend({}, propsToPass);
            var attrs = data.attrs = data.attrs || {};
            for (var key in propsToPass) component.props && key in component.props || (attrs[key] = propsToPass[key], 
            delete propsToPass[key]);
        }
    }
    var encodeReserveRE = /[!'()*]/g, encodeReserveReplacer = function(c) {
        return "%" + c.charCodeAt(0).toString(16);
    }, commaRE = /%2C/g, encode = function(str) {
        return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
    }, decode = decodeURIComponent;
    function parseQuery(query) {
        var res = {};
        return (query = query.trim().replace(/^(\?|#|&)/, "")) ? (query.split("&").forEach((function(param) {
            var parts = param.replace(/\+/g, " ").split("="), key = decode(parts.shift()), val = parts.length > 0 ? decode(parts.join("=")) : null;
            void 0 === res[key] ? res[key] = val : Array.isArray(res[key]) ? res[key].push(val) : res[key] = [ res[key], val ];
        })), res) : res;
    }
    function stringifyQuery(obj) {
        var res = obj ? Object.keys(obj).map((function(key) {
            var val = obj[key];
            if (void 0 === val) return "";
            if (null === val) return encode(key);
            if (Array.isArray(val)) {
                var result = [];
                return val.forEach((function(val2) {
                    void 0 !== val2 && (null === val2 ? result.push(encode(key)) : result.push(encode(key) + "=" + encode(val2)));
                })), result.join("&");
            }
            return encode(key) + "=" + encode(val);
        })).filter((function(x) {
            return x.length > 0;
        })).join("&") : null;
        return res ? "?" + res : "";
    }
    var trailingSlashRE = /\/?$/;
    function createRoute(record, location, redirectedFrom, router) {
        var stringifyQuery = router && router.options.stringifyQuery, query = location.query || {};
        try {
            query = clone(query);
        } catch (e) {}
        var route = {
            name: location.name || record && record.name,
            meta: record && record.meta || {},
            path: location.path || "/",
            hash: location.hash || "",
            query: query,
            params: location.params || {},
            fullPath: getFullPath(location, stringifyQuery),
            matched: record ? formatMatch(record) : []
        };
        return redirectedFrom && (route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)), 
        Object.freeze(route);
    }
    function clone(value) {
        if (Array.isArray(value)) return value.map(clone);
        if (value && "object" == typeof value) {
            var res = {};
            for (var key in value) res[key] = clone(value[key]);
            return res;
        }
        return value;
    }
    var START = createRoute(null, {
        path: "/"
    });
    function formatMatch(record) {
        for (var res = []; record; ) res.unshift(record), record = record.parent;
        return res;
    }
    function getFullPath(ref, _stringifyQuery) {
        var path = ref.path, query = ref.query;
        void 0 === query && (query = {});
        var hash = ref.hash;
        return void 0 === hash && (hash = ""), (path || "/") + (_stringifyQuery || stringifyQuery)(query) + hash;
    }
    function isSameRoute(a, b) {
        return b === START ? a === b : !!b && (a.path && b.path ? a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && a.hash === b.hash && isObjectEqual(a.query, b.query) : !(!a.name || !b.name) && (a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params)));
    }
    function isObjectEqual(a, b) {
        if (void 0 === a && (a = {}), void 0 === b && (b = {}), !a || !b) return a === b;
        var aKeys = Object.keys(a), bKeys = Object.keys(b);
        return aKeys.length === bKeys.length && aKeys.every((function(key) {
            var aVal = a[key], bVal = b[key];
            return "object" == typeof aVal && "object" == typeof bVal ? isObjectEqual(aVal, bVal) : String(aVal) === String(bVal);
        }));
    }
    function resolvePath(relative, base, append) {
        var firstChar = relative.charAt(0);
        if ("/" === firstChar) return relative;
        if ("?" === firstChar || "#" === firstChar) return base + relative;
        var stack = base.split("/");
        append && stack[stack.length - 1] || stack.pop();
        for (var segments = relative.replace(/^\//, "").split("/"), i = 0; i < segments.length; i++) {
            var segment = segments[i];
            ".." === segment ? stack.pop() : "." !== segment && stack.push(segment);
        }
        return "" !== stack[0] && stack.unshift(""), stack.join("/");
    }
    function cleanPath(path) {
        return path.replace(/\/\//g, "/");
    }
    var isarray = Array.isArray || function(arr) {
        return "[object Array]" == Object.prototype.toString.call(arr);
    }, pathToRegexp_1 = pathToRegexp, parse_1 = parse, compile_1 = function(str, options) {
        return tokensToFunction(parse(str, options));
    }, tokensToFunction_1 = tokensToFunction, tokensToRegExp_1 = tokensToRegExp, PATH_REGEXP = new RegExp([ "(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))" ].join("|"), "g");
    function parse(str, options) {
        for (var res, tokens = [], key = 0, index = 0, path = "", defaultDelimiter = options && options.delimiter || "/"; null != (res = PATH_REGEXP.exec(str)); ) {
            var m = res[0], escaped = res[1], offset = res.index;
            if (path += str.slice(index, offset), index = offset + m.length, escaped) path += escaped[1]; else {
                var next = str[index], prefix = res[2], name = res[3], capture = res[4], group = res[5], modifier = res[6], asterisk = res[7];
                path && (tokens.push(path), path = "");
                var partial = null != prefix && null != next && next !== prefix, repeat = "+" === modifier || "*" === modifier, optional = "?" === modifier || "*" === modifier, delimiter = res[2] || defaultDelimiter, pattern = capture || group;
                tokens.push({
                    name: name || key++,
                    prefix: prefix || "",
                    delimiter: delimiter,
                    optional: optional,
                    repeat: repeat,
                    partial: partial,
                    asterisk: !!asterisk,
                    pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
                });
            }
        }
        return index < str.length && (path += str.substr(index)), path && tokens.push(path), 
        tokens;
    }
    function encodeURIComponentPretty(str) {
        return encodeURI(str).replace(/[\/?#]/g, (function(c) {
            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        }));
    }
    function tokensToFunction(tokens) {
        for (var matches = new Array(tokens.length), i = 0; i < tokens.length; i++) "object" == typeof tokens[i] && (matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$"));
        return function(obj, opts) {
            for (var path = "", data = obj || {}, encode = (opts || {}).pretty ? encodeURIComponentPretty : encodeURIComponent, i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if ("string" != typeof token) {
                    var segment, value = data[token.name];
                    if (null == value) {
                        if (token.optional) {
                            token.partial && (path += token.prefix);
                            continue;
                        }
                        throw new TypeError('Expected "' + token.name + '" to be defined');
                    }
                    if (isarray(value)) {
                        if (!token.repeat) throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
                        if (0 === value.length) {
                            if (token.optional) continue;
                            throw new TypeError('Expected "' + token.name + '" to not be empty');
                        }
                        for (var j = 0; j < value.length; j++) {
                            if (segment = encode(value[j]), !matches[i].test(segment)) throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
                            path += (0 === j ? token.prefix : token.delimiter) + segment;
                        }
                    } else {
                        if (segment = token.asterisk ? encodeURI(value).replace(/[?#]/g, (function(c) {
                            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
                        })) : encode(value), !matches[i].test(segment)) throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
                        path += token.prefix + segment;
                    }
                } else path += token;
            }
            return path;
        };
    }
    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function escapeGroup(group) {
        return group.replace(/([=!:$\/()])/g, "\\$1");
    }
    function attachKeys(re, keys) {
        return re.keys = keys, re;
    }
    function flags(options) {
        return options.sensitive ? "" : "i";
    }
    function tokensToRegExp(tokens, keys, options) {
        isarray(keys) || (options = keys || options, keys = []);
        for (var strict = (options = options || {}).strict, end = !1 !== options.end, route = "", i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if ("string" == typeof token) route += escapeString(token); else {
                var prefix = escapeString(token.prefix), capture = "(?:" + token.pattern + ")";
                keys.push(token), token.repeat && (capture += "(?:" + prefix + capture + ")*"), 
                route += capture = token.optional ? token.partial ? prefix + "(" + capture + ")?" : "(?:" + prefix + "(" + capture + "))?" : prefix + "(" + capture + ")";
            }
        }
        var delimiter = escapeString(options.delimiter || "/"), endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
        return strict || (route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?"), 
        route += end ? "$" : strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)", 
        attachKeys(new RegExp("^" + route, flags(options)), keys);
    }
    function pathToRegexp(path, keys, options) {
        return isarray(keys) || (options = keys || options, keys = []), options = options || {}, 
        path instanceof RegExp ? function(path, keys) {
            var groups = path.source.match(/\((?!\?)/g);
            if (groups) for (var i = 0; i < groups.length; i++) keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
            return attachKeys(path, keys);
        }(path, keys) : isarray(path) ? function(path, keys, options) {
            for (var parts = [], i = 0; i < path.length; i++) parts.push(pathToRegexp(path[i], keys, options).source);
            return attachKeys(new RegExp("(?:" + parts.join("|") + ")", flags(options)), keys);
        }(path, keys, options) : function(path, keys, options) {
            return tokensToRegExp(parse(path, options), keys, options);
        }(path, keys, options);
    }
    pathToRegexp_1.parse = parse_1, pathToRegexp_1.compile = compile_1, pathToRegexp_1.tokensToFunction = tokensToFunction_1, 
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
    var regexpCompileCache = Object.create(null);
    function fillParams(path, params, routeMsg) {
        params = params || {};
        try {
            var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
            return "string" == typeof params.pathMatch && (params[0] = params.pathMatch), filler(params, {
                pretty: !0
            });
        } catch (e) {
            return "";
        } finally {
            delete params[0];
        }
    }
    function normalizeLocation(raw, current, append, router) {
        var next = "string" == typeof raw ? {
            path: raw
        } : raw;
        if (next._normalized) return next;
        if (next.name) {
            var params = (next = extend({}, raw)).params;
            return params && "object" == typeof params && (next.params = extend({}, params)), 
            next;
        }
        if (!next.path && next.params && current) {
            (next = extend({}, next))._normalized = !0;
            var params$1 = extend(extend({}, current.params), next.params);
            if (current.name) next.name = current.name, next.params = params$1; else if (current.matched.length) {
                var rawPath = current.matched[current.matched.length - 1].path;
                next.path = fillParams(rawPath, params$1, current.path);
            } else 0;
            return next;
        }
        var parsedPath = function(path) {
            var hash = "", query = "", hashIndex = path.indexOf("#");
            hashIndex >= 0 && (hash = path.slice(hashIndex), path = path.slice(0, hashIndex));
            var queryIndex = path.indexOf("?");
            return queryIndex >= 0 && (query = path.slice(queryIndex + 1), path = path.slice(0, queryIndex)), 
            {
                path: path,
                query: query,
                hash: hash
            };
        }(next.path || ""), basePath = current && current.path || "/", path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath, query = function(query, extraQuery, _parseQuery) {
            void 0 === extraQuery && (extraQuery = {});
            var parsedQuery, parse = _parseQuery || parseQuery;
            try {
                parsedQuery = parse(query || "");
            } catch (e) {
                parsedQuery = {};
            }
            for (var key in extraQuery) parsedQuery[key] = extraQuery[key];
            return parsedQuery;
        }(parsedPath.query, next.query, router && router.options.parseQuery), hash = next.hash || parsedPath.hash;
        return hash && "#" !== hash.charAt(0) && (hash = "#" + hash), {
            _normalized: !0,
            path: path,
            query: query,
            hash: hash
        };
    }
    var _Vue, noop = function() {}, Link = {
        name: "RouterLink",
        props: {
            to: {
                type: [ String, Object ],
                required: !0
            },
            tag: {
                type: String,
                default: "a"
            },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: {
                type: [ String, Array ],
                default: "click"
            }
        },
        render: function(h) {
            var this$1 = this, router = this.$router, current = this.$route, ref = router.resolve(this.to, current, this.append), location = ref.location, route = ref.route, href = ref.href, classes = {}, globalActiveClass = router.options.linkActiveClass, globalExactActiveClass = router.options.linkExactActiveClass, activeClassFallback = null == globalActiveClass ? "router-link-active" : globalActiveClass, exactActiveClassFallback = null == globalExactActiveClass ? "router-link-exact-active" : globalExactActiveClass, activeClass = null == this.activeClass ? activeClassFallback : this.activeClass, exactActiveClass = null == this.exactActiveClass ? exactActiveClassFallback : this.exactActiveClass, compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
            classes[exactActiveClass] = isSameRoute(current, compareTarget), classes[activeClass] = this.exact ? classes[exactActiveClass] : function(current, target) {
                return 0 === current.path.replace(trailingSlashRE, "/").indexOf(target.path.replace(trailingSlashRE, "/")) && (!target.hash || current.hash === target.hash) && function(current, target) {
                    for (var key in target) if (!(key in current)) return !1;
                    return !0;
                }(current.query, target.query);
            }(current, compareTarget);
            var handler = function(e) {
                guardEvent(e) && (this$1.replace ? router.replace(location, noop) : router.push(location, noop));
            }, on = {
                click: guardEvent
            };
            Array.isArray(this.event) ? this.event.forEach((function(e) {
                on[e] = handler;
            })) : on[this.event] = handler;
            var data = {
                class: classes
            }, scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
                href: href,
                route: route,
                navigate: handler,
                isActive: classes[activeClass],
                isExactActive: classes[exactActiveClass]
            });
            if (scopedSlot) {
                if (1 === scopedSlot.length) return scopedSlot[0];
                if (scopedSlot.length > 1 || !scopedSlot.length) return 0 === scopedSlot.length ? h() : h("span", {}, scopedSlot);
            }
            if ("a" === this.tag) data.on = on, data.attrs = {
                href: href
            }; else {
                var a = function findAnchor(children) {
                    var child;
                    if (children) for (var i = 0; i < children.length; i++) {
                        if ("a" === (child = children[i]).tag) return child;
                        if (child.children && (child = findAnchor(child.children))) return child;
                    }
                }(this.$slots.default);
                if (a) {
                    a.isStatic = !1;
                    var aData = a.data = extend({}, a.data);
                    for (var event in aData.on = aData.on || {}, aData.on) {
                        var handler$1 = aData.on[event];
                        event in on && (aData.on[event] = Array.isArray(handler$1) ? handler$1 : [ handler$1 ]);
                    }
                    for (var event$1 in on) event$1 in aData.on ? aData.on[event$1].push(on[event$1]) : aData.on[event$1] = handler;
                    (a.data.attrs = extend({}, a.data.attrs)).href = href;
                } else data.on = on;
            }
            return h(this.tag, data, this.$slots.default);
        }
    };
    function guardEvent(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                var target = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(target)) return;
            }
            return e.preventDefault && e.preventDefault(), !0;
        }
    }
    var inBrowser = "undefined" != typeof window;
    function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
        var pathList = oldPathList || [], pathMap = oldPathMap || Object.create(null), nameMap = oldNameMap || Object.create(null);
        routes.forEach((function(route) {
            !function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
                var path = route.path, name = route.name;
                0;
                var pathToRegexpOptions = route.pathToRegexpOptions || {}, normalizedPath = function(path, parent, strict) {
                    strict || (path = path.replace(/\/$/, ""));
                    if ("/" === path[0]) return path;
                    if (null == parent) return path;
                    return cleanPath(parent.path + "/" + path);
                }(path, parent, pathToRegexpOptions.strict);
                "boolean" == typeof route.caseSensitive && (pathToRegexpOptions.sensitive = route.caseSensitive);
                var record = {
                    path: normalizedPath,
                    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
                    components: route.components || {
                        default: route.component
                    },
                    instances: {},
                    name: name,
                    parent: parent,
                    matchAs: matchAs,
                    redirect: route.redirect,
                    beforeEnter: route.beforeEnter,
                    meta: route.meta || {},
                    props: null == route.props ? {} : route.components ? route.props : {
                        default: route.props
                    }
                };
                route.children && route.children.forEach((function(child) {
                    var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
                    addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
                }));
                pathMap[record.path] || (pathList.push(record.path), pathMap[record.path] = record);
                if (void 0 !== route.alias) for (var aliases = Array.isArray(route.alias) ? route.alias : [ route.alias ], i = 0; i < aliases.length; ++i) {
                    0;
                    var aliasRoute = {
                        path: aliases[i],
                        children: route.children
                    };
                    addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || "/");
                }
                name && (nameMap[name] || (nameMap[name] = record));
            }(pathList, pathMap, nameMap, route);
        }));
        for (var i = 0, l = pathList.length; i < l; i++) "*" === pathList[i] && (pathList.push(pathList.splice(i, 1)[0]), 
        l--, i--);
        return {
            pathList: pathList,
            pathMap: pathMap,
            nameMap: nameMap
        };
    }
    function compileRouteRegex(path, pathToRegexpOptions) {
        return pathToRegexp_1(path, [], pathToRegexpOptions);
    }
    function createMatcher(routes, router) {
        var ref = createRouteMap(routes), pathList = ref.pathList, pathMap = ref.pathMap, nameMap = ref.nameMap;
        function match(raw, currentRoute, redirectedFrom) {
            var location = normalizeLocation(raw, currentRoute, !1, router), name = location.name;
            if (name) {
                var record = nameMap[name];
                if (!record) return _createRoute(null, location);
                var paramNames = record.regex.keys.filter((function(key) {
                    return !key.optional;
                })).map((function(key) {
                    return key.name;
                }));
                if ("object" != typeof location.params && (location.params = {}), currentRoute && "object" == typeof currentRoute.params) for (var key in currentRoute.params) !(key in location.params) && paramNames.indexOf(key) > -1 && (location.params[key] = currentRoute.params[key]);
                return location.path = fillParams(record.path, location.params), _createRoute(record, location, redirectedFrom);
            }
            if (location.path) {
                location.params = {};
                for (var i = 0; i < pathList.length; i++) {
                    var path = pathList[i], record$1 = pathMap[path];
                    if (matchRoute(record$1.regex, location.path, location.params)) return _createRoute(record$1, location, redirectedFrom);
                }
            }
            return _createRoute(null, location);
        }
        function redirect(record, location) {
            var originalRedirect = record.redirect, redirect = "function" == typeof originalRedirect ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
            if ("string" == typeof redirect && (redirect = {
                path: redirect
            }), !redirect || "object" != typeof redirect) return _createRoute(null, location);
            var re = redirect, name = re.name, path = re.path, query = location.query, hash = location.hash, params = location.params;
            if (query = re.hasOwnProperty("query") ? re.query : query, hash = re.hasOwnProperty("hash") ? re.hash : hash, 
            params = re.hasOwnProperty("params") ? re.params : params, name) {
                nameMap[name];
                return match({
                    _normalized: !0,
                    name: name,
                    query: query,
                    hash: hash,
                    params: params
                }, void 0, location);
            }
            if (path) {
                var rawPath = function(path, record) {
                    return resolvePath(path, record.parent ? record.parent.path : "/", !0);
                }(path, record);
                return match({
                    _normalized: !0,
                    path: fillParams(rawPath, params),
                    query: query,
                    hash: hash
                }, void 0, location);
            }
            return _createRoute(null, location);
        }
        function _createRoute(record, location, redirectedFrom) {
            return record && record.redirect ? redirect(record, redirectedFrom || location) : record && record.matchAs ? function(record, location, matchAs) {
                var aliasedMatch = match({
                    _normalized: !0,
                    path: fillParams(matchAs, location.params)
                });
                if (aliasedMatch) {
                    var matched = aliasedMatch.matched, aliasedRecord = matched[matched.length - 1];
                    return location.params = aliasedMatch.params, _createRoute(aliasedRecord, location);
                }
                return _createRoute(null, location);
            }(0, location, record.matchAs) : createRoute(record, location, redirectedFrom, router);
        }
        return {
            match: match,
            addRoutes: function(routes) {
                createRouteMap(routes, pathList, pathMap, nameMap);
            }
        };
    }
    function matchRoute(regex, path, params) {
        var m = path.match(regex);
        if (!m) return !1;
        if (!params) return !0;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = regex.keys[i - 1], val = "string" == typeof m[i] ? decodeURIComponent(m[i]) : m[i];
            key && (params[key.name || "pathMatch"] = val);
        }
        return !0;
    }
    var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;
    function genStateKey() {
        return Time.now().toFixed(3);
    }
    var _key = genStateKey();
    function getStateKey() {
        return _key;
    }
    function setStateKey(key) {
        return _key = key;
    }
    var positionStore = Object.create(null);
    function setupScroll() {
        var protocolAndPath = window.location.protocol + "//" + window.location.host, absolutePath = window.location.href.replace(protocolAndPath, ""), stateCopy = extend({}, window.history.state);
        stateCopy.key = getStateKey(), window.history.replaceState(stateCopy, "", absolutePath), 
        window.addEventListener("popstate", (function(e) {
            saveScrollPosition(), e.state && e.state.key && setStateKey(e.state.key);
        }));
    }
    function handleScroll(router, to, from, isPop) {
        if (router.app) {
            var behavior = router.options.scrollBehavior;
            behavior && router.app.$nextTick((function() {
                var position = function() {
                    var key = getStateKey();
                    if (key) return positionStore[key];
                }(), shouldScroll = behavior.call(router, to, from, isPop ? position : null);
                shouldScroll && ("function" == typeof shouldScroll.then ? shouldScroll.then((function(shouldScroll) {
                    scrollToPosition(shouldScroll, position);
                })).catch((function(err) {
                    0;
                })) : scrollToPosition(shouldScroll, position));
            }));
        }
    }
    function saveScrollPosition() {
        var key = getStateKey();
        key && (positionStore[key] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        });
    }
    function isValidPosition(obj) {
        return isNumber(obj.x) || isNumber(obj.y);
    }
    function normalizePosition(obj) {
        return {
            x: isNumber(obj.x) ? obj.x : window.pageXOffset,
            y: isNumber(obj.y) ? obj.y : window.pageYOffset
        };
    }
    function isNumber(v) {
        return "number" == typeof v;
    }
    var hashStartsWithNumberRE = /^#\d/;
    function scrollToPosition(shouldScroll, position) {
        var obj, isObject = "object" == typeof shouldScroll;
        if (isObject && "string" == typeof shouldScroll.selector) {
            var el = hashStartsWithNumberRE.test(shouldScroll.selector) ? document.getElementById(shouldScroll.selector.slice(1)) : document.querySelector(shouldScroll.selector);
            if (el) {
                var offset = shouldScroll.offset && "object" == typeof shouldScroll.offset ? shouldScroll.offset : {};
                position = function(el, offset) {
                    var docRect = document.documentElement.getBoundingClientRect(), elRect = el.getBoundingClientRect();
                    return {
                        x: elRect.left - docRect.left - offset.x,
                        y: elRect.top - docRect.top - offset.y
                    };
                }(el, offset = {
                    x: isNumber((obj = offset).x) ? obj.x : 0,
                    y: isNumber(obj.y) ? obj.y : 0
                });
            } else isValidPosition(shouldScroll) && (position = normalizePosition(shouldScroll));
        } else isObject && isValidPosition(shouldScroll) && (position = normalizePosition(shouldScroll));
        position && window.scrollTo(position.x, position.y);
    }
    var ua, supportsPushState = inBrowser && ((-1 === (ua = window.navigator.userAgent).indexOf("Android 2.") && -1 === ua.indexOf("Android 4.0") || -1 === ua.indexOf("Mobile Safari") || -1 !== ua.indexOf("Chrome") || -1 !== ua.indexOf("Windows Phone")) && window.history && "pushState" in window.history);
    function pushState(url, replace) {
        saveScrollPosition();
        var history = window.history;
        try {
            if (replace) {
                var stateCopy = extend({}, history.state);
                stateCopy.key = getStateKey(), history.replaceState(stateCopy, "", url);
            } else history.pushState({
                key: setStateKey(genStateKey())
            }, "", url);
        } catch (e) {
            window.location[replace ? "replace" : "assign"](url);
        }
    }
    function replaceState(url) {
        pushState(url, !0);
    }
    function runQueue(queue, fn, cb) {
        var step = function(index) {
            index >= queue.length ? cb() : queue[index] ? fn(queue[index], (function() {
                step(index + 1);
            })) : step(index + 1);
        };
        step(0);
    }
    function resolveAsyncComponents(matched) {
        return function(to, from, next) {
            var hasAsync = !1, pending = 0, error = null;
            flatMapComponents(matched, (function(def, _, match, key) {
                if ("function" == typeof def && void 0 === def.cid) {
                    hasAsync = !0, pending++;
                    var res, resolve = once((function(resolvedDef) {
                        var obj;
                        ((obj = resolvedDef).__esModule || hasSymbol && "Module" === obj[Symbol.toStringTag]) && (resolvedDef = resolvedDef.default), 
                        def.resolved = "function" == typeof resolvedDef ? resolvedDef : _Vue.extend(resolvedDef), 
                        match.components[key] = resolvedDef, --pending <= 0 && next();
                    })), reject = once((function(reason) {
                        var msg = "Failed to resolve async component " + key + ": " + reason;
                        error || (error = isError(reason) ? reason : new Error(msg), next(error));
                    }));
                    try {
                        res = def(resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                    if (res) if ("function" == typeof res.then) res.then(resolve, reject); else {
                        var comp = res.component;
                        comp && "function" == typeof comp.then && comp.then(resolve, reject);
                    }
                }
            })), hasAsync || next();
        };
    }
    function flatMapComponents(matched, fn) {
        return flatten(matched.map((function(m) {
            return Object.keys(m.components).map((function(key) {
                return fn(m.components[key], m.instances[key], m, key);
            }));
        })));
    }
    function flatten(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    var hasSymbol = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    function once(fn) {
        var called = !1;
        return function() {
            for (var args = [], len = arguments.length; len--; ) args[len] = arguments[len];
            if (!called) return called = !0, fn.apply(this, args);
        };
    }
    var NavigationDuplicated = function(Error) {
        function NavigationDuplicated(normalizedLocation) {
            Error.call(this), this.name = this._name = "NavigationDuplicated", this.message = 'Navigating to current location ("' + normalizedLocation.fullPath + '") is not allowed', 
            Object.defineProperty(this, "stack", {
                value: (new Error).stack,
                writable: !0,
                configurable: !0
            });
        }
        return Error && (NavigationDuplicated.__proto__ = Error), NavigationDuplicated.prototype = Object.create(Error && Error.prototype), 
        NavigationDuplicated.prototype.constructor = NavigationDuplicated, NavigationDuplicated;
    }(Error);
    NavigationDuplicated._name = "NavigationDuplicated";
    var History = function(router, base) {
        this.router = router, this.base = function(base) {
            if (!base) if (inBrowser) {
                var baseEl = document.querySelector("base");
                base = (base = baseEl && baseEl.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "");
            } else base = "/";
            "/" !== base.charAt(0) && (base = "/" + base);
            return base.replace(/\/$/, "");
        }(base), this.current = START, this.pending = null, this.ready = !1, this.readyCbs = [], 
        this.readyErrorCbs = [], this.errorCbs = [];
    };
    function extractGuards(records, name, bind, reverse) {
        var guards = flatMapComponents(records, (function(def, instance, match, key) {
            var guard = function(def, key) {
                "function" != typeof def && (def = _Vue.extend(def));
                return def.options[key];
            }(def, name);
            if (guard) return Array.isArray(guard) ? guard.map((function(guard) {
                return bind(guard, instance, match, key);
            })) : bind(guard, instance, match, key);
        }));
        return flatten(reverse ? guards.reverse() : guards);
    }
    function bindGuard(guard, instance) {
        if (instance) return function() {
            return guard.apply(instance, arguments);
        };
    }
    History.prototype.listen = function(cb) {
        this.cb = cb;
    }, History.prototype.onReady = function(cb, errorCb) {
        this.ready ? cb() : (this.readyCbs.push(cb), errorCb && this.readyErrorCbs.push(errorCb));
    }, History.prototype.onError = function(errorCb) {
        this.errorCbs.push(errorCb);
    }, History.prototype.transitionTo = function(location, onComplete, onAbort) {
        var this$1 = this, route = this.router.match(location, this.current);
        this.confirmTransition(route, (function() {
            this$1.updateRoute(route), onComplete && onComplete(route), this$1.ensureURL(), 
            this$1.ready || (this$1.ready = !0, this$1.readyCbs.forEach((function(cb) {
                cb(route);
            })));
        }), (function(err) {
            onAbort && onAbort(err), err && !this$1.ready && (this$1.ready = !0, this$1.readyErrorCbs.forEach((function(cb) {
                cb(err);
            })));
        }));
    }, History.prototype.confirmTransition = function(route, onComplete, onAbort) {
        var this$1 = this, current = this.current, abort = function(err) {
            !isExtendedError(NavigationDuplicated, err) && isError(err) && (this$1.errorCbs.length ? this$1.errorCbs.forEach((function(cb) {
                cb(err);
            })) : console.error(err)), onAbort && onAbort(err);
        };
        if (isSameRoute(route, current) && route.matched.length === current.matched.length) return this.ensureURL(), 
        abort(new NavigationDuplicated(route));
        var ref = function(current, next) {
            var i, max = Math.max(current.length, next.length);
            for (i = 0; i < max && current[i] === next[i]; i++) ;
            return {
                updated: next.slice(0, i),
                activated: next.slice(i),
                deactivated: current.slice(i)
            };
        }(this.current.matched, route.matched), updated = ref.updated, deactivated = ref.deactivated, activated = ref.activated, queue = [].concat(function(deactivated) {
            return extractGuards(deactivated, "beforeRouteLeave", bindGuard, !0);
        }(deactivated), this.router.beforeHooks, function(updated) {
            return extractGuards(updated, "beforeRouteUpdate", bindGuard);
        }(updated), activated.map((function(m) {
            return m.beforeEnter;
        })), resolveAsyncComponents(activated));
        this.pending = route;
        var iterator = function(hook, next) {
            if (this$1.pending !== route) return abort();
            try {
                hook(route, current, (function(to) {
                    !1 === to || isError(to) ? (this$1.ensureURL(!0), abort(to)) : "string" == typeof to || "object" == typeof to && ("string" == typeof to.path || "string" == typeof to.name) ? (abort(), 
                    "object" == typeof to && to.replace ? this$1.replace(to) : this$1.push(to)) : next(to);
                }));
            } catch (e) {
                abort(e);
            }
        };
        runQueue(queue, iterator, (function() {
            var postEnterCbs = [];
            runQueue(function(activated, cbs, isValid) {
                return extractGuards(activated, "beforeRouteEnter", (function(guard, _, match, key) {
                    return function(guard, match, key, cbs, isValid) {
                        return function(to, from, next) {
                            return guard(to, from, (function(cb) {
                                "function" == typeof cb && cbs.push((function() {
                                    !function poll(cb, instances, key, isValid) {
                                        instances[key] && !instances[key]._isBeingDestroyed ? cb(instances[key]) : isValid() && setTimeout((function() {
                                            poll(cb, instances, key, isValid);
                                        }), 16);
                                    }(cb, match.instances, key, isValid);
                                })), next(cb);
                            }));
                        };
                    }(guard, match, key, cbs, isValid);
                }));
            }(activated, postEnterCbs, (function() {
                return this$1.current === route;
            })).concat(this$1.router.resolveHooks), iterator, (function() {
                if (this$1.pending !== route) return abort();
                this$1.pending = null, onComplete(route), this$1.router.app && this$1.router.app.$nextTick((function() {
                    postEnterCbs.forEach((function(cb) {
                        cb();
                    }));
                }));
            }));
        }));
    }, History.prototype.updateRoute = function(route) {
        var prev = this.current;
        this.current = route, this.cb && this.cb(route), this.router.afterHooks.forEach((function(hook) {
            hook && hook(route, prev);
        }));
    };
    var HTML5History = function(History) {
        function HTML5History(router, base) {
            var this$1 = this;
            History.call(this, router, base);
            var expectScroll = router.options.scrollBehavior, supportsScroll = supportsPushState && expectScroll;
            supportsScroll && setupScroll();
            var initLocation = getLocation(this.base);
            window.addEventListener("popstate", (function(e) {
                var current = this$1.current, location = getLocation(this$1.base);
                this$1.current === START && location === initLocation || this$1.transitionTo(location, (function(route) {
                    supportsScroll && handleScroll(router, route, current, !0);
                }));
            }));
        }
        return History && (HTML5History.__proto__ = History), HTML5History.prototype = Object.create(History && History.prototype), 
        HTML5History.prototype.constructor = HTML5History, HTML5History.prototype.go = function(n) {
            window.history.go(n);
        }, HTML5History.prototype.push = function(location, onComplete, onAbort) {
            var this$1 = this, fromRoute = this.current;
            this.transitionTo(location, (function(route) {
                pushState(cleanPath(this$1.base + route.fullPath)), handleScroll(this$1.router, route, fromRoute, !1), 
                onComplete && onComplete(route);
            }), onAbort);
        }, HTML5History.prototype.replace = function(location, onComplete, onAbort) {
            var this$1 = this, fromRoute = this.current;
            this.transitionTo(location, (function(route) {
                replaceState(cleanPath(this$1.base + route.fullPath)), handleScroll(this$1.router, route, fromRoute, !1), 
                onComplete && onComplete(route);
            }), onAbort);
        }, HTML5History.prototype.ensureURL = function(push) {
            if (getLocation(this.base) !== this.current.fullPath) {
                var current = cleanPath(this.base + this.current.fullPath);
                push ? pushState(current) : replaceState(current);
            }
        }, HTML5History.prototype.getCurrentLocation = function() {
            return getLocation(this.base);
        }, HTML5History;
    }(History);
    function getLocation(base) {
        var path = decodeURI(window.location.pathname);
        return base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash;
    }
    var HashHistory = function(History) {
        function HashHistory(router, base, fallback) {
            History.call(this, router, base), fallback && function(base) {
                var location = getLocation(base);
                if (!/^\/#/.test(location)) return window.location.replace(cleanPath(base + "/#" + location)), 
                !0;
            }(this.base) || ensureSlash();
        }
        return History && (HashHistory.__proto__ = History), HashHistory.prototype = Object.create(History && History.prototype), 
        HashHistory.prototype.constructor = HashHistory, HashHistory.prototype.setupListeners = function() {
            var this$1 = this, expectScroll = this.router.options.scrollBehavior, supportsScroll = supportsPushState && expectScroll;
            supportsScroll && setupScroll(), window.addEventListener(supportsPushState ? "popstate" : "hashchange", (function() {
                var current = this$1.current;
                ensureSlash() && this$1.transitionTo(getHash(), (function(route) {
                    supportsScroll && handleScroll(this$1.router, route, current, !0), supportsPushState || replaceHash(route.fullPath);
                }));
            }));
        }, HashHistory.prototype.push = function(location, onComplete, onAbort) {
            var this$1 = this, fromRoute = this.current;
            this.transitionTo(location, (function(route) {
                pushHash(route.fullPath), handleScroll(this$1.router, route, fromRoute, !1), onComplete && onComplete(route);
            }), onAbort);
        }, HashHistory.prototype.replace = function(location, onComplete, onAbort) {
            var this$1 = this, fromRoute = this.current;
            this.transitionTo(location, (function(route) {
                replaceHash(route.fullPath), handleScroll(this$1.router, route, fromRoute, !1), 
                onComplete && onComplete(route);
            }), onAbort);
        }, HashHistory.prototype.go = function(n) {
            window.history.go(n);
        }, HashHistory.prototype.ensureURL = function(push) {
            var current = this.current.fullPath;
            getHash() !== current && (push ? pushHash(current) : replaceHash(current));
        }, HashHistory.prototype.getCurrentLocation = function() {
            return getHash();
        }, HashHistory;
    }(History);
    function ensureSlash() {
        var path = getHash();
        return "/" === path.charAt(0) || (replaceHash("/" + path), !1);
    }
    function getHash() {
        var href = window.location.href, index = href.indexOf("#");
        if (index < 0) return "";
        var searchIndex = (href = href.slice(index + 1)).indexOf("?");
        if (searchIndex < 0) {
            var hashIndex = href.indexOf("#");
            href = hashIndex > -1 ? decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex) : decodeURI(href);
        } else href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
        return href;
    }
    function getUrl(path) {
        var href = window.location.href, i = href.indexOf("#");
        return (i >= 0 ? href.slice(0, i) : href) + "#" + path;
    }
    function pushHash(path) {
        supportsPushState ? pushState(getUrl(path)) : window.location.hash = path;
    }
    function replaceHash(path) {
        supportsPushState ? replaceState(getUrl(path)) : window.location.replace(getUrl(path));
    }
    var AbstractHistory = function(History) {
        function AbstractHistory(router, base) {
            History.call(this, router, base), this.stack = [], this.index = -1;
        }
        return History && (AbstractHistory.__proto__ = History), AbstractHistory.prototype = Object.create(History && History.prototype), 
        AbstractHistory.prototype.constructor = AbstractHistory, AbstractHistory.prototype.push = function(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, (function(route) {
                this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route), this$1.index++, 
                onComplete && onComplete(route);
            }), onAbort);
        }, AbstractHistory.prototype.replace = function(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, (function(route) {
                this$1.stack = this$1.stack.slice(0, this$1.index).concat(route), onComplete && onComplete(route);
            }), onAbort);
        }, AbstractHistory.prototype.go = function(n) {
            var this$1 = this, targetIndex = this.index + n;
            if (!(targetIndex < 0 || targetIndex >= this.stack.length)) {
                var route = this.stack[targetIndex];
                this.confirmTransition(route, (function() {
                    this$1.index = targetIndex, this$1.updateRoute(route);
                }), (function(err) {
                    isExtendedError(NavigationDuplicated, err) && (this$1.index = targetIndex);
                }));
            }
        }, AbstractHistory.prototype.getCurrentLocation = function() {
            var current = this.stack[this.stack.length - 1];
            return current ? current.fullPath : "/";
        }, AbstractHistory.prototype.ensureURL = function() {}, AbstractHistory;
    }(History), VueRouter = function(options) {
        void 0 === options && (options = {}), this.app = null, this.apps = [], this.options = options, 
        this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = createMatcher(options.routes || [], this);
        var mode = options.mode || "hash";
        switch (this.fallback = "history" === mode && !supportsPushState && !1 !== options.fallback, 
        this.fallback && (mode = "hash"), inBrowser || (mode = "abstract"), this.mode = mode, 
        mode) {
          case "history":
            this.history = new HTML5History(this, options.base);
            break;

          case "hash":
            this.history = new HashHistory(this, options.base, this.fallback);
            break;

          case "abstract":
            this.history = new AbstractHistory(this, options.base);
            break;

          default:
            0;
        }
    }, prototypeAccessors = {
        currentRoute: {
            configurable: !0
        }
    };
    function registerHook(list, fn) {
        return list.push(fn), function() {
            var i = list.indexOf(fn);
            i > -1 && list.splice(i, 1);
        };
    }
    VueRouter.prototype.match = function(raw, current, redirectedFrom) {
        return this.matcher.match(raw, current, redirectedFrom);
    }, prototypeAccessors.currentRoute.get = function() {
        return this.history && this.history.current;
    }, VueRouter.prototype.init = function(app) {
        var this$1 = this;
        if (this.apps.push(app), app.$once("hook:destroyed", (function() {
            var index = this$1.apps.indexOf(app);
            index > -1 && this$1.apps.splice(index, 1), this$1.app === app && (this$1.app = this$1.apps[0] || null);
        })), !this.app) {
            this.app = app;
            var history = this.history;
            if (history instanceof HTML5History) history.transitionTo(history.getCurrentLocation()); else if (history instanceof HashHistory) {
                var setupHashListener = function() {
                    history.setupListeners();
                };
                history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
            }
            history.listen((function(route) {
                this$1.apps.forEach((function(app) {
                    app._route = route;
                }));
            }));
        }
    }, VueRouter.prototype.beforeEach = function(fn) {
        return registerHook(this.beforeHooks, fn);
    }, VueRouter.prototype.beforeResolve = function(fn) {
        return registerHook(this.resolveHooks, fn);
    }, VueRouter.prototype.afterEach = function(fn) {
        return registerHook(this.afterHooks, fn);
    }, VueRouter.prototype.onReady = function(cb, errorCb) {
        this.history.onReady(cb, errorCb);
    }, VueRouter.prototype.onError = function(errorCb) {
        this.history.onError(errorCb);
    }, VueRouter.prototype.push = function(location, onComplete, onAbort) {
        var this$1 = this;
        if (!onComplete && !onAbort && "undefined" != typeof Promise) return new Promise((function(resolve, reject) {
            this$1.history.push(location, resolve, reject);
        }));
        this.history.push(location, onComplete, onAbort);
    }, VueRouter.prototype.replace = function(location, onComplete, onAbort) {
        var this$1 = this;
        if (!onComplete && !onAbort && "undefined" != typeof Promise) return new Promise((function(resolve, reject) {
            this$1.history.replace(location, resolve, reject);
        }));
        this.history.replace(location, onComplete, onAbort);
    }, VueRouter.prototype.go = function(n) {
        this.history.go(n);
    }, VueRouter.prototype.back = function() {
        this.go(-1);
    }, VueRouter.prototype.forward = function() {
        this.go(1);
    }, VueRouter.prototype.getMatchedComponents = function(to) {
        var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
        return route ? [].concat.apply([], route.matched.map((function(m) {
            return Object.keys(m.components).map((function(key) {
                return m.components[key];
            }));
        }))) : [];
    }, VueRouter.prototype.resolve = function(to, current, append) {
        var location = normalizeLocation(to, current = current || this.history.current, append, this), route = this.match(location, current), fullPath = route.redirectedFrom || route.fullPath;
        return {
            location: location,
            route: route,
            href: function(base, fullPath, mode) {
                var path = "hash" === mode ? "#" + fullPath : fullPath;
                return base ? cleanPath(base + "/" + path) : path;
            }(this.history.base, fullPath, this.mode),
            normalizedTo: location,
            resolved: route
        };
    }, VueRouter.prototype.addRoutes = function(routes) {
        this.matcher.addRoutes(routes), this.history.current !== START && this.history.transitionTo(this.history.getCurrentLocation());
    }, Object.defineProperties(VueRouter.prototype, prototypeAccessors), VueRouter.install = function install(Vue) {
        if (!install.installed || _Vue !== Vue) {
            install.installed = !0, _Vue = Vue;
            var isDef = function(v) {
                return void 0 !== v;
            }, registerInstance = function(vm, callVal) {
                var i = vm.$options._parentVnode;
                isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance) && i(vm, callVal);
            };
            Vue.mixin({
                beforeCreate: function() {
                    isDef(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, 
                    this._router.init(this), Vue.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, 
                    registerInstance(this, this);
                },
                destroyed: function() {
                    registerInstance(this);
                }
            }), Object.defineProperty(Vue.prototype, "$router", {
                get: function() {
                    return this._routerRoot._router;
                }
            }), Object.defineProperty(Vue.prototype, "$route", {
                get: function() {
                    return this._routerRoot._route;
                }
            }), Vue.component("RouterView", View), Vue.component("RouterLink", Link);
            var strats = Vue.config.optionMergeStrategies;
            strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
        }
    }, VueRouter.version = "3.1.6", inBrowser && window.Vue && window.Vue.use(VueRouter);
    var vue_router_esm = VueRouter, MainPagevue_type_template_id_da1296b8_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("layout", {
            ref: "template",
            staticClass: "main-page"
        }, [ _c("div", {
            staticClass: "status-box"
        }, [ _vm.protectionEnabled ? _vm._e() : _c("div", {
            staticClass: "status__unprotected"
        }, [ _c("div", {
            staticClass: "robot-box"
        }, [ _c("i") ]), _vm._v(" "), _c("div", {
            staticClass: "title"
        }, [ _vm._v("Unprotected") ]), _vm._v(" "), _c("div", {
            staticClass: "note"
        }, [ _vm._v("Click button to protect yourself") ]), _vm._v(" "), _c("div", {
            staticClass: "power-button-box"
        }, [ _c("power-button", {
            ref: "power",
            on: {
                on: _vm.onTurnOn,
                off: _vm.onTurnOff
            }
        }) ], 1) ]), _vm._v(" "), _vm.protectionEnabled ? _c("div", {
            staticClass: "status__protected"
        }, [ _c("div", {
            staticClass: "title"
        }, [ _vm._v("Protection level") ]), _vm._v(" "), _c("protection-level-bar", {
            attrs: {
                current: _vm.protectionLevel.current,
                max: _vm.protectionLevel.max
            }
        }), _vm._v(" "), _c("div", {
            staticClass: "power-button-box"
        }, [ _c("power-button", {
            ref: "power",
            on: {
                on: _vm.onTurnOn,
                off: _vm.onTurnOff
            }
        }) ], 1) ], 1) : _vm._e() ]), _vm._v(" "), _c("div", {
            staticClass: "ad-box"
        }, [ _c("ul", {
            staticClass: "ip-details"
        }, [ _c("li", [ _c("strong", [ _vm._v("Total Ads blocked: ") ]), _vm._v("\r\n        " + _vm._s(_vm.adsTotal) + "\r\n      ") ]), _vm._v(" "), _vm._l(_vm.ipDetails, (function(item) {
            return _c("li", [ _c("strong", [ _vm._v(_vm._s(item.name) + ": ") ]), _vm._v("\r\n        " + _vm._s(item.value) + "\r\n      ") ]);
        })) ], 2), _vm._v(" "), _c("div", {
            staticClass: "consent-box"
        }, [ _vm._v("\r\n      Enabling protection you give us access to visited URLs and Ads collection in order to improve ad-blocking detection rate\r\n    ") ]) ]) ]);
    };
    MainPagevue_type_template_id_da1296b8_render._withStripped = !0;
    var MainLayoutvue_type_template_id_a6c04ef8_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "main_layout"
        }, [ _c("loader", {
            ref: "loader",
            attrs: {
                shown: !1
            }
        }), _vm._v(" "), _c("div", {
            staticClass: "main_layout__header"
        }, [ _c("logo"), _vm._v(" "), _c("div", {
            staticClass: "header_menu"
        }, [ _c("router-link", {
            staticClass: "settings-link",
            attrs: {
                to: "settings",
                title: "Settings"
            }
        }), _vm._v(" "), _c("dots-button", {
            ref: "menuShowButton",
            on: {
                activated: function($event) {
                    return _vm.onShowMenu();
                }
            }
        }) ], 1) ], 1), _vm._v(" "), _c("div", {
            staticClass: "main_layout__body"
        }, [ _c("app-menu", {
            ref: "menu",
            attrs: {
                active: !1
            },
            on: {
                hidden: function($event) {
                    return _vm.onHideMenu();
                }
            }
        }), _vm._v(" "), _vm._t("default") ], 2), _vm._v(" "), _c("div", {
            staticClass: "main_layout__footer",
            on: {
                click: function($event) {
                    return _vm.onClickFooter();
                },
                mouseover: function($event) {
                    return _vm.onHoverFooter();
                }
            }
        }, [ _c("promotion", {
            attrs: {
                elements: _vm.promotionElements
            }
        }) ], 1) ], 1);
    };
    MainLayoutvue_type_template_id_a6c04ef8_render._withStripped = !0;
    var GOOGLE_EVENTS = {
        LOCATION__SELECTED: {
            category: "Location",
            action: "OnLocationSelected",
            label: ""
        },
        SEARCH_INPUT__FOCUSED: {
            category: "SearchInput",
            action: "onFocus"
        },
        SEARCH_INPUT__CLEAR: {
            category: "SearchInput",
            action: "onClearSearchString"
        },
        PROTECTION__ON: {
            category: "protection_button",
            action: "on"
        },
        PROTECTION__OFF: {
            category: "protection_button",
            action: "off"
        },
        DISABLE_OTHER_EXTENSION_BUTTON__CLICKED: {
            category: "interruption_page",
            action: "click_disable_other_extension"
        },
        DISABLE_OTHER_EXTENSION_BUTTON__HOVER: {
            category: "interruption_page",
            action: "hover_disable_other_extension"
        },
        RATE_US_PAGE__SHOWN: {
            category: "rate_us_page",
            action: "shown"
        },
        RATE_US_BUTTON__CLICKED: {
            category: "rate_us_cta_button",
            action: "clicked"
        },
        RATE_US_BUTTON__HOVERED: {
            category: "rate_us_cta_button",
            action: "hovered"
        },
        RATE_US_CLOSE_BUTTON__CLICKED: {
            category: "rate_us_close_button",
            action: "clicked"
        },
        POLICY_AGREE_BUTTON__CLICKED: {
            category: "policy_agree_button",
            action: "clicked"
        },
        POLICY_CANCEL_BUTTON__CLICKED: {
            category: "policy_cancel_button",
            action: "clicked"
        },
        POLICY_PAGE__SHOWN: {
            category: "policy_page",
            action: "shown"
        },
        MENU__SHOWN: {
            category: "Menu",
            action: "OnShowMenuClicked"
        },
        MENU__CLOSED: {
            category: "Menu",
            action: "OnCloseMenuClicked"
        },
        FOOTER__CLICKED: {
            category: "footer",
            action: "click"
        },
        FOOTER__HOVER: {
            category: "footer",
            action: "hover"
        },
        FOOTER_LINK__HOVER: {
            category: "footer_link",
            action: "hover"
        },
        AD_BLOCKER__ON: {
            category: "ad_blocker_toggle",
            action: "on"
        },
        AD_BLOCKER__OFF: {
            category: "ad_blocker_toggle",
            action: "off"
        },
        ANTIMALWARE__ON: {
            category: "safe_browsing_toggle",
            action: "on"
        },
        ANTIMALWARE__OFF: {
            category: "safe_browsing_toggle",
            action: "off"
        },
        ANALYTICS_BLOCKER__ON: {
            category: "analytics_block_toggle",
            action: "on"
        },
        ANALYTICS_BLOCKER__OFF: {
            category: "analytics_block_toggle",
            action: "off"
        },
        HISTORY_CLEANER__ON: {
            category: "history_cleaner_toggle",
            action: "on"
        },
        HISTORY_CLEANER__OFF: {
            category: "history_cleaner_toggle",
            action: "off"
        },
        HISTORY_CLEANER__PROP: {
            category: "history_cleaner_property",
            action: "set"
        },
        CACHE_CLEANER__ON: {
            category: "cache_cleaner_toggle",
            action: "on"
        },
        CACHE_CLEANER__OFF: {
            category: "cache_cleaner_toggle",
            action: "off"
        },
        CACHE_CLEANER__PROP: {
            category: "cache_cleaner_property",
            action: "set"
        },
        SETTINGS_PAGE__SHOWN: {
            category: "settings_page",
            action: "shown"
        },
        SETTINGS_PAGE__CLOSED: {
            category: "settings_page",
            action: "closed"
        },
        ANNOUNCEMENT_PAGE__SHOWN: {
            category: "announcement_page",
            action: "shown"
        },
        ANNOUNCEMENT_OK__CLICKED: {
            category: "announcement_ok_button",
            action: "clicked"
        },
        ANNOUNCEMENT_NO_THANKS__CLICKED: {
            category: "announcement_no_thanks_button",
            action: "clicked"
        },
        PROMOTION_LINK_CLICKED: {
            category: "promotion_link_clicked",
            action: null,
            label: null
        }
    }, Menuvue_type_template_id_19ca9435_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "menu",
            class: {
                "menu--active": _vm.isActiveMenu
            }
        }, [ _c("div", {
            staticClass: "menu__shadow"
        }), _vm._v(" "), _c("div", {
            staticClass: "menu__box"
        }, [ _c("div", {
            staticClass: "menu__close",
            on: {
                click: function($event) {
                    return _vm.hide();
                }
            }
        }, [ _c("cross-icon") ], 1), _vm._v(" "), _c("ul", {
            staticClass: "menu__list"
        }, [ _c("li", {
            staticClass: "menu__item"
        }, [ _c("a", {
            staticClass: "menu__link",
            on: {
                click: function($event) {
                    return _vm.openNewTab("About", "https://eighred.com");
                }
            }
        }, [ _vm._v("About") ]) ]), _vm._v(" "), _c("li", {
            staticClass: "menu__item"
        }, [ _c("a", {
            staticClass: "menu__link",
            on: {
                click: function($event) {
                    return _vm.openNewTab("Products", "https://eighred.com");
                }
            }
        }, [ _vm._v("Products") ]) ]), _vm._v(" "), _c("li", {
            staticClass: "menu__item"
        }, [ _c("a", {
            staticClass: "menu__link",
            on: {
                click: function($event) {
                    return _vm.openNewTab("EULA", "https://eighred.com");
                }
            }
        }, [ _vm._v("EULA") ]) ]) ]) ]) ]);
    };
    Menuvue_type_template_id_19ca9435_render._withStripped = !0;
    var CrossButtonvue_type_template_id_ab80e170_render = function() {
        var _h = this.$createElement;
        return (this._self._c || _h)("div", {
            staticClass: "cross_button"
        });
    };
    CrossButtonvue_type_template_id_ab80e170_render._withStripped = !0;
    __webpack_require__(308);
    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
        var hook, options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
        if (render && (options.render = render, options.staticRenderFns = staticRenderFns, 
        options._compiled = !0), functionalTemplate && (options.functional = !0), scopeId && (options._scopeId = "data-v-" + scopeId), 
        moduleIdentifier ? (hook = function(context) {
            (context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (context = __VUE_SSR_CONTEXT__), 
            injectStyles && injectStyles.call(this, context), context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
        }, options._ssrRegister = hook) : injectStyles && (hook = shadowMode ? function() {
            injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles), hook) if (options.functional) {
            options._injectStyles = hook;
            var originalRender = options.render;
            options.render = function(h, context) {
                return hook.call(context), originalRender(h, context);
            };
        } else {
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
        }
        return {
            exports: scriptExports,
            options: options
        };
    }
    var component = normalizeComponent({}, CrossButtonvue_type_template_id_ab80e170_render, [], !1, null, null, null);
    component.options.__file = "app/popup/components/icons/cross-icon/CrossButton.vue";
    var CrossButton = component.exports, EVENTS_MENU_HIDDEN = "hidden", EVENTS_MENU_SHOWN = "shown", menu_Menuvue_type_script_lang_js_ = {
        props: {
            active: Boolean
        },
        components: {
            "cross-icon": CrossButton
        },
        data: function() {
            return {
                isActiveMenu: this.active
            };
        },
        methods: {
            show: function() {
                this.isActiveMenu = !0, this.$emit(EVENTS_MENU_SHOWN);
            },
            hide: function() {
                this.isActiveMenu = !1, this.$emit(EVENTS_MENU_HIDDEN);
            },
            toggle: function() {
                this.isActiveMenu = !this.isActiveMenu;
                var event = this.isActiveMenu ? EVENTS_MENU_SHOWN : EVENTS_MENU_HIDDEN;
                this.$emit(event);
            }
        }
    }, Menu_component = (__webpack_require__(310), normalizeComponent(menu_Menuvue_type_script_lang_js_, Menuvue_type_template_id_19ca9435_render, [], !1, null, null, null));
    Menu_component.options.__file = "app/popup/components/menu/Menu.vue";
    var Menu = Menu_component.exports, DotsButtonvue_type_template_id_01f349a4_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("div", {
            staticClass: "dots_button",
            class: {
                "dots_button--active": this.isActive
            },
            on: {
                click: this.onClick
            }
        }, [ _c("div", {
            staticClass: "dots_button__dot dots_button__dot_top"
        }), this._v(" "), _c("div", {
            staticClass: "dots_button__dot dots_button__dot_middle"
        }), this._v(" "), _c("div", {
            staticClass: "dots_button__dot dots_button__dot_bottom"
        }) ]);
    };
    DotsButtonvue_type_template_id_01f349a4_render._withStripped = !0;
    var DotsButtonvue_type_script_lang_js_EVENTS_ACTIVATED = "activated", dots_button_DotsButtonvue_type_script_lang_js_ = {
        data: function() {
            return {
                isActive: !1
            };
        },
        methods: {
            enable: function() {
                this.isActive = !0;
            },
            disable: function() {
                this.isActive = !1;
            },
            toggle: function() {
                this.isActive = !this.isActive;
            },
            onClick: function() {
                this.isActive || (this.isActive = !0, this.$emit(DotsButtonvue_type_script_lang_js_EVENTS_ACTIVATED));
            },
            diactivate: function() {
                this.isActive = !1;
            }
        }
    }, DotsButton_component = (__webpack_require__(312), normalizeComponent(dots_button_DotsButtonvue_type_script_lang_js_, DotsButtonvue_type_template_id_01f349a4_render, [], !1, null, null, null));
    DotsButton_component.options.__file = "app/popup/components/buttons/dots-button/DotsButton.vue";
    var DotsButton = DotsButton_component.exports, Loadervue_type_template_id_345886b5_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: this.isShown,
                expression: "isShown"
            } ],
            staticClass: "loader"
        }, [ _c("div", {
            staticClass: "loader__spin"
        }), this._v(" "), _c("div", {
            staticClass: "loader__bg"
        }), this._v(" "), _c("div", {
            staticClass: "loader__text"
        }, [ this._v(this._s(this.text)) ]) ]);
    };
    Loadervue_type_template_id_345886b5_render._withStripped = !0;
    var loader_Loadervue_type_script_lang_js_ = {
        props: {
            shown: Boolean,
            text: String
        },
        data: function() {
            return {
                isShown: this.shown,
                message: this.text
            };
        },
        methods: {
            show: function() {
                var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                this.isShown = !0, this.message = text;
            },
            hide: function() {
                this.isShown = !1;
            }
        }
    }, Loader_component = (__webpack_require__(314), normalizeComponent(loader_Loadervue_type_script_lang_js_, Loadervue_type_template_id_345886b5_render, [], !1, null, null, null));
    Loader_component.options.__file = "app/popup/components/loader/Loader.vue";
    var Loader = Loader_component.exports, Logovue_type_template_id_491523b5_render = function() {
        var _vm = this, _h = _vm.$createElement;
        return (_vm._self._c || _h)("img", {
            staticClass: "logo",
            attrs: {
                src: __webpack_require__(316),
                alt: "Bifrost VPN"
            },
            on: {
                click: function($event) {
                    return _vm.openNewTab("logo", "https://eighred.com/");
                }
            }
        });
    };
    Logovue_type_template_id_491523b5_render._withStripped = !0;
    __webpack_require__(317);
    var Logo_component = normalizeComponent({}, Logovue_type_template_id_491523b5_render, [], !1, null, null, null);
    Logo_component.options.__file = "app/popup/components/logo/Logo.vue";
    var Logo = Logo_component.exports, Promotionvue_type_template_id_efaa16c6_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "promotion"
        }, _vm._l(_vm.elements, (function(element) {
            return _c("span", [ "TEXT" === element.type ? _c("span", {
                staticClass: "promotion__text"
            }, [ _vm._v(_vm._s(element.text)) ]) : "LINK" === element.type ? _c("a", {
                staticClass: "promotion__link",
                class: _vm.makeFontStylesClass(element.link),
                on: {
                    click: function($event) {
                        return _vm.onLinkClicked(element.link);
                    }
                }
            }, [ _vm._v(" " + _vm._s(element.link.text) + "\r\n    ") ]) : _vm._e() ]);
        })), 0);
    };
    Promotionvue_type_template_id_efaa16c6_render._withStripped = !0;
    var promotion_Promotionvue_type_script_lang_js_ = {
        props: [ "elements" ],
        methods: {
            makeFontStylesClass: function(element) {
                return element.style ? {
                    "promotion--strong": "strong" === element.style,
                    "promotion--italic": "italic" === element.style,
                    "promotion--normal": "normal" === element.style
                } : {};
            },
            onLinkClicked: function(element) {
                var event = GOOGLE_EVENTS.PROMOTION_LINK_CLICKED;
                event.action = element.text, event.label = element.link, this.trackEvent(event), 
                this.openNewTab(element.text, element.link);
            }
        }
    }, Promotion_component = (__webpack_require__(319), normalizeComponent(promotion_Promotionvue_type_script_lang_js_, Promotionvue_type_template_id_efaa16c6_render, [], !1, null, null, null));
    Promotion_component.options.__file = "app/popup/components/promotion/Promotion.vue";
    var Promotion = Promotion_component.exports, registry = Registry_Registry.getInstance(), MainLayoutvue_type_script_lang_js_promotionService = null, main_MainLayoutvue_type_script_lang_js_ = {
        components: {
            "app-menu": Menu,
            "dots-button": DotsButton,
            loader: Loader,
            logo: Logo,
            promotion: Promotion
        },
        data: function() {
            return {
                promotionElements: []
            };
        },
        created: function() {
            var _this = this;
            return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                return regenerator_default.a.wrap((function(_context) {
                    for (;;) switch (_context.prev = _context.next) {
                      case 0:
                        return MainLayoutvue_type_script_lang_js_promotionService = registry.get(SERVICES_PROMOTION_SERVICE), 
                        _context.next = 3, MainLayoutvue_type_script_lang_js_promotionService.getFooter();

                      case 3:
                        _this.promotionElements = _context.sent;

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })))();
        },
        methods: {
            loader: function() {
                return this.$refs.loader;
            },
            onShowMenu: function() {
                this.$refs.menu.show(), this.trackEvent(GOOGLE_EVENTS.MENU__SHOWN);
            },
            onHideMenu: function() {
                this.$refs.menuShowButton.disable(), this.trackEvent(GOOGLE_EVENTS.MENU__CLOSED);
            },
            onClickFooter: function() {
                this.trackEvent(GOOGLE_EVENTS.FOOTER__CLICKED);
            },
            onHoverFooter: function() {
                this.trackEvent(GOOGLE_EVENTS.FOOTER__HOVER);
            },
            onHoverFooterLink: function() {
                this.trackEvent(GOOGLE_EVENTS.FOOTER_LINK__HOVER);
            }
        }
    }, MainLayout_component = (__webpack_require__(321), normalizeComponent(main_MainLayoutvue_type_script_lang_js_, MainLayoutvue_type_template_id_a6c04ef8_render, [], !1, null, null, null));
    MainLayout_component.options.__file = "app/popup/layouts/main/MainLayout.vue";
    var MainLayout = MainLayout_component.exports, Listvue_type_template_id_9b23d8d6_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("ul", {
            staticClass: "list"
        }, _vm._l(_vm.items, (function(item) {
            return _c("li", {
                staticClass: "list__item",
                class: {
                    "list__item--check": item.checked,
                    "list__item--cross": item.cross
                }
            }, [ _vm._v("\r\n    " + _vm._s(item.text) + "\r\n  ") ]);
        })), 0);
    };
    Listvue_type_template_id_9b23d8d6_render._withStripped = !0;
    var list_Listvue_type_script_lang_js_ = {
        props: {
            items: Array
        }
    }, List_component = (__webpack_require__(324), normalizeComponent(list_Listvue_type_script_lang_js_, Listvue_type_template_id_9b23d8d6_render, [], !1, null, null, null));
    List_component.options.__file = "app/popup/components/list/List.vue";
    var List = List_component.exports, PowerButtonvue_type_template_id_7cf2379a_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("div", {
            staticClass: "power_button",
            on: {
                click: this.onClick
            }
        }, [ _c("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: this.isON,
                expression: "isON"
            } ],
            staticClass: "power_button--off"
        }), this._v(" "), _c("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !this.isON,
                expression: "!isON"
            } ],
            staticClass: "power_button--on"
        }) ]);
    };
    PowerButtonvue_type_template_id_7cf2379a_render._withStripped = !0;
    var PowerButtonvue_type_script_lang_js_EVENTS_ON = "on", PowerButtonvue_type_script_lang_js_EVENTS_OFF = "off", power_button_PowerButtonvue_type_script_lang_js_ = {
        data: function() {
            return {
                isON: !0
            };
        },
        methods: {
            onClick: function() {
                this.isON = !this.isON;
                var event = this.isON ? PowerButtonvue_type_script_lang_js_EVENTS_ON : PowerButtonvue_type_script_lang_js_EVENTS_OFF;
                this.$emit(event);
            },
            turnON: function() {
                var fireEvent = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isON = !0, fireEvent && this.$emit(PowerButtonvue_type_script_lang_js_EVENTS_ON);
            },
            turnOFF: function() {
                var fireEvent = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isON = !1, fireEvent && this.$emit(PowerButtonvue_type_script_lang_js_EVENTS_OFF);
            }
        }
    }, PowerButton_component = (__webpack_require__(326), normalizeComponent(power_button_PowerButtonvue_type_script_lang_js_, PowerButtonvue_type_template_id_7cf2379a_render, [], !1, null, null, null));
    PowerButton_component.options.__file = "app/popup/components/buttons/power-button/PowerButton.vue";
    var PowerButton = PowerButton_component.exports, ProtectionLevelBarvue_type_template_id_103334e7_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("div", {
            staticClass: "protection-level-bar"
        }, [ _c("div", {
            staticClass: "level-meter",
            class: this.levelClass
        }) ]);
    };
    ProtectionLevelBarvue_type_template_id_103334e7_render._withStripped = !0;
    var protection_level_bar_ProtectionLevelBarvue_type_script_lang_js_ = {
        props: {
            current: Number,
            max: Number
        },
        computed: {
            levelClass: function() {
                return "level-".concat(this.current);
            }
        }
    }, ProtectionLevelBar_component = (__webpack_require__(330), normalizeComponent(protection_level_bar_ProtectionLevelBarvue_type_script_lang_js_, ProtectionLevelBarvue_type_template_id_103334e7_render, [], !1, null, null, null));
    ProtectionLevelBar_component.options.__file = "app/popup/components/protection-level-bar/ProtectionLevelBar.vue";
    var ProtectionLevelBar = ProtectionLevelBar_component.exports, ContentEvents = __webpack_require__(13);
    function helpers_noop() {}
    function callExternalEvent(_x, _x2, _x3) {
        return _callExternalEvent.apply(this, arguments);
    }
    function _callExternalEvent() {
        return (_callExternalEvent = asyncToGenerator_default()(regenerator_default.a.mark((function _callee(dispatcher, eventName, params) {
            return regenerator_default.a.wrap((function(_context) {
                for (;;) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise((function(resolve) {
                        dispatcher.emit(new src.MarioEvent(eventName, params), (function(r) {
                            return resolve(r);
                        }));
                    })));

                  case 1:
                  case "end":
                    return _context.stop();
                }
            }), _callee);
        })))).apply(this, arguments);
    }
    function delay(_x4) {
        return _delay.apply(this, arguments);
    }
    function _delay() {
        return (_delay = asyncToGenerator_default()(regenerator_default.a.mark((function _callee2(ms) {
            return regenerator_default.a.wrap((function(_context2) {
                for (;;) switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise((function(resolve) {
                        return setTimeout(resolve, ms);
                    })));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
            }), _callee2);
        })))).apply(this, arguments);
    }
    var MainPagevue_type_script_lang_js_registry = Registry_Registry.getInstance(), MainPagevue_type_script_lang_js_adBlocker = null, MainPagevue_type_script_lang_js_urbanLocationService = null, MainPagevue_type_script_lang_js_policyService = null, MainPagevue_type_script_lang_js_dispatcher = null, main_MainPagevue_type_script_lang_js_ = {
        data: function() {
            return {
                locations: {},
                currentLocation: {},
                adsOnPage: null,
                adsTotal: null,
                protectionEnabled: null,
                protectionLevel: {
                    current: 0,
                    max: 0
                },
                ipDetails: []
            };
        },
        components: {
            layout: MainLayout,
            list: List,
            "power-button": PowerButton,
            "protection-level-bar": ProtectionLevelBar
        },
        created: function() {
            MainPagevue_type_script_lang_js_urbanLocationService = MainPagevue_type_script_lang_js_registry.get(SERVICES_LOCATION_SERVICE), 
            (MainPagevue_type_script_lang_js_dispatcher = MainPagevue_type_script_lang_js_registry.get(SERVICES_EXTERNAL_DISPATCHER)).emit(new src.MarioEvent(ContentEvents.ContentEvents.POPUP_COUNT));
        },
        mounted: function() {
            var _this = this;
            return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                return regenerator_default.a.wrap((function(_context) {
                    for (;;) switch (_context.prev = _context.next) {
                      case 0:
                        return MainPagevue_type_script_lang_js_adBlocker = MainPagevue_type_script_lang_js_registry.get(SERVICES_AD_BLOCKER), 
                        MainPagevue_type_script_lang_js_policyService = MainPagevue_type_script_lang_js_registry.get(SERVICES_POLICY), 
                        _this.updateProtectionStateInfo(), _this.updateIpInfo(), _context.next = 6, _this.updateStatus();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })))();
        },
        methods: {
            mapLocation: function(location) {
                var code = location.code().value().toLowerCase();
                return {
                    name: location.name().value(),
                    flag: "/popup/flags/svg/".concat(code, ".svg"),
                    code: location.code().value()
                };
            },
            updateStatus: function() {
                var _this2 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee2() {
                    var state, counters, method;
                    return regenerator_default.a.wrap((function(_context2) {
                        for (;;) switch (_context2.prev = _context2.next) {
                          case 0:
                            return _context2.next = 2, callExternalEvent(MainPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_GET_PROTECTION_STATE);

                          case 2:
                            return state = _context2.sent, _this2.protectionEnabled = state.enabled, _context2.next = 6, 
                            MainPagevue_type_script_lang_js_adBlocker.getAdBlockerCountersForActiveTab();

                          case 6:
                            counters = _context2.sent, _this2.adsOnPage = counters.currentPageTotal, _this2.adsTotal = counters.currentSessionTotal, 
                            method = _this2.protectionEnabled ? "turnON" : "turnOFF", _this2.$refs.power[method](!1);

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                    }), _callee2);
                })))();
            },
            onTurnOn: function() {
                var _this3 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee3() {
                    return regenerator_default.a.wrap((function(_context3) {
                        for (;;) switch (_context3.prev = _context3.next) {
                          case 0:
                            return _this3.$refs.template.loader().show("Processing"), _this3.protectionEnabled = !0, 
                            _context3.next = 4, MainPagevue_type_script_lang_js_policyService.isAgreed();

                          case 4:
                            if (_context3.sent) {
                                _context3.next = 7;
                                break;
                            }
                            return _context3.next = 7, MainPagevue_type_script_lang_js_policyService.agree();

                          case 7:
                            return _context3.next = 9, delay(500);

                          case 9:
                            return _context3.next = 11, callExternalEvent(MainPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_SET_PROTECTION_STATE, {
                                action: "SET_PROTECTION_STATE",
                                enabled: !0
                            });

                          case 11:
                            _this3.updateProtectionStateInfo(), _this3.trackEvent(GOOGLE_EVENTS.PROTECTION__ON), 
                            _this3.updateIpInfo(), _this3.$refs.template.loader().hide();

                          case 15:
                          case "end":
                            return _context3.stop();
                        }
                    }), _callee3);
                })))();
            },
            onTurnOff: function() {
                var _this4 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee4() {
                    return regenerator_default.a.wrap((function(_context4) {
                        for (;;) switch (_context4.prev = _context4.next) {
                          case 0:
                            return _this4.protectionEnabled = !1, _this4.$refs.template.loader().show("Processing"), 
                            _context4.next = 4, callExternalEvent(MainPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_SET_PROTECTION_STATE, {
                                action: "SET_PROTECTION_STATE",
                                enabled: !1
                            });

                          case 4:
                            _this4.trackEvent(GOOGLE_EVENTS.PROTECTION__OFF), _this4.updateIpInfo(), _this4.$refs.template.loader().hide();

                          case 7:
                          case "end":
                            return _context4.stop();
                        }
                    }), _callee4);
                })))();
            },
            updateIpInfo: function() {
                var ipInfoService = MainPagevue_type_script_lang_js_registry.get(SERVICES_IP_INFO_SERVICE), countryCode = ipInfoService.getIpInfo().country;
                this.ipDetails = [ {
                    name: "Your current IP",
                    value: ipInfoService.getIpInfo().ip.ip
                }, {
                    name: "ISP",
                    value: ipInfoService.getIpInfo().isp
                }, {
                    name: "Country",
                    value: MainPagevue_type_script_lang_js_urbanLocationService.getCountryNameByCode(countryCode)
                } ];
            },
            updateProtectionStateInfo: function() {
                var _this5 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee5() {
                    var protectionState;
                    return regenerator_default.a.wrap((function(_context5) {
                        for (;;) switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.next = 2, callExternalEvent(MainPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_GET_PROTECTION_STATE);

                          case 2:
                            protectionState = _context5.sent, _this5.protectionLevel = protectionState.level;

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                    }), _callee5);
                })))();
            }
        }
    }, MainPage_component = (__webpack_require__(338), normalizeComponent(main_MainPagevue_type_script_lang_js_, MainPagevue_type_template_id_da1296b8_render, [], !1, null, null, null));
    MainPage_component.options.__file = "app/popup/pages/main/MainPage.vue";
    var MainPage = MainPage_component.exports, InitPagevue_type_template_id_0b4959f8_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("simple-layout", [ _c("loader", {
            attrs: {
                shown: !0
            }
        }) ], 1);
    };
    InitPagevue_type_template_id_0b4959f8_render._withStripped = !0;
    var SimpleLayoutvue_type_template_id_6c8d1f64_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "simple_layout"
        }, [ _c("div", {
            staticClass: "simple_layout__header"
        }, [ _c("logo"), _vm._v(" "), _c("cross-icon", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: _vm.closeShown,
                expression: "closeShown"
            } ],
            ref: "closeButton",
            staticClass: "simple_layout__close",
            nativeOn: {
                click: function($event) {
                    return _vm.onClose();
                }
            }
        }) ], 1), _vm._v(" "), _c("div", {
            staticClass: "simple_layout__body"
        }, [ _vm._t("default") ], 2), _vm._v(" "), _c("div", {
            staticClass: "simple_layout__footer"
        }, [ _c("promotion", {
            attrs: {
                elements: _vm.promotionElements
            }
        }) ], 1) ]);
    };
    SimpleLayoutvue_type_template_id_6c8d1f64_render._withStripped = !0;
    var SimpleLayoutvue_type_script_lang_js_registry = Registry_Registry.getInstance(), SimpleLayoutvue_type_script_lang_js_promotionService = null, SimpleLayoutvue_type_script_lang_js_EVENTS_CLOSE_PAGE = "close", simple_SimpleLayoutvue_type_script_lang_js_ = {
        props: [ "hideFooter" ],
        components: {
            logo: Logo,
            "cross-icon": CrossButton,
            promotion: Promotion
        },
        data: function() {
            return {
                closeShown: !1,
                promotionElements: []
            };
        },
        created: function() {
            var _this = this;
            return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                return regenerator_default.a.wrap((function(_context) {
                    for (;;) switch (_context.prev = _context.next) {
                      case 0:
                        if (!_this.hideFooter) {
                            _context.next = 2;
                            break;
                        }
                        return _context.abrupt("return");

                      case 2:
                        return SimpleLayoutvue_type_script_lang_js_promotionService = SimpleLayoutvue_type_script_lang_js_registry.get(SERVICES_PROMOTION_SERVICE), 
                        _context.next = 5, SimpleLayoutvue_type_script_lang_js_promotionService.getFooter();

                      case 5:
                        _this.promotionElements = _context.sent;

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })))();
        },
        methods: {
            onClose: function() {
                this.$emit(SimpleLayoutvue_type_script_lang_js_EVENTS_CLOSE_PAGE);
            },
            showCloseButton: function() {
                this.closeShown = !0;
            }
        }
    }, SimpleLayout_component = (__webpack_require__(341), normalizeComponent(simple_SimpleLayoutvue_type_script_lang_js_, SimpleLayoutvue_type_template_id_6c8d1f64_render, [], !1, null, null, null));
    SimpleLayout_component.options.__file = "app/popup/layouts/simple/SimpleLayout.vue";
    var SimpleLayout = SimpleLayout_component.exports, InitPage_component = normalizeComponent({
        components: {
            "simple-layout": SimpleLayout,
            loader: Loader
        }
    }, InitPagevue_type_template_id_0b4959f8_render, [], !1, null, null, null);
    InitPage_component.options.__file = "app/popup/pages/init/InitPage.vue";
    var InitPage = InitPage_component.exports, InterruptionPagevue_type_template_id_72c31624_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("simple-layout", [ _c("div", {
            staticClass: "cta-image"
        }, [ _c("img", {
            attrs: {
                src: __webpack_require__(343),
                alt: ""
            }
        }) ]), _vm._v(" "), _c("h1", [ _vm._v("Service interruption") ]), _vm._v(" "), _c("div", {
            staticClass: "welcome-explanation-text"
        }, [ _vm._v("\r\n    Bifrost VPN is being interrupted"), _c("br"), _vm._v("\r\n    by another " + _vm._s(_vm.browser) + " extension that is controlling your proxy settings.\r\n  ") ]), _vm._v(" "), _c("button", {
            staticClass: "button_pink",
            staticStyle: {
                "margin-top": "50px"
            },
            on: {
                click: function($event) {
                    return _vm.onDisableOtherExtension();
                },
                mouseover: function($event) {
                    return _vm.hoverDisableOtherExtension();
                }
            }
        }, [ _vm._v("Disable other extension") ]) ]);
    };
    InterruptionPagevue_type_template_id_72c31624_render._withStripped = !0;
    var InterruptionPagevue_type_script_lang_js_interruptionService = null, interruption_InterruptionPagevue_type_script_lang_js_ = {
        components: {
            "simple-layout": SimpleLayout
        },
        data: function() {
            return {
                browser: "Chrome"
            };
        },
        beforeCreate: function() {
            Registry_Registry.getInstance().get(SERVICES_MANAGEMENT), InterruptionPagevue_type_script_lang_js_interruptionService = Registry_Registry.getInstance().get(SERVICES_INTERRUPTION_SERVICE);
        },
        methods: {
            onDisableOtherExtension: function() {
                var _this = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                    return regenerator_default.a.wrap((function(_context) {
                        for (;;) switch (_context.prev = _context.next) {
                          case 0:
                            return _this.trackEvent(GOOGLE_EVENTS.DISABLE_OTHER_EXTENSION_BUTTON__CLICKED), 
                            _context.next = 3, InterruptionPagevue_type_script_lang_js_interruptionService.disableExtensionsThatCauseInterruptions();

                          case 3:
                            return _context.abrupt("return", _this.$router.push(PATH.MAIN));

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }), _callee);
                })))();
            },
            hoverDisableOtherExtension: function() {
                this.trackEvent(GOOGLE_EVENTS.DISABLE_OTHER_EXTENSION_BUTTON__HOVER);
            }
        }
    }, InterruptionPage_component = (__webpack_require__(344), normalizeComponent(interruption_InterruptionPagevue_type_script_lang_js_, InterruptionPagevue_type_template_id_72c31624_render, [], !1, null, null, null));
    InterruptionPage_component.options.__file = "app/popup/pages/interruption/InterruptionPage.vue";
    var InterruptionPage = InterruptionPage_component.exports, RateUsPagevue_type_template_id_8a5a2a8a_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("simple-layout", {
            ref: "layout",
            on: {
                close: function($event) {
                    return _vm.onClosePage();
                }
            }
        }, [ _c("h1", [ _vm._v("Like using Bifrost"), _c("br"), _vm._v("VPN?") ]), _vm._v(" "), _c("div", {
            staticStyle: {
                "padding-top": "10px"
            }
        }, [ _c("img", {
            staticClass: "rate-icon",
            attrs: {
                src: __webpack_require__(107),
                alt: ""
            }
        }), _vm._v(" "), _c("img", {
            staticClass: "rate-icon",
            attrs: {
                src: __webpack_require__(107),
                alt: ""
            }
        }), _vm._v(" "), _c("img", {
            staticClass: "rate-icon",
            attrs: {
                src: __webpack_require__(107),
                alt: ""
            }
        }), _vm._v(" "), _c("img", {
            staticClass: "rate-icon",
            attrs: {
                src: __webpack_require__(107),
                alt: ""
            }
        }), _vm._v(" "), _c("img", {
            staticClass: "rate-icon rate-icon--greyed",
            attrs: {
                src: __webpack_require__(107),
                alt: ""
            }
        }) ]), _vm._v(" "), _c("div", {
            staticClass: "recommend-us"
        }, [ _vm._v("\r\n    Recommend us to others by"), _c("br"), _vm._v("\r\n    rating us on " + _vm._s(_vm.browser) + " store\r\n  ") ]), _vm._v(" "), _c("button", {
            staticClass: "button_pink agreement_agree",
            staticStyle: {
                "margin-top": "22px"
            },
            on: {
                click: function($event) {
                    return _vm.rateUs();
                },
                mouseover: function($event) {
                    return _vm.rateUsHover();
                }
            }
        }, [ _vm._v("Rate us!") ]), _vm._v(" "), _c("img", {
            staticClass: "footer-robot",
            attrs: {
                src: __webpack_require__(346),
                alt: ""
            }
        }) ]);
    };
    RateUsPagevue_type_template_id_8a5a2a8a_render._withStripped = !0;
    var rate_us_RateUsPagevue_type_script_lang_js_ = {
        components: {
            "simple-layout": SimpleLayout
        },
        mounted: function() {
            this.trackEvent(GOOGLE_EVENTS.RATE_US_PAGE__SHOWN), this.$refs.layout.showCloseButton(), 
            Registry_Registry.getInstance().get(SERVICES_PAGE_HISTORY_SERVICE).visit(PATH.RATE_US);
        },
        data: function() {
            return {
                browser: "Chrome"
            };
        },
        methods: {
            rateUs: function() {
                this.trackEvent(GOOGLE_EVENTS.RATE_US_BUTTON__CLICKED), this.openNewTab("Rate us!", "https://chrome.google.com/webstore/detail/urban-shield/almalgbpmcfpdaopimbdchdliminoign/reviews");
            },
            rateUsHover: function() {
                this.trackEvent(GOOGLE_EVENTS.RATE_US_BUTTON__HOVERED);
            },
            onClosePage: function() {
                this.trackEvent(GOOGLE_EVENTS.RATE_US_CLOSE_BUTTON__CLICKED), this.$router.push(PATH.MAIN);
            }
        }
    }, RateUsPage_component = (__webpack_require__(347), normalizeComponent(rate_us_RateUsPagevue_type_script_lang_js_, RateUsPagevue_type_template_id_8a5a2a8a_render, [], !1, null, null, null));
    RateUsPage_component.options.__file = "app/popup/pages/rate-us/RateUsPage.vue";
    var RateUsPage = RateUsPage_component.exports, SettingsPagevue_type_template_id_b16b1a38_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "page-settings-layout"
        }, [ _c("simple-layout", {
            ref: "layout",
            on: {
                close: function($event) {
                    return _vm.onClosePage();
                }
            }
        }, [ _c("div", {
            staticClass: "page-settings"
        }, [ _c("div", {
            staticClass: "row"
        }, [ _c("div", {
            staticClass: "toggle-controller"
        }, [ _c("div", {
            staticClass: "label"
        }, [ _vm._v("AdBlocker") ]), _vm._v(" "), _c("div", {
            staticClass: "toggle-button-box"
        }, [ _c("toggle-button", {
            ref: "toggle_AD_BLOCKER",
            on: {
                on: function($event) {
                    return _vm.enableFeature("AD_BLOCKER");
                },
                off: function($event) {
                    return _vm.disableFeature("AD_BLOCKER");
                },
                click: _vm.noop
            }
        }) ], 1) ]) ]), _vm._v(" "), _c("div", {
            staticClass: "row"
        }, [ _c("div", {
            staticClass: "toggle-controller"
        }, [ _c("div", {
            staticClass: "label"
        }, [ _vm._v("Anti-phishing protection") ]), _vm._v(" "), _c("div", {
            staticClass: "toggle-button-box"
        }, [ _c("toggle-button", {
            ref: "toggle_ANTIMALWARE",
            on: {
                on: function($event) {
                    return _vm.enableFeature("ANTIMALWARE");
                },
                off: function($event) {
                    return _vm.disableFeature("ANTIMALWARE");
                },
                click: _vm.noop
            }
        }) ], 1) ]) ]), _vm._v(" "), _c("div", {
            staticClass: "row"
        }, [ _c("div", {
            staticClass: "toggle-controller"
        }, [ _c("div", {
            staticClass: "label"
        }, [ _vm._v("Block analytics requests") ]), _vm._v(" "), _c("div", {
            staticClass: "toggle-button-box"
        }, [ _c("toggle-button", {
            ref: "toggle_ANALYTICS_BLOCKER",
            on: {
                on: function($event) {
                    return _vm.enableFeature("ANALYTICS_BLOCKER");
                },
                off: function($event) {
                    return _vm.disableFeature("ANALYTICS_BLOCKER");
                },
                click: _vm.noop
            }
        }) ], 1) ]) ]), _vm._v(" "), _c("div", {
            staticClass: "row"
        }, [ _c("div", {
            staticClass: "toggle-controller"
        }, [ _c("div", {
            staticClass: "label"
        }, [ _vm._v("Clear history") ]), _vm._v(" "), _c("div", {
            staticClass: "toggle-button-box"
        }, [ _c("toggle-button", {
            ref: "toggle_HISTORY_CLEANER",
            on: {
                on: function($event) {
                    return _vm.enableFeature("HISTORY_CLEANER");
                },
                off: function($event) {
                    return _vm.disableFeature("HISTORY_CLEANER");
                },
                click: _vm.noop
            }
        }) ], 1) ]) ]), _vm._v(" "), _c("selection-list", {
            staticClass: "settings",
            attrs: {
                items: _vm.historyCleanOptions,
                selected: _vm.historyCleanerOptionValue,
                disabled: _vm.historyCleanerDisabled
            },
            on: {
                select: function($event) {
                    return _vm.setFeatureProp("HISTORY_CLEANER", "type", $event);
                }
            }
        }), _vm._v(" "), _c("div", {
            staticClass: "row"
        }, [ _c("div", {
            staticClass: "toggle-controller"
        }, [ _c("div", {
            staticClass: "label"
        }, [ _vm._v("Clear cache") ]), _vm._v(" "), _c("div", {
            staticClass: "toggle-button-box"
        }, [ _c("toggle-button", {
            ref: "toggle_CACHE_CLEANER",
            on: {
                on: function($event) {
                    return _vm.enableFeature("CACHE_CLEANER");
                },
                off: function($event) {
                    return _vm.disableFeature("CACHE_CLEANER");
                },
                click: _vm.noop
            }
        }) ], 1) ]) ]), _vm._v(" "), _c("selection-list", {
            staticClass: "settings",
            attrs: {
                items: _vm.cacheCleanOptions,
                selected: _vm.cacheCleanerOptionValue,
                disabled: _vm.cacheCleanerDisabled
            },
            on: {
                select: function($event) {
                    return _vm.setFeatureProp("CACHE_CLEANER", "type", $event);
                }
            }
        }) ], 1) ]) ], 1);
    };
    SettingsPagevue_type_template_id_b16b1a38_render._withStripped = !0;
    var defineProperty = __webpack_require__(200), defineProperty_default = __webpack_require__.n(defineProperty), ToggleButtonvue_type_template_id_2fbc6f7c_render = function() {
        var _h = this.$createElement;
        return (this._self._c || _h)("div", {
            staticClass: "toggle_button ",
            class: {
                "toggle_button--off": !this.isON,
                "toggle_button--on": this.isON
            },
            on: {
                click: this.onClick
            }
        });
    };
    ToggleButtonvue_type_template_id_2fbc6f7c_render._withStripped = !0;
    var ToggleButtonvue_type_script_lang_js_EVENTS_SWITCH_TURN_ON = "on", ToggleButtonvue_type_script_lang_js_EVENTS_SWITCH_TURN_OFF = "off", ToggleButtonvue_type_script_lang_js_EVENTS_CLICKED = "click", toggle_button_ToggleButtonvue_type_script_lang_js_ = {
        data: function() {
            return {
                isON: !0,
                disabled: !1
            };
        },
        methods: {
            onClick: function() {
                this.$emit(ToggleButtonvue_type_script_lang_js_EVENTS_CLICKED), this.disabled || (this.isON = !this.isON, 
                this.isON ? this.$emit(ToggleButtonvue_type_script_lang_js_EVENTS_SWITCH_TURN_ON) : this.$emit(ToggleButtonvue_type_script_lang_js_EVENTS_SWITCH_TURN_OFF));
            },
            turnON: function() {
                this.isON = !0;
            },
            turnOFF: function() {
                this.isON = !1;
            },
            enable: function() {
                this.disabled = !1;
            },
            disable: function() {
                this.disabled = !0;
            }
        }
    }, ToggleButton_component = (__webpack_require__(349), normalizeComponent(toggle_button_ToggleButtonvue_type_script_lang_js_, ToggleButtonvue_type_template_id_2fbc6f7c_render, [], !1, null, null, null));
    ToggleButton_component.options.__file = "app/popup/components/buttons/toggle-button/ToggleButton.vue";
    var ToggleButton = ToggleButton_component.exports, SelectionListvue_type_template_id_d49e8778_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "component-selection-list",
            class: {
                disabled: _vm.disabled
            }
        }, [ _c("div", {
            staticClass: "options-group"
        }, _vm._l(_vm.items, (function(item) {
            return _c("div", {
                staticClass: "option-wrap",
                class: {
                    "radio-selected": _vm.selectedId === item.id
                },
                on: {
                    click: function($event) {
                        return _vm.select(item.id);
                    }
                }
            }, [ _c("div", {
                staticClass: "option-radio"
            }, [ _c("div", {
                staticClass: "radio-circle"
            }, [ _c("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectedId === item.id,
                    expression: "selectedId === item.id"
                } ],
                staticClass: "radio-fill"
            }) ]) ]), _vm._v(" "), _c("div", [ _c("span", {
                staticClass: "option-title"
            }, [ _vm._v(_vm._s(item.title)) ]) ]) ]);
        })), 0) ]);
    };
    SelectionListvue_type_template_id_d49e8778_render._withStripped = !0;
    var SelectionListvue_type_script_lang_js_EVENTS_SELECTED = "select", selection_list_SelectionListvue_type_script_lang_js_ = {
        props: {
            items: Array,
            selected: String,
            disabled: Boolean
        },
        data: function() {
            return {
                selectedId: void 0
            };
        },
        mounted: function() {},
        watch: {
            selected: {
                immediate: !0,
                handler: function(value) {
                    value && (this.selectedId = value);
                }
            }
        },
        methods: {
            select: function(id) {
                this.disabled || (this.selectedId = id, this.$emit(SelectionListvue_type_script_lang_js_EVENTS_SELECTED, id));
            }
        }
    }, SelectionList_component = (__webpack_require__(351), normalizeComponent(selection_list_SelectionListvue_type_script_lang_js_, SelectionListvue_type_template_id_d49e8778_render, [], !1, null, null, null));
    SelectionList_component.options.__file = "app/popup/components/selection-list/SelectionList.vue";
    var SelectionList = SelectionList_component.exports, FeatureTypes = __webpack_require__(36), HistoryCleanerTypes = __webpack_require__(96), CacheCleanerTypes = __webpack_require__(97), SettingsPagevue_type_script_lang_js_registry = Registry_Registry.getInstance(), SettingsPagevue_type_script_lang_js_dispatcher = null, historyCleanOptions = [ {
        id: HistoryCleanerTypes.HISTORY_CLEAN_TYPE.EVERY_DAY,
        title: "Every day"
    }, {
        id: HistoryCleanerTypes.HISTORY_CLEAN_TYPE.EVERY_HOUR,
        title: "Every hour"
    } ], cacheCleanOptions = [ {
        id: CacheCleanerTypes.CACHE_CLEAN_TYPE.EVERY_DAY,
        title: "Every day"
    }, {
        id: CacheCleanerTypes.CACHE_CLEAN_TYPE.EVERY_HOUR,
        title: "Every hour"
    } ], settings_SettingsPagevue_type_script_lang_js_ = {
        data: function() {
            return {
                historyCleanOptions: historyCleanOptions,
                cacheCleanOptions: cacheCleanOptions,
                historyCleanerOptionValue: void 0,
                cacheCleanerOptionValue: void 0,
                featureEnabled: {},
                cacheCleanerDisabled: !1,
                historyCleanerDisabled: !1
            };
        },
        components: {
            "simple-layout": SimpleLayout,
            "toggle-button": ToggleButton,
            "selection-list": SelectionList
        },
        created: function() {
            SettingsPagevue_type_script_lang_js_dispatcher = SettingsPagevue_type_script_lang_js_registry.get(SERVICES_EXTERNAL_DISPATCHER);
        },
        mounted: function() {
            var _this = this;
            return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                var self, $ref;
                return regenerator_default.a.wrap((function(_context) {
                    for (;;) switch (_context.prev = _context.next) {
                      case 0:
                        return self = _this, _this.$refs.layout.showCloseButton(), _this.trackEvent(GOOGLE_EVENTS.SETTINGS_PAGE__SHOWN), 
                        _context.next = 5, callExternalEvent(SettingsPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_GET_PROTECTION_STATE);

                      case 5:
                        _context.sent.features.forEach((function(feature) {
                            switch (_this.featureEnabled[feature.name] = !!feature.enabled, _this.updateSubItemsDisableState(), 
                            feature.name) {
                              case FeatureTypes.FeatureTypes.AD_BLOCKER:
                                $ref = _this.$refs.toggle_AD_BLOCKER, feature.enabled ? $ref.turnON() : $ref.turnOFF();
                                break;

                              case FeatureTypes.FeatureTypes.ANTIMALWARE:
                                $ref = _this.$refs.toggle_ANTIMALWARE, feature.enabled ? $ref.turnON() : $ref.turnOFF();
                                break;

                              case FeatureTypes.FeatureTypes.ANALYTICS_BLOCKER:
                                $ref = _this.$refs.toggle_ANALYTICS_BLOCKER, feature.enabled ? $ref.turnON() : $ref.turnOFF();
                                break;

                              case FeatureTypes.FeatureTypes.HISTORY_CLEANER:
                                $ref = _this.$refs.toggle_HISTORY_CLEANER, feature.enabled ? $ref.turnON() : $ref.turnOFF(), 
                                self.historyCleanerOptionValue = feature.props.type;
                                break;

                              case FeatureTypes.FeatureTypes.CACHE_CLEANER:
                                $ref = _this.$refs.toggle_CACHE_CLEANER, feature.enabled ? $ref.turnON() : $ref.turnOFF(), 
                                self.cacheCleanerOptionValue = feature.props.type;
                            }
                        }));

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })))();
        },
        methods: {
            enableFeature: function(featureName) {
                var _this2 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee2() {
                    return regenerator_default.a.wrap((function(_context2) {
                        for (;;) switch (_context2.prev = _context2.next) {
                          case 0:
                            return _context2.next = 2, callExternalEvent(SettingsPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_SET_PROTECTION_STATE, {
                                action: "SET_FEATURE_STATE",
                                name: featureName,
                                enabled: !0
                            });

                          case 2:
                            _this2.featureEnabled[featureName] = !0, _this2.updateSubItemsDisableState(), _this2.trackEvent(GOOGLE_EVENTS[featureName + "__ON"]);

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                    }), _callee2);
                })))();
            },
            disableFeature: function(featureName) {
                var _this3 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee3() {
                    return regenerator_default.a.wrap((function(_context3) {
                        for (;;) switch (_context3.prev = _context3.next) {
                          case 0:
                            return _context3.next = 2, callExternalEvent(SettingsPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_SET_PROTECTION_STATE, {
                                action: "SET_FEATURE_STATE",
                                name: featureName,
                                enabled: !1
                            });

                          case 2:
                            _this3.featureEnabled[featureName] = !1, _this3.updateSubItemsDisableState(), _this3.trackEvent(GOOGLE_EVENTS[featureName + "__OFF"]);

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                    }), _callee3);
                })))();
            },
            setFeatureProp: function(featureName, prop, value) {
                var _this4 = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee4() {
                    var event;
                    return regenerator_default.a.wrap((function(_context4) {
                        for (;;) switch (_context4.prev = _context4.next) {
                          case 0:
                            return _context4.next = 2, callExternalEvent(SettingsPagevue_type_script_lang_js_dispatcher, ContentEvents.ContentEvents.POPUP_SET_PROTECTION_STATE, {
                                action: "SET_FEATURE_PROPS",
                                name: featureName,
                                props: defineProperty_default()({}, prop, value)
                            });

                          case 2:
                            (event = GOOGLE_EVENTS[featureName + "__PROP"]).label = "".concat(prop, "=").concat(value), 
                            _this4.trackEvent(event);

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                    }), _callee4);
                })))();
            },
            updateSubItemsDisableState: function() {
                this.cacheCleanerDisabled = !this.featureEnabled[FeatureTypes.FeatureTypes.CACHE_CLEANER], 
                this.historyCleanerDisabled = !this.featureEnabled[FeatureTypes.FeatureTypes.HISTORY_CLEANER];
            },
            onClosePage: function() {
                this.$router.push(PATH.MAIN, helpers_noop, helpers_noop);
            },
            noop: helpers_noop
        }
    }, SettingsPage_component = (__webpack_require__(353), normalizeComponent(settings_SettingsPagevue_type_script_lang_js_, SettingsPagevue_type_template_id_b16b1a38_render, [], !1, null, null, null));
    SettingsPage_component.options.__file = "app/popup/pages/settings/SettingsPage.vue";
    var SettingsPage = SettingsPage_component.exports, AnnouncementPagevue_type_template_id_5fa37964_render = function() {
        var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
        return _c("simple-layout", {
            ref: "layout",
            staticClass: "announcement-page"
        }, [ _c("h1", {
            staticClass: "announcement-title"
        }, [ _vm._v("We are making changes"), _c("br"), _vm._v("for your best experience!") ]), _vm._v(" "), _c("div", {
            staticClass: "announcement-description"
        }, [ _c("p", [ _vm._v("Proxy connection is enabled by defaut to protect you. Other protection features you could find in Settings") ]), _vm._v(" "), _c("i"), _vm._v(" "), _c("p", [ _vm._v("Enable all features to have maximum protection") ]) ]), _vm._v(" "), _c("div", {
            staticClass: "announcement-dangerometer"
        }), _vm._v(" "), _c("div", {
            staticClass: "announcement-proxy"
        }, [ _vm._v("\r\n    If you need only Proxy service,"), _c("br"), _vm._v("download"), _c("br"), _vm._v(" "), _c("a", {
            staticClass: "proxy__link",
            on: {
                click: function($event) {
                    return _vm.onProxyUnblockerLinkClick();
                }
            }
        }, [ _vm._v("Bifrost Free VPN proxy Unblocker") ]) ]), _vm._v(" "), _c("div", {
            staticClass: "announcement-controls"
        }, [ _c("button", {
            staticClass: "button_pink",
            on: {
                click: function($event) {
                    return _vm.onOkClicked();
                }
            }
        }, [ _vm._v("Ok, thanks") ]) ]) ]);
    };
    AnnouncementPagevue_type_template_id_5fa37964_render._withStripped = !0;
    __webpack_require__(139);
    var AnnouncementPagevue_type_script_lang_js_flagService, FLAGS_ANNOUNCEMENT_V5_0_0_SHOWN = "ANNOUNCEMENT_V5_0_0_SHOWN", announcement_AnnouncementPagevue_type_script_lang_js_ = {
        components: {
            "simple-layout": SimpleLayout,
            "protection-level-bar": ProtectionLevelBar
        },
        mounted: function() {
            AnnouncementPagevue_type_script_lang_js_flagService = Registry_Registry.getInstance().get(SERVICES_FLAG_SERVICE), 
            this.trackEvent(GOOGLE_EVENTS.ANNOUNCEMENT_PAGE__SHOWN);
        },
        methods: {
            onProxyUnblockerLinkClick: function() {
                this.openNewTab("ProxyUnblocker", "https://eighred.com");
            },
            onOkClicked: function() {
                var _this = this;
                return asyncToGenerator_default()(regenerator_default.a.mark((function _callee() {
                    return regenerator_default.a.wrap((function(_context) {
                        for (;;) switch (_context.prev = _context.next) {
                          case 0:
                            return _this.trackEvent(GOOGLE_EVENTS.ANNOUNCEMENT_OK__CLICKED), _context.next = 3, 
                            AnnouncementPagevue_type_script_lang_js_flagService.activate(FLAGS_ANNOUNCEMENT_V5_0_0_SHOWN);

                          case 3:
                            return _context.next = 5, _this.$router.push(PATH.MAIN, helpers_noop, helpers_noop);

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                    }), _callee);
                })))();
            }
        }
    }, AnnouncementPage_component = (__webpack_require__(355), normalizeComponent(announcement_AnnouncementPagevue_type_script_lang_js_, AnnouncementPagevue_type_template_id_5fa37964_render, [], !1, null, null, null));
    AnnouncementPage_component.options.__file = "app/popup/pages/announcement/AnnouncementPage.vue";
    var _beforeEnter, AnnouncementPage = AnnouncementPage_component.exports, helpers = __webpack_require__(35), routes_register = Registry_Registry.getInstance(), PATH = {
        INITIALISING: "/",
        MAIN: "/main",
        INTERRUPTION: "/interruption",
        RATE_US: "/rate-us",
        SETTINGS: "/settings",
        ANNOUNCEMENT: "/announcement"
    }, routes = [ {
        path: PATH.MAIN,
        component: MainPage,
        beforeEnter: (_beforeEnter = asyncToGenerator_default()(regenerator_default.a.mark((function _callee(to, from, next) {
            var dispatcher, pageHistoryService, interruptionService, flagService, isRateUsNotVisited, getCounter;
            return regenerator_default.a.wrap((function(_context) {
                for (;;) switch (_context.prev = _context.next) {
                  case 0:
                    if (routes_register.get(SERVICES_EXTENSION_MODE), dispatcher = routes_register.get(SERVICES_EXTERNAL_DISPATCHER), 
                    pageHistoryService = Registry_Registry.getInstance().get(SERVICES_PAGE_HISTORY_SERVICE), 
                    interruptionService = routes_register.get(SERVICES_INTERRUPTION_SERVICE), flagService = routes_register.get(SERVICES_FLAG_SERVICE), 
                    _context.t0 = Object(helpers.isChrome)() || Object(helpers.isEdge)(), !_context.t0) {
                        _context.next = 10;
                        break;
                    }
                    return _context.next = 9, interruptionService.isExtensionInterrupted();

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    if (!_context.t0) {
                        _context.next = 13;
                        break;
                    }
                    return next(PATH.INTERRUPTION), _context.abrupt("return");

                  case 13:
                    return _context.next = 15, flagService.isActivated(FLAGS_ANNOUNCEMENT_V5_0_0_SHOWN);

                  case 15:
                    if (_context.sent) {
                        _context.next = 19;
                        break;
                    }
                    return next(PATH.ANNOUNCEMENT), _context.abrupt("return");

                  case 19:
                    return _context.next = 21, pageHistoryService.visited(PATH.RATE_US);

                  case 21:
                    return isRateUsNotVisited = !_context.sent, getCounter = new Promise((function(resolve) {
                        dispatcher.emit(new src.MarioEvent(ContentEvents.ContentEvents.POPUP_GET_COUNTER), (function(counter) {
                            return resolve(counter);
                        }));
                    })), _context.next = 25, getCounter.then();

                  case 25:
                    if (5 !== _context.sent || !isRateUsNotVisited) {
                        _context.next = 29;
                        break;
                    }
                    return next(PATH.RATE_US), _context.abrupt("return");

                  case 29:
                    next();

                  case 30:
                  case "end":
                    return _context.stop();
                }
            }), _callee);
        }))), function(_x, _x2, _x3) {
            return _beforeEnter.apply(this, arguments);
        })
    }, {
        path: PATH.INITIALISING,
        component: InitPage
    }, {
        path: PATH.INTERRUPTION,
        component: InterruptionPage
    }, {
        path: PATH.RATE_US,
        component: RateUsPage
    }, {
        path: PATH.SETTINGS,
        component: SettingsPage
    }, {
        path: PATH.ANNOUNCEMENT,
        name: PATH.ANNOUNCEMENT,
        component: AnnouncementPage
    } ], Appvue_type_template_id_5cf9df87_render = function() {
        var _h = this.$createElement, _c = this._self._c || _h;
        return _c("div", [ _c("router-view") ], 1);
    };
    Appvue_type_template_id_5cf9df87_render._withStripped = !0;
    var App_component = normalizeComponent({}, Appvue_type_template_id_5cf9df87_render, [], !1, null, null, null);
    App_component.options.__file = "app/popup/components/App.vue";
    var App = App_component.exports, vue2_perfect_scrollbar_umd = __webpack_require__(201), vue2_perfect_scrollbar_umd_default = __webpack_require__.n(vue2_perfect_scrollbar_umd), bootstrap_register = (__webpack_require__(360), 
    __webpack_require__(362), Registry_Registry.getInstance());
    vue_esm.a.use(vue2_perfect_scrollbar_umd_default.a), vue_esm.a.use(vue_router_esm);
    var router = new vue_router_esm({
        routes: routes
    });
    vue_esm.a.mixin({
        methods: {
            openNewTab: function(text, url) {
                this.trackEvent({
                    category: "openLink",
                    action: text,
                    label: url
                }), bootstrap_register.get(SERVICES_TAB_SERVICE).create({
                    url: url
                });
            },
            trackEvent: function(event) {
                bootstrap_register.get(SERVICES_GOOGLE_ANALYTICS).trackEvent(event.category, event.action, event.label);
            }
        }
    }), chrome.runtime.getBackgroundPage(function() {
        var _ref = asyncToGenerator_default()(regenerator_default.a.mark((function _callee(backgroundPage) {
            var urbanLocationService, managementService, ipInfoService, pageHistoryService, policyService, googleAnalyticsService, urbanBagsnagService, safeCheckStateService, adBlocker, extensionModeService, interruptionService, flagService, promotionService;
            return regenerator_default.a.wrap((function(_context) {
                for (;;) switch (_context.prev = _context.next) {
                  case 0:
                    return bootstrap_register.set(SERVICES_BACKGROUND_PAGE, backgroundPage), _context.next = 3, 
                    backgroundPage.mario.getService(Symbol.for("URBAN_READY")).promise;

                  case 3:
                    return urbanLocationService = backgroundPage.mario.getService(Symbol.for("URBAN_LOCATION_SERVICE")), 
                    managementService = backgroundPage.mario.getService(Symbol.for("MANAGEMENT")), ipInfoService = backgroundPage.mario.getService(Symbol.for("URBAN_IP_SERVICE")), 
                    pageHistoryService = backgroundPage.mario.getService(Symbol.for("URBAN_PAGE_HISTORY_SERVICE")), 
                    policyService = backgroundPage.mario.getService(Symbol.for("POLICY_SERVICE")), googleAnalyticsService = backgroundPage.mario.getService(Symbol.for("GOOGLE_ANALYTICS_SERVICE")), 
                    urbanBagsnagService = backgroundPage.mario.getService(Symbol.for("URBAN_BAGSNAG_SERVICE")), 
                    safeCheckStateService = backgroundPage.mario.getService(Symbol.for("USC_STATE_SERVICE")), 
                    adBlocker = backgroundPage.mario.getService(Symbol.for("URBAN_AD_BLOCKER_SERVICE")), 
                    extensionModeService = backgroundPage.mario.getService(Symbol.for("URBAN_EXTENSION_MODE_SERVICE")), 
                    interruptionService = backgroundPage.mario.getService(Symbol.for("URBAN_INTERRUPTION_SERVICE")), 
                    flagService = backgroundPage.mario.getService(Symbol.for("FLAG_SERVICE")), promotionService = backgroundPage.mario.getService(Symbol.for("URBAN_PROMOTION_STORAGE")), 
                    bootstrap_register.set(SERVICES_MANAGEMENT, managementService), bootstrap_register.set(SERVICES_IP_INFO_SERVICE, ipInfoService), 
                    bootstrap_register.set(SERVICES_LOCATION_SERVICE, urbanLocationService), bootstrap_register.set(SERVICES_PAGE_HISTORY_SERVICE, pageHistoryService), 
                    bootstrap_register.set(SERVICES_POLICY, policyService), bootstrap_register.set(SERVICES_GOOGLE_ANALYTICS, googleAnalyticsService), 
                    bootstrap_register.set(SERVICES_BUGSNAG, urbanBagsnagService), bootstrap_register.set(SERVICES_SAFE_CHECK_STATE_SERVICE, safeCheckStateService), 
                    bootstrap_register.set(SERVICES_AD_BLOCKER, adBlocker), bootstrap_register.set(SERVICES_EXTENSION_MODE, extensionModeService), 
                    bootstrap_register.set(SERVICES_INTERRUPTION_SERVICE, interruptionService), bootstrap_register.set(SERVICES_FLAG_SERVICE, flagService), 
                    bootstrap_register.set(SERVICES_PROMOTION_SERVICE, promotionService), backgroundPage && new vue_esm.a({
                        el: "#app",
                        router: router,
                        render: function(h) {
                            return h(App);
                        }
                    }), Object(helpers.isBugsnagEnabled)() && backgroundPage.mario.getService(Symbol.for("BUGSNAG_SERVICE")).getClient().use(bugsnag_vue_default.a, vue_esm.a), 
                    _context.next = 33, urbanLocationService.ready();

                  case 33:
                    setTimeout((function() {
                        router.push(PATH.MAIN, helpers.noop, helpers.noop);
                    }));

                  case 34:
                  case "end":
                    return _context.stop();
                }
            }), _callee);
        })));
        return function(_x) {
            return _ref.apply(this, arguments);
        };
    }());
} ]);
//# sourceMappingURL=build.js.map
