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
const LabelPairedSignalLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M23.125 6.125v18.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625M17.5 9.25c.313 0 .625.313.625.625v15a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-15c0-.312.273-.625.625-.625m-4.375 4.375v11.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-11.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625M7.5 16.75c.313 0 .625.313.625.625v7.5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-7.5c0-.312.273-.625.625-.625m-5 3.75c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3e07b00cab4054dcf5ba8ccc8304a967__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSignalLgRegularIcon);
exports.default = ForwardRef;
