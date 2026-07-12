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
const LabelPairedUnlockSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.313 7.25V9h6.562c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-5.25c0-.957.766-1.75 1.75-1.75H3V7.25c0-1.914 1.559-3.5 3.5-3.5a3.48 3.48 0 0 1 3.309 2.434.653.653 0 0 1-.41.82.653.653 0 0 1-.82-.41C8.276 5.719 7.456 5.062 6.5 5.062c-1.23 0-2.187.985-2.187 2.188m-2.625 3.5V16c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-5.25a.47.47 0 0 0-.438-.437h-8.75a.45.45 0 0 0-.437.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a42c0fe832aa6e6dfccc8129b52ce593__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUnlockSmBoldIcon);
exports.default = ForwardRef;
