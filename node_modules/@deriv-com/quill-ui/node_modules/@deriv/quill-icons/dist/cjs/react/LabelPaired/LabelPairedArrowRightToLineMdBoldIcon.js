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
const LabelPairedArrowRightToLineMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14 6.75v10.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V6.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m-4.25 5.813-4.25 4a.774.774 0 0 1-1.062-.032c-.282-.312-.282-.781.03-1.062l2.876-2.719H.75A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h6.594L4.469 8.563c-.313-.282-.313-.75-.032-1.063s.75-.312 1.063-.031l4.25 4c.156.156.25.344.25.531a.78.78 0 0 1-.25.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'af97d7538ef8bb8b48a2675e539f283e__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineMdBoldIcon);
exports.default = ForwardRef;
