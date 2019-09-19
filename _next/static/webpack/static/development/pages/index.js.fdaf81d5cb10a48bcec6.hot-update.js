webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _parts_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/utils */ "./parts/utils.js");

var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* @jsx jsx */







var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var keys_pressed = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    h: false,
    j: false,
    k: false,
    l: false,
    x: false,
    s: false,
    d: false
  });
  var coordinates = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([0, 0]);
  var overlayCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var keys_array = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(keys_pressed.current);

  function keyAction(key) {
    var octx = overlayCanvasRef.current.getContext('2d');
    var current = coordinates.current;

    if (key === 'j') {
      coordinates.current = [current[0], current[1] + 5];
    }

    octx.fillRect(coordinates.current[0], coordinates.current[1], 5, 5);
  }

  function downHandler(e) {
    keyAction(e.key); // if (keys_array.includes(e.key)) {
    //   keys_pressed.current[e.key] = true;
    // }
  }

  function upHandler(e) {
    if (keys_array.includes(e.key)) {
      keys_pressed.current[e.key] = false;
    }
  }

  function setWindowSize() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// let octx = overlayCanvasRef.current.getContext('2d');
    // octx.fillStyle = 'pink';
    // let ctx = canvasRef.current.getContext('2d');
    // function update() {
    //   let modify = [0, 0];
    //   let inc = 5;
    //   if (keys_pressed.current['h']) modify[0] += -inc;
    //   if (keys_pressed.current['j']) modify[1] += inc;
    //   if (keys_pressed.current['k']) modify[1] += -inc;
    //   if (keys_pressed.current['l']) modify[0] += inc;
    //   let current = coordinates.current;
    //   coordinates.current = [current[0] + modify[0], current[1] + modify[1]];
    //   octx.clearRect(0, 0, dimensions[0], dimensions[1]);
    //   octx.fillRect(current[0], current[1], 5, 5);
    //   if (keys_pressed.current['d']) {
    //     ctx.fillRect(current[0], current[1], 5, 5);
    //   }
    // }
    // requestRef.current = requestInterval(update, 50);
    // return () => {
    //   cancelAnimationFrame(requestRef.current);
    // };
  }, [dimensions]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEYyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyByZXF1ZXN0SW50ZXJ2YWwgfSBmcm9tICcuLi9wYXJ0cy91dGlscyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCByZXF1ZXN0UmVmID0gdXNlUmVmKCk7XG4gIGxldCBrZXlzX3ByZXNzZWQgPSB1c2VSZWYoe1xuICAgIGg6IGZhbHNlLFxuICAgIGo6IGZhbHNlLFxuICAgIGs6IGZhbHNlLFxuICAgIGw6IGZhbHNlLFxuICAgIHg6IGZhbHNlLFxuICAgIHM6IGZhbHNlLFxuICAgIGQ6IGZhbHNlLFxuICB9KTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gdXNlUmVmKFswLCAwXSk7XG4gIGxldCBvdmVybGF5Q2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBrZXlzX2FycmF5ID0gT2JqZWN0LmtleXMoa2V5c19wcmVzc2VkLmN1cnJlbnQpO1xuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXkpIHtcbiAgICBsZXQgb2N0eCA9IG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjdXJyZW50ID0gY29vcmRpbmF0ZXMuY3VycmVudDtcbiAgICBpZiAoa2V5ID09PSAnaicpIHtcbiAgICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSBbY3VycmVudFswXSwgY3VycmVudFsxXSArIDVdO1xuICAgIH1cbiAgICBvY3R4LmZpbGxSZWN0KGNvb3JkaW5hdGVzLmN1cnJlbnRbMF0sIGNvb3JkaW5hdGVzLmN1cnJlbnRbMV0sIDUsIDUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleUFjdGlvbihlLmtleSk7XG4gICAgLy8gaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgLy8gICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCkge1xuICAgIHNldERpbWVuc2lvbnMoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2luZG93U2l6ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsZXQgb2N0eCA9IG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIG9jdHguZmlsbFN0eWxlID0gJ3BpbmsnO1xuICAgIC8vIGxldCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyAgIGxldCBtb2RpZnkgPSBbMCwgMF07XG4gICAgLy8gICBsZXQgaW5jID0gNTtcbiAgICAvLyAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnaCddKSBtb2RpZnlbMF0gKz0gLWluYztcbiAgICAvLyAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnaiddKSBtb2RpZnlbMV0gKz0gaW5jO1xuICAgIC8vICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydrJ10pIG1vZGlmeVsxXSArPSAtaW5jO1xuICAgIC8vICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydsJ10pIG1vZGlmeVswXSArPSBpbmM7XG4gICAgLy8gICBsZXQgY3VycmVudCA9IGNvb3JkaW5hdGVzLmN1cnJlbnQ7XG4gICAgLy8gICBjb29yZGluYXRlcy5jdXJyZW50ID0gW2N1cnJlbnRbMF0gKyBtb2RpZnlbMF0sIGN1cnJlbnRbMV0gKyBtb2RpZnlbMV1dO1xuICAgIC8vICAgb2N0eC5jbGVhclJlY3QoMCwgMCwgZGltZW5zaW9uc1swXSwgZGltZW5zaW9uc1sxXSk7XG4gICAgLy8gICBvY3R4LmZpbGxSZWN0KGN1cnJlbnRbMF0sIGN1cnJlbnRbMV0sIDUsIDUpO1xuICAgIC8vICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydkJ10pIHtcbiAgICAvLyAgICAgY3R4LmZpbGxSZWN0KGN1cnJlbnRbMF0sIGN1cnJlbnRbMV0sIDUsIDUpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyByZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0SW50ZXJ2YWwodXBkYXRlLCA1MCk7XG4gICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAvLyAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RSZWYuY3VycmVudCk7XG4gICAgLy8gfTtcbiAgfSwgW2RpbWVuc2lvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250cy5ib2R5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMF19cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RXRjaDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX1cbiAgICAgICAgICB3aWR0aD17ZGltZW5zaW9uc1swXX1cbiAgICAgICAgICBoZWlnaHQ9e2RpbWVuc2lvbnNbMV19XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBkaXNwbGF5OiBkaW1lbnNpb25zWzBdICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtvdmVybGF5Q2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICB3aWR0aD17ZGltZW5zaW9uc1swXX1cbiAgICAgICAgICBoZWlnaHQ9e2RpbWVuc2lvbnNbMV19XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBkaXNwbGF5OiBkaW1lbnNpb25zWzBdICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBib3R0b206IHRoZW1lLnNwYWNlWzFdLFxuICAgICAgICAgICAgbGVmdDogJzEuNWNoJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMS41Y2gnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7J3hzZCcuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlzX3ByZXNzZWQuY3VycmVudFtsXVxuICAgICAgICAgICAgICAgICAgICAgID8gJ3BpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7J2hqa2wnLnNwbGl0KCcnKS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoga2V5c19wcmVzc2VkLmN1cnJlbnRbbF1cbiAgICAgICAgICAgICAgICAgICAgICA/ICdwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("canvas", {
    ref: overlayCanvasRef,
    sx: {
      background: 'transparent'
    },
    width: dimensions[0],
    height: dimensions[1],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'none',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, 'xsd'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, 'hjkl'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fdaf81d5cb10a48bcec6.hot-update.js.map