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
const LabelPairedPenSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.984 13.621c.11-.383.329-.738.602-1.012l8.312-8.312a1.766 1.766 0 0 1 2.489 0l1.066 1.066c.082.082.164.192.219.274a1.745 1.745 0 0 1-.219 2.215l-8.312 8.312c-.028.027-.082.055-.11.11a2.9 2.9 0 0 1-.902.492l-2.133.629-1.176.355a.62.62 0 0 1-.629-.191.56.56 0 0 1-.164-.63l.328-1.175zm1.258.383-.191.629-.438 1.504 1.504-.438.63-.191c.19-.055.327-.137.464-.274l6.262-6.261-1.696-1.696-6.261 6.262c-.028 0-.028.027-.055.055-.11.11-.164.246-.219.41' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fe9f3f990c3d09614716411b60f6818f__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenSmBoldIcon);
exports.default = ForwardRef;
