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
const LabelPairedCircleUserSlashMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.094 4.219c.156-.219.5-.282.687-.094l19 15a.47.47 0 0 1 .094.688c-.156.218-.469.25-.687.093l-19-15a.497.497 0 0 1-.094-.687M2.656 8.78l.813.656A6.9 6.9 0 0 0 3 12a7.1 7.1 0 0 0 2.094 5.031C5.53 15.313 7.125 14 9 14h.281l1.281 1H9a3.004 3.004 0 0 0-3 2.781C7.125 18.563 8.5 19 10 19c1.469 0 2.844-.437 3.969-1.25v.031-.062l.844.656C13.469 19.438 11.75 20 10 20c-2.875 0-5.5-1.5-6.937-4a8.06 8.06 0 0 1-.407-7.219m2.5-3.125C6.5 4.594 8.22 4 10 4c2.844 0 5.5 1.531 6.906 4 1.282 2.25 1.438 4.938.407 7.25l-.813-.656c.313-.781.5-1.656.5-2.594 0-3.844-3.156-7-7-7-1.5 0-2.906.5-4.031 1.281zm3.5 2.75c.031-.031.063-.031.094-.062.75-.438 1.719-.438 2.5 0A2.55 2.55 0 0 1 12.5 10.5c0 .281-.062.563-.156.844l-.875-.688a1.54 1.54 0 0 0-.188-.906C11.031 9.313 10.531 9 10 9c-.187 0-.344.031-.5.094z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0c18c94a4d74015afe883cd994678dd4__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleUserSlashMdRegularIcon);
exports.default = ForwardRef;
