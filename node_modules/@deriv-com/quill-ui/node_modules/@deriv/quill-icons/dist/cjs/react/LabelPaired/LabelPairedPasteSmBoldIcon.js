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
const LabelPairedPasteSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.844 5.063A1.54 1.54 0 0 1 4.375 3.75a1.53 1.53 0 0 1 1.504 1.313H7c.793 0 1.477.574 1.695 1.312H7c-.793 0-1.477.355-1.969.875H3.063a.864.864 0 0 1-.876-.875H1.75a.45.45 0 0 0-.437.438v7.437c0 .246.19.438.437.438h2.625V16H1.75C.766 16 0 15.234 0 14.25V6.813c0-.958.766-1.75 1.75-1.75zm1.094.218c0 .246.19.438.437.438a.45.45 0 0 0 .438-.438.47.47 0 0 0-.438-.437.45.45 0 0 0-.437.437m8.312 11.157a.45.45 0 0 0 .438-.438v-5.578l-1.86-1.86H7A.45.45 0 0 0 6.563 9v7c0 .246.19.438.437.438zM7 17.75c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75h3.828c.328 0 .684.164.93.41l1.832 1.832c.246.246.41.602.41.93V16c0 .984-.793 1.75-1.75 1.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '58a753adccd074afaddebb19975d020e__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPasteSmBoldIcon);
exports.default = ForwardRef;
