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
const DerivLightIcEmailSentIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 128', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#BBCCCE', d: 'M13 44.626v14.087l37.62 31.59 6.565-5.582 6.565-5.583 6.46 5.831 6.46 5.831L115 58.048V45.063a1.985 1.985 0 0 0-.94-1.688L66.11 13.602a4.02 4.02 0 0 0-4.23 0L14 42.93c-.612.35-.992.995-1 1.697' }),
    React.createElement("path", { fill: '#E1F4F3', d: 'M21 30.248v59.404h86V30.248a4 4 0 0 0-1.174-2.823A3.99 3.99 0 0 0 103 26.26H25c-2.21 0-4 1.784-4 3.988' }),
    React.createElement("path", { fill: '#84ABAE', d: 'M74.043 70.26h-9.644C52.791 70.26 46 62.97 46 52.39s7.062-18.13 18.4-18.13c10.56 0 17.6 6.344 17.6 16.213.029 6.908-3.322 11.018-8.551 11.018-3.3 0-5.552-1.65-5.735-4.075h-.227c-.431 2.437-2.715 4.163-5.28 3.99-4.04 0-7.07-3.08-7.07-8.98s3.03-8.981 7.07-8.981c2.207-.078 4.174 1.329 4.73 3.383h.227v-3.024h5.133v11.667c0 1.41.734 2.17 2.017 2.17 2.068 0 3.49-2.114 3.49-6.506v-1.22c0-7.415-5.558-11.877-13.36-11.877-8.625 0-14.132 5.64-14.132 13.527v1.65c-.044 7.895 5.463 13.21 14.088 13.21h9.643zm-6.886-15.508v-5.047c0-1.347-1.467-2.348-3.073-2.348a3.56 3.56 0 0 0-2.627.99 3.28 3.28 0 0 0-1.003 2.535v2.946a3.27 3.27 0 0 0 1 2.538 3.55 3.55 0 0 0 2.63.987c1.555.07 3.073-1.318 3.073-2.623z' }),
    React.createElement("path", { fill: '#84ABAE', d: 'M13 49.197v61.815A3.99 3.99 0 0 0 17 115h93.969c2.209 0 4-1.785 4-3.988V49.197L76.782 82.003 66.6 72.926a3.877 3.877 0 0 0-5.3 0l-10.122 9.042z' }),
    React.createElement("path", { fill: '#E1F4F3', fillRule: 'evenodd', d: 'm114.479 112.925-46.542-41.49-.006.004a5.873 5.873 0 0 0-7.968.007L13.51 112.96A4 4 0 0 0 17 115h.2l45.476-40.601.008-.008a1.884 1.884 0 0 1 2.572 0l.009.008L110.8 115h.169a4 4 0 0 0 3.51-2.075', clipRule: 'evenodd' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightIcEmailSentIcon);
exports.default = ForwardRef;
