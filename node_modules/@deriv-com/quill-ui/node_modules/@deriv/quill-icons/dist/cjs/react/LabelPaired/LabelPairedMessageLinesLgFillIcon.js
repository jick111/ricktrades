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
const LabelPairedMessageLinesLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 8c0-1.367 1.094-2.5 2.5-2.5h15C18.867 5.5 20 6.633 20 8v11.25c0 1.406-1.133 2.5-2.5 2.5h-5.43l-4.843 3.633c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V21.75H2.5a2.47 2.47 0 0 1-2.5-2.5zm5.938 3.125a.925.925 0 0 0-.938.938c0 .546.39.937.938.937h8.125c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938zm0 3.75a.925.925 0 0 0-.938.938c0 .546.39.937.938.937h4.375c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '133de29eb4cff2da8ca01b1f17c0ea02__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesLgFillIcon);
exports.default = ForwardRef;
