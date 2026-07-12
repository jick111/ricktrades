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
exports.LegacyDownloadIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyDownloadIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M5.5 16a.5.5 0 0 1 .5.5V18h12v-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5zM5 17H3v4h18v-4h-2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5zm8.5-15a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 .4.8l-4.5 6a.5.5 0 0 1-.8 0l-4.5-6a.5.5 0 0 1 .4-.8H10V2.5a.5.5 0 0 1 .5-.5zM13 3h-2v7.5a.5.5 0 0 1-.5.5h-2l3.5 4.667L15.5 11h-2a.5.5 0 0 1-.5-.5z' })));
exports.LegacyDownloadIcon = LegacyDownloadIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyDownloadIcon);
exports.default = ForwardRef;
