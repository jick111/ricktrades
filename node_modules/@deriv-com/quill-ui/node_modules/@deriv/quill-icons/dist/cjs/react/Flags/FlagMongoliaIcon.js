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
exports.FlagMongoliaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagMongoliaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#C62429', d: 'M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' }),
    React.createElement("path", { fill: '#004F99', d: 'M16 0H8v16h8z' }),
    React.createElement("path", { fill: '#C62429', d: 'M4.5 9a1 1 0 0 0 1-1v3a1 1 0 1 0-2 0V8a1 1 0 0 0 1 1' }),
    React.createElement("path", { fill: '#C62429', fillRule: 'evenodd', d: 'M8 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM5.5 6l-1-2-1 2zm-2 5a1 1 0 1 0 2 0v1h1V8h-1a1 1 0 0 0-2 0h-1v4h1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FAD000', fillRule: 'evenodd', d: 'M2.5 8h1v4h-1zm3 0h1v4h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FAD000', d: 'M4.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' }),
    React.createElement("path", { fill: '#FAD000', fillRule: 'evenodd', d: 'm4.5 4 1 2h-2z', clipRule: 'evenodd' })));
exports.FlagMongoliaIcon = FlagMongoliaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagMongoliaIcon);
exports.default = ForwardRef;
