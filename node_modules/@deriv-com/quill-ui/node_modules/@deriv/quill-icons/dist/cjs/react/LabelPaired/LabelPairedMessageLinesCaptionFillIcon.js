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
const LabelPairedMessageLinesCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v6.75c0 .844-.68 1.5-1.5 1.5H7.242l-2.906 2.18c-.117.093-.258.093-.399.047a.39.39 0 0 1-.187-.352V13.25H1.5a1.48 1.48 0 0 1-1.5-1.5zm3.563 1.875A.555.555 0 0 0 3 7.438c0 .328.234.562.563.562h4.874A.555.555 0 0 0 9 7.438a.57.57 0 0 0-.562-.563zm0 2.25A.555.555 0 0 0 3 9.688c0 .328.234.562.563.562h2.625a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8ff77627b19411c5ebf2964a495e52a5__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesCaptionFillIcon);
exports.default = ForwardRef;
