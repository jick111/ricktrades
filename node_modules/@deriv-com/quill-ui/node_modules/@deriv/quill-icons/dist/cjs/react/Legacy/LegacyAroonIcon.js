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
exports.LegacyAroonIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyAroonIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'm12.752 8.654 3.168 2.376a1 1 0 0 0 1.45-.273l4.48-7.23a1 1 0 1 0-1.7-1.054l-3.904 6.301L13.12 6.43a1 1 0 0 0-1.423.231l-9.52 13.77a1 1 0 0 0 1.646 1.138z' }),
    React.createElement("path", { fill: '#FF444F', d: 'm5.845 7.57 9.323 13.985a1 1 0 0 0 1.54.152l5-5a1 1 0 0 0-1.415-1.414l-4.138 4.137L6.832 5.445a1 1 0 0 0-1.54-.152l-3 3a1 1 0 0 0 1.415 1.414z' })));
exports.LegacyAroonIcon = LegacyAroonIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyAroonIcon);
exports.default = ForwardRef;
