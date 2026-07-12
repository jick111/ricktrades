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
const LabelPairedArrowUpRightFromSquareXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.25 7.125c0-.61.469-1.125 1.125-1.125h7.453a1.11 1.11 0 0 1 1.125 1.125v7.5c0 .656-.469 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125V9.844L11.25 20.297a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594L20.156 8.25h-4.781c-.656 0-1.125-.469-1.125-1.125M3.375 7.5h6c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 9.375 9.75h-6a1.11 1.11 0 0 0-1.125 1.125v15.75c0 .656.469 1.125 1.125 1.125h15.75a1.11 1.11 0 0 0 1.125-1.125v-6c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v6C22.5 28.5 20.953 30 19.125 30H3.375A3.36 3.36 0 0 1 0 26.625v-15.75C0 9.047 1.5 7.5 3.375 7.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c308fbb6fcf0ffd8b5d7e6823f2f3ce5__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareXlBoldIcon);
exports.default = ForwardRef;
