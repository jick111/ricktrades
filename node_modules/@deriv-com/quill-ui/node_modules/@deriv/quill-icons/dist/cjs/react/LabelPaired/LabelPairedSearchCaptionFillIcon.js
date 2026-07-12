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
const LabelPairedSearchCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.75 8.375a4.87 4.87 0 0 1-.937 2.883l2.953 2.976a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-2.977-2.976c-.796.609-1.804.937-2.859.937A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875M4.875 11.75a3.35 3.35 0 0 0 2.906-1.687c.61-1.032.61-2.32 0-3.376C7.171 5.658 6.071 5 4.875 5c-1.219 0-2.32.656-2.93 1.688a3.34 3.34 0 0 0 0 3.375 3.36 3.36 0 0 0 2.93 1.687' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '29dcf6ce4c0e141232f8847fe05494e7__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSearchCaptionFillIcon);
exports.default = ForwardRef;
