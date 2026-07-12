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
const LabelPairedRightFromBracketXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16.5 12.89v2.485a1.11 1.11 0 0 1-1.125 1.125H9.75v3h5.625c.61 0 1.125.516 1.125 1.125v2.531L21.656 18zM24 18c0 .563-.234 1.078-.61 1.453l-5.437 5.438c-.422.422-.984.609-1.547.609a2.12 2.12 0 0 1-2.156-2.156V21.75h-4.5A2.22 2.22 0 0 1 7.5 19.5v-3a2.25 2.25 0 0 1 2.25-2.25h4.5v-1.547c0-1.219.938-2.203 2.156-2.203.563 0 1.125.234 1.547.656l5.438 5.438c.375.375.609.89.609 1.406M7.875 9.75h-3.75a1.85 1.85 0 0 0-1.875 1.875v12.75c0 1.078.797 1.875 1.875 1.875h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.875 28.5h-3.75A4.1 4.1 0 0 1 0 24.375v-12.75A4.13 4.13 0 0 1 4.125 7.5h3.75C8.485 7.5 9 8.016 9 8.625A1.11 1.11 0 0 1 7.875 9.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1b8d6afee0a194d3651e9e52c6175deb__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightFromBracketXlBoldIcon);
exports.default = ForwardRef;
