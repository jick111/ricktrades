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
const LabelPairedGrid2MdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.5 6c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zM1 6.5A1.5 1.5 0 0 1 2.5 5h3C6.313 5 7 5.688 7 6.5v3A1.5 1.5 0 0 1 5.5 11h-3A1.48 1.48 0 0 1 1 9.5zM2.5 14c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zm-1.5.5A1.5 1.5 0 0 1 2.5 13h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 5.5 19h-3A1.48 1.48 0 0 1 1 17.5zM13.5 6h-3c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5m-3-1h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 9.5v-3A1.5 1.5 0 0 1 10.5 5m0 9c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 17.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fc5aa35b99039f186406ffd88a742620__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2MdRegularIcon);
exports.default = ForwardRef;
