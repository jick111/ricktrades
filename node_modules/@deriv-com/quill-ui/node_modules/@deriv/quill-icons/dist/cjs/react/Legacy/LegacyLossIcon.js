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
exports.LegacyLossIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyLossIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("rect", { width: 16, height: 16, fill: '#EC3F3F', rx: 8 }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M5.146 5.146a.5.5 0 0 1 .708 0L8 7.293l2.146-2.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L8.707 8l2.147 2.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L8 8.707l-2.146 2.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L7.293 8 5.146 5.854a.5.5 0 0 1-.057-.638z', clipRule: 'evenodd' })));
exports.LegacyLossIcon = LegacyLossIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyLossIcon);
exports.default = ForwardRef;
