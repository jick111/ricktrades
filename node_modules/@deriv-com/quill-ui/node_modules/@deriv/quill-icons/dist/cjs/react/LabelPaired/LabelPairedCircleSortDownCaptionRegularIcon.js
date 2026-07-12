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
const LabelPairedCircleSortDownCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0a5.228 5.228 0 0 0 0-9.07 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5M12 9.5a6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18m-6.281 3.656-2.25-2.25c-.094-.117-.14-.281-.07-.422a.36.36 0 0 1 .351-.234h4.5c.14 0 .281.094.328.234.07.141.024.305-.07.422l-2.25 2.25a.397.397 0 0 1-.54 0M4.64 11 6 12.36 7.336 11zM3.469 8.117l2.25-2.25c.14-.14.398-.14.539 0l2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 6.663 4.008 8.656a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4e528a73c4ba8bc27dbf9047891a3aee__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleSortDownCaptionRegularIcon);
exports.default = ForwardRef;
