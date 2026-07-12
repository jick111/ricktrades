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
exports.StandaloneCopyRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCopyRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.25 20.25c.664 0 1.25-.547 1.25-1.25v-7.969a.63.63 0 0 0-.195-.43l-2.657-2.656a.63.63 0 0 0-.43-.195H16c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25zm1.914-10.547c.352.352.586.86.586 1.328V19c0 1.406-1.133 2.5-2.5 2.5H16a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h4.219c.468 0 .976.234 1.328.586zM9.75 11.5h2.5v1.25h-2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25H16c.664 0 1.25-.547 1.25-1.25v-1.25h1.25V24c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5' })));
exports.StandaloneCopyRegularIcon = StandaloneCopyRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCopyRegularIcon);
exports.default = ForwardRef;
