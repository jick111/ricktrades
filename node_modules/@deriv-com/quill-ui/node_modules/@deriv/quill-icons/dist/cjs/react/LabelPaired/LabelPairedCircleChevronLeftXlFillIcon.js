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
const LabelPairedCircleChevronLeftXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M24 18c0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36m-11.297-5.672L7.828 17.25a1.027 1.027 0 0 0 0 1.547l4.875 4.875a1.027 1.027 0 0 0 1.547 0c.469-.422.469-1.125 0-1.594L10.172 18l4.078-4.078c.469-.422.469-1.125 0-1.594a1.103 1.103 0 0 0-1.547 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8258692863f891b70317f45305fe69f1__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleChevronLeftXlFillIcon);
exports.default = ForwardRef;
