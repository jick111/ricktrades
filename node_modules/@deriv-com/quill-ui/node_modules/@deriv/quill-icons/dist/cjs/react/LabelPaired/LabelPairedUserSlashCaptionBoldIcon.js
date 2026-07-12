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
const LabelPairedUserSlashCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.89 3.64 4.5 6.454a2.996 2.996 0 0 1 3-2.953c1.64 0 3 1.36 3 3 0 1.406-.96 2.555-2.227 2.906l6.493 5.11c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m5.907 4.618c.21.07.445.117.703.117 1.031 0 1.875-.82 1.875-1.875A1.88 1.88 0 0 0 7.5 4.625 1.866 1.866 0 0 0 5.625 6.5c0 .422.117.797.328 1.102zm-.61 2.39 1.407 1.102H6.422a3.06 3.06 0 0 0-3.024 2.625h7.547l1.36 1.078c-.094.047-.164.047-.258.047H2.93a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 3.938-4.172' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '802b442cbc1e0710c05f4e97421b0621__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserSlashCaptionBoldIcon);
exports.default = ForwardRef;
