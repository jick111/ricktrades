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
const LabelPairedExclamationSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 2, height: 22, viewBox: '0 0 2 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.438 5.063v8.312a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438V5.063A.45.45 0 0 1 1 4.625a.47.47 0 0 1 .438.438M1 16.656A.63.63 0 0 1 .344 16c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '728ce1e42aaa553728976555778d35b5__a' },
            React.createElement("path", { d: 'M0 0h2v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationSmRegularIcon);
exports.default = ForwardRef;
