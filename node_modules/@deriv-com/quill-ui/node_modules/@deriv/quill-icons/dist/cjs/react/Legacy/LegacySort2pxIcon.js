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
exports.LegacySort2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySort2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#f2322b0c5124eac80e21d11713d00719__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M4 2a1 1 0 0 1 .711.297l3 3.036A1 1 0 1 1 6.29 6.74L5 5.435V13a1 1 0 1 1-2 0V5.435L1.711 6.739A1 1 0 1 1 .29 5.333l3-3.036A1 1 0 0 1 4 2M12 14a1 1 0 0 0 .711-.297l3-3.036A1 1 0 1 0 14.29 9.26L13 10.565V3a1 1 0 0 0-2 0v7.565L9.711 9.261a1 1 0 0 0-1.422 1.406l3 3.036A1 1 0 0 0 12 14' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f2322b0c5124eac80e21d11713d00719__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacySort2pxIcon = LegacySort2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySort2pxIcon);
exports.default = ForwardRef;
