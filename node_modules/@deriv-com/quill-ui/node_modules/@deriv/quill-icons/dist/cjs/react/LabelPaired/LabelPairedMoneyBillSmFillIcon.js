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
const LabelPairedMoneyBillSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 5.5h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75m1.75 8.75c0-.957-.793-1.75-1.75-1.75v1.75zM1.875 9c.957 0 1.75-.766 1.75-1.75h-1.75zm10.5 5.25h1.75V12.5c-.984 0-1.75.793-1.75 1.75M14.125 9V7.25h-1.75c0 .984.766 1.75 1.75 1.75M8 8.125c-.957 0-1.805.52-2.297 1.313a2.65 2.65 0 0 0 0 2.624A2.65 2.65 0 0 0 8 13.376c.93 0 1.777-.492 2.27-1.312a2.64 2.64 0 0 0 0-2.626C9.777 8.646 8.93 8.126 8 8.126' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '418cf7090bb8801bea564346025738c5__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoneyBillSmFillIcon);
exports.default = ForwardRef;
