/*!
 * VueLayers
 * Vue components to work with OpenLayers
 * 
 * @package vuelayers
 * @author Vladimir Vershinin <ghettovoice@gmail.com>
 * @version 0.1.0
 * @license MIT
 * @copyright (c) 2017, Vladimir Vershinin <ghettovoice@gmail.com>
 * 
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 155);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("openlayers");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coord = exports.style = exports.helpers = exports.consts = undefined;

var _consts2 = __webpack_require__(16);

var _consts = _interopRequireWildcard(_consts2);

var _helpers2 = __webpack_require__(66);

var _helpers = _interopRequireWildcard(_helpers2);

var _style2 = __webpack_require__(67);

var _style = _interopRequireWildcard(_style2);

var _coord2 = __webpack_require__(65);

var _coord = _interopRequireWildcard(_coord2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.consts = _consts; /**
                           * OpenLayers 3 helpers and constants
                           */

exports.helpers = _helpers;
exports.style = _style;
exports.coord = _coord;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.error = error;
exports.warndbg = warndbg;
exports.errordbg = errordbg;
/* global PKG_FULLNAME */

function warn(msg) {
  var _console;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  (_console = console).warn.apply(_console, ['[' + "VueLayers" + '] WARNING: ' + msg].concat(args));
}

function error(msg) {
  var _console2;

  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  (_console2 = console).error.apply(_console2, ['[' + "VueLayers" + '] WARNING: ' + msg].concat(args));
}

function warndbg() {
  if (process.env.NODE_ENV !== 'production') {
    warn.apply(undefined, arguments);
  }
}

function errordbg() {
  if (process.env.NODE_ENV !== 'production') {
    error.apply(undefined, arguments);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(141);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _isEqual2 = __webpack_require__(12);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _Observable = __webpack_require__(9);

__webpack_require__(22);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(11);

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _vlOl = __webpack_require__(2);

var _debug = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  /**
   * Coordinates in EPSG:4326
   */
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  },
  layout: {
    type: String,
    default: 'XY'
  }
};

var computed = {
  type: function type() {
    return this.geometry.getType();
  }
};

var methods = {
  /**
   * @protected
   */
  initialize: function initialize() {
    /**
     * @type {ol.geom.SimpleGeometry}
     * @protected
     */
    this.geometry = this.createGeometry();
    this.geometry.$vm = this;
    /**
     * @protected
     */
    this.coordTransform = _vlOl.coord.coordTransform[this.geometry.getType()];

    this.currentCoordinates = this.coordTransform.toLonLat(this.geometry.getCoordinates(), this.view().getProjection());
    this.currentExtent = _vlOl.coord.extentToLonLat(this.geometry.getExtent(), this.view().getProjection());
  },

  /**
   * @return {ol.geom.SimpleGeometry}
   * @protected
   */
  createGeometry: function createGeometry() {
    throw new Error('Not implemented method');
  },
  subscribeAll: function subscribeAll() {
    subscribeToGeomChanges.call(this);
  },

  /**
   * @protected
   */
  mountGeometry: function mountGeometry() {
    if (this.feature()) {
      this.feature().setGeometry(this.geometry);
      this.subscribeAll();
    } else if (process.env.NODE_ENV !== 'production') {
      (0, _debug.warn)("Invalid usage of geometry component, should have feature component among it's ancestors");
    }
  },

  /**
   * @protected
   */
  unmountGeometry: function unmountGeometry() {
    this.unsubscribeAll();
    this.feature() && this.feature().setGeometry(undefined);
  },
  refresh: function refresh() {
    this.geometry && this.geometry.changed();
  }
};

var watch = {
  coordinates: function coordinates(value) {
    this.geometry.setCoordinates(this.coordTransform.fromLonLat(value, this.view().getProjection()));
  }
};

exports.default = {
  mixins: [_rxSubs2.default],
  inject: ['view', 'feature'],
  props: props,
  computed: computed,
  watch: watch,
  methods: methods,
  provide: function provide() {
    var _this = this;

    return {
      geometry: function geometry() {
        return _this.geometry;
      }
    };
  },

  render: function render(h) {
    return h();
  },
  data: function data() {
    return {
      currentCoordinates: this.coordinates.slice(),
      currentExtent: []
    };
  },
  created: function created() {
    this.initialize();
  },
  mounted: function mounted() {
    this.mountGeometry();
  },
  destroyed: function destroyed() {
    this.unmountGeometry();
    this.geometry = undefined;
  }
};


