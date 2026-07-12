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
exports.LegacyLimitMinimumIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyLimitMinimumIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M13.5 3A1.5 1.5 0 0 1 15 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3zm0 8h-11q-.263-.001-.5-.085v.585a.5.5 0 0 0 .41.492L2.5 12h11a.5.5 0 0 0 .492-.41L14 11.5v-.586a1.5 1.5 0 0 1-.5.086m.5-2a1 1 0 0 0-.993.883L13 10h.5a.5.5 0 0 0 .492-.41L14 9.5zM2 9v.5a.5.5 0 0 0 .41.492L2.5 10H3l-.007-.117A1 1 0 0 0 2 9m10-5H4a2 2 0 0 1-1.85 1.995L2 6v2l.15.005A2 2 0 0 1 4 10h8a2 2 0 0 1 2-2V6l-.15-.005A2 2 0 0 1 12 4M8.26 5v.436l.145.03a.97.97 0 0 1 .55.388l-.346.38-.075-.088-.088-.079a.65.65 0 0 0-.232-.111v.77l.153.049q.289.105.441.271.192.21.192.567 0 .343-.18.603t-.56.339V9h-.433v-.427l-.138-.022a1 1 0 0 1-.347-.14A1.3 1.3 0 0 1 7 8.086l.342-.38.075.087q.079.082.167.142.133.09.293.118v-.835L7.74 7.18q-.323-.106-.478-.295a.87.87 0 0 1-.186-.566q0-.367.192-.599.19-.232.56-.283V5zm-.046 2.31v.734a.37.37 0 0 0 .262-.38.4.4 0 0 0-.05-.198q-.048-.095-.212-.155m-.337-1.363-.068.022a.3.3 0 0 0-.143.105.37.37 0 0 0-.066.225q0 .135.066.21.067.073.21.124zM3 4h-.5a.5.5 0 0 0-.492.41L2 4.5V5a1 1 0 0 0 .993-.883zm10.5 0H13l.007.117A1 1 0 0 0 14 5v-.5a.5.5 0 0 0-.41-.492z' })));
exports.LegacyLimitMinimumIcon = LegacyLimitMinimumIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyLimitMinimumIcon);
exports.default = ForwardRef;
