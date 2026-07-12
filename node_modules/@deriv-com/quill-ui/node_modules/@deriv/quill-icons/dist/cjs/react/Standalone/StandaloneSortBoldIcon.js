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
exports.StandaloneSortBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSortBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.484 13.375h6.993L16 9.898zm4.375-5.234 5 5c.352.351.47.898.274 1.367a1.28 1.28 0 0 1-1.172.781H11a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l5-5a1.205 1.205 0 0 1 1.757 0m-4.375 11.484L16 23.141l3.477-3.516zm4.375 5.273a1.205 1.205 0 0 1-1.757 0l-5-5a1.26 1.26 0 0 1-.274-1.367A1.28 1.28 0 0 1 11 17.75h10c.469 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367z' })));
exports.StandaloneSortBoldIcon = StandaloneSortBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSortBoldIcon);
exports.default = ForwardRef;
