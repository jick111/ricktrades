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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedWalletCirclePlusCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6.313C0 5.188.914 4.25 2.063 4.25h8.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937H7.78c.14.422.375.797.657 1.125H2.061A2.05 2.05 0 0 1 0 12.688zm2.25.75c0-.305.234-.563.563-.563h7.124c.938 0 1.735.656 1.97 1.523-.095 0-.188-.023-.282-.023-.305 0-.61.047-.89.094-.165-.258-.47-.469-.797-.469H2.811a.54.54 0 0 1-.562-.562m6 5.062c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m1.5 0c0 .21.164.375.375.375h1.125v1.125c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375V12.5h1.125a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H12v-1.125a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v1.125h-1.125a.385.385 0 0 0-.375.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ea75cbfa9c26e18a333138b302051c54__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCirclePlusCaptionBoldIcon);
exports.default = ForwardRef;
