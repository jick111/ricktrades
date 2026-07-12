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
const LabelPairedTrashLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.523 6.203c.196-.43.625-.703 1.094-.703h4.727c.469 0 .898.273 1.094.703l.312.547h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-15C.797 9.25.25 8.703.25 8c0-.664.547-1.25 1.25-1.25h3.75zM16.5 10.5l-.86 13.242c-.038 1.016-.859 1.758-1.874 1.758h-9.57c-1.016 0-1.837-.742-1.876-1.758L1.5 10.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5bc136456a515bd486ac515443a6bdfb__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTrashLgFillIcon);
exports.default = ForwardRef;
