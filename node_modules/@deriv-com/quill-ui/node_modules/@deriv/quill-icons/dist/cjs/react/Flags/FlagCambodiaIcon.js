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
exports.FlagCambodiaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagCambodiaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#0028A4', d: 'M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#E3001A', d: 'M24 4H0v8h24z' }),
    React.createElement("path", { fill: '#0028A4', d: 'M2 0h20a2 2 0 0 1 2 2v2H0V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M9 5h.6l.6 1.2H9zm1.2 1.2h1.2v1.2h-1.2zM9 7.4h1.2v1.2H9zM7.8 8.6H9v1.2H7.8zm0 1.2H9V11H7.8zm-.6 0h.6V11H6.6zm3-1.2h2.4V11h-2.4zM15 5h-.6l-.6 1.2H15zm-1.2 1.2h-1.2v1.2h1.2zM15 7.4h-1.2v1.2H15zm1.2 1.2H15v1.2h1.2zm0 1.2H15V11h1.2zm.6 0h-.6V11h1.2zm-3-1.2h-1.2V11h1.2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#F5DDE0', fillRule: 'evenodd', d: 'M10.2 7.4h1.2v1.2h-1.2zM9 8.6h1.2V11H9zm0-2.4h1.2v1.2H9zm-.6 1.2H9v1.2H7.8zm5.4 0h-1.2v1.2h1.2zM15 8.6h-1.2V11H15zm0-2.4h-1.2v1.2H15zm.6 1.2H15v1.2h1.2zm-3-1.2h-1.2v2.4h1.2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#B4B4B4', fillRule: 'evenodd', d: 'M11.4 5h1.2v1.2h-1.2z', clipRule: 'evenodd' })));
exports.FlagCambodiaIcon = FlagCambodiaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagCambodiaIcon);
exports.default = ForwardRef;
