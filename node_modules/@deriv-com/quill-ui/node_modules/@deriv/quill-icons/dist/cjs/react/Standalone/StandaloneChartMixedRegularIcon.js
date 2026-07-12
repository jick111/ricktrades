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
exports.StandaloneChartMixedRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartMixedRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M25.805 7.984a.58.58 0 0 1-.04.86l-6.874 6.25a.613.613 0 0 1-.86 0l-4.61-4.649-6.444 4.688a.584.584 0 0 1-.86-.117c-.234-.274-.156-.664.117-.899l6.875-5c.235-.156.586-.117.82.078l4.571 4.57 6.445-5.82a.58.58 0 0 1 .86.04M9.125 23.375v-2.5c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625M8.5 19c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-2.5c0-1.016.82-1.875 1.875-1.875m5.625-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm-2.5 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875zm7.5 6.25v-3.75c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625M18.5 17.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m5.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm-2.5 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875z' })));
exports.StandaloneChartMixedRegularIcon = StandaloneChartMixedRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartMixedRegularIcon);
exports.default = ForwardRef;
