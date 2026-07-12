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
const LabelPairedBellMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.594c0 1.469.531 2.906 1.5 4l.219.25c.281.312.344.719.187 1.094-.156.343-.531.562-.906.562H1c-.406 0-.781-.219-.937-.562a1.01 1.01 0 0 1 .187-1.094l.219-.25a6.08 6.08 0 0 0 1.531-4V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m1.406 15.438A1.96 1.96 0 0 1 7 20c-.531 0-1.062-.187-1.437-.562S5 18.53 5 18h4c0 .531-.219 1.063-.594 1.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '54808168e582f9dd77dbbde416fe2589__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellMdFillIcon);
exports.default = ForwardRef;
