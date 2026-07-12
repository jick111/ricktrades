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
const DerivDarkPositionsHistoryIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 96 96', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', d: 'M72 16H24a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8' }),
    React.createElement("path", { fill: '#323738', d: 'M72 20H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8' }),
    React.createElement("path", { fill: '#6E6E6E', d: 'm39.137 40.354.277.232 8 8a2 2 0 0 1-2.551 3.06l-.277-.232L40 46.828V66a2 2 0 1 1-4 0V46.828l-4.586 4.586a2 2 0 0 1-2.551.232l-.277-.232a2 2 0 0 1-.232-2.551l.232-.277 8-8a2 2 0 0 1 2.551-.232M58 40a2 2 0 0 1 2 2l-.004 19.168 4.59-4.582a2 2 0 1 1 2.828 2.828l-8 8a2 2 0 0 1-2.828 0l-8-8a2 2 0 1 1 2.828-2.828l4.582 4.582L56 42a2 2 0 0 1 2-2' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkPositionsHistoryIcon);
exports.default = ForwardRef;
