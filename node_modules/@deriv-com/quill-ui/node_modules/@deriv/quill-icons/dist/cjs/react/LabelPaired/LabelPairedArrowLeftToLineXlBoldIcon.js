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
const LabelPairedArrowLeftToLineXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 25.875v-15.75C0 9.515.469 9 1.125 9c.61 0 1.125.516 1.125 1.125v15.75A1.11 1.11 0 0 1 1.125 27C.469 27 0 26.531 0 25.875m6.328-8.672 6.375-6c.469-.422 1.172-.422 1.594.047s.422 1.172-.047 1.594l-4.312 4.031h9.937c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H9.938l4.312 4.078c.469.422.469 1.125.047 1.594s-1.125.469-1.594.047l-6.375-6C6.094 18.609 6 18.328 6 18c0-.281.094-.61.328-.797' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '800647688f37e2cfa1f715f58922a155__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowLeftToLineXlBoldIcon);
exports.default = ForwardRef;
