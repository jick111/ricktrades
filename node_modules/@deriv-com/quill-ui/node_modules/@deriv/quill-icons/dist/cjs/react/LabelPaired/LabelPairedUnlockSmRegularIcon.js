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
const LabelPairedUnlockSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.875 7.25V9h6.563c1.203 0 2.187.984 2.187 2.188v4.374c0 1.231-.984 2.188-2.187 2.188H2.561a2.16 2.16 0 0 1-2.187-2.187v-4.376C.375 9.985 1.332 9 2.563 9H3V7.25c0-1.914 1.559-3.5 3.5-3.5a3.47 3.47 0 0 1 3.336 2.516c.082.218-.055.464-.3.547-.22.054-.466-.055-.52-.301A2.64 2.64 0 0 0 6.5 4.625 2.626 2.626 0 0 0 3.875 7.25M1.25 11.188v4.374c0 .739.574 1.313 1.313 1.313h7.874c.711 0 1.313-.574 1.313-1.312v-4.376a1.33 1.33 0 0 0-1.312-1.312H2.561c-.738 0-1.312.602-1.312 1.313' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '644f7fa3ad3b6f56f87e11a7b9138b6f__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUnlockSmRegularIcon);
exports.default = ForwardRef;
