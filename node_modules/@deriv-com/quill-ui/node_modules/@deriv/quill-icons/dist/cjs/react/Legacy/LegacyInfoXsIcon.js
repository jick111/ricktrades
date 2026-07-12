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
exports.LegacyInfoXsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyInfoXsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 8 8', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#5791ec724248cf62d78ed273c8d06894__a)' },
        React.createElement("path", { fill: '#333', d: 'M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 2.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5M4 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5791ec724248cf62d78ed273c8d06894__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h8v8H0z' })))));
exports.LegacyInfoXsIcon = LegacyInfoXsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyInfoXsIcon);
exports.default = ForwardRef;
