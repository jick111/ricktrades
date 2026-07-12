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
const LabelPairedMessageLinesLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 21.75v1.875l3.828-2.852c.195-.156.469-.273.742-.273h5.43c.664 0 1.25-.547 1.25-1.25V8c0-.664-.586-1.25-1.25-1.25h-15c-.703 0-1.25.586-1.25 1.25v11.25c0 .703.547 1.25 1.25 1.25h3.75c.664 0 1.25.586 1.25 1.25M2.5 5.5h15C18.867 5.5 20 6.633 20 8v11.25c0 1.406-1.133 2.5-2.5 2.5h-5.43l-4.843 3.633c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V21.75H2.5a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5m3.125 5.625h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 5 11.75c0-.312.273-.625.625-.625m0 3.75h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5A.617.617 0 0 1 5 15.5c0-.312.273-.625.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e862e45e4265ebe7c21cc4f7f38c89ca__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesLgRegularIcon);
exports.default = ForwardRef;
