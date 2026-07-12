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
exports.StandaloneChevronsRightBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChevronsRightBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.164 15.836c.352.39.352.976 0 1.328l-7.5 7.5c-.39.39-.977.39-1.328 0a.856.856 0 0 1 0-1.289l6.836-6.836-6.836-6.875a.856.856 0 0 1 0-1.289.856.856 0 0 1 1.289 0zm-15-7.5 7.5 7.5c.352.39.352.976 0 1.328l-7.5 7.5c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.289l6.836-6.836-6.836-6.875a.855.855 0 0 1 0-1.289.855.855 0 0 1 1.289 0z' })));
exports.StandaloneChevronsRightBoldIcon = StandaloneChevronsRightBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChevronsRightBoldIcon);
exports.default = ForwardRef;
