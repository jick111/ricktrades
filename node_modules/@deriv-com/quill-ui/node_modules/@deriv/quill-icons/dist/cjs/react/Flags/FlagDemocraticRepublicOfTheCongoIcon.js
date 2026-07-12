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
exports.FlagDemocraticRepublicOfTheCongoIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagDemocraticRepublicOfTheCongoIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#007BFF', fillRule: 'evenodd', d: 'M2 0h15.99L0 10.387V2a2 2 0 0 1 2-2m1.308 4.366-.28 1.637 1.47-.773 1.469.772-.282-1.636 1.19-1.16-1.643-.237-.734-1.49-.735 1.49-1.643.237z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#007BFF', d: 'M22 16H6.277L24 5.768V14a2 2 0 0 1-2 2' }),
    React.createElement("path", { fill: '#F8D800', d: 'M0 10.387 17.99 0h2L0 11.541zM6.277 16h-2L24 4.613v1.155z' }),
    React.createElement("path", { fill: '#D00817', d: 'M0 11.541 19.99 0H22a2 2 0 0 1 2 2v2.613L4.278 16H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#FFE000', fillRule: 'evenodd', d: 'm4.498 5.23-1.47.773.28-1.637-1.188-1.16 1.643-.237.735-1.49.734 1.49 1.643.237-1.19 1.16.282 1.636', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagDemocraticRepublicOfTheCongoIcon = FlagDemocraticRepublicOfTheCongoIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagDemocraticRepublicOfTheCongoIcon);
exports.default = ForwardRef;
