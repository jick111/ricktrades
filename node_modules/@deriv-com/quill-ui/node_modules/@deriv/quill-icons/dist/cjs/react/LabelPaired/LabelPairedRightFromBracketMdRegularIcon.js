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
const LabelPairedRightFromBracketMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm14.969 11.969-4.125-3.906A.24.24 0 0 0 10.688 8c-.094 0-.188.094-.188.219V10c0 .281-.25.5-.5.5H6.25a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25H10c.25 0 .5.25.5.5v1.813c0 .093.094.187.188.187.062 0 .124 0 .156-.031l4.125-3.906S15 12.03 15 12zM16 12c0 .313-.125.594-.344.813l-4.125 3.874c-.219.22-.531.313-.844.313A1.187 1.187 0 0 1 9.5 15.813V14.5H6.25c-.719 0-1.25-.531-1.25-1.25v-2.5c0-.687.531-1.25 1.25-1.25H9.5V8.219C9.5 7.563 10.031 7 10.688 7c.312 0 .624.125.843.344l4.125 3.875c.219.219.344.5.344.781M5.5 6h-3A1.5 1.5 0 0 0 1 7.5v9c0 .844.656 1.5 1.5 1.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3A2.47 2.47 0 0 1 0 16.5v-9C0 6.125 1.094 5 2.5 5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb979d30e2358fa9de626970fce9624b__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightFromBracketMdRegularIcon);
exports.default = ForwardRef;
