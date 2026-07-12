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
exports.StandalonePresentationScreenRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePresentationScreenRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M5.375 6.5h21.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H5.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M6 9h1.25v8.75c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25V9H26v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.875v1.64l3.555 3.555a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L16 23.024l-3.32 3.32a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.594-3.554V20.25H8.5a2.47 2.47 0 0 1-2.5-2.5z' })));
exports.StandalonePresentationScreenRegularIcon = StandalonePresentationScreenRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePresentationScreenRegularIcon);
exports.default = ForwardRef;
