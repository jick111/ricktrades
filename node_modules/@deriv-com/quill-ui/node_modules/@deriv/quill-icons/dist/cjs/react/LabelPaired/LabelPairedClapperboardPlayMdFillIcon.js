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
const LabelPairedClapperboardPlayMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.156 5.031 10.22 8.97 10.188 9H7.28l4-3.969.031-.031H14c.063 0 .094.031.156.031M12.281 9l3.281-3.25c.25.344.438.781.438 1.25v2zm-6-4h2.907l-3.97 3.969-.03.031H2.28l4-3.969L6.313 5zM4.188 5 .217 8.969.189 9H0V7c0-1.094.875-2 2-2zM0 10h16v7c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm6.75 2.063a.54.54 0 0 0-.25.437v4c0 .188.094.375.25.469.156.062.375.062.5-.032l3-2a.5.5 0 0 0 .25-.437.49.49 0 0 0-.25-.406l-3-2c-.125-.094-.344-.094-.5-.031' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '20102123a31a846518757fb88aa5d96e__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedClapperboardPlayMdFillIcon);
exports.default = ForwardRef;
