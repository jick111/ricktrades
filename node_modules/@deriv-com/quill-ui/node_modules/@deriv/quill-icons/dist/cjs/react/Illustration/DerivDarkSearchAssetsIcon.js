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
const DerivDarkSearchAssetsIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 96 96', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', d: 'M76 80V16a8 8 0 0 0-8-8H20a8 8 0 0 0-8 8v52l10 10 10 10h36a8 8 0 0 0 8-8' }),
    React.createElement("path", { fill: '#6E6E6E', d: 'M62 18H26a2 2 0 1 0 0 4h36a2 2 0 1 0 0-4M62 26H26a2 2 0 1 0 0 4h36a2 2 0 1 0 0-4M42 34H26a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4M32 76v12L12 68h12a8 8 0 0 1 8 8' }),
    React.createElement("path", { fill: '#6E6E6E', fillRule: 'evenodd', d: 'M68.972 70.955h2.224l11.938 11.987a2.97 2.97 0 0 1 0 4.193 2.975 2.975 0 0 1-4.195 0l-11.966-11.96v-2.222l-.76-.788a18.31 18.31 0 0 1-15.035 4.164C43.35 75.007 37.1 68.48 36.143 60.6c-1.465-11.902 8.559-21.92 20.469-20.456 7.883.956 14.415 7.203 15.739 15.026.957 5.712-.789 11.087-4.167 15.026zm-27.34-12.663c0 7.007 5.66 12.663 12.67 12.663 7.012 0 12.67-5.656 12.67-12.663S61.315 45.63 54.303 45.63c-7.01 0-12.67 5.655-12.67 12.662', clipRule: 'evenodd' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkSearchAssetsIcon);
exports.default = ForwardRef;
