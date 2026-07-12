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
const LabelPairedChartTradingviewXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 29, height: 36, viewBox: '0 0 29 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.586 27.797V8.109a.72.72 0 0 1 .703-.703.69.69 0 0 1 .703.703v19.172c0 .75.61 1.313 1.36 1.313h16.312a.72.72 0 0 1 .703.703.69.69 0 0 1-.703.703H6.79c-1.219 0-2.203-.937-2.203-2.203M24.18 16.078a.844.844 0 0 0-1.032 0l-7.265 7.313-1.828-1.828c-.563-.563-1.453-.563-1.97 0l-3.046 3a.736.736 0 0 0 0 1.03.68.68 0 0 0 .984 0l3.047-3.046 1.828 1.828c.563.563 1.454.563 1.97 0l7.312-7.266a.736.736 0 0 0 0-1.03m-7.782-4.828c0-.516-.468-.984-1.03-.984s-1.032.468-1.032.984c0 .563.469.984 1.031.984.563 0 1.031-.421 1.031-.984m.797-.984-2.11 5.625h1.548l2.062-5.625zm-6.937 0v1.265h2.203v4.36h1.36v-5.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '13ef8caad1925142ac93573932b575d0__a' },
            React.createElement("path", { d: 'M0 0h29v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartTradingviewXlRegularIcon);
exports.default = ForwardRef;
