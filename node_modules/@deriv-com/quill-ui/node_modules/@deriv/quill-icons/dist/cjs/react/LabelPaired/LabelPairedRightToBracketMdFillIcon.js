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
const LabelPairedRightToBracketMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.781 7.313 3.844 3.843c.219.219.375.531.375.844 0 .344-.156.656-.375.875l-3.844 3.844c-.187.187-.468.281-.75.281A1.04 1.04 0 0 1 5 15.969V14H1c-.562 0-1-.437-1-1v-2c0-.531.438-1 1-1h4V8.063C5 7.5 5.469 7 6.031 7c.282 0 .563.125.75.313M11 17h2c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5e75a69a638e608bdd9927ac2d556550__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightToBracketMdFillIcon);
exports.default = ForwardRef;
