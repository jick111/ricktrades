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
exports.StandalonePasteFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePasteFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.25 6.5c.898 0 1.719.508 2.148 1.25h2.227c1.016 0 1.875.86 1.875 1.875v.625h-1.875a3.11 3.11 0 0 0-3.125 3.125V24H7.875A1.85 1.85 0 0 1 6 22.125v-12.5c0-1.016.82-1.875 1.875-1.875h2.188A2.53 2.53 0 0 1 12.25 6.5m4.375 5h4.844c.468 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328v8.594c0 1.055-.86 1.875-1.875 1.875h-7.5a1.85 1.85 0 0 1-1.875-1.875v-11.25c0-1.016.82-1.875 1.875-1.875M12.25 8.063a.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937' })));
exports.StandalonePasteFillIcon = StandalonePasteFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePasteFillIcon);
exports.default = ForwardRef;
