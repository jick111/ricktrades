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
const LabelPairedStarSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.766 4.242 1.777 3.637 3.91.574a.89.89 0 0 1 .711.602c.11.3.027.656-.219.875l-2.843 2.816.683 3.992a.86.86 0 0 1-.355.848c-.274.219-.63.219-.93.082L8 15.781l-3.527 1.887a.84.84 0 0 1-.903-.082.86.86 0 0 1-.355-.848l.656-3.992L1.027 9.93c-.218-.22-.3-.575-.218-.875a.89.89 0 0 1 .71-.602l3.938-.574 1.75-3.637A.85.85 0 0 1 8 3.75c.328 0 .629.191.766.492' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7ab614c00dbfc8dfdc25311e2e359101__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStarSmFillIcon);
exports.default = ForwardRef;
