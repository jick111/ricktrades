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
const LabelPairedUserCheckXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.5 7.5c-1.64 0-3.094.89-3.937 2.25-.797 1.406-.797 3.14 0 4.5.843 1.406 2.296 2.25 3.937 2.25 1.594 0 3.047-.844 3.89-2.25.797-1.36.797-3.094 0-4.5-.843-1.36-2.296-2.25-3.89-2.25m0 10.5a5.97 5.97 0 0 1-5.203-3c-1.078-1.828-1.078-4.125 0-6C6.375 7.172 8.344 6 10.5 6c2.11 0 4.078 1.172 5.156 3 1.078 1.875 1.078 4.172 0 6a5.95 5.95 0 0 1-5.156 3m-2.156 3.75c-3.75 0-6.797 3.047-6.844 6.75h18c-.094-3.703-3.14-6.75-6.89-6.75zm0-1.5h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64c0-4.64 3.703-8.39 8.344-8.39m21.422-5.437-6 6c-.282.28-.797.28-1.078 0l-3-3c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0l2.484 2.485 5.438-5.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7061f55338eee650ff521dc72b44d845__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserCheckXlRegularIcon);
exports.default = ForwardRef;
