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
const React = __importStar(require("react"));
const react_1 = require("react");
const DerivLightSearchIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 128', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#C6E4E4', fillRule: 'evenodd', d: 'M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40m0 8c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#F2F2F2', fillRule: 'evenodd', d: 'M48 24c-1.557 0-3.075.148-4.543.429a4 4 0 0 1-1.504-7.858A32 32 0 0 1 48 16a4 4 0 0 1 0 8m-15.498.338a4 4 0 0 1-.358 5.645 24 24 0 0 0-3.003 3.171A23.88 23.88 0 0 0 24 48a4 4 0 0 1-8 0 31.88 31.88 0 0 1 6.859-19.799 32 32 0 0 1 3.997-4.22 4 4 0 0 1 5.646.357', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#C6E4E4', fillRule: 'evenodd', d: 'M79.172 79.172a4 4 0 0 1 5.656 0l18 18a4 4 0 0 1 0 5.656 4 4 0 0 1-5.656 0l-18-18a4 4 0 0 1 0-5.656', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#4BB4B3', d: 'm96.071 84.758 19.586 19.585a8 8 0 0 1-11.314 11.314L84.758 96.071a2 2 0 0 1 0-2.828l8.485-8.486a2 2 0 0 1 2.828 0' }),
    React.createElement("path", { fill: '#F2F2F2', d: 'M88 124c0 2.209-17.909 4-40 4s-40-1.791-40-4 17.909-4 40-4 40 1.791 40 4' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightSearchIcon);
exports.default = ForwardRef;
