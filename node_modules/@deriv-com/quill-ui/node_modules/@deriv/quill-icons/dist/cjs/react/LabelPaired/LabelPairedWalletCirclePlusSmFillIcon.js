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
const LabelPairedWalletCirclePlusSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 6.375c0-.957.766-1.75 1.75-1.75h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H2.438A.45.45 0 0 0 2 6.813c0 .246.191.437.438.437H12.5c.957 0 1.75.793 1.75 1.75v.027c-.164 0-.3-.027-.437-.027A4.8 4.8 0 0 0 9 13.813c0 1.175.41 2.242 1.094 3.062H2c-.984 0-1.75-.766-1.75-1.75zm9.625 7.438c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m1.75 0c0 .246.191.437.438.437h1.312v1.313c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437V14.25h1.313a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H14.25v-1.312a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v1.312h-1.312a.45.45 0 0 0-.438.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3d6a2acb7f2eecf944d179111a9fbd73__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCirclePlusSmFillIcon);
exports.default = ForwardRef;
