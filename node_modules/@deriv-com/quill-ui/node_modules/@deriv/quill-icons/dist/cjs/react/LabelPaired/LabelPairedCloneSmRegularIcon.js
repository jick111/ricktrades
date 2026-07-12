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
const LabelPairedCloneSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 16.875h6.125A.88.88 0 0 0 8.75 16v-1.75h.875V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V9.875c0-.957.766-1.75 1.75-1.75H3.5V9H1.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875M6.125 12.5h6.125a.88.88 0 0 0 .875-.875V5.5a.9.9 0 0 0-.875-.875H6.125a.88.88 0 0 0-.875.875v6.125c0 .492.383.875.875.875m-1.75-.875V5.5c0-.957.766-1.75 1.75-1.75h6.125c.957 0 1.75.793 1.75 1.75v6.125c0 .984-.793 1.75-1.75 1.75H6.125c-.984 0-1.75-.766-1.75-1.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ad4b0f1db2f1ab8b30f38450036e9656__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCloneSmRegularIcon);
exports.default = ForwardRef;
