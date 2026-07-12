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
const LabelPairedBackwardLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.25 9.172v3.906l6.875-4.844A1.06 1.06 0 0 1 18.789 8C19.453 8 20 8.547 20 9.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195l-6.914-4.844v3.867A1.15 1.15 0 0 1 10.039 23c-.234 0-.469-.078-.664-.195L.352 16.28A.98.98 0 0 1 0 15.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 10.078 8c.625 0 1.172.547 1.172 1.172m0 6.172v.351l6.875 4.805v-9.96zM2.5 15.5l6.875 4.96v-9.882z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '30d11ecca7d22f8c3f228017f9e47bf2__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardLgBoldIcon);
exports.default = ForwardRef;
