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
const LabelPairedEightMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.5 9a4 4 0 0 1-1.125 2.781C9.344 12.531 10 13.687 10 15c0 2.219-1.812 4-4 4H4c-2.219 0-4-1.781-4-4 0-1.312.625-2.469 1.625-3.219C.906 11.062.5 10.094.5 9c0-2.187 1.781-4 4-4h1c2.188 0 4 1.813 4 4m-4 4H4c-1.125 0-2 .906-2 2 0 1.125.875 2 2 2h2c1.094 0 2-.875 2-2 0-1.094-.906-2-2-2zm0-2c1.094 0 2-.875 2-2 0-1.094-.906-2-2-2h-1c-1.125 0-2 .906-2 2 0 1.125.875 2 2 2z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'eb341d608d4170f05a1ea92a0a480560__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightMdFillIcon);
exports.default = ForwardRef;
