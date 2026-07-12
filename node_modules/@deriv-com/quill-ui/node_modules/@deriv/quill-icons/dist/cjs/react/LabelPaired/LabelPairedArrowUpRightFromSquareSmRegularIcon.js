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
const LabelPairedArrowUpRightFromSquareSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.188 3.75h4.374a.47.47 0 0 1 .438.438v4.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.31l-6.7 6.7a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l6.7-6.699h-3.31a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438m-7.438.875h3.938a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h9.625A.88.88 0 0 0 12.25 16v-3.937a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V6.375c0-.957.766-1.75 1.75-1.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ea829f6affa0d8d10c9e9ce53de8257b__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareSmRegularIcon);
exports.default = ForwardRef;
