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
const LabelPairedBackwardMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.156 12 8 16.969V7.062zm6.907-6c.5 0 .937.438.937.938v3.25l5.5-4A.87.87 0 0 1 15.063 6c.5 0 .937.438.937.938v10.125a.94.94 0 0 1-.937.937 1.1 1.1 0 0 1-.563-.156l-5.5-4v3.219a.94.94 0 0 1-.937.937 1.1 1.1 0 0 1-.563-.156L.281 12.625A.79.79 0 0 1 0 12a.77.77 0 0 1 .281-.594L7.5 6.187A.87.87 0 0 1 8.063 6M9 12.625l6 4.344V7.062l-6 4.344z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '299a2d3af98f0cb2ad72d15d04ddb471__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardMdRegularIcon);
exports.default = ForwardRef;
