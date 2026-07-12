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
const LabelPairedCopySmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.875 12.938a.45.45 0 0 0 .438-.438V6.922l-1.86-1.86H5.625a.45.45 0 0 0-.437.438v7c0 .246.19.438.437.438zm-5.25 1.312c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h3.828c.328 0 .684.164.93.41l1.832 1.832c.246.246.41.602.41.93V12.5c0 .984-.793 1.75-1.75 1.75zm-3.5-7H3v1.313h-.875A.45.45 0 0 0 1.688 9v7c0 .246.19.438.437.438h5.25A.45.45 0 0 0 7.813 16v-.875h1.312V16c0 .984-.793 1.75-1.75 1.75h-5.25c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '542ac2d36daa4ef412e84be3f06675e4__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCopySmBoldIcon);
exports.default = ForwardRef;
