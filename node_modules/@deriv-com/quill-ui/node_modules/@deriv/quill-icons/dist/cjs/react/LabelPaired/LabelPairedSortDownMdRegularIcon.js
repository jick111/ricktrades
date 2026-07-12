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
const LabelPairedSortDownMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.813 17.938C4.843 18 4.906 18 5 18c.063 0 .125 0 .156-.062l3.75-3.532c.063-.062.094-.094.094-.156a.27.27 0 0 0-.25-.25H1.219c-.125 0-.219.125-.219.25 0 .063 0 .094.063.156zm-.688.75-3.75-3.563C.125 14.906 0 14.563 0 14.25 0 13.563.531 13 1.219 13H8.75c.688 0 1.25.563 1.25 1.25 0 .313-.156.656-.406.875l-3.75 3.563C5.625 18.906 5.312 19 5 19c-.344 0-.656-.094-.875-.312' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cd89e921f98eab2dd8cd943c180a49d8__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortDownMdRegularIcon);
exports.default = ForwardRef;
