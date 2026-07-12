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
const LabelPairedTwoXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.656 10.5c-.984 0-1.968.422-2.672 1.125l-1.453 1.453c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l1.454-1.452C3.141 8.25 4.875 7.5 6.656 7.5a6.82 6.82 0 0 1 6.844 6.844c0 1.781-.75 3.515-2.016 4.781L5.11 25.5H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12c-.61 0-1.172-.328-1.406-.89a1.52 1.52 0 0 1 .328-1.641l8.953-8.953c.703-.703 1.125-1.688 1.125-2.672A3.86 3.86 0 0 0 6.656 10.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f9ed0281b80a983a2606d6813a89d75d__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoXlFillIcon);
exports.default = ForwardRef;
