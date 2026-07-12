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
const LabelPairedMemoCircleCheckMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v4.219C9.688 10.875 8 13 8 15.5c0 1.875.906 3.5 2.281 4.5H2c-1.125 0-2-.875-2-2zm2 2.5c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5m.5 2.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm0 3c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zM9 15.5c0-1.594.844-3.062 2.25-3.875a4.46 4.46 0 0 1 4.5 0c1.375.813 2.25 2.281 2.25 3.875a4.54 4.54 0 0 1-2.25 3.906 4.46 4.46 0 0 1-4.5 0A4.47 4.47 0 0 1 9 15.5m5.875-1.344L13 16.062l-.906-.906a.53.53 0 0 0-.719 0 .53.53 0 0 0 0 .719l1.25 1.25a.53.53 0 0 0 .719 0l2.25-2.25a.53.53 0 0 0 0-.719.53.53 0 0 0-.719 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2205e7775dffddf933c7fa5c0ec0582b__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoCircleCheckMdFillIcon);
exports.default = ForwardRef;
