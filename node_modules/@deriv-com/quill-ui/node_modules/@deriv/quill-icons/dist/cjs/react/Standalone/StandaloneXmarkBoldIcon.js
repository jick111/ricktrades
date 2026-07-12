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
exports.StandaloneXmarkBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneXmarkBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm21.977 11.852-4.688 4.687 4.648 4.648c.391.352.391.938 0 1.29a.856.856 0 0 1-1.289 0l-4.687-4.649-4.648 4.649a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l4.649-4.648-4.649-4.648c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0L16 15.211l4.648-4.648c.352-.391.938-.391 1.329 0a.92.92 0 0 1 0 1.289' })));
exports.StandaloneXmarkBoldIcon = StandaloneXmarkBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneXmarkBoldIcon);
exports.default = ForwardRef;
