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
const LabelPairedEnvelopeSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.375a.88.88 0 0 0-.875.875v1.094l5.332 3.937a1.36 1.36 0 0 0 1.559 0l5.359-3.937V7.25a.9.9 0 0 0-.875-.875zM.875 9.438v4.812c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875V9.438l-4.84 3.554a2.26 2.26 0 0 1-2.597 0zM0 7.25C0 6.293.766 5.5 1.75 5.5h10.5c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75C.766 16 0 15.234 0 14.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8b71e81ff419ffbdbd7748c127c23f41__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEnvelopeSmRegularIcon);
exports.default = ForwardRef;
