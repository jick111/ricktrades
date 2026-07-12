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
exports.FlagFrenchPolynesiaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagFrenchPolynesiaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#CE1126', d: 'M0 13h24v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#fff', d: 'M10.75 9h.5V8h-.5zM13.25 8v1h-.5V8z' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M0 3h24v10H0zm12 1a4 4 0 0 0-4 4h1.25v1H8.126q.138.534.41 1h6.929c.179-.31.318-.645.409-1H14.75V8H16a4 4 0 0 0-4-4m-2.646 7c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#E99A39', d: 'M8 8a4 4 0 1 1 8 0h-1.25V7h-1.5v1h-.5V5h-1.5v3h-.5V7h-1.5v1z' }),
    React.createElement("path", { fill: '#14348F', d: 'M8.535 10a4 4 0 0 1-.409-1h7.748q-.138.534-.41 1zM9.354 11c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1z' }),
    React.createElement("path", { fill: '#CE1126', d: 'M11.25 5h1.5v4h-1.5zM13.25 7h1.5v2h-1.5zM9.25 7h1.5v2h-1.5zM2 0h20a2 2 0 0 1 2 2v1H0V2a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagFrenchPolynesiaIcon = FlagFrenchPolynesiaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagFrenchPolynesiaIcon);
exports.default = ForwardRef;
