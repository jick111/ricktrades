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
exports.FlagDjiboutiIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagDjiboutiIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#6AB2E7', d: 'M22 0H2A2 2 0 0 0 .709.473L12 8h12V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#12AD2B', d: 'M12 8 .709 15.527A2 2 0 0 1 2 16h20a2 2 0 0 0 2-2V8z' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M0 14V2C0 1.388.275.84.709.473L12 8 .709 15.527A2 2 0 0 1 0 14m2.723-4.121 1.461-.78 1.468.772-.28-1.636 1.199-1.152-1.652-.245-.735-1.49-.726 1.497-1.643.237 1.188 1.16z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#D7141A', fillRule: 'evenodd', d: 'm4.184 9.098-1.461.78.28-1.636-1.188-1.16 1.643-.237.726-1.497.735 1.49 1.652.245-1.199 1.152.28 1.636', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagDjiboutiIcon = FlagDjiboutiIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagDjiboutiIcon);
exports.default = ForwardRef;
