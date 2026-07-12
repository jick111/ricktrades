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
exports.FlagEthiopiaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagEthiopiaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#DA121A', d: 'M14.646 11c-.705.622-1.632 1-2.646 1a3.99 3.99 0 0 1-2.646-1H0v3a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3z' }),
    React.createElement("path", { fill: '#FCDD09', d: 'M14.646 11H24V5h-9.354A4 4 0 0 1 16 8a4 4 0 0 1-1.354 3M9.354 11A4 4 0 0 1 8 8a4 4 0 0 1 1.354-3H0v6z' }),
    React.createElement("path", { fill: '#0F47AF', fillRule: 'evenodd', d: 'M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-5.308 1.798 1.306-.687 1.306.686-.25-1.454 1.057-1.031-1.46-.21-.653-1.325-.653 1.324-1.46.211 1.056 1.031zm-.313-3.523.601.634.191-.186-.6-.634zm2.606.634.601-.634-.191-.186-.601.634zm1.123 1.68-.822-.299-.088.252.822.298zm-3.424-.299-.822.299.088.251.822-.298zm1.456 1.942-.013-.874-.267.007.013.874z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FCDD09', fillRule: 'evenodd', d: 'm11.998 9.111-1.306.687.249-1.455-1.056-1.031 1.46-.21.653-1.325.653 1.324 1.46.211-1.058 1.031.251 1.454', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FCDD09', fillRule: 'evenodd', d: 'm10.98 6.91-.601-.635.191-.186.601.634zM12.985 6.91l.601-.635-.191-.186-.601.634zM13.286 8.29l.822.299-.088.251-.822-.298zM10.684 8.29l-.822.299.088.251.822-.298zM12.127 9.358l.013.874-.267.007-.013-.874z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#078930', d: 'M22 0H2a2 2 0 0 0-2 2v3h9.354c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H24V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagEthiopiaIcon = FlagEthiopiaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagEthiopiaIcon);
exports.default = ForwardRef;
