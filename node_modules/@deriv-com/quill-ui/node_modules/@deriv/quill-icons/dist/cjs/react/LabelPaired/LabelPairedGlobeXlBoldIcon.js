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
const LabelPairedGlobeXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 27.75c.328 0 1.266-.328 2.203-2.25.422-.844.797-1.828 1.031-3H8.72c.281 1.172.61 2.156 1.031 3 .984 1.922 1.875 2.25 2.25 2.25m-3.656-7.5h7.265q.141-1.054.141-2.25 0-1.125-.14-2.25H8.343c-.094.75-.094 1.5-.094 2.25 0 .797 0 1.547.094 2.25m.375-6.75h6.515a12 12 0 0 0-1.03-2.953C13.265 8.625 12.327 8.25 12 8.25c-.375 0-1.266.375-2.25 2.297-.422.844-.75 1.828-1.031 2.953m9.14 2.25c.094.75.094 1.5.094 2.25 0 .797 0 1.547-.094 2.25h3.61A8.7 8.7 0 0 0 21.75 18q0-1.125-.281-2.25zm2.766-2.25a9.64 9.64 0 0 0-4.594-4.36c.657 1.22 1.172 2.72 1.5 4.36zm-14.203 0c.328-1.64.844-3.14 1.5-4.36a9.64 9.64 0 0 0-4.594 4.36zm-3.938 2.25c-.14.75-.234 1.5-.234 2.25 0 .797.047 1.547.234 2.25h3.61C6 19.547 6 18.797 6 18c0-.75 0-1.5.094-2.25zm13.547 11.156a9.53 9.53 0 0 0 4.594-4.406h-3.094c-.328 1.688-.843 3.188-1.5 4.406m-8.11 0c-.655-1.218-1.171-2.718-1.5-4.406H3.329a9.53 9.53 0 0 0 4.594 4.406M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6e4e142534cc23002316808ccea5f440__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGlobeXlBoldIcon);
exports.default = ForwardRef;
