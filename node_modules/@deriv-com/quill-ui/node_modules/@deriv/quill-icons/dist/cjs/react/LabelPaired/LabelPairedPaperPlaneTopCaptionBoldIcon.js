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
const LabelPairedPaperPlaneTopCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 18, viewBox: '0 0 13 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.617 8.938h5.86L2.023 5.75zm0 1.124-1.594 3.211 7.454-3.21zM1.531 4.32l10.5 4.5a.77.77 0 0 1 .469.703.76.76 0 0 1-.469.68l-10.5 4.5a.76.76 0 0 1-.843-.187c-.211-.211-.258-.563-.118-.844L2.656 9.5.57 5.352a.79.79 0 0 1 .118-.868.8.8 0 0 1 .843-.164' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '364cf3623c794b8abce14171a2619cb2__a' },
            React.createElement("path", { d: 'M0 0h13v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopCaptionBoldIcon);
exports.default = ForwardRef;
