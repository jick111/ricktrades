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
const LabelPairedGrid2XlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 9c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5C9 9.375 8.625 9 8.25 9zm-2.25.75A2.25 2.25 0 0 1 3.75 7.5h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zM3.75 21c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zM20.25 9h-4.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75m-4.5-1.5h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m0 13.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b4cf28dbe03fe3adb84c92096711d969__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2XlRegularIcon);
exports.default = ForwardRef;
