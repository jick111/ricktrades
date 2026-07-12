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
const LabelPairedPenCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.258 4.438 7.992 5.727l1.781 1.78 1.29-1.265c.21-.234.21-.586 0-.797l-1.008-1.008c-.211-.21-.563-.21-.797 0M7.453 6.242l-5.508 5.531a1.4 1.4 0 0 0-.398.633l-.633 2.18 2.18-.656c.234-.07.469-.188.633-.375l5.53-5.508zm3.14-2.344 1.009 1.008a1.345 1.345 0 0 1 0 1.852l-7.336 7.336c-.282.258-.61.469-.961.562L.469 15.5c-.14.023-.281 0-.375-.094s-.117-.234-.094-.375l.844-2.836c.094-.351.304-.68.562-.96l7.336-7.337a1.346 1.346 0 0 1 1.852 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ab8159d66844c5ab6a533fb1bfd3ac18__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenCaptionRegularIcon);
exports.default = ForwardRef;
