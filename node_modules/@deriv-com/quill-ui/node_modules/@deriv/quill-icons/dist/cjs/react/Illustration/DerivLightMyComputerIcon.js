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
const DerivLightMyComputerIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 49 48', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#A8D0C8', d: 'M32.44 45c-.779 0-1.407-.67-1.407-1.5v-6c0-.83-.628-1.5-1.406-1.5h-11.25c-.778 0-1.406.67-1.406 1.5v6c0 .83-.628 1.5-1.406 1.5-.779 0-1.407.67-1.407 1.5s.628 1.5 1.407 1.5H32.44c.778 0 1.406-.67 1.406-1.5S33.218 45 32.44 45' }),
    React.createElement("path", { fill: '#064E72', d: 'M43.94 0H4.377C2.043 0 .158 2.01.158 4.5v30c0 2.49 1.885 4.5 4.219 4.5H43.94c2.334 0 4.218-2.01 4.218-4.5v-30c0-2.49-1.884-4.5-4.218-4.5' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightMyComputerIcon);
exports.default = ForwardRef;
