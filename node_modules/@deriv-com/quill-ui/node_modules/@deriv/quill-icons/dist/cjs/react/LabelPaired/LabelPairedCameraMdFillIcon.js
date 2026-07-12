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
const LabelPairedCameraMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.656 6.031A1.48 1.48 0 0 1 6.063 5h3.843c.656 0 1.219.438 1.406 1.031l.344.969H14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2h2.313zM8 10c-1.094 0-2.062.594-2.625 1.5-.531.938-.531 2.094 0 3A3.03 3.03 0 0 0 8 16c1.063 0 2.031-.562 2.594-1.5.531-.906.531-2.062 0-3C10.03 10.594 9.063 10 8 10' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '49d1be41b2d4dd21d0725fcb5fa17cec__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCameraMdFillIcon);
exports.default = ForwardRef;
