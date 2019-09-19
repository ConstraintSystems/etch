webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");


var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/* @jsx jsx */






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([0, 0]),
      coordinates = _useState2[0],
      setCoordinates = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var keys_pressed = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({
    h: false,
    j: false,
    k: false,
    l: false,
    x: false,
    s: false,
    d: false
  });

  var keys_array = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(keys_pressed.current);

  function downHandler(e) {
    if (keys_array.includes(e.key)) {
      keys_pressed.current[e.key] = true;
    }
  }

  function upHandler(e) {
    if (keys_array.includes(e.key)) {
      keys_pressed.current[e.key] = false;
    }
  }

  function setWindowSize() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function update() {
      var modify = [0, 0];
      if (keys_pressed.current['h']) modify[0] += -1;
      if (keys_pressed.current['j']) modify[1] += 1;
      if (keys_pressed.current['k']) modify[1] += -1;
      if (keys_pressed.current['l']) modify[0] += 1;
      setCoordinates(function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return [x + modify[0], y + modify[1]];
      });
      requestAnimationFrame(update);
    }

    requestRef.current = requestAnimationFrame(update);
    return function () {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 2;
    ctx.clearRect(0, 0, dimensions[0], dimensions[1]);
    ctx.strokeRect(coordinates[0], coordinates[1], 10, 10);
  }, [coordinates]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEUyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIGxldCBjYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleXNfcHJlc3NlZCA9IHVzZVJlZih7XG4gICAgaDogZmFsc2UsXG4gICAgajogZmFsc2UsXG4gICAgazogZmFsc2UsXG4gICAgbDogZmFsc2UsXG4gICAgeDogZmFsc2UsXG4gICAgczogZmFsc2UsXG4gICAgZDogZmFsc2UsXG4gIH0pO1xuICBsZXQga2V5c19hcnJheSA9IE9iamVjdC5rZXlzKGtleXNfcHJlc3NlZC5jdXJyZW50KTtcblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGlmIChrZXlzX2FycmF5LmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAga2V5c19wcmVzc2VkLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0V2luZG93U2l6ZSgpIHtcbiAgICBzZXREaW1lbnNpb25zKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgbGV0IG1vZGlmeSA9IFswLCAwXTtcbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnaCddKSBtb2RpZnlbMF0gKz0gLTE7XG4gICAgICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IDE7XG4gICAgICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2snXSkgbW9kaWZ5WzFdICs9IC0xO1xuICAgICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydsJ10pIG1vZGlmeVswXSArPSAxO1xuICAgICAgc2V0Q29vcmRpbmF0ZXMoKFt4LCB5XSkgPT4gW3ggKyBtb2RpZnlbMF0sIHkgKyBtb2RpZnlbMV1dKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cbiAgICByZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdFJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncGluayc7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBkaW1lbnNpb25zWzBdLCBkaW1lbnNpb25zWzFdKTtcbiAgICBjdHguc3Ryb2tlUmVjdChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0sIDEwLCAxMCk7XG4gIH0sIFtjb29yZGluYXRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnRzLmJvZHl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1swXX1weDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuYm9keX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5FdGNoPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zWzBdfVxuICAgICAgICAgIGhlaWdodD17ZGltZW5zaW9uc1sxXSAtIDIgKiB0aGVtZS5zcGFjZVswXX1cbiAgICAgICAgICBjc3M9e3sgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGJvdHRvbTogdGhlbWUuc3BhY2VbMV0sXG4gICAgICAgICAgICBsZWZ0OiAnMS41Y2gnLFxuICAgICAgICAgICAgcmlnaHQ6ICcxLjVjaCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHsneHNkJy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleXNfcHJlc3NlZC5jdXJyZW50W2xdXG4gICAgICAgICAgICAgICAgICAgICAgPyAncGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHsnaGprbCcuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlzX3ByZXNzZWQuY3VycmVudFtsXVxuICAgICAgICAgICAgICAgICAgICAgID8gJ3BpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1] - 2 * _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].space[0],
    css: {
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, 'xsd'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, 'hjkl'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.353b4300e0d9c1fe44a6.hot-update.js.map