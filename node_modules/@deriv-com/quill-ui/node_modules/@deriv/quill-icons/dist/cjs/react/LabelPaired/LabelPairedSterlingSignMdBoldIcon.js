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
const LabelPairedSterlingSignMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 9v2h4.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3v2c0 .781-.219 1.563-.594 2.281L2 17.5h7.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75c-.281 0-.531-.125-.656-.344-.125-.25-.156-.531-.031-.75l1.03-1.843c.25-.5.407-1.032.407-1.563v-2H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.75V9c0-2.219 1.781-4 3.969-4 .406 0 .843.094 1.25.219l2.5.843c.406.125.625.532.469.938-.126.406-.532.594-.938.469l-2.5-.813a2.3 2.3 0 0 0-.781-.156C4.094 6.5 3 7.625 3 9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '471e2f8c857dacde551c8df37df55b40__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignMdBoldIcon);
exports.default = ForwardRef;
