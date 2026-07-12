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
const LabelPairedQuestionCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.125 7.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3v.094c0 1.031-.54 1.968-1.383 2.531l-.984.633a.54.54 0 0 0-.258.469V11c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.023c0-.704.352-1.36.938-1.735l.984-.633c.422-.28.703-.75.703-1.265V7.25c0-.82-.68-1.5-1.5-1.5h-.75c-.844 0-1.5.68-1.5 1.5M4 14.75c-.352 0-.656-.164-.82-.469a.95.95 0 0 1 0-.937.95.95 0 0 1 .82-.469c.328 0 .633.188.797.469a.95.95 0 0 1 0 .937.89.89 0 0 1-.797.469' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '68e440496348052bfe55f37624a61984__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQuestionCaptionFillIcon);
exports.default = ForwardRef;
