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
exports.FlagEcuadorIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagEcuadorIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#ED1C24', d: 'M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#034EA2', d: 'M9 8H0v4h24V8h-9a3 3 0 1 1-6 0' }),
    React.createElement("path", { fill: '#FD0', fillRule: 'evenodd', d: 'M22 0H2a2 2 0 0 0-2 2v6h9a3 3 0 1 0 6 0h9V2a2 2 0 0 0-2-2m-8.4 5.8A1 1 0 0 0 14 5a1 1 0 0 0 1-1 1 1 0 0 0 1-1h-3a1 1 0 1 0-2 0H8a1 1 0 0 0 1 1 1 1 0 0 0 1 1c0 .327.157.618.4.8-.251.334-.4.75-.4 1.2v1a2 2 0 1 0 4 0V7c0-.45-.149-.866-.4-1.2', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#2C1C17', d: 'M8 3a1 1 0 0 0 1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 1h2a1 1 0 0 0 1-1 1 1 0 0 0 1-1 1 1 0 0 0 1-1h-3a1 1 0 1 0-2 0z' }),
    React.createElement("path", { fill: '#338AF3', d: 'M10.4 5.8c.167.126.375.2.6.2h2a1 1 0 0 0 .6-.2c.251.334.4.75.4 1.2v1a2 2 0 1 1-4 0V7c0-.45.149-.866.4-1.2' })));
exports.FlagEcuadorIcon = FlagEcuadorIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagEcuadorIcon);
exports.default = ForwardRef;
