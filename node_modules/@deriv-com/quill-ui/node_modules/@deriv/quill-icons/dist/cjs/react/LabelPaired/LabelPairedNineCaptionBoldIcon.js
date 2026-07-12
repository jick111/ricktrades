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
const LabelPairedNineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.375 8A2.62 2.62 0 0 0 4 10.625c.75 0 1.43-.305 1.898-.82l.141-.14A2.67 2.67 0 0 0 6.625 8C6.625 6.57 5.43 5.375 4 5.375A2.636 2.636 0 0 0 1.375 8m2.953 3.75H4A3.73 3.73 0 0 1 .25 8 3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8c0 .984-.375 1.875-.984 2.531l-3.282 4.031c-.187.235-.539.258-.796.07-.235-.187-.258-.538-.07-.796z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e0775a61c27ad1494b0df7b94a8f0e0e__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedNineCaptionBoldIcon);
exports.default = ForwardRef;
