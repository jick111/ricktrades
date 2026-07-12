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
const LabelPairedArrowDownToBracketMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm11.688 10.719-4 4a.964.964 0 0 1-1.407 0l-4-4a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.406 0L6 11.593V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v6.594l2.281-2.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406M2 15v2c0 .563.438 1 1 1h8c.531 0 1-.437 1-1v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2b4152f26719972db1366b72c6efefc2__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketMdFillIcon);
exports.default = ForwardRef;
