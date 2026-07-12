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
exports.StandaloneFiveBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFiveBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11 8.531a.964.964 0 0 1 .938-.781h8.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-7.344l-.938 5.313h5.313c2.812 0 5.156 2.343 5.156 5.156 0 2.851-2.344 5.156-5.156 5.156h-3.75c-1.406 0-2.735-.781-3.36-2.07l-.156-.313a.925.925 0 0 1 .43-1.25.925.925 0 0 1 1.25.43l.156.312c.313.625.977 1.016 1.68 1.016h3.75a3.276 3.276 0 0 0 3.281-3.281 3.3 3.3 0 0 0-3.281-3.282h-6.407a1 1 0 0 1-.742-.312 1.12 1.12 0 0 1-.195-.781z' })));
exports.StandaloneFiveBoldIcon = StandaloneFiveBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFiveBoldIcon);
exports.default = ForwardRef;
