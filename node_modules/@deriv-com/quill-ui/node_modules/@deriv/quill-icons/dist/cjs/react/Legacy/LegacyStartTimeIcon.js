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
exports.LegacyStartTimeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyStartTimeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#01101f60741774bf5c2580c7eacee015__a)' },
        React.createElement("path", { fill: '#999', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333m0 1.334a3.667 3.667 0 0 1 3.667 3.658c0 1.963-3.397 6.637-3.541 6.835l-.127.173-.125-.173c-.145-.196-3.54-4.876-3.54-6.835a3.667 3.667 0 0 1 3.665-3.658m-.001 1.589c-.919 0-1.663.743-1.663 1.66s.745 1.66 1.663 1.66a1.664 1.664 0 0 0 1.664-1.661c0-.917-.746-1.66-1.664-1.66' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '01101f60741774bf5c2580c7eacee015__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyStartTimeIcon = LegacyStartTimeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyStartTimeIcon);
exports.default = ForwardRef;
