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
const LabelPairedHandGestureTapLeftMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.344 9.969a.815.815 0 0 1 1.062.375l1.25 2.625c.063-.219.219-.375.438-.5a.966.966 0 0 1 1.219.406.92.92 0 0 1 .468-.5.89.89 0 0 1 1.188.406c.094-.219.25-.406.5-.531.437-.219 1.031 0 1.25.469l.781 1.687c.594 1.25.063 2.75-1.187 3.313l-2.094 1c-.656.312-1.406.406-2.094.218L9 18.908a2.45 2.45 0 0 1-1.656-1.376l-.313-.656a1.26 1.26 0 0 1 0-1.062l.188-.438c.031-.031.062-.094.093-.125l.438.969a.36.36 0 0 0 .438.156c.124-.062.218-.25.124-.406L5.97 11a.76.76 0 0 1 .375-1.031m2 1.312a2 2 0 0 0 .25-.969c0-1.093-.906-2-2-2s-2 .907-2 2c0 .907.593 1.688 1.437 1.938l-.468-.969a1.29 1.29 0 0 1 .593-1.687c.625-.281 1.375 0 1.688.594zM3.594 5c.312 0 .594.281.594.625v12.781a.593.593 0 0 1-.594.594.575.575 0 0 1-.594-.594V5.625C3 5.281 3.25 5 3.594 5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bf0db0fc89acd40ab17b0321b44c848e__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHandGestureTapLeftMdFillIcon);
exports.default = ForwardRef;
