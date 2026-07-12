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
const LabelPairedVideoSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 6.813a.45.45 0 0 0-.437.437v7c0 .246.19.438.437.438h7a.45.45 0 0 0 .438-.438v-7a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75h-7c-.984 0-1.75-.766-1.75-1.75zm14.438 6.453V7.824L11.5 9.191V7.77l2.844-1.286c.136-.054.273-.109.437-.109.602 0 1.094.492 1.094 1.094v6.59c0 .601-.492 1.066-1.094 1.066-.164 0-.3-.027-.437-.082L11.5 13.758v-1.45z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7c383585c06b795d813c7eac10b26341__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedVideoSmBoldIcon);
exports.default = ForwardRef;
