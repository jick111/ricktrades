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
const LabelPairedTrashLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.164 6.75a.61.61 0 0 0-.508.313L6.031 8h5.899l-.625-.937a.61.61 0 0 0-.508-.313zM13.375 8h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.742l-.977 13.945c-.117 1.328-1.172 2.305-2.5 2.305H5.055a2.51 2.51 0 0 1-2.5-2.305L1.578 9.25H.875a.617.617 0 0 1-.625-.625C.25 8.313.523 8 .875 8h3.711l1.016-1.602A1.84 1.84 0 0 1 7.164 5.5h3.633c.625 0 1.25.352 1.601.898zm1.758 1.25H2.828l.977 13.867c.039.625.586 1.133 1.25 1.133h7.851c.664 0 1.211-.508 1.25-1.133z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dda846f4b22174a27d9d81c521a81dbc__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTrashLgRegularIcon);
exports.default = ForwardRef;
