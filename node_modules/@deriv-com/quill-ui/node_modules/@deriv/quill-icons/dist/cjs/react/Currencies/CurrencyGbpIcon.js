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
exports.CurrencyGbpIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyGbpIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
    React.createElement("path", { fill: '#283991', d: 'M20.174.551c2.047.552 3.932 1.5 5.567 2.757l-5.567 5.567zM.551 11.826A15.9 15.9 0 0 1 3.308 6.26l5.567 5.567zM28.693 6.259a15.9 15.9 0 0 1 2.756 5.567h-8.324zM.551 20.174a15.9 15.9 0 0 0 2.757 5.567l5.567-5.567zM6.259 28.692a15.9 15.9 0 0 0 5.567 2.757v-8.324zM6.259 3.308A15.9 15.9 0 0 1 11.826.55v8.324zM20.174 31.449a15.9 15.9 0 0 0 5.567-2.757l-5.567-5.567zM28.693 25.741l-5.568-5.567h8.324a15.9 15.9 0 0 1-2.757 5.567' }),
    React.createElement("path", { fill: '#F44336', d: 'M31.865 13.913H18.087V.135a16.2 16.2 0 0 0-4.174 0v13.778H.135a16.2 16.2 0 0 0 0 4.174h13.778v13.778a16.2 16.2 0 0 0 4.174 0V18.087h13.778a16.2 16.2 0 0 0 0-4.174' }),
    React.createElement("path", { fill: '#F44336', d: 'm20.174 20.174 7.14 7.14q.492-.494.94-1.027l-6.112-6.113zM11.826 20.174v1.967l-6.113 6.113a16 16 0 0 1-1.027-.94zM11.83 11.826l-7.14-7.14q-.492.494-.94 1.027l6.113 6.113zM27.314 4.686l-7.14 7.14V9.86l6.113-6.113q.533.448 1.027.94' })));
exports.CurrencyGbpIcon = CurrencyGbpIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyGbpIcon);
exports.default = ForwardRef;
