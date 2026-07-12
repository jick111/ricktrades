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
const LabelPairedApplePaySmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.422 8.098c.219-.246.355-.575.328-.93-.3.027-.656.191-.875.437-.191.22-.355.575-.3.903.327.027.655-.164.847-.41m.3.464c.192.028.739.083 1.067.575-.027.027-.629.383-.629 1.12.027.876.766 1.15.793 1.15-.027.027-.137.437-.41.82-.246.355-.492.71-.875.71-.383.028-.52-.218-.957-.218-.438 0-.574.219-.957.246-.383 0-.656-.383-.902-.738-.493-.739-.875-2.024-.383-2.926.273-.438.71-.711 1.203-.711.383 0 .71.246.957.246.219 0 .629-.3 1.094-.274m2.762-.984H8.48c1.04 0 1.75.711 1.75 1.75s-.738 1.75-1.777 1.75H7.305v1.832h-.82zm.82.684v2.133h.958c.71 0 1.12-.383 1.12-1.067s-.41-1.066-1.12-1.066zm4.43 4.676c-.765 0-1.285-.438-1.312-1.149 0-.684.52-1.066 1.504-1.121l1.011-.055v-.3c0-.438-.273-.684-.792-.684-.41 0-.711.219-.766.547h-.738c0-.684.656-1.176 1.53-1.176.958 0 1.56.492 1.56 1.258v2.652h-.766v-.656c-.219.437-.711.684-1.23.684m.22-.63c.573 0 .983-.355.983-.847v-.3l-.902.054c-.52.027-.793.219-.793.574 0 .3.274.52.711.52m2.816 2.051c-.055 0-.274 0-.329-.027v-.629h.246c.383 0 .575-.137.711-.547l.082-.246-1.421-3.883h.875l.984 3.172.984-3.172h.848l-1.477 4.075c-.328.957-.71 1.257-1.503 1.257' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd3d7697f60bf8227586e1c7f39056df1__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedApplePaySmIcon);
exports.default = ForwardRef;
