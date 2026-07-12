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
exports.StandaloneBackwardRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBackwardRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.445 16.5 16 22.71V10.329zM16.078 9c.625 0 1.172.547 1.172 1.172v4.062l6.875-5A1.1 1.1 0 0 1 24.828 9C25.453 9 26 9.547 26 10.172v12.656c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195l-6.875-5v4.023c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195L6.352 17.28A.98.98 0 0 1 6 16.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 16.078 9m1.172 8.281 7.5 5.43V10.328l-7.5 5.43z' })));
exports.StandaloneBackwardRegularIcon = StandaloneBackwardRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBackwardRegularIcon);
exports.default = ForwardRef;
