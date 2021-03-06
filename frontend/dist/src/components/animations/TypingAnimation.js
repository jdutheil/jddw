"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

require("./TypingAnimation.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * TypingAnimation is a component that simulate a computer typing display
 * It basically display letters by letters, then pause, then goes backway
 * If many words are setted, they will be displayed one by one
 */
var TypingAnimation = function TypingAnimation(_ref) {
  var words = _ref.words;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      currentWord = _useState2[0],
      setCurrentWord = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentWordIndex = _useState4[0],
      setCurrentWordIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentCharIndex = _useState6[0],
      setCurrentCharIndex = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      waiter = _useState8[0],
      setWaiter = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      readBackWay = _useState10[0],
      setReadBackWay = _useState10[1];

  (0, _react.useEffect)(function () {
    var interval = setInterval(updateWord, 100);
    return function () {
      clearInterval(interval);
    };
  }, [currentCharIndex, waiter, readBackWay]);

  var updateWord = function updateWord() {
    if (currentCharIndex == -1) {
      if (waiter > 0) {
        setWaiter(waiter - 1);
      } else {
        if (readBackWay) {
          setReadBackWay(false);
          setCurrentWord('');
          setCurrentCharIndex(0);
        } else {
          setReadBackWay(true);
          setCurrentCharIndex(words[currentWordIndex].length - 1);
        }
      }

      return;
    }

    var char = words[currentWordIndex].charAt(currentCharIndex);

    if (readBackWay) {
      setCurrentWord(currentWord.substring(0, currentWord.length - 1));
    } else {
      setCurrentWord(currentWord + char);
    }

    if (readBackWay) {
      if (currentCharIndex > 0) {
        setCurrentCharIndex(currentCharIndex - 1);
      } else {
        setCurrentCharIndex(-1);
        updateCurrentWordIndex();
      }
    } else {
      if (currentCharIndex < words[currentWordIndex].length - 1) {
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setWaiter(10);
        setCurrentCharIndex(-1);
      }
    }
  };

  var updateCurrentWordIndex = function updateCurrentWordIndex() {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCurrentWordIndex(0);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [currentWord, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "typing-animation__animated-cursor",
      children: "|"
    })]
  });
};

TypingAnimation.propTypes = {
  /** An array with the words to display (even if we only want one word) */
  words: _propTypes.default.array.isRequired
};
var _default = TypingAnimation;
exports.default = _default;

//# sourceMappingURL=TypingAnimation.js.map