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
exports.StandalonePercentFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePercentFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm23.11 11.148-12.5 12.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l12.5-12.5a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757m-9.61.352c0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 8.5 11.5c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148m10 10c0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 18.5 21.5c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148' })));
exports.StandalonePercentFillIcon = StandalonePercentFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePercentFillIcon);
exports.default = ForwardRef;
