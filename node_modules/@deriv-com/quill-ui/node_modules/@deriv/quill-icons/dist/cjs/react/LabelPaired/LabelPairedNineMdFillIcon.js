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
const LabelPairedNineMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 10a3.03 3.03 0 0 0 1.5 2.625c.906.531 2.063.531 3 0C7.406 12.063 8 11.094 8 10c0-1.062-.594-2.031-1.5-2.594-.937-.531-2.094-.531-3 0C2.563 7.97 2 8.938 2 10m2.719 5C2.094 14.875 0 12.688 0 10c0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 .094-.031.188-.031.25-.031 1.125-.469 2.188-1.188 3.063L4.25 18.656c-.344.438-1 .469-1.406.125-.438-.343-.469-1-.125-1.406z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5cc04477ba92a0cb4114ea190565a8fe__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedNineMdFillIcon);
exports.default = ForwardRef;
