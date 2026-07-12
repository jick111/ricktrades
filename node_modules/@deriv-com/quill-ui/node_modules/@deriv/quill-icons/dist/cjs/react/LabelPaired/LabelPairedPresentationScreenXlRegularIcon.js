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
const LabelPairedPresentationScreenXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 6h25.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 6.75C0 6.375.328 6 .75 6m.75 3H3v10.5c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5V9h1.5v10.5c0 1.688-1.36 3-3 3h-8.25v1.969l4.266 4.265c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L13.5 25.829l-3.984 3.985c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.312-4.265V22.5H4.5c-1.687 0-3-1.312-3-3z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f1192fa0dc6b4ff53404ec1714ab45d1__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenXlRegularIcon);
exports.default = ForwardRef;
