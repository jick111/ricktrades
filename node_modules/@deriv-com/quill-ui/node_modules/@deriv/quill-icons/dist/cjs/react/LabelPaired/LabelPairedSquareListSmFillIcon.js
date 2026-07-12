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
const LabelPairedSquareListSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 6.375c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM3 11.625a.88.88 0 0 0 .875-.875A.9.9 0 0 0 3 9.875a.88.88 0 0 0-.875.875c0 .492.383.875.875.875m.875-3.5A.9.9 0 0 0 3 7.25a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875M3 14.25a.88.88 0 0 0 .875-.875A.9.9 0 0 0 3 12.5a.88.88 0 0 0-.875.875c0 .492.383.875.875.875m2.625-6.781c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '36fd42f5adffdb8e1605ad3a89a261c1__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListSmFillIcon);
exports.default = ForwardRef;
