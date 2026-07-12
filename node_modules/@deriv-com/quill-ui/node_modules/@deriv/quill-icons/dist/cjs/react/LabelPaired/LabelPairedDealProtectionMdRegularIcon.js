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
const LabelPairedDealProtectionMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.875 7.813h2.969c.531 0 1 .093 1.437.28.438.157.813.438 1.125.782s.563.781.719 1.313A6.4 6.4 0 0 1 9.375 12c0 .719-.094 1.313-.25 1.844a3.3 3.3 0 0 1-.719 1.312 3.2 3.2 0 0 1-1.125.781 3.6 3.6 0 0 1-1.437.282H2.875zM5.844 15c.625 0 1.125-.187 1.5-.594.375-.375.593-.969.593-1.719v-1.343c0-.75-.218-1.344-.593-1.719-.375-.406-.875-.594-1.5-.594H4.219V15zm5.219 1.188V7.813h3.593c.781 0 1.375.25 1.813.687.406.469.625 1.094.625 1.844 0 .781-.219 1.375-.625 1.844-.438.468-1.032.687-1.813.687h-2.25v3.313zm1.343-4.5h2.188c.344 0 .594-.094.781-.282s.281-.437.281-.781v-.562c0-.344-.094-.594-.281-.782-.187-.187-.437-.281-.781-.281h-2.188z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c09c37bfac6258c5a3d82b03cc37537e__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDealProtectionMdRegularIcon);
exports.default = ForwardRef;
