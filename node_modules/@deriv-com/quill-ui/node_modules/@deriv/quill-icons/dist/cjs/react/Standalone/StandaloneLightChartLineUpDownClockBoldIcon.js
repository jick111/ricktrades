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
exports.StandaloneLightChartLineUpDownClockBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLightChartLineUpDownClockBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 8.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v13.75c0 .546.39.937.938.937h10.156c.234.703.625 1.328 1.093 1.875H6.313A2.8 2.8 0 0 1 3.5 22.438zm4.336 7.187 3.125-3.125c.351-.39.937-.39 1.328 0l2.461 2.46c1.406-1.444 2.852-2.89 4.297-4.335h-.86c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h3.125c.234 0 .468.117.664.273.156.196.273.43.273.665v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.86l-4.96 4.961c-.392.39-.977.39-1.33 0l-2.46-2.46-2.46 2.46c-.392.39-.977.39-1.33 0a.856.856 0 0 1 0-1.289m9.414 5c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m5-2.5v2.5c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H23.5v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625' })));
exports.StandaloneLightChartLineUpDownClockBoldIcon = StandaloneLightChartLineUpDownClockBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLightChartLineUpDownClockBoldIcon);
exports.default = ForwardRef;
