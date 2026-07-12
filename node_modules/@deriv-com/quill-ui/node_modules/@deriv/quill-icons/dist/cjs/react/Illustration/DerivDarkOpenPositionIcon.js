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
const DerivDarkOpenPositionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 96 96', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', d: 'M56 16H24a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8' }),
    React.createElement("path", { fill: '#323738', d: 'M72 28H40a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V36a8 8 0 0 0-8-8' }),
    React.createElement("path", { fill: '#6E6E6E', d: 'm61.414 36.586 10 10 .048.049q.069.075.132.156l-.18-.205A2 2 0 0 1 72 48l-.002.082q-.004.103-.019.206L72 48a2 2 0 0 1-.538 1.365l-.048.05-10 10a2 2 0 1 1-2.828-2.83L65.164 50H42a2 2 0 1 1 0-4h23.172l-6.586-6.586a2 2 0 1 1 2.828-2.828' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkOpenPositionIcon);
exports.default = ForwardRef;
