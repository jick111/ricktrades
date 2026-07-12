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
const LabelPairedAppleCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.453 9.805c0 .047-.07 1.43 1.453 2.156-.281.867-1.265 2.789-2.414 2.789-.656 0-1.031-.422-1.781-.422-.774 0-1.195.422-1.781.422-1.125.047-2.203-2.062-2.508-2.93a5.6 5.6 0 0 1-.328-1.898c0-2.086 1.383-3.094 2.695-3.117.633 0 1.43.445 1.781.445.328 0 1.242-.54 2.086-.469.867.07 1.524.399 1.969 1.032-.773.492-1.172 1.125-1.172 1.992M6.141 5.96c-.47.539-1.032.844-1.641.797-.047-.633.188-1.219.61-1.688.374-.422 1.03-.773 1.593-.82 0 .258.07.96-.562 1.71' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8e1ffabe96259f4120fc24eb7c89a260__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAppleCaptionIcon);
exports.default = ForwardRef;
