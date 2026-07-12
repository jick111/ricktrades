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
exports.LegacyAlligatorIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyAlligatorIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M20.19 2.415a1 1 0 0 1 1.62 1.17l-7.393 10.237 3.86 5.791 2.168-1.445a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1-1.387-.277l-4.001-6.003-4.356 6.034a1 1 0 0 1-1.26.308l-.106-.062-2.318-1.545-1.42 1.42a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.262-.125l2.198 1.466 4.23-5.858L5.952 4.73 3.8 7.6a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.632.045l6.4 9.6z' }),
    React.createElement("path", { fill: '#FF444F', d: 'm6.27 12.144 11.414 3.805A1 1 0 0 0 18.8 15.6l3-4a1 1 0 0 0-1.6-1.2l-2.567 3.423-11.317-3.772a1 1 0 0 0-1.023.242l-3 3a1 1 0 1 0 1.414 1.414z' })));
exports.LegacyAlligatorIcon = LegacyAlligatorIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyAlligatorIcon);
exports.default = ForwardRef;
