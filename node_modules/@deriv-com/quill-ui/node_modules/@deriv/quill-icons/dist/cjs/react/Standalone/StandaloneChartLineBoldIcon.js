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
exports.StandaloneChartLineBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartLineBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.875 8.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H8.813A2.8 2.8 0 0 1 6 22.438V8.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m16.602 4.414-5.352 5.312a.856.856 0 0 1-1.29 0l-3.085-3.086-3.086 3.086c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.289l3.75-3.75c.156-.195.39-.273.664-.273.234 0 .469.078.664.273l3.086 3.086 4.648-4.648c.352-.391.938-.391 1.329 0a.92.92 0 0 1 0 1.289' })));
exports.StandaloneChartLineBoldIcon = StandaloneChartLineBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartLineBoldIcon);
exports.default = ForwardRef;
