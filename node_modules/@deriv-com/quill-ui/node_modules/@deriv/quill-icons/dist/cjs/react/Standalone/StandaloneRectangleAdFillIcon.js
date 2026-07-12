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
exports.StandaloneRectangleAdFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRectangleAdFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 7.75h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H7.25a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5m6.445 5.547a.88.88 0 0 0-.82-.547.96.96 0 0 0-.86.547l-2.812 5.625a.925.925 0 0 0 .43 1.25.925.925 0 0 0 1.25-.43l.195-.43h3.555l.195.43c.235.469.82.664 1.25.43a.925.925 0 0 0 .43-1.25zm-.82 2.5.82 1.64h-1.68zm7.188.703a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938M21 14.82a2.7 2.7 0 0 0-.937-.195 2.826 2.826 0 0 0-2.813 2.813 2.8 2.8 0 0 0 2.813 2.812c.43 0 .82-.078 1.21-.273.157.195.391.273.665.273.507 0 .937-.39.937-.937v-5.625a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938z' })));
exports.StandaloneRectangleAdFillIcon = StandaloneRectangleAdFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRectangleAdFillIcon);
exports.default = ForwardRef;
