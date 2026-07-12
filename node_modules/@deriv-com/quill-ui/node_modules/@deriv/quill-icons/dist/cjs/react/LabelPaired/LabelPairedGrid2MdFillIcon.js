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
const LabelPairedGrid2MdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 6.5v3A1.5 1.5 0 0 1 5.5 11h-3A1.48 1.48 0 0 1 1 9.5v-3A1.5 1.5 0 0 1 2.5 5h3C6.313 5 7 5.688 7 6.5m0 8v3A1.5 1.5 0 0 1 5.5 19h-3A1.48 1.48 0 0 1 1 17.5v-3A1.5 1.5 0 0 1 2.5 13h3c.813 0 1.5.688 1.5 1.5m2-8A1.5 1.5 0 0 1 10.5 5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 9.5zm6 8v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 17.5v-3a1.5 1.5 0 0 1 1.5-1.5h3c.813 0 1.5.688 1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'abdd9e0d2cf359c421f479ad3c77b42a__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2MdFillIcon);
exports.default = ForwardRef;
