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
const LabelPairedArrowDownToBracketXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.531 16.078-6 6c-.562.61-1.547.61-2.11 0l-6-6a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L9 17.392V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v9.89l3.422-3.421a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11M3 22.5v3c0 .844.656 1.5 1.5 1.5h12c.797 0 1.5-.656 1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v3c0 2.484-2.016 4.5-4.5 4.5h-12A4.5 4.5 0 0 1 0 25.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd58383d249fb64b006c67175befee914__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketXlFillIcon);
exports.default = ForwardRef;
