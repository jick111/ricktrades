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
exports.LegacyIchimokuIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIchimokuIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF444F', d: 'M6.97 6.87 4.5 3H3L2 4v17l1.35.5 6.14-8.15z', opacity: 0.31 }),
    React.createElement("path", { fill: '#85ACB0', d: 'm19.5 3-1.15 5h-3.1L13 13l-3.02-.25-.49.6 1.41 6.04 3.1-3.12L17 20l2.43-.61 1.32 2.11L22 21V3z', opacity: 0.3 }),
    React.createElement("path", { fill: '#FF444F', d: 'm5.465 5 1.607 2.41 2.958 11.833a1 1 0 0 0 1.677.464l2.185-2.185L16.2 20.6a1 1 0 0 0 1.247.294l1.355-.677 1.49 1.49a1 1 0 0 0 1.415-1.414l-2-2a1 1 0 0 0-1.154-.187l-1.254.626L14.8 15.4a1 1 0 0 0-1.507-.107l-1.751 1.751L8.97 6.757a1 1 0 0 0-.138-.312l-2-3A1 1 0 0 0 6 3H3a1 1 0 0 0 0 2z' }),
    React.createElement("path", { fill: '#85ACB0', d: 'm10.095 13.458 2.716.524a1 1 0 0 0 1.117-.61L15.678 9H18a1 1 0 0 0 .98-.804L19.82 4H21a1 1 0 1 0 0-2h-2a1 1 0 0 0-.98.804L17.18 7H15a1 1 0 0 0-.928.629l-1.694 4.233-2.509-.484a1 1 0 0 0-.98.37l-6.68 8.64a1 1 0 0 0 1.582 1.224z' })));
exports.LegacyIchimokuIcon = LegacyIchimokuIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIchimokuIcon);
exports.default = ForwardRef;
