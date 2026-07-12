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
exports.IllustrativeLongOrShortIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeLongOrShortIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M30.011 6.002h-.547c-.726 0-1.4.393-1.753 1.033l-2.28 4.14-2.107 3.68a.66.66 0 0 1-.813.293l-3.347-1.253a1.99 1.99 0 0 0-2.293.66l-7.4 9.673a.67.67 0 0 1-.827.194l-3.173-1.587a2.005 2.005 0 0 0-2.667.86l-1.393 2.667a.664.664 0 1 0 1.18.613l1.393-2.667a.67.67 0 0 1 .887-.286l3.173 1.586a2 2 0 0 0 2.48-.573l7.4-9.673a.675.675 0 0 1 .767-.22l3.347 1.253a2 2 0 0 0 2.44-.88l2.106-3.693 2.287-4.154a.67.67 0 0 1 .587-.346h.546c.367 0 .667-.3.667-.667s-.3-.667-.667-.667z' }),
        React.createElement("path", { d: 'M4.011 8.668c.367 0 .667-.3.667-.666s.3-.667.666-.667h7.334c.18 0 .346-.073.473-.193l.86-.86.86.86a.66.66 0 0 0 .473.193h8c.367 0 .667.3.667.667 0 .366.3.666.667.666.366 0 .666-.3.666-.666 0-1.1-.9-2-2-2h-7.726l-1.14-1.14a.664.664 0 0 0-.94 0l-1.14 1.14H5.344c-1.1 0-2 .9-2 2 0 .366.3.666.667.666M28.011 23.335c-.367 0-.667.3-.667.667 0 .366-.3.666-.666.666h-2a.7.7 0 0 0-.474.194l-.86.86-.86-.86a.66.66 0 0 0-.473-.194h-2a.67.67 0 0 1-.667-.666c0-.367-.3-.667-.666-.667s-.667.3-.667.667c0 1.1.9 2 2 2h1.727l1.14 1.14c.133.133.3.193.473.193s.34-.067.473-.193l1.14-1.14h1.727c1.1 0 2-.9 2-2 0-.367-.3-.667-.667-.667zM4.011 10.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M4.011 12.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M4.011 14.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M4.011 16.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M4.011 18.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M4.011 20.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M18.678 20.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M18.678 22.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M18.678 18.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M28.011 20.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M28.011 22.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M28.011 16.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M28.011 18.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M28.011 14.668a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333' }))));
exports.IllustrativeLongOrShortIcon = IllustrativeLongOrShortIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeLongOrShortIcon);
exports.default = ForwardRef;
