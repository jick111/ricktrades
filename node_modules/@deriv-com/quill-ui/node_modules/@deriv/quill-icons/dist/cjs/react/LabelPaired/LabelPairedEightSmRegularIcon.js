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
const LabelPairedEightSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.438 7.906a3.3 3.3 0 0 1-1.45 2.735c1.094.52 1.887 1.64 1.887 2.953a3.273 3.273 0 0 1-3.281 3.281H3.406a3.256 3.256 0 0 1-3.281-3.281c0-1.313.766-2.434 1.86-2.953A3.27 3.27 0 0 1 .562 7.906a3.273 3.273 0 0 1 3.28-3.281h1.313a3.29 3.29 0 0 1 3.282 3.281m-3.282 3.282h-1.75A2.41 2.41 0 0 0 1 13.594 2.39 2.39 0 0 0 3.406 16h2.188A2.41 2.41 0 0 0 8 13.594a2.43 2.43 0 0 0-2.406-2.406zm0-.876a2.41 2.41 0 0 0 2.407-2.406A2.43 2.43 0 0 0 5.156 5.5H3.844a2.41 2.41 0 0 0-2.406 2.406 2.387 2.387 0 0 0 2.378 2.407h1.34' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd71376f5a46019f0c6a83f3c7f926328__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightSmRegularIcon);
exports.default = ForwardRef;
