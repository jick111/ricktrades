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
const LabelPairedPresentationScreenSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 3.75h14a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875v6.125c0 .984-.793 1.75-1.75 1.75H8.875v.957l1.914 1.941a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L8 15.946l-1.586 1.559a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.941-1.942v-.957H2.75c-.984 0-1.75-.766-1.75-1.75V5.5a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875M2.75 5.5v6.125h10.5V5.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0b621130c780b0e9e0fc3a8efc772cfd__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenSmFillIcon);
exports.default = ForwardRef;
