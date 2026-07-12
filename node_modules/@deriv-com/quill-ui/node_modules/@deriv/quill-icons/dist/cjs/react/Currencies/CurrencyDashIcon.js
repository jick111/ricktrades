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
exports.CurrencyDashIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyDashIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3c8edd9845b517916ae12efce52cdaef__a)' },
        React.createElement("path", { fill: '#4165A5', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M22.89 20.221q.975-1.804.975-4.232 0-2.451-.976-4.256-.975-1.804-2.87-2.768Q18.123 8 15.468 8h-5.084v5.26H8.13v1.804h2.254V24h5.084q2.655 0 4.55-.987t2.871-2.792m-10.44-5.157v7.075h2.86q3.131 0 4.788-1.611 1.657-1.612 1.657-4.54t-1.646-4.55q-1.646-1.622-4.8-1.622h-2.86v3.444h4.098v1.804z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3c8edd9845b517916ae12efce52cdaef__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.CurrencyDashIcon = CurrencyDashIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyDashIcon);
exports.default = ForwardRef;
