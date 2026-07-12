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
const LabelPairedArrowRotateLeftLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 13a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.633C4.023 8.468 6.797 6.75 10 6.75c4.805 0 8.75 3.945 8.75 8.75 0 4.844-3.945 8.75-8.75 8.75a8.75 8.75 0 0 1-7.422-4.062c-.273-.43.04-.938.547-.938.234 0 .43.156.547.352A7.56 7.56 0 0 0 10 23c4.14 0 7.5-3.36 7.5-7.5S14.14 8 10 8a7.52 7.52 0 0 0-6.523 3.75h3.398c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e25fcc1eaefa825264573ac82e295a17__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateLeftLgRegularIcon);
exports.default = ForwardRef;
