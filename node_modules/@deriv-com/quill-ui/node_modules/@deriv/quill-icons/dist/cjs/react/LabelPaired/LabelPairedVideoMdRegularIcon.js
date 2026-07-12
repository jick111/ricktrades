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
const LabelPairedVideoMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 7c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h8c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1zM0 8c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm16.219 8.875L13 15.094v-1.156L16.688 16c.03 0 .062.031.093.031a.214.214 0 0 0 .219-.218V8.218A.214.214 0 0 0 16.781 8c-.031 0-.062.031-.093.031L13 10.094V8.938l3.219-1.782c.187-.093.375-.156.562-.156C17.438 7 18 7.563 18 8.219v7.594c0 .656-.562 1.187-1.219 1.187-.187 0-.375-.031-.562-.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '16424099ed75a2a64d13b82ae41e8968__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedVideoMdRegularIcon);
exports.default = ForwardRef;
