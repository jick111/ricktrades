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
const LabelPairedFileDocMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 19h1v1H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V13h-1v-3H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1m8.969-10c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5zM5.5 15h1c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 6.5 20h-1a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m.5 4h.5c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5H6zm8.25-4h.5c.688 0 1.25.563 1.25 1.25v.25c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.25a.27.27 0 0 0-.25-.25h-.5a.247.247 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-.25c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.25c0 .719-.562 1.25-1.25 1.25h-.5c-.719 0-1.25-.531-1.25-1.25v-2.5c0-.687.531-1.25 1.25-1.25M9 16.25c0-.687.531-1.25 1.25-1.25h.5c.688 0 1.25.563 1.25 1.25v2.5c0 .719-.562 1.25-1.25 1.25h-.5C9.531 20 9 19.469 9 18.75zm1.25-.25a.247.247 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-2.5a.27.27 0 0 0-.25-.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '793bda37c966d28763647b21a1c4248b__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileDocMdRegularIcon);
exports.default = ForwardRef;
