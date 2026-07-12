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
const LabelPairedCreditCardSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.125 5.938H1.875a.45.45 0 0 0-.437.437v.875h13.125v-.875a.47.47 0 0 0-.438-.437m.438 3.937H1.438v5.25c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438zM1.874 4.625h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m1.531 8.313H4.72c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.406a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656m3.5 0H9.97c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.906a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '913f5ea735c9ffd534d421fc1a9cb4f5__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCreditCardSmBoldIcon);
exports.default = ForwardRef;
