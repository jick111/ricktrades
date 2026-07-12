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
exports.LegacyArchive1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyArchive1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#75bb1cc80bd434accbc736b7da5d3be1__a)' },
        React.createElement("path", { fill: '#333', d: 'M13.382 0c.52 0 1 .27 1.273.706l.069.123 1.159 2.317a.5.5 0 0 1 .081.172l-.017-.042c.044.089.06.184.05.276.006.103.004.218.003.339V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3.891l-.001-.207q0-.07.004-.137A.5.5 0 0 1 .02 3.36l.016-.042a.5.5 0 0 1 .081-.172L1.277.829a1.5 1.5 0 0 1 1.2-.822L2.618 0zM15 4H1v11h14zm-7.046 8.998.021.001-.028-.002-.016-.003h-.002l-.034-.005a.5.5 0 0 1-.18-.078l-.017-.013-.04-.033-2.012-2.011a.5.5 0 0 1 .638-.765l.07.057L7.5 11.293V6.5a.5.5 0 0 1 .992-.09l.008.09v4.793l1.146-1.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-2.013 2.011-.019.017-.011.009.043-.037-.048.04-.04.029a.5.5 0 0 1-.194.072A1 1 0 0 1 8 13l-.069-.006zM13.382 1H2.618a.5.5 0 0 0-.398.197l-.05.08-.145.29-.392.784L1.31 3l13.381-.001-.86-1.723a.5.5 0 0 0-.355-.267z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '75bb1cc80bd434accbc736b7da5d3be1__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyArchive1pxIcon = LegacyArchive1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyArchive1pxIcon);
exports.default = ForwardRef;
