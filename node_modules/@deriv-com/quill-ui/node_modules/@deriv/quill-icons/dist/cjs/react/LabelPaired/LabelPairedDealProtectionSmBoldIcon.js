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
const LabelPairedDealProtectionSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.492 7.086h2.762q.697 0 1.312.246c.41.137.739.383 1.012.684q.41.45.656 1.148c.164.465.22.984.22 1.586 0 .629-.056 1.148-.22 1.613q-.245.697-.656 1.149c-.273.3-.601.52-1.012.683a3.4 3.4 0 0 1-1.312.246H2.492zm2.762 5.934c.465 0 .848-.137 1.121-.41.273-.274.41-.684.41-1.286v-1.12c0-.602-.137-1.013-.41-1.286s-.656-.41-1.121-.41H4.078v4.512zm4.539 1.394V7.086h3.473c.355 0 .656.082.93.191.273.11.492.274.683.465.191.219.355.465.465.766.082.273.136.601.136.93 0 .355-.027.683-.136.957-.11.3-.274.546-.465.738s-.41.355-.684.492c-.273.11-.574.164-.93.164h-1.859v2.625zm1.613-4.02h1.668c.246 0 .438-.054.574-.19.137-.11.192-.302.192-.548V9.22c0-.246-.055-.438-.192-.547-.136-.137-.328-.192-.574-.192h-1.668z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'be3326a7a29c3e380b2a357b4000780e__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDealProtectionSmBoldIcon);
exports.default = ForwardRef;
