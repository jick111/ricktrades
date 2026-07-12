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
exports.FlagPortugalIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagPortugalIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#FF2936', d: 'M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#128415', d: 'M8 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6z' }),
    React.createElement("path", { fill: '#FAF94F', fillRule: 'evenodd', d: 'M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M6.5 6.341c0-.188.145-.341.333-.341h2.334c.184 0 .333.152.333.341v2.327C9.5 9.404 8.907 10 8.175 10h-.35C7.093 10 6.5 9.41 6.5 8.668z' }),
    React.createElement("path", { fill: '#1D50B5', d: 'M8 8.92c.414 0 .75-1.086.75-1.5a.75.75 0 0 0-1.5 0c0 .414.336 1.5.75 1.5' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagPortugalIcon = FlagPortugalIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagPortugalIcon);
exports.default = ForwardRef;
