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
const LabelPairedCircleXmarkSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M4.922 8.7a.463.463 0 0 1 .629 0L7 10.147 8.422 8.7a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63L7.6 10.75l1.45 1.45a.463.463 0 0 1 0 .628.463.463 0 0 1-.63 0L7 11.378l-1.45 1.45a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l1.45-1.449-1.45-1.422a.463.463 0 0 1 0-.629' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2f0e448c6375329eff4a930250605a07__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleXmarkSmRegularIcon);
exports.default = ForwardRef;
