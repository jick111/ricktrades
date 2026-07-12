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
exports.StandalonePresentationScreenFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePresentationScreenFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 6.5h20c.664 0 1.25.586 1.25 1.25C27.25 8.453 26.664 9 26 9v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.25v1.367l2.734 2.774c.508.468.508 1.289 0 1.757a1.205 1.205 0 0 1-1.757 0L16 23.922l-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l2.773-2.774V20.25H8.5a2.47 2.47 0 0 1-2.5-2.5V9c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M8.5 9v8.75h15V9z' })));
exports.StandalonePresentationScreenFillIcon = StandalonePresentationScreenFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePresentationScreenFillIcon);
exports.default = ForwardRef;
