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
const LabelPairedPenLineSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.48 15.754.63-2.133c.109-.383.327-.738.6-1.012l8.313-8.312a1.766 1.766 0 0 1 2.489 0l1.066 1.066c.082.082.164.192.219.274a1.745 1.745 0 0 1-.219 2.215l-8.312 8.312c-.028.027-.082.055-.11.11a2.9 2.9 0 0 1-.902.492l-2.133.629-1.176.328a.56.56 0 0 1-.629-.164.56.56 0 0 1-.164-.63zm1.696-1.121-.438 1.504 1.504-.438.63-.191c.19-.055.327-.137.464-.274l6.262-6.261-1.696-1.696-6.261 6.262c-.028 0-.028.027-.055.055-.11.11-.164.246-.219.41zm4.73 1.805h8.313c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bcb8c23cb94f5bd5e92fd43d70f7ac06__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineSmBoldIcon);
exports.default = ForwardRef;
