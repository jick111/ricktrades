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
const LabelPairedPageCircleArrowRightSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.125 5.5c0-.957.766-1.75 1.75-1.75h4.95c.464 0 .902.191 1.23.52l2.05 2.05c.329.328.52.766.52 1.23v1.641a4.1 4.1 0 0 0-1.312.602V7.551a.44.44 0 0 0-.137-.301L7.125 5.2a.44.44 0 0 0-.3-.138h-4.95a.45.45 0 0 0-.437.438V16c0 .246.19.438.437.438h6.016q.492.779 1.23 1.312H1.875c-.984 0-1.75-.766-1.75-1.75zM8 13.813c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937A3.92 3.92 0 0 1 8 13.813m1.75 0c0 .246.191.437.438.437h2.433l-.793.793a.463.463 0 0 0 0 .629.463.463 0 0 0 .629 0l1.531-1.531a.463.463 0 0 0 0-.63l-1.531-1.53a.463.463 0 0 0-.629 0 .463.463 0 0 0 0 .628l.793.766h-2.434a.45.45 0 0 0-.437.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '823f47e907044d656755a12ed0bbd5ea__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPageCircleArrowRightSmBoldIcon);
exports.default = ForwardRef;
