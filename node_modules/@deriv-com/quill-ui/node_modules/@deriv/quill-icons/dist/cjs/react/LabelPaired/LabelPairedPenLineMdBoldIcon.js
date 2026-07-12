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
const LabelPairedPenLineMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.406 17.719.719-2.438c.125-.437.375-.844.688-1.156l9.5-9.5a2.02 2.02 0 0 1 2.843 0l1.219 1.219c.094.093.188.218.25.312a1.994 1.994 0 0 1-.25 2.532l-9.5 9.5c-.031.03-.094.062-.125.125a3.3 3.3 0 0 1-1.031.562l-2.438.719-1.344.375a.64.64 0 0 1-.718-.188.64.64 0 0 1-.188-.718zm1.938-1.282-.5 1.72 1.719-.5.718-.22c.219-.062.375-.156.532-.312l7.156-7.156L10.03 8.03l-7.156 7.156c-.031 0-.031.032-.062.063-.126.125-.188.281-.25.469zM7.75 18.5h9.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-9.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '902db32c5205392e559b426459765312__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineMdBoldIcon);
exports.default = ForwardRef;
