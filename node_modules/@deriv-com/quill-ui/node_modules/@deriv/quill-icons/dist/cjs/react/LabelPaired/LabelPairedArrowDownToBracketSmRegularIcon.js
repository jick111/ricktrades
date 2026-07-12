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
const LabelPairedArrowDownToBracketSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.3 9.766-3.5 3.5a.463.463 0 0 1-.628 0l-3.5-3.5a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l2.762 2.762v-7.71A.45.45 0 0 1 6.5 3.75a.47.47 0 0 1 .438.438v7.71l2.734-2.761a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629m-9.05 3.172v2.624c0 .739.574 1.313 1.313 1.313h7.874c.711 0 1.313-.574 1.313-1.312v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v2.624c0 1.231-.984 2.188-2.187 2.188H2.561a2.16 2.16 0 0 1-2.187-2.187v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bd2b28c0b7541d1ebf50ff73929345a1__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketSmRegularIcon);
exports.default = ForwardRef;
