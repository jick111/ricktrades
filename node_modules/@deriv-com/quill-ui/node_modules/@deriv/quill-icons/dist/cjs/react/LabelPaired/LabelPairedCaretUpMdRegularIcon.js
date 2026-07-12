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
const LabelPairedCaretUpMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4.813 9.094-3.75 3.531C1 12.688 1 12.719 1 12.781c0 .125.094.219.219.219H8.75c.125 0 .25-.094.25-.219a.17.17 0 0 0-.094-.156l-3.75-3.531A.17.17 0 0 0 5 9q-.14 0-.187.094m-.688-.75C4.344 8.125 4.656 8 5 8c.313 0 .625.125.844.344l3.75 3.562c.25.219.406.563.406.875C10 13.47 9.438 14 8.75 14H1.219A1.2 1.2 0 0 1 0 12.781c0-.312.125-.656.375-.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1f6e5a00c2e4531603bd11b68e00502b__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCaretUpMdRegularIcon);
exports.default = ForwardRef;
