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
exports.FlagGeorgiaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagGeorgiaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M2 0h8v6H0V2a2 2 0 0 1 2-2m2 4 1.2-.2L5 5h1l-.2-1.2L7 4V3l-1.2.2L6 2H5l.2 1.2L4 3zM22 0h-8v6h10V2a2 2 0 0 0-2-2m-5 4 1.2-.2L18 5h1l-.2-1.2L20 4V3l-1.2.2L19 2h-1l.2 1.2L17 3zM0 10v4a2 2 0 0 0 2 2h8v-6zm5.2 2.8L4 13v-1l1.2.2L5 11h1l-.2 1.2L7 12v1l-1.2-.2L6 14H5zM24 14a2 2 0 0 1-2 2h-8v-6h10zm-7-1 1.2-.2L18 14h1l-.2-1.2 1.2.2v-1l-1.2.2.2-1.2h-1l.2 1.2L17 12z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FD0D1B', d: 'M18.2 3.8 17 4V3l1.2.2L18 2h1l-.2 1.2L20 3v1l-1.2-.2L19 5h-1zM5.2 3.8 4 4V3l1.2.2L5 2h1l-.2 1.2L7 3v1l-1.2-.2L6 5H5zM5.2 12.8 4 13v-1l1.2.2L5 11h1l-.2 1.2L7 12v1l-1.2-.2L6 14H5zM18.2 12.8 17 13v-1l1.2.2L18 11h1l-.2 1.2L20 12v1l-1.2-.2.2 1.2h-1z' }),
    React.createElement("path", { fill: 'red', d: 'M24 6v4H14v6h-4v-6H0V6h10V0h4v6z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagGeorgiaIcon = FlagGeorgiaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagGeorgiaIcon);
exports.default = ForwardRef;
