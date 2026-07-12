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
const LabelPairedLaptopLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M20 8H5c-.703 0-1.25.586-1.25 1.25v10H2.5v-10c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v10h-1.25v-10C21.25 8.586 20.664 8 20 8M2.969 23h19.023c.781 0 1.445-.508 1.68-1.25H1.289c.234.742.899 1.25 1.68 1.25M0 21.281c0-.43.313-.781.742-.781H24.22c.43 0 .781.352.781.781 0 1.64-1.367 2.969-3.008 2.969H2.97A2.967 2.967 0 0 1 0 21.281' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b6de48e09316e36d14d5df086b242207__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLaptopLgRegularIcon);
exports.default = ForwardRef;
