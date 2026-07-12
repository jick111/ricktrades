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
const LabelPairedNineCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 8c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0C5.805 9.547 6.25 8.82 6.25 8c0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C2.172 6.477 1.75 7.203 1.75 8m2.04 3.75C1.82 11.656.25 10.016.25 8A3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8c0 .07-.023.14-.023.188-.024.843-.352 1.64-.891 2.296l-3.399 4.008c-.257.328-.75.352-1.054.094-.328-.258-.352-.75-.094-1.055z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '57b695b951139758c3142808d95d9949__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedNineCaptionFillIcon);
exports.default = ForwardRef;
