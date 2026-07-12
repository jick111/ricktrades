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
exports.StandaloneArrowUpAZBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpAZBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21 7.75c.352 0 .664.234.82.547l3.125 6.25a.925.925 0 0 1-.43 1.25c-.43.234-1.015.039-1.25-.43l-.507-1.055c-.078 0-.156.04-.195.04h-3.36l-.508 1.015a.925.925 0 0 1-1.25.43.925.925 0 0 1-.43-1.25l3.126-6.25A.96.96 0 0 1 21 7.75m-.86 4.688h1.68L21 10.797zm-9.804-4.415a.92.92 0 0 1 1.289 0l3.75 3.75c.39.391.39.977 0 1.329a.856.856 0 0 1-1.29 0l-2.148-2.149v13.36c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937v-13.36l-2.149 2.149c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.29l3.75-3.75zM18.5 17.75h5c.352 0 .703.234.82.586a.84.84 0 0 1-.156.977l-3.594 4.062h2.93a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-5c-.39 0-.703-.195-.86-.547-.156-.312-.117-.703.157-1.015l3.594-4.063H18.5c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938' })));
exports.StandaloneArrowUpAZBoldIcon = StandaloneArrowUpAZBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpAZBoldIcon);
exports.default = ForwardRef;
