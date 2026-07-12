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
const LabelPairedComputerMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 7H2v7h10zM2 5h10c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H8.313l.343 1H11c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2.313l.343-1H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m14.5 0h2c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a1.48 1.48 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 16.5 5m.5 2c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm-.5 2.5c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5m1 5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3eebac2993ea4a48cffe70097e7d3eaf__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMdFillIcon);
exports.default = ForwardRef;
