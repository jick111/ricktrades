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
exports.FlagFrenchGuianaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagFrenchGuianaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#078930', d: 'M22 0H2C1.508 0 1.057.178.709.473l10.296 6.864.76-.11.734-1.489.735 1.49 1.643.237-1.19 1.16.097.564 9.507 6.338c.434-.366.709-.915.709-1.527V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#FCDD09', d: 'M2 16h20c.492 0 .943-.178 1.291-.473L13.784 9.19l.183 1.072-1.468-.773-1.47.774.28-1.638-1.188-1.16.884-.127L.71.473A2 2 0 0 0 0 2v12a2 2 0 0 0 2 2' }),
    React.createElement("path", { fill: '#DA121A', fillRule: 'evenodd', d: 'm12.5 9.488-1.47.774.28-1.638-1.189-1.16 1.643-.237.735-1.489.735 1.49 1.643.237-1.19 1.16.28 1.636', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagFrenchGuianaIcon = FlagFrenchGuianaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagFrenchGuianaIcon);
exports.default = ForwardRef;
