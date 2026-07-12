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
const LabelPairedAndroidMdIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.125 13.438a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 .437.344.75.75.75m-8.281 0a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 .437.343.75.75.75m8.562-4.5c2.563 1.406 4.313 4 4.594 7.062H0c.25-3.062 2-5.656 4.563-7.062l-1.5-2.594a.28.28 0 0 1 0-.313q.093-.187.28-.187c.126 0 .22.093.282.187l1.5 2.625a9.49 9.49 0 0 1 7.719 0l1.5-2.625c.062-.093.156-.187.281-.187q.188 0 .281.187a.28.28 0 0 1 0 .313z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7a4fab4b32887dddfb1fd685536a8971__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAndroidMdIcon);
exports.default = ForwardRef;