function subscribeToGeomChanges() {
  var _this2 = this,
      _context;

  this.rxSubs.geomChanges = _Observable.Observable.fromOlEvent(this.geometry, 'change').throttleTime(100).map(function () {
    return [_this2.coordTransform.toLonLat(_this2.geometry.getCoordinates(), _this2.view().getProjection()), _vlOl.coord.extentToLonLat(_this2.geometry.getExtent(), _this2.view().getProjection())];
  }).distinctUntilChanged(function (a, b) {
    return (0, _isEqual3.default)(a, b);
  }).subscribe(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        coordinates = _ref2[0],
        extent = _ref2[1];

    _this2.currentCoordinates = coordinates;
    _this2.currentExtent = extent;
    _this2.$emit('change', { coordinates: coordinates, extent: extent });
  }, (_context = console).error.bind(_context));
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    subscribeAll: function subscribeAll() {},

    /**
     * @protected
     */
    unsubscribeAll: function unsubscribeAll() {
      var _this = this;

      (0, _keys2.default)(this.rxSubs).forEach(function (name) {
        _this.rxSubs[name].unsubscribe();
        delete _this.rxSubs[name];
      });
    }
  },
  beforeCreate: function beforeCreate() {
    /**
     * @type {Subscription}
     * @protected
     */
    this.rxSubs = {};
  },
  destroyed: function destroyed() {
    this.unsubscribeAll();
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Basic style mixin.
 * Exposes for children inner OpenLayer style object as styleTarget.
 * Injects styleTarget from parent to apply self style.
 */

var methods = {
  /**
   * @protected
   */
  initialize: function initialize() {
    /**
     * @type {ol.style.Style|ol.style.Image|ol.style.Fill|ol.style.Stroke|ol.style.Text}
     * @protected
     */
    this.style = this.createStyle();
    this.style.$vm = this;
  },

  /**
   * @return {ol.style.Style|ol.style.Image|ol.style.Fill|ol.style.Stroke|ol.style.Text}
   * @protected
   */
  createStyle: function createStyle() {
    throw new Error('Not implemented method');
  },

  /**
   * @protected
   */
  mountStyle: function mountStyle() {
    throw new Error('Not implemented method');
  },

  /**
   * @protected
   */
  unmountStyle: function unmountStyle() {
    throw new Error('Not implemented method');
  },
  refresh: function refresh() {
    this.$nextTick(this.mountStyle);
  }
};

exports.default = {
  methods: methods,
  render: function render(h) {
    return h();
  },
  mounted: function mounted() {
    // Create style in  mounted hook because of some ol style classes doesn't have
    // setters for all inner objects. This setters are emulated through method: getStyleTarget
    this.initialize();
    this.mountStyle();
  },
  destroyed: function destroyed() {
    this.unmountStyle();
    this.style = undefined;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kebabCase2 = __webpack_require__(147);

var _kebabCase3 = _interopRequireDefault(_kebabCase2);

var _isFunction2 = __webpack_require__(19);

var _isFunction3 = _interopRequireDefault(_isFunction2);

exports.createStyleFunc = createStyleFunc;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  provide: function provide() {
    return {
      setStyle: this.setStyle.bind(this),
      getStyle: this.getStyle.bind(this)
    };
  },
  beforeCreate: function beforeCreate() {
    this.styles = [];
  },

  methods: {
    styleTarget: function styleTarget() {},
    setStyle: function setStyle(style) {
      this.styles = style;
      var styleTarget = this.styleTarget();

      if (styleTarget) {
        if (this.styles && this.styles.length) {
          styleTarget.setStyle((0, _isFunction3.default)(this.styles) ? this.styles : createStyleFunc(this));
        } else {
          styleTarget.setStyle(undefined);
        }
        this.refresh();
      }
    },
    getStyle: function getStyle() {
      return this.styles || [];
    }
  }
};
// todo implement removed, aka null style

function createStyleFunc(styleTarget) {
  return function __styleTargetStyleFunc(feature, resolution) {
    if (!styleTarget.styles || !styleTarget.styles.length) return null;

    var plainFeature = feature.$vm ? feature.$vm.plain() : feature.getProperties();
    if (!plainFeature.geometry) return null;

    var styles = [];
    styleTarget.styles.forEach(function (_ref) {
      var style = _ref.style,
          geomType = _ref.geomType;

      if (geomType == null || plainFeature.geometry.type === geomType || (0, _kebabCase3.default)(feature.geometry.type) === geomType) {
        styles.push(style);
      }
    });

    return styles;
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _tileBase = __webpack_require__(29);

var _tileBase2 = _interopRequireDefault(_tileBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {
  createSource: function createSource() {
    return new _openlayers2.default.source.XYZ({
      attributions: this.attributions,
      tileUrlFunction: this.createTileUrlFunction(),
      crossOrigin: this.crossOrigin,
      projection: this.projection,
      tileGrid: this.createTileGrid(),
      tilePixelRatio: this.tilePixelRatio,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      wrapX: this.wrapX,
      opaque: this.opaque,
      cacheSize: this.cacheSize
    });
  }
};

exports.default = {
  mixins: [_tileBase2.default],
  methods: methods
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromOlEvent = undefined;

var _fromOlEvent2 = __webpack_require__(68);

var _fromOlEvent3 = _interopRequireDefault(_fromOlEvent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fromOlEvent = _fromOlEvent3.default; /**
                                              * RxJS extensions.
                                              */

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/isEqual");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(34);

var _v2 = _interopRequireDefault(_v);

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _debug = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  id: {
    type: [String, Number],
    default: function _default() {
      return (0, _v2.default)();
    }
  },
  opacity: {
    type: Number,
    default: 1
  },
  minResolution: Number,
  maxResolution: Number,
  visible: {
    type: Boolean,
    default: true
  },
  extent: {
    type: Array,
    validator: function validator(value) {
      return value.length === 4;
    }
  },
  zIndex: {
    type: Number,
    default: 0
  }
};

var methods = {
  /**
   * Updates layer state
   */
  refresh: function refresh() {
    this.layer && this.layer.changed();
  },
  initialize: function initialize() {
    /**
     * @type {ol.layer.Layer}
     * @protected
     */
    this.layer = this.createLayer();
    this.layer.$vm = this;
    this.layer.set('id', this.id);
  },

  /**
   * @return {ol.layer.Layer}
   * @protected
   */
  createLayer: function createLayer() {
    throw new Error('Not implemented method');
  },

  /**
   * @protected
   */
  mountLayer: function mountLayer() {
    if (this.map()) {
      this.map().addLayer(this.layer);
      this.subscribeAll();
    } else if (process.env.NODE_ENV !== 'production') {
      (0, _debug.warn)("Invalid usage of map component, should have layer component among it's ancestors");
    }
  },

  /**
   * @protected
   */
  unmountLayer: function unmountLayer() {
    this.unsubscribeAll();
    this.map() && this.map().removeLayer(this.layer);
  }
};

var watch = {
  maxResolution: function maxResolution(value) {
    this.layer.setMaxResolution(value);
  },
  minResolution: function minResolution(value) {
    this.layer.setMinResolution(value);
  },
  opacity: function opacity(value) {
    this.layer.setOpacity(value);
  },
  visible: function visible(value) {
    this.layer.setVisible(value);
  },
  zIndex: function zIndex(value) {
    this.layer.setZIndex(value);
  }
};

exports.default = {
  mixins: [_rxSubs2.default],
  inject: ['map'],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    var _this = this;

    return {
      layer: function layer() {
        return _this.layer;
      }
    };
  },
  render: function render(h) {
    return h('i', {
      style: {
        display: 'none !important'
      }
    }, this.$slots.default);
  },
  created: function created() {
    this.initialize();
  },
  mounted: function mounted() {
    this.mountLayer();
  },
  destroyed: function destroyed() {
    this.unmountLayer();
    this.layer = undefined;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _vlOl = __webpack_require__(2);

var _debug = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  attributions: String,
  url: String,
  projection: {
    type: String,
    default: _vlOl.consts.MAP_PROJECTION
  },
  wrapX: {
    type: Boolean,
    default: true
  },
  logo: String
};

var methods = {
  /**
   * @protected
   */
  initialize: function initialize() {
    /**
     * @type {ol.source.Source}
     * @protected
     */
    this.source = this.createSource();
    this.source.$vm = this;
  },

  /**
   * @return {ol.source.Source}
   * @protected
   */
  createSource: function createSource() {
    throw new Error('Not implemented method');
  },
  mountSource: function mountSource() {
    if (this.layer()) {
      this.layer().setSource(this.source);
      this.subscribeAll();
    } else if (process.env.NODE_ENV !== 'production') {
      (0, _debug.warn)("Invalid usage of source component, should have layer component among it's ancestors");
    }
  },
  unmountSource: function unmountSource() {
    this.unsubscribeAll();
    this.layer() && this.layer().setSource(undefined);
  },
  refresh: function refresh() {
    this.source && this.source.changed();
  }
};

var watch = {
  attributions: function attributions(value) {
    this.source.setAttributions(value);
  },
  projection: function projection(value) {
    // todo recreate source?
  }
};

exports.default = {
  mixins: [_rxSubs2.default],
  inject: ['layer'],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    var _this = this;

    return {
      source: function source() {
        return _this.source;
      }
    };
  },
  render: function render(h) {
    return h('i', {
      style: {
        display: 'none !important'
      }
    }, this.$slots.default);
  },
  created: function created() {
    this.initialize();
  },
  mounted: function mounted() {
    this.mountSource();
  },
  destroyed: function destroyed() {
    this.unmountSource();
    this.source = undefined;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleRefresh = _style2.default.methods.refresh;
var methods = {
  /**
   * @protected
   */
  mountStyle: function mountStyle() {
    this.setImage(this.style);
  },

  /**
   * @protected
   */
  unmountStyle: function unmountStyle() {
    this.setImage(undefined);
  },
  refresh: function refresh() {
    this.initialize();
    styleRefresh.call(this);
  }
};

exports.default = {
  mixins: [_style2.default],
  inject: ['setImage'],
  methods: methods,
  render: function render(h) {
    return h('i', {
      style: {
        display: 'none !important'
      }
    }, this.$slots.default);
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WGS84_SPHERE = exports.EARTH_RADIUS = exports.PIXEL_RATIO = exports.CACHE_SIZE = exports.ZOOM_FACTOR = exports.TILE_SIZE = exports.MIN_ZOOM = exports.MAX_ZOOM = exports.DATA_PROJECTION = exports.MAP_PROJECTION = undefined;

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {string} Default map projection.
 */
var MAP_PROJECTION = exports.MAP_PROJECTION = 'EPSG:3857';
/**
 * @type {string} Default data source projection.
 */
var DATA_PROJECTION = exports.DATA_PROJECTION = 'EPSG:4326';
/**
 * @type {number} Default map max zoom
 */
var MAX_ZOOM = exports.MAX_ZOOM = 28;
/**
 * @type {number} Default map min zoom
 */
var MIN_ZOOM = exports.MIN_ZOOM = 0;
/**
 * @type {number} Default tile size
 */
var TILE_SIZE = exports.TILE_SIZE = 256;
/**
 * @type {number} Default zoom factor
 */
var ZOOM_FACTOR = exports.ZOOM_FACTOR = 2;
/**
 * @type {number}
 */
var CACHE_SIZE = exports.CACHE_SIZE = 2048;
/**
 * @type {number}
 */
var PIXEL_RATIO = exports.PIXEL_RATIO = 1;
/**
 * @type {number} Earth radius in meters
 */
var EARTH_RADIUS = exports.EARTH_RADIUS = 6378137;
var WGS84_SPHERE = exports.WGS84_SPHERE = new _openlayers2.default.Sphere(EARTH_RADIUS);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

var _templateSettings2 = __webpack_require__(150);

var _templateSettings3 = _interopRequireDefault(_templateSettings2);

var _isString2 = __webpack_require__(146);

var _isString3 = _interopRequireDefault(_isString2);

exports.isNumeric = isNumeric;
exports.coalesce = coalesce;
exports.round = round;
exports.replaceTokens = replaceTokens;
exports.isTemplate = isTemplate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} value
 * @return {boolean} True if value is number or numeric string.
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * @param {...*} [args]
 *
 * @return {*}
 */
function coalesce() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.find(function (val) {
    return val != null;
  });
}

/**
 * @param {number} num
 * @param {number} [precision=0]
 * @return {number}
 */
function round(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return Number(Math.round(Number(num + 'e+' + precision)) + 'e-' + precision);
}

/**
 * Replaces `tokens` in the `string` by values from the `replaces`.
 *
 * @param {string} string
 * @param {Object} replaces
 *
 * @returns {string}
 */
function replaceTokens(string, replaces) {
  var regExp = new RegExp((0, _keys2.default)(replaces).map(function (field) {
    return '(\\{' + field + '\\})';
  }).join('|'), 'ig');

  return string.replace(regExp, function (match) {
    return replaces[match.substr(1, match.length - 2)] || '';
  });
}

/**
 * Check if string is lodash template string.
 * @param {string} value
 * @return {boolean}
 */
function isTemplate(value) {
  return (0, _isString3.default)(value) && (value.search(_templateSettings3.default.interpolate) !== -1 || value.search(_templateSettings3.default.evaluate) !== -1);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/isFunction");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/distinctUntilChanged");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/throttleTime");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/forEach");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/merge");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/omit");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _debug = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {};

var methods = {
  /**
   * @protected
   */
  initialize: function initialize() {
    /**
     * @type {ol.interaction.Interaction}
     * @protected
     */
    this.interaction = this.createInteraction();
    this.interaction.$vm = this;
  },

  /**
   * @return {ol.interaction.Interaction}
   * @protected
   */
  createInteraction: function createInteraction() {
    throw new Error('Not implemented method');
  },

  /**
   * @protected
   */
  mountInteraction: function mountInteraction() {
    if (this.map()) {
      this.map() && this.map().addInteraction(this.interaction);
      this.subscribeAll();
    } else if (process.env.NODE_ENV !== 'production') {
      (0, _debug.warn)("Invalid usage of interaction component, should have map component among it's ancestors");
    }
  },

  /**
   * @protected
   */
  unmountInteraction: function unmountInteraction() {
    this.unsubscribeAll();
    this.map() && this.map().removeInteraction(this.interaction);
  },
  refresh: function refresh() {
    this.interaction && this.interaction.changed();
  }
};

exports.default = {
  mixins: [_rxSubs2.default],
  inject: ['map'],
  props: props,
  methods: methods,
  provide: function provide() {
    var _this = this;

    return {
      interaction: function interaction() {
        return _this.interaction;
      }
    };
  },
  render: function render(h) {
    return h('i', {
      style: {
        display: 'none !important'
      }
    }, this.$slots.default);
  },
  created: function created() {
    this.initialize();
  },
  mounted: function mounted() {
    this.mountInteraction();
  },
  destroyed: function destroyed() {
    this.unmountInteraction();
    this.interaction = undefined;
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _layer = __webpack_require__(13);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  preload: Number
};

var methods = {
  createLayer: function createLayer() {
    return new _openlayers2.default.layer.Tile({
      id: this.id,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution,
      opacity: this.opacity,
      visible: this.visible,
      preload: this.preload,
      projection: this.projection,
      extent: this.extent,
      zIndex: this.zIndex
    });
  }
};

exports.default = {
  mixins: [_layer2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _layer = __webpack_require__(13);

var _layer2 = _interopRequireDefault(_layer);

var _target = __webpack_require__(8);

var _target2 = _interopRequireDefault(_target);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  updateWhileAnimating: {
    type: Boolean,
    default: false
  },
  updateWhileInteracting: {
    type: Boolean,
    default: false
  }
  // todo implement options
  // renderOrder: Function,
  // renderBuffer: Number
};

var methods = {
  createLayer: function createLayer() {
    return new _openlayers2.default.layer.Vector({
      id: this.id,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution,
      opacity: this.opacity,
      visible: this.visible,
      preload: this.preload,
      projection: this.projection,
      extent: this.extent,
      zIndex: this.zIndex,
      updateWhileAnimating: this.updateWhileAnimating,
      updateWhileInteracting: this.updateWhileInteracting
    });
  },
  styleTarget: function styleTarget() {
    return this.layer;
  }
};

var layerProvide = _layer2.default.provide;
var styleTargetProvide = _target2.default.provide;
exports.default = {
  mixins: [_layer2.default, _target2.default],
  props: props,
  methods: methods,
  provide: function provide() {
    return (0, _extends3.default)({}, layerProvide.call(this), styleTargetProvide.call(this));
  },
  render: function render(h) {
    return h('i', {
      style: {
        display: 'none !important'
      }
    }, this.$slots.default);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _ol3Tilecache = __webpack_require__(152);

var _func = __webpack_require__(17);

var _source = __webpack_require__(14);

var _source2 = _interopRequireDefault(_source);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  url: {
    type: String,
    required: true
  },
  tileSize: {
    type: Array,
    default: function _default() {
      return [_vlOl.consts.TILE_SIZE, _vlOl.consts.TILE_SIZE];
    },
    validator: function validator(value) {
      return value.length === 2;
    }
  },
  tilePixelRatio: {
    type: Number,
    default: _vlOl.consts.PIXEL_RATIO
  },
  crossOrigin: {
    type: String,
    default: 'anonymous'
  },
  cacheSize: {
    type: Number,
    default: _vlOl.consts.CACHE_SIZE
  },
  opaque: Boolean,
  minZoom: {
    type: Number,
    default: _vlOl.consts.MIN_ZOOM
  },
  maxZoom: {
    type: Number,
    default: _vlOl.consts.MAX_ZOOM
  }
};

var computed = {
  urlTokens: function urlTokens() {
    return [];
  }
};

var methods = {
  /**
   * @return {ol.tilegrid.TileGrid}
   * @protected
   */
  createTileGrid: function createTileGrid() {
    return _openlayers2.default.tilegrid.createXYZ({
      extent: _openlayers2.default.proj.get(this.projection).getExtent(),
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      tileSize: this.tileSize
    });
  },

  /**
   * @return {ol.TileUrlFunction}
   * @protected
   */
  createTileUrlFunction: function createTileUrlFunction() {
    return (0, _ol3Tilecache.createTileUrlFunction)(this.replaceUrlTokens());
  },

  /**
   * @return {string}
   * @protected
   */
  replaceUrlTokens: function replaceUrlTokens() {
    return (0, _func.replaceTokens)(this.url, (0, _pick3.default)(this.urlTokens, this));
  }
};

exports.default = {
  mixins: [_source2.default],
  props: props,
  computed: computed,
  methods: methods
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(142);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(140);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _source = __webpack_require__(14);

var _source2 = _interopRequireDefault(_source);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  loader: Function,
  useSpatialIndex: {
    type: Boolean,
    default: true
  }
  // todo implement options
  // format: String,
  // strategy: String
};

var methods = {
  /**
   * @return {function|undefined}
   * @protected
   */
  sourceLoader: function sourceLoader() {
    if (!this.loader) return;

    var loader = this.loader.bind(this);
    var self = this;

    return function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(extent, resolution, projection) {
        var features;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                projection = projection.getCode();
                extent = _vlOl.coord.extentToLonLat(extent, projection);

                _context.next = 4;
                return _promise2.default.resolve(loader(extent, resolution, projection));

              case 4:
                features = _context.sent;


                if (features && features.length) {
                  self.$emit('load', {
                    features: features,
                    extent: extent,
                    resolution: resolution,
                    projection: projection
                  });
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function __loader(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return __loader;
    }();
  },
  createSource: function createSource() {
    return new _openlayers2.default.source.Vector({
      attributions: this.attributions,
      projection: this.projection,
      loader: this.sourceLoader(),
      useSpatialIndex: this.useSpatialIndex,
      wrapX: this.wrapX,
      logo: this.logo,
      strategy: _openlayers2.default.loadingstrategy.bbox
      // url: this.url,
    });
  }
};

exports.default = {
  mixins: [_source2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/pick");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/combineLatest");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interaction = exports.style = exports.source = exports.layer = exports.geom = exports.VlGeoloc = exports.VlFeature = exports.VlMapView = exports.VlMap = undefined;

var _map = __webpack_require__(51);

var _map2 = _interopRequireDefault(_map);

var _mapView = __webpack_require__(50);

var _mapView2 = _interopRequireDefault(_mapView);

var _feature = __webpack_require__(36);

var _feature2 = _interopRequireDefault(_feature);

var _geoloc = __webpack_require__(37);

var _geoloc2 = _interopRequireDefault(_geoloc);

var _geom2 = __webpack_require__(38);

var _geom = _interopRequireWildcard(_geom2);

var _layer2 = __webpack_require__(47);

var _layer = _interopRequireWildcard(_layer2);

var _source2 = __webpack_require__(52);

var _source = _interopRequireWildcard(_source2);

var _style2 = __webpack_require__(63);

var _style = _interopRequireWildcard(_style2);

var _interaction2 = __webpack_require__(45);

var _interaction = _interopRequireWildcard(_interaction2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlMap = _map2.default;
exports.VlMapView = _mapView2.default;
exports.VlFeature = _feature2.default;
exports.VlGeoloc = _geoloc2.default;
exports.geom = _geom;
exports.layer = _layer;
exports.source = _source;
exports.style = _style;
exports.interaction = _interaction;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _feature = __webpack_require__(113);

var _feature2 = _interopRequireDefault(_feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_feature2.default.install = function (Vue) {
  Vue.component(_feature2.default.name, _feature2.default);
};

exports.default = _feature2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geoloc = __webpack_require__(114);

var _geoloc2 = _interopRequireDefault(_geoloc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geoloc2.default.install = function (Vue) {
  Vue.component(_geoloc2.default.name, _geoloc2.default);
};

exports.default = _geoloc2.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixins = exports.VlGeomMultiPolygon = exports.VlGeomMultiLineString = exports.VlGeomMultiPoint = exports.VlGeomPolygon = exports.VlGeomLineString = exports.VlGeomPoint = undefined;

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _point = __webpack_require__(43);

var _point2 = _interopRequireDefault(_point);

var _lineString = __webpack_require__(39);

var _lineString2 = _interopRequireDefault(_lineString);

var _polygon = __webpack_require__(44);

var _polygon2 = _interopRequireDefault(_polygon);

var _multiPoint = __webpack_require__(41);

var _multiPoint2 = _interopRequireDefault(_multiPoint);

var _multiLineString = __webpack_require__(40);

var _multiLineString2 = _interopRequireDefault(_multiLineString);

var _multiPolygon = __webpack_require__(42);

var _multiPolygon2 = _interopRequireDefault(_multiPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlGeomPoint = _point2.default;
exports.VlGeomLineString = _lineString2.default;
exports.VlGeomPolygon = _polygon2.default;
exports.VlGeomMultiPoint = _multiPoint2.default;
exports.VlGeomMultiLineString = _multiLineString2.default;
exports.VlGeomMultiPolygon = _multiPolygon2.default;
var mixins = exports.mixins = {
  geom: _geom2.default
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(115);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(116);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(117);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(118);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(119);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geom = __webpack_require__(120);

var _geom2 = _interopRequireDefault(_geom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_geom2.default.install = function (Vue) {
  Vue.component(_geom2.default.name, _geom2.default);
};

exports.default = _geom2.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixins = exports.VlInteractionSelect = undefined;

var _interaction = __webpack_require__(26);

var _interaction2 = _interopRequireDefault(_interaction);

var _select = __webpack_require__(46);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlInteractionSelect = _select2.default;
var mixins = exports.mixins = {
  interaction: _interaction2.default
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(121);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_select2.default.install = function (Vue) {
  Vue.component(_select2.default.name, _select2.default);
};

exports.default = _select2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixins = exports.VlLayerTile = exports.VlLayerVector = undefined;

var _layer = __webpack_require__(13);

var _layer2 = _interopRequireDefault(_layer);

var _tileBase = __webpack_require__(27);

var _tileBase2 = _interopRequireDefault(_tileBase);

var _vectorBase = __webpack_require__(28);

var _vectorBase2 = _interopRequireDefault(_vectorBase);

var _vector = __webpack_require__(49);

var _vector2 = _interopRequireDefault(_vector);

var _tile = __webpack_require__(48);

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlLayerVector = _vector2.default;
exports.VlLayerTile = _tile2.default;
var mixins = exports.mixins = {
  layer: _layer2.default,
  layerTileBase: _tileBase2.default,
  layerVectorBase: _vectorBase2.default
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layer = __webpack_require__(122);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layer2.default.install = function (Vue) {
  Vue.component(_layer2.default.name, _layer2.default);
};

exports.default = _layer2.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layer = __webpack_require__(123);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layer2.default.install = function (Vue) {
  Vue.component(_layer2.default.name, _layer2.default);
};

exports.default = _layer2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _view = __webpack_require__(125);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_view2.default.install = function (Vue) {
  Vue.component(_view2.default.name, _view2.default);
};

exports.default = _view2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(124);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_map2.default.install = function (Vue) {
  Vue.component(_map2.default.name, _map2.default);
}; /**
    * VueLayers map component
    */
exports.default = _map2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixins = exports.VlSourceVector = exports.VlSourceMapbox = exports.VlSourceOsm = exports.VlSourceXyz = undefined;

var _source = __webpack_require__(14);

var _source2 = _interopRequireDefault(_source);

var _tileBase = __webpack_require__(29);

var _tileBase2 = _interopRequireDefault(_tileBase);

var _xyzBase = __webpack_require__(10);

var _xyzBase2 = _interopRequireDefault(_xyzBase);

var _vectorBase = __webpack_require__(30);

var _vectorBase2 = _interopRequireDefault(_vectorBase);

var _xyz = __webpack_require__(56);

var _xyz2 = _interopRequireDefault(_xyz);

var _osm = __webpack_require__(54);

var _osm2 = _interopRequireDefault(_osm);

var _mapbox = __webpack_require__(53);

var _mapbox2 = _interopRequireDefault(_mapbox);

var _vector = __webpack_require__(55);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlSourceXyz = _xyz2.default;
exports.VlSourceOsm = _osm2.default;
exports.VlSourceMapbox = _mapbox2.default;
exports.VlSourceVector = _vector2.default;
var mixins = exports.mixins = {
  source: _source2.default,
  sourceTileBase: _tileBase2.default,
  sourceXyzBase: _xyzBase2.default,
  sourceVectorBase: _vectorBase2.default
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(126);

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_source2.default.install = function (Vue) {
  Vue.component(_source2.default.name, _source2.default);
};

exports.default = _source2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(127);

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_source2.default.install = function (Vue) {
  Vue.component(_source2.default.name, _source2.default);
};

exports.default = _source2.default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(128);

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_source2.default.install = function (Vue) {
  Vue.component(_source2.default.name, _source2.default);
};

exports.default = _source2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(129);

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_source2.default.install = function (Vue) {
  Vue.component(_source2.default.name, _source2.default);
};

exports.default = _source2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _circle = __webpack_require__(130);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_circle2.default.install = function (Vue) {
  Vue.component(_circle2.default.name, _circle2.default);
};

exports.default = _circle2.default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = __webpack_require__(131);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_container2.default.install = function (Vue) {
  Vue.component(_container2.default.name, _container2.default);
};

exports.default = _container2.default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fill = __webpack_require__(132);

var _fill2 = _interopRequireDefault(_fill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fill2.default.install = function (Vue) {
  Vue.component(_fill2.default.name, _fill2.default);
};

exports.default = _fill2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = __webpack_require__(19);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _vue = __webpack_require__(154);

var _vue2 = _interopRequireDefault(_vue);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _target = __webpack_require__(8);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Directive for advanced low-level dynamic styling using ol.StyleFunction.
 * Can be applied on styleable components that use styleTarget mixins
 */
exports.default = {
  name: 'style-func',
  bind: function bind(el, binding, vnode) {
    var component = vnode.componentInstance;
    var styleFunctionFactory = binding.value;

    if (!(0, _isFunction3.default)(styleFunctionFactory) || !component.styleTarget()) return;

    bindStyleFunction(styleFunctionFactory(_openlayers2.default, _vlOl.style), component);
  },
  unbind: function unbind(el, binding, vnode) {
    var component = vnode.componentInstance;
    if (component.styleTarget()) {
      component.setStyle(component.styles);
    }
  },
  update: function update(el, binding, vnode) {
    // todo rebind style function? need test
  }
};


function bindStyleFunction(styleFunc, component) {
  var defStyleFunc = (0, _target.createStyleFunc)(component);

  _vue2.default.nextTick(function () {
    component.styleTarget().setStyle(function __directiveStyleFunc(feature, resolution) {
      var styles = styleFunc(feature, resolution);

      if (styles === null || Array.isArray(styles) && styles.length) {
        return styles;
      }

      return defStyleFunc(feature, resolution);
    });
  });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _func = __webpack_require__(60);

var _func2 = _interopRequireDefault(_func);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_func2.default.install = function (Vue) {
  Vue.directive(_func2.default.name, _func2.default);
};
exports.default = _func2.default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(133);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_icon2.default.install = function (Vue) {
  Vue.component(_icon2.default.name, _icon2.default);
};

exports.default = _icon2.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directives = exports.mixins = exports.VlStyleIcon = exports.VlStyleCircle = exports.VlStyleStroke = exports.VlStyleFill = exports.VlStyleContainer = undefined;

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

var _image = __webpack_require__(15);

var _image2 = _interopRequireDefault(_image);

var _target = __webpack_require__(8);

var _target2 = _interopRequireDefault(_target);

var _func = __webpack_require__(61);

var _func2 = _interopRequireDefault(_func);

var _container = __webpack_require__(58);

var _container2 = _interopRequireDefault(_container);

var _fill = __webpack_require__(59);

var _fill2 = _interopRequireDefault(_fill);

var _stroke = __webpack_require__(64);

var _stroke2 = _interopRequireDefault(_stroke);

var _circle = __webpack_require__(57);

var _circle2 = _interopRequireDefault(_circle);

var _icon = __webpack_require__(62);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VlStyleContainer = _container2.default;
exports.VlStyleFill = _fill2.default;
exports.VlStyleStroke = _stroke2.default;
exports.VlStyleCircle = _circle2.default;
exports.VlStyleIcon = _icon2.default;
var mixins = exports.mixins = {
  style: _style2.default,
  styleImage: _image2.default,
  styleTarget: _target2.default
};

var directives = exports.directives = {
  styleFunc: _func2.default
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stroke = __webpack_require__(134);

var _stroke2 = _interopRequireDefault(_stroke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_stroke2.default.install = function (Vue) {
  Vue.component(_stroke2.default.name, _stroke2.default);
};

exports.default = _stroke2.default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordTransform = undefined;
exports.extentFromLonLat = extentFromLonLat;
exports.extentToLonLat = extentToLonLat;
exports.pointToLonLat = pointToLonLat;
exports.pointFromLonLat = pointFromLonLat;
exports.lineToLonLat = lineToLonLat;
exports.lineFromLonLat = lineFromLonLat;
exports.polygonToLonLat = polygonToLonLat;
exports.polygonFromLonLat = polygonFromLonLat;
exports.multiPointToLonLat = multiPointToLonLat;
exports.multiPointFromLonLat = multiPointFromLonLat;
exports.multiLineToLonLat = multiLineToLonLat;
exports.multiLineFromLonLat = multiLineFromLonLat;
exports.multiPolygonToLonLat = multiPolygonToLonLat;
exports.multiPolygonFromLonLat = multiPolygonFromLonLat;

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _consts = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {ol.Extent} extent
 * @param {ol.ProjectionLike} projection
 * @return {ol.Extent}
 */
function extentFromLonLat(extent) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return _openlayers2.default.proj.transformExtent(extent, _consts.DATA_PROJECTION, projection);
}

/**
 * @param {ol.Extent} extent
 * @param {ol.ProjectionLike} projection
 * @return {ol.Extent}
 */
function extentToLonLat(extent) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return _openlayers2.default.proj.transformExtent(extent, projection, _consts.DATA_PROJECTION);
}

function pointToLonLat(coordinate) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return _openlayers2.default.proj.toLonLat(coordinate, projection);
}
function pointFromLonLat(coordinate) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return _openlayers2.default.proj.fromLonLat(coordinate, projection);
}

function lineToLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (point) {
    return pointToLonLat(point, projection);
  });
}
function lineFromLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (point) {
    return pointFromLonLat(point, projection);
  });
}

function polygonToLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (line) {
    return lineToLonLat(line, projection);
  });
}
function polygonFromLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (line) {
    return lineFromLonLat(line, projection);
  });
}

function multiPointToLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (point) {
    return pointToLonLat(point, projection);
  });
}
function multiPointFromLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (point) {
    return pointFromLonLat(point, projection);
  });
}

function multiLineToLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (line) {
    return lineToLonLat(line, projection);
  });
}
function multiLineFromLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (line) {
    return lineFromLonLat(line, projection);
  });
}

function multiPolygonToLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (polygon) {
    return polygonToLonLat(polygon, projection);
  });
}
function multiPolygonFromLonLat(coordinates) {
  var projection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.MAP_PROJECTION;

  return coordinates.map(function (polygon) {
    return polygonFromLonLat(polygon, projection);
  });
}

var coordTransform = exports.coordTransform = {
  Point: {
    toLonLat: pointToLonLat,
    fromLonLat: pointFromLonLat
  },
  LineString: {
    toLonLat: lineToLonLat,
    fromLonLat: lineFromLonLat
  },
  Polygon: {
    toLonLat: polygonToLonLat,
    fromLonLat: polygonFromLonLat
  },
  MultiPoint: {
    toLonLat: multiPointToLonLat,
    fromLonLat: multiPointFromLonLat
  },
  MultiLineString: {
    toLonLat: multiLineToLonLat,
    fromLonLat: multiLineFromLonLat
  },
  MultiPolygon: {
    toLonLat: multiPolygonToLonLat,
    fromLonLat: multiPolygonFromLonLat
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _log = __webpack_require__(138);

var _log2 = _interopRequireDefault(_log);

var _isEqual2 = __webpack_require__(12);

var _isEqual3 = _interopRequireDefault(_isEqual2);

exports.zoomToResolution = zoomToResolution;
exports.resolutionToZoom = resolutionToZoom;
exports.createAttributions = createAttributions;
exports.haversineDistance = haversineDistance;
exports.flyTo = flyTo;

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _consts = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {number} zoom
 * @param {number} [latitude=0.0]
 * @param {number} [tileSize=256]
 * @return {number}
 */
function zoomToResolution(zoom) {
  var latitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
  var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.TILE_SIZE;

  // meters per pixel at zoom = 0
  var mpp = 2 * Math.PI * _consts.EARTH_RADIUS / tileSize;

  return mpp * Math.cos(latitude) / Math.pow(2, zoom);
}
/**
 * @param {number} resolution
 * @param {number} [latitude=0.0]
 * @param {number} [tileSize=256]
 * @return {number}
 */
function resolutionToZoom(resolution) {
  var latitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
  var tileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.TILE_SIZE;

  // meters per pixel at zoom = 0
  var mpp = 2 * Math.PI * _consts.EARTH_RADIUS / tileSize;

  return Math.round(Math.log(mpp * Math.cos(latitude) / resolution) / Math.log(2));
}

/**
 * @param {string[]} attributions
 * @return {ol.Attribution[]}
 */
function createAttributions(attributions) {
  return (attributions || []).map(function (html) {
    return new _openlayers2.default.Attribution({ html: html });
  });
}

/**
 * @param {number[]} p1 First point in EPSG:4326
 * @param {number[]} p2 Second point in EPSG:4326
 * @return {number} Distance in meters.
 */
function haversineDistance(p1, p2) {
  return _consts.WGS84_SPHERE.haversineDistance(p1, p2);
}

/**
 * @param {ol.View} view
 * @param {number[]} coordinate Coordinate in EPSG:4326
 * @param {number} zoom
 * @return {Promise}
 */
function flyTo(view, coordinate, zoom) {
  var currentZoom = Math.ceil(view.getZoom());
  var currentCenter = _openlayers2.default.proj.toLonLat(view.getCenter(), view.getProjection());
  var distance = haversineDistance(currentCenter, coordinate);
  var duration = (0, _log2.default)(distance / 1000) * 1000;

  var centerPromise = new _promise2.default(function (resolve) {
    return view.animate({
      center: coordinate,
      duration: duration
    }, resolve);
  });

  var zoomPromise = void 0;
  if (currentZoom >= 10 && distance >= 10000 && !(0, _isEqual3.default)(coordinate, currentCenter)) {
    zoomPromise = new _promise2.default(function (resolve) {
      return view.animate({
        zoom: Math.ceil(currentZoom / 2),
        duration: duration / 2
      }, {
        zoom: zoom,
        duration: duration / 2
      }, resolve);
    });
  } else {
    zoomPromise = new _promise2.default(function (resolve) {
      return view.animate({
        zoom: zoom,
        duration: duration
      });
    });
  }

  return _promise2.default.all([centerPromise, zoomPromise]);
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformStyleHash = undefined;

var _assign = __webpack_require__(139);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _reduce2 = __webpack_require__(149);

var _reduce3 = _interopRequireDefault(_reduce2);

var _merge2 = __webpack_require__(24);

var _merge3 = _interopRequireDefault(_merge2);

var _isEmpty2 = __webpack_require__(145);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _lowerFirst2 = __webpack_require__(148);

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _upperFirst2 = __webpack_require__(151);

var _upperFirst3 = _interopRequireDefault(_upperFirst2);

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

var _flow2 = __webpack_require__(144);

var _flow3 = _interopRequireDefault(_flow2);

exports.getDefaultStyleHash = getDefaultStyleHash;
exports.createStyleFunc = createStyleFunc;
exports.transformStyle = transformStyle;
exports.transformFillStyle = transformFillStyle;
exports.transformStrokeStyle = transformStrokeStyle;
exports.transformImageStyle = transformImageStyle;
exports.transformTextStyle = transformTextStyle;
exports.defaultStyle = defaultStyle;
exports.defaultEditStyle = defaultEditStyle;

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _func = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduceWithKey = _reduce3.default.convert({ cap: false });

// Style helpers (get from geo-1.1)
/**
 * @typedef {Object} GeoStyle
 *
 * Shared
 * @property {string|number[]} fillColor
 * @property {string|number[]} strokeColor
 * @property {number} strokeWidth
 * @property {number[]} strokeDash
 * @property {string} strokeCap
 * @property {string} strokeJoin
 * @property {number} zIndex
 *
 * Text only
 * @property {string} text
 * @property {string} textFont
 * @property {number} textFontSize
 * @property {number} textScale
 * @property {string} textAlign
 * @property {number} textRotation
 * @property {number} textOffsetX
 * @property {number} textOffsetY
 *
 * Icon only
 * @property {string} iconUrl
 * @property {Image} iconImg
 * @property {number[]} iconSize
 * @property {number[]} iconImgSize
 * @property {number} iconOffset
 * @property {number[]} iconAnchor
 * @property {number} iconScale
 * @property {number} iconRotation
 * @property {number} iconRadius
 * @property {number} iconRadius1
 * @property {number} iconRadius2
 * @property {number} iconPoints
 * @property {number} iconAngle
 * @property {number} iconOpacity
 * @property {ol.style.IconOrigin | undefined} iconAnchorOrigin
 * @property {ol.Color | string | undefined} iconColor
 * @property {ol.style.IconOrigin | undefined} iconOffsetOrigin
 */
function getDefaultStyleHash() {
  var default_ = {
    fillColor: [255, 255, 255, 0.7],
    strokeColor: [30, 54, 133, 1],
    strokeWidth: 3,
    strokeCap: 'round',
    strokeJoin: 'round',
    iconRadius: 7,
    textStrokeColor: [30, 54, 133, 1],
    textFillColor: [30, 54, 133, 1],
    textFont: 'sans-serif',
    textFontSize: 12,
    textStrokeWidth: 1
  };

  var select = (0, _extends3.default)({}, default_, {
    fillColor: [255, 255, 255, 0.8],
    strokeColor: [255, 121, 1, 1],
    textFillColor: [255, 121, 1, 1],
    textStrokeColor: [255, 121, 1, 1],
    zIndex: 1
  });

  var cluster = (0, _extends3.default)({}, default_, {
    text: '<%= item.clusterSize %>',
    iconUrl: null,
    iconImg: null,
    iconPoints: null,
    iconRadius: 20,
    textFontSize: 14,
    zIndex: 1
  });

  var modify = (0, _extends3.default)({}, default_, {
    fillColor: [255, 255, 255, 0.8],
    strokeColor: '#FF1E23',
    zIndex: 1
  });

  var current = (0, _extends3.default)({}, default_, {
    fillColor: [27, 226, 23, 0.8],
    strokeColor: [14, 118, 11, 1],
    strokeWidth: 4,
    zIndex: 1
  });

  return {
    default: [(0, _extends3.default)({}, default_)],
    select: [(0, _extends3.default)({}, select)],
    cluster: [(0, _extends3.default)({}, cluster)],
    remove: null,
    modify: [(0, _extends3.default)({}, modify)],
    current: [(0, _extends3.default)({}, current)]
  };
}

/**
 * @param {Object<string, GeoStyle[]>} styleHash
 * @return {Object<string, ol.style.Style[]>}
 * @function
 */
var transformStyleHash = exports.transformStyleHash = reduceWithKey(function (olStyleHash, geoStyles, styleName) {
  if (geoStyles && geoStyles.length) {
    var olStyle = geoStyles.map(transformStyle);

    if (!(0, _isEmpty3.default)(olStyle)) {
      olStyleHash[styleName] = olStyle;
    }
  }

  return olStyleHash;
});

/**
 * Returns style function for `styleHash` or default style function.
 *
 * @param {Object} [styleHash]
 * @return {ol.StyleFunction}
 */
function createStyleFunc(styleHash) {
  styleHash = (0, _merge3.default)(getDefaultStyleHash(), styleHash);

  // Static pre-compilation
  var olStyleHash = transformStyleHash({}, styleHash);

  return (
    /**
     * @param {ol.Feature} feature
     * @return {ol.style.Style[]}
     */
    function __styleFunc(feature) {
      var styleName = feature.get('styleName') || 'default';

      return olStyleHash[styleName];
    }
  );
}

/**
 * @param {GeoStyle} geoStyle
 * @return {ol.style.Style|undefined}
 */
function transformStyle(geoStyle) {
  if ((0, _isEmpty3.default)(geoStyle)) return;

  var olStyle = {
    text: transformTextStyle(geoStyle),
    fill: transformFillStyle(geoStyle),
    stroke: transformStrokeStyle(geoStyle),
    image: transformImageStyle(geoStyle),
    zIndex: geoStyle.zIndex
  };

  if (!(0, _isEmpty3.default)(olStyle)) {
    return new _openlayers2.default.style.Style(olStyle);
  }
}

var addPrefix = function addPrefix(prefix) {
  return function (str) {
    return prefix + (prefix ? (0, _upperFirst3.default)(str) : str);
  };
};

/**
 * @param {GeoStyle} geoStyle
 * @param {string} [prefix]
 * @returns {ol.style.Fill|undefined}
 */
function transformFillStyle(geoStyle) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var prefixKey = addPrefix(prefix);
  var keys = ['fillColor'].map(prefixKey);

  var transform = (0, _flow3.default)((0, _pick3.default)(keys), reduceWithKey(function (result, value, name) {
    name = (0, _lowerFirst3.default)(name.replace(new RegExp(prefixKey('fill')), ''));
    result[name] = value;

    return result;
  }, {}));

  var fillStyle = transform(geoStyle);

  if (!(0, _isEmpty3.default)(fillStyle)) {
    return new _openlayers2.default.style.Fill(fillStyle);
  }
}

/**
 * @param {GeoStyle} geoStyle
 * @param {string} [prefix]
 * @returns {ol.style.Stroke|undefined}
 */
function transformStrokeStyle(geoStyle) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var prefixKey = addPrefix(prefix);
  var keys = ['strokeColor', 'strokeWidth', 'strokeDash', 'strokeCap', 'strokeJoin'].map(prefixKey);

  var transform = (0, _flow3.default)((0, _pick3.default)(keys), reduceWithKey(function (result, value, name) {
    switch (name) {
      case prefixKey('strokeColor'):
      case prefixKey('strokeWidth'):
        name = (0, _lowerFirst3.default)(name.replace(new RegExp(prefixKey('stroke')), ''));
        break;
      case prefixKey('strokeDash'):
      case prefixKey('strokeCap'):
      case prefixKey('strokeJoin'):
        name = 'line' + name.replace(new RegExp(prefixKey('stroke')), '');
        break;
    }

    result[name] = value;

    return result;
  }, {}));
  var strokeStyle = transform(geoStyle);

  if (!(0, _isEmpty3.default)(strokeStyle)) {
    return new _openlayers2.default.style.Stroke(strokeStyle);
  }
}

/**
 * @param {GeoStyle} geoStyle
 * @returns {ol.style.Icon|ol.style.Circle|ol.style.RegularShape|undefined}
 */
function transformImageStyle(geoStyle) {
  if ((0, _isEmpty3.default)(geoStyle.iconUrl) && (0, _isEmpty3.default)(geoStyle.iconImg) && (0, _isEmpty3.default)(geoStyle.iconPoints) && !(0, _func.isNumeric)(geoStyle.iconRadius)) {
    return;
  }

  var imageStyle = void 0;

  if (!(0, _isEmpty3.default)(geoStyle.iconUrl) || !(0, _isEmpty3.default)(geoStyle.iconImg)) {
    // then create ol.style.Icon options
    imageStyle = (0, _extends3.default)({}, geoStyle, {
      type: 'icon',
      anchor: geoStyle.iconAnchor,
      anchorOrigin: geoStyle.iconAnchorOrigin,
      color: geoStyle.iconColor,
      offset: geoStyle.iconOffset,
      offsetOrigin: geoStyle.iconOffsetOrigin,
      opacity: geoStyle.iconOpacity,
      scale: geoStyle.iconScale,
      rotation: geoStyle.iconRotation,
      size: geoStyle.iconSize,
      imgSize: geoStyle.iconImgSize,
      src: geoStyle.iconUrl,
      crossOrigin: 'anonymous'
    });
  } else if (geoStyle.iconPoints != null) {
    // create ol.style.RegularShape options
    imageStyle = (0, _extends3.default)({}, geoStyle, {
      type: 'shape',
      points: geoStyle.iconPoints,
      radius: geoStyle.iconRadius,
      radius1: geoStyle.iconRadius1,
      radius2: geoStyle.iconRadius2,
      angle: geoStyle.iconAngle,
      rotation: geoStyle.iconRotation
    });
  } else {
    // create ol.style.Circle options
    imageStyle = (0, _extends3.default)({}, geoStyle, {
      type: 'circle',
      radius: geoStyle.iconRadius
    });
  }

  imageStyle = (0, _extends3.default)({}, imageStyle, {
    fill: transformFillStyle(geoStyle, 'icon') || transformFillStyle(geoStyle),
    stroke: transformStrokeStyle(geoStyle, 'icon') || transformStrokeStyle(geoStyle),
    snapToPixel: true
  });

  if (!(0, _isEmpty3.default)(imageStyle)) {
    return new _openlayers2.default.style[(0, _upperFirst3.default)(imageStyle.type)](imageStyle);
  }
}

/**
 * @param {GeoStyle} geoStyle
 * @returns {ol.style.Text|undefined}
 */
function transformTextStyle(geoStyle) {
  // noinspection JSValidateTypes
  if (geoStyle.text == null) {
    return;
  }

  var textStyle = {
    text: geoStyle.text
  };

  var fontSize = geoStyle.textFontSize ? geoStyle.textFontSize + 'px' : undefined;
  var font = ['normal', fontSize, geoStyle.textFont].filter(function (x) {
    return !!x;
  }).join(' ');

  (0, _assign2.default)(textStyle, (0, _pick3.default)(['textScale', 'textRotation', 'textOffsetX', 'textOffsetY', 'textAlign'])(geoStyle), {
    font: font,
    fill: transformFillStyle(geoStyle, 'text') || transformFillStyle(geoStyle),
    stroke: transformStrokeStyle(geoStyle, 'text') || transformStrokeStyle(geoStyle)
  });

  if (!(0, _isEmpty3.default)(textStyle)) {
    return new _openlayers2.default.style.Text(textStyle);
  }
}

/**
 * Default OpenLayers styles
 *
 * @return {ol.style.Style[]}
 * @see {@link https://github.com/openlayers/openlayers/blob/master/src/ol/style/style.js#L290}
 */
function defaultStyle() {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (ol.style.Circle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  var fill = new _openlayers2.default.style.Fill({
    color: 'rgba(255,255,255,0.4)'
  });
  var stroke = new _openlayers2.default.style.Stroke({
    color: '#3399CC',
    width: 1.25
  });
  return [new _openlayers2.default.style.Style({
    image: new _openlayers2.default.style.Circle({
      fill: fill,
      stroke: stroke,
      radius: 5
    }),
    fill: fill,
    stroke: stroke
  })];
}

/**
 * Default OpenLayers edit style.
 *
 * @return {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>}
 * @see {@link https://github.com/openlayers/openlayers/blob/master/src/ol/style/style.js#L324}
 */
function defaultEditStyle() {
  /** @type {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} */
  var styles = {};
  var white = [255, 255, 255, 1];
  var blue = [0, 153, 255, 1];
  var width = 3;

  styles[_openlayers2.default.geom.GeometryType.LINE_STRING] = [new _openlayers2.default.style.Style({
    stroke: new _openlayers2.default.style.Stroke({
      color: white,
      width: width + 2
    })
  }), new _openlayers2.default.style.Style({
    stroke: new _openlayers2.default.style.Stroke({
      color: blue,
      width: width
    })
  })];
  styles[_openlayers2.default.geom.GeometryType.MULTI_LINE_STRING] = styles[_openlayers2.default.geom.GeometryType.LINE_STRING];

  styles[_openlayers2.default.geom.GeometryType.POLYGON] = [new _openlayers2.default.style.Style({
    fill: new _openlayers2.default.style.Fill({
      color: [255, 255, 255, 0.5]
    })
  })].concat(styles[_openlayers2.default.geom.GeometryType.LINE_STRING]);
  styles[_openlayers2.default.geom.GeometryType.MULTI_POLYGON] = styles[_openlayers2.default.geom.GeometryType.POLYGON];

  styles[_openlayers2.default.geom.GeometryType.CIRCLE] = styles[_openlayers2.default.geom.GeometryType.POLYGON].concat(styles[_openlayers2.default.geom.GeometryType.LINE_STRING]);

  styles[_openlayers2.default.geom.GeometryType.POINT] = [new _openlayers2.default.style.Style({
    image: new _openlayers2.default.style.Circle({
      radius: width * 2,
      fill: new _openlayers2.default.style.Fill({
        color: blue
      }),
      stroke: new _openlayers2.default.style.Stroke({
        color: white,
        width: width / 2
      })
    }),
    zIndex: Infinity
  })];
  styles[_openlayers2.default.geom.GeometryType.MULTI_POINT] = styles[_openlayers2.default.geom.GeometryType.POINT];

  styles[_openlayers2.default.geom.GeometryType.GEOMETRY_COLLECTION] = styles[_openlayers2.default.geom.GeometryType.POLYGON].concat(styles[_openlayers2.default.geom.GeometryType.LINE_STRING], styles[_openlayers2.default.geom.GeometryType.POINT]);

  return styles;
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fromOlEvent;

var _Observable = __webpack_require__(9);

__webpack_require__(153);

/**
 * Creates an Observable using OpenLayers event pattern that emits events of a specific type
 * coming from the given event target.
 *
 * @example <caption>Subscribe on view center change events</caption>
 * const map = ol.Map({ ... })
 * const changes = Observable.fromOlEvent(map.getView(), 'change:center')
 *
 * changes.subscribe(coordinate => console.log(coordinate))
 *
 * @param {ol.Object} target OpenLayers event target.
 * @param {string} eventName The event name of interest, being emitted by the `target`.
 * @param {function(...*): *} [selector] An optional function to post-process results. It takes the arguments
 *    from the event handler and should return a single value.
 * @return {Observable<T>}
 * @memberOf {Observable}
 */
function fromOlEvent(target, eventName, selector) {
  return _Observable.Observable.fromEventPattern(function (handler) {
    return target.on(eventName, handler);
  }, function (handler) {
    return target.un(eventName, handler);
  }, selector);
}

_Observable.Observable.fromOlEvent = fromOlEvent;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _omit2 = __webpack_require__(25);

var _omit3 = _interopRequireDefault(_omit2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _v = __webpack_require__(34);

var _v2 = _interopRequireDefault(_v);

var _target = __webpack_require__(8);

var _target2 = _interopRequireDefault(_target);

var _debug = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

/**
 * Wrapper around ol.Feature.
 *
 * @todo Add property 'visible', like in layer. If visible = false -> set null style
 */
var props = {
  id: {
    type: [String, Number],
    default: function _default() {
      return (0, _v2.default)();
    }
  },
  data: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var methods = {
  refresh: function refresh() {
    this.feature && this.feature.changed();
  },
  plain: function plain() {
    var obj = {
      id: this.id,
      layer: this.layer() && this.layer().$vm.id,
      data: this.data
    };

    var geom = this.feature.getGeometry();
    if (geom) {
      obj.geometry = {
        type: geom.getType(),
        coordinates: geom.getCoordinates()
      };
    }

    return obj;
  },
  styleTarget: function styleTarget() {
    return this.feature;
  }
};

var watch = {
  id: function id(value) {
    this.feature.setId(value);
  },
  data: function data(value) {
    this.feature.setProperties((0, _omit3.default)(['geometry'], value));
  }
};

var styleTargetProvide = _target2.default.provide;
exports.default = {
  name: 'vl-feature',
  mixins: [_target2.default],
  inject: ['layer', 'source'],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    var _this = this;

    return (0, _extends3.default)({}, styleTargetProvide.call(this), {
      feature: function feature() {
        return _this.feature;
      }
    });
  },
  created: function created() {
    createFeature.call(this);
  },
  mounted: function mounted() {
    if (this.source()) {
      this.source().addFeature(this.feature);
    } else if (process.env.NODE_ENV !== 'production') {
      (0, _debug.warn)("Invalid usage of feature component, should have source component among it's ancestors");
    }
  },
  destroyed: function destroyed() {
    this.source() && this.source().removeFeature(this.feature);
    this.feature = undefined;
  }
};

/**
 * Create feature without inner style applying, feature level style
 * will be applied in the layer level style function.
 *
 * @return {ol.Feature}
 */

function createFeature() {
  /**
   * @type {ol.Feature}
   * @protected
   */
  this.feature = new _openlayers2.default.Feature((0, _omit3.default)(['geometry'], this.data));
  this.feature.setId(this.id);
  this.feature.$vm = this;

  return this.feature;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = __webpack_require__(12);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _Observable = __webpack_require__(9);

__webpack_require__(33);

__webpack_require__(20);

__webpack_require__(22);

__webpack_require__(21);

__webpack_require__(11);

var _debug = __webpack_require__(3);

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  import positionMarker from './position-marker.svg'

var props = {
  tracking: {
    type: Boolean,
    default: true
  },
  projection: {
    type: String,
    default: _vlOl.consts.MAP_PROJECTION
  }
};

var methods = {
  refresh: function refresh() {
    this.geoloc.changed();
  }
};

var watch = {
  tracking: function tracking(value) {
    this.geoloc.setTracking(value);
  }
};

exports.default = {
  name: 'vl-geoloc',
  mixins: [_rxSubs2.default],
  inject: ['serviceLayer'],
  props: props,
  watch: watch,
  methods: methods,
  render: function render(h) {
    return h();
  },
  data: function data() {
    return {
      currentPosition: undefined,
      currentAccuracy: undefined
    };
  },
  created: function created() {
    createGeolocApi.call(this);
    subscribeToGeolocation.call(this);
  },
  destroyed: function destroyed() {
    this.geoloc.setTracking(false);
    //      this.serviceLayer() && this.serviceLayer().getSource().removeFeature(this.positionFeature)
    this.geoloc = this.positionFeature = undefined;
  }
};

/**
 * @return {ol.Geolocation}
 */

function createGeolocApi() {
  /**
   * @type {ol.Geolocation}
   * @protected
   */
  this.geoloc = new _openlayers2.default.Geolocation({
    tracking: this.tracking,
    projection: this.projection
  });

  this.geoloc.$vm = this;
  /**
   * @type {ol.Feature}
   * @protected
   */
  //    this.positionFeature = new ol.Feature({
  //      internal: true
  //    })
  //    this.positionFeature.setStyle(new ol.style.Style({
  //      image: new ol.style.Icon({
  //        src: positionMarker,
  //        scale: 0.85,
  //        anchor: [ 0.5, 1 ]
  //      })
  //    }))
  //    this.serviceLayer() && this.serviceLayer().getSource().addFeature(this.positionFeature)

  return this.geoloc;
}

function subscribeToGeolocation() {
  var _this = this;

  var geolocChanges = _Observable.Observable.fromOlEvent(this.geoloc, 'change').throttleTime(100).map(function () {
    var position = _openlayers2.default.proj.toLonLat(_this.geoloc.getPosition(), _this.projection);
    var accuracy = _this.geoloc.getAccuracy();

    return { position: position, accuracy: accuracy };
  }).distinctUntilChanged(function (a, b) {
    return (0, _isEqual3.default)(a, b);
  });

  this.rxSubs.geoloc = geolocChanges.subscribe(function (_ref) {
    var position = _ref.position,
        accuracy = _ref.accuracy;

    _this.currentPosition = position;
    _this.currentAccuracy = accuracy;
    _this.$emit('change', { position: position, accuracy: accuracy });
  }, _debug.errordbg);
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  }
};

var methods = {
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.LineString(_vlOl.coord.lineFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-line-string',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  }
};

var methods = {
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.MultiLineString(_vlOl.coord.multiLineFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-multi-line-string',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  }
};

var methods = {
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.MultiPoint(_vlOl.coord.multiPointFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-multi-point',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  }
};

var methods = {
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.MultiPolygon(_vlOl.coord.multiPolygonFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-multi-polygon',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length === 2;
    }
  }
};

var methods = {
  /**
   * @return {ol.geom.Point}
   * @protected
   */
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.Point(_vlOl.coord.pointFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-point',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _geom = __webpack_require__(4);

var _geom2 = _interopRequireDefault(_geom);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  coordinates: {
    type: Array,
    required: true,
    validator: function validator(value) {
      return Array.isArray(value) && value.length;
    }
  }
};

var methods = {
  createGeometry: function createGeometry() {
    return new _openlayers2.default.geom.Polygon(_vlOl.coord.polygonFromLonLat(this.coordinates, this.view().getProjection()));
  }
};

exports.default = {
  name: 'vl-geom-polygon',
  mixins: [_geom2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _difference2 = __webpack_require__(143);

var _difference3 = _interopRequireDefault(_difference2);

var _forEach2 = __webpack_require__(23);

var _forEach3 = _interopRequireDefault(_forEach2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _Observable = __webpack_require__(9);

__webpack_require__(11);

var _debug = __webpack_require__(3);

var _vlOl = __webpack_require__(2);

var _interaction = __webpack_require__(26);

var _interaction2 = _interopRequireDefault(_interaction);

var _target = __webpack_require__(8);

var _target2 = _interopRequireDefault(_target);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo add other options, like event modifiers
var props = {
  multi: {
    type: Boolean,
    default: false
  },
  wrapX: {
    type: Boolean,
    default: true
  },
  selected: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var interactionRefresh = _interaction2.default.methods.refresh;
var methods = {
  /**
   * @protected
   */
  subscribeAll: function subscribeAll() {
    subscribeToInteractionChanges.call(this);
  },

  /**
   * @return {ol.interaction.Select}
   * @protected
   */
  createInteraction: function createInteraction() {
    var defaultStyles = _vlOl.style.defaultEditStyle();
    var styleFunc = (0, _target.createStyleFunc)(this);
    var style = function __selectStyleFunc(feature, resolution) {
      var styles = styleFunc(feature, resolution);
      if (styles === null || Array.isArray(styles) && styles.length) {
        return styles;
      }

      return feature.getGeometry() != null ? defaultStyles[feature.getGeometry().getType()] : null;
    };
    var serviceFeatures = this.serviceLayer() && this.serviceLayer().getSource().getFeatures();

    return new _openlayers2.default.interaction.Select({
      multi: this.multi,
      filter: function filter(feature) {
        return !serviceFeatures.includes(feature);
      },
      style: style
    });
  },
  refresh: function refresh() {
    this.interaction && this.interaction.getFeatures().changed();
    interactionRefresh.call(this);
  },

  /**
   * @param {number} id
   */
  select: function select(id) {
    var selection = this.interaction.getFeatures();
    var layers = this.map().getLayers().getArray().filter(function (layer) {
      return layer.$vm && layer instanceof _openlayers2.default.layer.Vector;
    });

    if (this.currentSelected.includes(id)) return;

    var feature = void 0;
    (0, _forEach3.default)(function (layer) {
      feature = layer.getSource().getFeatureById(id);
      return !feature;
    }, layers);

    feature && selection.push(feature);
  },

  /**
   * @param {number} id
   */
  unselect: function unselect(id) {
    var selection = this.interaction.getFeatures();
    var selectionArray = selection.getArray();
    var idx = selectionArray.findIndex(function (feature) {
      return feature.getId() === id;
    });

    if (idx !== -1) {
      selection.removeAt(idx);
    }
  },
  unselectAll: function unselectAll() {
    this.interaction.getFeatures().clear();
  },
  styleTarget: function styleTarget() {
    return this.interaction;
  },
  setStyle: function setStyle(style) {
    this.styles = style;
    this.refresh();
  }
};

var watch = {
  selected: function selected(_selected) {
    var _this = this;

    var forSelect = (0, _difference3.default)(_selected, this.currentSelected);
    var forUnselect = (0, _difference3.default)(this.currentSelected, _selected);

    forSelect.forEach(function (id) {
      return _this.select(id);
    });
    forUnselect.forEach(function (id) {
      return _this.unselect(id);
    });
  }
};

var interactionProvide = _interaction2.default.provide;
var styleTargetProvide = _target2.default.provide;
exports.default = {
  name: 'vl-interaction-select',
  mixins: [_interaction2.default, _target2.default],
  inject: ['map', 'serviceLayer'],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    return (0, _extends3.default)({}, interactionProvide.call(this), styleTargetProvide.call(this));
  },
  data: function data() {
    return {
      currentSelected: this.selected.slice()
    };
  }
};


function subscribeToInteractionChanges() {
  var _this2 = this;

  var selection = this.interaction.getFeatures();

  this.rxSubs.select = _Observable.Observable.fromOlEvent(selection, 'add', function (evt) {
    return evt.element;
  }).subscribe(function (feature) {
    _this2.currentSelected.push(feature.getId());
    _this2.$emit('select', feature.getId());
  }, _debug.errordbg);
  this.rxSubs.unselect = _Observable.Observable.fromOlEvent(selection, 'remove', function (evt) {
    return evt.element;
  }).subscribe(function (feature) {
    _this2.currentSelected = _this2.currentSelected.filter(function (x) {
      return x !== feature.getId();
    });
    _this2.$emit('unselect', feature.getId());
  }, _debug.errordbg);
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tileBase = __webpack_require__(27);

var _tileBase2 = _interopRequireDefault(_tileBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'vl-layer-tile',
  mixins: [_tileBase2.default]
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vectorBase = __webpack_require__(28);

var _vectorBase2 = _interopRequireDefault(_vectorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'vl-layer-vector',
  mixins: [_vectorBase2.default]
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  loadTilesWhileAnimating: {
    type: Boolean,
    default: false
  },
  loadTilesWhileInteracting: {
    type: Boolean,
    default: false
  },
  pixelRatio: Number,
  renderer: [String, Array],
  logo: [String, Object],
  keyboardEventTarget: [String, Node],
  tabIndex: {
    type: Number,
    default: 0
  }
}; //
//
//
//
//
//
//

var methods = {
  /**
   * Updates `ol.Map` view
   */
  refresh: function refresh() {
    this.map.updateSize();
    this.map.render();
  },

  /**
   * Trigger focus on map container.
   */
  focus: function focus() {
    this.$el.tabIndex = 0;
    this.$el.focus();
  }
};

exports.default = {
  name: 'vl-map',
  props: props,
  methods: methods,
  provide: function provide() {
    var _this = this;

    return {
      map: function map() {
        return _this.map;
      },
      serviceLayer: function serviceLayer() {
        return _this.serviceLayer;
      },
      view: function view() {
        return _this.map.getView();
      }
    };
  },
  created: function created() {
    createMap.call(this);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.map.setTarget(this.$refs.map);
    this.$nextTick(function () {
      _this2.refresh();
    });
  },
  destroyed: function destroyed() {
    this.serviceLayer.setMap(undefined);
    this.map.setTarget(undefined);
    this.map = this.serviceLayer = undefined;
  }
};

/**
 * @return {ol.Map}
 */

function createMap() {
  /**
   * @type {ol.Map}
   * @protected
   */
  this.map = new _openlayers2.default.Map({
    layers: [],
    // todo disable all default interaction and controls and use custom if defined, wrap all
    //      interactions: [],
    //      controls: [],
    loadTilesWhileAnimating: this.loadTilesWhileAnimating,
    loadTilesWhileInteracting: this.loadTilesWhileInteracting,
    pixelRatio: this.pixelRatio,
    renderer: this.renderer,
    logo: this.logo,
    keyboardEventTarget: this.keyboardEventTarget
  });

  this.map.$vm = this;

  this.serviceLayer = new _openlayers2.default.layer.Vector({
    map: this.map,
    source: new _openlayers2.default.source.Vector()
  });

  return this.map;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _isEqual2 = __webpack_require__(12);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isFunction2 = __webpack_require__(19);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _Observable = __webpack_require__(9);

__webpack_require__(33);

__webpack_require__(20);

__webpack_require__(22);

__webpack_require__(21);

__webpack_require__(11);

var _debug = __webpack_require__(3);

var _rxSubs = __webpack_require__(5);

var _rxSubs2 = _interopRequireDefault(_rxSubs);

var _vlOl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    type: Number,
    default: _vlOl.consts.MIN_ZOOM
  },
  center: {
    type: Array,
    default: function _default() {
      return [0, 0];
    },
    validator: function validator(value) {
      return value.length === 2;
    }
  },
  rotation: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: _vlOl.consts.MAX_ZOOM
  },
  minZoom: {
    type: Number,
    default: _vlOl.consts.MIN_ZOOM
  },
  projection: {
    type: String,
    default: _vlOl.consts.MAP_PROJECTION
  },
  enableRotation: {
    type: Boolean,
    default: true
  },
  extent: {
    type: Array,
    validator: function validator(value) {
      return value.length === 4;
    }
  },
  maxResolution: Number,
  minResolution: Number,
  resolution: Array,
  zoomFactor: {
    type: Number,
    default: _vlOl.consts.ZOOM_FACTOR
  }
};

var methods = {
  /**
   * @see {@link https://openlayers.org/en/latest/apidoc/ol.View.html#fit}
   */
  fit: function fit(geometryOrExtent, options) {
    this.view.fit(geometryOrExtent, options);
  },

  /**
   * @see {@link https://openlayers.org/en/latest/apidoc/ol.View.html#animate}
   * @param {...Object} args
   * @return {Promise}
   */
  animate: function animate() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var cb = args.find(_isFunction3.default);

    return new _promise2.default(function (resolve) {
      var _view;

      return (_view = _this.view).animate.apply(_view, args.concat([function (complete) {
        cb && cb(complete);
        resolve(complete);
      }]));
    });
  },
  refresh: function refresh() {
    this.view.changed();
  },
  setCurrentView: function setCurrentView(_ref) {
    var center = _ref.center,
        zoom = _ref.zoom,
        rotation = _ref.rotation;

    if (center != null && !(0, _isEqual3.default)(center, this.currentCenter)) {
      this.view.setCenter(_openlayers2.default.proj.fromLonLat(center, this.projection));
    }
    if (zoom != null && zoom !== this.currentZoom) {
      this.view.setZoom(zoom);
    }
    if (rotation != null && rotation !== this.currentRotation) {
      this.view.setRotation(rotation);
    }
  },
  subscribeAll: function subscribeAll() {
    subscribeToViewChanges.call(this);
  },
  mountView: function mountView() {
    if (!this.map()) {
      (0, _debug.warn)("Invalid usage of view component, should have map component among it's ancestors");
    }

    var view = this.map().getView();

    if (view && view.$vm) {
      if (process.env.NODE_ENV !== 'production') {
        (0, _debug.warn)('Map already has unmounted vl-view component. ' + 'It will be replaced with new.');
      }
      view.$vm.unmountView();
    }

    this.map().setView(this.view);
    this.subscribeAll();
  },
  unmountView: function unmountView() {
    this.unsubscribeAll();
    this.map() && this.map().setView(undefined);
  }
};
// todo watch other props
var watch = {
  center: function center(_center) {
    this.setCurrentView({ center: _center });
  },
  zoom: function zoom(_zoom) {
    this.setCurrentView({ zoom: _zoom });
  },
  rotation: function rotation(_rotation) {
    this.setCurrentView({ rotation: _rotation });
  }
};

exports.default = {
  name: 'vl-map-view',
  inject: ['map'],
  mixins: [_rxSubs2.default],
  props: props,
  methods: methods,
  watch: watch,
  render: function render(h) {
    return h();
  },
  data: function data() {
    return {
      currentZoom: this.zoom,
      currentCenter: this.center.slice(),
      currentRotation: this.rotation
    };
  },
  created: function created() {
    createView.call(this);
  },
  mounted: function mounted() {
    this.mountView();
  },
  destroyed: function destroyed() {
    this.unmountView();
    this.view = undefined;
  }
};

/**
 * @return {ol.View}
 */

function createView() {
  /**
   * @type {ol.View}
   * @protected
   */
  this.view = new _openlayers2.default.View({
    center: _openlayers2.default.proj.fromLonLat(this.currentCenter, this.projection),
    zoom: this.currentZoom,
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
    projection: this.projection
  });
  this.view.$vm = this;

  return this.view;
}

/**
 * Subscribe to OpenLayers significant events
 */
function subscribeToViewChanges() {
  var _this2 = this;

  var viewChanges = _Observable.Observable.fromOlEvent(this.view, 'change').throttleTime(300).map(function () {
    var center = _openlayers2.default.proj.toLonLat(_this2.view.getCenter(), _this2.projection);
    var zoom = Math.ceil(_this2.view.getZoom());
    var rotation = _this2.view.getRotation();

    return { center: center, zoom: zoom, rotation: rotation };
  }).distinctUntilChanged(function (a, b) {
    return (0, _isEqual3.default)(a, b);
  });

  this.rxSubs.viewChanges = viewChanges.subscribe(function (_ref2) {
    var center = _ref2.center,
        zoom = _ref2.zoom,
        rotation = _ref2.rotation;

    _this2.currentCenter = center;
    _this2.currentZoom = zoom;
    _this2.currentRotation = rotation;
    _this2.$emit('change', { center: center, zoom: zoom, rotation: rotation });
  }, _debug.errordbg);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xyzBase = __webpack_require__(10);

var _xyzBase2 = _interopRequireDefault(_xyzBase);

var _func = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  url: {
    type: String,
    default: 'http://{a-c}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}{tileNameSuffix}.{tileFormat}?access_token={accessToken}'
  },
  accessToken: {
    type: String,
    required: true
  },
  mapId: {
    type: String,
    required: true
  },
  attributions: {
    type: String,
    default: '© <a href="https://www.mapbox.com/">MapBox</a>, ' + new Date().getFullYear()
  },
  tileFormat: {
    type: String,
    default: 'png'
  }
};

var computed = {
  tileNameSuffix: function tileNameSuffix() {
    return _tileNameSuffix(this.tilePixelRatio);
  },
  urlTokens: function urlTokens() {
    return ['mapId', 'accessToken', 'tileNameSuffix', 'tileFormat'];
  }
};

exports.default = {
  name: 'vl-source-mapbox',
  mixins: [_xyzBase2.default],
  props: props,
  computed: computed
};

/**
 * @param {number} [ratio]
 * @returns {number}
 * @private
 */

function tileRatio(ratio) {
  ratio = (0, _func.coalesce)(ratio, 1);

  return ratio > 1 ? 2 : 1;
}

/**
 * @param {number} [ratio]
 * @returns {string}
 * @private
 */
function _tileNameSuffix(ratio) {
  ratio = tileRatio(ratio);

  return ratio > 1 ? ['@', ratio, 'x'].join('') : '';
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _xyzBase = __webpack_require__(10);

var _xyzBase2 = _interopRequireDefault(_xyzBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  attributions: {
    type: String,
    default: _openlayers2.default.source.OSM.ATTRIBUTION.getHTML()
  },
  url: {
    type: String,
    default: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  maxZoom: {
    type: Number,
    default: 19
  }
};

var methods = {
  createSource: function createSource() {
    return new _openlayers2.default.source.OSM({
      url: this.url,
      attributions: this.attributions,
      crossOrigin: this.crossOrigin,
      maxZoom: this.maxZoom
    });
  }
};

exports.default = {
  name: 'vl-source-osm',
  mixins: [_xyzBase2.default],
  props: props,
  methods: methods
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vectorBase = __webpack_require__(30);

var _vectorBase2 = _interopRequireDefault(_vectorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'vl-source-vector',
  mixins: [_vectorBase2.default]
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xyzBase = __webpack_require__(10);

var _xyzBase2 = _interopRequireDefault(_xyzBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'vl-source-xyz',
  mixins: [_xyzBase2.default]
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _image = __webpack_require__(15);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  radius: {
    type: Number,
    default: 5
  },
  snapToPixel: {
    type: Boolean,
    default: true
  }
};

var methods = {
  /**
   * @return {ol.style.Circle}
   * @protected
   */
  createStyle: function createStyle() {
    return new _openlayers2.default.style.Circle({
      radius: this.radius,
      snapToPixel: this.snapToPixel,
      fill: this.fill,
      stroke: this.stroke
    });
  }
};

var watch = {
  radius: function radius() {
    this.refresh();
  },
  snapToPixel: function snapToPixel() {
    this.refresh();
  }
};

exports.default = {
  name: 'vl-style-circle',
  mixins: [_image2.default],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    return {
      setFill: setFill.bind(this),
      setStroke: setStroke.bind(this)
    };
  }
};


function setFill(fill) {
  /**
   * @type {ol.style.Fill}
   * @private
   */
  this.fill = fill;
  this.refresh();
}

function setStroke(stroke) {
  /**
   * @type {ol.style.Stroke}
   * @private
   */
  this.stroke = stroke;
  this.refresh();
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _debug = __webpack_require__(3);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zIndex: Number,
  geomType: String
}; //
//
//
//
//
//

/**
 * ol.style.Style wrapper.
 * Acts as an style container that will be injected into "style" slot inside layer or feature components.
 */


var methods = {
  /**
   * @return {ol.style.Style}
   * @protected
   */
  createStyle: function createStyle() {
    return new _openlayers2.default.style.Style({
      zIndex: this.zIndex,
      fill: this.fill,
      stroke: this.stroke,
      image: this.image
    });
  },
  mountStyle: function mountStyle() {
    var currentStyle = this.getStyle() || [];
    if (!Array.isArray(currentStyle)) {
      if (process.env.NODE_ENV !== 'production') {
        (0, _debug.warn)('Current style is not an array, will be replaced with new style array');
      }
      currentStyle = [];
    }

    currentStyle.push({
      style: this.style,
      geomType: this.geomType
    });
    this.setStyle(currentStyle);
  },
  unmountStyle: function unmountStyle() {
    var _this = this;

    var currentStyle = this.getStyle() || [];
    if (!Array.isArray(currentStyle)) {
      if (process.env.NODE_ENV !== 'production') {
        (0, _debug.warn)('Current style is not an array, will be replaced with new style array');
      }
      currentStyle = [];
    }

    currentStyle = currentStyle.filter(function (s) {
      return s.style !== _this.style;
    });
    currentStyle.length || (currentStyle = undefined);
    this.setStyle(currentStyle);
  }
};

var watch = {
  zIndex: function zIndex(value) {
    this.style.setZIndex(value);
  },
  geomType: function geomType() {
    this.refresh();
  }
};

exports.default = {
  name: 'vl-style-container',
  mixins: [_style2.default],
  inject: ['setStyle', 'getStyle'],
  props: props,
  methods: methods,
  watch: watch,
  provide: function provide() {
    return {
      setFill: setFill.bind(this),
      setStroke: setStroke.bind(this),
      setImage: setImage.bind(this)
    };
  }
};


function setFill(fill) {
  /**
   * @type {ol.style.Fill}
   * @protected
   */
  this.fill = fill;

  if (this.style) {
    this.style.setFill(this.fill);
    this.refresh();
  }
}

function setStroke(stroke) {
  /**
   * @type {ol.style.Stroke}
   * @protected
   */
  this.stroke = stroke;

  if (this.style) {
    this.style.setStroke(this.stroke);
    this.refresh();
  }
}

function setImage(image) {
  /**
   * @type {ol.style.Image}
   * @protected
   */
  this.image = image;

  if (this.style) {
    this.style.setImage(this.image);
    this.refresh();
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  color: {
    type: [String, Array],
    default: null
  }
};

var methods = {
  /**
   * @return {ol.style.Fill}
   * @protected
   */
  createStyle: function createStyle() {
    return new _openlayers2.default.style.Fill({
      color: this.color
    });
  },

  /**
   * @protected
   */
  mountStyle: function mountStyle() {
    this.setFill(this.style);
  },

  /**
   * @protected
   */
  unmountStyle: function unmountStyle() {
    this.setFill(undefined);
  }
};

var watch = {
  color: function color(value) {
    this.style.setColor(value);
    this.refresh();
  }
};

exports.default = {
  name: 'vl-style-fill',
  mixins: [_style2.default],
  inject: ['setFill'],
  props: props,
  methods: methods,
  watch: watch
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _image = __webpack_require__(15);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  src: {
    type: String,
    required: true
  },
  size: Array,
  anchor: {
    type: Array,
    default: function _default() {
      return [0.5, 0.5];
    }
  },
  anchorOrigin: {
    type: String,
    default: 'top-left' // bottom-left, bottom-right, top-left or top-right
  },
  anchorXUnits: {
    type: String,
    default: 'fraction' // pixels, fraction
  },
  anchorYUnits: {
    type: String,
    default: 'fraction' // pixels, fraction
  },
  color: Array,
  crossOrigin: {
    type: String,
    default: 'anonymous'
  },
  offset: {
    type: Array,
    default: function _default() {
      return [0, 0];
    }
  },
  offsetOrigin: {
    type: String,
    default: 'top-left' // bottom-left, bottom-right, top-left or top-right
  },
  opacity: {
    type: Number,
    default: 1
  },
  scale: {
    type: Number,
    default: 1
  },
  snapToPixel: {
    type: Boolean,
    default: true
  },
  rotateWithView: {
    type: Boolean,
    default: false
  },
  rotation: {
    type: Number,
    default: 0
  }
};

var methods = {
  /**
   * @return {ol.style.Icon}
   * @protected
   */
  createStyle: function createStyle() {
    return new _openlayers2.default.style.Icon({
      anchor: this.anchor,
      anchorOrigin: this.anchorOrigin,
      anchorXUnits: this.anchorXUnits,
      anchorYUnits: this.anchorYUnits,
      color: this.color,
      crossOrigin: this.crossOrigin,
      offset: this.offset,
      offsetOrigin: this.offsetOrigin,
      opacity: this.opacity,
      scale: this.scale,
      snapToPixel: this.snapToPixel,
      rotateWithView: this.rotateWithView,
      rotation: this.rotation,
      size: this.size,
      src: this.src
    });
  }
};
// todo other watchers
var watch = {
  src: function src() {
    this.refresh();
  },
  size: function size() {
    this.refresh();
  },
  anchor: function anchor() {
    this.refresh();
  },
  scale: function scale() {
    this.refresh();
  }
};

exports.default = {
  name: 'vl-style-icon',
  mixins: [_image2.default],
  props: props,
  methods: methods,
  watch: watch
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(0);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  color: {
    type: [Array, String],
    default: null
  },
  lineCap: {
    type: String,
    default: 'round' // round, butt, square
  },
  lineJoin: {
    type: String,
    default: 'round' // round, bevel, miter
  },
  lineDash: Array,
  lineDashOffset: Number,
  miterLimit: Number,
  width: {
    type: Number,
    default: 1
  }
};

var methods = {
  /**
   * @return {ol.style.Stroke}
   * @protected
   */
  createStyle: function createStyle() {
    return new _openlayers2.default.style.Stroke({
      color: this.color,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      lineDash: this.lineDash,
      lineDashOffset: this.lineDashOffset,
      miterLimit: this.miterLimit,
      width: this.width
    });
  },

  /**
   * @protected
   */
  mountStyle: function mountStyle() {
    this.setStroke(this.style);
  },

  /**
   * @protected
   */
  unmountStyle: function unmountStyle() {
    this.setStroke(undefined);
  }
};

var watch = {
  color: function color(value) {
    this.style.setColor(value);
    this.refresh();
  },
  lineCap: function lineCap(value) {
    this.style.setLineCap(value);
    this.refresh();
  },
  lineDash: function lineDash(value) {
    this.style.setLineDash(value);
    this.refresh();
  },
  lineJoin: function lineJoin(value) {
    this.style.setLineJoin(value);
    this.refresh();
  },
  width: function width(value) {
    this.style.setWidth(value);
    this.refresh();
  }
  // todo добавить остальный вотчеры

};

exports.default = {
  name: 'vl-style-stroke',
  mixins: [_style2.default],
  inject: ['setStroke'],
  props: props,
  watch: watch,
  methods: methods
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(112)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(70),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(71),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(93)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(72),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(73),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(74),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(110)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(75),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(76),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(77),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(78),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(79),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(95)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(81),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(82),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(83),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(107)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(84),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(85),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(86),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(135),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(88),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(102)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(89),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(90),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    staticStyle: {
      "display": "none !important"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vl-map"
  }, [_c('div', {
    ref: "map",
    staticClass: "map",
    attrs: {
      "tabindex": _vm.tabIndex
    }
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    staticStyle: {
      "display": "none !important"
    }
  }, [_vm._t("default", null, {
    feature: _vm.plain
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/math/log10");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/difference");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/flow");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/isEmpty");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/isString");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/kebabCase");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/lowerFirst");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/reduce");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/templateSettings");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/upperFirst");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("ol3-tilecache");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/fromEventPattern");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _forEach2 = __webpack_require__(23);

var _forEach3 = _interopRequireDefault(_forEach2);

var _merge2 = __webpack_require__(24);

var _merge3 = _interopRequireDefault(_merge2);

var _omit2 = __webpack_require__(25);

var _omit3 = _interopRequireDefault(_omit2);

var _components = __webpack_require__(35);

var components = _interopRequireWildcard(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forEachWithKey = _forEach3.default.convert({ cap: false }); /* global PKG_VERSION, PKG_FULLNAME */
/**
 * VueLayers
 * Vue components to work with OpenLayers 3.
 *
 * @author Vladimir Vershinin <ghettovoice@gmail.com>
 * @license MIT
 * @copyright (c) 2017, Vladimir Vershinin <ghettovoice@gmail.com>
 */

var keys = ['geom', 'layer', 'source', 'style', 'interaction'];

var flatComponents = (0, _extends3.default)({}, (0, _omit3.default)(keys, components), keys.reduce(function (all, key) {
  return (0, _merge3.default)(all, components[key]);
}, {}));

exports.default = (0, _extends3.default)({
  PKG_NAME: "VueLayers",
  VERSION: "0.1.0"
}, flatComponents, {
  install: function install(Vue) {
    forEachWithKey(function (component, key) {
      if (component.install) {
        Vue.use(component);
      } else if (key === 'directives') {
        (0, _forEach3.default)(Vue.use.bind(Vue), component);
      }
    }, flatComponents);
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map