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
const LabelPairedExclamationLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 3, height: 30, viewBox: '0 0 3 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.125 7.375V19.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M1.5 23.938c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a438930c6f0ae00b072cebb084f83dfe__a' },
            React.createElement("path", { d: 'M0 0h3v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationLgRegularIcon);
exports.default = ForwardRef;
