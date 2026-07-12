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
const LabelPairedQuestionSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 8.125c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656c0-1.914 1.56-3.5 3.473-3.473h.875a3.49 3.49 0 0 1 3.5 3.5v.11a3.3 3.3 0 0 1-1.45 2.734l-1.42.957a.86.86 0 0 0-.384.711v.055c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.055c0-.71.355-1.394.957-1.805l1.422-.957c.574-.355.902-.984.902-1.64v-.137a2.194 2.194 0 0 0-2.187-2.187h-.875c-1.231 0-2.188.984-2.188 2.187m2.625 8.75A.864.864 0 0 1 3.625 16c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8eaf5f7e78db81250d21b1b4a997f9a0__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQuestionSmBoldIcon);
exports.default = ForwardRef;
