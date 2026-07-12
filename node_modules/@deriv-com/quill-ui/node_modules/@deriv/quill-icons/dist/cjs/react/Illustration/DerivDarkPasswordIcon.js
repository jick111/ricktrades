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
const DerivDarkPasswordIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', stroke: '#323738', d: 'M22 7.5H2A1.5 1.5 0 0 0 .5 9v6A1.5 1.5 0 0 0 2 16.5h20a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 22 7.5Z' }),
    React.createElement("path", { fill: '#6E6E6E', fillRule: 'evenodd', d: 'M3.295 12.118 2.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L4 12.698l-.528.802-.753-.508zm4 0L6.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L8 12.698l-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257zm4.795.268-.795-.268.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508-.528-.802-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257z', clipRule: 'evenodd' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkPasswordIcon);
exports.default = ForwardRef;
