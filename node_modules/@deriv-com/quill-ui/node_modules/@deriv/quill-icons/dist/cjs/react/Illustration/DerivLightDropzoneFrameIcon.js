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
const DerivLightDropzoneFrameIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 278 168', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#795498184b5e87bc5ad42374a0171db0__a)' },
        React.createElement("path", { fill: '#BCCDCE', fillRule: 'evenodd', d: 'M0 13C0 5.82 5.82 0 13 0h37a1 1 0 1 1 0 2H13C6.925 2 2 6.925 2 13v38a1 1 0 1 1-2 0zM227 1a1 1 0 0 1 1-1h37c7.179 0 13 5.82 13 13v38a1 1 0 0 1-2 0V13c0-6.075-4.925-11-11-11h-37a1 1 0 0 1-1-1M1 116a1 1 0 0 1 1 1v38c0 6.075 4.925 11 11 11h37a1 1 0 0 1 0 2H13c-7.18 0-13-5.821-13-13v-38a1 1 0 0 1 1-1m276 0a1 1 0 0 1 1 1v38c0 7.179-5.821 13-13 13h-37a1 1 0 0 1 0-2h37c6.075 0 11-4.925 11-11v-38a1 1 0 0 1 1-1', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '795498184b5e87bc5ad42374a0171db0__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h278v168H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(DerivLightDropzoneFrameIcon);
exports.default = ForwardRef;
