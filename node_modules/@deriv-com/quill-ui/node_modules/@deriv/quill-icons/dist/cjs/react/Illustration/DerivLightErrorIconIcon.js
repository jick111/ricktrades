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
const DerivLightErrorIconIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 128', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF444F', d: 'M64 123c32.585 0 59-26.415 59-59S96.585 5 64 5 5 31.415 5 64s26.415 59 59 59' }),
    React.createElement("path", { fill: '#fff', d: 'M58.05 86.01v-1.488c0-2.848 1.743-5.13 5.95-5.13s5.926 2.205 5.926 5.13v1.616c0 2.873-1.719 5.13-5.926 5.13s-5.95-2.385-5.95-5.258M62 68.925l-3.156-18.957V37.142a6.64 6.64 0 0 1 5.13-2.822 6.52 6.52 0 0 1 5.13 2.822v12.826l-3.052 18.957a2.23 2.23 0 0 1-1.975 1.488A2.205 2.205 0 0 1 62 68.925' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightErrorIconIcon);
exports.default = ForwardRef;
