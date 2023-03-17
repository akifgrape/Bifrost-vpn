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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 202);
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
}, , function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ContentEvents) {
        ContentEvents.POPUP_COUNT = "POPUP_COUNTER", ContentEvents.POPUP_GET_COUNTER = "POPUP_GET_COUNTER", 
        ContentEvents.REDIRECT_TO_SAFE_PAGE = "REDIRECT_TO_SAFE_PAGE", ContentEvents.POPUP_GET_PROTECTION_STATE = "POPUP_GET_PROTECTION_STATE", 
        ContentEvents.POPUP_SET_PROTECTION_STATE = "POPUP_SET_PROTECTION_STATE";
    }(exports.ContentEvents || (exports.ContentEvents = {}));
}, , , function(module, exports) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const UrbanTypes = {
        URBAN_LOCATION_SERVICE: Symbol.for("URBAN_LOCATION_SERVICE"),
        URBAN_HISTORY_SERVICE: Symbol.for("URBAN_HISTORY_SERVICE"),
        URBAN_TOOLBAR_SERVICE: Symbol.for("URBAN_TOOLBAR_SERVICE"),
        URBAN_PAGE_HISTORY_SERVICE: Symbol.for("URBAN_PAGE_HISTORY_SERVICE"),
        URBAN_IP_SERVICE: Symbol.for("URBAN_IP_SERVICE"),
        URBAN_GOOGLE_ANALYTICS_SERVICE: Symbol.for("URBAN_GOOGLE_ANALYTICS_SERVICE"),
        URBAN_BAGSNAG_SERVICE: Symbol.for("URBAN_BAGSNAG_SERVICE"),
        URBAN_EXTENSION_MODE_SERVICE: Symbol.for("URBAN_EXTENSION_MODE_SERVICE"),
        URBAN_AD_BLOCKER_SERVICE: Symbol.for("URBAN_AD_BLOCKER_SERVICE"),
        URBAN_INTERRUPTION_SERVICE: Symbol.for("URBAN_INTERRUPTION_SERVICE"),
        URBAN_PROTECTION_STATE_SERVICE: Symbol.for("URBAN_PROTECTION_STATE_SERVICE"),
        URBAN_ANALYTICS_BLOCKER_SERVICE: Symbol.for("URBAN_ANALYTICS_BLOCKER_SERVICE"),
        URBAN_IDENTITY: Symbol.for("URBAN_IDENTITY"),
        URBAN_PASSWORD: Symbol.for("URBAN_PASSWORD"),
        URBAN_READY: Symbol.for("URBAN_READY")
    };
    exports.UrbanTypes = UrbanTypes;
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.GoogleAnalyticsTypes = void 0;
    const GoogleAnalyticsTypes = {
        GOOGLE_ANALYTICS_CLIENT_ID: Symbol.for("GOOGLE_ANALYTICS_CLIENT_ID"),
        GOOGLE_ANALYTICS_ENABLED: Symbol.for("GOOGLE_ANALYTICS_ENABLED"),
        GOOGLE_ANALYTICS_HOST_NAME: Symbol.for("GOOGLE_ANALYTICS_HOST_NAME"),
        GOOGLE_ANALYTICS_SERVICE: Symbol.for("GOOGLE_ANALYTICS_SERVICE"),
        GOOGLE_ANALYTICS_TRACKER_ID: Symbol.for("GOOGLE_ANALYTICS_TRACKER_ID")
    };
    exports.GoogleAnalyticsTypes = GoogleAnalyticsTypes;
}, function(module, exports) {
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
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.UrlsSafeCheckEvents = void 0, function(UrlsSafeCheckEvents) {
        UrlsSafeCheckEvents.SAFE_STATUS_UPDATED = "URLS_SAFE_CHECK__STATUS_UPDATED", UrlsSafeCheckEvents.GET_ACTIVE_TAB_STATE = "URLS_SAFE_CHECK__GET_ACTIVE_TAB_STATE", 
        UrlsSafeCheckEvents.MUTE_NOTIFICATION = "URLS_SAFE_CHECK__MUTE_NOTIFICATION", UrlsSafeCheckEvents.CONTENT_URL_REWRITED = "URLS_SAFE_CHECK__CONTENT_URL_REWRITED";
    }(exports.UrlsSafeCheckEvents || (exports.UrlsSafeCheckEvents = {}));
}, function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
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
    }), exports.GoogleAnalyticsService = void 0;
    const inversify_1 = __webpack_require__(0), GoogleAnalyticsTypes_1 = __webpack_require__(37);
    let GoogleAnalyticsService = class GoogleAnalyticsService {
        constructor(hostName, trackerId, clientId, enabled) {
            this.hostName = hostName, this.trackerId = trackerId, this.clientId = clientId, 
            this.enabled = enabled;
        }
        enable() {
            this.enabled = !0;
        }
        disable() {
            this.enabled = !1;
        }
        trackEvent(category, action, label = null, value = null) {
            if (!this.enabled) return;
            const params = this.prepareRequestParams();
            params.append("t", "event"), params.append("ec", category), params.append("ea", action), 
            label && params.append("el", label), value && params.append("ev", value), this.send(params);
        }
        trackPageView(pageUrl, pageTitle) {
            if (!this.enabled) return;
            const params = this.prepareRequestParams();
            params.append("t", "pageview"), params.append("dh", this.hostName), params.append("dp", pageUrl), 
            params.append("dt", pageTitle), this.send(params);
        }
        prepareRequestParams() {
            const params = new URLSearchParams;
            return params.append("v", "1"), params.append("tid", this.trackerId), params.append("cid", this.clientId), 
            params;
        }
        send(params) {
            const request = new XMLHttpRequest;
            request.open("POST", "https://www.google-analytics.com/collect", !0), request.send(params.toString());
        }
    };
    GoogleAnalyticsService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_HOST_NAME)), __param(1, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_TRACKER_ID)), __param(2, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_CLIENT_ID)), __param(3, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_ENABLED)), __metadata("design:paramtypes", [ String, String, String, Boolean ]) ], GoogleAnalyticsService), 
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(AlarmEvents) {
        AlarmEvents.ALARM_ELAPSED = "ALARM_ELAPSED";
    }(exports.AlarmEvents || (exports.AlarmEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ProxyEvents) {
        ProxyEvents.PROXY_ERROR = "PROXY_ERROR", ProxyEvents.PROXY_BEFORE_CONNECT = "PROXY_BEFORE_CONNECT", 
        ProxyEvents.PROXY_AFTER_CONNECT = "PROXY_AFTER_CONNECT", ProxyEvents.DIRECT_BEFORE_CONNECT = "DIRECT_BEFORE_CONNECT", 
        ProxyEvents.DIRECT_AFTER_CONNECT = "DIRECT_AFTER_CONNECT";
    }(exports.ProxyEvents || (exports.ProxyEvents = {}));
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
    }), exports.StateService = void 0;
    const inversify_1 = __webpack_require__(0), TabState_1 = __webpack_require__(250), src_1 = __webpack_require__(1), UrlsSafeCheckTypes_1 = __webpack_require__(12), CheckSafeService_1 = __webpack_require__(182), StateDataService_1 = __webpack_require__(185), UrlsSafeCheckEvents_1 = __webpack_require__(41), CheckSafeException_1 = __webpack_require__(184), utils_1 = __webpack_require__(91);
    let StateService = class StateService {
        constructor(checkSafeService, stateDataService, internalDispatcher, externalDispatcher, tabService, enabled, initMode) {
            this.checkSafeService = checkSafeService, this.stateDataService = stateDataService, 
            this.internalDispatcher = internalDispatcher, this.externalDispatcher = externalDispatcher, 
            this.tabService = tabService, this.enabled = enabled, this.initMode = initMode, 
            this.tabsState = [], this.notificationEnabled = !0, this.mode = this.initMode;
        }
        setMode(mode) {
            this.mode = mode;
        }
        getMode() {
            return this.mode;
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !0, yield this.stateDataService.setEnabledState(this.enabled);
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !1, yield this.stateDataService.setEnabledState(this.enabled);
            }));
        }
        isEnabled() {
            return this.enabled;
        }
        restoreState() {
            return __awaiter(this, void 0, void 0, (function*() {
                (yield this.stateDataService.getEnabledState()) ? this.enable() : this.disable(), 
                (yield this.stateDataService.getNotificationEnabledState()) ? yield this.enableNotification() : yield this.disableNotification();
            }));
        }
        enableNotification() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.notificationEnabled = !0, yield this.stateDataService.setNotificationEnabledState(this.notificationEnabled);
            }));
        }
        disableNotification() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.notificationEnabled = !1, yield this.stateDataService.setNotificationEnabledState(this.notificationEnabled);
            }));
        }
        isEnabledNotification() {
            return this.notificationEnabled;
        }
        getTabState(tabId) {
            return this.tabsState.find(tab => tab.id === tabId);
        }
        getActiveTabState() {
            return __awaiter(this, void 0, void 0, (function*() {
                const activeTab = (yield this.tabService.query({
                    active: !0,
                    currentWindow: !0
                }))[0];
                if (!activeTab) return;
                let state = this.getTabState(activeTab.id);
                return state || (state = yield this.addTabState(activeTab.id, activeTab.url)), state;
            }));
        }
        addTabState(tabId, url) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.getTabState(tabId)) throw new CheckSafeException_1.CheckSafeException("Can't add tab state, already exist");
                const state = new TabState_1.TabState, domainPersistedData = yield this.stateDataService.getDomainPersistedData(url), notificationMuted = domainPersistedData && domainPersistedData.notificationMuted;
                return state.setId(tabId), state.setUrl(url), state.setNotificationMute(notificationMuted), 
                this.tabsState.push(state), state;
            }));
        }
        removeTabState(tabId) {
            const ind = this.tabsState.findIndex(tab => tab.id === tabId);
            this.tabsState.splice(ind, 1);
        }
        updateTabSafetyStatus(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (!this.enabled) return;
                const tab = this.getTabState(tabId);
                if (!tab) return;
                if (tab.checked) return void this.sendSafetyNotificationStatus(tab);
                tab._checking = !0;
                const status = yield this.fetchTabSafetyStatus(tabId);
                tab.setCheckedState(!0), tab._checking = !1, tab.setStatus(status), this.sendSafetyNotificationStatus(tab);
            }));
        }
        getTabSafetyStatus(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(resolve => __awaiter(this, void 0, void 0, (function*() {
                    const tab = this.getTabState(tabId), status = tab.checked ? tab.status : yield this.fetchTabSafetyStatus(tabId);
                    resolve(status);
                })));
            }));
        }
        sendSafetyNotificationStatus(tab) {
            if (!this.notificationEnabled) return;
            const data = {
                tabId: tab.id,
                url: tab.url,
                status: tab.status,
                notificationMuted: tab.notificationMuted
            };
            this.externalDispatcher.emit(tab.id, new src_1.MarioEvent(UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED, data)), 
            this.internalDispatcher.emit(new src_1.MarioEvent(UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED, data));
        }
        muteTabNofitication(tabId, persist) {
            const tab = this.getTabState(tabId);
            tab.notificationMuted = !0, persist && this.stateDataService.setDomainPersistedValue(tab.url, "notificationMuted", !0);
        }
        fetchTabSafetyStatus(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                const tab = this.getTabState(tabId);
                let status;
                if (utils_1.isWhitelistUrl(tab.url)) return utils_1.valueToPromise(UrlsSafeCheckTypes_1.STATUS.SAFE);
                try {
                    status = yield this.checkSafeService.checkTabUrlSafety(tab, this.mode);
                } catch (err) {
                    status = UrlsSafeCheckTypes_1.STATUS.UNKNOWN;
                }
                return status;
            }));
        }
    };
    StateService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_CHECK_SERVICE)), __param(1, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_DATA_SERVICE)), __param(2, inversify_1.inject(src_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __param(3, inversify_1.inject(src_1.MARIO_TYPES.EXTERNAL_DISPATCHER)), __param(4, inversify_1.inject(src_1.MARIO_TYPES.TAB_SERVICE)), __param(5, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_ENABLED)), __param(6, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_INIT_MODE)), __metadata("design:paramtypes", [ CheckSafeService_1.CheckSafeService, StateDataService_1.StateDataService, Object, Object, Object, Boolean, String ]) ], StateService), 
    exports.StateService = StateService;
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
    }), exports.generateUIID = exports.isSameDomain = exports.getDomain = exports.getBrowserBlankPageUrl = exports.isBlankPage = exports.isWhitelistUrl = exports.notConcurrent = exports.valueToPromise = void 0;
    const whiteListProtocols_1 = __webpack_require__(251), blankPage_1 = __webpack_require__(252);
    function getBrowserBlankPageUrl() {
        return blankPage_1.blankPage.CHROME_BROWSER || "about:blank";
    }
    function getDomain(url) {
        try {
            const {host: host} = new URL(url);
            return host;
        } catch (err) {
            return url;
        }
    }
    exports.valueToPromise = function(value) {
        return new Promise(resolve => {
            resolve(value);
        });
    }, exports.notConcurrent = function(proc) {
        let inFlight = !1;
        return () => (inFlight || (inFlight = (() => __awaiter(this, void 0, void 0, (function*() {
            try {
                return yield proc();
            } finally {
                inFlight = !1;
            }
        })))()), inFlight);
    }, exports.isWhitelistUrl = function(url) {
        if ("" === url) return !0;
        const {protocol: protocol} = new URL(url);
        return whiteListProtocols_1.whiteListProtocols.includes(protocol);
    }, exports.isBlankPage = function(url) {
        return url === getBrowserBlankPageUrl();
    }, exports.getBrowserBlankPageUrl = getBrowserBlankPageUrl, exports.getDomain = getDomain, 
    exports.isSameDomain = function(url1, url2) {
        if (url1 && url2) return getDomain(url1) === getDomain(url2);
    }, exports.generateUIID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
            const r = 16 * Math.random() | 0;
            return ("x" === c ? r : 3 & r | 8).toString(16);
        }));
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
    }), exports.TabEventsProcessService = void 0;
    const inversify_1 = __webpack_require__(0), StateService_1 = __webpack_require__(90), DataService_1 = __webpack_require__(192), QueueService_1 = __webpack_require__(193), CheckSafeServiceInterface_1 = __webpack_require__(194), utils_1 = __webpack_require__(91), UrlsSafeCheckTypes_1 = __webpack_require__(12), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let TabEventsProcessService = class TabEventsProcessService {
        constructor(queueService, stateService, dataService, trackLoadingState) {
            this.queueService = queueService, this.stateService = stateService, this.dataService = dataService, 
            this.trackLoadingState = trackLoadingState;
        }
        process(eventParams) {
            const tabId = eventParams.id;
            switch (eventParams.type) {
              case TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.ACTIVATE:
                this.queueService.add(tabId, eventParams, () => __awaiter(this, void 0, void 0, (function*() {
                    yield this.processTabActivateEvent(eventParams);
                })));
                break;

              case TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.CREATE:
                this.queueService.add(tabId, eventParams, () => __awaiter(this, void 0, void 0, (function*() {
                    yield this.processTabCreateEvent(eventParams);
                })));
                break;

              case TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.LOADING:
                this.queueService.add(tabId, eventParams, () => __awaiter(this, void 0, void 0, (function*() {
                    yield this.processTabLoadingEvent(eventParams);
                })));
                break;

              case TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.COMPLETE:
                this.queueService.add(tabId, eventParams, () => __awaiter(this, void 0, void 0, (function*() {
                    yield this.processTabCompleteEvent(eventParams);
                })));
                break;

              case TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.CLOSE:
                this.queueService.add(tabId, eventParams, () => __awaiter(this, void 0, void 0, (function*() {
                    this.processTabCloseEvent(eventParams);
                })));
            }
            this.queueService.process(eventParams.id);
        }
        processTabActivateEvent(eventParams) {
            return __awaiter(this, void 0, void 0, (function*() {
                const state = yield this.stateService.getActiveTabState();
                state && (yield this.stateService.updateTabSafetyStatus(state.id));
            }));
        }
        processTabCreateEvent(eventParams) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {id: id, url: url, pendingUrl: pendingUrl, openerTabId: openerTabId} = eventParams;
                let state = this.stateService.getTabState(id);
                state || (state = yield this.stateService.addTabState(id, url));
                const sourceTabId = utils_1.isBlankPage(pendingUrl) ? void 0 : openerTabId;
                state.setNavigationData({
                    sourceTabId: sourceTabId
                });
            }));
        }
        processTabLoadingEvent(eventParams) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {id: id, url: url} = eventParams;
                let state = this.stateService.getTabState(id);
                if (state || (state = yield this.stateService.addTabState(id, url)), state.setCheckedState(!1), 
                this.trackLoadingState && (state.setStatus(UrlsSafeCheckTypes_1.STATUS.UNKNOWN), 
                setTimeout(() => {
                    this.stateService.sendSafetyNotificationStatus(state);
                })), url !== state.url) {
                    const sourceTabId = state.getNavigationData().sourceTabId, notificationMuted = utils_1.isSameDomain(state.url, url) && state.notificationMuted;
                    this.stateService.removeTabState(id), state = yield this.stateService.addTabState(id, url), 
                    notificationMuted && state.setNotificationMute(notificationMuted), state.setNavigationData({
                        sourceTabId: sourceTabId
                    });
                }
                if (utils_1.isWhitelistUrl(url)) return this.stateService.updateTabSafetyStatus(id);
            }));
        }
        processTabCompleteEvent(eventParams) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {id: id} = eventParams, state = this.stateService.getTabState(id);
                if (!state) return;
                const method = eventParams.method || state.getNavigationData().method || CheckSafeServiceInterface_1.MethodType.REQUEST;
                state.setNavigationData({
                    frameId: 0,
                    parentFrameId: -1,
                    method: method
                }), state.setSystemData(yield this.dataService.getSystemData()), state.setPanelData(yield this.dataService.getPanelData());
                try {
                    const tabDocumentData = yield this.dataService.getTabDocumentData(id);
                    state.setDocumentData(tabDocumentData), state.hasData = !0;
                } catch (err) {}
                eventParams.method !== CheckSafeServiceInterface_1.MethodType.URL_REWRITE && (yield this.stateService.updateTabSafetyStatus(id), 
                state.setNavigationData({
                    method: void 0
                }));
            }));
        }
        processTabCloseEvent(eventParams) {
            this.stateService.removeTabState(eventParams.id);
        }
    };
    TabEventsProcessService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_QUEUE_SERVICE)), __param(1, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), __param(2, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_DATA_SERVICE)), __param(3, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TRACK_LOADING_STATE)), __metadata("design:paramtypes", [ QueueService_1.QueueService, StateService_1.StateService, DataService_1.DataService, Boolean ]) ], TabEventsProcessService), 
    exports.TabEventsProcessService = TabEventsProcessService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.TAB_EVENT_TYPE = void 0, function(TAB_EVENT_TYPE) {
        TAB_EVENT_TYPE.ACTIVATE = "ACTIVATE", TAB_EVENT_TYPE.CREATE = "CREATE", TAB_EVENT_TYPE.LOADING = "LOADING", 
        TAB_EVENT_TYPE.COMPLETE = "COMPLETE", TAB_EVENT_TYPE.CLOSE = "CLOSE";
    }(exports.TAB_EVENT_TYPE || (exports.TAB_EVENT_TYPE = {}));
}, , , function(module, exports, __webpack_require__) {
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
}, , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PanelOsTypes = void 0;
    const PanelOsTypes = {
        PANEL_OS_SERVICE: Symbol.for("PANEL_OS_SERVICE")
    };
    exports.PanelOsTypes = PanelOsTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
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
        }), exports.PanelOsService = void 0;
        const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), AdType_1 = __webpack_require__(210), AdStatus_1 = __webpack_require__(211), globalAny = global;
        let PanelOsService = class PanelOsService {
            constructor(logger, tabService) {
                this.logger = logger, this.tabService = tabService;
            }
            updatePanelOSConfig() {
                this.logger.log("Panel OS: update config"), globalAny.window.UpdatePanelOSConfig();
            }
            activatePanelOS() {
                this.logger.log("Panel OS: activate panel"), globalAny.window.ActivatePanelOS();
            }
            deactivatePanelOS() {
                this.logger.log("Panel OS: deactivate panel"), globalAny.window.DeactivatePanelOS();
            }
            getAdBlockerStatus() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        globalAny.window.GetAdBlockerStatus(status => resolve(status), error => reject(error));
                    });
                }));
            }
            isFacebookAdBlockerEnabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).FACEBOOK === AdStatus_1.AdStatus.ENABLED;
                }));
            }
            isDisplayAdBlockerEnabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).DISPLAY === AdStatus_1.AdStatus.ENABLED;
                }));
            }
            isTwitterAdBlockerEnabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).TWITTER === AdStatus_1.AdStatus.ENABLED;
                }));
            }
            isFacebookAdBlockerDisabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).FACEBOOK === AdStatus_1.AdStatus.DISABLED;
                }));
            }
            isDisplayAdBlockerDisabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).DISPLAY === AdStatus_1.AdStatus.DISABLED;
                }));
            }
            isTwitterAdBlockerDisabled() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return (yield this.getAdBlockerStatus()).TWITTER === AdStatus_1.AdStatus.DISABLED;
                }));
            }
            enableAdBlocker(adTypes) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        globalAny.window.EnableAdBlocker(status => resolve(status), error => reject(error), adTypes);
                    });
                }));
            }
            disableAdBlocker(adTypes) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        globalAny.window.DisableAdBlocker(status => resolve(status), error => reject(error), adTypes);
                    });
                }));
            }
            enableFacebookAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.enableAdBlocker([ AdType_1.AdType.FACEBOOK ]);
                }));
            }
            enableDisplayAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.enableAdBlocker([ AdType_1.AdType.DISPLAY ]);
                }));
            }
            enableTwitterAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.enableAdBlocker([ AdType_1.AdType.TWITTER ]);
                }));
            }
            disableFacebookAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.disableAdBlocker([ AdType_1.AdType.FACEBOOK ]);
                }));
            }
            disableDisplayAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.disableAdBlocker([ AdType_1.AdType.DISPLAY ]);
                }));
            }
            disableTwitterAdBlocker() {
                return __awaiter(this, void 0, void 0, (function*() {
                    return this.disableAdBlocker([ AdType_1.AdType.TWITTER ]);
                }));
            }
            getAdBlockerCounters(tabId) {
                return __awaiter(this, void 0, void 0, (function*() {
                    return new Promise((resolve, reject) => {
                        globalAny.window.GetAdBlockerCounters(counter => resolve(counter), error => reject(error), tabId);
                    });
                }));
            }
            getAdBlockerCountersForActiveTab() {
                return __awaiter(this, void 0, void 0, (function*() {
                    const tabs = yield this.tabService.query({
                        active: !0,
                        currentWindow: !0
                    });
                    if (0 === tabs.length) return {
                        currentPageTotal: 0,
                        currentSessionTotal: 0
                    };
                    const currentTab = tabs[0];
                    return this.getAdBlockerCounters(currentTab.id);
                }));
            }
        };
        PanelOsService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.TAB_SERVICE)), __metadata("design:paramtypes", [ Object, Object ]) ], PanelOsService), 
        exports.PanelOsService = PanelOsService;
    }).call(this, __webpack_require__(16));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(PostBgEvents) {
        PostBgEvents.RESPONSE = "WINDOW_POST_MESSAGE_RESPONSE", PostBgEvents.EVENT = "WINDOW_POST_MESSAGE_EVENT";
    }(exports.PostBgEvents || (exports.PostBgEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationException = void 0;
    class ProxyLocationException extends Error {}
    exports.ProxyLocationException = ProxyLocationException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationEvents = void 0, function(ProxyLocationEvents) {
        ProxyLocationEvents.PROXY_LOCATION_BEFORE_ACTIVATED = "LOCATION_PROXY_BEFORE_ACTIVATED", 
        ProxyLocationEvents.PROXY_LOCATION_AFTER_ACTIVATED = "LOCATION_PROXY_AFTER_ACTIVATED", 
        ProxyLocationEvents.PROXY_LOCATION_BEFORE_DEACTIVATED = "LOCATION_PROXY_BEFORE_DEACTIVATED", 
        ProxyLocationEvents.PROXY_LOCATION_AFTER_DEACTIVATED = "LOCATION_PROXY_AFTER_DEACTIVATED";
    }(exports.ProxyLocationEvents || (exports.ProxyLocationEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.IdentityTypes = void 0;
    const IdentityTypes = {
        IDENTITY_ID: Symbol.for("IDENTITY_ID"),
        IDENTITY_SERVICE: Symbol.for("IDENTITY_SERVICE"),
        IDENTITY_STORAGE: Symbol.for("IDENTITY_STORAGE")
    };
    exports.IdentityTypes = IdentityTypes;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), index_1 = __webpack_require__(1), AlarmEvents_1 = __webpack_require__(88);
    let AlarmService = class AlarmService {
        constructor(logger, internalDispatcher) {
            this.logger = logger, this.internalDispatcher = internalDispatcher, chrome.alarms.onAlarm.addListener(alarm => {
                const event = new index_1.MarioEvent(AlarmEvents_1.AlarmEvents.ALARM_ELAPSED, alarm);
                this.internalDispatcher.emit(event).then();
            });
        }
        create(alarmInfo, name) {
            try {
                this.logger.log(`AlarmService: create an alarm "${name}"`), chrome.alarms.create(name, alarmInfo);
            } catch (e) {
                throw this.logger.warn(`AlarmService: could not create an alarm with name "${name}"`), 
                e;
            }
        }
        get(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.alarms.get(name, alarm => resolve(alarm));
                    } catch (e) {
                        this.logger.warn(`AlarmService: could get an alarm with name "${name}"`), reject(e);
                    }
                });
            }));
        }
        getAll() {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.alarms.getAll(alarms => resolve(alarms));
                    } catch (e) {
                        this.logger.warn("AlarmService: could get all alarms"), reject(e);
                    }
                });
            }));
        }
        clear(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.logger.log(`AlarmService: clear an alarm "${name}"`), new Promise((resolve, reject) => {
                    try {
                        chrome.alarms.clear(name, wasCleared => resolve(wasCleared));
                    } catch (e) {
                        this.logger.warn(`AlarmService: could clear an alarm with name "${name}"`), reject(e);
                    }
                });
            }));
        }
        clearAll() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.logger.log(`AlarmService: clear all alarms "${name}"`), new Promise((resolve, reject) => {
                    try {
                        chrome.alarms.clearAll(wasCleared => resolve(wasCleared));
                    } catch (e) {
                        this.logger.warn("AlarmService: could clear all alarms"), reject(e);
                    }
                });
            }));
        }
    };
    AlarmService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object, Object ]) ], AlarmService), 
    exports.AlarmService = AlarmService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PolicyModuleTypes = void 0;
    const PolicyModuleTypes = {
        POLICY_SERVICE: Symbol.for("POLICY_SERVICE"),
        POLICY_STORAGE_SERVICE: Symbol.for("POLICY_STORAGE_SERVICE")
    };
    exports.PolicyModuleTypes = PolicyModuleTypes;
}, , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const PromotionApiModuleTypes = {
        PROMOTION_API_SERVICE: Symbol.for("PROMOTION_API_SERVICE"),
        _API: Symbol.for("PROMOTION_API")
    };
    exports.PromotionApiModuleTypes = PromotionApiModuleTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.HideMyLocationTypes = void 0;
    const HideMyLocationTypes = {
        HIDE_MY_LOCATION_SERVICE: Symbol.for("HIDE_MY_LOCATION_SERVICE")
    };
    exports.HideMyLocationTypes = HideMyLocationTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.HideMyGeoLocationService = void 0;
    const inversify_1 = __webpack_require__(0);
    let HideMyGeoLocationService = class HideMyGeoLocationService {
        constructor() {
            this.status = !1;
        }
        enable() {
            this.status = !0;
        }
        disable() {
            this.status = !1;
        }
        isEnabled() {
            return this.status;
        }
        isDisabled() {
            return !this.status;
        }
    };
    HideMyGeoLocationService = __decorate([ inversify_1.injectable() ], HideMyGeoLocationService), 
    exports.HideMyGeoLocationService = HideMyGeoLocationService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.IpInfoTypes = void 0;
    const IpInfoTypes = {
        IP_INFO_SERVICE: Symbol.for("IP_INFO_SERVICE")
    };
    exports.IpInfoTypes = IpInfoTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationTypes = void 0;
    const ProxyLocationTypes = {
        LOCATION_HELPER_SERVICE: Symbol.for("LOCATION_HELPER_SERVICE"),
        LOCATION_PROXY_SERVICE: Symbol.for("LOCATION_PROXY_SERVICE")
    };
    exports.ProxyLocationTypes = ProxyLocationTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.SensitiveDataFilterTypes = void 0, exports.SensitiveDataFilterTypes = {
        SDF_PARAM_ENABLED: Symbol.for("SDF_PARAM_ENABLED"),
        SDF_PARAM_HOST: Symbol.for("SDF_PARAM_HOST"),
        SDF_PARAM_LOGGING: Symbol.for("SDF_PARAM_LOGGING"),
        SDF_PARAM_RULES_UPDATE_INTERVAL: Symbol.for("SDF_PARAM_RULES_UPDATE_INTERVAL"),
        SDF_SERVICE: Symbol.for("SDF_SERVICE")
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    exports.AlarmNames = {
        CLEAN_CACHE: "CLEAN_CACHE",
        CLEAN_HISTORY: "CLEAN_HISTORY"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.BrowserCleanerTypes = {
        CACHE_CLEANER_SERVICE: Symbol.for("CACHE_CLEANER_SERVICE"),
        HISTORY_CLEANER_SERVICE: Symbol.for("HISTORY_CLEANER_SERVICE"),
        TABS_STATE_SERVICE: Symbol.for("TABS_STATE_SERVICE")
    };
}, , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const URBAN_PROMOTION_MODULE_TYPES = {
        URBAN_PROMOTION_API: Symbol.for("URBAN_PROMOTION_API"),
        URBAN_PROMOTION_SYNC_SERVICE: Symbol.for("URBAN_PROMOTION_SERVICE"),
        URBAN_PROMOTION_STORAGE: Symbol.for("URBAN_PROMOTION_STORAGE")
    };
    exports.URBAN_PROMOTION_MODULE_TYPES = URBAN_PROMOTION_MODULE_TYPES;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.BugsnagTypes = void 0;
    const BugsnagTypes = {
        BUGSNAG_CLIENT: Symbol.for("BUGSNAG_CLIENT"),
        BUGSNAG_SERVICE: Symbol.for("BUGSNAG_SERVICE")
    };
    exports.BugsnagTypes = BugsnagTypes;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1);
    __webpack_require__(22);
    let UrbanToolbarService = class UrbanToolbarService {
        constructor(browser, browserAction) {
            this.browser = browser, this.browserAction = browserAction;
        }
        getColoredRoboImage() {
            return "icons/icon.png";
        }
        getGreyedRoboImage() {
            return "icons/icon_grey.png";
        }
        draw(src) {
            return __awaiter(this, void 0, void 0, (function*() {
                const imageData = yield this.loadImage(src);
                yield this.browserAction.setIcon({
                    imageData: imageData
                });
            }));
        }
        drawFlag(countryCode, bg = this.getColoredRoboImage(), isBadgeShown = !1) {
            return __awaiter(this, void 0, void 0, (function*() {
                let baseImage = yield this.loadImage(bg), context = document.createElement("canvas").getContext("2d");
                context.clearRect(0, 0, 18, 18), context.putImageData(baseImage, 0, 0);
                const imageData = context.getImageData(0, 0, 26, 26);
                yield this.browserAction.setIcon({
                    imageData: imageData
                });
            }));
        }
        loadImage(src) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    let context = document.createElement("canvas").getContext("2d");
                    context.clearRect(0, 0, 18, 18);
                    let image = new Image;
                    image.src = src, image.onload = function() {
                        context.drawImage(image, 0, 0), context.save();
                        const imageData = context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
                        resolve(imageData);
                    }, image.onerror = function(e) {
                        reject(e);
                    };
                });
            }));
        }
    };
    UrbanToolbarService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.BROWSER)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.BROWSER_ACTION)), __metadata("design:paramtypes", [ String, Object ]) ], UrbanToolbarService), 
    exports.UrbanToolbarService = UrbanToolbarService;
}, function(module, exports, __webpack_require__) {
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
    const inversify_1 = __webpack_require__(0), UrbanLocationService_1 = __webpack_require__(142), AdBlockerService_1 = __webpack_require__(181), FeatureTypes_1 = __webpack_require__(36), UrbanTypes_1 = __webpack_require__(34), src_1 = __webpack_require__(1), StateService_1 = __webpack_require__(90), UrlsSafeCheckTypes_1 = __webpack_require__(12), AnalyticsBlockerService_1 = __webpack_require__(186), HistoryCleanerService_1 = __webpack_require__(148), CacheCleanerService_1 = __webpack_require__(149), BrowserCleanerTypes_1 = __webpack_require__(115), PolicyService_1 = __webpack_require__(150), PolicyModuleTypes_1 = __webpack_require__(106), HistoryCleanerTypes_1 = __webpack_require__(96), CacheCleanerTypes_1 = __webpack_require__(97);
    let ProtectionStateService = class ProtectionStateService {
        constructor(storage, urbanLocationService, adBlockerService, safeCheckStateService, analyticsBlockerService, historyCleanerService, cacheCleanerService, logger, policyService) {
            this.storage = storage, this.urbanLocationService = urbanLocationService, this.adBlockerService = adBlockerService, 
            this.safeCheckStateService = safeCheckStateService, this.analyticsBlockerService = analyticsBlockerService, 
            this.historyCleanerService = historyCleanerService, this.cacheCleanerService = cacheCleanerService, 
            this.logger = logger, this.policyService = policyService, this.STATE_STORAGE_KEY = "PROTECTION_STATE", 
            this.state = {
                protectionEnabled: void 0,
                features: [ {
                    name: FeatureTypes_1.FeatureTypes.PROXY,
                    enabled: !0,
                    affectsProtectionLevel: !0
                }, {
                    name: FeatureTypes_1.FeatureTypes.AD_BLOCKER,
                    enabled: !0,
                    affectsProtectionLevel: !0
                }, {
                    name: FeatureTypes_1.FeatureTypes.ANTIMALWARE,
                    enabled: !0,
                    affectsProtectionLevel: !0
                }, {
                    name: FeatureTypes_1.FeatureTypes.ANALYTICS_BLOCKER,
                    enabled: !0,
                    affectsProtectionLevel: !0
                }, {
                    name: FeatureTypes_1.FeatureTypes.CACHE_CLEANER,
                    enabled: !0,
                    affectsProtectionLevel: !0,
                    props: {
                        type: CacheCleanerTypes_1.CACHE_CLEAN_TYPE.EVERY_DAY
                    }
                }, {
                    name: FeatureTypes_1.FeatureTypes.HISTORY_CLEANER,
                    enabled: !0,
                    affectsProtectionLevel: !0,
                    props: {
                        type: HistoryCleanerTypes_1.HISTORY_CLEAN_TYPE.EVERY_DAY
                    }
                } ]
            };
        }
        init() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.restore(), this.state.protectionEnabled ? this.enableProtection() : this.disableProtection();
            }));
        }
        enableProtection() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.state.protectionEnabled = !0, this.logger.log("ProtectionService: turning ON"), 
                yield this.applyAllFeaturesState(), this.save();
            }));
        }
        disableProtection() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.state.protectionEnabled = !1, this.logger.log("ProtectionService: turning OFF"), 
                yield this.applyAllFeaturesState(), yield this.save();
            }));
        }
        isProtectionEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.state.protectionEnabled;
            }));
        }
        enableFeature(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.getFeatureStateByName(name).enabled = !0, this.state.protectionEnabled && (yield this.applyFeatureState(name)), 
                yield this.save();
            }));
        }
        disableFeature(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.getFeatureStateByName(name).enabled = !1, this.state.protectionEnabled && (yield this.applyFeatureState(name)), 
                yield this.save();
            }));
        }
        getFeaturesState() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.state.features;
            }));
        }
        setFeatureProps(name, props) {
            return __awaiter(this, void 0, void 0, (function*() {
                const feature = this.getFeatureStateByName(name);
                Object.assign(feature.props, props), this.logger.log(`ProtectionService: setting ${name} feature properties: ${JSON.stringify(props)}`), 
                yield this.applyFeatureProps(name), yield this.save();
            }));
        }
        getProtectionLevel() {
            return __awaiter(this, void 0, void 0, (function*() {
                return {
                    max: this.state.features.filter(v => v.affectsProtectionLevel).length,
                    current: this.state.features.filter(v => v.affectsProtectionLevel && v.enabled).length
                };
            }));
        }
        applyAllFeaturesState() {
            return __awaiter(this, void 0, void 0, (function*() {
                for (let i = 0; i < this.state.features.length; i++) yield this.applyFeatureState(this.state.features[i].name);
            }));
        }
        applyFeatureState(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                const featureState = this.getFeatureStateByName(name), featureEnabled = this.state.protectionEnabled && featureState.enabled;
                switch (this.logger.log(`ProtectionService: turning ${name} feature ${featureEnabled ? "on" : "off"}`), 
                name) {
                  case FeatureTypes_1.FeatureTypes.PROXY:
                    featureEnabled ? yield this.urbanLocationService.activateLocationAuto() : yield this.urbanLocationService.deactivateCurrentLocation();
                    break;

                  case FeatureTypes_1.FeatureTypes.AD_BLOCKER:
                    featureEnabled ? yield this.adBlockerService.enable() : yield this.adBlockerService.disable();
                    break;

                  case FeatureTypes_1.FeatureTypes.ANTIMALWARE:
                    featureEnabled ? yield this.safeCheckStateService.enableNotification() : yield this.safeCheckStateService.disableNotification();
                    break;

                  case FeatureTypes_1.FeatureTypes.ANALYTICS_BLOCKER:
                    featureEnabled ? yield this.analyticsBlockerService.enable() : yield this.analyticsBlockerService.disable();
                    break;

                  case FeatureTypes_1.FeatureTypes.CACHE_CLEANER:
                    featureEnabled ? (yield this.applyFeatureProps(name), yield this.cacheCleanerService.enable()) : yield this.cacheCleanerService.disable();
                    break;

                  case FeatureTypes_1.FeatureTypes.HISTORY_CLEANER:
                    featureEnabled ? (yield this.applyFeatureProps(name), yield this.historyCleanerService.enable()) : yield this.historyCleanerService.disable();
                    break;

                  default:
                    throw new Error("Protection service: Unknown feature name");
                }
            }));
        }
        applyFeatureProps(name) {
            return __awaiter(this, void 0, void 0, (function*() {
                const featureState = this.getFeatureStateByName(name);
                switch (name) {
                  case FeatureTypes_1.FeatureTypes.CACHE_CLEANER:
                    featureState.props.type && (yield this.cacheCleanerService.setCleanType(featureState.props.type));
                    break;

                  case FeatureTypes_1.FeatureTypes.HISTORY_CLEANER:
                    featureState.props.type && (yield this.historyCleanerService.setCleanType(featureState.props.type));
                }
            }));
        }
        save() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.storage.set(this.STATE_STORAGE_KEY, JSON.stringify(this.state));
            }));
        }
        restore() {
            return __awaiter(this, void 0, void 0, (function*() {
                (yield this.storage.has(this.STATE_STORAGE_KEY)) && (this.state = JSON.parse(yield this.storage.get(this.STATE_STORAGE_KEY)));
            }));
        }
        getFeatureStateByName(name) {
            return this.state.features.find(v => v.name === name);
        }
    };
    ProtectionStateService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __param(1, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_LOCATION_SERVICE)), __param(2, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_AD_BLOCKER_SERVICE)), __param(3, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), __param(4, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_ANALYTICS_BLOCKER_SERVICE)), __param(5, inversify_1.inject(BrowserCleanerTypes_1.BrowserCleanerTypes.HISTORY_CLEANER_SERVICE)), __param(6, inversify_1.inject(BrowserCleanerTypes_1.BrowserCleanerTypes.CACHE_CLEANER_SERVICE)), __param(7, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __param(8, inversify_1.inject(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_SERVICE)), __metadata("design:paramtypes", [ Object, UrbanLocationService_1.UrbanLocationService, AdBlockerService_1.AdBlockerService, StateService_1.StateService, AnalyticsBlockerService_1.AnalyticsBlockerService, HistoryCleanerService_1.HistoryCleanerService, CacheCleanerService_1.CacheCleanerService, Object, PolicyService_1.PolicyService ]) ], ProtectionStateService), 
    exports.ProtectionStateService = ProtectionStateService;
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
    const inversify_1 = __webpack_require__(0), UrbanTypes_1 = __webpack_require__(34), DataCenterTypes_1 = __webpack_require__(143), UrbanHistoryService_1 = __webpack_require__(168), src_1 = __webpack_require__(1), AlarmNames_1 = __webpack_require__(171), ProxyLocationService_1 = __webpack_require__(172), ProxyLocationTypes_1 = __webpack_require__(112), DataCenterApiService_1 = __webpack_require__(145), LocationCode_1 = __webpack_require__(169), DataCenterApiUserNotAuthorizedException_1 = __webpack_require__(175), DataCenterApiFetchException_1 = __webpack_require__(176), DataCenterApiParseException_1 = __webpack_require__(174), UrbanIpService_1 = __webpack_require__(179), IdentityTypes_1 = __webpack_require__(104), IdentityService_1 = __webpack_require__(180), deffered_1 = __webpack_require__(164), BypassList_1 = __webpack_require__(249), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsService_1 = __webpack_require__(87);
    let UrbanLocationService = class UrbanLocationService {
        constructor(identity, password, dataCenterApi, proxyLocationService, historyService, alarmService, logger, externalDispatcher, ga, ipInfoService, identityService) {
            this.identity = identity, this.password = password, this.dataCenterApi = dataCenterApi, 
            this.proxyLocationService = proxyLocationService, this.historyService = historyService, 
            this.alarmService = alarmService, this.logger = logger, this.externalDispatcher = externalDispatcher, 
            this.ga = ga, this.ipInfoService = ipInfoService, this.identityService = identityService, 
            this.$ready = deffered_1.Deferred(), (() => __awaiter(this, void 0, void 0, (function*() {
                if (yield this.historyService.hasEarth()) this.earth = yield this.historyService.getEarth(), 
                yield this.initPrevLocation(), this.setReady(), this.runUpdateLocationsJob(); else try {
                    this.earth = yield this.fetchLocations(), this.earth.length() ? (this.updateEarth(this.earth), 
                    this.setReady(), yield this.initPrevLocation(), this.runUpdateLocationsJob()) : this.runRetryGetLocationsJob().then().catch(e => this.logger.error(e));
                } catch (e) {
                    this.runRetryGetLocationsJob().then(), this.logger.error(e);
                }
            })))().then().catch(e => this.logger.error(e));
        }
        fetchLocations() {
            return __awaiter(this, void 0, void 0, (function*() {
                try {
                    const endpoint = "https://stats.urban-vpn.com/api/remote/toolbar/proxiesMip", xml = yield this.dataCenterApi.fetch(endpoint, this.identity, this.password, this.identityService.getIdentityId());
                    return this.dataCenterApi.parse(xml);
                } catch (e) {
                    throw e instanceof DataCenterApiUserNotAuthorizedException_1.DataCenterApiUserNotAuthorizedException ? this.ga.trackEvent("URBAN_API_ERROR", "User is not authorized") : e instanceof DataCenterApiFetchException_1.DataCenterApiFetchException ? this.ga.trackEvent("URBAN_API_ERROR", e.message) : e instanceof DataCenterApiParseException_1.DataCenterApiParseException && this.ga.trackEvent("URBAN_API_ERROR", "Parse Error"), 
                    e;
                }
            }));
        }
        getEarth() {
            return this.earth;
        }
        updateEarth(earth) {
            this.ga.trackEvent("FLOW", "Sync locations"), this.earth = earth, this.historyService.saveEarth(earth).then();
        }
        activateLocation(location) {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.currentLocation = location, this.setPrevLocation(location), this.proxyLocationService.activate(location, BypassList_1.bypassList);
            }));
        }
        activateLocationByCode(code) {
            return __awaiter(this, void 0, void 0, (function*() {
                const locationCode = new LocationCode_1.LocationCode(code), location = this.earth.getLocation(locationCode);
                return yield this.activateLocation(location), this.ipInfoService.updateIpInfo();
            }));
        }
        activateLocationAuto() {
            return __awaiter(this, void 0, void 0, (function*() {
                let location = this.earth;
                try {
                    const ip = this.ipInfoService.getIpInfo(), code = new LocationCode_1.LocationCode(ip.country);
                    this.earth.hasLocation(code) && (location = this.earth.getLocation(code));
                } catch (e) {
                    this.logger.error(e);
                }
                return yield this.activateLocation(location), this.ipInfoService.updateIpInfo();
            }));
        }
        deactivateCurrentLocation() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.currentLocation = null, this.proxyLocationService.hasActivated() && (yield this.proxyLocationService.deactivate()), 
                this.ipInfoService.updateIpInfo();
            }));
        }
        getCountryNameByCode(code) {
            const locationCode = new LocationCode_1.LocationCode(code);
            return this.earth.getLocation(locationCode).name().value();
        }
        hasActivatedLocation() {
            return !!this.currentLocation;
        }
        hasPrevLocation() {
            return !!this.prevLocation;
        }
        getActivatedLocation() {
            return this.currentLocation;
        }
        getPrevLocation() {
            return this.prevLocation;
        }
        ready() {
            return this.$ready.promise;
        }
        setReady() {
            this.ga.trackEvent("FLOW", "Ready to use"), this.$ready.resolve();
        }
        setPrevLocation(location) {
            this.prevLocation = location, this.historyService.savePrev(location).then();
        }
        initPrevLocation() {
            return __awaiter(this, void 0, void 0, (function*() {
                (yield this.historyService.hasPrev()) ? this.prevLocation = yield this.historyService.getPrev() : this.prevLocation = yield this.getDefaultLocation();
            }));
        }
        runUpdateLocationsJob() {
            this.alarmService.create({
                delayInMinutes: 30,
                periodInMinutes: 30
            }, AlarmNames_1.AlarmNames.UPDATE_LOCATIONS);
        }
        runRetryGetLocationsJob() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.ga.trackEvent("FLOW", "Retry get locations"), this.logger.log("runRetryGetLocationsJob is run");
                let attempt = 1;
                for (;;) {
                    try {
                        if (this.logger.log("Retry get locations attempts: #" + attempt), attempt += 1, 
                        this.earth = yield this.fetchLocations(), this.earth.length()) {
                            yield this.initPrevLocation(), this.setReady();
                            break;
                        }
                    } catch (e) {
                        this.logger.error(e);
                    }
                    yield this.delay(5e3);
                }
            }));
        }
        getDefaultLocation() {
            return __awaiter(this, void 0, void 0, (function*() {
                try {
                    const ip = this.ipInfoService.getIpInfo(), code = new LocationCode_1.LocationCode(ip.country);
                    if (this.earth.hasLocation(code)) return this.earth.getLocation(code);
                } catch (e) {
                    this.logger.error(e);
                }
                const usa = new LocationCode_1.LocationCode("US");
                if (this.earth.hasLocation(usa)) return this.earth.getLocation(usa);
            }));
        }
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    };
    UrbanLocationService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_IDENTITY)), __param(1, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_PASSWORD)), __param(2, inversify_1.inject(DataCenterTypes_1.DataCenterTypes.DATA_CENTER_SERVICE)), __param(3, inversify_1.inject(ProxyLocationTypes_1.ProxyLocationTypes.LOCATION_PROXY_SERVICE)), __param(4, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_HISTORY_SERVICE)), __param(5, inversify_1.inject(src_1.MARIO_TYPES.ALARM_SERVICE)), __param(6, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __param(7, inversify_1.inject(src_1.MARIO_TYPES.EXTERNAL_DISPATCHER)), __param(8, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE)), __param(9, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_IP_SERVICE)), __param(10, inversify_1.inject(IdentityTypes_1.IdentityTypes.IDENTITY_SERVICE)), __metadata("design:paramtypes", [ String, String, DataCenterApiService_1.DataCenterApiService, ProxyLocationService_1.ProxyLocationService, UrbanHistoryService_1.UrbanHistoryService, Object, Object, Object, GoogleAnalyticsService_1.GoogleAnalyticsService, UrbanIpService_1.UrbanIpService, IdentityService_1.IdentityService ]) ], UrbanLocationService), 
    exports.UrbanLocationService = UrbanLocationService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterTypes = void 0;
    const DataCenterTypes = {
        DATA_CENTER_SERVICE: Symbol.for("DATA_CENTER_SERVICE"),
        DATA_CENTER_ENDPOINT: Symbol.for("DATA_CENTER_ENDPOINT")
    };
    exports.DataCenterTypes = DataCenterTypes;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocation = void 0;
    const LocationCode_1 = __webpack_require__(169), LocationName_1 = __webpack_require__(230), ProxyLocationConfig_1 = __webpack_require__(170), ProxyLocationIterator_1 = __webpack_require__(240), ProxyLocationException_1 = __webpack_require__(102);
    class ProxyLocation {
        constructor(_name, _code, _type, _proxyConfigList = []) {
            this._name = _name, this._code = _code, this._type = _type, this._proxyConfigList = _proxyConfigList, 
            this._children = {}, this._parent = null, this._head = null, this._tail = null, 
            this._prev = null, this._next = null, this._length = 0;
        }
        [Symbol.iterator]() {
            return new ProxyLocationIterator_1.ProxyLocationIterator(this.head());
        }
        static create(name, code, type, proxyConfigList = []) {
            return new ProxyLocation(new LocationName_1.LocationName(name), new LocationCode_1.LocationCode(code), type, proxyConfigList);
        }
        encode() {
            return JSON.stringify(this);
        }
        static decode(json) {
            const obj = JSON.parse(json), key = Object.keys(obj)[0];
            return ProxyLocation.prepareDecode(obj[key]);
        }
        static prepareDecode(obj) {
            const configs = [];
            for (const config of obj.location.configs) configs.push(ProxyLocationConfig_1.ProxyLocationConfig.create(config.host, config.port.from, config.port.to, config.scheme, config.redundancy, config.weight));
            const location = ProxyLocation.create(obj.location.name, obj.location.code, obj.location.type, configs);
            for (const key in obj.nodes) obj.nodes.hasOwnProperty(key) && location.append(this.prepareDecode(obj.nodes[key]));
            return location;
        }
        name() {
            return this._name;
        }
        code() {
            return this._code;
        }
        type() {
            return this._type;
        }
        isType(type) {
            return this._type === type;
        }
        parent() {
            return this._parent;
        }
        hasLocation(code) {
            return void 0 !== this._children[code.value()];
        }
        getLocation(code) {
            if (!this.hasLocation(code)) throw new ProxyLocationException_1.ProxyLocationException("ProxyLocation: could get location");
            return this._children[code.value()];
        }
        isRootNode() {
            return null === this._parent;
        }
        append(location) {
            if (this._head) {
                const node = this._tail;
                node._next = location, location._prev = node, this._tail = location;
            } else this._head = location, this._tail = location;
            this._children[location.code().value()] = location, location._parent = this, this._length += 1;
        }
        configList() {
            return this._proxyConfigList;
        }
        isEmpty() {
            return 0 === this.length();
        }
        isNotEmpty() {
            return !this.isEmpty();
        }
        prev() {
            return this._prev;
        }
        next() {
            return this._next;
        }
        head() {
            return this._head;
        }
        tail() {
            return this._tail;
        }
        length() {
            return this._length;
        }
        toJSON() {
            const obj = {};
            return this.prepareJSON(obj, this), obj;
        }
        sort() {
            if (this.isNotEmpty()) for (const item of this) item.sort();
            for (let i = 0; i < this.length(); i++) for (let j = 0; j < this.length() - 1; j++) {
                const item = this.pos(j), next = item.next();
                item.name().value().toLocaleLowerCase() > next.name().value().toLocaleLowerCase() && this.swap(j, j + 1);
            }
        }
        pos(pos) {
            if (this.length() - 1 < pos) throw new ProxyLocationException_1.ProxyLocationException("Incorrect position");
            let i = 0;
            for (const location of this) {
                if (i === pos) return location;
                i++;
            }
        }
        remove(pos) {
            this.validatePosition(pos);
            const location = this.pos(pos);
            if (this._length += -1, location._prev && location._next) {
                const prev = location._prev, next = location._next;
                prev._next = next, next._prev = prev;
            } else if (location._prev && null === location._next) {
                const prev = location._prev;
                this._tail === location && (this._tail = prev), prev._next = null;
            } else if (null === location._prev && location._next) {
                const next = location._next;
                this._head === location && (this._head = next), next._prev = null;
            } else this._head = null, this._tail = null;
            return location._prev = null, location._next = null, location._parent = null, location;
        }
        replace(pos, location) {
            this.validatePosition(pos);
            const current = this.remove(pos);
            return this.insert(pos, location), current;
        }
        insert(pos, location) {
            if (0 === this.length() && 0 === pos) this.append(location); else if (this.length() === pos) this.append(location); else {
                if (this.length() - 1 < pos) throw new ProxyLocationException_1.ProxyLocationException("Incorrect position");
                if (0 === pos) {
                    const current = this.pos(pos);
                    current._prev = location, location._next = current, this._head = location, this._length += 1;
                } else {
                    const current = this.pos(pos);
                    if (current._prev && current._next) {
                        const prev = current._prev;
                        prev._next = location, current._prev = location, location._next = current, location._prev = prev;
                    } else if (current._prev && null === current._next) {
                        const prev = current._prev;
                        location._next = current, location._prev = prev, prev._next = location, current._prev = location;
                    }
                    this._length += 1;
                }
            }
            location._parent = this;
        }
        swap(pos1, pos2) {
            if (this.length() - 1 < pos1 || this.length() - 1 < pos2) throw new ProxyLocationException_1.ProxyLocationException("Incorrect position");
            if (pos1 === pos2) return;
            const numb1 = pos1 < pos2 ? pos1 : pos2, numb2 = pos1 > pos2 ? pos1 : pos2, a = this.pos(numb1), b = this.pos(numb2);
            this.remove(numb1), this.remove(numb2 - 1), this.insert(numb1, b), this.insert(numb2, a);
        }
        prepareJSON(obj, location) {
            const key = location.code().value();
            obj[key] = {
                location: {
                    name: location.name().value(),
                    code: location.code().value(),
                    type: location.type(),
                    configs: []
                },
                nodes: {}
            };
            const configs = location.configList();
            for (const config of configs) obj[key].location.configs.push({
                host: config.host().value(),
                scheme: config.scheme().value(),
                port: {
                    from: config.portRange().from(),
                    to: config.portRange().to()
                },
                redundancy: config.redundancy().value(),
                weight: config.weight().value()
            });
            for (const item of location) this.prepareJSON(obj[key].nodes, item);
        }
        validatePosition(pos) {
            if (this.length() < pos || 0 > pos) throw new ProxyLocationException_1.ProxyLocationException("Incorrect position");
        }
    }
    exports.ProxyLocation = ProxyLocation;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var DataCenterApiService_1, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
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
    }), exports.DataCenterApiService = void 0;
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), LocationHelper_1 = __webpack_require__(173), ProxyLocationTypes_1 = __webpack_require__(112), ProxyLocation_1 = __webpack_require__(144), LocationType_1 = __webpack_require__(242), TreeNode_1 = __webpack_require__(243), ProxyLocationConfig_1 = __webpack_require__(170), DataCenterApiParseException_1 = __webpack_require__(174), DataCenterApiUserNotAuthorizedException_1 = __webpack_require__(175), md5_1 = __webpack_require__(245), DataCenterApiFetchException_1 = __webpack_require__(176), uuid = __webpack_require__(246);
    let DataCenterApiService = DataCenterApiService_1 = class DataCenterApiService {
        constructor(logger, locationHelper) {
            this.logger = logger, this.locationHelper = locationHelper, this.parsers = {}, this.parsers[LocationType_1.LocationType.COUNTRY] = this.parseCountry.bind(this), 
            this.parsers[LocationType_1.LocationType.STATE] = this.parseState.bind(this), this.parsers[LocationType_1.LocationType.CITY] = this.parseCity.bind(this);
        }
        fetch(endpoint, identity, password, customUuid = null) {
            return __awaiter(this, void 0, void 0, (function*() {
                const request = this.prepareRequest(identity, password, customUuid), response = yield fetch(endpoint, request), text = yield response.text();
                return this.logger.log("DataCenterApiService: response text", text), this.validStatusCodeOrThrowException(response.status), 
                text;
            }));
        }
        parse(text) {
            const xml = (new DOMParser).parseFromString(text, "text/xml");
            this.validateXMLOrThrowException(xml), this.authorizeOrThrowException(xml);
            const items = xml.getElementsByTagName("proxy"), tree = new TreeNode_1.TreeNode("ROOT", "ROOT", "ROOT");
            Array.from(items).forEach(item => {
                if ("yes" !== this.getAttrValueOrThrowException(item, "active")) return;
                const weight = +this.getAttrValue(item, "weight", "" + DataCenterApiService_1.DEFAULT_WEIGHT_IF_NOT_PROVIDED);
                if (weight <= 0) return;
                const name = this.getAttrValueOrThrowException(item, "name"), code = this.getAttrValueOrThrowException(item, "code"), host = this.getAttrValueOrThrowException(item, "server"), port = this.getAttrValueOrThrowException(item, "port");
                if (this.isJunk(name, code)) return;
                const type = this.parseLocationType(name, code);
                this.parsers[type](tree, name, code, host, port, weight);
            });
            const earth = ProxyLocation_1.ProxyLocation.create("ROOT", "ROOT", "ROOT");
            return this.map(earth, tree), earth.sort(), earth;
        }
        prepareRequest(identity, password, customUuid = null) {
            const form = new URLSearchParams;
            form.append("login", identity), form.append("pwd", md5_1.Md5.hashStr(password).toString());
            const headers = new Headers, requestId = uuid();
            return this.logger.log(`DataCenterApiService: request id "${requestId}"`), headers.append("Accept", "application/xml, text/xml, */*; q=0.01"), 
            headers.append("X-Request-ID", requestId), customUuid && headers.append("X-Request-UID", customUuid), 
            {
                body: form,
                headers: headers,
                method: "POST",
                mode: "cors"
            };
        }
        validStatusCodeOrThrowException(statusCode) {
            if (200 !== statusCode) throw new DataCenterApiFetchException_1.DataCenterApiFetchException(`fetched with status code "${statusCode}"`);
        }
        validateXMLOrThrowException(xml) {
            if (xml.getElementsByTagName("parsererror").length) throw new DataCenterApiParseException_1.DataCenterApiParseException("Invalid XML");
        }
        authorizeOrThrowException(xml) {
            if (!this.isAuthorized(xml)) throw new DataCenterApiUserNotAuthorizedException_1.DataCenterApiUserNotAuthorizedException("User is not authorized");
        }
        getAttrValueOrThrowException(element, attr) {
            this.hasAttrOrThrowException(element, attr);
            const value = element.getAttribute(attr).trim();
            return this.mustBeNotEmtyOrThrowException(element, attr, value), value;
        }
        getAttrValue(element, attr, fallbackValue) {
            if (!element.hasAttribute(attr)) return fallbackValue;
            const value = element.getAttribute(attr).trim();
            return this.mustBeNotEmtyOrThrowException(element, attr, value), value;
        }
        hasAttrOrThrowException(element, attr) {
            if (!element.hasAttribute(attr)) {
                const message = `Parse Error: attr "${attr}" is not exist in "${element.innerHTML}"`;
                throw new DataCenterApiParseException_1.DataCenterApiParseException(message);
            }
        }
        mustBeNotEmtyOrThrowException(element, attr, value) {
            if ("" === value.trim()) {
                const message = `Parse Error: attr "${attr}" is empty in "${element.innerHTML}"`;
                throw new DataCenterApiParseException_1.DataCenterApiParseException(message);
            }
        }
        isAuthorized(xml) {
            const loggedInElements = xml.getElementsByTagName("logged_in");
            return 1 === loggedInElements.length && "true" === loggedInElements[0].childNodes[0].nodeValue;
        }
        map(root, tree) {
            if (!tree.hasNodes()) return;
            const nodes = tree.getNodes();
            for (const key in nodes) {
                const node = nodes[key];
                try {
                    const location = node.buildLocation();
                    root.append(location), node.hasNodes() && this.map(location, node);
                } catch (e) {
                    console.log(e), this.logger.error(e);
                }
            }
        }
        isJunk(name, code) {
            return "NN" === code && "None" === name;
        }
        parseCountry(tree, name, code, host, port, weight) {
            if ("Washington DC" === name) return void this.handleWashingtonDC(tree, name, code, host, port, weight);
            const countryName = this.locationHelper.getCountryName(code, name), node = tree.getOrCreateNode(countryName, code, LocationType_1.LocationType.COUNTRY), config = this.createConfig(name, host, parseInt(port, 10), weight);
            node.addConfig(config);
        }
        handleWashingtonDC(tree, name, code, host, port, weight) {
            const countryName = this.locationHelper.getCountryName("US", "United States (USA)"), stateNode = tree.getOrCreateNode(countryName, "US", LocationType_1.LocationType.COUNTRY).getOrCreateNode("Washington", "WA", LocationType_1.LocationType.STATE), config = this.createConfig(name, host, parseInt(port, 10), weight);
            stateNode.addConfig(config);
        }
        parseState(tree, name, code, host, port, weight) {
            const countryName = this.locationHelper.getCountryName("US", "United States (USA)"), countryNode = tree.getOrCreateNode(countryName, "US", LocationType_1.LocationType.COUNTRY), stateCode = this.parseStateCode(name), stateName = this.locationHelper.getStateName("US", stateCode, stateCode), stateNode = countryNode.getOrCreateNode(stateName, stateCode, LocationType_1.LocationType.STATE), cityName = this.parseCityName(name), cityCode = cityName.toUpperCase(), cityNode = stateNode.getOrCreateNode(cityName, cityCode, LocationType_1.LocationType.CITY), config = this.createConfig(name, host, parseInt(port, 10), weight);
            cityNode.addConfig(config);
        }
        parseCity(tree, name, countryCode, host, port, weight) {
            const countryName = this.locationHelper.getCountryName(countryCode, countryCode), countryNode = tree.getOrCreateNode(countryName, countryCode, LocationType_1.LocationType.COUNTRY), cityName = name.substring(name.lastIndexOf("(") + 1, name.lastIndexOf(")")), cityCode = cityName.toUpperCase(), cityNode = countryNode.getOrCreateNode(cityName, cityCode, LocationType_1.LocationType.CITY), config = this.createConfig(name, host, parseInt(port, 10), weight);
            cityNode.addConfig(config);
        }
        createConfig(name, host, port, weight) {
            const redundancy = this.parseRedundancy(name);
            return ProxyLocationConfig_1.ProxyLocationConfig.create(host, port, port, "http", redundancy, weight);
        }
        parseLocationType(name, code) {
            const isCountry = !name.includes("("), isState = !1 === isCountry && "US" === code, isCity = !isState;
            return isCountry ? LocationType_1.LocationType.COUNTRY : isState ? LocationType_1.LocationType.STATE : isCity ? LocationType_1.LocationType.CITY : void 0;
        }
        parseStateCode(name) {
            return name.substring(name.lastIndexOf("(") + 1, name.lastIndexOf(")")).toUpperCase();
        }
        parseCityName(name) {
            return name.substr(0, name.lastIndexOf("(")).trim();
        }
        parseRedundancy(name) {
            const lastChars = name.substr(-2);
            if ("R" === lastChars[0]) {
                const val = parseInt(lastChars[1], 10);
                return isNaN(val) ? 0 : val;
            }
            return 0;
        }
    };
    DataCenterApiService.DEFAULT_WEIGHT_IF_NOT_PROVIDED = 10, DataCenterApiService = DataCenterApiService_1 = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __param(1, inversify_1.inject(ProxyLocationTypes_1.ProxyLocationTypes.LOCATION_HELPER_SERVICE)), __metadata("design:paramtypes", [ Object, LocationHelper_1.LocationHelper ]) ], DataCenterApiService), 
    exports.DataCenterApiService = DataCenterApiService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterApiException = void 0;
    const DataCenterException_1 = __webpack_require__(244);
    class DataCenterApiException extends DataCenterException_1.DataCenterException {}
    exports.DataCenterApiException = DataCenterApiException;
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
    }), exports.SensitiveDataFilterService = void 0;
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), sensitive_data_filter_1 = __webpack_require__(253), SensitiveDataFilterTypes_1 = __webpack_require__(113), SensitiveDataFilterException_1 = __webpack_require__(254);
    let SensitiveDataFilterService = class SensitiveDataFilterService {
        constructor(enabled, host, logging, logger) {
            if (this.enabled = enabled, this.host = host, this.logging = logging, this.logger = logger, 
            this.initialized = !1, "string" != typeof this.host) throw new SensitiveDataFilterException_1.SensitiveDataFilterException("Server host is undefined");
            this.logging = !!this.logging, this.logger.log("SensitiveDataFilter: " + (this.enabled ? "enabled" : "disabled"));
        }
        init() {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.enabled) try {
                    this.instance = new sensitive_data_filter_1.default({
                        host: this.host,
                        logging: this.logging
                    }), yield this.instance.init(), this.initialized = !0;
                } catch (e) {
                    this.logger.error(e);
                }
            }));
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !0, this.initialized || (yield this.init());
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !1;
            }));
        }
        updateRules() {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.initialized) return this.instance.updateRules();
            }));
        }
        transformUrl(value) {
            return this.enabled && this.initialized ? this.instance.transformUrl(value) : value;
        }
        transformTitle(domain, value) {
            return this.enabled && this.initialized ? this.instance.transformTitle(domain, value) : value;
        }
    };
    SensitiveDataFilterService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_ENABLED)), __param(1, inversify_1.inject(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_HOST)), __param(2, inversify_1.inject(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_LOGGING)), __param(3, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ Boolean, String, Boolean, Object ]) ], SensitiveDataFilterService), 
    exports.SensitiveDataFilterService = SensitiveDataFilterService;
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
    const inversify_1 = __webpack_require__(0), AlarmService_1 = __webpack_require__(105), AlarmNames_1 = __webpack_require__(114), src_1 = __webpack_require__(1), HistoryCleanerTypes_1 = __webpack_require__(96);
    let HistoryCleanerService = class HistoryCleanerService {
        constructor(alarmService, logger) {
            this.alarmService = alarmService, this.logger = logger;
        }
        setCleanType(type) {
            return __awaiter(this, void 0, void 0, (function*() {
                switch (type) {
                  case HistoryCleanerTypes_1.HISTORY_CLEAN_TYPE.EVERY_HOUR:
                    this.cleanPeriod = 60;
                    break;

                  case HistoryCleanerTypes_1.HISTORY_CLEAN_TYPE.EVERY_DAY:
                    this.cleanPeriod = 1440;
                    break;

                  default:
                    this.logger.error(new Error(`BrowserCleanerModule: Period ${type} not implemented`));
                }
                this.enabled && (yield this.resetScheduler());
            }));
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                if (!this.cleanPeriod) return;
                this.cleanPeriod, this.cleanPeriod;
                yield this.startScheduler(), this.enabled = !0;
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.stopScheduler(), this.enabled = !1;
            }));
        }
        isEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.enabled;
            }));
        }
        onCleanEvent() {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browsingData.removeHistory({}, () => {
                            this.logger.log("BrowserCleanerModule: history cleared"), resolve();
                        });
                    } catch (e) {
                        this.logger.error(e), reject();
                    }
                });
            }));
        }
        startScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                const createAlarm = {
                    delayInMinutes: this.cleanPeriod,
                    periodInMinutes: this.cleanPeriod
                };
                this.alarmService.create(createAlarm, AlarmNames_1.AlarmNames.CLEAN_HISTORY);
            }));
        }
        stopScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.alarmService.clear(AlarmNames_1.AlarmNames.CLEAN_HISTORY);
            }));
        }
        resetScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.stopScheduler(), yield this.startScheduler();
            }));
        }
    };
    HistoryCleanerService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.ALARM_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ AlarmService_1.AlarmService, Object ]) ], HistoryCleanerService), 
    exports.HistoryCleanerService = HistoryCleanerService;
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
    const inversify_1 = __webpack_require__(0), AlarmService_1 = __webpack_require__(105), AlarmNames_1 = __webpack_require__(114), src_1 = __webpack_require__(1), CacheCleanerTypes_1 = __webpack_require__(97);
    let CacheCleanerService = class CacheCleanerService {
        constructor(alarmService, logger) {
            this.alarmService = alarmService, this.logger = logger;
        }
        setCleanType(type) {
            return __awaiter(this, void 0, void 0, (function*() {
                switch (type) {
                  case CacheCleanerTypes_1.CACHE_CLEAN_TYPE.EVERY_HOUR:
                    this.cleanPeriod = 60;
                    break;

                  case CacheCleanerTypes_1.CACHE_CLEAN_TYPE.EVERY_DAY:
                    this.cleanPeriod = 1440;
                    break;

                  default:
                    this.logger.error(new Error(`BrowserCleanerModule: Period ${type} not implemented`));
                }
                this.enabled && (yield this.resetScheduler());
            }));
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.cleanPeriod && (yield this.startScheduler(), this.enabled = !0);
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.stopScheduler(), this.enabled = !1;
            }));
        }
        isEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.enabled;
            }));
        }
        onCleanEvent() {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browsingData.removeCache({}, () => {
                            this.logger.log("BrowserCleanerModule: cache cleared"), resolve();
                        });
                    } catch (e) {
                        this.logger.error(e), reject();
                    }
                });
            }));
        }
        startScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                const createAlarm = {
                    delayInMinutes: this.cleanPeriod,
                    periodInMinutes: this.cleanPeriod
                };
                this.alarmService.create(createAlarm, AlarmNames_1.AlarmNames.CLEAN_CACHE);
            }));
        }
        stopScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.alarmService.clear(AlarmNames_1.AlarmNames.CLEAN_CACHE);
            }));
        }
        resetScheduler() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.stopScheduler(), yield this.startScheduler();
            }));
        }
    };
    CacheCleanerService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.ALARM_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ AlarmService_1.AlarmService, Object ]) ], CacheCleanerService), 
    exports.CacheCleanerService = CacheCleanerService;
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
    }), exports.PolicyService = void 0;
    const inversify_1 = __webpack_require__(0), PolicyEnum_1 = __webpack_require__(256), PolicyModuleTypes_1 = __webpack_require__(106), src_1 = __webpack_require__(1), PolicyServiceEvents_1 = __webpack_require__(189);
    let PolicyService = class PolicyService {
        constructor(storageService, internalDispatcher) {
            this.storageService = storageService, this.internalDispatcher = internalDispatcher, 
            this.key = "POLICY";
        }
        agree() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.storageService.set(this.key, PolicyEnum_1.PolicyEnum.AGREE), this.internalDispatcher.emit(new src_1.MarioEvent(PolicyServiceEvents_1.PolicyServiceEvents.POLICY_AGREED));
            }));
        }
        reject() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.storageService.set(this.key, PolicyEnum_1.PolicyEnum.REJECT), this.internalDispatcher.emit(new src_1.MarioEvent(PolicyServiceEvents_1.PolicyServiceEvents.POLICY_REJECTED));
            }));
        }
        isAgreed() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.is(PolicyEnum_1.PolicyEnum.AGREE);
            }));
        }
        isRejected() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.is(PolicyEnum_1.PolicyEnum.REJECT);
            }));
        }
        hasAnswer() {
            return __awaiter(this, void 0, void 0, (function*() {
                return yield this.storageService.has(this.key);
            }));
        }
        is(policy) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (yield this.storageService.has(this.key)) {
                    return (yield this.storageService.get(this.key)) === policy;
                }
                return !1;
            }));
        }
    };
    PolicyService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_STORAGE_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object, Object ]) ], PolicyService), 
    exports.PolicyService = PolicyService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PanellistIdentityTypes = void 0;
    const PanellistIdentityTypes = {
        PANELLIST_IDENTITY_HOST: Symbol.for("PANELLIST_IDENTITY_HOST"),
        PANELLIST_IDENTITY_LOGGING: Symbol.for("PANELLIST_IDENTITY_LOGGING"),
        PANELLIST_IDENTITY_SERVICE: Symbol.for("PANELLIST_IDENTITY_SERVICE")
    };
    exports.PanellistIdentityTypes = PanellistIdentityTypes;
}, , , , , , , function(module, exports, __webpack_require__) {
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
    const inversify_1 = __webpack_require__(0), PromotionApiModuleTypes_1 = __webpack_require__(108), PromotionApiModuleException_1 = __webpack_require__(159);
    var PromotionElementType;
    !function(PromotionElementType) {
        PromotionElementType.TEXT = "TEXT", PromotionElementType.LINK = "LINK";
    }(PromotionElementType = exports.PromotionElementType || (exports.PromotionElementType = {}));
    let PromotionService = class PromotionService {
        constructor(api) {
            this.api = api;
        }
        fetch(browser, section) {
            return __awaiter(this, void 0, void 0, (function*() {
                const params = new URLSearchParams;
                browser && params.append("browser", browser), section && params.append("section", section);
                const endpoint = `${this.api}?${params.toString()}`;
                try {
                    const response = yield fetch(endpoint), data = yield response.json();
                    return browser && section && data[browser] && data[browser] && data[browser][section] ? data[browser][section] : data;
                } catch (e) {
                    throw new PromotionApiModuleException_1.PromotionApiModuleException(`PromotionApiModule: fetch error "${e.message}"`);
                }
            }));
        }
        parse(section) {
            const elements = [];
            let inputStr = section.text;
            for (;;) {
                const pos = inputStr.indexOf("#");
                if (-1 === pos) {
                    const element = this.makeElementText(inputStr);
                    elements.push(element);
                    break;
                }
                const text = inputStr.substr(0, pos);
                if ("" !== text) {
                    const element = this.makeElementText(text);
                    elements.push(element);
                }
                inputStr = inputStr.substr(pos + 1);
                const separator = inputStr.indexOf(" "), label = -1 === separator ? inputStr : inputStr.substr(0, separator);
                if (!section.links[label]) throw new PromotionApiModuleException_1.PromotionApiModuleException(`PromotionApiModule: a configuration for label "${label}" is not found`);
                const link = section.links[label];
                if (elements.push(this.makeElementLink(link)), -1 === separator) break;
                inputStr = inputStr.substr(label.length);
            }
            return elements;
        }
        makeElementText(text) {
            return {
                text: text,
                type: PromotionElementType.TEXT
            };
        }
        makeElementLink(link) {
            return {
                link: link,
                type: PromotionElementType.LINK
            };
        }
    };
    PromotionService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PromotionApiModuleTypes_1.PromotionApiModuleTypes._API)), __metadata("design:paramtypes", [ String ]) ], PromotionService), 
    exports.PromotionService = PromotionService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    class PromotionApiModuleException extends Error {}
    exports.PromotionApiModuleException = PromotionApiModuleException;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1);
    let UrbanPromotionStorage = class UrbanPromotionStorage {
        constructor(storage) {
            this.storage = storage, this.FOOTER_KEY = "PROMOTION_FOOTER";
        }
        hasFooter() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.storage.has(this.FOOTER_KEY);
            }));
        }
        setFooter(elements) {
            return __awaiter(this, void 0, void 0, (function*() {
                const json = JSON.stringify(elements);
                return this.storage.set(this.FOOTER_KEY, json);
            }));
        }
        getFooter() {
            return __awaiter(this, void 0, void 0, (function*() {
                const json = yield this.storage.get(this.FOOTER_KEY);
                return JSON.parse(json);
            }));
        }
    };
    UrbanPromotionStorage = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], UrbanPromotionStorage), 
    exports.UrbanPromotionStorage = UrbanPromotionStorage;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    exports.UrbanPromotionAlarms = {
        SYNC_FOOTER: "SYNC_PROMOTION_FOOTER"
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
    const inversify_1 = __webpack_require__(0), PromotionApiModuleTypes_1 = __webpack_require__(108), PromotionService_1 = __webpack_require__(158), BrowserEnum_1 = __webpack_require__(22), src_1 = __webpack_require__(1);
    let UrbanPromotionApi = class UrbanPromotionApi {
        constructor(api, browser) {
            this.api = api, this.browser = browser;
        }
        getFooter() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.api.fetch(this.getBrowser(), "footer");
            }));
        }
        parse(config) {
            return this.api.parse(config);
        }
        getBrowser() {
            return {
                [BrowserEnum_1.BrowserEnum.CHROME_BROWSER]: "chrome",
                [BrowserEnum_1.BrowserEnum.EDGE_BROWSER]: "edge",
                [BrowserEnum_1.BrowserEnum.FIREFOX_BROWSER]: "firefox"
            }[this.browser];
        }
    };
    UrbanPromotionApi = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PromotionApiModuleTypes_1.PromotionApiModuleTypes.PROMOTION_API_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.BROWSER)), __metadata("design:paramtypes", [ PromotionService_1.PromotionService, String ]) ], UrbanPromotionApi), 
    exports.UrbanPromotionApi = UrbanPromotionApi;
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
    const inversify_1 = __webpack_require__(0), UrbanPromotionModuleTypes_1 = __webpack_require__(136), UrbanPromotionStorage_1 = __webpack_require__(160), UrbanPromotionApi_1 = __webpack_require__(162), src_1 = __webpack_require__(1), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsService_1 = __webpack_require__(87);
    let UrbanPromotionSyncService = class UrbanPromotionSyncService {
        constructor(api, storage, logger, ga) {
            this.api = api, this.storage = storage, this.logger = logger, this.ga = ga;
        }
        syncFooter() {
            return __awaiter(this, void 0, void 0, (function*() {
                try {
                    const config = yield this.api.getFooter(), elements = this.api.parse(config);
                    return yield this.storage.setFooter(elements), this.ga.trackEvent("promotion_sync_footer", "success", config.text), 
                    !0;
                } catch (e) {
                    return this.logger.error(e), this.ga.trackEvent("promotion_sync_footer", "fail"), 
                    !1;
                }
            }));
        }
    };
    UrbanPromotionSyncService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_API)), __param(1, inversify_1.inject(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_STORAGE)), __param(2, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __param(3, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE)), __metadata("design:paramtypes", [ UrbanPromotionApi_1.UrbanPromotionApi, UrbanPromotionStorage_1.UrbanPromotionStorage, Object, GoogleAnalyticsService_1.GoogleAnalyticsService ]) ], UrbanPromotionSyncService), 
    exports.UrbanPromotionSyncService = UrbanPromotionSyncService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.Deferred = function() {
        let resolve, reject;
        return {
            promise: new Promise((res, rej) => {
                resolve = res, reject = rej;
            }),
            resolve: resolve,
            reject: reject
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
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.BugsnagService = void 0;
    const js_1 = __webpack_require__(207), inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1);
    let BugsnagService = class BugsnagService {
        constructor(logger) {
            this.logger = logger, this.history = "", this.enabled = !0;
        }
        init(options = {}) {
            this.options = options, void 0 !== options.enabled && (this.enabled = options.enabled), 
            this.client = js_1.default({
                apiKey: options.apiKey,
                appVersion: options.appVersion,
                beforeSend: report => {
                    report.stacktrace = report.stacktrace.map(frame => (frame.file = frame.file.replace(/(chrome-extension:|moz-extension:)/g, "chrome_extension:"), 
                    frame)), report.updateMetaData("background", {
                        history: this.history
                    }), this.enabled || report.ignore();
                },
                releaseStage: options.releaseStage
            }), this.logger.onLog(this.onLog.bind(this)), this.logger.onEvent(this.onEvent.bind(this)), 
            this.logger.onWarn(this.onWarn.bind(this)), this.logger.onError(this.onError.bind(this)), 
            this.logStatus();
        }
        enable() {
            this.enabled = !0, this.logStatus();
        }
        disable() {
            this.enabled = !1, this.logStatus();
        }
        notify(error) {
            this.client.notify(error);
        }
        leaveBreadcrumb(name, metaData, type, timestamp) {
            this.client.leaveBreadcrumb(name, metaData, type, timestamp);
        }
        updateUser(user) {
            this.client.user = user;
        }
        getClient() {
            return this.client;
        }
        logStatus() {
            this.logger.log("BugsnagModule: " + (this.enabled ? "Enabled" : "Disabled"));
        }
        onLog(message, args, output) {
            (!this.options.filterLog || this.options.filterLog(message, args)) && (this.addToHistory(output), 
            this.leaveBreadcrumb(message, args));
        }
        onEvent(message, event, output) {
            if (!this.options.filterEvents || this.options.filterEvents(event)) {
                this.addToHistory(output);
                const metaData = {
                    param: JSON.stringify(event.data)
                };
                this.leaveBreadcrumb(message, metaData);
            }
        }
        onWarn(message, args, output) {
            this.addToHistory(output), this.notify(message);
        }
        onError(e) {
            this.notify(e);
        }
        addToHistory(text) {
            this.history = `${text.trim()}\n${this.history}`;
            this.history.length > 48e4 && (this.history = this.history.substr(0, 48e4));
        }
    };
    BugsnagService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], BugsnagService), 
    exports.BugsnagService = BugsnagService;
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
    }), exports.IpInfoService = void 0;
    const inversify_1 = __webpack_require__(0), IP_1 = __webpack_require__(220), IpInfoServiceException_1 = __webpack_require__(167), src_1 = __webpack_require__(1);
    let IpInfoService = class IpInfoService {
        constructor(logger) {
            this.logger = logger, this.api = "https://geo.geosurf.io/";
        }
        get(ip = null) {
            return __awaiter(this, void 0, void 0, (function*() {
                try {
                    const endpoint = this.api + (ip ? ip.getIP() : ""), response = yield fetch(endpoint), ipInfoResponse = yield response.json(), info = {
                        city: ipInfoResponse.hasOwnProperty("city") ? ipInfoResponse.city : "",
                        country: ipInfoResponse.hasOwnProperty("country") ? ipInfoResponse.country : "",
                        ip: new IP_1.IP(ipInfoResponse.ip),
                        isp: ipInfoResponse.hasOwnProperty("isp") ? ipInfoResponse.isp : ""
                    };
                    return ipInfoResponse.hasOwnProperty("loc") && (info.loc = ipInfoResponse.loc), 
                    ipInfoResponse.hasOwnProperty("postal") && (info.postal = ipInfoResponse.postal), 
                    ipInfoResponse.hasOwnProperty("asn") && (info.asn = ipInfoResponse.asn), ipInfoResponse.hasOwnProperty("organization") && (info.organization = ipInfoResponse.organization), 
                    ipInfoResponse.hasOwnProperty("state") && (info.state = ipInfoResponse.state), info;
                } catch (e) {
                    throw this.logger.error(e), new IpInfoServiceException_1.IpInfoServiceException(e.message);
                }
            }));
        }
    };
    IpInfoService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], IpInfoService), 
    exports.IpInfoService = IpInfoService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.IpInfoServiceException = void 0;
    class IpInfoServiceException extends Error {}
    exports.IpInfoServiceException = IpInfoServiceException;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ProxyLocation_1 = __webpack_require__(144);
    let UrbanHistoryService = class UrbanHistoryService {
        constructor(storage) {
            this.storage = storage, this.PREV_STORAGE_KEY = "URBAN_STORAGE_HISTORY_PREV", this.EARTH_STORAGE_KEY = "URBAN_STORAGE_LOCATIONS";
        }
        savePrev(location) {
            return __awaiter(this, void 0, void 0, (function*() {
                const str = location.encode();
                return this.storage.set(this.PREV_STORAGE_KEY, str);
            }));
        }
        getPrev() {
            return __awaiter(this, void 0, void 0, (function*() {
                const str = yield this.storage.get(this.PREV_STORAGE_KEY);
                return ProxyLocation_1.ProxyLocation.decode(str);
            }));
        }
        hasPrev() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.storage.has(this.PREV_STORAGE_KEY);
            }));
        }
        saveEarth(earth) {
            return __awaiter(this, void 0, void 0, (function*() {
                const str = earth.encode();
                yield this.storage.set(this.EARTH_STORAGE_KEY, str);
            }));
        }
        getEarth() {
            return __awaiter(this, void 0, void 0, (function*() {
                const str = yield this.storage.get(this.EARTH_STORAGE_KEY);
                return ProxyLocation_1.ProxyLocation.decode(str);
            }));
        }
        hasEarth() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.storage.has(this.EARTH_STORAGE_KEY);
            }));
        }
    };
    UrbanHistoryService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], UrbanHistoryService), 
    exports.UrbanHistoryService = UrbanHistoryService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationCode = void 0;
    const LocationCodeEmptyException_1 = __webpack_require__(229);
    exports.LocationCode = class LocationCode {
        constructor(code) {
            if (this.code = code, this.code = code.trim(), 0 === this.code.length) throw new LocationCodeEmptyException_1.LocationCodeEmptyException("code has to be not empty");
        }
        value() {
            return this.code;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationConfig = void 0;
    const ProxyHost_1 = __webpack_require__(232), ProxyPortRange_1 = __webpack_require__(233), ProxyRedundancy_1 = __webpack_require__(235), ProxyScheme_1 = __webpack_require__(236), ProxyWeight_1 = __webpack_require__(237);
    class ProxyLocationConfig {
        constructor(_host, _portRange, _scheme, _redundancy, _weight) {
            this._host = _host, this._portRange = _portRange, this._scheme = _scheme, this._redundancy = _redundancy, 
            this._weight = _weight;
        }
        static create(host, from, to, scheme, redundancy, weight) {
            return new ProxyLocationConfig(new ProxyHost_1.ProxyHost(host), new ProxyPortRange_1.ProxyPortRange(from, to), new ProxyScheme_1.ProxyScheme(scheme), new ProxyRedundancy_1.ProxyRedundancy(redundancy), new ProxyWeight_1.ProxyWeight(weight));
        }
        host() {
            return this._host;
        }
        portRange() {
            return this._portRange;
        }
        scheme() {
            return this._scheme;
        }
        redundancy() {
            return this._redundancy;
        }
        weight() {
            return this._weight;
        }
    }
    exports.ProxyLocationConfig = ProxyLocationConfig;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    exports.AlarmNames = {
        UPDATE_LOCATIONS: "UPDATE_LOCATIONS"
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
    }), exports.ProxyLocationService = void 0;
    const inversify_1 = __webpack_require__(0), ProxyLocationEvents_1 = __webpack_require__(103), src_1 = __webpack_require__(1), ProxyLocationServiceException_1 = __webpack_require__(241);
    let ProxyLocationService = class ProxyLocationService {
        constructor(proxyService, internalDispatcher) {
            this.proxyService = proxyService, this.internalDispatcher = internalDispatcher;
        }
        setStrategy(strategy) {
            this.strategy = strategy;
        }
        onAuthRequired(callback) {
            this.proxyService.onAuthRequired(callback);
        }
        activate(location, bypassList = []) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.checkStrategyOrThrowException(), yield this.emitBeforeActivateEvent(location, bypassList);
                const proxy = yield this.strategy.selectProxy(location);
                this.activatedLocation = location, yield this.proxyService.connect(proxy, bypassList), 
                yield this.emitAfterActivateEvent(location, bypassList);
            }));
        }
        deactivate() {
            return __awaiter(this, void 0, void 0, (function*() {
                if (!this.hasActivated()) throw new ProxyLocationServiceException_1.ProxyLocationServiceException("ProxyLocationService: no active location");
                const location = this.activatedLocation;
                yield this.emitBeforeDeactivateEvent(location), this.activatedLocation = null, yield this.proxyService.direct(), 
                yield this.emitAfterDeactivateEvent(location);
            }));
        }
        hasActivated() {
            return !!this.activatedLocation;
        }
        canBeActivated(location) {
            return this.checkStrategyOrThrowException(), this.strategy.canBeActivated(location);
        }
        getActivated() {
            if (!this.hasActivated()) throw new ProxyLocationServiceException_1.ProxyLocationServiceException("ProxyLocationService: no active location");
            return this.activatedLocation;
        }
        checkStrategyOrThrowException() {
            if (!this.strategy) throw new ProxyLocationServiceException_1.ProxyLocationServiceException("ProxyLocationService: strategy is not set");
        }
        emitBeforeActivateEvent(location, bypassList) {
            return __awaiter(this, void 0, void 0, (function*() {
                const payload = {
                    location: location,
                    bypassList: bypassList
                }, event = new src_1.MarioEvent(ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_BEFORE_ACTIVATED, payload);
                yield this.internalDispatcher.emit(event);
            }));
        }
        emitAfterActivateEvent(location, bypassList) {
            return __awaiter(this, void 0, void 0, (function*() {
                const payload = {
                    location: location,
                    bypassList: bypassList
                }, event = new src_1.MarioEvent(ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_AFTER_ACTIVATED, payload);
                yield this.internalDispatcher.emit(event);
            }));
        }
        emitBeforeDeactivateEvent(location) {
            return __awaiter(this, void 0, void 0, (function*() {
                const event = new src_1.MarioEvent(ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_BEFORE_DEACTIVATED, location);
                yield this.internalDispatcher.emit(event);
            }));
        }
        emitAfterDeactivateEvent(location) {
            return __awaiter(this, void 0, void 0, (function*() {
                const event = new src_1.MarioEvent(ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_AFTER_DEACTIVATED, location);
                yield this.internalDispatcher.emit(event);
            }));
        }
    };
    ProxyLocationService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.PROXY_SERVICE)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object, Object ]) ], ProxyLocationService), 
    exports.ProxyLocationService = ProxyLocationService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var LocationHelper_1, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationHelper = void 0;
    const inversify_1 = __webpack_require__(0);
    let LocationHelper = LocationHelper_1 = class LocationHelper {
        getCountryName(countryCode, defaultName) {
            return void 0 === LocationHelper_1.locations[countryCode] ? defaultName : LocationHelper_1.locations[countryCode].countryName;
        }
        getStateName(countryCode, stateCode, defaultName) {
            return void 0 === LocationHelper_1.locations[countryCode] || void 0 === LocationHelper_1.locations[countryCode].states || void 0 === LocationHelper_1.locations[countryCode].states[stateCode] ? defaultName : LocationHelper_1.locations[countryCode].states[stateCode];
        }
    };
    LocationHelper.locations = {
        AF: {
            countryName: "Afghanistan"
        },
        AL: {
            countryName: "Albania"
        },
        DZ: {
            countryName: "Algeria"
        },
        AO: {
            countryName: "Angola"
        },
        AI: {
            countryName: "Anguilla"
        },
        AG: {
            countryName: "Antigua and Barbuda"
        },
        AR: {
            countryName: "Argentina"
        },
        AM: {
            countryName: "Armenia"
        },
        AW: {
            countryName: "Aruba"
        },
        AU: {
            countryName: "Australia"
        },
        AT: {
            countryName: "Austria"
        },
        AZ: {
            countryName: "Azerbaijan"
        },
        BS: {
            countryName: "Bahamas"
        },
        BH: {
            countryName: "Bahrain"
        },
        BD: {
            countryName: "Bangladesh"
        },
        BB: {
            countryName: "Barbados"
        },
        BY: {
            countryName: "Belarus"
        },
        BE: {
            countryName: "Belgium"
        },
        BZ: {
            countryName: "Belize"
        },
        BJ: {
            countryName: "Benin"
        },
        BO: {
            countryName: "Bolivia"
        },
        BA: {
            countryName: "Bosnia and Herzegovina"
        },
        BW: {
            countryName: "Botswana"
        },
        BR: {
            countryName: "Brazil"
        },
        BN: {
            countryName: "Brunei Darussalam"
        },
        BG: {
            countryName: "Bulgaria"
        },
        KH: {
            countryName: "Cambodia"
        },
        CM: {
            countryName: "Cameroon"
        },
        CA: {
            countryName: "Canada",
            states: {
                AB: "Alberta",
                BC: "British Columbia",
                MB: "Manitoba",
                NB: "New Brunswick",
                NL: "Newfoundland and Labrador",
                NS: "Nova Scotia",
                NT: "Northwest Territories",
                NU: "Nunavut",
                ON: "Ontario",
                PE: "Prince Edward Island",
                QC: "Québec",
                SK: "Saskatchewan",
                YT: "Yukon"
            }
        },
        CV: {
            countryName: "Cape Verde"
        },
        KY: {
            countryName: "Cayman Islands"
        },
        CL: {
            countryName: "Chile"
        },
        CN: {
            countryName: "China"
        },
        CO: {
            countryName: "Colombia"
        },
        KM: {
            countryName: "Comoros"
        },
        CG: {
            countryName: "Congo"
        },
        CR: {
            countryName: "Costa Rica"
        },
        HR: {
            countryName: "Croatia"
        },
        CY: {
            countryName: "Cyprus"
        },
        CZ: {
            countryName: "Czech Republic"
        },
        DK: {
            countryName: "Denmark"
        },
        DO: {
            countryName: "Dominican Republic"
        },
        EC: {
            countryName: "Ecuador"
        },
        EG: {
            countryName: "Egypt"
        },
        SV: {
            countryName: "El Salvador"
        },
        EE: {
            countryName: "Estonia"
        },
        ET: {
            countryName: "Ethiopia"
        },
        FI: {
            countryName: "Finland"
        },
        FR: {
            countryName: "France"
        },
        GE: {
            countryName: "Georgia"
        },
        GH: {
            countryName: "Ghana"
        },
        GR: {
            countryName: "Greece"
        },
        GP: {
            countryName: "Guadeloupe"
        },
        GT: {
            countryName: "Guatemala"
        },
        GY: {
            countryName: "Guyana"
        },
        HT: {
            countryName: "Haiti"
        },
        HN: {
            countryName: "Honduras"
        },
        HK: {
            countryName: "Hong Kong"
        },
        HU: {
            countryName: "Hungary"
        },
        IS: {
            countryName: "Iceland"
        },
        IN: {
            countryName: "India"
        },
        ID: {
            countryName: "Indonesia"
        },
        IR: {
            countryName: "Iran"
        },
        IQ: {
            countryName: "Iraq"
        },
        IE: {
            countryName: "Ireland"
        },
        IL: {
            countryName: "Israel"
        },
        IT: {
            countryName: "Italy"
        },
        CI: {
            countryName: "Ivory Coast"
        },
        JM: {
            countryName: "Jamaica"
        },
        JP: {
            countryName: "Japan"
        },
        JO: {
            countryName: "Jordan"
        },
        KZ: {
            countryName: "Kazakhstan"
        },
        KE: {
            countryName: "Kenya"
        },
        KR: {
            countryName: "Korea"
        },
        XK: {
            countryName: "Kosovo"
        },
        KW: {
            countryName: "Kuwait"
        },
        KG: {
            countryName: "Kyrgyzstan"
        },
        LA: {
            countryName: "Lao People's Democratic Republic"
        },
        LV: {
            countryName: "Latvia"
        },
        LB: {
            countryName: "Lebanon"
        },
        LY: {
            countryName: "Libyan Arab Jamahiriya"
        },
        LT: {
            countryName: "Lithuania"
        },
        LU: {
            countryName: "Luxembourg"
        },
        MO: {
            countryName: "Macau"
        },
        MK: {
            countryName: "Macedonia"
        },
        MG: {
            countryName: "Madagascar"
        },
        MY: {
            countryName: "Malaysia"
        },
        MV: {
            countryName: "Maldives"
        },
        ML: {
            countryName: "Mali"
        },
        MT: {
            countryName: "Malta"
        },
        MQ: {
            countryName: "Martinique"
        },
        MU: {
            countryName: "Mauritius"
        },
        MX: {
            countryName: "Mexico"
        },
        MD: {
            countryName: "Moldova"
        },
        MN: {
            countryName: "Mongolia"
        },
        ME: {
            countryName: "Montenegro"
        },
        MA: {
            countryName: "Morocco"
        },
        MZ: {
            countryName: "Mozambique"
        },
        MM: {
            countryName: "Myanmar"
        },
        NA: {
            countryName: "Namibia"
        },
        NP: {
            countryName: "Nepal"
        },
        NL: {
            countryName: "Netherlands"
        },
        NC: {
            countryName: "New Caledonia"
        },
        NZ: {
            countryName: "New Zealand"
        },
        NI: {
            countryName: "Nicaragua"
        },
        NG: {
            countryName: "Nigeria"
        },
        NO: {
            countryName: "Norway"
        },
        OM: {
            countryName: "Oman"
        },
        PK: {
            countryName: "Pakistan"
        },
        PS: {
            countryName: "Palestine"
        },
        PA: {
            countryName: "Panama"
        },
        PY: {
            countryName: "Paraguay"
        },
        PE: {
            countryName: "Peru"
        },
        PH: {
            countryName: "Philippines"
        },
        PL: {
            countryName: "Poland"
        },
        PT: {
            countryName: "Portugal"
        },
        PR: {
            countryName: "Puerto Rico"
        },
        QA: {
            countryName: "Qatar"
        },
        RE: {
            countryName: "Reunion"
        },
        RO: {
            countryName: "Romania"
        },
        LC: {
            countryName: "Saint Lucia"
        },
        VC: {
            countryName: "Saint Vincent and the Grenadines"
        },
        SA: {
            countryName: "Saudi Arabia"
        },
        SN: {
            countryName: "Senegal"
        },
        RS: {
            countryName: "Serbia"
        },
        SC: {
            countryName: "Seychelles"
        },
        SG: {
            countryName: "Singapore"
        },
        SK: {
            countryName: "Slovakia"
        },
        SI: {
            countryName: "Slovenia"
        },
        ZA: {
            countryName: "South Africa"
        },
        ES: {
            countryName: "Spain"
        },
        LK: {
            countryName: "Sri Lanka"
        },
        SD: {
            countryName: "Sudan"
        },
        SR: {
            countryName: "Suriname"
        },
        SE: {
            countryName: "Sweden"
        },
        CH: {
            countryName: "Switzerland"
        },
        SY: {
            countryName: "Syrian Arab Republic"
        },
        TW: {
            countryName: "Taiwan"
        },
        TZ: {
            countryName: "Tanzania"
        },
        TH: {
            countryName: "Thailand"
        },
        TT: {
            countryName: "Trinidad and Tobago"
        },
        TN: {
            countryName: "Tunisia"
        },
        TR: {
            countryName: "Turkey"
        },
        UG: {
            countryName: "Uganda"
        },
        UA: {
            countryName: "Ukraine"
        },
        AE: {
            countryName: "United Arab Emirates"
        },
        UY: {
            countryName: "Uruguay"
        },
        UZ: {
            countryName: "Uzbekistan"
        },
        VE: {
            countryName: "Venezuela"
        },
        VN: {
            countryName: "Vietnam"
        },
        YE: {
            countryName: "Yemen"
        },
        ZM: {
            countryName: "Zambia"
        },
        ZW: {
            countryName: "Zimbabwe"
        },
        DE: {
            countryName: "Germany",
            states: {
                BW: "Baden-Württemberg",
                BY: "Bayern",
                BE: "Berlin",
                BB: "Brandenburg",
                HB: "Bremen",
                HH: "Hamburg",
                HE: "Hessen",
                MV: "Mecklenburg-Vorpommern",
                NI: "Niedersachsen",
                NW: "Nordrhein-Westfalen",
                RP: "Rheinland-Pfalz",
                SL: "Saarland",
                SN: "Sachsen",
                ST: "Sachsen-Anhalt",
                SH: "Schleswig-Holstein",
                TH: "Thüringen"
            }
        },
        US: {
            countryName: "United States (USA)",
            states: {
                AZ: "Arizona",
                AL: "Alabama",
                AK: "Alaska",
                AR: "Arkansas",
                CA: "California",
                CO: "Colorado",
                CT: "Connecticut",
                DE: "Delaware",
                DC: "District Of Columbia",
                FL: "Florida",
                GA: "Georgia",
                HI: "Hawaii",
                ID: "Idaho",
                IL: "Illinois",
                IN: "Indiana",
                IA: "Iowa",
                KS: "Kansas",
                KY: "Kentucky",
                LA: "Louisiana",
                ME: "Maine",
                MD: "Maryland",
                MA: "Massachusetts",
                MI: "Michigan",
                MN: "Minnesota",
                MS: "Mississippi",
                MO: "Missouri",
                MT: "Montana",
                NE: "Nebraska",
                NV: "Nevada",
                NH: "New Hampshire",
                NJ: "New Jersey",
                NM: "New Mexico",
                NY: "New York",
                NC: "North Carolina",
                ND: "North Dakota",
                OH: "Ohio",
                OK: "Oklahoma",
                OR: "Oregon",
                PA: "Pennsylvania",
                RI: "Rhode Island",
                SC: "South Carolina",
                SD: "South Dakota",
                TN: "Tennessee",
                TX: "Texas",
                UT: "Utah",
                VT: "Vermont",
                VA: "Virginia",
                WA: "Washington",
                WV: "West Virginia",
                WI: "Wisconsin",
                WY: "Wyoming"
            }
        },
        US_FAST: {
            countryName: "United States (USA) FAST"
        },
        GB: {
            countryName: "United Kingdom (UK)",
            states: {}
        },
        RU: {
            countryName: "Russia",
            states: {}
        }
    }, LocationHelper = LocationHelper_1 = __decorate([ inversify_1.injectable() ], LocationHelper), 
    exports.LocationHelper = LocationHelper;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterApiParseException = void 0;
    const DataCenterApiException_1 = __webpack_require__(146);
    class DataCenterApiParseException extends DataCenterApiException_1.DataCenterApiException {}
    exports.DataCenterApiParseException = DataCenterApiParseException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterApiUserNotAuthorizedException = void 0;
    const DataCenterApiException_1 = __webpack_require__(146);
    class DataCenterApiUserNotAuthorizedException extends DataCenterApiException_1.DataCenterApiException {}
    exports.DataCenterApiUserNotAuthorizedException = DataCenterApiUserNotAuthorizedException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterApiFetchException = void 0;
    const DataCenterApiException_1 = __webpack_require__(146);
    class DataCenterApiFetchException extends DataCenterApiException_1.DataCenterApiException {}
    exports.DataCenterApiFetchException = DataCenterApiFetchException;
}, function(module, exports) {
    var getRandomValues = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues) {
        var rnds8 = new Uint8Array(16);
        module.exports = function() {
            return getRandomValues(rnds8), rnds8;
        };
    } else {
        var rnds = new Array(16);
        module.exports = function() {
            for (var r, i = 0; i < 16; i++) 0 == (3 & i) && (r = 4294967296 * Math.random()), 
            rnds[i] = r >>> ((3 & i) << 3) & 255;
            return rnds;
        };
    }
}, function(module, exports) {
    for (var byteToHex = [], i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).substr(1);
    module.exports = function(buf, offset) {
        var i = offset || 0, bth = byteToHex;
        return [ bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]] ].join("");
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
    const inversify_1 = __webpack_require__(0), IpInfoTypes_1 = __webpack_require__(111);
    let UrbanIpService = class UrbanIpService {
        constructor(ipInfoService) {
            this.ipInfoService = ipInfoService;
        }
        getIpInfo() {
            return this.ipInfo;
        }
        updateIpInfo() {
            return __awaiter(this, void 0, void 0, (function*() {
                try {
                    this.ipInfo = yield this.ipInfoService.get();
                } catch (e) {
                    yield this.delay(1e3), yield this.updateIpInfo();
                }
            }));
        }
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    };
    UrbanIpService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(IpInfoTypes_1.IpInfoTypes.IP_INFO_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], UrbanIpService), 
    exports.UrbanIpService = UrbanIpService;
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
    }), exports.IdentityService = void 0;
    const inversify_1 = __webpack_require__(0), IdentityTypes_1 = __webpack_require__(104);
    let IdentityService = class IdentityService {
        constructor(identityId) {
            this.identityId = identityId;
        }
        getIdentityId() {
            return this.identityId;
        }
    };
    IdentityService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(IdentityTypes_1.IdentityTypes.IDENTITY_ID)), __metadata("design:paramtypes", [ String ]) ], IdentityService), 
    exports.IdentityService = IdentityService;
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
    const inversify_1 = __webpack_require__(0), PanelOsTypes_1 = __webpack_require__(99), PanelOsService_1 = __webpack_require__(100);
    let AdBlockerService = class AdBlockerService {
        constructor(panel) {
            this.panel = panel;
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.panel.enableDisplayAdBlocker(), yield this.panel.enableTwitterAdBlocker(), 
                yield this.panel.enableFacebookAdBlocker();
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.panel.disableDisplayAdBlocker(), yield this.panel.disableTwitterAdBlocker(), 
                yield this.panel.disableFacebookAdBlocker();
            }));
        }
        isEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return (yield this.panel.isDisplayAdBlockerEnabled()) || (yield this.panel.isFacebookAdBlockerEnabled()) || (yield this.panel.isTwitterAdBlockerEnabled());
            }));
        }
        isDisabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return !(yield this.isEnabled());
            }));
        }
        getAdBlockerCountersForActiveTab() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.panel.getAdBlockerCountersForActiveTab();
            }));
        }
    };
    AdBlockerService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PanelOsTypes_1.PanelOsTypes.PANEL_OS_SERVICE)), __metadata("design:paramtypes", [ PanelOsService_1.PanelOsService ]) ], AdBlockerService), 
    exports.AdBlockerService = AdBlockerService;
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
    }), exports.CheckSafeService = void 0;
    const inversify_1 = __webpack_require__(0), UrlsSafeCheckTypes_1 = __webpack_require__(12), RequestService_1 = __webpack_require__(183), src_1 = __webpack_require__(1), SensitiveDataFilterService_1 = __webpack_require__(147), SensitiveDataFilterTypes_1 = __webpack_require__(113), CheckSafeException_1 = __webpack_require__(184), lz_string_1 = __webpack_require__(255);
    let CheckSafeService = class CheckSafeService {
        constructor(requestService, apiUrl, logging, sensitiveDataService, logger) {
            this.requestService = requestService, this.apiUrl = apiUrl, this.logging = logging, 
            this.sensitiveDataService = sensitiveDataService, this.logger = logger;
        }
        checkTabUrlSafety(tab, mode) {
            return __awaiter(this, void 0, void 0, (function*() {
                let status;
                const sendFullData = tab.hasData && mode === UrlsSafeCheckTypes_1.MODE.FULL, url = sendFullData ? "/api/rest/v1/secure/urls/checkSafety" : "/api/rest/v1/secure/urls/checkSafety/basic", requestData = sendFullData ? this.serializeFullRequest(tab) : this.serializeBasicRequest(tab);
                if (!this.isValidData(requestData, sendFullData)) throw new CheckSafeException_1.CheckSafeException("Incorrect safe check request: " + JSON.stringify(requestData));
                const data = this.compressRequest(requestData);
                this.logging && this.logger.log("Check safe state request", requestData);
                const requestOptions = {
                    method: RequestService_1.RequestMethods.POST,
                    contentType: RequestService_1.ContentTypes.OCTET_STREAM
                };
                try {
                    status = (yield this.requestService.fetchRequest(this.apiUrl + url, data, requestOptions)).safe ? UrlsSafeCheckTypes_1.STATUS.SAFE : UrlsSafeCheckTypes_1.STATUS.UNSAFE;
                } catch (err) {
                    throw new CheckSafeException_1.CheckSafeException("Error checking url safety");
                }
                return status;
            }));
        }
        serializeBasicRequest(tab) {
            return {
                url: {
                    value: this.sensitiveDataService.transformUrl(tab.url),
                    encoded: !1
                }
            };
        }
        serializeFullRequest(tab) {
            const navigation = tab.getNavigationData(), document = tab.getDocumentData(), panel = tab.getPanelData(), system = tab.getSystemData();
            return {
                url: {
                    value: this.sensitiveDataService.transformUrl(tab.url),
                    encoded: !1
                },
                timestamp: Date.now().toString(),
                pageAttributes: {
                    title: this.sensitiveDataService.transformTitle(tab.domain, document.title),
                    name: this.sensitiveDataService.transformTitle(tab.domain, document.windowName)
                },
                contextAttributes: {
                    referrer: this.sensitiveDataService.transformUrl(document.referrer)
                },
                method: navigation.method,
                tab: {
                    id: tab.id,
                    initiatorId: navigation.sourceTabId
                },
                frame: {
                    id: navigation.frameId,
                    parentId: navigation.parentFrameId
                },
                panelistDef: {
                    panelistId: panel.panelistId,
                    panelId: panel.panelId,
                    partnerId: panel.partnerId,
                    distributorId: panel.distributorId
                },
                os: {
                    name: system.name,
                    version: system.version
                },
                type: "DESKTOP_BROWSER_EXTENSION"
            };
        }
        isValidData(data, sendFullData) {
            return !!data.url.value && (!sendFullData || data.method && data.tab.id && data.type);
        }
        compressRequest(data) {
            return lz_string_1.default.compressToUTF16(JSON.stringify(data));
        }
    };
    CheckSafeService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_REQUEST_SERVICE)), __param(1, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_ENDPOINT_DOMAIN)), __param(2, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_LOGGING)), __param(3, inversify_1.inject(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_SERVICE)), __param(4, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ RequestService_1.RequestService, String, String, SensitiveDataFilterService_1.SensitiveDataFilterService, Object ]) ], CheckSafeService), 
    exports.CheckSafeService = CheckSafeService;
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
    }), exports.RequestService = exports.ContentTypes = exports.RequestMethods = void 0;
    const inversify_1 = __webpack_require__(0);
    var RequestMethods, ContentTypes;
    !function(RequestMethods) {
        RequestMethods.GET = "GET", RequestMethods.POST = "POST";
    }(RequestMethods = exports.RequestMethods || (exports.RequestMethods = {})), function(ContentTypes) {
        ContentTypes.JSON = "application/json;charset=utf-8", ContentTypes.OCTET_STREAM = "application/octet-stream";
    }(ContentTypes = exports.ContentTypes || (exports.ContentTypes = {}));
    let RequestService = class RequestService {
        fetchRequest(url, data, options) {
            return __awaiter(this, void 0, void 0, (function*() {
                const method = options.method || RequestMethods.GET, contentType = options.contentType || ContentTypes.JSON, headers = {
                    "Content-type": contentType
                }, body = contentType === ContentTypes.JSON ? JSON.stringify(data) : data, response = yield fetch(url, {
                    method: method,
                    headers: headers,
                    body: body
                });
                if (200 !== response.status) throw response;
                return response.json();
            }));
        }
    };
    RequestService = __decorate([ inversify_1.injectable() ], RequestService), exports.RequestService = RequestService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.CheckSafeException = void 0;
    class CheckSafeException extends Error {}
    exports.CheckSafeException = CheckSafeException;
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
    }), exports.StateDataService = void 0;
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), utils_1 = __webpack_require__(91);
    let StateDataService = class StateDataService {
        constructor(storageService) {
            this.storageService = storageService;
        }
        setEnabledState(enabled) {
            return __awaiter(this, void 0, void 0, (function*() {
                return yield this.storageService.set("SAFESEARCH_ENABLED", enabled ? "1" : "0");
            }));
        }
        getEnabledState() {
            return __awaiter(this, void 0, void 0, (function*() {
                return "1" === (yield this.storageService.get("SAFESEARCH_ENABLED"));
            }));
        }
        setNotificationEnabledState(enabled) {
            return __awaiter(this, void 0, void 0, (function*() {
                return yield this.storageService.set("SAFESEARCH_NOTIFICATION_ENABLED", enabled ? "1" : "0");
            }));
        }
        getNotificationEnabledState() {
            return __awaiter(this, void 0, void 0, (function*() {
                return "1" === (yield this.storageService.get("SAFESEARCH_NOTIFICATION_ENABLED"));
            }));
        }
        getDomainPersistedData(url) {
            return __awaiter(this, void 0, void 0, (function*() {
                const domain = utils_1.getDomain(url);
                return (yield this.getList()).find(item => item.domain === domain);
            }));
        }
        setDomainPersistedValue(url, field, value) {
            return __awaiter(this, void 0, void 0, (function*() {
                const domain = utils_1.getDomain(url), list = yield this.getList(), item = list.find(item => item.domain === domain);
                item ? item[field] = value : list.push({
                    domain: domain,
                    [field]: value
                }), yield this.saveList(list);
            }));
        }
        getList() {
            return __awaiter(this, void 0, void 0, (function*() {
                const data = yield this.storageService.get("SAFESEARCH_STATE_DATA");
                return data ? JSON.parse(data) : [];
            }));
        }
        saveList(items = []) {
            return __awaiter(this, void 0, void 0, (function*() {
                const data = JSON.stringify(items);
                return yield this.storageService.set("SAFESEARCH_STATE_DATA", data);
            }));
        }
    };
    StateDataService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], StateDataService), 
    exports.StateDataService = StateDataService;
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
    const inversify_1 = __webpack_require__(0), RequestsFilterTypes_1 = __webpack_require__(187), RequestsFilterService_1 = __webpack_require__(188), blockRules = [ /https:\/\/www\.google-analytics\.com\/(r\/)?collect\?(.*)/, /https:\/\/stats.g.doubleclick.net\/(r\/)?collect?(.*)/ ], allowRules = [ /https:\/\/www\.google-analytics\.com\/(r\/)?collect\?(.*)&tid=UA-15419909-1&(.*)/, /https:\/\/www\.google-analytics\.com\/(r\/)?collect\?(.*)&tid=UA-15419909-10&(.*)/, /https:\/\/stats.g.doubleclick.net\/(r\/)?collect?(.*)&tid=UA-15419909-1&(.*)/, /https:\/\/stats.g.doubleclick.net\/(r\/)?collect?(.*)&tid=UA-15419909-10&(.*)/ ];
    let AnalyticsBlockerService = class AnalyticsBlockerService {
        constructor(requestFilterService) {
            this.requestFilterService = requestFilterService;
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !0, this.requestFilterService.setBlockList(blockRules), this.requestFilterService.setAllowList(allowRules), 
                this.requestFilterService.enable();
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !1, this.requestFilterService.disable();
            }));
        }
        isEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.enabled;
            }));
        }
    };
    AnalyticsBlockerService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(RequestsFilterTypes_1.RequestsFilterTypes.REQUESTS_FILTER_SERVICE)), __metadata("design:paramtypes", [ RequestsFilterService_1.RequestsFilterService ]) ], AnalyticsBlockerService), 
    exports.AnalyticsBlockerService = AnalyticsBlockerService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.RequestsFilterTypes = {
        REQUESTS_FILTER_SERVICE: Symbol.for("REQUESTS_FILTER_SERVICE")
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
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
    let RequestsFilterService = class RequestsFilterService {
        constructor() {
            this.blockUrls = [], this.allowUrls = [], this._eventListener = this.handleRequest.bind(this);
        }
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                chrome.webRequest.onBeforeRequest.addListener(this._eventListener, {
                    urls: [ "<all_urls>" ]
                }, [ "blocking" ]), this.enabled = !0;
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                chrome.webRequest.onBeforeRequest.removeListener(this._eventListener), this.enabled = !1;
            }));
        }
        setBlockList(items) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.blockUrls = items;
            }));
        }
        setAllowList(items) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.allowUrls = items;
            }));
        }
        handleRequest(details) {
            const blockMatched = this.testQueryMatch(details.url, this.blockUrls), allowMatched = this.testQueryMatch(details.url, this.allowUrls);
            return {
                cancel: blockMatched && !allowMatched
            };
        }
        testQueryMatch(url, list) {
            return list.map(v => !!v.exec(url)).find(v => !!v);
        }
    };
    RequestsFilterService = __decorate([ inversify_1.injectable(), __metadata("design:paramtypes", []) ], RequestsFilterService), 
    exports.RequestsFilterService = RequestsFilterService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PolicyServiceEvents = void 0, function(PolicyServiceEvents) {
        PolicyServiceEvents.POLICY_AGREED = "POLICY_AGREED", PolicyServiceEvents.POLICY_REJECTED = "POLICY_REJECTED";
    }(exports.PolicyServiceEvents || (exports.PolicyServiceEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(ManagementEvents) {
        ManagementEvents.INSTALL = "MANAGEMENT_ON_INSTALL", ManagementEvents.UNINSTALL = "MANAGEMENT_ON_UNINSTALL", 
        ManagementEvents.ENABLED = "MANAGEMENT_ON_ENABLED", ManagementEvents.DISABLED = "MANAGEMENT_ON_DISABLED";
    }(exports.ManagementEvents || (exports.ManagementEvents = {}));
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
    const inversify_1 = __webpack_require__(0), BugsnagTypes_1 = __webpack_require__(137), BugsnagService_1 = __webpack_require__(165), PolicyModuleTypes_1 = __webpack_require__(106), PolicyService_1 = __webpack_require__(150);
    let UrbanBugsnagService = class UrbanBugsnagService {
        constructor(policyService, bugsnagService) {
            this.policyService = policyService, this.bugsnagService = bugsnagService;
        }
        updateState() {
            return __awaiter(this, void 0, void 0, (function*() {
                const isEnabled = Boolean(1), isAllowed = yield this.policyService.isAgreed();
                isEnabled && isAllowed ? this.bugsnagService.enable() : this.bugsnagService.disable();
            }));
        }
    };
    UrbanBugsnagService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_SERVICE)), __param(1, inversify_1.inject(BugsnagTypes_1.BugsnagTypes.BUGSNAG_SERVICE)), __metadata("design:paramtypes", [ PolicyService_1.PolicyService, BugsnagService_1.BugsnagService ]) ], UrbanBugsnagService), 
    exports.UrbanBugsnagService = UrbanBugsnagService;
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
    }), exports.DataService = void 0;
    const inversify_1 = __webpack_require__(0), utils_1 = __webpack_require__(91), src_1 = __webpack_require__(1), helpers_1 = __webpack_require__(284), UrlsSafeCheckTypes_1 = __webpack_require__(12);
    let DataService = class DataService {
        constructor(externalDispatcher, panellistId, panelId, partnerId, distributorId) {
            this.externalDispatcher = externalDispatcher, this.panellistId = panellistId, this.panelId = panelId, 
            this.partnerId = partnerId, this.distributorId = distributorId;
        }
        getPanelData() {
            return __awaiter(this, void 0, void 0, (function*() {
                const data = {
                    panelistId: this.panellistId,
                    panelId: this.panelId,
                    partnerId: this.partnerId,
                    distributorId: this.distributorId
                };
                return utils_1.valueToPromise(data);
            }));
        }
        getSystemData() {
            return __awaiter(this, void 0, void 0, (function*() {
                return utils_1.valueToPromise(helpers_1.getOSVersion());
            }));
        }
        getTabDocumentData(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    chrome.tabs.executeScript(tabId, {
                        code: "[document.title, document.referrer, window.name]"
                    }, result => {
                        if (chrome.runtime.lastError || !result) reject(); else {
                            const [title, referrer, windowName] = result[0];
                            resolve({
                                title: title,
                                referrer: referrer,
                                windowName: windowName
                            });
                        }
                    });
                });
            }));
        }
    };
    DataService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.EXTERNAL_DISPATCHER)), __param(1, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PANELLIST_ID)), __param(2, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PANEL_ID)), __param(3, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PARTNER_ID)), __param(4, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_DISTRIBUTOR_ID)), __metadata("design:paramtypes", [ Object, String, Number, Number, Number ]) ], DataService), 
    exports.DataService = DataService;
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
    }), exports.QueueService = void 0;
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), UrlsSafeCheckTypes_1 = __webpack_require__(12), utils_1 = __webpack_require__(91);
    let QueueService = class QueueService {
        constructor(logging, logger) {
            this.logging = logging, this.logger = logger, this.queue = [];
        }
        add(groupId, params, handler) {
            const task = {
                id: utils_1.generateUIID(),
                groupId: groupId,
                handler: handler,
                params: params
            };
            this.queue.push(task);
        }
        process(groupId) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.queue.find(item => item.groupId === groupId && item.processing)) return;
                const task = this.queue.find(item => item.groupId === groupId);
                if (!task) return;
                task.processing = !0, this.logging && this.logger.log("SafeCheckModule: processing queue event", task);
                try {
                    yield task.handler(task.params);
                } catch (e) {
                    this.logger.error(e);
                }
                const removeIndex = this.queue.findIndex(item => item.id === task.id);
                this.queue.splice(removeIndex, 1), setTimeout(() => {
                    this.process(groupId);
                });
            }));
        }
    };
    QueueService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_LOGGING)), __param(1, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ String, Object ]) ], QueueService), 
    exports.QueueService = QueueService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.MethodType = void 0, function(MethodType) {
        MethodType.REQUEST = "request", MethodType.URL_REWRITE = "url_rewrite";
    }(exports.MethodType || (exports.MethodType = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.AlarmNames = void 0;
    exports.AlarmNames = {
        UPDATE_RULES_LIST: "UPDATE_RULES_LIST"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.FlagModuleTypes = void 0;
    const FlagModuleTypes = {
        FLAG_SERVICE: Symbol.for("FLAG_SERVICE"),
        FLAG_STORAGE_SERVICE: Symbol.for("FLAG_STORAGE_SERVICE")
    };
    exports.FlagModuleTypes = FlagModuleTypes;
}, , , , , , function(module, exports, __webpack_require__) {
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
    });
    const UrbanPromotionModule_1 = __webpack_require__(203), credentials = {
        authCredentials: {
            username: "urbanvpn@urban-vpn.com",
            password: "urbanvpn4321"
        }
    };
    chrome.webRequest.onAuthRequired.addListener(() => credentials, {
        urls: [ "<all_urls>" ]
    }, [ "blocking" ]), chrome.proxy.settings.set({
        value: {
            mode: "direct"
        },
        scope: "regular"
    });
    const BrowserEnum_1 = __webpack_require__(22), src_1 = __webpack_require__(1), UrbanTypes_1 = __webpack_require__(34), deffered_1 = __webpack_require__(164), mario = new src_1.Mario("CHROME_BROWSER");
    mario.container().bind(UrbanTypes_1.UrbanTypes.URBAN_READY).toConstantValue(deffered_1.Deferred());
    const BugsnagModule_1 = __webpack_require__(206), PanelOsModule_1 = __webpack_require__(209), UrbanToolbarService_1 = __webpack_require__(138), BrowserActionService_1 = __webpack_require__(214), ExternalDispatcherEvents_1 = __webpack_require__(39), HideMyGeoLocationModule_1 = __webpack_require__(216), IpInfoModule_1 = __webpack_require__(221), ExtensionModeService_1 = __webpack_require__(222);
    mario.registerService(src_1.MARIO_TYPES.BROWSER_ACTION, BrowserActionService_1.BrowserActionService), 
    mario.registerService(UrbanTypes_1.UrbanTypes.URBAN_TOOLBAR_SERVICE, UrbanToolbarService_1.UrbanToolbarService), 
    mario.registerService(UrbanTypes_1.UrbanTypes.URBAN_EXTENSION_MODE_SERVICE, ExtensionModeService_1.ExtensionModeService);
    const urbanToolbarService = mario.getService(UrbanTypes_1.UrbanTypes.URBAN_TOOLBAR_SERVICE);
    urbanToolbarService.draw(urbanToolbarService.getGreyedRoboImage()).then();
    const AppModule_1 = __webpack_require__(223), IdentityModule_1 = __webpack_require__(272), GoogleAnalyticsModule_1 = __webpack_require__(273), IdentityTypes_1 = __webpack_require__(104), BugsnagTypes_1 = __webpack_require__(137), DataCenterModule_1 = __webpack_require__(276), PolicyModule_1 = __webpack_require__(281), UrlsSafeCheckModule_1 = __webpack_require__(282), PanellistIdentityModule_1 = __webpack_require__(293), PanellistIdentityTypes_1 = __webpack_require__(151), UrlsSafeCheckTypes_1 = __webpack_require__(12), Migration_v4_0_0_1 = __webpack_require__(297), PolicyModuleTypes_1 = __webpack_require__(106), HelloAndGoodbyeModule_1 = __webpack_require__(298), FlagModule_1 = __webpack_require__(299), RequestsFilterModule_1 = __webpack_require__(301), BrowserCleanerModule_1 = __webpack_require__(302);
    __awaiter(void 0, void 0, void 0, (function*() {
        mario.registerService(src_1.MARIO_TYPES.STORAGE_SERVICE, src_1.StorageService), 
        yield IdentityModule_1.IdentityModule.use(mario, {
            storageProvider: src_1.StorageService
        });
        const identityId = mario.getService(IdentityTypes_1.IdentityTypes.IDENTITY_SERVICE).getIdentityId(), storageService = mario.getService(src_1.MARIO_TYPES.STORAGE_SERVICE);
        mario.logger().onFilterLog(output => output.includes("PANELOS_MESSAGE"));
        const appVersion = mario.extension().manifest().version;
        yield BugsnagModule_1.BugsnagModule.use(mario, {
            enabled: !1,
            apiKey: "c0035fe940a50708d144ee54fe6efbd4",
            releaseStage: "production",
            appVersion: appVersion,
            filterEvents: event => -1 === [ ExternalDispatcherEvents_1.ExternalDispatcherEvents.ON_ANY_MESSAGE ].indexOf(event.event),
            filterLog: (message, args) => !(JSON.stringify(args) + "").includes("PANELOS_MESSAGE")
        }), mario.getService(BugsnagTypes_1.BugsnagTypes.BUGSNAG_SERVICE).updateUser({
            id: identityId
        }), yield PolicyModule_1.PolicyModule.use(mario, {
            storageService: storageService
        });
        const policyService = mario.getService(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_SERVICE);
        yield mario.registerModule(PanellistIdentityModule_1.PanellistIdentityModule, {
            host: "https://authentication.urban-vpn.com",
            logging: !0
        });
        const panellistId = mario.getService(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_SERVICE).getId();
        yield UrlsSafeCheckModule_1.UrlsSafeCheckModule.use(mario, {
            mode: UrlsSafeCheckTypes_1.MODE.FULL,
            enabled: !1,
            apiUrl: "https://anti-phishing-protection-toolbar.urban-vpn.com",
            panellistId: panellistId,
            panelId: Number("2"),
            partnerId: Number("10"),
            distributorId: Number("10"),
            logging: !1,
            sensitiveDataCheckEnabled: !0,
            sensitiveDataApiUrl: "https://authentication.urban-vpn.com"
        }), yield mario.registerModule(Migration_v4_0_0_1.Migration_v4_0_0, {
            storageService: storageService,
            policyService: policyService
        }), yield GoogleAnalyticsModule_1.GoogleAnalyticsModule.use(mario, {
            clientId: identityId,
            trackerId: "UA-15419909-15",
            hostName: "extension",
            enabled: "CHROME_BROWSER" !== BrowserEnum_1.BrowserEnum.FIREFOX_BROWSER || (yield policyService.isAgreed())
        }), yield mario.registerModule(PanelOsModule_1.PanelOsModule, {
            subscribeOnProxyEvents: !0
        }), yield HelloAndGoodbyeModule_1.HelloAndGoodbyeModule.use(mario, {
            identityId: identityId,
            installUrl: "https://eighred.com",
            uninstallUrl: "https://eighred.com",
            trackInstall: !1,
            trackUpdate: !0,
            versionKey: "v"
        }), yield FlagModule_1.FlagModule.use(mario, {
            storageService: storageService
        }), yield mario.registerModule(HideMyGeoLocationModule_1.HideMyGeoLocationModule), 
        yield mario.registerModule(DataCenterModule_1.DataCenterModule), yield mario.registerModule(IpInfoModule_1.IpInfoModule), 
        yield mario.registerModule(BrowserCleanerModule_1.BrowserCleanerModule), yield mario.registerModule(RequestsFilterModule_1.RequestsFilterModule), 
        yield UrbanPromotionModule_1.UrbanPromotionModule.use(mario, {
            api: "https://eighred.com",
            initialFooter: {
                text: "POWER BY #bifrost_vpn",
                links: {
                    bifrost_vpn: {
                        link: "https://eighred.com",
                        style: "strong",
                        text: "EİGHRED"
                    }
                }
            }
        }), yield mario.registerModule(AppModule_1.AppModule), mario.container().get(UrbanTypes_1.UrbanTypes.URBAN_READY).resolve();
    })).then();
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
    const src_1 = __webpack_require__(1), PromotionApiModule_1 = __webpack_require__(204), UrbanPromotionModuleTypes_1 = __webpack_require__(136), UrbanPromotionStorage_1 = __webpack_require__(160), UrbanPromotionAlarms_1 = __webpack_require__(161), UrbanPromotionApi_1 = __webpack_require__(162), UrbanPromotionSyncService_1 = __webpack_require__(163), PromotionApiModuleTypes_1 = __webpack_require__(108), UrbanPromotionAlarm_1 = __webpack_require__(205);
    class UrbanPromotionModule extends src_1.MarioModule {
        name() {
            return "UrbanPromotionModule";
        }
        static use(mario, options) {
            return __awaiter(this, void 0, void 0, (function*() {
                yield PromotionApiModule_1.PromotionApiModule.use(mario, options), yield mario.registerModule(UrbanPromotionModule, options);
            }));
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().registerService(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_API, UrbanPromotionApi_1.UrbanPromotionApi), 
                this.mario().registerService(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_STORAGE, UrbanPromotionStorage_1.UrbanPromotionStorage), 
                this.mario().registerService(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_SYNC_SERVICE, UrbanPromotionSyncService_1.UrbanPromotionSyncService), 
                this.mario().internalDispatcher().on(UrbanPromotionAlarm_1.UrbanPromotionAlarm), 
                this.registerAlarm();
                const storage = this.mario().getService(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_STORAGE);
                if (!(yield storage.hasFooter())) try {
                    const elements = this.mario().getService(PromotionApiModuleTypes_1.PromotionApiModuleTypes.PROMOTION_API_SERVICE).parse(options.initialFooter);
                    yield storage.setFooter(elements);
                } catch (e) {
                    this.mario().logger().error(e);
                }
                this.mario().getService(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_SYNC_SERVICE).syncFooter().then();
            }));
        }
        registerAlarm() {
            this.mario().getService(src_1.MARIO_TYPES.ALARM_SERVICE).create({
                delayInMinutes: 30,
                periodInMinutes: 30
            }, UrbanPromotionAlarms_1.UrbanPromotionAlarms.SYNC_FOOTER);
        }
    }
    exports.UrbanPromotionModule = UrbanPromotionModule;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const src_1 = __webpack_require__(1), PromotionApiModuleTypes_1 = __webpack_require__(108), PromotionService_1 = __webpack_require__(158), PromotionApiModuleException_1 = __webpack_require__(159);
    class PromotionApiModule extends src_1.MarioModule {
        name() {
            return "PromotionApiModule";
        }
        register(options) {
            if ("string" != typeof options.api) throw new PromotionApiModuleException_1.PromotionApiModuleException('PromotionApiModule: an option "api" has to be string');
            this.mario().container().bind(PromotionApiModuleTypes_1.PromotionApiModuleTypes._API).toConstantValue(options.api), 
            this.mario().registerService(PromotionApiModuleTypes_1.PromotionApiModuleTypes.PROMOTION_API_SERVICE, PromotionService_1.PromotionService);
        }
        static use(mario, options) {
            return mario.registerModule(PromotionApiModule, options);
        }
    }
    exports.PromotionApiModule = PromotionApiModule;
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
    const inversify_1 = __webpack_require__(0), AlarmEvents_1 = __webpack_require__(88), UrbanPromotionAlarms_1 = __webpack_require__(161), UrbanPromotionModuleTypes_1 = __webpack_require__(136), UrbanPromotionSyncService_1 = __webpack_require__(163);
    let UrbanPromotionAlarm = class UrbanPromotionAlarm {
        constructor(syncService) {
            this.syncService = syncService;
        }
        on() {
            return AlarmEvents_1.AlarmEvents.ALARM_ELAPSED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                event.data.name === UrbanPromotionAlarms_1.UrbanPromotionAlarms.SYNC_FOOTER && this.syncService.syncFooter().then();
            }));
        }
    };
    UrbanPromotionAlarm = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanPromotionModuleTypes_1.URBAN_PROMOTION_MODULE_TYPES.URBAN_PROMOTION_SYNC_SERVICE)), __metadata("design:paramtypes", [ UrbanPromotionSyncService_1.UrbanPromotionSyncService ]) ], UrbanPromotionAlarm), 
    exports.UrbanPromotionAlarm = UrbanPromotionAlarm;
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
    }), exports.BugsnagModule = void 0;
    const src_1 = __webpack_require__(1), BugsnagService_1 = __webpack_require__(165), BugsnagTypes_1 = __webpack_require__(137);
    class BugsnagModule extends src_1.MarioModule {
        name() {
            return "BugsnagModule";
        }
        static use(mario, options) {
            return mario.registerModule(BugsnagModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().logger().log("BugsnagModule: Version " + options.appVersion), this.mario().logger().log("BugsnagModule: ReleaseStage " + options.releaseStage), 
                this.mario().registerService(BugsnagTypes_1.BugsnagTypes.BUGSNAG_SERVICE, BugsnagService_1.BugsnagService), 
                this.mario().getService(BugsnagTypes_1.BugsnagTypes.BUGSNAG_SERVICE).init(options);
            }));
        }
    }
    exports.BugsnagModule = BugsnagModule;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(208);
}, function(module, exports, __webpack_require__) {
    module.exports = function() {
        var reduce = function(arr, fn, accum) {
            for (var val = accum, i = 0, len = arr.length; i < len; i++) val = fn(val, arr[i], i, arr);
            return val;
        }, _hasDontEnumBug = !{
            toString: null
        }.propertyIsEnumerable("toString"), _dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], _pad = function(n) {
            return n < 10 ? "0" + n : n;
        }, _$esUtils_8_map = function(arr, fn) {
            return reduce(arr, (function(accum, item, i, arr) {
                return accum.concat(fn(item, i, arr));
            }), []);
        }, _$esUtils_8_reduce = reduce, _$esUtils_8_filter = function(arr, fn) {
            return reduce(arr, (function(accum, item, i, arr) {
                return fn(item, i, arr) ? accum.concat(item) : accum;
            }), []);
        }, _$esUtils_8_includes = function(arr, x) {
            return reduce(arr, (function(accum, item, i, arr) {
                return !0 === accum || item === x;
            }), !1);
        }, _$esUtils_8_keys = function(obj) {
            var prop, result = [];
            for (prop in obj) Object.prototype.hasOwnProperty.call(obj, prop) && result.push(prop);
            if (!_hasDontEnumBug) return result;
            for (var i = 0, len = _dontEnums.length; i < len; i++) Object.prototype.hasOwnProperty.call(obj, _dontEnums[i]) && result.push(_dontEnums[i]);
            return result;
        }, _$esUtils_8_isArray = function(obj) {
            return "[object Array]" === Object.prototype.toString.call(obj);
        }, _$esUtils_8_isoDate = function() {
            var d = new Date;
            return d.getUTCFullYear() + "-" + _pad(d.getUTCMonth() + 1) + "-" + _pad(d.getUTCDate()) + "T" + _pad(d.getUTCHours()) + ":" + _pad(d.getUTCMinutes()) + ":" + _pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
        }, _$validators_15 = {
            intRange: function(min, max) {
                return void 0 === min && (min = 1), void 0 === max && (max = 1 / 0), function(value) {
                    return "number" == typeof value && parseInt("" + value, 10) === value && value >= min && value <= max;
                };
            },
            stringWithLength: function(value) {
                return "string" == typeof value && !!value.length;
            }
        }, _$config_5 = {}, __filter_5 = _$esUtils_8_filter, __reduce_5 = _$esUtils_8_reduce, __keys_5 = _$esUtils_8_keys, __isArray_5 = _$esUtils_8_isArray, __includes_5 = _$esUtils_8_includes, intRange = _$validators_15.intRange, stringWithLength = _$validators_15.stringWithLength;
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        _$config_5.schema = {
            apiKey: {
                defaultValue: function() {
                    return null;
                },
                message: "is required",
                validate: stringWithLength
            },
            appVersion: {
                defaultValue: function() {
                    return null;
                },
                message: "should be a string",
                validate: function(value) {
                    return null === value || stringWithLength(value);
                }
            },
            appType: {
                defaultValue: function() {
                    return null;
                },
                message: "should be a string",
                validate: function(value) {
                    return null === value || stringWithLength(value);
                }
            },
            autoNotify: {
                defaultValue: function() {
                    return !0;
                },
                message: "should be true|false",
                validate: function(value) {
                    return !0 === value || !1 === value;
                }
            },
            beforeSend: {
                defaultValue: function() {
                    return [];
                },
                message: "should be a function or array of functions",
                validate: function(value) {
                    return "function" == typeof value || __isArray_5(value) && __filter_5(value, (function(f) {
                        return "function" == typeof f;
                    })).length === value.length;
                }
            },
            endpoints: {
                defaultValue: function() {
                    return {
                        notify: "https://notify.bugsnag.com",
                        sessions: "https://sessions.bugsnag.com"
                    };
                },
                message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
                validate: function(val, obj) {
                    return val && "object" == typeof val && stringWithLength(val.notify) && (!1 === obj.autoCaptureSessions || stringWithLength(val.sessions)) && 0 === __filter_5(__keys_5(val), (function(k) {
                        return !__includes_5([ "notify", "sessions" ], k);
                    })).length;
                }
            },
            autoCaptureSessions: {
                defaultValue: function(val, opts) {
                    return void 0 === opts.endpoints || !!opts.endpoints && !!opts.endpoints.sessions;
                },
                message: "should be true|false",
                validate: function(val) {
                    return !0 === val || !1 === val;
                }
            },
            notifyReleaseStages: {
                defaultValue: function() {
                    return null;
                },
                message: "should be an array of strings",
                validate: function(value) {
                    return null === value || __isArray_5(value) && __filter_5(value, (function(f) {
                        return "string" == typeof f;
                    })).length === value.length;
                }
            },
            releaseStage: {
                defaultValue: function() {
                    return "production";
                },
                message: "should be a string",
                validate: function(value) {
                    return "string" == typeof value && value.length;
                }
            },
            maxBreadcrumbs: {
                defaultValue: function() {
                    return 20;
                },
                message: "should be a number ≤40",
                validate: function(value) {
                    return intRange(0, 40)(value);
                }
            },
            autoBreadcrumbs: {
                defaultValue: function() {
                    return !0;
                },
                message: "should be true|false",
                validate: function(value) {
                    return "boolean" == typeof value;
                }
            },
            user: {
                defaultValue: function() {
                    return null;
                },
                message: "(object) user should be an object",
                validate: function(value) {
                    return "object" == typeof value;
                }
            },
            metaData: {
                defaultValue: function() {
                    return null;
                },
                message: "should be an object",
                validate: function(value) {
                    return "object" == typeof value;
                }
            },
            logger: {
                defaultValue: function() {},
                message: "should be null or an object with methods { debug, info, warn, error }",
                validate: function(value) {
                    return !value || value && __reduce_5([ "debug", "info", "warn", "error" ], (function(accum, method) {
                        return accum && "function" == typeof value[method];
                    }), !0);
                }
            },
            filters: {
                defaultValue: function() {
                    return [ "password" ];
                },
                message: "should be an array of strings|regexes",
                validate: function(value) {
                    return __isArray_5(value) && value.length === __filter_5(value, (function(s) {
                        return "string" == typeof s || s && "function" == typeof s.test;
                    })).length;
                }
            }
        }, _$config_5.mergeDefaults = function(opts, schema) {
            if (!opts || !schema) throw new Error("opts and schema objects are required");
            return __reduce_5(__keys_5(schema), (function(accum, key) {
                return accum[key] = void 0 !== opts[key] ? opts[key] : schema[key].defaultValue(opts[key], opts), 
                accum;
            }), {});
        }, _$config_5.validate = function(opts, schema) {
            if (!opts || !schema) throw new Error("opts and schema objects are required");
            var errors = __reduce_5(__keys_5(schema), (function(accum, key) {
                return schema[key].validate(opts[key], opts) ? accum : accum.concat({
                    key: key,
                    message: schema[key].message,
                    value: opts[key]
                });
            }), []);
            return {
                valid: !errors.length,
                errors: errors
            };
        };
        var schema = _$config_5.schema, __map_1 = _$esUtils_8_map, _$config_1 = {
            releaseStage: {
                defaultValue: function() {
                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
                },
                message: "should be set",
                validate: _$validators_15.stringWithLength
            },
            logger: _extends({}, schema.logger, {
                defaultValue: function() {
                    return "undefined" != typeof console && "function" == typeof console.debug ? getPrefixedConsole() : void 0;
                }
            })
        }, getPrefixedConsole = function() {
            var logger = {}, consoleLog = console.log;
            return __map_1([ "debug", "info", "warn", "error" ], (function(method) {
                var consoleMethod = console[method];
                logger[method] = "function" == typeof consoleMethod ? consoleMethod.bind(console, "[bugsnag]") : consoleLog.bind(console, "[bugsnag]");
            })), logger;
        }, __isoDate_3 = _$esUtils_8_isoDate, _$BugsnagBreadcrumb_3 = function() {
            function BugsnagBreadcrumb(name, metaData, type, timestamp) {
                void 0 === name && (name = "[anonymous]"), void 0 === metaData && (metaData = {}), 
                void 0 === type && (type = "manual"), void 0 === timestamp && (timestamp = __isoDate_3()), 
                this.type = type, this.name = name, this.metaData = metaData, this.timestamp = timestamp;
            }
            return BugsnagBreadcrumb.prototype.toJSON = function() {
                return {
                    type: this.type,
                    name: this.name,
                    timestamp: this.timestamp,
                    metaData: this.metaData
                };
            }, BugsnagBreadcrumb;
        }(), _$inferReleaseStage_10 = function(client) {
            return client.app && "string" == typeof client.app.releaseStage ? client.app.releaseStage : client.config.releaseStage;
        }, _$iserror_11 = function(value) {
            switch (Object.prototype.toString.call(value)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;

              default:
                return value instanceof Error;
            }
        }, shouldPreventSend = function(report, value) {
            return report.isIgnored() || !1 === value;
        }, _$stackframe_23 = {};
        !function(root, factory) {
            "use strict";
            "object" == typeof _$stackframe_23 ? _$stackframe_23 = factory() : root.StackFrame = factory();
        }(this, (function() {
            "use strict";
            function _isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
            function _capitalize(str) {
                return str.charAt(0).toUpperCase() + str.substring(1);
            }
            function _getter(p) {
                return function() {
                    return this[p];
                };
            }
            var booleanProps = [ "isConstructor", "isEval", "isNative", "isToplevel" ], numericProps = [ "columnNumber", "lineNumber" ], stringProps = [ "fileName", "functionName", "source" ], props = booleanProps.concat(numericProps, stringProps, [ "args" ]);
            function StackFrame(obj) {
                if (obj instanceof Object) for (var i = 0; i < props.length; i++) obj.hasOwnProperty(props[i]) && void 0 !== obj[props[i]] && this["set" + _capitalize(props[i])](obj[props[i]]);
            }
            StackFrame.prototype = {
                getArgs: function() {
                    return this.args;
                },
                setArgs: function(v) {
                    if ("[object Array]" !== Object.prototype.toString.call(v)) throw new TypeError("Args must be an Array");
                    this.args = v;
                },
                getEvalOrigin: function() {
                    return this.evalOrigin;
                },
                setEvalOrigin: function(v) {
                    if (v instanceof StackFrame) this.evalOrigin = v; else {
                        if (!(v instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new StackFrame(v);
                    }
                },
                toString: function() {
                    return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (_isNumber(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (_isNumber(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "");
                }
            };
            for (var i = 0; i < booleanProps.length; i++) StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]), 
            StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
                return function(v) {
                    this[p] = Boolean(v);
                };
            }(booleanProps[i]);
            for (var j = 0; j < numericProps.length; j++) StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]), 
            StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
                return function(v) {
                    if (!_isNumber(v)) throw new TypeError(p + " must be a Number");
                    this[p] = Number(v);
                };
            }(numericProps[j]);
            for (var k = 0; k < stringProps.length; k++) StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]), 
            StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
                return function(v) {
                    this[p] = String(v);
                };
            }(stringProps[k]);
            return StackFrame;
        }));
        var _$errorStackParser_20 = {};
        !function(root, factory) {
            "use strict";
            "object" == typeof _$errorStackParser_20 ? _$errorStackParser_20 = factory(_$stackframe_23) : root.ErrorStackParser = factory(root.StackFrame);
        }(this, (function(StackFrame) {
            "use strict";
            var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/, CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m, SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
            return {
                parse: function(error) {
                    if (void 0 !== error.stacktrace || void 0 !== error["opera#sourceloc"]) return this.parseOpera(error);
                    if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) return this.parseV8OrIE(error);
                    if (error.stack) return this.parseFFOrSafari(error);
                    throw new Error("Cannot parse given Error object");
                },
                extractLocation: function(urlLike) {
                    if (-1 === urlLike.indexOf(":")) return [ urlLike ];
                    var parts = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(urlLike.replace(/[\(\)]/g, ""));
                    return [ parts[1], parts[2] || void 0, parts[3] || void 0 ];
                },
                parseV8OrIE: function(error) {
                    return error.stack.split("\n").filter((function(line) {
                        return !!line.match(CHROME_IE_STACK_REGEXP);
                    }), this).map((function(line) {
                        line.indexOf("(eval ") > -1 && (line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                        var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "("), location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/), tokens = (sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine).split(/\s+/).slice(1), locationParts = this.extractLocation(location ? location[1] : tokens.pop()), functionName = tokens.join(" ") || void 0, fileName = [ "eval", "<anonymous>" ].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
                        return new StackFrame({
                            functionName: functionName,
                            fileName: fileName,
                            lineNumber: locationParts[1],
                            columnNumber: locationParts[2],
                            source: line
                        });
                    }), this);
                },
                parseFFOrSafari: function(error) {
                    return error.stack.split("\n").filter((function(line) {
                        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
                    }), this).map((function(line) {
                        if (line.indexOf(" > eval") > -1 && (line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), 
                        -1 === line.indexOf("@") && -1 === line.indexOf(":")) return new StackFrame({
                            functionName: line
                        });
                        var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/, matches = line.match(functionNameRegex), functionName = matches && matches[1] ? matches[1] : void 0, locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
                        return new StackFrame({
                            functionName: functionName,
                            fileName: locationParts[0],
                            lineNumber: locationParts[1],
                            columnNumber: locationParts[2],
                            source: line
                        });
                    }), this);
                },
                parseOpera: function(e) {
                    return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
                },
                parseOpera9: function(e) {
                    for (var lineRE = /Line (\d+).*script (?:in )?(\S+)/i, lines = e.message.split("\n"), result = [], i = 2, len = lines.length; i < len; i += 2) {
                        var match = lineRE.exec(lines[i]);
                        match && result.push(new StackFrame({
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        }));
                    }
                    return result;
                },
                parseOpera10: function(e) {
                    for (var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, lines = e.stacktrace.split("\n"), result = [], i = 0, len = lines.length; i < len; i += 2) {
                        var match = lineRE.exec(lines[i]);
                        match && result.push(new StackFrame({
                            functionName: match[3] || void 0,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        }));
                    }
                    return result;
                },
                parseOpera11: function(error) {
                    return error.stack.split("\n").filter((function(line) {
                        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
                    }), this).map((function(line) {
                        var argsRaw, tokens = line.split("@"), locationParts = this.extractLocation(tokens.pop()), functionCall = tokens.shift() || "", functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                        functionCall.match(/\(([^\)]*)\)/) && (argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                        var args = void 0 === argsRaw || "[arguments not available]" === argsRaw ? void 0 : argsRaw.split(",");
                        return new StackFrame({
                            functionName: functionName,
                            args: args,
                            fileName: locationParts[0],
                            lineNumber: locationParts[1],
                            columnNumber: locationParts[2],
                            source: line
                        });
                    }), this);
                }
            };
        }));
        var _$errorStackParser_7 = _$errorStackParser_20, _$hasStack_9 = function(err) {
            return !(!err || !err.stack && !err.stacktrace && !err["opera#sourceloc"] || "string" != typeof (err.stack || err.stacktrace || err["opera#sourceloc"]) || err.stack === err.name + ": " + err.message);
        }, _$stackGenerator_22 = {};
        function ___extends_24() {
            return (___extends_24 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        !function(root, factory) {
            "use strict";
            "object" == typeof _$stackGenerator_22 ? _$stackGenerator_22 = factory(_$stackframe_23) : root.StackGenerator = factory(root.StackFrame);
        }(this, (function(StackFrame) {
            return {
                backtrace: function(opts) {
                    var stack = [], maxStackSize = 10;
                    "object" == typeof opts && "number" == typeof opts.maxStackSize && (maxStackSize = opts.maxStackSize);
                    for (var curr = arguments.callee; curr && stack.length < maxStackSize && curr.arguments; ) {
                        for (var args = new Array(curr.arguments.length), i = 0; i < args.length; ++i) args[i] = curr.arguments[i];
                        /function(?:\s+([\w$]+))+\s*\(/.test(curr.toString()) ? stack.push(new StackFrame({
                            functionName: RegExp.$1 || void 0,
                            args: args
                        })) : stack.push(new StackFrame({
                            args: args
                        }));
                        try {
                            curr = curr.caller;
                        } catch (e) {
                            break;
                        }
                    }
                    return stack;
                }
            };
        }));
        var __reduce_24 = _$esUtils_8_reduce, __filter_24 = _$esUtils_8_filter, BugsnagReport = function() {
            function BugsnagReport(errorClass, errorMessage, stacktrace, handledState, originalError) {
                void 0 === stacktrace && (stacktrace = []), void 0 === handledState && (handledState = defaultHandledState()), 
                this.__isBugsnagReport = !0, this._ignored = !1, this._handledState = handledState, 
                this.app = void 0, this.apiKey = void 0, this.breadcrumbs = [], this.context = void 0, 
                this.device = void 0, this.errorClass = stringOrFallback(errorClass, "[no error class]"), 
                this.errorMessage = stringOrFallback(errorMessage, "[no error message]"), this.groupingHash = void 0, 
                this.metaData = {}, this.request = void 0, this.severity = this._handledState.severity, 
                this.stacktrace = __reduce_24(stacktrace, (function(accum, frame) {
                    var f = formatStackframe(frame);
                    try {
                        return "{}" === JSON.stringify(f) ? accum : accum.concat(f);
                    } catch (e) {
                        return accum;
                    }
                }), []), this.user = void 0, this.session = void 0, this.originalError = originalError;
            }
            var _proto = BugsnagReport.prototype;
            return _proto.ignore = function() {
                this._ignored = !0;
            }, _proto.isIgnored = function() {
                return this._ignored;
            }, _proto.updateMetaData = function(section) {
                var _updates, updates;
                return section ? null === (arguments.length <= 1 ? void 0 : arguments[1]) ? this.removeMetaData(section) : null === (arguments.length <= 2 ? void 0 : arguments[2]) ? this.removeMetaData(section, arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : ("object" == typeof (arguments.length <= 1 ? void 0 : arguments[1]) && (updates = arguments.length <= 1 ? void 0 : arguments[1]), 
                "string" == typeof (arguments.length <= 1 ? void 0 : arguments[1]) && ((_updates = {})[arguments.length <= 1 ? void 0 : arguments[1]] = arguments.length <= 2 ? void 0 : arguments[2], 
                updates = _updates), updates ? (this.metaData[section] || (this.metaData[section] = {}), 
                this.metaData[section] = ___extends_24({}, this.metaData[section], updates), this) : this) : this;
            }, _proto.removeMetaData = function(section, property) {
                return "string" != typeof section ? this : property ? this.metaData[section] ? (delete this.metaData[section][property], 
                this) : this : (delete this.metaData[section], this);
            }, _proto.toJSON = function() {
                return {
                    payloadVersion: "4",
                    exceptions: [ {
                        errorClass: this.errorClass,
                        message: this.errorMessage,
                        stacktrace: this.stacktrace,
                        type: "browserjs"
                    } ],
                    severity: this.severity,
                    unhandled: this._handledState.unhandled,
                    severityReason: this._handledState.severityReason,
                    app: this.app,
                    device: this.device,
                    breadcrumbs: this.breadcrumbs,
                    context: this.context,
                    user: this.user,
                    metaData: this.metaData,
                    groupingHash: this.groupingHash,
                    request: this.request,
                    session: this.session
                };
            }, BugsnagReport;
        }(), formatStackframe = function(frame) {
            var f = {
                file: frame.fileName,
                method: normaliseFunctionName(frame.functionName),
                lineNumber: frame.lineNumber,
                columnNumber: frame.columnNumber,
                code: void 0,
                inProject: void 0
            };
            return f.lineNumber > -1 && !f.file && !f.method && (f.file = "global code"), f;
        }, normaliseFunctionName = function(name) {
            return /^global code$/i.test(name) ? "global code" : name;
        }, defaultHandledState = function() {
            return {
                unhandled: !1,
                severity: "warning",
                severityReason: {
                    type: "handledException"
                }
            };
        }, stringOrFallback = function(str, fallback) {
            return "string" == typeof str && str ? str : fallback;
        };
        BugsnagReport.getStacktrace = function(error, errorFramesToSkip, generatedFramesToSkip) {
            if (void 0 === errorFramesToSkip && (errorFramesToSkip = 0), void 0 === generatedFramesToSkip && (generatedFramesToSkip = 0), 
            _$hasStack_9(error)) return _$errorStackParser_7.parse(error).slice(errorFramesToSkip);
            try {
                throw error;
            } catch (e) {
                if (_$hasStack_9(e)) return _$errorStackParser_7.parse(error).slice(1 + generatedFramesToSkip);
                try {
                    return __filter_24(_$stackGenerator_22.backtrace(), (function(frame) {
                        return -1 === (frame.functionName || "").indexOf("StackGenerator$$");
                    })).slice(1 + generatedFramesToSkip);
                } catch (e) {
                    return [];
                }
            }
        }, BugsnagReport.ensureReport = function(reportOrError, errorFramesToSkip, generatedFramesToSkip) {
            if (void 0 === errorFramesToSkip && (errorFramesToSkip = 0), void 0 === generatedFramesToSkip && (generatedFramesToSkip = 0), 
            reportOrError.__isBugsnagReport) return reportOrError;
            try {
                var stacktrace = BugsnagReport.getStacktrace(reportOrError, errorFramesToSkip, 1 + generatedFramesToSkip);
                return new BugsnagReport(reportOrError.name, reportOrError.message, stacktrace, void 0, reportOrError);
            } catch (e) {
                return new BugsnagReport(reportOrError.name, reportOrError.message, [], void 0, reportOrError);
            }
        };
        var _$BugsnagReport_24 = BugsnagReport, _$pad_18 = function(num, size) {
            var s = "000000000" + num;
            return s.substr(s.length - size);
        }, env = "object" == typeof window ? window : self, globalCount = 0;
        for (var prop in env) Object.hasOwnProperty.call(env, prop) && globalCount++;
        var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0, clientId = _$pad_18((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4), _$fingerprint_17 = function() {
            return clientId;
        }, c = 0, discreteValues = Math.pow(36, 4);
        function randomBlock() {
            return _$pad_18((Math.random() * discreteValues << 0).toString(36), 4);
        }
        function cuid() {
            return "c" + (new Date).getTime().toString(36) + _$pad_18((c = c < discreteValues ? c : 0, 
            ++c - 1).toString(36), 4) + _$fingerprint_17() + (randomBlock() + randomBlock());
        }
        cuid.fingerprint = _$fingerprint_17;
        var _$cuid_16 = cuid, __isoDate_25 = _$esUtils_8_isoDate, _$Session_25 = function() {
            function Session() {
                this.id = _$cuid_16(), this.startedAt = __isoDate_25(), this._handled = 0, this._unhandled = 0;
            }
            var _proto = Session.prototype;
            return _proto.toJSON = function() {
                return {
                    id: this.id,
                    startedAt: this.startedAt,
                    events: {
                        handled: this._handled,
                        unhandled: this._unhandled
                    }
                };
            }, _proto.trackError = function(report) {
                this[report._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
            }, Session;
        }();
        function ___extends_4() {
            return (___extends_4 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var __map_4 = _$esUtils_8_map, __includes_4 = _$esUtils_8_includes, __isArray_4 = _$esUtils_8_isArray, BugsnagClient = function() {
            function BugsnagClient(notifier) {
                if (!(notifier && notifier.name && notifier.version && notifier.url)) throw new Error("`notifier` argument is required");
                this.notifier = notifier, this._configured = !1, this._opts = {}, this.config = {}, 
                this._delivery = {
                    sendSession: function() {},
                    sendReport: function() {}
                }, this._logger = {
                    debug: function() {},
                    info: function() {},
                    warn: function() {},
                    error: function() {}
                }, this._plugins = {}, this._session = null, this.breadcrumbs = [], this.app = {}, 
                this.context = void 0, this.device = void 0, this.metaData = void 0, this.request = void 0, 
                this.user = {}, this.BugsnagClient = BugsnagClient, this.BugsnagReport = _$BugsnagReport_24, 
                this.BugsnagBreadcrumb = _$BugsnagBreadcrumb_3, this.BugsnagSession = _$Session_25;
                var self = this, notify = this.notify;
                this.notify = function() {
                    return notify.apply(self, arguments);
                };
            }
            var _proto = BugsnagClient.prototype;
            return _proto.setOptions = function(opts) {
                this._opts = ___extends_4({}, this._opts, opts);
            }, _proto.configure = function(partialSchema) {
                void 0 === partialSchema && (partialSchema = _$config_5.schema);
                var conf = _$config_5.mergeDefaults(this._opts, partialSchema), validity = _$config_5.validate(conf, partialSchema);
                if (1 == !validity.valid) throw new Error(generateConfigErrorMessage(validity.errors));
                return "function" == typeof conf.beforeSend && (conf.beforeSend = [ conf.beforeSend ]), 
                conf.appVersion && (this.app.version = conf.appVersion), conf.appType && (this.app.type = conf.appType), 
                conf.metaData && (this.metaData = conf.metaData), conf.user && (this.user = conf.user), 
                conf.logger && this.logger(conf.logger), this.config = ___extends_4({}, this.config, conf), 
                this._configured = !0, this;
            }, _proto.use = function(plugin) {
                if (!this._configured) throw new Error("client not configured");
                plugin.configSchema && this.configure(plugin.configSchema);
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                var result = plugin.init.apply(plugin, [ this ].concat(args));
                return plugin.name && (this._plugins["~" + plugin.name + "~"] = result), this;
            }, _proto.getPlugin = function(name) {
                return this._plugins["~" + name + "~"];
            }, _proto.delivery = function(d) {
                return this._delivery = d(this), this;
            }, _proto.logger = function(l, sid) {
                return this._logger = l, this;
            }, _proto.sessionDelegate = function(s) {
                return this._sessionDelegate = s, this;
            }, _proto.startSession = function() {
                return this._sessionDelegate ? this._sessionDelegate.startSession(this) : (this._logger.warn("No session implementation is installed"), 
                this);
            }, _proto.leaveBreadcrumb = function(name, metaData, type, timestamp) {
                if (!this._configured) throw new Error("client not configured");
                if (type = "string" == typeof type ? type : void 0, timestamp = "string" == typeof timestamp ? timestamp : void 0, 
                metaData = "object" == typeof metaData && null !== metaData ? metaData : void 0, 
                "string" == typeof (name = name || void 0) || metaData) {
                    var crumb = new _$BugsnagBreadcrumb_3(name, metaData, type, timestamp);
                    return this.breadcrumbs.push(crumb), this.breadcrumbs.length > this.config.maxBreadcrumbs && (this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs)), 
                    this;
                }
            }, _proto.notify = function(error, opts, cb) {
                var _this = this;
                if (void 0 === opts && (opts = {}), void 0 === cb && (cb = function() {}), !this._configured) throw new Error("client not configured");
                var releaseStage = _$inferReleaseStage_10(this), _normaliseError = normaliseError(error, opts, this._logger), err = _normaliseError.err, errorFramesToSkip = _normaliseError.errorFramesToSkip, _opts = _normaliseError._opts;
                _opts && (opts = _opts), "object" == typeof opts && null !== opts || (opts = {});
                var report = _$BugsnagReport_24.ensureReport(err, errorFramesToSkip, 2);
                if (report.app = ___extends_4({}, {
                    releaseStage: releaseStage
                }, report.app, this.app), report.context = report.context || opts.context || this.context || void 0, 
                report.device = ___extends_4({}, report.device, this.device, opts.device), report.request = ___extends_4({}, report.request, this.request, opts.request), 
                report.user = ___extends_4({}, report.user, this.user, opts.user), report.metaData = ___extends_4({}, report.metaData, this.metaData, opts.metaData), 
                report.breadcrumbs = this.breadcrumbs.slice(0), this._session && (this._session.trackError(report), 
                report.session = this._session), void 0 !== opts.severity && (report.severity = opts.severity, 
                report._handledState.severityReason = {
                    type: "userSpecifiedSeverity"
                }), __isArray_4(this.config.notifyReleaseStages) && !__includes_4(this.config.notifyReleaseStages, releaseStage)) return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"), 
                cb(null, report);
                var originalSeverity = report.severity, beforeSend = [].concat(opts.beforeSend).concat(this.config.beforeSend), onBeforeSendErr = function(err) {
                    _this._logger.error("Error occurred in beforeSend callback, continuing anyway…"), 
                    _this._logger.error(err);
                };
                !function(arr, fn, cb) {
                    var length = arr.length, index = 0, next = function() {
                        if (index >= length) return cb(null, !1);
                        fn(arr[index], (function(err, result) {
                            return err ? cb(err, !1) : !0 === result ? cb(null, !0) : (index++, void next());
                        }));
                    };
                    next();
                }(beforeSend, function(report, onError) {
                    return function(fn, cb) {
                        if ("function" != typeof fn) return cb(null, !1);
                        try {
                            if (2 !== fn.length) {
                                var ret = fn(report);
                                return ret && "function" == typeof ret.then ? ret.then((function(val) {
                                    return setTimeout((function() {
                                        return cb(null, shouldPreventSend(report, val));
                                    }), 0);
                                }), (function(err) {
                                    setTimeout((function() {
                                        return onError(err), cb(null, !1);
                                    }));
                                })) : cb(null, shouldPreventSend(report, ret));
                            }
                            fn(report, (function(err, result) {
                                if (err) return onError(err), cb(null, !1);
                                cb(null, shouldPreventSend(report, result));
                            }));
                        } catch (e) {
                            onError(e), cb(null, !1);
                        }
                    };
                }(report, onBeforeSendErr), (function(err, preventSend) {
                    if (err && onBeforeSendErr(err), preventSend) return _this._logger.debug("Report not sent due to beforeSend callback"), 
                    cb(null, report);
                    _this.config.autoBreadcrumbs && _this.leaveBreadcrumb(report.errorClass, {
                        errorClass: report.errorClass,
                        errorMessage: report.errorMessage,
                        severity: report.severity
                    }, "error"), originalSeverity !== report.severity && (report._handledState.severityReason = {
                        type: "userCallbackSetSeverity"
                    }), _this._delivery.sendReport({
                        apiKey: report.apiKey || _this.config.apiKey,
                        notifier: _this.notifier,
                        events: [ report ]
                    }, (function(err) {
                        return cb(err, report);
                    }));
                }));
            }, BugsnagClient;
        }(), normaliseError = function(error, opts, logger) {
            var err, _opts, createAndLogUsageError = function(reason) {
                var msg = generateNotifyUsageMessage(reason);
                return logger.warn("Usage error. " + msg), new Error("Bugsnag usage error. " + msg);
            }, errorFramesToSkip = 0;
            switch (typeof error) {
              case "string":
                "string" == typeof opts ? (err = createAndLogUsageError("string/string"), _opts = {
                    metaData: {
                        notifier: {
                            notifyArgs: [ error, opts ]
                        }
                    }
                }) : (err = new Error(String(error)), errorFramesToSkip = 3);
                break;

              case "number":
              case "boolean":
                err = new Error(String(error));
                break;

              case "function":
                err = createAndLogUsageError("function");
                break;

              case "object":
                null !== error && (_$iserror_11(error) || error.__isBugsnagReport) ? err = error : null !== error && hasNecessaryFields(error) ? ((err = new Error(error.message || error.errorMessage)).name = error.name || error.errorClass, 
                errorFramesToSkip = 3) : err = createAndLogUsageError(null === error ? "null" : "unsupported object");
                break;

              default:
                err = createAndLogUsageError("nothing");
            }
            return {
                err: err,
                errorFramesToSkip: errorFramesToSkip,
                _opts: _opts
            };
        }, hasNecessaryFields = function(error) {
            return !("string" != typeof error.name && "string" != typeof error.errorClass || "string" != typeof error.message && "string" != typeof error.errorMessage);
        }, generateConfigErrorMessage = function(errors) {
            return "Bugsnag configuration error\n" + __map_4(errors, (function(err) {
                return '"' + err.key + '" ' + err.message + " \n    got " + stringify(err.value);
            })).join("\n\n");
        }, generateNotifyUsageMessage = function(actual) {
            return "notify() expected error/opts parameters, got " + actual;
        }, stringify = function(val) {
            return "object" == typeof val ? JSON.stringify(val) : String(val);
        }, _$BugsnagClient_4 = BugsnagClient, _$safeJsonStringify_19 = function(data, replacer, space, opts) {
            var filterKeys = opts && opts.filterKeys ? opts.filterKeys : [], filterPaths = opts && opts.filterPaths ? opts.filterPaths : [];
            return JSON.stringify(function(obj, filterKeys, filterPaths) {
                var seen = [], edges = 0;
                return function visit(obj, path) {
                    function edgesExceeded() {
                        return path.length > 8 && edges > 25e3;
                    }
                    if (edges++, path.length > 20) return "...";
                    if (edgesExceeded()) return "...";
                    if (null === obj || "object" != typeof obj) return obj;
                    if (function(haystack, needle) {
                        for (var i = 0, len = haystack.length; i < len; i++) if (haystack[i] === needle) return !0;
                        return !1;
                    }(seen, obj)) return "[Circular]";
                    if (seen.push(obj), "function" == typeof obj.toJSON) try {
                        edges--;
                        var fResult = visit(obj.toJSON(), path);
                        return seen.pop(), fResult;
                    } catch (err) {
                        return throwsMessage(err);
                    }
                    var o;
                    if ((o = obj) instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o))) {
                        edges--;
                        var eResult = visit({
                            name: obj.name,
                            message: obj.message
                        }, path);
                        return seen.pop(), eResult;
                    }
                    if (function(obj) {
                        return "[object Array]" === Object.prototype.toString.call(obj);
                    }(obj)) {
                        for (var aResult = [], i = 0, len = obj.length; i < len; i++) {
                            if (edgesExceeded()) {
                                aResult.push("...");
                                break;
                            }
                            aResult.push(visit(obj[i], path.concat("[]")));
                        }
                        return seen.pop(), aResult;
                    }
                    var result = {};
                    try {
                        for (var prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) if (isDescendent(filterPaths, path.join(".")) && shouldFilter(filterKeys, prop)) result[prop] = "[Filtered]"; else {
                            if (edgesExceeded()) {
                                result[prop] = "...";
                                break;
                            }
                            result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
                        }
                    } catch (e) {}
                    return seen.pop(), result;
                }(obj, []);
            }(data, filterKeys, filterPaths), replacer, space);
        };
        function throwsMessage(err) {
            return "[Throws: " + (err ? err.message : "?") + "]";
        }
        function isDescendent(paths, path) {
            for (var i = 0, len = paths.length; i < len; i++) if (0 === path.indexOf(paths[i])) return !0;
            return !1;
        }
        function shouldFilter(patterns, key) {
            for (var i = 0, len = patterns.length; i < len; i++) {
                if ("string" == typeof patterns[i] && patterns[i] === key) return !0;
                if (patterns[i] && "function" == typeof patterns[i].test && patterns[i].test(key)) return !0;
            }
            return !1;
        }
        function safelyGetProp(obj, prop) {
            try {
                return obj[prop];
            } catch (err) {
                return throwsMessage(err);
            }
        }
        var _$jsonPayload_13 = {}, REPORT_FILTER_PATHS = [ "events.[].app", "events.[].metaData", "events.[].user", "events.[].breadcrumbs", "events.[].request", "events.[].device" ], SESSION_FILTER_PATHS = [ "device", "app", "user" ];
        _$jsonPayload_13.report = function(report, filterKeys) {
            var payload = _$safeJsonStringify_19(report, null, null, {
                filterPaths: REPORT_FILTER_PATHS,
                filterKeys: filterKeys
            });
            if (payload.length > 1e6 && (delete report.events[0].metaData, report.events[0].metaData = {
                notifier: "WARNING!\nSerialized payload was " + payload.length / 1e6 + "MB (limit = 1MB)\nmetaData was removed"
            }, (payload = _$safeJsonStringify_19(report, null, null, {
                filterPaths: REPORT_FILTER_PATHS,
                filterKeys: filterKeys
            })).length > 1e6)) throw new Error("payload exceeded 1MB limit");
            return payload;
        }, _$jsonPayload_13.session = function(report, filterKeys) {
            var payload = _$safeJsonStringify_19(report, null, null, {
                filterPaths: SESSION_FILTER_PATHS,
                filterKeys: filterKeys
            });
            if (payload.length > 1e6) throw new Error("payload exceeded 1MB limit");
            return payload;
        };
        var _$delivery_26, __isoDate_26 = _$esUtils_8_isoDate;
        _$delivery_26 = function(client, win) {
            return void 0 === win && (win = window), {
                sendReport: function(report, cb) {
                    void 0 === cb && (cb = function() {});
                    var url = getApiUrl(client.config, "notify", "4", win), req = new win.XDomainRequest;
                    req.onload = function() {
                        cb(null);
                    }, req.open("POST", url), setTimeout((function() {
                        try {
                            req.send(_$jsonPayload_13.report(report, client.config.filters));
                        } catch (e) {
                            client._logger.error(e), cb(e);
                        }
                    }), 0);
                },
                sendSession: function(session, cb) {
                    void 0 === cb && (cb = function() {});
                    var url = getApiUrl(client.config, "sessions", "1", win), req = new win.XDomainRequest;
                    req.onload = function() {
                        cb(null);
                    }, req.open("POST", url), setTimeout((function() {
                        try {
                            req.send(_$jsonPayload_13.session(session, client.config.filters));
                        } catch (e) {
                            client._logger.error(e), cb(e);
                        }
                    }), 0);
                }
            };
        };
        var getApiUrl = function(config, endpoint, version, win) {
            return matchPageProtocol(config.endpoints[endpoint], win.location.protocol) + "?apiKey=" + encodeURIComponent(config.apiKey) + "&payloadVersion=" + version + "&sentAt=" + encodeURIComponent(__isoDate_26());
        }, matchPageProtocol = _$delivery_26._matchPageProtocol = function(endpoint, pageProtocol) {
            return "http:" === pageProtocol ? endpoint.replace(/^https:/, "http:") : endpoint;
        }, __isoDate_27 = _$esUtils_8_isoDate, _$delivery_27 = function(client, win) {
            return void 0 === win && (win = window), {
                sendReport: function(report, cb) {
                    void 0 === cb && (cb = function() {});
                    try {
                        var url = client.config.endpoints.notify, req = new win.XMLHttpRequest;
                        req.onreadystatechange = function() {
                            req.readyState === win.XMLHttpRequest.DONE && cb(null);
                        }, req.open("POST", url), req.setRequestHeader("Content-Type", "application/json"), 
                        req.setRequestHeader("Bugsnag-Api-Key", report.apiKey || client.config.apiKey), 
                        req.setRequestHeader("Bugsnag-Payload-Version", "4"), req.setRequestHeader("Bugsnag-Sent-At", __isoDate_27()), 
                        req.send(_$jsonPayload_13.report(report, client.config.filters));
                    } catch (e) {
                        client._logger.error(e);
                    }
                },
                sendSession: function(session, cb) {
                    void 0 === cb && (cb = function() {});
                    try {
                        var url = client.config.endpoints.sessions, req = new win.XMLHttpRequest;
                        req.onreadystatechange = function() {
                            req.readyState === win.XMLHttpRequest.DONE && cb(null);
                        }, req.open("POST", url), req.setRequestHeader("Content-Type", "application/json"), 
                        req.setRequestHeader("Bugsnag-Api-Key", client.config.apiKey), req.setRequestHeader("Bugsnag-Payload-Version", "1"), 
                        req.setRequestHeader("Bugsnag-Sent-At", __isoDate_27()), req.send(_$jsonPayload_13.session(session, client.config.filters));
                    } catch (e) {
                        client._logger.error(e);
                    }
                }
            };
        }, _$context_28 = {
            init: function(client, win) {
                void 0 === win && (win = window), client.config.beforeSend.unshift((function(report) {
                    report.context || (report.context = win.location.pathname);
                }));
            }
        };
        function ___extends_29() {
            return (___extends_29 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var __isoDate_29 = _$esUtils_8_isoDate, _$device_29 = {
            init: function(client, nav) {
                void 0 === nav && (nav = navigator);
                var device = {
                    locale: nav.browserLanguage || nav.systemLanguage || nav.userLanguage || nav.language,
                    userAgent: nav.userAgent
                };
                client.device = ___extends_29({}, device, client.device), client.config.beforeSend.unshift((function(report) {
                    report.device = ___extends_29({}, report.device, {
                        time: __isoDate_29()
                    });
                }));
            }
        };
        function ___extends_30() {
            return (___extends_30 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var _$request_30 = {
            init: function(client, win) {
                void 0 === win && (win = window), client.config.beforeSend.unshift((function(report) {
                    report.request && report.request.url || (report.request = ___extends_30({}, report.request, {
                        url: win.location.href
                    }));
                }));
            }
        };
        function ___extends_31() {
            return (___extends_31 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var __isArray_31 = _$esUtils_8_isArray, __includes_31 = _$esUtils_8_includes, _$session_31 = {
            init: function(client) {
                return client.sessionDelegate(sessionDelegate);
            }
        }, sessionDelegate = {
            startSession: function(client) {
                var sessionClient = client;
                sessionClient._session = new client.BugsnagSession;
                var releaseStage = _$inferReleaseStage_10(sessionClient);
                return __isArray_31(sessionClient.config.notifyReleaseStages) && !__includes_31(sessionClient.config.notifyReleaseStages, releaseStage) ? (sessionClient._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"), 
                sessionClient) : sessionClient.config.endpoints.sessions ? (sessionClient._delivery.sendSession({
                    notifier: sessionClient.notifier,
                    device: sessionClient.device,
                    app: ___extends_31({}, {
                        releaseStage: releaseStage
                    }, sessionClient.app),
                    sessions: [ {
                        id: sessionClient._session.id,
                        startedAt: sessionClient._session.startedAt,
                        user: sessionClient.user
                    } ]
                }), sessionClient) : (sessionClient._logger.warn("Session not sent due to missing endpoints.sessions configuration"), 
                sessionClient);
            }
        };
        function ___extends_32() {
            return (___extends_32 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var _$clientIp_32 = {
            init: function(client) {
                client.config.collectUserIp || client.config.beforeSend.push((function(report) {
                    report.user && void 0 === report.user.id && delete report.user.id, report.user = ___extends_32({
                        id: "[NOT COLLECTED]"
                    }, report.user), report.request = ___extends_32({
                        clientIp: "[NOT COLLECTED]"
                    }, report.request);
                }));
            },
            configSchema: {
                collectUserIp: {
                    defaultValue: function() {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function(value) {
                        return !0 === value || !1 === value;
                    }
                }
            }
        }, _$consoleBreadcrumbs_33 = {}, __map_33 = _$esUtils_8_map, __reduce_33 = _$esUtils_8_reduce, __filter_33 = _$esUtils_8_filter;
        _$consoleBreadcrumbs_33.init = function(client) {
            var isDev = /^dev(elopment)?$/.test(client.config.releaseStage), explicitlyDisabled = !1 === client.config.consoleBreadcrumbsEnabled, implicitlyDisabled = (!1 === client.config.autoBreadcrumbs || isDev) && !0 !== client.config.consoleBreadcrumbsEnabled;
            explicitlyDisabled || implicitlyDisabled || __map_33(CONSOLE_LOG_METHODS, (function(method) {
                var original = console[method];
                console[method] = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    client.leaveBreadcrumb("Console output", __reduce_33(args, (function(accum, arg, i) {
                        var stringified = "[Unknown value]";
                        try {
                            stringified = String(arg);
                        } catch (e) {}
                        if ("[object Object]" === stringified) try {
                            stringified = JSON.stringify(arg);
                        } catch (e) {}
                        return accum["[" + i + "]"] = stringified, accum;
                    }), {
                        severity: 0 === method.indexOf("group") ? "log" : method
                    }), "log"), original.apply(console, args);
                }, console[method]._restore = function() {
                    console[method] = original;
                };
            }));
        }, _$consoleBreadcrumbs_33.configSchema = {
            consoleBreadcrumbsEnabled: {
                defaultValue: function() {},
                validate: function(value) {
                    return !0 === value || !1 === value || void 0 === value;
                },
                message: "should be true|false"
            }
        };
        var CONSOLE_LOG_METHODS = __filter_33([ "log", "debug", "info", "warn", "error" ], (function(method) {
            return "undefined" != typeof console && "function" == typeof console[method];
        })), __map_34 = _$esUtils_8_map, __reduce_34 = _$esUtils_8_reduce, __filter_34 = _$esUtils_8_filter, _$inlineScriptContent_34 = {
            init: function(client, doc, win) {
                if (void 0 === doc && (doc = document), void 0 === win && (win = window), client.config.trackInlineScripts) {
                    var originalLocation = win.location.href, html = "", DOMContentLoaded = !1, getHtml = function() {
                        return doc.documentElement.outerHTML;
                    };
                    html = getHtml();
                    var prev = doc.onreadystatechange;
                    doc.onreadystatechange = function() {
                        "interactive" === doc.readyState && (html = getHtml(), DOMContentLoaded = !0);
                        try {
                            prev.apply(this, arguments);
                        } catch (e) {}
                    };
                    var _lastScript = null, updateLastScript = function(script) {
                        _lastScript = script;
                    }, getCurrentScript = function() {
                        var script = doc.currentScript || _lastScript;
                        if (!script && !DOMContentLoaded) {
                            var scripts = doc.scripts || doc.getElementsByTagName("script");
                            script = scripts[scripts.length - 1];
                        }
                        return script;
                    };
                    client.config.beforeSend.unshift((function(report) {
                        report.stacktrace = __filter_34(report.stacktrace, (function(f) {
                            return !/__trace__$/.test(f.method);
                        }));
                        var frame = report.stacktrace[0];
                        if (!frame || !frame.file || frame.file.replace(/#.*$/, "") === originalLocation.replace(/#.*$/, "")) {
                            var currentScript = getCurrentScript();
                            if (currentScript) {
                                var content = currentScript.innerHTML;
                                report.updateMetaData("script", "content", content.length <= 5e5 ? content : content.substr(0, 5e5));
                            }
                            frame && frame.lineNumber && (frame.code = function(lineNumber) {
                                DOMContentLoaded && html || (html = getHtml());
                                var htmlLines = [ "\x3c!-- DOC START --\x3e" ].concat(html.split("\n")), zeroBasedLine = lineNumber - 1, start = Math.max(zeroBasedLine - 3, 0), end = Math.min(zeroBasedLine + 3, htmlLines.length);
                                return __reduce_34(htmlLines.slice(start, end), (function(accum, line, i) {
                                    return accum[start + 1 + i] = line.length <= 200 ? line : line.substr(0, 200), accum;
                                }), {});
                            }(frame.lineNumber));
                        }
                    }));
                    var _setTimeout = __map_34([ "setTimeout", "setInterval", "setImmediate", "requestAnimationFrame" ], (function(fn) {
                        return __proxy(win, fn, (function(original) {
                            return __traceOriginalScript(original, (function(args) {
                                return {
                                    get: function() {
                                        return args[0];
                                    },
                                    replace: function(fn) {
                                        args[0] = fn;
                                    }
                                };
                            }));
                        }));
                    }))[0];
                    __map_34([ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], (function(o) {
                        win[o] && win[o].prototype && win[o].prototype.hasOwnProperty && win[o].prototype.hasOwnProperty("addEventListener") && (__proxy(win[o].prototype, "addEventListener", (function(original) {
                            return __traceOriginalScript(original, eventTargetCallbackAccessor);
                        })), __proxy(win[o].prototype, "removeEventListener", (function(original) {
                            return __traceOriginalScript(original, eventTargetCallbackAccessor, !0);
                        })));
                    }));
                }
                function __traceOriginalScript(fn, callbackAccessor, alsoCallOriginal) {
                    return void 0 === alsoCallOriginal && (alsoCallOriginal = !1), function() {
                        var args = Array.prototype.slice.call(arguments);
                        try {
                            var cba = callbackAccessor(args), cb = cba.get();
                            if (alsoCallOriginal && fn.apply(this, args), "function" != typeof cb) return fn.apply(this, args);
                            if (cb.__trace__) cba.replace(cb.__trace__); else {
                                var script = getCurrentScript();
                                cb.__trace__ = function() {
                                    updateLastScript(script), _setTimeout((function() {
                                        updateLastScript(null);
                                    }), 0);
                                    var ret = cb.apply(this, arguments);
                                    return updateLastScript(null), ret;
                                }, cb.__trace__.__trace__ = cb.__trace__, cba.replace(cb.__trace__);
                            }
                        } catch (e) {}
                        if (fn.apply) return fn.apply(this, args);
                        switch (args.length) {
                          case 1:
                            return fn(args[0]);

                          case 2:
                            return fn(args[0], args[1]);

                          default:
                            return fn();
                        }
                    };
                }
            },
            configSchema: {
                trackInlineScripts: {
                    validate: function(value) {
                        return !0 === value || !1 === value;
                    },
                    defaultValue: function() {
                        return !0;
                    },
                    message: "should be true|false"
                }
            }
        };
        function __proxy(host, name, replacer) {
            var original = host[name];
            if (!original) return original;
            var replacement = replacer(original);
            return host[name] = replacement, original;
        }
        function eventTargetCallbackAccessor(args) {
            var isEventHandlerObj = !!args[1] && "function" == typeof args[1].handleEvent;
            return {
                get: function() {
                    return isEventHandlerObj ? args[1].handleEvent : args[1];
                },
                replace: function(fn) {
                    isEventHandlerObj ? args[1].handleEvent = fn : args[1] = fn;
                }
            };
        }
        var client, win, getIgnoredUrls, _$interactionBreadcrumbs_35 = {
            init: function(client, win) {
                if (void 0 === win && (win = window), "addEventListener" in win) {
                    var explicitlyDisabled = !1 === client.config.interactionBreadcrumbsEnabled, implicitlyDisabled = !1 === client.config.autoBreadcrumbs && !0 !== client.config.interactionBreadcrumbsEnabled;
                    explicitlyDisabled || implicitlyDisabled || win.addEventListener("click", (function(event) {
                        var targetText, targetSelector;
                        try {
                            targetText = getNodeText(event.target), targetSelector = function getNodeSelector(el, win) {
                                var parts = [ el.tagName ];
                                if (el.id && parts.push("#" + el.id), el.className && el.className.length && parts.push("." + el.className.split(" ").join(".")), 
                                !win.document.querySelectorAll || !Array.prototype.indexOf) return parts.join("");
                                try {
                                    if (1 === win.document.querySelectorAll(parts.join("")).length) return parts.join("");
                                } catch (e) {
                                    return parts.join("");
                                }
                                if (el.parentNode.childNodes.length > 1) {
                                    var index = Array.prototype.indexOf.call(el.parentNode.childNodes, el) + 1;
                                    parts.push(":nth-child(" + index + ")");
                                }
                                return 1 === win.document.querySelectorAll(parts.join("")).length ? parts.join("") : el.parentNode ? getNodeSelector(el.parentNode, win) + " > " + parts.join("") : parts.join("");
                            }(event.target, win);
                        } catch (e) {
                            targetText = "[hidden]", targetSelector = "[hidden]", client._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z");
                        }
                        client.leaveBreadcrumb("UI click", {
                            targetText: targetText,
                            targetSelector: targetSelector
                        }, "user");
                    }), !0);
                }
            },
            configSchema: {
                interactionBreadcrumbsEnabled: {
                    defaultValue: function() {},
                    validate: function(value) {
                        return !0 === value || !1 === value || void 0 === value;
                    },
                    message: "should be true|false"
                }
            }
        }, getNodeText = function(el) {
            var value, length, text = el.textContent || el.innerText || "";
            return text || "submit" !== el.type && "button" !== el.type || (text = el.value), 
            text = text.replace(/^\s+|\s+$/g, ""), length = 140, (value = text) && value.length <= length ? value : value.slice(0, length - "(...)".length) + "(...)";
        }, _$navigationBreadcrumbs_36 = {
            init: function(client, win) {
                if (void 0 === win && (win = window), "addEventListener" in win) {
                    var explicitlyDisabled = !1 === client.config.navigationBreadcrumbsEnabled, implicitlyDisabled = !1 === client.config.autoBreadcrumbs && !0 !== client.config.navigationBreadcrumbsEnabled;
                    if (!explicitlyDisabled && !implicitlyDisabled) {
                        var drop = function(name) {
                            return function() {
                                return client.leaveBreadcrumb(name, {}, "navigation");
                            };
                        };
                        win.addEventListener("pagehide", drop("Page hidden"), !0), win.addEventListener("pageshow", drop("Page shown"), !0), 
                        win.addEventListener("load", drop("Page loaded"), !0), win.document.addEventListener("DOMContentLoaded", drop("DOMContentLoaded"), !0), 
                        win.addEventListener("load", (function() {
                            return win.addEventListener("popstate", drop("Navigated back"), !0);
                        })), win.addEventListener("hashchange", (function(event) {
                            var metaData = event.oldURL ? {
                                from: relativeLocation(event.oldURL, win),
                                to: relativeLocation(event.newURL, win),
                                state: getCurrentState(win)
                            } : {
                                to: relativeLocation(win.location.href, win)
                            };
                            client.leaveBreadcrumb("Hash changed", metaData, "navigation");
                        }), !0), win.history.replaceState && wrapHistoryFn(client, win.history, "replaceState", win), 
                        win.history.pushState && wrapHistoryFn(client, win.history, "pushState", win), client.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
                    }
                }
            },
            configSchema: {
                navigationBreadcrumbsEnabled: {
                    defaultValue: function() {},
                    validate: function(value) {
                        return !0 === value || !1 === value || void 0 === value;
                    },
                    message: "should be true|false"
                }
            }
        }, relativeLocation = function(url, win) {
            var a = win.document.createElement("A");
            return a.href = url, "" + a.pathname + a.search + a.hash;
        }, wrapHistoryFn = function(client, target, fn, win) {
            var orig = target[fn];
            target[fn] = function(state, title, url) {
                client.leaveBreadcrumb("History " + fn, function(win, state, title, url) {
                    var currentPath = relativeLocation(win.location.href, win);
                    return {
                        title: title,
                        state: state,
                        prevState: getCurrentState(win),
                        to: url || currentPath,
                        from: currentPath
                    };
                }(win, state, title, url), "navigation"), "function" == typeof client.refresh && client.refresh(), 
                client.config.autoCaptureSessions && client.startSession(), orig.apply(target, [ state, title ].concat(void 0 !== url ? url : []));
            };
        }, getCurrentState = function(win) {
            try {
                return win.history.state;
            } catch (e) {}
        }, _$networkBreadcrumbs_37 = {}, __includes_37 = _$esUtils_8_includes, defaultIgnoredUrls = function() {
            return [ client.config.endpoints.notify, client.config.endpoints.sessions ];
        };
        _$networkBreadcrumbs_37.name = "networkBreadcrumbs", _$networkBreadcrumbs_37.init = function(_client, _getIgnoredUrls, _win) {
            void 0 === _getIgnoredUrls && (_getIgnoredUrls = defaultIgnoredUrls), void 0 === _win && (_win = window);
            var explicitlyDisabled = !1 === _client.config.networkBreadcrumbsEnabled, implicitlyDisabled = !1 === _client.config.autoBreadcrumbs && !0 !== _client.config.networkBreadcrumbsEnabled;
            explicitlyDisabled || implicitlyDisabled || (client = _client, win = _win, getIgnoredUrls = _getIgnoredUrls, 
            monkeyPatchXMLHttpRequest(), monkeyPatchFetch());
        }, _$networkBreadcrumbs_37.configSchema = {
            networkBreadcrumbsEnabled: {
                defaultValue: function() {},
                validate: function(value) {
                    return !0 === value || !1 === value || void 0 === value;
                },
                message: "should be true|false"
            }
        };
        var monkeyPatchXMLHttpRequest = function() {
            if ("addEventListener" in win.XMLHttpRequest.prototype) {
                var nativeOpen = win.XMLHttpRequest.prototype.open;
                win.XMLHttpRequest.prototype.open = function(method, url) {
                    this["BS~~U"] = url, this["BS~~M"] = method, this["BS~~S"] && (this.removeEventListener("load", handleXHRLoad), 
                    this.removeEventListener("error", handleXHRError)), this.addEventListener("load", handleXHRLoad), 
                    this.addEventListener("error", handleXHRError), this["BS~~S"] = !0, nativeOpen.apply(this, arguments);
                };
            }
        };
        function handleXHRLoad() {
            if (!__includes_37(getIgnoredUrls(), this["BS~~U"])) {
                var metaData = {
                    status: this.status,
                    request: this["BS~~M"] + " " + this["BS~~U"]
                };
                this.status >= 400 ? client.leaveBreadcrumb("XMLHttpRequest failed", metaData, "request") : client.leaveBreadcrumb("XMLHttpRequest succeeded", metaData, "request");
            }
        }
        function handleXHRError() {
            __includes_37(getIgnoredUrls, this["BS~~U"]) || client.leaveBreadcrumb("XMLHttpRequest error", {
                request: this["BS~~M"] + " " + this["BS~~U"]
            }, "request");
        }
        var monkeyPatchFetch = function() {
            if ("fetch" in win && !win.fetch.polyfill) {
                var oldFetch = win.fetch;
                win.fetch = function() {
                    var method, _arguments = arguments, urlOrRequest = arguments[0], options = arguments[1], url = null;
                    return urlOrRequest && "object" == typeof urlOrRequest ? (url = urlOrRequest.url, 
                    options && "method" in options ? method = options.method : urlOrRequest && "method" in urlOrRequest && (method = urlOrRequest.method)) : (url = urlOrRequest, 
                    options && "method" in options && (method = options.method)), void 0 === method && (method = "GET"), 
                    new Promise((function(resolve, reject) {
                        oldFetch.apply(void 0, _arguments).then((function(response) {
                            handleFetchSuccess(response, method, url), resolve(response);
                        })).catch((function(error) {
                            handleFetchError(method, url), reject(error);
                        }));
                    }));
                };
            }
        }, handleFetchSuccess = function(response, method, url) {
            var metaData = {
                status: response.status,
                request: method + " " + url
            };
            response.status >= 400 ? client.leaveBreadcrumb("fetch() failed", metaData, "request") : client.leaveBreadcrumb("fetch() succeeded", metaData, "request");
        }, handleFetchError = function(method, url) {
            client.leaveBreadcrumb("fetch() error", {
                request: method + " " + url
            }, "request");
        }, __intRange_38 = _$validators_15.intRange, _$throttle_38 = {
            init: function(client) {
                var n = 0;
                client.config.beforeSend.push((function(report) {
                    if (n >= client.config.maxEvents) return report.ignore();
                    n++;
                })), client.refresh = function() {
                    n = 0;
                };
            },
            configSchema: {
                maxEvents: {
                    defaultValue: function() {
                        return 10;
                    },
                    message: "should be a positive integer ≤100",
                    validate: function(val) {
                        return __intRange_38(1, 100)(val);
                    }
                }
            }
        }, _$stripQueryString_39 = {};
        function ___extends_39() {
            return (___extends_39 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var __map_39 = _$esUtils_8_map, strip = (_$stripQueryString_39 = {
            init: function(client) {
                client.config.beforeSend.push((function(report) {
                    report.stacktrace = __map_39(report.stacktrace, (function(frame) {
                        return ___extends_39({}, frame, {
                            file: strip(frame.file)
                        });
                    }));
                }));
            }
        })._strip = function(str) {
            return "string" == typeof str ? str.replace(/\?.*$/, "").replace(/#.*$/, "") : str;
        }, _$onerror_40 = {
            init: function(client, win) {
                void 0 === win && (win = window);
                var prevOnError = win.onerror;
                win.onerror = function(messageOrEvent, url, lineNo, charNo, error) {
                    if (0 === lineNo && /Script error\.?/.test(messageOrEvent)) client._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z"); else {
                        var report, handledState = {
                            severity: "error",
                            unhandled: !0,
                            severityReason: {
                                type: "unhandledException"
                            }
                        };
                        if (error) error.name && error.message ? report = new client.BugsnagReport(error.name, error.message, decorateStack(client.BugsnagReport.getStacktrace(error), url, lineNo, charNo), handledState, error) : (report = new client.BugsnagReport("window.onerror", String(error), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState, error)).updateMetaData("window onerror", {
                            error: error
                        }); else if ("object" != typeof messageOrEvent || null === messageOrEvent || url && "string" == typeof url || lineNo || charNo || error) (report = new client.BugsnagReport("window.onerror", String(messageOrEvent), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState, messageOrEvent)).updateMetaData("window onerror", {
                            event: messageOrEvent
                        }); else {
                            var name = messageOrEvent.type ? "Event: " + messageOrEvent.type : "window.onerror", message = messageOrEvent.message || messageOrEvent.detail || "";
                            (report = new client.BugsnagReport(name, message, client.BugsnagReport.getStacktrace(new Error, 1).slice(1), handledState, messageOrEvent)).updateMetaData("window onerror", {
                                event: messageOrEvent,
                                extraParameters: url
                            });
                        }
                        client.notify(report);
                    }
                    "function" == typeof prevOnError && prevOnError.apply(this, arguments);
                };
            }
        }, decorateStack = function(stack, url, lineNo, charNo) {
            var culprit = stack[0];
            return culprit ? (culprit.fileName || "string" != typeof url || culprit.setFileName(url), 
            !culprit.lineNumber && isActualNumber(lineNo) && culprit.setLineNumber(lineNo), 
            culprit.columnNumber || (isActualNumber(charNo) ? culprit.setColumnNumber(charNo) : window.event && isActualNumber(window.event.errorCharacter) && culprit.setColumnNumber(window.event.errorCharacter)), 
            stack) : stack;
        }, isActualNumber = function(n) {
            return "number" == typeof n && "NaN" !== String.call(n);
        }, _$unhandledRejection_41 = {}, __reduce_41 = _$esUtils_8_reduce;
        _$unhandledRejection_41.init = function(client, win) {
            void 0 === win && (win = window);
            var listener = function(event) {
                var error = event.reason, isBluebird = !1;
                try {
                    event.detail && event.detail.reason && (error = event.detail.reason, isBluebird = !0);
                } catch (e) {}
                var report, handledState = {
                    severity: "error",
                    unhandled: !0,
                    severityReason: {
                        type: "unhandledPromiseRejection"
                    }
                };
                error && _$hasStack_9(error) ? (report = new client.BugsnagReport(error.name, error.message, _$errorStackParser_7.parse(error), handledState, error), 
                isBluebird && (report.stacktrace = __reduce_41(report.stacktrace, fixBluebirdStacktrace(error), []))) : (report = new client.BugsnagReport(error && error.name ? error.name : "UnhandledRejection", error && error.message ? error.message : 'Rejection reason was not an Error. See "Promise" tab for more detail.', [], handledState, error)).updateMetaData("promise", "rejection reason", serializableReason(error)), 
                client.notify(report);
            };
            "addEventListener" in win ? win.addEventListener("unhandledrejection", listener) : win.onunhandledrejection = function(reason, promise) {
                listener({
                    detail: {
                        reason: reason,
                        promise: promise
                    }
                });
            };
        };
        var _$notifier_2, serializableReason = function(err) {
            return null == err ? "undefined (or null)" : _$iserror_11(err) ? ((_ref = {})[Object.prototype.toString.call(err)] = {
                name: err.name,
                message: err.message,
                code: err.code,
                stack: err.stack
            }, _ref) : err;
            var _ref;
        }, fixBluebirdStacktrace = function(error) {
            return function(accum, frame) {
                return frame.file === error.toString() ? accum : (frame.method && (frame.method = frame.method.replace(/^\s+/, "")), 
                accum.concat(frame));
            };
        };
        function ___extends_2() {
            return (___extends_2 = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var __schema_2 = ___extends_2({}, _$config_5.schema, _$config_1);
        return (_$notifier_2 = function(opts) {
            "string" == typeof opts && (opts = {
                apiKey: opts
            });
            var warningMessage = "";
            opts.endpoints && opts.endpoints.notify && !opts.endpoints.sessions && (warningMessage += "notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
            var bugsnag = new _$BugsnagClient_4({
                name: "Bugsnag JavaScript",
                version: "6.5.2",
                url: "https://github.com/bugsnag/bugsnag-js"
            });
            return bugsnag.setOptions(opts), bugsnag.delivery(window.XDomainRequest ? _$delivery_26 : _$delivery_27), 
            bugsnag.configure(__schema_2), warningMessage && bugsnag._logger.warn(warningMessage), 
            bugsnag.use(_$device_29), bugsnag.use(_$context_28), bugsnag.use(_$request_30), 
            bugsnag.use(_$throttle_38), bugsnag.use(_$session_31), bugsnag.use(_$clientIp_32), 
            bugsnag.use(_$stripQueryString_39), !1 !== bugsnag.config.autoNotify && (bugsnag.use(_$onerror_40), 
            bugsnag.use(_$unhandledRejection_41)), bugsnag.use(_$navigationBreadcrumbs_36), 
            bugsnag.use(_$interactionBreadcrumbs_35), bugsnag.use(_$networkBreadcrumbs_37), 
            bugsnag.use(_$consoleBreadcrumbs_33), bugsnag.use(_$inlineScriptContent_34), bugsnag._logger.debug("Loaded!"), 
            bugsnag.config.autoCaptureSessions ? bugsnag.startSession() : bugsnag;
        }).Bugsnag = {
            Client: _$BugsnagClient_4,
            Report: _$BugsnagReport_24,
            Session: _$Session_25,
            Breadcrumb: _$BugsnagBreadcrumb_3
        }, _$notifier_2.default = _$notifier_2, _$notifier_2;
    }();
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PanelOsModule = void 0;
    const src_1 = __webpack_require__(1), PanelOsTypes_1 = __webpack_require__(99), PanelOsService_1 = __webpack_require__(100), ProxyActivated_1 = __webpack_require__(212), ProxyDeactivated_1 = __webpack_require__(213);
    class PanelOsModule extends src_1.MarioModule {
        name() {
            return "PanelOsModule";
        }
        static use(mario, options) {
            return mario.registerModule(PanelOsModule, options);
        }
        register(options) {
            this.mario().registerService(PanelOsTypes_1.PanelOsTypes.PANEL_OS_SERVICE, PanelOsService_1.PanelOsService), 
            options.subscribeOnProxyEvents && (this.mario().internalDispatcher().on(ProxyActivated_1.ProxyActivated), 
            this.mario().internalDispatcher().on(ProxyDeactivated_1.ProxyDeactivated));
        }
    }
    exports.PanelOsModule = PanelOsModule;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.AdType = void 0, function(AdType) {
        AdType.DISPLAY = "DISPLAY", AdType.FACEBOOK = "FACEBOOK", AdType.TWITTER = "TWITTER";
    }(exports.AdType || (exports.AdType = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.AdStatus = void 0, function(AdStatus) {
        AdStatus.ENABLED = "enabled", AdStatus.DISABLED = "disabled";
    }(exports.AdStatus || (exports.AdStatus = {}));
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
    }), exports.ProxyActivated = void 0;
    const ProxyEvents_1 = __webpack_require__(89), inversify_1 = __webpack_require__(0), PanelOsTypes_1 = __webpack_require__(99), PanelOsService_1 = __webpack_require__(100);
    let ProxyActivated = class ProxyActivated {
        constructor(panelOsService) {
            this.panelOsService = panelOsService;
        }
        on() {
            return ProxyEvents_1.ProxyEvents.PROXY_AFTER_CONNECT;
        }
        handle(event) {
            this.panelOsService.updatePanelOSConfig();
        }
    };
    ProxyActivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PanelOsTypes_1.PanelOsTypes.PANEL_OS_SERVICE)), __metadata("design:paramtypes", [ PanelOsService_1.PanelOsService ]) ], ProxyActivated), 
    exports.ProxyActivated = ProxyActivated;
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
    }), exports.ProxyDeactivated = void 0;
    const ProxyEvents_1 = __webpack_require__(89), inversify_1 = __webpack_require__(0), PanelOsTypes_1 = __webpack_require__(99), PanelOsService_1 = __webpack_require__(100);
    let ProxyDeactivated = class ProxyDeactivated {
        constructor(panelOsService) {
            this.panelOsService = panelOsService;
        }
        on() {
            return ProxyEvents_1.ProxyEvents.DIRECT_AFTER_CONNECT;
        }
        handle(event) {
            this.panelOsService.updatePanelOSConfig();
        }
    };
    ProxyDeactivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PanelOsTypes_1.PanelOsTypes.PANEL_OS_SERVICE)), __metadata("design:paramtypes", [ PanelOsService_1.PanelOsService ]) ], ProxyDeactivated), 
    exports.ProxyDeactivated = ProxyDeactivated;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), __1 = __webpack_require__(1), BrowserActionEvents_1 = __webpack_require__(215);
    let BrowserActionService = class BrowserActionService {
        constructor(logger, internalDispatcher) {
            this.logger = logger, this.internalDispatcher = internalDispatcher, chrome.browserAction.onClicked.addListener(tab => {
                const event = new __1.MarioEvent(BrowserActionEvents_1.BrowserActionEvents.BROWSER_ACTION_CLICKED, tab);
                this.internalDispatcher.emit(event).then();
            });
        }
        setTitle(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.setTitle(details, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        getTitle(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.getTitle(tabId, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        setIcon(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.setIcon(details, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        setPopup(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.setPopup(details, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        getPopup(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.getPopup(tabId, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        setBadgeText(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.setBadgeText(details, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        getBadgeText(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.getBadgeText(tabId, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        setBadgeBackgroundColor(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.setBadgeBackgroundColor(details, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        getBadgeBackgroundColor(details) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.getBadgeBackgroundColor(details, colors => resolve(colors));
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        enable(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.enable(tabId, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        disable(tabId) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise((resolve, reject) => {
                    try {
                        chrome.browserAction.disable(tabId, () => resolve());
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
    };
    BrowserActionService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object, Object ]) ], BrowserActionService), 
    exports.BrowserActionService = BrowserActionService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(BrowserActionEvents) {
        BrowserActionEvents.BROWSER_ACTION_CLICKED = "BROWSER_ACTION_CLICKED";
    }(exports.BrowserActionEvents || (exports.BrowserActionEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.HideMyGeoLocationModule = void 0;
    const src_1 = __webpack_require__(1), PostBgDispatcher_1 = __webpack_require__(217), GetMyLocation_1 = __webpack_require__(218), HideMyGeoLocationService_1 = __webpack_require__(110), HideMyLocationTypes_1 = __webpack_require__(109), IpInfoTypes_1 = __webpack_require__(111), IpInfoService_1 = __webpack_require__(166);
    class HideMyGeoLocationModule extends src_1.MarioModule {
        name() {
            return "HideMyGeoLocation";
        }
        register(options) {
            this.mario().registerService(src_1.MARIO_TYPES.WINDOW_POST, PostBgDispatcher_1.PostBgDispatcher), 
            this.mario().registerService(HideMyLocationTypes_1.HideMyLocationTypes.HIDE_MY_LOCATION_SERVICE, HideMyGeoLocationService_1.HideMyGeoLocationService), 
            this.mario().registerService(IpInfoTypes_1.IpInfoTypes.IP_INFO_SERVICE, IpInfoService_1.IpInfoService), 
            this.mario().externalDispatcher().on(GetMyLocation_1.GetMyLocation);
        }
    }
    exports.HideMyGeoLocationModule = HideMyGeoLocationModule;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), MarioEvent_1 = __webpack_require__(17), PostBgEvents_1 = __webpack_require__(101);
    let PostBgDispatcher = class PostBgDispatcher {
        constructor(externalDispatcher) {
            this.externalDispatcher = externalDispatcher;
        }
        emitResponse(tabId, requestId, response) {
            return __awaiter(this, void 0, void 0, (function*() {
                const data = {
                    requestId: requestId,
                    response: response
                }, marioEvent = new MarioEvent_1.MarioEvent(PostBgEvents_1.PostBgEvents.RESPONSE, data, requestId);
                yield this.externalDispatcher.emit(tabId, marioEvent);
            }));
        }
        emitEvent(tabId, event, payload) {
            return __awaiter(this, void 0, void 0, (function*() {
                const data = {
                    event: event,
                    payload: payload
                }, marioEvent = new MarioEvent_1.MarioEvent(PostBgEvents_1.PostBgEvents.EVENT, data);
                yield this.externalDispatcher.emit(tabId, marioEvent);
            }));
        }
    };
    PostBgDispatcher = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.EXTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], PostBgDispatcher), 
    exports.PostBgDispatcher = PostBgDispatcher;
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
    }), exports.GetMyLocation = void 0;
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), HideMyLocationEvents_1 = __webpack_require__(219), HideMyLocationTypes_1 = __webpack_require__(109), HideMyGeoLocationService_1 = __webpack_require__(110), IpInfoTypes_1 = __webpack_require__(111);
    let GetMyLocation = class GetMyLocation {
        constructor(postDispatcher, service, ipInfoService) {
            this.postDispatcher = postDispatcher, this.service = service, this.ipInfoService = ipInfoService;
        }
        on() {
            return HideMyLocationEvents_1.HideMyLocationEvents.GET_LOCATION;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.service.isEnabled()) try {
                    const ipInfo = yield this.ipInfoService.get();
                    if (ipInfo.loc && 2 === ipInfo.loc.length) {
                        const response = {
                            enabled: !0,
                            latitude: ipInfo.loc[1],
                            longitude: ipInfo.loc[0],
                            status: "SUCCESS"
                        };
                        yield this.postDispatcher.emitResponse(sender.tab.id, event.id, response);
                    } else yield this.sendErrorResponse(sender.tab.id, event.id);
                } catch (e) {
                    yield this.sendErrorResponse(sender.tab.id, event.id);
                } else yield this.sendErrorResponse(sender.tab.id, event.id);
            }));
        }
        sendErrorResponse(tabId, eventId) {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.postDispatcher.emitResponse(tabId, eventId, {
                    enabled: !1
                });
            }));
        }
    };
    GetMyLocation = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.WINDOW_POST)), __param(1, inversify_1.inject(HideMyLocationTypes_1.HideMyLocationTypes.HIDE_MY_LOCATION_SERVICE)), __param(2, inversify_1.inject(IpInfoTypes_1.IpInfoTypes.IP_INFO_SERVICE)), __metadata("design:paramtypes", [ Object, HideMyGeoLocationService_1.HideMyGeoLocationService, Object ]) ], GetMyLocation), 
    exports.GetMyLocation = GetMyLocation;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.HideMyLocationEvents = void 0, function(HideMyLocationEvents) {
        HideMyLocationEvents.GET_LOCATION = "HIDE_MY_LOCATION__GET_LOCATION";
    }(exports.HideMyLocationEvents || (exports.HideMyLocationEvents = {}));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.IP = void 0;
    const IpInfoServiceException_1 = __webpack_require__(167);
    exports.IP = class IP {
        constructor(ip) {
            if (this.ip = ip, !/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(this.ip)) throw new IpInfoServiceException_1.IpInfoServiceException(`Invalid IP address: "${this.ip}"`);
        }
        getIP() {
            return this.ip;
        }
    };
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
    }), exports.IpInfoModule = void 0;
    const src_1 = __webpack_require__(1), IpInfoTypes_1 = __webpack_require__(111), IpInfoService_1 = __webpack_require__(166);
    class IpInfoModule extends src_1.MarioModule {
        name() {
            return "IpInfoModule";
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().registerService(IpInfoTypes_1.IpInfoTypes.IP_INFO_SERVICE, IpInfoService_1.IpInfoService);
            }));
        }
    }
    exports.IpInfoModule = IpInfoModule;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ExtensionMode_1 = __webpack_require__(139);
    let ExtensionModeService = class ExtensionModeService {
        constructor(storageService) {
            this.storageService = storageService, this.key = "EXTENSION_MODE";
        }
        getCurrentMode() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.storageService.has(this.key) ? this.storageService.get(this.key) : ExtensionMode_1.ExtensionMode.NORMAL;
            }));
        }
        setCurrentMode(mode) {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.storageService.set(this.key, mode);
            }));
        }
    };
    ExtensionModeService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], ExtensionModeService), 
    exports.ExtensionModeService = ExtensionModeService;
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
        });
        const src_1 = __webpack_require__(1), CreateTabEventListener_1 = __webpack_require__(224), PopupCounterEventListener_1 = __webpack_require__(225), PopupGetCountEventListener_1 = __webpack_require__(226), RedirectToSafePageEventListener_1 = __webpack_require__(227), PopupGetProtectionState_1 = __webpack_require__(228), PopupSetProtectionState_1 = __webpack_require__(257), IdentityTypes_1 = __webpack_require__(104), UrbanTypes_1 = __webpack_require__(34), UrbanLocationService_1 = __webpack_require__(142), UrbanHistoryService_1 = __webpack_require__(168), AlarmService_1 = __webpack_require__(105), BeforeLocationActivated_1 = __webpack_require__(258), BeforeLocationDeactivated_1 = __webpack_require__(259), ProxyErrorListener_1 = __webpack_require__(260), GoogleAnalyticsTypes_1 = __webpack_require__(37), UpdateLocations_1 = __webpack_require__(261), AfterLocationDeactivated_1 = __webpack_require__(262), AfterLocationActivated_1 = __webpack_require__(263), ManagementService_1 = __webpack_require__(264), ProxyLocationTypes_1 = __webpack_require__(112), WeightBasedStrategy_1 = __webpack_require__(267), UrbanIpService_1 = __webpack_require__(179), PageHistoryService_1 = __webpack_require__(268), helpers_1 = __webpack_require__(35), UrbanBugsnagService_1 = __webpack_require__(191), UrlsSafeCheckTypes_1 = __webpack_require__(12), PolicyAgreedEventListener_1 = __webpack_require__(269), AdBlockerService_1 = __webpack_require__(181), InterruptionService_1 = __webpack_require__(270), ProtectionStateService_1 = __webpack_require__(141), AnalyticsBlockerService_1 = __webpack_require__(186), compareVersions = __webpack_require__(271);
        var RUN_MODE;
        !function(RUN_MODE) {
            RUN_MODE.REGULAR = "REGULAR", RUN_MODE.AFTER_INSTALL = "AFTER_INSTALL", RUN_MODE.AFTER_UPDATE = "AFTER_UPDATE";
        }(RUN_MODE || (RUN_MODE = {}));
        const globalAny = global;
        class AppModule extends src_1.MarioModule {
            name() {
                return "AppModule";
            }
            register(options) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const version = this.mario().extension().manifest().version;
                    this.mario().container().bind(UrbanTypes_1.UrbanTypes.URBAN_IDENTITY).toConstantValue("urbanvpn@urban-vpn.com"), 
                    this.mario().container().bind(UrbanTypes_1.UrbanTypes.URBAN_PASSWORD).toConstantValue("urbanvpn4321"), 
                    this.mario().registerService(src_1.MARIO_TYPES.ALARM_SERVICE, AlarmService_1.AlarmService), 
                    this.mario().registerService(src_1.MARIO_TYPES.MANAGEMENT, ManagementService_1.ManagementService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_INTERRUPTION_SERVICE, InterruptionService_1.InterruptionService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_AD_BLOCKER_SERVICE, AdBlockerService_1.AdBlockerService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_BAGSNAG_SERVICE, UrbanBugsnagService_1.UrbanBugsnagService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_PAGE_HISTORY_SERVICE, PageHistoryService_1.PageHistoryService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_ANALYTICS_BLOCKER_SERVICE, AnalyticsBlockerService_1.AnalyticsBlockerService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_HISTORY_SERVICE, UrbanHistoryService_1.UrbanHistoryService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_LOCATION_SERVICE, UrbanLocationService_1.UrbanLocationService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_IP_SERVICE, UrbanIpService_1.UrbanIpService), 
                    this.mario().registerService(UrbanTypes_1.UrbanTypes.URBAN_PROTECTION_STATE_SERVICE, ProtectionStateService_1.ProtectionStateService);
                    const adBlockerService = this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_AD_BLOCKER_SERVICE), safeCheckStateService = (this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_BAGSNAG_SERVICE), 
                    this.mario().getService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), protectionStateService = (this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_EXTENSION_MODE_SERVICE), 
                    this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_PAGE_HISTORY_SERVICE), this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_PROTECTION_STATE_SERVICE)), proxyLocationService = (this.mario().getService(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE), 
                    this.mario().getService(ProxyLocationTypes_1.ProxyLocationTypes.LOCATION_PROXY_SERVICE)), urbanIpService = this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_IP_SERVICE);
                    let runMode, previousVersion;
                    switch (this.mario().extension().onInstall(details => {
                        "install" === details.reason ? runMode = RUN_MODE.AFTER_INSTALL : "update" === details.reason && (runMode = RUN_MODE.AFTER_UPDATE, 
                        previousVersion = details.previousVersion);
                    }), yield helpers_1.delay(100), runMode) {
                      case RUN_MODE.AFTER_INSTALL:
                        break;

                      case RUN_MODE.AFTER_UPDATE:
                        compareVersions.compare(previousVersion, "2.1", "<") && globalAny.window.ActivatePanelOS(), 
                        (yield adBlockerService.isEnabled()) && (yield adBlockerService.enable());
                    }
                    const uninstallURL = `https://eighred.com/?cid=${this.getIdentityId()}&v=${version}`;
                    this.mario().extension().setUninstallURL(uninstallURL), this.mario().internalDispatcher().on(ProxyErrorListener_1.ProxyErrorListener), 
                    this.mario().internalDispatcher().on(BeforeLocationActivated_1.BeforeLocationActivated), 
                    this.mario().internalDispatcher().on(BeforeLocationDeactivated_1.BeforeLocationDeactivated), 
                    this.mario().internalDispatcher().on(UpdateLocations_1.UpdateLocations), this.mario().internalDispatcher().on(AfterLocationActivated_1.AfterLocationActivated), 
                    this.mario().internalDispatcher().on(AfterLocationDeactivated_1.AfterLocationDeactivated), 
                    this.mario().internalDispatcher().on(PolicyAgreedEventListener_1.PolicyAgreedEventListener), 
                    this.mario().externalDispatcher().on(CreateTabEventListener_1.CreateTabEventListener), 
                    this.mario().externalDispatcher().on(PopupCounterEventListener_1.PopupCounterEventListener), 
                    this.mario().externalDispatcher().on(PopupGetCountEventListener_1.PopupGetCountEventListener), 
                    this.mario().externalDispatcher().on(RedirectToSafePageEventListener_1.RedirectToSafePageEventListener), 
                    this.mario().externalDispatcher().on(PopupGetProtectionState_1.PopupGetProtectionState), 
                    this.mario().externalDispatcher().on(PopupSetProtectionState_1.PopupSetProtectionState);
                    const strategy = new WeightBasedStrategy_1.WeightBasedStrategy;
                    proxyLocationService.setStrategy(strategy), yield urbanIpService.updateIpInfo(), 
                    yield safeCheckStateService.restoreState(), yield protectionStateService.init(), 
                    this.mario().getService(UrbanTypes_1.UrbanTypes.URBAN_LOCATION_SERVICE);
                }));
            }
            getIdentityId() {
                return this.mario().getService(IdentityTypes_1.IdentityTypes.IDENTITY_SERVICE).getIdentityId();
            }
        }
        exports.AppModule = AppModule;
    }).call(this, __webpack_require__(16));
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
    const inversify_1 = __webpack_require__(0), __1 = __webpack_require__(1), TabContentEvents_1 = __webpack_require__(140);
    let CreateTabEventListener = class CreateTabEventListener {
        constructor(tabService) {
            this.tabService = tabService;
        }
        on() {
            return TabContentEvents_1.TabContentEvents.CREATE_TAB;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const props = event.data;
                this.tabService.create(props);
            }));
        }
    };
    CreateTabEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(__1.MARIO_TYPES.TAB_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], CreateTabEventListener), 
    exports.CreateTabEventListener = CreateTabEventListener;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ContentEvents_1 = __webpack_require__(13);
    let PopupCounterEventListener = class PopupCounterEventListener {
        constructor(storageService) {
            this.storageService = storageService;
        }
        on() {
            return ContentEvents_1.ContentEvents.POPUP_COUNT;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                let counter = this.storageService.has(ContentEvents_1.ContentEvents.POPUP_COUNT) ? yield this.storageService.get(ContentEvents_1.ContentEvents.POPUP_COUNT) : 0;
                counter++, yield this.storageService.set(ContentEvents_1.ContentEvents.POPUP_COUNT, counter);
            }));
        }
    };
    PopupCounterEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], PopupCounterEventListener), 
    exports.PopupCounterEventListener = PopupCounterEventListener;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ContentEvents_1 = __webpack_require__(13);
    let PopupGetCountEventListener = class PopupGetCountEventListener {
        constructor(storageService) {
            this.storageService = storageService;
        }
        on() {
            return ContentEvents_1.ContentEvents.POPUP_GET_COUNTER;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                sendResponse(yield this.storageService.get(ContentEvents_1.ContentEvents.POPUP_COUNT));
            }));
        }
    };
    PopupGetCountEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], PopupGetCountEventListener), 
    exports.PopupGetCountEventListener = PopupGetCountEventListener;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ContentEvents_1 = __webpack_require__(13), TabService_1 = __webpack_require__(20), helpers_1 = __webpack_require__(35);
    let RedirectToSafePageEventListener = class RedirectToSafePageEventListener {
        constructor(tabService) {
            this.tabService = tabService;
        }
        on() {
            return ContentEvents_1.ContentEvents.REDIRECT_TO_SAFE_PAGE;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {tab: tab} = sender, url = helpers_1.getBrowserBlankPageUrl();
                this.tabService.update({
                    url: url
                }, tab.id);
            }));
        }
    };
    RedirectToSafePageEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.TAB_SERVICE)), __metadata("design:paramtypes", [ TabService_1.TabService ]) ], RedirectToSafePageEventListener), 
    exports.RedirectToSafePageEventListener = RedirectToSafePageEventListener;
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
    const inversify_1 = __webpack_require__(0), ContentEvents_1 = __webpack_require__(13), UrbanTypes_1 = __webpack_require__(34), ProtectionStateService_1 = __webpack_require__(141);
    let PopupGetProtectionState = class PopupGetProtectionState {
        constructor(protectionStateService) {
            this.protectionStateService = protectionStateService;
        }
        on() {
            return ContentEvents_1.ContentEvents.POPUP_GET_PROTECTION_STATE;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                sendResponse({
                    enabled: yield this.protectionStateService.isProtectionEnabled(),
                    level: yield this.protectionStateService.getProtectionLevel(),
                    features: yield this.protectionStateService.getFeaturesState()
                });
            }));
        }
    };
    PopupGetProtectionState = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_PROTECTION_STATE_SERVICE)), __metadata("design:paramtypes", [ ProtectionStateService_1.ProtectionStateService ]) ], PopupGetProtectionState), 
    exports.PopupGetProtectionState = PopupGetProtectionState;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationCodeEmptyException = void 0;
    const ProxyLocationException_1 = __webpack_require__(102);
    class LocationCodeEmptyException extends ProxyLocationException_1.ProxyLocationException {}
    exports.LocationCodeEmptyException = LocationCodeEmptyException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationName = void 0;
    const LocationNameEmptyException_1 = __webpack_require__(231);
    exports.LocationName = class LocationName {
        constructor(name) {
            if (this.name = name, this.name = name.trim(), 0 === this.name.length) throw new LocationNameEmptyException_1.LocationNameEmptyException("Name has to be not empty");
        }
        value() {
            return this.name;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationNameEmptyException = void 0;
    const ProxyLocationException_1 = __webpack_require__(102);
    class LocationNameEmptyException extends ProxyLocationException_1.ProxyLocationException {}
    exports.LocationNameEmptyException = LocationNameEmptyException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyHost = void 0;
    exports.ProxyHost = class ProxyHost {
        constructor(host) {
            this.host = host;
        }
        value() {
            return this.host;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyPortRange = void 0;
    const ProxyPortRangeException_1 = __webpack_require__(234);
    exports.ProxyPortRange = class ProxyPortRange {
        constructor(_from, _to) {
            if (this._from = _from, this._to = _to, this.validate(this._from, "from"), this.validate(this._to, "to"), 
            this._from > this._to) {
                const message = `Proxy port range: incorrect range "from": ${_from} "to": ${_to}`;
                throw new ProxyPortRangeException_1.ProxyPortRangeException(message);
            }
        }
        from() {
            return this._from;
        }
        to() {
            return this._to;
        }
        validate(port, key) {
            const errorMessage = `Proxy port range: param "${key}" has to be a positive integer value`;
            if (port < 0 || !1 === Number.isInteger(port)) throw new ProxyPortRangeException_1.ProxyPortRangeException(errorMessage);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyPortRangeException = void 0;
    class ProxyPortRangeException extends Error {}
    exports.ProxyPortRangeException = ProxyPortRangeException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyRedundancy = void 0;
    exports.ProxyRedundancy = class ProxyRedundancy {
        constructor(redundancy) {
            this.redundancy = redundancy;
        }
        value() {
            return this.redundancy;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyScheme = void 0;
    exports.ProxyScheme = class ProxyScheme {
        constructor(_scheme) {
            this._scheme = _scheme;
        }
        value() {
            return this._scheme;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyWeight = void 0;
    const ProxyWeightNegativeNumbException_1 = __webpack_require__(238), ProxyWeightNotNumberException_1 = __webpack_require__(239);
    exports.ProxyWeight = class ProxyWeight {
        constructor(weight) {
            if (this.weight = weight, "number" != typeof weight) throw new ProxyWeightNotNumberException_1.ProxyWeightNotNumberException("weight must be a number");
            if (weight < 0) throw new ProxyWeightNegativeNumbException_1.ProxyWeightNegativeNumbException("weight must be positive number");
        }
        value() {
            return this.weight;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyWeightNegativeNumbException = void 0;
    const ProxyLocationException_1 = __webpack_require__(102);
    class ProxyWeightNegativeNumbException extends ProxyLocationException_1.ProxyLocationException {}
    exports.ProxyWeightNegativeNumbException = ProxyWeightNegativeNumbException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyWeightNotNumberException = void 0;
    const ProxyLocationException_1 = __webpack_require__(102);
    class ProxyWeightNotNumberException extends ProxyLocationException_1.ProxyLocationException {}
    exports.ProxyWeightNotNumberException = ProxyWeightNotNumberException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationIterator = void 0;
    exports.ProxyLocationIterator = class ProxyLocationIterator {
        constructor(location) {
            this.location = location;
        }
        next() {
            const current = this.location;
            return this.location = this.location ? this.location.next() : null, {
                done: !Boolean(current),
                value: current
            };
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.ProxyLocationServiceException = void 0;
    class ProxyLocationServiceException extends Error {}
    exports.ProxyLocationServiceException = ProxyLocationServiceException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.LocationType = void 0;
    exports.LocationType = {
        CITY: "CITY",
        COUNTRY: "COUNTRY",
        STATE: "STATE"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.TreeNode = void 0;
    const ProxyLocation_1 = __webpack_require__(144);
    class TreeNode {
        constructor(name, code, type) {
            this.name = name, this.code = code, this.type = type, this.children = {}, this.config = [];
        }
        getOrCreateNode(name, code, type) {
            return this.hasNode(code) ? this.getNode(code) : (this.children[code] = new TreeNode(name, code, type), 
            this.children[code]);
        }
        addConfig(config) {
            this.config.push(config);
        }
        getNode(code) {
            return this.children[code];
        }
        hasNode(code) {
            return !!this.children[code];
        }
        getNodes() {
            return this.children;
        }
        hasNodes() {
            return Object.keys(this.children).length > 0;
        }
        buildLocation() {
            return ProxyLocation_1.ProxyLocation.create(this.name, this.code, this.type, this.config);
        }
    }
    exports.TreeNode = TreeNode;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DataCenterException = void 0;
    class DataCenterException extends Error {}
    exports.DataCenterException = DataCenterException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Md5 = function() {
        function Md5() {
            this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), 
            this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
        }
        return Md5.hashStr = function(str, raw) {
            return void 0 === raw && (raw = !1), this.onePassHasher.start().appendStr(str).end(raw);
        }, Md5.hashAsciiStr = function(str, raw) {
            return void 0 === raw && (raw = !1), this.onePassHasher.start().appendAsciiStr(str).end(raw);
        }, Md5._hex = function(x) {
            var n, offset, j, i, hc = Md5.hexChars, ho = Md5.hexOut;
            for (i = 0; i < 4; i += 1) for (offset = 8 * i, n = x[i], j = 0; j < 8; j += 2) ho[offset + 1 + j] = hc.charAt(15 & n), 
            n >>>= 4, ho[offset + 0 + j] = hc.charAt(15 & n), n >>>= 4;
            return ho.join("");
        }, Md5._md5cycle = function(x, k) {
            var a = x[0], b = x[1], c = x[2], d = x[3];
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & c | ~b & d) + k[0] - 680876936 | 0) << 7 | a >>> 25) + b | 0) & b | ~a & c) + k[1] - 389564586 | 0) << 12 | d >>> 20) + a | 0) & a | ~d & b) + k[2] + 606105819 | 0) << 17 | c >>> 15) + d | 0) & d | ~c & a) + k[3] - 1044525330 | 0) << 22 | b >>> 10) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & c | ~b & d) + k[4] - 176418897 | 0) << 7 | a >>> 25) + b | 0) & b | ~a & c) + k[5] + 1200080426 | 0) << 12 | d >>> 20) + a | 0) & a | ~d & b) + k[6] - 1473231341 | 0) << 17 | c >>> 15) + d | 0) & d | ~c & a) + k[7] - 45705983 | 0) << 22 | b >>> 10) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & c | ~b & d) + k[8] + 1770035416 | 0) << 7 | a >>> 25) + b | 0) & b | ~a & c) + k[9] - 1958414417 | 0) << 12 | d >>> 20) + a | 0) & a | ~d & b) + k[10] - 42063 | 0) << 17 | c >>> 15) + d | 0) & d | ~c & a) + k[11] - 1990404162 | 0) << 22 | b >>> 10) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & c | ~b & d) + k[12] + 1804603682 | 0) << 7 | a >>> 25) + b | 0) & b | ~a & c) + k[13] - 40341101 | 0) << 12 | d >>> 20) + a | 0) & a | ~d & b) + k[14] - 1502002290 | 0) << 17 | c >>> 15) + d | 0) & d | ~c & a) + k[15] + 1236535329 | 0) << 22 | b >>> 10) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & d | c & ~d) + k[1] - 165796510 | 0) << 5 | a >>> 27) + b | 0) & c | b & ~c) + k[6] - 1069501632 | 0) << 9 | d >>> 23) + a | 0) & b | a & ~b) + k[11] + 643717713 | 0) << 14 | c >>> 18) + d | 0) & a | d & ~a) + k[0] - 373897302 | 0) << 20 | b >>> 12) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & d | c & ~d) + k[5] - 701558691 | 0) << 5 | a >>> 27) + b | 0) & c | b & ~c) + k[10] + 38016083 | 0) << 9 | d >>> 23) + a | 0) & b | a & ~b) + k[15] - 660478335 | 0) << 14 | c >>> 18) + d | 0) & a | d & ~a) + k[4] - 405537848 | 0) << 20 | b >>> 12) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & d | c & ~d) + k[9] + 568446438 | 0) << 5 | a >>> 27) + b | 0) & c | b & ~c) + k[14] - 1019803690 | 0) << 9 | d >>> 23) + a | 0) & b | a & ~b) + k[3] - 187363961 | 0) << 14 | c >>> 18) + d | 0) & a | d & ~a) + k[8] + 1163531501 | 0) << 20 | b >>> 12) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b & d | c & ~d) + k[13] - 1444681467 | 0) << 5 | a >>> 27) + b | 0) & c | b & ~c) + k[2] - 51403784 | 0) << 9 | d >>> 23) + a | 0) & b | a & ~b) + k[7] + 1735328473 | 0) << 14 | c >>> 18) + d | 0) & a | d & ~a) + k[12] - 1926607734 | 0) << 20 | b >>> 12) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b ^ c ^ d) + k[5] - 378558 | 0) << 4 | a >>> 28) + b | 0) ^ b ^ c) + k[8] - 2022574463 | 0) << 11 | d >>> 21) + a | 0) ^ a ^ b) + k[11] + 1839030562 | 0) << 16 | c >>> 16) + d | 0) ^ d ^ a) + k[14] - 35309556 | 0) << 23 | b >>> 9) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b ^ c ^ d) + k[1] - 1530992060 | 0) << 4 | a >>> 28) + b | 0) ^ b ^ c) + k[4] + 1272893353 | 0) << 11 | d >>> 21) + a | 0) ^ a ^ b) + k[7] - 155497632 | 0) << 16 | c >>> 16) + d | 0) ^ d ^ a) + k[10] - 1094730640 | 0) << 23 | b >>> 9) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b ^ c ^ d) + k[13] + 681279174 | 0) << 4 | a >>> 28) + b | 0) ^ b ^ c) + k[0] - 358537222 | 0) << 11 | d >>> 21) + a | 0) ^ a ^ b) + k[3] - 722521979 | 0) << 16 | c >>> 16) + d | 0) ^ d ^ a) + k[6] + 76029189 | 0) << 23 | b >>> 9) + c | 0, 
            b = ((b += ((c = ((c += ((d = ((d += ((a = ((a += (b ^ c ^ d) + k[9] - 640364487 | 0) << 4 | a >>> 28) + b | 0) ^ b ^ c) + k[12] - 421815835 | 0) << 11 | d >>> 21) + a | 0) ^ a ^ b) + k[15] + 530742520 | 0) << 16 | c >>> 16) + d | 0) ^ d ^ a) + k[2] - 995338651 | 0) << 23 | b >>> 9) + c | 0, 
            b = ((b += ((d = ((d += (b ^ ((a = ((a += (c ^ (b | ~d)) + k[0] - 198630844 | 0) << 6 | a >>> 26) + b | 0) | ~c)) + k[7] + 1126891415 | 0) << 10 | d >>> 22) + a | 0) ^ ((c = ((c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0) << 15 | c >>> 17) + d | 0) | ~a)) + k[5] - 57434055 | 0) << 21 | b >>> 11) + c | 0, 
            b = ((b += ((d = ((d += (b ^ ((a = ((a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0) << 6 | a >>> 26) + b | 0) | ~c)) + k[3] - 1894986606 | 0) << 10 | d >>> 22) + a | 0) ^ ((c = ((c += (a ^ (d | ~b)) + k[10] - 1051523 | 0) << 15 | c >>> 17) + d | 0) | ~a)) + k[1] - 2054922799 | 0) << 21 | b >>> 11) + c | 0, 
            b = ((b += ((d = ((d += (b ^ ((a = ((a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0) << 6 | a >>> 26) + b | 0) | ~c)) + k[15] - 30611744 | 0) << 10 | d >>> 22) + a | 0) ^ ((c = ((c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0) << 15 | c >>> 17) + d | 0) | ~a)) + k[13] + 1309151649 | 0) << 21 | b >>> 11) + c | 0, 
            b = ((b += ((d = ((d += (b ^ ((a = ((a += (c ^ (b | ~d)) + k[4] - 145523070 | 0) << 6 | a >>> 26) + b | 0) | ~c)) + k[11] - 1120210379 | 0) << 10 | d >>> 22) + a | 0) ^ ((c = ((c += (a ^ (d | ~b)) + k[2] + 718787259 | 0) << 15 | c >>> 17) + d | 0) | ~a)) + k[9] - 343485551 | 0) << 21 | b >>> 11) + c | 0, 
            x[0] = a + x[0] | 0, x[1] = b + x[1] | 0, x[2] = c + x[2] | 0, x[3] = d + x[3] | 0;
        }, Md5.prototype.start = function() {
            return this._dataLength = 0, this._bufferLength = 0, this._state.set(Md5.stateIdentity), 
            this;
        }, Md5.prototype.appendStr = function(str) {
            var code, i, buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength;
            for (i = 0; i < str.length; i += 1) {
                if ((code = str.charCodeAt(i)) < 128) buf8[bufLen++] = code; else if (code < 2048) buf8[bufLen++] = 192 + (code >>> 6), 
                buf8[bufLen++] = 63 & code | 128; else if (code < 55296 || code > 56319) buf8[bufLen++] = 224 + (code >>> 12), 
                buf8[bufLen++] = code >>> 6 & 63 | 128, buf8[bufLen++] = 63 & code | 128; else {
                    if ((code = 1024 * (code - 55296) + (str.charCodeAt(++i) - 56320) + 65536) > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
                    buf8[bufLen++] = 240 + (code >>> 18), buf8[bufLen++] = code >>> 12 & 63 | 128, buf8[bufLen++] = code >>> 6 & 63 | 128, 
                    buf8[bufLen++] = 63 & code | 128;
                }
                bufLen >= 64 && (this._dataLength += 64, Md5._md5cycle(this._state, buf32), bufLen -= 64, 
                buf32[0] = buf32[16]);
            }
            return this._bufferLength = bufLen, this;
        }, Md5.prototype.appendAsciiStr = function(str) {
            for (var i, buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, j = 0; ;) {
                for (i = Math.min(str.length - j, 64 - bufLen); i--; ) buf8[bufLen++] = str.charCodeAt(j++);
                if (bufLen < 64) break;
                this._dataLength += 64, Md5._md5cycle(this._state, buf32), bufLen = 0;
            }
            return this._bufferLength = bufLen, this;
        }, Md5.prototype.appendByteArray = function(input) {
            for (var i, buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, j = 0; ;) {
                for (i = Math.min(input.length - j, 64 - bufLen); i--; ) buf8[bufLen++] = input[j++];
                if (bufLen < 64) break;
                this._dataLength += 64, Md5._md5cycle(this._state, buf32), bufLen = 0;
            }
            return this._bufferLength = bufLen, this;
        }, Md5.prototype.getState = function() {
            var s = this._state;
            return {
                buffer: String.fromCharCode.apply(null, this._buffer8),
                buflen: this._bufferLength,
                length: this._dataLength,
                state: [ s[0], s[1], s[2], s[3] ]
            };
        }, Md5.prototype.setState = function(state) {
            var i, buf = state.buffer, x = state.state, s = this._state;
            for (this._dataLength = state.length, this._bufferLength = state.buflen, s[0] = x[0], 
            s[1] = x[1], s[2] = x[2], s[3] = x[3], i = 0; i < buf.length; i += 1) this._buffer8[i] = buf.charCodeAt(i);
        }, Md5.prototype.end = function(raw) {
            void 0 === raw && (raw = !1);
            var dataBitsLen, bufLen = this._bufferLength, buf8 = this._buffer8, buf32 = this._buffer32, i = 1 + (bufLen >> 2);
            if (this._dataLength += bufLen, buf8[bufLen] = 128, buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0, 
            buf32.set(Md5.buffer32Identity.subarray(i), i), bufLen > 55 && (Md5._md5cycle(this._state, buf32), 
            buf32.set(Md5.buffer32Identity)), (dataBitsLen = 8 * this._dataLength) <= 4294967295) buf32[14] = dataBitsLen; else {
                var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (null === matches) return;
                var lo = parseInt(matches[2], 16), hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo, buf32[15] = hi;
            }
            return Md5._md5cycle(this._state, buf32), raw ? this._state : Md5._hex(this._state);
        }, Md5.stateIdentity = new Int32Array([ 1732584193, -271733879, -1732584194, 271733878 ]), 
        Md5.buffer32Identity = new Int32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), 
        Md5.hexChars = "0123456789abcdef", Md5.hexOut = [], Md5.onePassHasher = new Md5, 
        Md5;
    }();
    exports.Md5 = Md5, "5d41402abc4b2a76b9719d911017c592" !== Md5.hashStr("hello") && console.error("Md5 self test failed.");
}, function(module, exports, __webpack_require__) {
    var v1 = __webpack_require__(247), v4 = __webpack_require__(248), uuid = v4;
    uuid.v1 = v1, uuid.v4 = v4, module.exports = uuid;
}, function(module, exports, __webpack_require__) {
    var _nodeId, _clockseq, rng = __webpack_require__(177), bytesToUuid = __webpack_require__(178), _lastMSecs = 0, _lastNSecs = 0;
    module.exports = function(options, buf, offset) {
        var i = buf && offset || 0, b = buf || [], node = (options = options || {}).node || _nodeId, clockseq = void 0 !== options.clockseq ? options.clockseq : _clockseq;
        if (null == node || null == clockseq) {
            var seedBytes = rng();
            null == node && (node = _nodeId = [ 1 | seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5] ]), 
            null == clockseq && (clockseq = _clockseq = 16383 & (seedBytes[6] << 8 | seedBytes[7]));
        }
        var msecs = void 0 !== options.msecs ? options.msecs : (new Date).getTime(), nsecs = void 0 !== options.nsecs ? options.nsecs : _lastNSecs + 1, dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && void 0 === options.clockseq && (clockseq = clockseq + 1 & 16383), 
        (dt < 0 || msecs > _lastMSecs) && void 0 === options.nsecs && (nsecs = 0), nsecs >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        _lastMSecs = msecs, _lastNSecs = nsecs, _clockseq = clockseq;
        var tl = (1e4 * (268435455 & (msecs += 122192928e5)) + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255, b[i++] = tl >>> 16 & 255, b[i++] = tl >>> 8 & 255, b[i++] = 255 & tl;
        var tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255, b[i++] = 255 & tmh, b[i++] = tmh >>> 24 & 15 | 16, b[i++] = tmh >>> 16 & 255, 
        b[i++] = clockseq >>> 8 | 128, b[i++] = 255 & clockseq;
        for (var n = 0; n < 6; ++n) b[i + n] = node[n];
        return buf || bytesToUuid(b);
    };
}, function(module, exports, __webpack_require__) {
    var rng = __webpack_require__(177), bytesToUuid = __webpack_require__(178);
    module.exports = function(options, buf, offset) {
        var i = buf && offset || 0;
        "string" == typeof options && (buf = "binary" === options ? new Array(16) : null, 
        options = null);
        var rnds = (options = options || {}).random || (options.rng || rng)();
        if (rnds[6] = 15 & rnds[6] | 64, rnds[8] = 63 & rnds[8] | 128, buf) for (var ii = 0; ii < 16; ++ii) buf[i + ii] = rnds[ii];
        return buf || bytesToUuid(rnds);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.bypassList = [ "sessions.bugsnag.com", "notify.bugsnag.com", "www.ssl.google-analytics.com", "google-analytics.com", "*google-analytics.com", "toolbar.urban-vpn.com", "stats.urban-vpn.com" ];
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.TabState = void 0;
    const UrlsSafeCheckTypes_1 = __webpack_require__(12), utils_1 = __webpack_require__(91);
    exports.TabState = class TabState {
        constructor() {
            this.url = "", this.checked = !1, this.notificationMuted = !1, this.status = UrlsSafeCheckTypes_1.STATUS.NONE, 
            this._checking = !1, this.hasData = !1, this.navigationData = {}, this.documentData = {}, 
            this.systemData = {}, this.panelData = {};
        }
        setId(id) {
            this.id = id;
        }
        setUrl(url) {
            this.url = url, this.domain = utils_1.getDomain(url);
        }
        setNotificationMute(state) {
            this.notificationMuted = state;
        }
        setCheckedState(state) {
            this.checked = state;
        }
        setStatus(status) {
            this.status = status;
        }
        setNavigationData(data) {
            Object.assign(this.navigationData, data);
        }
        getNavigationData() {
            return this.navigationData;
        }
        setDocumentData(data) {
            Object.assign(this.documentData, data);
        }
        getDocumentData() {
            return this.documentData;
        }
        setPanelData(data) {
            Object.assign(this.panelData, data);
        }
        getPanelData() {
            return this.panelData;
        }
        setSystemData(data) {
            Object.assign(this.systemData, data);
        }
        getSystemData() {
            return this.systemData;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.whiteListProtocols = void 0, exports.whiteListProtocols = [ "chrome:", "chrome-search:", "chrome-devtools", "about:", "edge:" ];
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.blankPage = void 0, exports.blankPage = {
        CHROME_BROWSER: "chrome://newtab/",
        FIREFOX_BROWSER: "about:blank",
        EDGE_BROWSER: "edge://newtab/"
    };
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
    const logPrefix = "SensitiveDataFilter:";
    exports.default = class SensitiveDataFilter {
        constructor(config) {
            if ("string" != typeof config.host) throw "Server host is undefined";
            this.host = config.host, this.logging = !!config.logging;
        }
        init() {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.updateRules();
            }));
        }
        transformUrl(value) {
            if (!value || !this.rules || !this.rules.filters) return value;
            const tempUrl = new URL(value), domain = tempUrl.host;
            tempUrl.password.length && (tempUrl.password = "*****"), tempUrl.username.length && (tempUrl.username = "*****"), 
            this.rules.filters.forEach(item => {
                domain.match(item.domain) && (tempUrl.pathname = this.processFilterRules(item.rules, tempUrl.pathname), 
                tempUrl.search = this.processFilterRules(item.rules, tempUrl.search), tempUrl.hash = this.processFilterRules(item.rules, tempUrl.hash));
            });
            const result = tempUrl.toString();
            return this.logging && this.log(`${logPrefix} Transformed url: ${value} -> ${result}`), 
            result;
        }
        transformTitle(domain, value) {
            if (!this.rules || !this.rules.titles) return value;
            const titleRules = this.rules.titles;
            let resultTitle = value;
            return titleRules.forEach(item => {
                domain.match(item.domain) && item.rules.forEach(rule => {
                    rule.value && (resultTitle = this.applyRegexp(rule.value, resultTitle, "*****"));
                });
            }), this.logging && this.log(`${logPrefix} Transformed title: ${value} -> ${resultTitle}`), 
            resultTitle;
        }
        updateRules() {
            return __awaiter(this, void 0, void 0, (function*() {
                const rulesListUrl = this.host + "/api/privacy/data/rules/exclusions";
                try {
                    const response = yield fetch(rulesListUrl, {
                        headers: {
                            "Content-type": "application/json;charset=utf-8"
                        }
                    });
                    this.rules = yield response.json();
                } catch (e) {
                    throw new Error(e);
                }
            }));
        }
        processFilterRules(rules, value) {
            let result = value;
            return rules.forEach(rule => {
                if (rule.value && rule.type) switch (rule.type) {
                  case "parameter":
                    result = this.applyRegexp("([?&]" + rule.value + "=)([^&]+)", result, "$1*****");
                    break;

                  case "path":
                    result = this.applyPathFilter(rule.value, result, "*****");
                    break;

                  default:
                    this.logging && this.log(`${logPrefix} Unknown rule type: ${rule.type}`);
                }
            }), result;
        }
        applyPathFilter(rule, value, newValue) {
            const regExp = new RegExp(rule, "i");
            let replaceValue;
            const m = value.match(regExp);
            if (!m) return value;
            const [fullStr, matchStr] = m;
            return replaceValue = newValue + matchStr + newValue, 0 === fullStr.indexOf(matchStr) && (replaceValue = matchStr + newValue), 
            fullStr.indexOf(matchStr) === fullStr.length - matchStr.length && (replaceValue = newValue + matchStr), 
            value.replace(fullStr, replaceValue);
        }
        applyRegexp(r, value, newValue) {
            const regExp = new RegExp(r, "ig");
            return value.replace(regExp, newValue);
        }
        log(value) {
            console.log(value);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.SensitiveDataFilterException = void 0;
    class SensitiveDataFilterException extends Error {}
    exports.SensitiveDataFilterException = SensitiveDataFilterException;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const LZString = function() {
        var f = String.fromCharCode, keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", baseReverseDic = {};
        function getBaseValue(alphabet, character) {
            if (!baseReverseDic[alphabet]) {
                baseReverseDic[alphabet] = {};
                for (var i = 0; i < alphabet.length; i++) baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
            return baseReverseDic[alphabet][character];
        }
        var LZString = {
            compressToBase64: function(input) {
                if (null == input) return "";
                var res = LZString._compress(input, 6, (function(a) {
                    return keyStrBase64.charAt(a);
                }));
                switch (res.length % 4) {
                  default:
                  case 0:
                    return res;

                  case 1:
                    return res + "===";

                  case 2:
                    return res + "==";

                  case 3:
                    return res + "=";
                }
            },
            decompressFromBase64: function(input) {
                return null == input ? "" : "" == input ? null : LZString._decompress(input.length, 32, (function(index) {
                    return getBaseValue(keyStrBase64, input.charAt(index));
                }));
            },
            compressToUTF16: function(input) {
                return null == input ? "" : LZString._compress(input, 15, (function(a) {
                    return f(a + 32);
                })) + " ";
            },
            decompressFromUTF16: function(compressed) {
                return null == compressed ? "" : "" == compressed ? null : LZString._decompress(compressed.length, 16384, (function(index) {
                    return compressed.charCodeAt(index) - 32;
                }));
            },
            compressToUint8Array: function(uncompressed) {
                for (var compressed = LZString.compress(uncompressed), buf = new Uint8Array(2 * compressed.length), i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
                    var current_value = compressed.charCodeAt(i);
                    buf[2 * i] = current_value >>> 8, buf[2 * i + 1] = current_value % 256;
                }
                return buf;
            },
            decompressFromUint8Array: function(compressed) {
                if (null == compressed) return LZString.decompress(compressed);
                for (var buf = new Array(compressed.length / 2), i = 0, TotalLen = buf.length; i < TotalLen; i++) buf[i] = 256 * compressed[2 * i] + compressed[2 * i + 1];
                var result = [];
                return buf.forEach((function(c) {
                    result.push(f(c));
                })), LZString.decompress(result.join(""));
            },
            compressToEncodedURIComponent: function(input) {
                return null == input ? "" : LZString._compress(input, 6, (function(a) {
                    return keyStrUriSafe.charAt(a);
                }));
            },
            decompressFromEncodedURIComponent: function(input) {
                return null == input ? "" : "" == input ? null : (input = input.replace(/ /g, "+"), 
                LZString._decompress(input.length, 32, (function(index) {
                    return getBaseValue(keyStrUriSafe, input.charAt(index));
                })));
            },
            compress: function(uncompressed) {
                return LZString._compress(uncompressed, 16, (function(a) {
                    return f(a);
                }));
            },
            _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
                if (null == uncompressed) return "";
                var i, value, ii, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0;
                for (ii = 0; ii < uncompressed.length; ii += 1) if (context_c = uncompressed.charAt(ii), 
                Object.prototype.hasOwnProperty.call(context_dictionary, context_c) || (context_dictionary[context_c] = context_dictSize++, 
                context_dictionaryToCreate[context_c] = !0), context_wc = context_w + context_c, 
                Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) context_w = context_wc; else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for (i = 0; i < context_numBits; i++) context_data_val <<= 1, context_data_position == bitsPerChar - 1 ? (context_data_position = 0, 
                            context_data.push(getCharFromInt(context_data_val)), context_data_val = 0) : context_data_position++;
                            for (value = context_w.charCodeAt(0), i = 0; i < 8; i++) context_data_val = context_data_val << 1 | 1 & value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value >>= 1;
                        } else {
                            for (value = 1, i = 0; i < context_numBits; i++) context_data_val = context_data_val << 1 | value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value = 0;
                            for (value = context_w.charCodeAt(0), i = 0; i < 16; i++) context_data_val = context_data_val << 1 | 1 & value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value >>= 1;
                        }
                        0 == --context_enlargeIn && (context_enlargeIn = Math.pow(2, context_numBits), context_numBits++), 
                        delete context_dictionaryToCreate[context_w];
                    } else for (value = context_dictionary[context_w], i = 0; i < context_numBits; i++) context_data_val = context_data_val << 1 | 1 & value, 
                    context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                    context_data_val = 0) : context_data_position++, value >>= 1;
                    0 == --context_enlargeIn && (context_enlargeIn = Math.pow(2, context_numBits), context_numBits++), 
                    context_dictionary[context_wc] = context_dictSize++, context_w = String(context_c);
                }
                if ("" !== context_w) {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for (i = 0; i < context_numBits; i++) context_data_val <<= 1, context_data_position == bitsPerChar - 1 ? (context_data_position = 0, 
                            context_data.push(getCharFromInt(context_data_val)), context_data_val = 0) : context_data_position++;
                            for (value = context_w.charCodeAt(0), i = 0; i < 8; i++) context_data_val = context_data_val << 1 | 1 & value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value >>= 1;
                        } else {
                            for (value = 1, i = 0; i < context_numBits; i++) context_data_val = context_data_val << 1 | value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value = 0;
                            for (value = context_w.charCodeAt(0), i = 0; i < 16; i++) context_data_val = context_data_val << 1 | 1 & value, 
                            context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                            context_data_val = 0) : context_data_position++, value >>= 1;
                        }
                        0 == --context_enlargeIn && (context_enlargeIn = Math.pow(2, context_numBits), context_numBits++), 
                        delete context_dictionaryToCreate[context_w];
                    } else for (value = context_dictionary[context_w], i = 0; i < context_numBits; i++) context_data_val = context_data_val << 1 | 1 & value, 
                    context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                    context_data_val = 0) : context_data_position++, value >>= 1;
                    0 == --context_enlargeIn && (context_enlargeIn = Math.pow(2, context_numBits), context_numBits++);
                }
                for (value = 2, i = 0; i < context_numBits; i++) context_data_val = context_data_val << 1 | 1 & value, 
                context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_val)), 
                context_data_val = 0) : context_data_position++, value >>= 1;
                for (;;) {
                    if (context_data_val <<= 1, context_data_position == bitsPerChar - 1) {
                        context_data.push(getCharFromInt(context_data_val));
                        break;
                    }
                    context_data_position++;
                }
                return context_data.join("");
            },
            decompress: function(compressed) {
                return null == compressed ? "" : "" == compressed ? null : LZString._decompress(compressed.length, 32768, (function(index) {
                    return compressed.charCodeAt(index);
                }));
            },
            _decompress: function(length, resetValue, getNextValue) {
                var i, w, bits, resb, maxpower, power, c, dictionary = [], enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], data = {
                    val: getNextValue(0),
                    position: resetValue,
                    index: 1
                };
                for (i = 0; i < 3; i += 1) dictionary[i] = i;
                for (bits = 0, maxpower = Math.pow(2, 2), power = 1; power != maxpower; ) resb = data.val & data.position, 
                data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                switch (bits) {
                  case 0:
                    for (bits = 0, maxpower = Math.pow(2, 8), power = 1; power != maxpower; ) resb = data.val & data.position, 
                    data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                    bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                    c = f(bits);
                    break;

                  case 1:
                    for (bits = 0, maxpower = Math.pow(2, 16), power = 1; power != maxpower; ) resb = data.val & data.position, 
                    data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                    bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                    c = f(bits);
                    break;

                  case 2:
                    return "";
                }
                for (dictionary[3] = c, w = c, result.push(c); ;) {
                    if (data.index > length) return "";
                    for (bits = 0, maxpower = Math.pow(2, numBits), power = 1; power != maxpower; ) resb = data.val & data.position, 
                    data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                    bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                    switch (c = bits) {
                      case 0:
                        for (bits = 0, maxpower = Math.pow(2, 8), power = 1; power != maxpower; ) resb = data.val & data.position, 
                        data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                        bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                        dictionary[dictSize++] = f(bits), c = dictSize - 1, enlargeIn--;
                        break;

                      case 1:
                        for (bits = 0, maxpower = Math.pow(2, 16), power = 1; power != maxpower; ) resb = data.val & data.position, 
                        data.position >>= 1, 0 == data.position && (data.position = resetValue, data.val = getNextValue(data.index++)), 
                        bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
                        dictionary[dictSize++] = f(bits), c = dictSize - 1, enlargeIn--;
                        break;

                      case 2:
                        return result.join("");
                    }
                    if (0 == enlargeIn && (enlargeIn = Math.pow(2, numBits), numBits++), dictionary[c]) entry = dictionary[c]; else {
                        if (c !== dictSize) return null;
                        entry = w + w.charAt(0);
                    }
                    result.push(entry), dictionary[dictSize++] = w + entry.charAt(0), w = entry, 0 == --enlargeIn && (enlargeIn = Math.pow(2, numBits), 
                    numBits++);
                }
            }
        };
        return LZString;
    }();
    exports.default = LZString;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.PolicyEnum = void 0, function(PolicyEnum) {
        PolicyEnum.AGREE = "AGREE", PolicyEnum.REJECT = "REJECT";
    }(exports.PolicyEnum || (exports.PolicyEnum = {}));
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
    const inversify_1 = __webpack_require__(0), ContentEvents_1 = __webpack_require__(13), UrbanTypes_1 = __webpack_require__(34), ProtectionStateService_1 = __webpack_require__(141);
    let PopupSetProtectionState = class PopupSetProtectionState {
        constructor(protectionStateService) {
            this.protectionStateService = protectionStateService;
        }
        on() {
            return ContentEvents_1.ContentEvents.POPUP_SET_PROTECTION_STATE;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const params = event.data;
                switch (params.action) {
                  case "SET_PROTECTION_STATE":
                    params.enabled ? yield this.protectionStateService.enableProtection() : yield this.protectionStateService.disableProtection();
                    break;

                  case "SET_FEATURE_STATE":
                    params.enabled ? yield this.protectionStateService.enableFeature(params.name) : yield this.protectionStateService.disableFeature(params.name);
                    break;

                  case "SET_FEATURE_PROPS":
                    this.protectionStateService.setFeatureProps(params.name, params.props);
                }
                sendResponse(null);
            }));
        }
    };
    PopupSetProtectionState = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_PROTECTION_STATE_SERVICE)), __metadata("design:paramtypes", [ ProtectionStateService_1.ProtectionStateService ]) ], PopupSetProtectionState), 
    exports.PopupSetProtectionState = PopupSetProtectionState;
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
    const inversify_1 = __webpack_require__(0), UrbanTypes_1 = __webpack_require__(34), UrbanToolbarService_1 = __webpack_require__(138), ProxyLocationEvents_1 = __webpack_require__(103);
    let BeforeLocationActivated = class BeforeLocationActivated {
        constructor(urbanToolbarService) {
            this.urbanToolbarService = urbanToolbarService;
        }
        on() {
            return ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_BEFORE_ACTIVATED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const location = event.data.location;
                yield this.urbanToolbarService.drawFlag(location.code().value());
            }));
        }
    };
    BeforeLocationActivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_TOOLBAR_SERVICE)), __metadata("design:paramtypes", [ UrbanToolbarService_1.UrbanToolbarService ]) ], BeforeLocationActivated), 
    exports.BeforeLocationActivated = BeforeLocationActivated;
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
    const inversify_1 = __webpack_require__(0), UrbanTypes_1 = __webpack_require__(34), UrbanToolbarService_1 = __webpack_require__(138), ProxyLocationEvents_1 = __webpack_require__(103);
    let BeforeLocationDeactivated = class BeforeLocationDeactivated {
        constructor(urbanToolbarService) {
            this.urbanToolbarService = urbanToolbarService;
        }
        on() {
            return ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_AFTER_DEACTIVATED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const roboIcon = this.urbanToolbarService.getGreyedRoboImage();
                yield this.urbanToolbarService.draw(roboIcon);
            }));
        }
    };
    BeforeLocationDeactivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_TOOLBAR_SERVICE)), __metadata("design:paramtypes", [ UrbanToolbarService_1.UrbanToolbarService ]) ], BeforeLocationDeactivated), 
    exports.BeforeLocationDeactivated = BeforeLocationDeactivated;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), ProxyEvents_1 = __webpack_require__(89);
    let ProxyErrorListener = class ProxyErrorListener {
        constructor(logger) {
            this.logger = logger;
        }
        on() {
            return ProxyEvents_1.ProxyEvents.PROXY_ERROR;
        }
        handle(event) {
            new Error("Proxy Error: " + event.data.error);
        }
    };
    ProxyErrorListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], ProxyErrorListener), 
    exports.ProxyErrorListener = ProxyErrorListener;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1), AlarmEvents_1 = __webpack_require__(88), UrbanTypes_1 = __webpack_require__(34), UrbanLocationService_1 = __webpack_require__(142), DataCenterTypes_1 = __webpack_require__(143), AlarmNames_1 = __webpack_require__(171), DataCenterApiService_1 = __webpack_require__(145);
    let UpdateLocations = class UpdateLocations {
        constructor(identity, password, urbanLocationService, dataCenterApi, logger) {
            this.identity = identity, this.password = password, this.urbanLocationService = urbanLocationService, 
            this.dataCenterApi = dataCenterApi, this.logger = logger;
        }
        on() {
            return AlarmEvents_1.AlarmEvents.ALARM_ELAPSED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const alarm = event.data;
                if (AlarmNames_1.AlarmNames.UPDATE_LOCATIONS === alarm.name) try {
                    const earth = yield this.urbanLocationService.fetchLocations();
                    0 === earth.length() ? this.logger.warn("UpdateLocations: empty response") : (this.urbanLocationService.updateEarth(earth), 
                    this.urbanLocationService.setReady());
                } catch (e) {
                    this.logger.error(e);
                }
            }));
        }
    };
    UpdateLocations = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_IDENTITY)), __param(1, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_PASSWORD)), __param(2, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_LOCATION_SERVICE)), __param(3, inversify_1.inject(DataCenterTypes_1.DataCenterTypes.DATA_CENTER_SERVICE)), __param(4, inversify_1.inject(src_1.MARIO_TYPES.LOGGER_SERVICE)), __metadata("design:paramtypes", [ String, String, UrbanLocationService_1.UrbanLocationService, DataCenterApiService_1.DataCenterApiService, Object ]) ], UpdateLocations), 
    exports.UpdateLocations = UpdateLocations;
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
    const inversify_1 = __webpack_require__(0), ProxyLocationEvents_1 = __webpack_require__(103), HideMyLocationTypes_1 = __webpack_require__(109), HideMyGeoLocationService_1 = __webpack_require__(110);
    let AfterLocationDeactivated = class AfterLocationDeactivated {
        constructor(hideLocationService) {
            this.hideLocationService = hideLocationService;
        }
        on() {
            return ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_AFTER_DEACTIVATED;
        }
        handle(event) {
            this.hideLocationService.disable();
        }
    };
    AfterLocationDeactivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(HideMyLocationTypes_1.HideMyLocationTypes.HIDE_MY_LOCATION_SERVICE)), __metadata("design:paramtypes", [ HideMyGeoLocationService_1.HideMyGeoLocationService ]) ], AfterLocationDeactivated), 
    exports.AfterLocationDeactivated = AfterLocationDeactivated;
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
    const inversify_1 = __webpack_require__(0), ProxyLocationEvents_1 = __webpack_require__(103), HideMyLocationTypes_1 = __webpack_require__(109), HideMyGeoLocationService_1 = __webpack_require__(110);
    let AfterLocationActivated = class AfterLocationActivated {
        constructor(hideLocationService) {
            this.hideLocationService = hideLocationService;
        }
        on() {
            return ProxyLocationEvents_1.ProxyLocationEvents.PROXY_LOCATION_AFTER_ACTIVATED;
        }
        handle(event) {
            this.hideLocationService.enable();
        }
    };
    AfterLocationActivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(HideMyLocationTypes_1.HideMyLocationTypes.HIDE_MY_LOCATION_SERVICE)), __metadata("design:paramtypes", [ HideMyGeoLocationService_1.HideMyGeoLocationService ]) ], AfterLocationActivated), 
    exports.AfterLocationActivated = AfterLocationActivated;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), BrowserEnum_1 = __webpack_require__(22), ManagementChromeService_1 = __webpack_require__(265), ManagementFirefoxService_1 = __webpack_require__(266);
    let ManagementService = class ManagementService {
        constructor(browser, container) {
            this.browser = browser, this.container = container;
            const implementations = {};
            implementations[BrowserEnum_1.BrowserEnum.CHROME_BROWSER] = ManagementChromeService_1.ManagementChromeService, 
            implementations[BrowserEnum_1.BrowserEnum.FIREFOX_BROWSER] = ManagementFirefoxService_1.ManagementFirefoxService;
            const key = implementations.hasOwnProperty(this.browser) ? browser : BrowserEnum_1.BrowserEnum.CHROME_BROWSER, useClass = implementations[key];
            this.container.bind("temp_name").to(useClass).inSingletonScope(), this.service = this.container.get("temp_name"), 
            this.container.unbind("temp_name");
        }
        get(id) {
            return this.service.get(id);
        }
        getAll() {
            return this.service.getAll();
        }
        setEnabled(id, enabled) {
            return this.service.setEnabled(id, enabled);
        }
    };
    ManagementService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.BROWSER)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.CONTAINER)), __metadata("design:paramtypes", [ String, Object ]) ], ManagementService), 
    exports.ManagementService = ManagementService;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), ManagementEvents_1 = __webpack_require__(190), __1 = __webpack_require__(1);
    let ManagementChromeService = class ManagementChromeService {
        constructor(internalDispatcher) {
            this.internalDispatcher = internalDispatcher, chrome.management.onInstalled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.INSTALL, info);
                this.internalDispatcher.emit(event).then();
            }), chrome.management.onUninstalled.addListener(id => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.UNINSTALL, id);
                this.internalDispatcher.emit(event).then();
            }), chrome.management.onEnabled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.ENABLED, info);
                this.internalDispatcher.emit(event).then();
            }), chrome.management.onDisabled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.DISABLED, info);
                this.internalDispatcher.emit(event).then();
            });
        }
        get(id) {
            return new Promise((resolve, reject) => {
                try {
                    chrome.management.get(id, extensionInfo => resolve(extensionInfo));
                } catch (e) {
                    reject(e);
                }
            });
        }
        getAll() {
            return new Promise((resolve, reject) => {
                try {
                    chrome.management.getAll(extensionsInfo => resolve(extensionsInfo));
                } catch (e) {
                    reject(e);
                }
            });
        }
        setEnabled(id, enabled) {
            return new Promise((resolve, reject) => {
                try {
                    chrome.management.setEnabled(id, enabled, () => resolve());
                } catch (e) {
                    reject(e);
                }
            });
        }
    };
    ManagementChromeService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], ManagementChromeService), 
    exports.ManagementChromeService = ManagementChromeService;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), __1 = __webpack_require__(1), ManagementEvents_1 = __webpack_require__(190);
    let ManagementFirefoxService = class ManagementFirefoxService {
        constructor(internalDispatcher) {
            this.internalDispatcher = internalDispatcher, browser.management.onInstalled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.INSTALL, info);
                this.internalDispatcher.emit(event).then();
            }), browser.management.onUninstalled.addListener(id => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.UNINSTALL, id);
                this.internalDispatcher.emit(event).then();
            }), browser.management.onDisabled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.DISABLED, info);
                this.internalDispatcher.emit(event).then();
            }), browser.management.onEnabled.addListener(info => {
                const event = new __1.MarioEvent(ManagementEvents_1.ManagementEvents.ENABLED, info);
                this.internalDispatcher.emit(event).then();
            });
        }
        get(id) {
            return __awaiter(this, void 0, void 0, (function*() {
                return yield browser.management.get(id);
            }));
        }
        getAll() {
            return __awaiter(this, void 0, void 0, (function*() {
                return yield browser.management.getAll();
            }));
        }
        setEnabled(id, enabled) {
            return __awaiter(this, void 0, void 0, (function*() {
                return browser.management.setEnabled(id, enabled);
            }));
        }
    };
    ManagementFirefoxService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], ManagementFirefoxService), 
    exports.ManagementFirefoxService = ManagementFirefoxService;
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
    }), exports.WeightBasedStrategy = void 0;
    exports.WeightBasedStrategy = class WeightBasedStrategy {
        selectProxy(location) {
            return __awaiter(this, void 0, void 0, (function*() {
                const groups = [];
                this.groupByWeight(location, groups);
                const total = this.calculateTotalWeight(groups);
                if (0 === total) throw new Error(`WeightBasedStrategy: location "${location.name().value()}" can not be activated`);
                const random = this.randomNumber(1, total);
                return this.findProxy(random, groups);
            }));
        }
        canBeActivated(location) {
            const groups = [];
            return this.groupByWeight(location, groups), this.calculateTotalWeight(groups) > 0;
        }
        groupByWeight(location, groups) {
            location.configList().forEach(config => {
                const ports = config.portRange().to() - config.portRange().from() + 1, from = groups.length ? groups[groups.length - 1].to + 1 : 1, group = {
                    from: from,
                    to: from + config.weight().value() * ports,
                    proxyConfig: config
                };
                groups.push(group);
            });
            for (const item of location) this.groupByWeight(item, groups);
        }
        calculateTotalWeight(groups) {
            return groups.length ? groups[groups.length - 1].to : 0;
        }
        findProxy(numb, groups) {
            const config = groups.find(group => group.from <= numb && group.to >= numb).proxyConfig, range = config.portRange();
            return {
                port: this.randomNumber(range.from(), range.to()),
                scheme: config.scheme().value(),
                host: config.host().value()
            };
        }
        randomNumber(from, to) {
            return parseInt(Math.floor(Math.random() * (to - from + 1) + from).toString(), 10);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const inversify_1 = __webpack_require__(0);
    let PageHistoryService = class PageHistoryService {
        constructor() {
            this.pages = {};
        }
        visit(page) {
            this[page] = !0;
        }
        visited(page) {
            return !!this[page];
        }
    };
    PageHistoryService = __decorate([ inversify_1.injectable() ], PageHistoryService), 
    exports.PageHistoryService = PageHistoryService;
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
    const inversify_1 = __webpack_require__(0), PolicyServiceEvents_1 = __webpack_require__(189), PanelOsTypes_1 = __webpack_require__(99), PanelOsService_1 = __webpack_require__(100), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsService_1 = __webpack_require__(87), UrbanTypes_1 = __webpack_require__(34), UrbanBugsnagService_1 = __webpack_require__(191), UrlsSafeCheckTypes_1 = __webpack_require__(12), StateService_1 = __webpack_require__(90);
    let PolicyAgreedEventListener = class PolicyAgreedEventListener {
        constructor(panel, ga, bagsnagService, safeCheckStateService) {
            this.panel = panel, this.ga = ga, this.bagsnagService = bagsnagService, this.safeCheckStateService = safeCheckStateService;
        }
        on() {
            return PolicyServiceEvents_1.PolicyServiceEvents.POLICY_AGREED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.panel.activatePanelOS(), this.ga.enable(), yield this.safeCheckStateService.enable(), 
                yield this.bagsnagService.updateState();
            }));
        }
    };
    PolicyAgreedEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PanelOsTypes_1.PanelOsTypes.PANEL_OS_SERVICE)), __param(1, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE)), __param(2, inversify_1.inject(UrbanTypes_1.UrbanTypes.URBAN_BAGSNAG_SERVICE)), __param(3, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), __metadata("design:paramtypes", [ PanelOsService_1.PanelOsService, GoogleAnalyticsService_1.GoogleAnalyticsService, UrbanBugsnagService_1.UrbanBugsnagService, StateService_1.StateService ]) ], PolicyAgreedEventListener), 
    exports.PolicyAgreedEventListener = PolicyAgreedEventListener;
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
    const inversify_1 = __webpack_require__(0), src_1 = __webpack_require__(1);
    let InterruptionService = class InterruptionService {
        constructor(managementService) {
            this.managementService = managementService, this.excludeList = [ "ngpampappnmepgilojfohadhhmbhlaek" ];
        }
        isExtensionInterrupted() {
            return __awaiter(this, void 0, void 0, (function*() {
                return (yield this.getExtensionsThatCauseInterruptions()).length > 0;
            }));
        }
        disableExtensionsThatCauseInterruptions() {
            return __awaiter(this, void 0, void 0, (function*() {
                const extensions = yield this.getExtensionsThatCauseInterruptions();
                return extensions.forEach(extension => this.managementService.setEnabled(extension.id, !1)), 
                extensions.length;
            }));
        }
        getExtensionsThatCauseInterruptions() {
            return __awaiter(this, void 0, void 0, (function*() {
                return (yield this.managementService.getAll()).filter(extension => this.isNoMe(extension.id) && this.isNotExcludedExtension(extension.id) && extension.enabled && extension.permissions.includes("proxy"));
            }));
        }
        isExcludedExtension(extensionId) {
            return this.excludeList.includes(extensionId);
        }
        isNotExcludedExtension(extensionId) {
            return !this.isExcludedExtension(extensionId);
        }
        isItMe(extensionId) {
            return extensionId === chrome.runtime.id;
        }
        isNoMe(extensionId) {
            return !this.isItMe(extensionId);
        }
    };
    InterruptionService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(src_1.MARIO_TYPES.MANAGEMENT)), __metadata("design:paramtypes", [ Object ]) ], InterruptionService), 
    exports.InterruptionService = InterruptionService;
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
        var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
        function split(v) {
            var str, q, c = v.replace(/^v/, "").replace(/\+.*$/, ""), patchIndex = (q = "-", 
            -1 === (str = c).indexOf(q) ? str.length : str.indexOf(q)), arr = c.substring(0, patchIndex).split(".");
            return arr.push(c.substring(patchIndex + 1)), arr;
        }
        function tryParse(v) {
            return isNaN(Number(v)) ? v : Number(v);
        }
        function validate(version) {
            if ("string" != typeof version) throw new TypeError("Invalid argument expected string");
            if (!semver.test(version)) throw new Error("Invalid argument not valid semver ('" + version + "' received)");
        }
        function compareVersions(v1, v2) {
            [ v1, v2 ].forEach(validate);
            for (var s1 = split(v1), s2 = split(v2), i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
                var n1 = parseInt(s1[i] || 0, 10), n2 = parseInt(s2[i] || 0, 10);
                if (n1 > n2) return 1;
                if (n2 > n1) return -1;
            }
            var sp1 = s1[s1.length - 1], sp2 = s2[s2.length - 1];
            if (sp1 && sp2) {
                var p1 = sp1.split(".").map(tryParse), p2 = sp2.split(".").map(tryParse);
                for (i = 0; i < Math.max(p1.length, p2.length); i++) {
                    if (void 0 === p1[i] || "string" == typeof p2[i] && "number" == typeof p1[i]) return -1;
                    if (void 0 === p2[i] || "string" == typeof p1[i] && "number" == typeof p2[i]) return 1;
                    if (p1[i] > p2[i]) return 1;
                    if (p2[i] > p1[i]) return -1;
                }
            } else if (sp1 || sp2) return sp1 ? -1 : 1;
            return 0;
        }
        var allowedOperators = [ ">", ">=", "=", "<", "<=" ], operatorResMap = {
            ">": [ 1 ],
            ">=": [ 0, 1 ],
            "=": [ 0 ],
            "<=": [ -1, 0 ],
            "<": [ -1 ]
        };
        return compareVersions.validate = function(version) {
            return "string" == typeof version && semver.test(version);
        }, compareVersions.compare = function(v1, v2, operator) {
            !function(op) {
                if ("string" != typeof op) throw new TypeError("Invalid operator type, expected string but got " + typeof op);
                if (-1 === allowedOperators.indexOf(op)) throw new TypeError("Invalid operator, expected one of " + allowedOperators.join("|"));
            }(operator);
            var res = compareVersions(v1, v2);
            return operatorResMap[operator].indexOf(res) > -1;
        }, compareVersions;
    }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
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
    }), exports.IdentityModule = void 0;
    const src_1 = __webpack_require__(1), IdentityService_1 = __webpack_require__(180), IdentityTypes_1 = __webpack_require__(104);
    class IdentityModule extends src_1.MarioModule {
        name() {
            return "IdentityModule";
        }
        static use(mario, options) {
            return mario.registerModule(IdentityModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                const storageService = options.storageProvider || src_1.StorageService;
                this.mario().registerService(IdentityTypes_1.IdentityTypes.IDENTITY_STORAGE, storageService);
                const identityId = yield this.getIdentityId();
                this.mario().container().bind(IdentityTypes_1.IdentityTypes.IDENTITY_ID).toConstantValue(identityId), 
                this.mario().registerService(IdentityTypes_1.IdentityTypes.IDENTITY_SERVICE, IdentityService_1.IdentityService);
            }));
        }
        getIdentityId() {
            return __awaiter(this, void 0, void 0, (function*() {
                if (!(yield this.getStorageService().has("IDENTITY_ID"))) {
                    const clientId = this.generateIdentityId();
                    return yield this.getStorageService().set("IDENTITY_ID", clientId), clientId;
                }
                return yield this.getStorageService().get("IDENTITY_ID");
            }));
        }
        getStorageService() {
            return this.mario().getService(IdentityTypes_1.IdentityTypes.IDENTITY_STORAGE);
        }
        generateIdentityId() {
            return `${Math.floor(2147483647 * Math.random())}.${Math.floor(Date.now() / 1e3)}`;
        }
    }
    exports.IdentityModule = IdentityModule;
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
    }), exports.GoogleAnalyticsModule = void 0;
    const src_1 = __webpack_require__(1), GoogleAnalyticsService_1 = __webpack_require__(87), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsTrackEvent_1 = __webpack_require__(274), GoogleAnalyticsTrackPage_1 = __webpack_require__(275);
    class GoogleAnalyticsModule extends src_1.MarioModule {
        name() {
            return "GoogleAnalyticsModule";
        }
        static use(mario, options) {
            return mario.registerModule(GoogleAnalyticsModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().logger().log("GoogleAnalyticsModule: trackerId: " + options.trackerId), 
                this.mario().logger().log("GoogleAnalyticsModule: hostName: " + options.hostName), 
                this.mario().logger().log("GoogleAnalyticsModule: clientId: " + options.clientId), 
                this.mario().logger().log("GoogleAnalyticsModule: enabled: " + options.enabled), 
                this.mario().container().bind(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_CLIENT_ID).toConstantValue(options.clientId), 
                this.mario().container().bind(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_HOST_NAME).toConstantValue(options.hostName), 
                this.mario().container().bind(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_TRACKER_ID).toConstantValue(options.trackerId), 
                this.mario().container().bind(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_ENABLED).toConstantValue(options.enabled), 
                this.mario().registerService(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE, GoogleAnalyticsService_1.GoogleAnalyticsService), 
                this.mario().externalDispatcher().on(GoogleAnalyticsTrackPage_1.GoogleAnalyticsTrackPage), 
                this.mario().externalDispatcher().on(GoogleAnalyticsTrackEvent_1.GoogleAnalyticsTrackEvent);
            }));
        }
    }
    exports.GoogleAnalyticsModule = GoogleAnalyticsModule;
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
    }), exports.GoogleAnalyticsTrackEvent = void 0;
    const inversify_1 = __webpack_require__(0), GoogleAnalyticsEvents_1 = __webpack_require__(42), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsService_1 = __webpack_require__(87);
    let GoogleAnalyticsTrackEvent = class GoogleAnalyticsTrackEvent {
        constructor(googleAnalyticsService) {
            this.googleAnalyticsService = googleAnalyticsService;
        }
        on() {
            return GoogleAnalyticsEvents_1.GoogleAnalyticsEvents.TRACK_EVENT;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const message = event.data;
                this.googleAnalyticsService.trackEvent(message.category, message.action, message.label, message.value);
            }));
        }
    };
    GoogleAnalyticsTrackEvent = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE)), __metadata("design:paramtypes", [ GoogleAnalyticsService_1.GoogleAnalyticsService ]) ], GoogleAnalyticsTrackEvent), 
    exports.GoogleAnalyticsTrackEvent = GoogleAnalyticsTrackEvent;
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
    }), exports.GoogleAnalyticsTrackPage = void 0;
    const inversify_1 = __webpack_require__(0), GoogleAnalyticsEvents_1 = __webpack_require__(42), GoogleAnalyticsTypes_1 = __webpack_require__(37), GoogleAnalyticsService_1 = __webpack_require__(87);
    let GoogleAnalyticsTrackPage = class GoogleAnalyticsTrackPage {
        constructor(googleAnalyticsService) {
            this.googleAnalyticsService = googleAnalyticsService;
        }
        on() {
            return GoogleAnalyticsEvents_1.GoogleAnalyticsEvents.TRACK_PAGE;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const message = event.data;
                this.googleAnalyticsService.trackPageView(message.pageUrl, message.pageTitle);
            }));
        }
    };
    GoogleAnalyticsTrackPage = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE)), __metadata("design:paramtypes", [ GoogleAnalyticsService_1.GoogleAnalyticsService ]) ], GoogleAnalyticsTrackPage), 
    exports.GoogleAnalyticsTrackPage = GoogleAnalyticsTrackPage;
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
    }), exports.DataCenterModule = void 0;
    const DataCenterTypes_1 = __webpack_require__(143), DataCenterApiService_1 = __webpack_require__(145), src_1 = __webpack_require__(1), ProxyLocationModule_1 = __webpack_require__(277);
    class DataCenterModule extends src_1.MarioModule {
        name() {
            return "DataCenterModule";
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.mario().registerModule(ProxyLocationModule_1.ProxyLocationModule), this.mario().registerService(DataCenterTypes_1.DataCenterTypes.DATA_CENTER_SERVICE, DataCenterApiService_1.DataCenterApiService);
            }));
        }
    }
    exports.DataCenterModule = DataCenterModule;
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
    }), exports.ProxyLocationModule = void 0;
    const src_1 = __webpack_require__(1), ProxyLocationTypes_1 = __webpack_require__(112), ProxyLocationService_1 = __webpack_require__(172), LocationHelper_1 = __webpack_require__(173), ProxyService_1 = __webpack_require__(278);
    class ProxyLocationModule extends src_1.MarioModule {
        name() {
            return "ProxyLocationModule";
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().registerService(src_1.MARIO_TYPES.PROXY_SERVICE, ProxyService_1.ProxyService), 
                this.mario().registerService(ProxyLocationTypes_1.ProxyLocationTypes.LOCATION_PROXY_SERVICE, ProxyLocationService_1.ProxyLocationService), 
                this.mario().registerService(ProxyLocationTypes_1.ProxyLocationTypes.LOCATION_HELPER_SERVICE, LocationHelper_1.LocationHelper);
            }));
        }
    }
    exports.ProxyLocationModule = ProxyLocationModule;
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
    const inversify_1 = __webpack_require__(0), BrowserEnum_1 = __webpack_require__(22), MARIO_TYPES_1 = __webpack_require__(4), ProxyServiceChrome_1 = __webpack_require__(279), ProxyServiceFirefox_1 = __webpack_require__(280), __1 = __webpack_require__(1), ProxyEvents_1 = __webpack_require__(89);
    let ProxyService = class ProxyService {
        constructor(browser, container, logger, internalDispatcher) {
            this.browser = browser, this.container = container, this.logger = logger, this.internalDispatcher = internalDispatcher;
            const implementations = {};
            implementations[BrowserEnum_1.BrowserEnum.CHROME_BROWSER] = ProxyServiceChrome_1.ProxyServiceChrome, 
            implementations[BrowserEnum_1.BrowserEnum.FIREFOX_BROWSER] = ProxyServiceFirefox_1.ProxyServiceFirefox;
            const key = implementations.hasOwnProperty(this.browser) ? browser : BrowserEnum_1.BrowserEnum.CHROME_BROWSER;
            this.container.bind("INTERNAL_PROXY_SERVICE").to(implementations[key]).inSingletonScope(), 
            this.proxyService = this.container.get("INTERNAL_PROXY_SERVICE"), this.container.unbind("INTERNAL_PROXY_SERVICE");
        }
        hasCurrent() {
            return this.proxyService.hasCurrent();
        }
        current() {
            return this.proxyService.current();
        }
        connect(proxyServer, bypassList) {
            return __awaiter(this, void 0, void 0, (function*() {
                const beforeEvent = new __1.MarioEvent(ProxyEvents_1.ProxyEvents.PROXY_BEFORE_CONNECT, {
                    proxyServer: proxyServer,
                    bypassList: bypassList
                });
                yield this.internalDispatcher.emit(beforeEvent), this.logger.log("ProxyService: connect to a proxy", {
                    proxyServer: proxyServer,
                    bypassList: bypassList
                }), yield this.proxyService.connect(proxyServer, bypassList);
                const afterEvent = new __1.MarioEvent(ProxyEvents_1.ProxyEvents.PROXY_AFTER_CONNECT, {
                    proxyServer: proxyServer,
                    bypassList: bypassList
                });
                yield this.internalDispatcher.emit(afterEvent);
            }));
        }
        direct() {
            return __awaiter(this, void 0, void 0, (function*() {
                const beforeEvent = new __1.MarioEvent(ProxyEvents_1.ProxyEvents.DIRECT_BEFORE_CONNECT);
                yield this.internalDispatcher.emit(beforeEvent), this.logger.log("ProxyService: use direct mode"), 
                yield this.proxyService.direct();
                const afterEvent = new __1.MarioEvent(ProxyEvents_1.ProxyEvents.DIRECT_AFTER_CONNECT);
                yield this.internalDispatcher.emit(afterEvent);
            }));
        }
        onAuthRequired(callback, filter = {
            urls: [ "<all_urls>" ]
        }, optExtraInfoSpec = [ "blocking" ]) {
            return this.proxyService.onAuthRequired(callback, filter, optExtraInfoSpec);
        }
    };
    ProxyService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.BROWSER)), __param(1, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.CONTAINER)), __param(2, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.LOGGER_SERVICE)), __param(3, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ String, Object, Object, Object ]) ], ProxyService), 
    exports.ProxyService = ProxyService;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), __1 = __webpack_require__(1), ProxyEvents_1 = __webpack_require__(89);
    let ProxyServiceChrome = class ProxyServiceChrome {
        constructor(internalDispatcher) {
            this.internalDispatcher = internalDispatcher, chrome.proxy.onProxyError.addListener(e => {
                this.internalDispatcher.emit(new __1.MarioEvent(ProxyEvents_1.ProxyEvents.PROXY_ERROR, e)).then();
            });
        }
        current() {
            return this._current;
        }
        hasCurrent() {
            return Boolean(this._current);
        }
        connect(proxyServer, bypassList) {
            const config = {
                mode: "fixed_servers",
                rules: {
                    bypassList: bypassList,
                    singleProxy: proxyServer
                }
            };
            return new Promise((resolve, reject) => {
                try {
                    chrome.proxy.settings.set({
                        value: config,
                        scope: "regular"
                    }, () => {
                        this._current = proxyServer, resolve();
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }
        direct() {
            return new Promise((resolve, reject) => {
                const config = {
                    mode: "direct"
                };
                try {
                    chrome.proxy.settings.set({
                        value: config,
                        scope: "regular"
                    }, () => {
                        this._current = null, resolve();
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }
        onAuthRequired(callback, filter = {
            urls: [ "<all_urls>" ]
        }, optExtraInfoSpec = [ "blocking" ]) {
            chrome.webRequest.onAuthRequired.addListener(() => ({
                authCredentials: callback()
            }), filter, optExtraInfoSpec);
        }
    };
    ProxyServiceChrome = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], ProxyServiceChrome), 
    exports.ProxyServiceChrome = ProxyServiceChrome;
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
    const inversify_1 = __webpack_require__(0), MARIO_TYPES_1 = __webpack_require__(4), __1 = __webpack_require__(1), ProxyEvents_1 = __webpack_require__(89);
    let ProxyServiceFirefox = class ProxyServiceFirefox {
        constructor(internalDispatcher) {
            this.internalDispatcher = internalDispatcher, this._current = null, this.userProxy = !1, 
            browser.proxy.onError.addListener(e => {
                this.internalDispatcher.emit(new __1.MarioEvent(ProxyEvents_1.ProxyEvents.PROXY_ERROR, e)).then();
            });
        }
        current() {
            return this._current;
        }
        hasCurrent() {
            return Boolean(this._current);
        }
        connect(proxyServer, bypassList) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (this.userProxy = !0, this._current = proxyServer, !this.listener) return this.listener = requestInfo => {
                    if (!this.userProxy) return {
                        type: "direct"
                    };
                    const url = new URL(requestInfo.url);
                    return -1 !== bypassList.indexOf(url.hostname) ? {
                        type: "direct"
                    } : {
                        type: this._current.scheme,
                        host: this._current.host,
                        port: this._current.port
                    };
                }, new Promise((resolve, reject) => {
                    try {
                        browser.proxy.onRequest.addListener(this.listener, {
                            urls: [ "<all_urls>" ]
                        }), resolve();
                    } catch (e) {
                        reject(e);
                    }
                });
            }));
        }
        direct() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.userProxy = !1, this._current = null;
            }));
        }
        onAuthRequired(callback, filter = {
            urls: [ "<all_urls>" ]
        }, optExtraInfoSpec = [ "blocking" ]) {
            browser.webRequest.onAuthRequired.addListener(() => ({
                authCredentials: callback()
            }), filter, optExtraInfoSpec);
        }
    };
    ProxyServiceFirefox = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(MARIO_TYPES_1.MARIO_TYPES.INTERNAL_DISPATCHER)), __metadata("design:paramtypes", [ Object ]) ], ProxyServiceFirefox), 
    exports.ProxyServiceFirefox = ProxyServiceFirefox;
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
    }), exports.PolicyModule = void 0;
    const src_1 = __webpack_require__(1), PolicyModuleTypes_1 = __webpack_require__(106), PolicyService_1 = __webpack_require__(150);
    class PolicyModule extends src_1.MarioModule {
        name() {
            return "PolicyModule";
        }
        static use(mario, options) {
            return mario.registerModule(PolicyModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().container().bind(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_STORAGE_SERVICE).toConstantValue(options.storageService), 
                this.mario().registerService(PolicyModuleTypes_1.PolicyModuleTypes.POLICY_SERVICE, PolicyService_1.PolicyService);
            }));
        }
    }
    exports.PolicyModule = PolicyModule;
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
    }), exports.UrlsSafeCheckModule = void 0;
    const src_1 = __webpack_require__(1), TabCreated_1 = __webpack_require__(283), TabActivated_1 = __webpack_require__(285), TabUpdated_1 = __webpack_require__(286), TabRemoved_1 = __webpack_require__(287), GetActiveTabStateEventListener_1 = __webpack_require__(288), MuteNotificationEventListener_1 = __webpack_require__(289), TabService_1 = __webpack_require__(20), NavigationService_1 = __webpack_require__(40), SensitiveDataFilterModule_1 = __webpack_require__(290), UrlsSafeCheckTypes_1 = __webpack_require__(12), StateService_1 = __webpack_require__(90), CheckSafeService_1 = __webpack_require__(182), DataService_1 = __webpack_require__(192), RequestService_1 = __webpack_require__(183), TabEventsProcessService_1 = __webpack_require__(92), StateDataService_1 = __webpack_require__(185), QueueService_1 = __webpack_require__(193), ContentUrlRewriteEventListener_1 = __webpack_require__(292);
    class UrlsSafeCheckModule extends src_1.MarioModule {
        name() {
            return "UrlsSafeCheckModule";
        }
        static use(mario, options) {
            return mario.registerModule(UrlsSafeCheckModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_ENDPOINT_DOMAIN).toConstantValue(options.apiUrl), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PANELLIST_ID).toConstantValue(options.panellistId), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PANEL_ID).toConstantValue(options.panelId), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_PARTNER_ID).toConstantValue(options.partnerId), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_DISTRIBUTOR_ID).toConstantValue(options.distributorId), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_ENABLED).toConstantValue(!!options.enabled), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_INIT_MODE).toConstantValue(options.mode), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TRACK_LOADING_STATE).toConstantValue(options.trackLoadingState), 
                this.mario().container().bind(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_LOGGING).toConstantValue(!!options.logging), 
                this.mario().registerService(src_1.MARIO_TYPES.TAB_SERVICE, TabService_1.TabService), 
                this.mario().registerService(src_1.MARIO_TYPES.NAVIGATION_SERVICE, NavigationService_1.NavigationService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE, StateService_1.StateService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_DATA_SERVICE, StateDataService_1.StateDataService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_CHECK_SERVICE, CheckSafeService_1.CheckSafeService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_DATA_SERVICE, DataService_1.DataService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_REQUEST_SERVICE, RequestService_1.RequestService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE, TabEventsProcessService_1.TabEventsProcessService), 
                this.mario().registerService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_QUEUE_SERVICE, QueueService_1.QueueService), 
                yield this.mario().registerModule(SensitiveDataFilterModule_1.SensitiveDataFilterModule, {
                    enabled: !!options.sensitiveDataCheckEnabled,
                    host: options.sensitiveDataApiUrl,
                    logging: !1
                }), this.mario().getService(src_1.MARIO_TYPES.TAB_SERVICE).listenOnCreated(), this.mario().getService(src_1.MARIO_TYPES.TAB_SERVICE).listenOnActivated(), 
                this.mario().getService(src_1.MARIO_TYPES.TAB_SERVICE).listenOnUpdated(), this.mario().getService(src_1.MARIO_TYPES.TAB_SERVICE).listenOnRemoved(), 
                this.mario().externalDispatcher().on(GetActiveTabStateEventListener_1.GetActiveTabStateEventListener), 
                this.mario().externalDispatcher().on(MuteNotificationEventListener_1.MuteNotificationEventListener), 
                this.mario().externalDispatcher().on(ContentUrlRewriteEventListener_1.ContentUrlRewriteEventListener), 
                this.mario().internalDispatcher().on(TabCreated_1.TabCreated), this.mario().internalDispatcher().on(TabActivated_1.TabActivated), 
                this.mario().internalDispatcher().on(TabUpdated_1.TabUpdated), this.mario().internalDispatcher().on(TabRemoved_1.TabRemoved), 
                this.mario().getService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE).setMode(options.mode);
            }));
        }
    }
    exports.UrlsSafeCheckModule = UrlsSafeCheckModule;
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
    }), exports.TabCreated = void 0;
    const inversify_1 = __webpack_require__(0), TabServiceEvents_1 = __webpack_require__(31), TabEventsProcessService_1 = __webpack_require__(92), UrlsSafeCheckTypes_1 = __webpack_require__(12), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let TabCreated = class TabCreated {
        constructor(tabEventsProcessService) {
            this.tabEventsProcessService = tabEventsProcessService;
        }
        on() {
            return TabServiceEvents_1.TabServiceEvents.ON_TAB_CREATED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {tab: tab} = event.data, {id: id, openerTabId: openerTabId, url: url, pendingUrl: pendingUrl} = tab;
                setTimeout(() => {
                    this.tabEventsProcessService.process({
                        type: TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.CREATE,
                        id: id,
                        url: url,
                        openerTabId: openerTabId,
                        pendingUrl: pendingUrl
                    });
                }, 300);
            }));
        }
    };
    TabCreated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE)), __metadata("design:paramtypes", [ TabEventsProcessService_1.TabEventsProcessService ]) ], TabCreated), 
    exports.TabCreated = TabCreated;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.getOSVersion = void 0, exports.getOSVersion = function() {
        const nVer = navigator.appVersion, nAgt = navigator.userAgent;
        let os = "";
        const clientStrings = [ {
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
        }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
        }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
        }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: "Windows CE",
            r: /Windows CE/
        }, {
            s: "Windows 3.11",
            r: /Win16/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Open BSD",
            r: /OpenBSD/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Chrome OS",
            r: /CrOS/
        }, {
            s: "Linux",
            r: /(Linux|X11(?!.*CrOS))/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: "QNX",
            r: /QNX/
        }, {
            s: "UNIX",
            r: /UNIX/
        }, {
            s: "BeOS",
            r: /BeOS/
        }, {
            s: "OS/2",
            r: /OS\/2/
        }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        } ];
        for (let id in clientStrings) {
            let cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }
        let osVersion;
        switch (/Windows/.test(os) && (osVersion = /Windows (.*)/.exec(os)[1], os = "Windows"), 
        os) {
          case "Mac OS X":
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

          case "Android":
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

          case "iOS":
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer), osVersion = osVersion[1] + "." + osVersion[2] + "." + (0 | osVersion[3]);
        }
        return {
            name: os,
            version: osVersion
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
    }), exports.TabActivated = void 0;
    const inversify_1 = __webpack_require__(0), TabServiceEvents_1 = __webpack_require__(31), TabEventsProcessService_1 = __webpack_require__(92), UrlsSafeCheckTypes_1 = __webpack_require__(12), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let TabActivated = class TabActivated {
        constructor(tabEventsProcessService) {
            this.tabEventsProcessService = tabEventsProcessService;
        }
        on() {
            return TabServiceEvents_1.TabServiceEvents.ON_TAB_ACTIVATED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {activeInfo: activeInfo} = event.data, {tabId: tabId} = activeInfo;
                setTimeout(() => {
                    this.tabEventsProcessService.process({
                        type: TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.ACTIVATE,
                        id: tabId
                    });
                });
            }));
        }
    };
    TabActivated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE)), __metadata("design:paramtypes", [ TabEventsProcessService_1.TabEventsProcessService ]) ], TabActivated), 
    exports.TabActivated = TabActivated;
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
    }), exports.TabUpdated = void 0;
    const inversify_1 = __webpack_require__(0), TabServiceEvents_1 = __webpack_require__(31), TabEventsProcessService_1 = __webpack_require__(92), UrlsSafeCheckTypes_1 = __webpack_require__(12), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let TabUpdated = class TabUpdated {
        constructor(tabEventsProcessService) {
            this.tabEventsProcessService = tabEventsProcessService;
        }
        on() {
            return TabServiceEvents_1.TabServiceEvents.ON_TAB_UPDATED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const {changeInfo: changeInfo, tab: tab} = event.data;
                if (changeInfo.status) {
                    const type = "loading" === changeInfo.status ? TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.LOADING : TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.COMPLETE;
                    setTimeout(() => {
                        this.tabEventsProcessService.process({
                            type: type,
                            id: tab.id,
                            url: tab.url
                        });
                    }, 300);
                }
            }));
        }
    };
    TabUpdated = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE)), __metadata("design:paramtypes", [ TabEventsProcessService_1.TabEventsProcessService ]) ], TabUpdated), 
    exports.TabUpdated = TabUpdated;
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
    }), exports.TabRemoved = void 0;
    const inversify_1 = __webpack_require__(0), TabServiceEvents_1 = __webpack_require__(31), TabEventsProcessService_1 = __webpack_require__(92), UrlsSafeCheckTypes_1 = __webpack_require__(12), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let TabRemoved = class TabRemoved {
        constructor(tabEventsProcessService) {
            this.tabEventsProcessService = tabEventsProcessService;
        }
        on() {
            return TabServiceEvents_1.TabServiceEvents.ON_TAB_REMOVED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                const tabId = event.data.tabId;
                setTimeout(() => {
                    this.tabEventsProcessService.process({
                        type: TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.CLOSE,
                        id: tabId
                    });
                }, 300);
            }));
        }
    };
    TabRemoved = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE)), __metadata("design:paramtypes", [ TabEventsProcessService_1.TabEventsProcessService ]) ], TabRemoved), 
    exports.TabRemoved = TabRemoved;
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
    }), exports.GetActiveTabStateEventListener = void 0;
    const inversify_1 = __webpack_require__(0), StateService_1 = __webpack_require__(90), UrlsSafeCheckEvents_1 = __webpack_require__(41), UrlsSafeCheckTypes_1 = __webpack_require__(12);
    let GetActiveTabStateEventListener = class GetActiveTabStateEventListener {
        constructor(stateService) {
            this.stateService = stateService;
        }
        on() {
            return UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.GET_ACTIVE_TAB_STATE;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                const activeTab = yield this.stateService.getActiveTabState();
                sendResponse(activeTab);
            }));
        }
    };
    GetActiveTabStateEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), __metadata("design:paramtypes", [ StateService_1.StateService ]) ], GetActiveTabStateEventListener), 
    exports.GetActiveTabStateEventListener = GetActiveTabStateEventListener;
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
    }), exports.MuteNotificationEventListener = void 0;
    const inversify_1 = __webpack_require__(0), StateService_1 = __webpack_require__(90), UrlsSafeCheckEvents_1 = __webpack_require__(41), UrlsSafeCheckTypes_1 = __webpack_require__(12);
    let MuteNotificationEventListener = class MuteNotificationEventListener {
        constructor(stateService) {
            this.stateService = stateService;
        }
        on() {
            return UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.MUTE_NOTIFICATION;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (sender.tab) {
                    const {persist: persist} = event.data;
                    this.stateService.muteTabNofitication(sender.tab.id, persist);
                }
                sendResponse(void 0);
            }));
        }
    };
    MuteNotificationEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE)), __metadata("design:paramtypes", [ StateService_1.StateService ]) ], MuteNotificationEventListener), 
    exports.MuteNotificationEventListener = MuteNotificationEventListener;
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
    }), exports.SensitiveDataFilterModule = void 0;
    const src_1 = __webpack_require__(1), AlarmService_1 = __webpack_require__(105), SensitiveDataFilterTypes_1 = __webpack_require__(113), SensitiveDataFilterService_1 = __webpack_require__(147), UpdateRulesListEvent_1 = __webpack_require__(291), AlarmNames_1 = __webpack_require__(195);
    class SensitiveDataFilterModule extends src_1.MarioModule {
        name() {
            return "SensitiveDataFilterModule";
        }
        static use(mario, options) {
            return mario.registerModule(SensitiveDataFilterModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().container().bind(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_ENABLED).toConstantValue(!!options.enabled), 
                this.mario().container().bind(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_HOST).toConstantValue(options.host), 
                this.mario().container().bind(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_LOGGING).toConstantValue(!!options.logging), 
                this.mario().container().bind(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_PARAM_RULES_UPDATE_INTERVAL).toConstantValue(options.rulesUpdateInterval), 
                this.mario().registerService(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_SERVICE, SensitiveDataFilterService_1.SensitiveDataFilterService), 
                yield this.mario().registerService(src_1.MARIO_TYPES.ALARM_SERVICE, AlarmService_1.AlarmService), 
                yield this.mario().getService(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_SERVICE).init(), 
                this.mario().internalDispatcher().on(UpdateRulesListEvent_1.UpdateRulesListEvent);
                const alarmOptions = {
                    delayInMinutes: options.rulesUpdateInterval || 1440,
                    periodInMinutes: options.rulesUpdateInterval || 1440
                };
                yield this.mario().getService(src_1.MARIO_TYPES.ALARM_SERVICE).create(alarmOptions, AlarmNames_1.AlarmNames.UPDATE_RULES_LIST);
            }));
        }
    }
    exports.SensitiveDataFilterModule = SensitiveDataFilterModule;
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
    }), exports.UpdateRulesListEvent = void 0;
    const inversify_1 = __webpack_require__(0), AlarmEvents_1 = __webpack_require__(88), AlarmNames_1 = __webpack_require__(195), SensitiveDataFilterTypes_1 = __webpack_require__(113), SensitiveDataFilterService_1 = __webpack_require__(147);
    let UpdateRulesListEvent = class UpdateRulesListEvent {
        constructor(sensitiveDataFilterService) {
            this.sensitiveDataFilterService = sensitiveDataFilterService;
        }
        on() {
            return AlarmEvents_1.AlarmEvents.ALARM_ELAPSED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                event.data.name === AlarmNames_1.AlarmNames.UPDATE_RULES_LIST && this.sensitiveDataFilterService.updateRules();
            }));
        }
    };
    UpdateRulesListEvent = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(SensitiveDataFilterTypes_1.SensitiveDataFilterTypes.SDF_SERVICE)), __metadata("design:paramtypes", [ SensitiveDataFilterService_1.SensitiveDataFilterService ]) ], UpdateRulesListEvent), 
    exports.UpdateRulesListEvent = UpdateRulesListEvent;
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
    }), exports.ContentUrlRewriteEventListener = void 0;
    const inversify_1 = __webpack_require__(0), UrlsSafeCheckEvents_1 = __webpack_require__(41), UrlsSafeCheckTypes_1 = __webpack_require__(12), CheckSafeServiceInterface_1 = __webpack_require__(194), TabEventsProcessService_1 = __webpack_require__(92), TabEventsProcessServiceInterface_1 = __webpack_require__(93);
    let ContentUrlRewriteEventListener = class ContentUrlRewriteEventListener {
        constructor(tabEventsProcessService) {
            this.tabEventsProcessService = tabEventsProcessService;
        }
        on() {
            return UrlsSafeCheckEvents_1.UrlsSafeCheckEvents.CONTENT_URL_REWRITED;
        }
        handle(event, sender, sendResponse) {
            return __awaiter(this, void 0, void 0, (function*() {
                if (sender.tab) {
                    const {id: id, url: url} = sender.tab;
                    this.tabEventsProcessService.process({
                        type: TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.LOADING,
                        id: id,
                        url: url,
                        label: "url rewrite"
                    }), this.tabEventsProcessService.process({
                        type: TabEventsProcessServiceInterface_1.TAB_EVENT_TYPE.COMPLETE,
                        id: id,
                        url: url,
                        method: CheckSafeServiceInterface_1.MethodType.URL_REWRITE,
                        label: "url rewrite"
                    });
                }
                sendResponse(void 0);
            }));
        }
    };
    ContentUrlRewriteEventListener = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_TAB_EVENTS_PROCESS_SERVICE)), __metadata("design:paramtypes", [ TabEventsProcessService_1.TabEventsProcessService ]) ], ContentUrlRewriteEventListener), 
    exports.ContentUrlRewriteEventListener = ContentUrlRewriteEventListener;
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
    }), exports.PanellistIdentityModule = void 0;
    const src_1 = __webpack_require__(1), PanellistIdentityService_1 = __webpack_require__(294), PanellistIdentityTypes_1 = __webpack_require__(151);
    class PanellistIdentityModule extends src_1.MarioModule {
        name() {
            return "PanellistIdentityModule";
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().container().bind(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_HOST).toConstantValue(options.host), 
                this.mario().container().bind(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_LOGGING).toConstantValue(options.logging), 
                this.mario().registerService(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_SERVICE, PanellistIdentityService_1.PanellistIdentityService), 
                yield this.mario().getService(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_SERVICE).resolveId();
            }));
        }
    }
    exports.PanellistIdentityModule = PanellistIdentityModule;
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
    }), exports.PanellistIdentityService = void 0;
    const inversify_1 = __webpack_require__(0), PanellistIdentityTypes_1 = __webpack_require__(151), panelist_utility_1 = __webpack_require__(295);
    let PanellistIdentityService = class PanellistIdentityService {
        constructor(host, logging) {
            this.host = host, this.logging = logging, this.panelistUtility = new panelist_utility_1.default({
                host: this.host,
                logging: this.logging
            });
        }
        resolveId() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.identityId = yield this.panelistUtility.getKeyAsync();
            }));
        }
        getId() {
            return this.identityId;
        }
    };
    PanellistIdentityService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_HOST)), __param(1, inversify_1.inject(PanellistIdentityTypes_1.PanellistIdentityTypes.PANELLIST_IDENTITY_LOGGING)), __metadata("design:paramtypes", [ String, Boolean ]) ], PanellistIdentityService), 
    exports.PanellistIdentityService = PanellistIdentityService;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    const panelist_utility_1 = __webpack_require__(296);
    exports.default = panelist_utility_1.default;
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
    exports.default = class PanelistUtility {
        constructor(config = {}) {
            if (this.storageSyncKey = "panellistid", this.userKeyCacheHeader = "X-PANEL-USER-KEY", 
            this.userKeySymbolsCount = 22, "string" != typeof config.host) throw "Server host is undefined";
            this.host = config.host, this.logging = !!config.logging, this.cacheResourceUrl = this.host + "/api/identity/cache", 
            this.cookieResourceUrl = this.host + "/api/identity/cookie";
        }
        generateKey() {
            let result = "";
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length;
            for (let i = 0; i < this.userKeySymbolsCount; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
            return this.log("key generated locally: " + result), result;
        }
        setKey(value) {
            return __awaiter(this, void 0, void 0, (function*() {
                yield this.globalSetter(value);
            }));
        }
        synchronize() {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = yield this.loadKey();
                yield this.globalSetter(key);
            }));
        }
        loadKey() {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(resolve => __awaiter(this, void 0, void 0, (function*() {
                    let key;
                    key || (key = yield this.cacheGetter()), key || (key = yield this.cookieGetter()), 
                    key || (key = this.localStorageGetter()), resolve(key);
                })));
            }));
        }
        getKey(callback, sync) {
            this.getKeyAsync(sync).then(callback);
        }
        getKeyAsync(sync = !0) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = (yield this.loadKey()) || this.generateKey();
                return sync && (yield this.setKey(key)), key;
            }));
        }
        localStorageGetter() {
            this.log("localStorageGetter: try to get " + this.storageSyncKey + " from localStorage.");
            const key = localStorage.getItem(this.storageSyncKey);
            return key ? this.log("localStorageGetter: " + this.storageSyncKey + " has been found in localStorage. Value: " + key) : this.log("localStorageGetter: " + this.storageSyncKey + " has not been found in localStorage."), 
            key;
        }
        localStorageSetter(value) {
            this.log("localStorageSetter: " + this.storageSyncKey + " are going to be stored in localStorage."), 
            localStorage.setItem(this.storageSyncKey, value);
        }
        cacheGetter() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.log("CacheGetter: try to get " + this.storageSyncKey + " from cache.");
                const _this = this;
                return new Promise(resolve => {
                    const xhr = new XMLHttpRequest;
                    xhr.open("GET", this.cacheResourceUrl), xhr.timeout = 1e3, xhr.ontimeout = function() {
                        _this.log("CacheGetter: Caching request is timed out."), resolve();
                    }, xhr.onload = function() {
                        if (200 === xhr.status) try {
                            const key = JSON.parse(xhr.response).userKey;
                            key ? (_this.log("CacheGetter: " + _this.storageSyncKey + " has been found in cache. Value: " + key), 
                            resolve(key)) : resolve();
                        } catch (e) {
                            _this.log("CacheGetter: Error occurred while retrieving " + _this.storageSyncKey + " from cache."), 
                            resolve();
                        } else _this.log("CacheGetter: Caching request has been failed."), resolve();
                    }, xhr.onerror = function() {
                        resolve();
                    }, xhr.send();
                });
            }));
        }
        cacheSetter(value) {
            this.log("CacheSetter: " + this.storageSyncKey + " are going to be stored in cache.");
            const _this = this;
            return new Promise(resolve => {
                const xhr = new XMLHttpRequest;
                xhr.open("GET", this.cacheResourceUrl), xhr.setRequestHeader(this.userKeyCacheHeader, value), 
                xhr.setRequestHeader("Cache-Control", "no-cache"), xhr.responseType = "json", xhr.send(), 
                xhr.onload = function() {
                    200 === xhr.status ? (_this.log("CacheSetter: Caching request to server has been succeeded."), 
                    resolve(value)) : (_this.log("CacheSetter: Caching request has been failed."), resolve());
                }, xhr.onerror = function() {
                    resolve();
                };
            });
        }
        cookieGetter() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.log("CookieGetter: try to get " + this.storageSyncKey + " from cookie.");
                const _this = this;
                return new Promise(resolve => {
                    const xhr = new XMLHttpRequest;
                    xhr.withCredentials = !0, xhr.open("GET", this.cookieResourceUrl), xhr.timeout = 5e3, 
                    xhr.ontimeout = function() {
                        _this.log("CookieGetter: Request is timed out."), resolve();
                    }, xhr.onload = function() {
                        let key;
                        if (200 === xhr.status) try {
                            key = JSON.parse(xhr.response).userKey, key ? (_this.log("CookieGetter: " + _this.storageSyncKey + " has been found in cookie. Value:" + key), 
                            resolve(key)) : (_this.log("CookieGetter: " + _this.storageSyncKey + " has not been found in cookie. "), 
                            resolve());
                        } catch (e) {
                            _this.log("CookieGetter: Error occurred while retrieving " + _this.storageSyncKey + " from cookie."), 
                            resolve();
                        } else _this.log("CookieGetter: Cookie request has been failed."), resolve();
                    }, xhr.onerror = function() {
                        resolve();
                    }, xhr.send();
                });
            }));
        }
        cookieSetter(value) {
            this.log("CookieSetter: " + this.storageSyncKey + " are going to be stored in cookie.");
            const _this = this;
            return new Promise(resolve => {
                const xhr = new XMLHttpRequest;
                xhr.withCredentials = !0, xhr.open("POST", this.cookieResourceUrl + "?userKey=" + value), 
                xhr.send(), xhr.onload = function() {
                    200 === xhr.status ? (_this.log("CookieSetter: cookie request has been succeeded."), 
                    resolve(value)) : (_this.log("CookieSetter: cookie request has been failed."), resolve());
                }, xhr.onerror = function() {
                    resolve();
                };
            });
        }
        cookieClear() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.log("CookieClearer: " + this.storageSyncKey + " are going to be deleted.");
                const _this = this;
                return new Promise(resolve => {
                    const xhr = new XMLHttpRequest;
                    xhr.withCredentials = !0, xhr.open("DELETE", this.cookieResourceUrl), xhr.send(), 
                    xhr.onload = function() {
                        200 === xhr.status ? (_this.log("CookieClearer: cookie request has been succeeded."), 
                        resolve()) : (_this.log("CookieClearer: cookie request has been failed."), resolve());
                    }, xhr.onerror = function() {
                        resolve();
                    };
                });
            }));
        }
        globalSetter(value) {
            return __awaiter(this, void 0, void 0, (function*() {
                value ? (this.localStorageSetter(value), yield this.cacheSetter(value), yield this.cookieClear(), 
                yield this.cookieSetter(value)) : this.log("Value provided to global setter is invalid.");
            }));
        }
        log(text) {
            this.logging && console.log(text);
        }
    };
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
    const src_1 = __webpack_require__(1), UrlsSafeCheckTypes_1 = __webpack_require__(12);
    class Migration_v4_0_0 extends src_1.MarioModule {
        name() {
            return "Migration_v4_0_0";
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                const policyService = options.policyService, storageService = options.storageService, key = "IS_HANDLED_MIGRATION_V4_0_0";
                if (!(yield storageService.has(key))) {
                    this.mario().logger().log("run migration to v4.0.0");
                    const value = yield storageService.get("POLICY"), mapper = {
                        NOT_ACCEPTED: "REJECT",
                        ACCEPTED: "AGREE",
                        ACCEPTED_BY_OLD_USER: "AGREE",
                        ACCEPTED_BY_DEFAULT: "AGREE"
                    };
                    if (mapper[value] && (yield storageService.set("POLICY", mapper[value])), yield policyService.isAgreed()) {
                        this.mario().logger().log("Policy is agreed");
                        const safeCheckStateService = this.mario().getService(UrlsSafeCheckTypes_1.UrlsSafeCheckTypes.USC_STATE_SERVICE);
                        yield safeCheckStateService.enable();
                    }
                    yield storageService.set(key, "true");
                }
            }));
        }
    }
    exports.Migration_v4_0_0 = Migration_v4_0_0;
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
    }), exports.HelloAndGoodbyeModule = void 0;
    const src_1 = __webpack_require__(1), GoogleAnalyticsTypes_1 = __webpack_require__(37);
    class HelloAndGoodbyeModule extends src_1.MarioModule {
        name() {
            return "HelloAndGoodbyeModule";
        }
        static use(mario, options) {
            return mario.registerModule(HelloAndGoodbyeModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                const version = this.mario().extension().manifest().version, cidKey = options.cidKey || "cid", versionKey = options.versionKey || "version";
                this.mario().extension().onInstall(details => {
                    const ga = this.getGoogleAnalyticsService();
                    if ("install" === details.reason) {
                        options.trackInstall && ga.trackEvent("extension", "install", version);
                        const url = `${options.installUrl}?${cidKey}=${options.identityId}&${versionKey}=${version}`;
                        chrome.tabs.create({
                            url: url
                        });
                    } else "update" === details.reason && options.trackUpdate && ga.trackEvent("extension", "update", version);
                });
                const uninstallURL = `${options.uninstallUrl}?${cidKey}=${options.identityId}&${versionKey}=${version}`;
                this.mario().extension().setUninstallURL(uninstallURL);
            }));
        }
        getGoogleAnalyticsService() {
            return this.mario().getService(GoogleAnalyticsTypes_1.GoogleAnalyticsTypes.GOOGLE_ANALYTICS_SERVICE);
        }
    }
    exports.HelloAndGoodbyeModule = HelloAndGoodbyeModule;
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
    }), exports.FlagModule = void 0;
    const src_1 = __webpack_require__(1), FlagModuleTypes_1 = __webpack_require__(196), FlagService_1 = __webpack_require__(300);
    class FlagModule extends src_1.MarioModule {
        name() {
            return "FlagModule";
        }
        static use(mario, options) {
            return mario.registerModule(FlagModule, options);
        }
        register(options) {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().container().bind(FlagModuleTypes_1.FlagModuleTypes.FLAG_STORAGE_SERVICE).toConstantValue(options.storageService), 
                this.mario().registerService(FlagModuleTypes_1.FlagModuleTypes.FLAG_SERVICE, FlagService_1.FlagService);
            }));
        }
    }
    exports.FlagModule = FlagModule;
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
    }), exports.FlagService = void 0;
    const inversify_1 = __webpack_require__(0), FlagModuleTypes_1 = __webpack_require__(196);
    let FlagService = class FlagService {
        constructor(storageService) {
            this.storageService = storageService, this.key = "FLAG";
        }
        get(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = this.mapFlag(flag);
                return JSON.parse(yield this.storageService.get(key));
            }));
        }
        has(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = this.mapFlag(flag);
                return this.storageService.has(key);
            }));
        }
        activate(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = this.mapFlag(flag), data = this.makeFlag(!0);
                yield this.storageService.set(key, JSON.stringify(data));
            }));
        }
        deactivate(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = this.mapFlag(flag), data = this.makeFlag(!1);
                yield this.storageService.set(key, JSON.stringify(data));
            }));
        }
        isActivated(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                return !!(yield this.has(flag)) && (yield this.get(flag)).active;
            }));
        }
        isDeactivated(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                return !(yield this.has(flag)) || !1 === (yield this.get(flag)).active;
            }));
        }
        remove(flag) {
            return __awaiter(this, void 0, void 0, (function*() {
                const key = this.mapFlag(flag);
                return this.storageService.remove([ key ]);
            }));
        }
        mapFlag(flag) {
            return `${this.key}_${flag}`;
        }
        makeFlag(active) {
            return {
                active: active,
                modified: Date.now()
            };
        }
    };
    FlagService = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(FlagModuleTypes_1.FlagModuleTypes.FLAG_STORAGE_SERVICE)), __metadata("design:paramtypes", [ Object ]) ], FlagService), 
    exports.FlagService = FlagService;
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
    const src_1 = __webpack_require__(1), RequestsFilterTypes_1 = __webpack_require__(187), RequestsFilterService_1 = __webpack_require__(188);
    class RequestsFilterModule extends src_1.MarioModule {
        name() {
            return "RequestsFilterModule";
        }
        static use(mario) {
            return mario.registerModule(RequestsFilterModule);
        }
        register() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().registerService(RequestsFilterTypes_1.RequestsFilterTypes.REQUESTS_FILTER_SERVICE, RequestsFilterService_1.RequestsFilterService);
            }));
        }
    }
    exports.RequestsFilterModule = RequestsFilterModule;
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
    const src_1 = __webpack_require__(1), TabService_1 = __webpack_require__(20), AlarmService_1 = __webpack_require__(105), CacheCleanerService_1 = __webpack_require__(149), HistoryCleanerService_1 = __webpack_require__(148), TabsStateService_1 = __webpack_require__(303), BrowserCleanerTypes_1 = __webpack_require__(115), OnAlarmCleanCache_1 = __webpack_require__(304), OnAlarmCleanHistory_1 = __webpack_require__(305);
    class BrowserCleanerModule extends src_1.MarioModule {
        name() {
            return "BrowserCleanerModule";
        }
        static use(mario) {
            return mario.registerModule(BrowserCleanerModule);
        }
        register() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.mario().registerService(src_1.MARIO_TYPES.TAB_SERVICE, TabService_1.TabService), 
                this.mario().registerService(BrowserCleanerTypes_1.BrowserCleanerTypes.CACHE_CLEANER_SERVICE, CacheCleanerService_1.CacheCleanerService), 
                this.mario().registerService(BrowserCleanerTypes_1.BrowserCleanerTypes.HISTORY_CLEANER_SERVICE, HistoryCleanerService_1.HistoryCleanerService), 
                this.mario().registerService(BrowserCleanerTypes_1.BrowserCleanerTypes.TABS_STATE_SERVICE, TabsStateService_1.TabsStateService), 
                this.mario().registerService(src_1.MARIO_TYPES.ALARM_SERVICE, AlarmService_1.AlarmService), 
                this.mario().internalDispatcher().on(OnAlarmCleanCache_1.OnAlarmCleanCache), this.mario().internalDispatcher().on(OnAlarmCleanHistory_1.OnAlarmCleanHistory);
            }));
        }
    }
    exports.BrowserCleanerModule = BrowserCleanerModule;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
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
    let TabsStateService = class TabsStateService {
        constructor() {}
        enable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !0;
            }));
        }
        disable() {
            return __awaiter(this, void 0, void 0, (function*() {
                this.enabled = !1;
            }));
        }
        isEnabled() {
            return __awaiter(this, void 0, void 0, (function*() {
                return this.enabled;
            }));
        }
        onTabAdded() {
            return __awaiter(this, void 0, void 0, (function*() {}));
        }
        onTabUpdated() {
            return __awaiter(this, void 0, void 0, (function*() {}));
        }
        onTabClose() {
            return __awaiter(this, void 0, void 0, (function*() {}));
        }
    };
    TabsStateService = __decorate([ inversify_1.injectable(), __metadata("design:paramtypes", []) ], TabsStateService), 
    exports.TabsStateService = TabsStateService;
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
    const inversify_1 = __webpack_require__(0), AlarmEvents_1 = __webpack_require__(88), AlarmNames_1 = __webpack_require__(114), CacheCleanerService_1 = __webpack_require__(149), BrowserCleanerTypes_1 = __webpack_require__(115);
    let OnAlarmCleanCache = class OnAlarmCleanCache {
        constructor(cacheCleanerService) {
            this.cacheCleanerService = cacheCleanerService;
        }
        on() {
            return AlarmEvents_1.AlarmEvents.ALARM_ELAPSED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                event.data.name === AlarmNames_1.AlarmNames.CLEAN_CACHE && (yield this.cacheCleanerService.isEnabled()) && this.cacheCleanerService.onCleanEvent();
            }));
        }
    };
    OnAlarmCleanCache = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(BrowserCleanerTypes_1.BrowserCleanerTypes.CACHE_CLEANER_SERVICE)), __metadata("design:paramtypes", [ CacheCleanerService_1.CacheCleanerService ]) ], OnAlarmCleanCache), 
    exports.OnAlarmCleanCache = OnAlarmCleanCache;
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
    const inversify_1 = __webpack_require__(0), AlarmEvents_1 = __webpack_require__(88), AlarmNames_1 = __webpack_require__(114), HistoryCleanerService_1 = __webpack_require__(148), BrowserCleanerTypes_1 = __webpack_require__(115);
    let OnAlarmCleanHistory = class OnAlarmCleanHistory {
        constructor(historyCleanerService) {
            this.historyCleanerService = historyCleanerService;
        }
        on() {
            return AlarmEvents_1.AlarmEvents.ALARM_ELAPSED;
        }
        handle(event) {
            return __awaiter(this, void 0, void 0, (function*() {
                event.data.name === AlarmNames_1.AlarmNames.CLEAN_HISTORY && (yield this.historyCleanerService.isEnabled()) && this.historyCleanerService.onCleanEvent();
            }));
        }
    };
    OnAlarmCleanHistory = __decorate([ inversify_1.injectable(), __param(0, inversify_1.inject(BrowserCleanerTypes_1.BrowserCleanerTypes.HISTORY_CLEANER_SERVICE)), __metadata("design:paramtypes", [ HistoryCleanerService_1.HistoryCleanerService ]) ], OnAlarmCleanHistory), 
    exports.OnAlarmCleanHistory = OnAlarmCleanHistory;
} ]);
//# sourceMappingURL=build.js.map