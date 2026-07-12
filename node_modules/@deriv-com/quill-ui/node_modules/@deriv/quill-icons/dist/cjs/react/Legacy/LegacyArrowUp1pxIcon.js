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
exports.LegacyArrowUp1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyArrowUp1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M8 2a.5.5 0 0 1 .191.038.5.5 0 0 1 .163.108l-.052-.044q.02.014.04.033l.012.011 3.5 3.5a.5.5 0 0 1-.708.708L8.5 3.707V13.5a.5.5 0 0 1-.41.492L8 14a.5.5 0 0 1-.5-.5V3.707L4.854 6.354a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708l3.5-3.5A.5.5 0 0 1 8 2l-.074.005L7.99 2z' })));
exports.LegacyArrowUp1pxIcon = LegacyArrowUp1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyArrowUp1pxIcon);
exports.default = ForwardRef;
