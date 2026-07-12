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
const LabelPairedTriangleExclamationLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.328 21.945c-.078.117-.078.235-.078.352 0 .39.313.742.703.742h16.055c.39 0 .742-.352.742-.742a.63.63 0 0 0-.117-.352L10.78 8.47A.94.94 0 0 0 10 8a.95.95 0 0 0-.82.469zM.234 21.32 8.086 7.844A2.25 2.25 0 0 1 10 6.75c.742 0 1.484.43 1.875 1.094l7.852 13.476c.156.274.273.625.273.977 0 1.094-.898 1.953-1.992 1.953H1.953A1.934 1.934 0 0 1 0 22.297c0-.352.078-.703.234-.977M10 11.75c.313 0 .625.313.625.625v5A.64.64 0 0 1 10 18a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m-.937 8.75c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2ca1090e815742580889634dee372bb6__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTriangleExclamationLgRegularIcon);
exports.default = ForwardRef;
