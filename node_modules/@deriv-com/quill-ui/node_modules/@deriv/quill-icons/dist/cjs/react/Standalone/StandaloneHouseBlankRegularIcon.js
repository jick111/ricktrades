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
exports.StandaloneHouseBlankRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneHouseBlankRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.57 6.656a.65.65 0 0 1 .82 0l10.626 9.375c.273.235.273.625.078.899-.235.273-.625.273-.899.039l-1.445-1.29v7.696a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125V15.68l-1.484 1.289c-.235.234-.664.234-.86-.04-.234-.273-.234-.663.04-.898zm-7.07 7.93v8.789c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-8.79l-7.5-6.6z' })));
exports.StandaloneHouseBlankRegularIcon = StandaloneHouseBlankRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneHouseBlankRegularIcon);
exports.default = ForwardRef;
