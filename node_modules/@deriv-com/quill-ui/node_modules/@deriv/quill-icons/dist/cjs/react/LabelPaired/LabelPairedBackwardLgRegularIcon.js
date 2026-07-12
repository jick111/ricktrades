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
const LabelPairedBackwardLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.445 15.5 10 21.71V9.329zM10.078 8c.625 0 1.172.547 1.172 1.172v4.062l6.875-5A1.1 1.1 0 0 1 18.828 8C19.453 8 20 8.547 20 9.172v12.656c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195l-6.875-5v4.023c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195L.352 16.28A.98.98 0 0 1 0 15.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 10.078 8m1.172 8.281 7.5 5.43V9.328l-7.5 5.43z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '48c3ca4eff4c44341bc5920b33c745a1__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardLgRegularIcon);
exports.default = ForwardRef;
