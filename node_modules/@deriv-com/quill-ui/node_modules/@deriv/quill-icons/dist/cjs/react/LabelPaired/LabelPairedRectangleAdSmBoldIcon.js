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
const LabelPairedRectangleAdSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 5.938a.45.45 0 0 0-.437.437v8.75c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438v-8.75a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm6.262 2.133 1.968 3.937a.647.647 0 0 1-.3.875c-.301.164-.711.028-.875-.3l-.137-.301H4.555l-.137.3a.647.647 0 0 1-.875.301.647.647 0 0 1-.3-.875L5.21 8.508a.67.67 0 0 1 .601-.383c.247 0 .465.137.575.383m-.574 1.75-.602 1.148h1.176zm5.03.492c-.382 0-.655.3-.655.656 0 .383.273.656.656.656a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656m.657-1.176v-.793c0-.355.273-.656.656-.656.356 0 .656.3.656.656v3.938c0 .383-.3.656-.656.656-.191 0-.355-.055-.465-.191a1.8 1.8 0 0 1-.847.191 1.96 1.96 0 0 1-1.969-1.969c0-1.066.875-1.969 1.969-1.969.219 0 .437.055.656.137' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a6958593bdd5e999d60580c9c2707fff__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRectangleAdSmBoldIcon);
exports.default = ForwardRef;
