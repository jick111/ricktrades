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
exports.MarketForexChfjpyIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketForexChfjpyIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#F44336', fillRule: 'evenodd', d: 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11.655 6.319h2.897c.228 0 .414.188.414.42v2.522c0 .232-.186.42-.414.42h-2.897v2.943c0 .232-.185.42-.414.42H10.76a.417.417 0 0 1-.414-.42v-2.942H7.448a.417.417 0 0 1-.414-.42v-2.523c0-.232.186-.42.414-.42h2.897V7.376c0-.232.185-.42.413-.42h2.483c.229 0 .414.188.414.42z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M16.552 10.319h-2.897V7.376a.417.417 0 0 0-.414-.42H10.76a.417.417 0 0 0-.414.42v2.943H7.448a.417.417 0 0 0-.414.42v2.522c0 .232.186.42.414.42h2.897v2.943c0 .232.185.42.413.42h2.483a.417.417 0 0 0 .414-.42v-2.943h2.897a.417.417 0 0 0 .414-.42v-2.522a.417.417 0 0 0-.414-.42' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M8 14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#ED293F', d: 'M24.5 20a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0' })));
exports.MarketForexChfjpyIcon = MarketForexChfjpyIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketForexChfjpyIcon);
exports.default = ForwardRef;
