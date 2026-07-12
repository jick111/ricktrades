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
const LabelPairedFileInvoiceDollarMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zM2 6.5c0 .281.219.5.5.5h2c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-2c-.281 0-.5.25-.5.5m0 2c0 .281.219.5.5.5h2c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-2c-.281 0-.5.25-.5.5m4 2.25c-.281 0-.5.25-.5.5v.563a2.3 2.3 0 0 0-.781.25c-.407.25-.719.656-.719 1.28 0 .563.313.938.688 1.157.343.219.75.344 1.093.438h.063c.375.124.687.218.906.374.188.094.219.22.219.344.031.219-.063.344-.219.438-.187.125-.469.187-.75.156-.375 0-.719-.125-1.125-.25-.094-.031-.156-.062-.219-.094-.281-.062-.562.063-.656.313-.062.281.063.562.313.656.062 0 .156.031.218.063.282.093.594.218.969.28v.532c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.531c.25-.032.531-.125.781-.282.407-.25.719-.687.719-1.28-.031-.594-.344-.97-.719-1.22-.343-.218-.781-.343-1.125-.437h-.031c-.406-.125-.687-.219-.906-.344-.188-.125-.219-.219-.219-.312 0-.188.063-.313.25-.406.188-.126.469-.188.719-.188.312.031.656.094 1 .188.281.062.562-.094.625-.376.062-.25-.094-.53-.344-.593a6 6 0 0 0-.75-.156v-.563c0-.25-.25-.5-.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '87e0f098da230b0e1f169a42da74695e__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileInvoiceDollarMdFillIcon);
exports.default = ForwardRef;
