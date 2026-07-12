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
exports.FlagEquatorialGuineaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagEquatorialGuineaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#E32118', d: 'M0 14.014A2 2 0 0 0 2 16h20a2 2 0 0 0 2-2v-3H3.891L.71 15.527A2 2 0 0 1 0 14.014' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M24 11H3.891L6 8 3.891 5H24zM10 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5.5v-.5h-1V8a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0v1.5h1zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m1.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FFD900', fillRule: 'evenodd', d: 'M10 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#009432', fillRule: 'evenodd', d: 'M11 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#A46620', fillRule: 'evenodd', d: 'M11.5 7.5h1v2h-1z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#0073CE', d: 'M0 2v12c0 .612.275 1.16.709 1.527L6 8 .709.473A2 2 0 0 0 0 2' }),
    React.createElement("path", { fill: '#3E9A00', d: 'M22 0H2A2 2 0 0 0 .709.473L3.891 5H24V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagEquatorialGuineaIcon = FlagEquatorialGuineaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagEquatorialGuineaIcon);
exports.default = ForwardRef;
