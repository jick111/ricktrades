"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllustrativeComputerIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeComputerIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M26 5.333H6a3.335 3.335 0 0 0-3.333 3.334V20A3.335 3.335 0 0 0 6 23.333h9.333v2h-2.666c-.367 0-.667.3-.667.667s.3.667.667.667h6.666c.367 0 .667-.3.667-.667s-.3-.667-.667-.667h-2.666v-2H26A3.334 3.334 0 0 0 29.333 20V8.667A3.335 3.335 0 0 0 26 5.333M28 20c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8.667c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2z' }),
        React.createElement("path", { d: 'M26 16.667c0-.367-.3-.667-.667-.667h-2c-.08 0-.16.02-.233.047-.02.006-.04.02-.067.033a.6.6 0 0 0-.14.093c-.02.014-.033.027-.053.047a.8.8 0 0 0-.12.173s-.007.014-.013.02a.7.7 0 0 0-.047.234v2.026c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.393l.86.86c.134.133.3.193.474.193A.664.664 0 0 0 25.8 18.2l-.86-.86h.393c.367 0 .667-.3.667-.667zM23.333 14.667c.367 0 .667-.3.667-.667v-.667c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666V14c0 .367.3.667.666.667M21.14 13.527a.664.664 0 1 0-.94.94l.667.666c.133.134.3.194.473.194s.34-.067.473-.194c.26-.26.26-.68 0-.94l-.666-.666zM20.667 16H20c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.667c.366 0 .666-.3.666-.666s-.3-.667-.666-.667' }))));
exports.IllustrativeComputerIcon = IllustrativeComputerIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeComputerIcon);
exports.default = ForwardRef;
