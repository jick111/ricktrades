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
const LabelPairedFolderOpenSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.625 16.875h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h3.2c.464 0 .902.191 1.23.52l.738.738c.328.328.766.492 1.23.492H11.5c.957 0 1.75.793 1.75 1.75V9h-1.312v-.875a.47.47 0 0 0-.438-.437H8.273c-.82 0-1.585-.301-2.16-.875l-.738-.739a.44.44 0 0 0-.3-.136h-3.2a.45.45 0 0 0-.437.437v7.164l1.859-3.226a.87.87 0 0 1 .765-.438H15c.3 0 .602.164.738.438a.89.89 0 0 1 0 .902l-3.062 5.25a.9.9 0 0 1-.739.41z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a6faf3a90b2ea21c8273c1eaa8a52f4f__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenSmBoldIcon);
exports.default = ForwardRef;
