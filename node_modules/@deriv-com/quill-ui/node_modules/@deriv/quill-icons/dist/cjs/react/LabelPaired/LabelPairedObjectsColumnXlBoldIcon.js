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
const LabelPairedObjectsColumnXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 9.75v7.5h4.5v-7.5zM0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 17.25zm14.25 9v7.5h4.5v-7.5zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 26.25zm-5.25 4.5h-4.5v3h4.5zM2.25 21h4.5C7.969 21 9 22.031 9 23.25v3a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-3A2.25 2.25 0 0 1 2.25 21m12-11.25v3h4.5v-3zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v3A2.25 2.25 0 0 1 18.75 15h-4.5A2.22 2.22 0 0 1 12 12.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '74fcd33c786186d2da50c352ea4afe2b__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnXlBoldIcon);
exports.default = ForwardRef;
