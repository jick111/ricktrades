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
const LabelPairedPercentSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 6.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 2 6.375M2 9a1.78 1.78 0 0 1-1.531-.875c-.301-.52-.301-1.203 0-1.75C.797 5.855 1.37 5.5 2 5.5c.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75A1.77 1.77 0 0 1 2 9m7 4.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875M9 16a1.78 1.78 0 0 1-1.531-.875c-.301-.52-.301-1.203 0-1.75.328-.52.902-.875 1.531-.875.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75A1.77 1.77 0 0 1 9 16m1.613-9.734L.988 15.89a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63l9.625-9.624a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .629' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '66a6648a357397fa06c47d707e2bb989__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentSmRegularIcon);
exports.default = ForwardRef;
