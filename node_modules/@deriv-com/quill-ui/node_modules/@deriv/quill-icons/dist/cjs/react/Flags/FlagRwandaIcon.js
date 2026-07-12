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
exports.FlagRwandaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagRwandaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#2D754D', d: 'M2 16h20a2 2 0 0 0 2-2v-1H0v1a2 2 0 0 0 2 2' }),
    React.createElement("path", { fill: '#FECB2F', d: 'M24 10H0v3h24z' }),
    React.createElement("path", { fill: '#25B1EB', d: 'M2 0h20a2 2 0 0 1 2 2v8H0V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#FECB2F', d: 'm18.99 2 .12 2.07.654-1.968-.42 2.031 1.14-1.732-.93 1.853 1.55-1.378-1.379 1.55 1.854-.931-1.733 1.14 2.032-.42-1.97.654 2.071.12-2.07.122 1.969.652-2.032-.419 1.733 1.14-1.854-.93 1.379 1.55-1.55-1.379.93 1.854-1.14-1.733.42 2.032-.653-1.97-.121 2.071-.121-2.07-.653 1.969.419-2.032-1.14 1.733.93-1.854-1.55 1.379 1.38-1.55-1.854.93 1.732-1.14-2.031.42 1.969-.653L16 4.99l2.07-.121-1.968-.653 2.031.419-1.732-1.14 1.853.93-1.378-1.55 1.55 1.38-.931-1.854 1.14 1.732-.42-2.031.654 1.969zm0 2.063a.927.927 0 1 0 0 1.854.927.927 0 0 0 0-1.854m0 .087a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagRwandaIcon = FlagRwandaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagRwandaIcon);
exports.default = ForwardRef;
