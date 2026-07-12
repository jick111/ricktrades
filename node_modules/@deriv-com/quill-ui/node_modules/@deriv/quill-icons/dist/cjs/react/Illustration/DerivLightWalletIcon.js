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
const DerivLightWalletIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#C7E5E5', d: 'M28 9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h22a2 2 0 0 1 2 2z' }),
    React.createElement("path", { fill: '#2A2A2A', d: 'M4.5 4H26a1 1 0 0 1 1 1v4H4.5a2.5 2.5 0 0 1 0-5' }),
    React.createElement("path", { fill: '#BCCDCE', d: 'M23 15h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a4 4 0 0 1 0-8' }),
    React.createElement("path", { fill: '#2A2A2A', d: 'M24 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightWalletIcon);
exports.default = ForwardRef;
