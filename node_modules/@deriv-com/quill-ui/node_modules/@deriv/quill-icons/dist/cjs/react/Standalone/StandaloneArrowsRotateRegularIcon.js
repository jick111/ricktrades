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
exports.StandaloneArrowsRotateRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowsRotateRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.695 14.742a.66.66 0 0 1-.625.508c-.39 0-.703-.312-.625-.703C8.344 10.68 11.82 7.75 16 7.75c3.164 0 5.938 1.719 7.5 4.258V9.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.11a7.502 7.502 0 0 0-13.79 1.992m14.57 3.555c.079-.313.352-.547.665-.547.351 0 .664.352.586.742C23.617 22.36 20.14 25.25 16 25.25a8.7 8.7 0 0 1-7.5-4.219v2.344a.617.617 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625h3.75c.352 0 .625.313.625.625a.617.617 0 0 1-.625.625H9.477C10.766 22.516 13.187 24 16 24c3.516 0 6.484-2.422 7.266-5.703' })));
exports.StandaloneArrowsRotateRegularIcon = StandaloneArrowsRotateRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowsRotateRegularIcon);
exports.default = ForwardRef;
