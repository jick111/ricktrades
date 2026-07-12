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
const LabelPairedUbuntuMdIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.656 6.344c0 .875-.469 1.625-1.187 2.062a2.47 2.47 0 0 1-2.375 0c-.719-.437-1.188-1.187-1.188-2.062 0-.844.469-1.625 1.188-2.032a2.31 2.31 0 0 1 2.375 0 2.35 2.35 0 0 1 1.187 2.032M4.813 11.53c0 .844-.47 1.625-1.188 2.063C2.906 14 2 14 1.25 13.594A2.41 2.41 0 0 1 .094 11.53c0-.844.437-1.625 1.156-2.031a2.31 2.31 0 0 1 2.375 0 2.35 2.35 0 0 1 1.188 2.031M1.78 14.812H1.75a3.3 3.3 0 0 0 2.125-.25c.375.782.938 1.438 1.594 1.97a6.25 6.25 0 0 0 2.312 1.062c.188.031.407.062.594.093.031.75.281 1.47.75 2.032a7.67 7.67 0 0 1-4.437-1.282c-1.313-.906-2.344-2.156-2.907-3.625m12.344 2.813c0 .844-.469 1.625-1.187 2.063a2.47 2.47 0 0 1-2.376 0c-.718-.438-1.187-1.22-1.187-2.063s.469-1.625 1.188-2.031a2.31 2.31 0 0 1 2.374 0 2.35 2.35 0 0 1 1.188 2.031M13.875 15h-.031a5.54 5.54 0 0 0 .875-2.875c.031-1-.188-2-.656-2.906.593-.375 1.093-.938 1.343-1.594a7.73 7.73 0 0 1 1.344 4.656 7.94 7.94 0 0 1-1.719 4.531A3.5 3.5 0 0 0 13.875 15M3.156 8.25c-.25-.062-.469-.062-.719-.062h-.25a7.83 7.83 0 0 1 3.157-3.063 7.65 7.65 0 0 1 4.312-.906 3.1 3.1 0 0 0-.687 1.437c-.031.188-.063.375-.063.532-.937.03-1.844.25-2.625.687-.812.438-1.531 1.063-2.031 1.813-.344-.22-.719-.344-1.094-.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '56064f92c3ae3d735933572040fe4f1a__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUbuntuMdIcon);
exports.default = ForwardRef;
