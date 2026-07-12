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
const LabelPairedCircleBookmarkMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5 9.5v6q0 .328.281.469c.157.094.375.062.532-.063L8 14.156l2.188 1.75c.124.125.343.125.5.063.187-.094.312-.25.312-.469v-6c0-.812-.687-1.5-1.5-1.5h-3A1.5 1.5 0 0 0 5 9.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a58aabf73ce2530d413d144d532b1a69__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleBookmarkMdFillIcon);
exports.default = ForwardRef;
